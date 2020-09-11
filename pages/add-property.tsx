import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import states from "../assets/states";
import ImageSelect from "../components/ImageSelect";
import Button from "../components/Button";
import { Session, User } from "../types";
import { GetServerSideProps } from "next";
import getZangaSdk from "../functions/getZangaSdk";
import { getSession } from "next-auth/client";
import { Image, CostType } from "../generated/graphql";
import ImageKit from "imagekit-javascript";
import { useRouter } from "next/router";
import InfoBar from "../components/InfoBar";
import { ErrorMessage } from "../components/ErrorMessage";

interface Props {
  user?: User;
  token?: string;
}

const Page = ({ user, token }: Props) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState<string>();
  const [price, setPrice] = useState<string>("10");
  const [type, setType] = useState<CostType>(CostType.Rent);
  const [state, setState] = useState<string>("FCT");
  const [city, setCity] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [imagesFiles, setImagesFiles] = useState<Array<File>>();
  const [errorMessage, setErrorMessage] = useState("");
  const [valid, setValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const isValid = title?.length <= 65 && title?.length >= 1 &&
      !(!price || !(parseFloat(price) > 0)) && city?.length >= 1 &&
      description?.length >= 1 && imagesFiles?.length >= 1;
    setValid(isValid);
  }, [title, price, city, state, imagesFiles]);

  const imagekitUpload = (
    file: File,
  ): Promise<{ url: string; previewUrl: string }> => {
    return new Promise((resolve, reject) => {
      const imagekit = new ImageKit({
        publicKey: "public_fLIG6j3NBbHyQujCF+a3YOjpCrs=",
        urlEndpoint: "https://ik.imagekit.io/myzanga",
        authenticationEndpoint:
          `https://y-nu.now.sh/server?rand=${Math.random()}`,
      });

      imagekit.upload({
        file,
        fileName: file.name,
        tags: [user.name],
        folder: user.id,
      }, (err, result: { url: string; thumbnailUrl: string }) => {
        err
          ? reject("Unable to upload image")
          : resolve({ url: result.url, previewUrl: result.thumbnailUrl });
      });
    });
  };

  const uploadImages = async (
    files: File[],
  ): Promise<Array<{ url: string; previewUrl: string }>> => {
    const ImageUploadPromise = files.map(imagekitUpload);
    return (await Promise.all(ImageUploadPromise));
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const sdk = getZangaSdk(token);
      const imageUrls = await uploadImages(imagesFiles);
      const { createProperty } = await sdk.createProperty({
        input: {
          costType: type,
          costValue: parseFloat(price),
          description,
          featured: false,
          images: imageUrls,
          location: {
            city: capitalizeFirstLetter(city).replace(/[^A-Za-z0-9]/g, ""),
            state,
          },
          title,
        },
      });
      if (!createProperty?.length) {
        throw "Unable to upload";
      }
      // router.replace('/dashboard')
      window.location.replace("/dashboard");
      setLoading(false);
    } catch (error) {
      //   console.log(error);
      setLoading(false);
      setErrorMessage("An error occurred, please try again later");
      throw error;
    }
  };

  return <Layout user={user}>
    <div
      className={`max-w-3xl m-auto mt-10 mb-24 ${
        loading ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <h2 className="font-bold font-pop text-blue text-3xl mb-5">
        New Property
      </h2>
      <Card noShadow>
        <div>
          <div className="">
            <TextInput
              onChange={setTitle}
              label="Title"
              placeholder="Title"
            />
            <ErrorMessage
              text="Title should be less than 65 characters"
              show={title?.length > 65}
            />
            <ErrorMessage
              text="Title should be specified"
              show={title?.length < 1}
            />
          </div>
          <div className="flex flex-col md:flex-row mt-5">
            <div className=" md:pr-2" style={{ flex: 2 }}>
              <TextInput
                onChange={setPrice}
                type="currency"
                label="Price"
                placeholder="Price"
              />
              <ErrorMessage
                text="Price should be specified"
                show={!price || !(parseFloat(price) > 0)}
              />
            </div>
            <div className="mt-5 md:mt-0" style={{ flex: 1 }}>
              <Dropdown
                onChange={(value) => setType(CostType[value])}
                label="Type"
                options={[
                  { label: "Rent", value: "Rent" },
                  { label: "Sale", value: "Sale" },
                ]}
                initialValue="Rent"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5">
            <div className="md:pr-2" style={{ flex: 1 }}>
              <TextInput
                onChange={setCity}
                label="City"
                placeholder="City"
              />
              <ErrorMessage
                text="City should be specified"
                show={city?.length < 1}
              />
            </div>
            <div className="mt-5 md:mt-0" style={{ flex: 1 }}>
              <Dropdown
                initialValue={"FCT"}
                label="State"
                onChange={setState}
                options={states.map((s) => ({ value: s, label: s }))}
              />
            </div>
          </div>
          <div className="mt-5">
            <TextInput
              onChange={setDescription}
              textArea
              label="Description"
              placeholder="Describe the property"
            />
            <ErrorMessage
              text="Description should be specified"
              show={description?.length < 1}
            />
          </div>
          <div className="mt-5">
            <label className="font-text block  font-pop text-blue mb-2">
              Images
            </label>
            <InfoBar
              icon="Info"
              text="First image chosen will be the main display image."
              className="text-blue font-semibold opacity-75 mb-5"
            />
            <ImageSelect
              onChange={(images) => {
                setImagesFiles(images.map((i) => i.file));
              }}
            />
            <ErrorMessage
              text="Images should be selected"
              show={imagesFiles?.length < 1}
            />
          </div>
          <div className="mt-12 flex justify-end">
            <Button
              text={`${loading ? "Please wait" : "Add Property"}`}
              variant="primary"
              icon="Add"
              disabled={loading || !valid}
              onClick={onSubmit}
            />
          </div>
          <ErrorMessage text={errorMessage} show={true} />
        </div>
      </Card>
    </div>
  </Layout>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const session = await getSession(context) as Session;
  const sdk = getZangaSdk(session?.token);

  return {
    props: {
      user: session
        ? await (async (): Promise<User> => {
          const { me: { id, name, type } } = await sdk.me();
          return {
            name: session.user.name,
            id,
            image: session.user.image,
            type,
          };
        })()
        : null,
      token: session?.token ?? "",
    },
  };
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default Page;
