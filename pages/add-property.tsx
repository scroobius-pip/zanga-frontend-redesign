import React, { useState } from "react";
import Layout from "../components/Layout";
import { Session, User } from "../types";
import { GetServerSideProps } from "next";
import getZangaSdk from "../functions/getZangaSdk";
import { getSession } from "next-auth/client";
import ImageKit from "imagekit-javascript";
import PropertyForm, { ReturnState } from '../components/PropertyForm';

interface Props {
  user?: User;
  token?: string;
}

const Page = ({ user, token }: Props) => {
  const [loading, setLoading] = useState(false);

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

  async function submit({ imageFiles, price, city, state, description, title, type, }: ReturnState) {
    try {
      setLoading(true)
      const sdk = getZangaSdk(token);
      const imageUrls = await uploadImages(imageFiles);
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

    } catch (error) {
      throw error;
    } finally {
      setLoading(false)
    }
  }



  return <Layout user={user}>
    <div
      className={`max-w-3xl m-auto mt-10 mb-24 ${loading ? "pointer-events-none opacity-50" : ""
        }`}
    >
      <h2 className="font-bold font-pop text-blue text-3xl mb-5">
        New Property
      </h2>
      <PropertyForm
        onSubmit={(state) => submit(state)}
      />
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
          const { me: { id, type } } = await sdk.me();
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
