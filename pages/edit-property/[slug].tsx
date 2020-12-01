import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Property, Session, User } from "../../types";
import { GetServerSideProps } from "next";
import getZangaSdk from "../../functions/getZangaSdk";
import { useSession } from "next-auth/client";
import ImageKit from "imagekit-javascript";
import PropertyForm, { ReturnState } from '../../components/PropertyForm';
import { useRouter } from 'next/router';
import { getMe } from '../../functions/getMe';

interface Props {
    property: Property

}

const Page = ({ property }: Props) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const [session, sessionLoading] = useSession()
    const [user, setUser] = useState<User>()

    useEffect(() => {
        if (!property) {
            router.replace('/add-property')
        }

    }, [])

    useEffect(() => {

        const sdk = getZangaSdk(session?.token)

        if (!loading && !session) {
            router.replace('/')
            return
        }

        getMe(sdk, session).then(me => {
            setUser(me)
        }).catch(err => {
            console.log(err)
        })


    }, [sessionLoading, session])

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
            const sdk = getZangaSdk(session?.token);
            const { updateProperty } = await sdk.updateProperty({
                input: {
                    costType: type,
                    costValue: parseFloat(price),
                    description,
                    featured: false,
                    location: {
                        city: capitalizeFirstLetter(city).replace(/[^A-Za-z0-9]/g, ""),
                        state,
                    },
                    title,
                    propertySlug: property.slug
                }
            })

            if (!updateProperty) {
                throw 'Unable to Update'
            }

            router.replace('/dashboard')
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
            <h2 className="font-bold font-pop text-blue text-3xl mb-5 max-w-xs">
                Edit Property
            </h2>
            <PropertyForm
                onSubmit={(state) => submit(state)}
                initialState={{
                    city: property?.city,
                    description: property?.description,
                    imageUrls: [],
                    price: property?.costValue.toString(),
                    state: property?.state,
                    type: property?.costType,
                    title: property?.title
                }}
            />
        </div>
    </Layout>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
    context,
) => {

    const sdk = getZangaSdk();
    const { slug } = context.query as { slug?: string };


    const property = slug ? (await (sdk.property({ slug }))).property : null;


    return {
        props: {

            property: property ? {
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
            } : null,
        },
    };
};


function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default Page;
