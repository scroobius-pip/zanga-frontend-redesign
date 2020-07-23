import React from 'react'
import ImageUploading, { ImageListType } from "react-images-uploading";
import Button from './Button';

interface ImagePreviewProps {
    url: string
    onEdit: () => any
    onDelete: () => any
}

const ImagePreview = (props: ImagePreviewProps) => {
    return <div className='flex'>
        <img
            className=''
            src={props.url}
        />
        <div>

        </div>
    </div>
}

interface Props {
    onChange: (images: ImageListType) => any
}

export default (props: Props) => {
    return <ImageUploading
        onChange={(files) => {
            props.onChange(files)
            console.log(files)
        }}
        multiple
        maxNumber={10}
        acceptType={['jpg', 'png', 'jpeg']}
        maxFileSize={5 * 1024 * 1024}
    >
        {
            ({ imageList, onImageUpload, errors }) => {
                console.log(errors)
                const RenderErrors = ({ errors }) => {

                    return <div className='text-red'>
                        {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                        {errors.acceptType && <span>Your selected file type is not allowed</span>}
                        {errors.maxFileSize && <span>Selected file size exceed 5mb</span>}
                    </div>


                }

                return <div>
                    <Button icon='Add' variant='primary' onClick={onImageUpload} text='Upload Image' />
                    <div>
                        <div

                        >
                            {imageList.map(image => <ImagePreview
                                url={image.dataURL}
                                onEdit={image.onUpdate}
                                onDelete={image.onRemove}
                            />
                            )
                            }
                        </div>
                    </div>
                    {hasError(errors) && <RenderErrors errors={errors} />}
                </div>
            }
        }
    </ImageUploading>
}

function hasError(obj) {
    for (var key in obj) {
        if (obj[key] === true) return true
    }
    return false;
}