import React, { useState, useEffect } from "react";
import states from '../assets/states';
import { CostType } from '../generated/graphql';
import { User } from '../types';
import Button from './Button';
import Card from './Card';
import Dropdown from './Dropdown';
import { ErrorMessage } from './ErrorMessage';
import ImageSelect from './ImageSelect';
import InfoBar from './InfoBar';
import TextInput from './TextInput';

interface InitialState {
    title: string
    price: string
    type: CostType,
    state: string
    description: string
    city: string
    imageUrls: string[]

}

export interface ReturnState {
    title: string
    price: string
    type: CostType,
    state: string
    description: string
    city: string
    imageFiles: File[]

}

interface Props {
    user?: User
    onSubmit: (state: ReturnState) => any
    loading?: boolean
    initialState?: InitialState
}

export default ({ onSubmit, initialState, loading }: Props) => {

    const [title, setTitle] = useState<string>(initialState?.title);
    const [price, setPrice] = useState<string>(initialState?.price ?? "10");
    const [type, setType] = useState<CostType>(initialState?.type ?? CostType.Rent);
    const [state, setState] = useState<string>(initialState?.state ?? "FCT");
    const [city, setCity] = useState<string>(initialState?.city);
    const [description, setDescription] = useState<string>(initialState?.description);
    const [imageFiles, setImageFiles] = useState<Array<File>>();
    const [errorMessage, setErrorMessage] = useState("");
    const [valid, setValid] = useState(false);


    useEffect(() => {
        const isValid = title?.length <= 65 && title?.length >= 1 &&
            !(!price || !(parseFloat(price) > 0)) && city?.length >= 1 &&
            description?.length >= 1 && (!!initialState ? true : imageFiles?.length >= 1);
        setValid(isValid);
    }, [title, price, city, state, imageFiles]);





    const submit = async () => {
        try {
            if (valid)
                await onSubmit({ title, type, price, state, city, description, imageFiles, })

        } catch (error) {

            setErrorMessage("An error occurred, please try again later");
            throw error;
        }
    }


    return <Card noShadow>
        <div>
            <div className="">
                <TextInput
                    value={title}
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
                        value={price}
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
                        initialValue={type}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-5">
                <div className="md:pr-2" style={{ flex: 1 }}>
                    <TextInput
                        onChange={setCity}
                        label="City"
                        placeholder="City"
                        value={city}
                    />
                    <ErrorMessage
                        text="City should be specified"
                        show={city?.length < 1}
                    />
                </div>
                <div className="mt-5 md:mt-0" style={{ flex: 1 }}>
                    <Dropdown
                        initialValue={state}
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
                    value={description}
                    label="Description"
                    placeholder="Describe the property"
                />
                <ErrorMessage
                    text="Description should be specified"
                    show={description?.length < 1}
                />
            </div>
            {!initialState && <div className="mt-5">
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
                        setImageFiles(images.map((i) => i.file));
                    }}
                />
                <ErrorMessage
                    text="Images should be selected"
                    show={imageFiles?.length < 1}
                />
            </div>}
            <div className="mt-12 flex justify-end">
                <Button
                    text={`${loading ? "Please wait" : "Add/Update Property"}`}
                    variant="primary"
                    icon="Add"
                    disabled={loading || !valid}
                    onClick={submit}
                />
            </div>
            <ErrorMessage text={errorMessage} show={true} />
        </div>
    </Card>

}