import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Icons from "../../icons";
import Button from "../../components/Button";
import PropertyDescription from "../../components/PropertyDescription";
import Lightbox from "react-image-lightbox";
import { ShareLinkModal } from "../../components/Modals";
import { GetStaticProps, GetServerSideProps } from "next";
import getZangaSdk from "../../functions/getZangaSdk";
import { CostType } from "../../generated/graphql";
import { getSession } from "next-auth/client";
import { parseCookies, setCookie } from "nookies";
import { Property, User, Session } from "../../types";
import Head from "next/head";
import NumberFormat from "react-number-format";

interface Props {
  property: Property;
  user?: User;
}

const Page = (
  {
    property: {
      images,
      title,
      bounty,
      city,
      costType,
      costValue: _costValue,
      owner,
      state,
      id,
      remainingExpense,
      description,
      slug,
    },
    user,
  }: Props,
) => {
  const CostValue = <NumberFormat
    displayType="text"
    value={_costValue}
    prefix="₦"
    isNumericString
    thousandSeparator=","
    decimalSeparator=""
    suffix={CostType[costType] === CostType.Rent ? "/yr" : ""}
  />;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);
  const [shareLinkModalVisible, setShareLinkModalVisible] = useState(false);
  const [agentInfo, setAgentInfo] = useState(false);

  return <Layout user={user}>
    <>
      <Head>
        <title>Zanga - {title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://myzanga.com/property/${slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={images[0].url} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://myzanga.com/property/${slug}`}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={images[0].url} />
      </Head>
      {lightBoxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setLightBoxIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
      <ShareLinkModal
        bounty={`₦${bounty}/share`}
        close={() => setShareLinkModalVisible(false)}
        title={title}
        url={`www.myzanga.com/property/${slug}?ref=${user?.id}`}
        visible={shareLinkModalVisible}
      />
      <section className="my-10 max-w-6xl m-auto">
        <div className="mb-8">
          <a className="font-pop text-blue  mb-5 " href="/properties">
            <Button
              preventDefault={false}
              onClick={() => { }}
              text="All properties"
              variant="secondary"
              icon="Right"
            />
          </a>
        </div>
        {/* <div className='mb-8'>
                    <a className='font-pop text-blue opacity-50 mb-5 hover:opacity-100' href="/properties">/properties</a>
                </div> */}

        <Card noShadow>
          <div>
            <div className="w-full justify-end flex mb-5">
              <div className="text-right">
                <Button
                  className="font-light block"
                  icon="Share"
                  variant="secondary"
                  onClick={() => {
                    if (user?.id) {
                      setShareLinkModalVisible(true);
                    } else {
                      window.location.replace("/earn-login");
                    }
                  }}
                  text={`₦${bounty}/share`}
                />
                <div className="text-red font-bold text-sm">
                  Remaining ₦{remainingExpense}
                </div>
              </div>
            </div>
            <div className="font-pop opacity-75 text-blue flex items-center">
              <Icons.Location className="fill-current  mr-2 h-4 w-4" />
              <span>{`${city.trim()}, ${state.trim()}`}</span>
            </div>
            <div>
              <h1 className="font-pop text-blue text-2xl font-semibold">
                {title}
              </h1>
              <h3 className="font-pop text-xl text-blue">
                {costType} @ {CostValue}
              </h3>
            </div>
            <div className="mt-5">
              <div
                className=" bg-cover relative   bg-no-repeat -mx-10 h-64"
                style={{
                  backgroundImage:
                    `linear-gradient(#23436182, #23436182), url(${images[0].url
                    })`,
                  height: 500,
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{ bottom: "2.5rem", right: "2.5rem" }}
                  className="absolute"
                >
                  <Button
                    variant="secondary"
                    icon="Eye"
                    onClick={() => setLightBoxIsOpen(true)}
                    text={`Photos (${images.length})`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-pop text-xl font-bold text-blue">
                Description
              </h4>
              <p className="font-pop whitespace-pre-wrap text-blue mt-1">
                {/* <PropertyDescription
                                description={description}
                            /> */}
                {description.trim()}
              </p>
            </div>
            <div style={{ maxWidth: "15rem" }} className=" ml-auto mt-10">
              <Button
                variant="primary"
                className="w-full"
                icon="Phone"
                onClick={() => setAgentInfo(true)}
                text="Contact Agent"
              />
              {agentInfo && <div className="bg-grey text-center p-2 w-full">
                <h5>{owner.name}</h5>
                <a
                  className="font-pop text-blue font-bold"
                  href={`tel:${owner.phone}`}
                >
                  {owner.phone}
                </a>
              </div>}
            </div>
          </div>
        </Card>
      </section>
    </>
  </Layout>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const session = await getSession(context) as Session;
  const sdk = getZangaSdk(session?.token);
  const cookies = parseCookies(context);

  const { slug, ref } = context.query as { slug: string; ref: string };

  const property = (await (sdk.property({ slug }))).property;
  
  if (!cookies.viewed) {
    setCookie(context, "viewed", "true", {
      path: "/property/" + context.params.slug,
      httpOnly: true,
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    await sdk.incrementPropertyView(
      { referrerId: ref, propertyId: property.id },
    );
  }
  return {
    props: {
      property: {
        bounty: property.bounty,
        costType: property.costType,
        costValue: property.costValue,
        description: property.description,
        expense: property.expense,
        images: property.images,
        owner: {
          name: property.owner.name,
          phone: property.owner.phone,
        },
        id: property.id,
        remainingExpense: property.remainingExpense,
        slug: property.slug,
        state: property.state,
        city: property.city,
        title: property.title,
        visits: property.visits,
        featured: property.featured,
        // featured:result.
      },
      session,
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
    },
  };
};

export default Page;
