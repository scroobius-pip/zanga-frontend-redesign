import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Button from "./Button";

interface ImagePreviewProps {
  url: string;
  onEdit: () => any;
  onDelete: () => any;
}

const ImagePreview = (props: ImagePreviewProps) => {
  return <div className="max-w-xs w-full ">
    <img
      className="w-full"
      src={props.url}
    />
    <div className="flex flex-row justify-end w-full">
      <Button
        text=""
        className="w-full"
        icon="Edit"
        onClick={props.onEdit}
        variant="secondary"
      />
      <Button
        text=""
        className="w-full"
        icon="Delete"
        onClick={props.onDelete}
        variant="secondary"
      />
    </div>
  </div>;
};

interface Props {
  onChange: (images: ImageListType) => any;
}

export default (props: Props) => {
  return <ImageUploading
    onChange={(files) => {
      props.onChange(files);
      console.log(files);
    }}
    multiple
    maxNumber={10}
    acceptType={["jpg", "png", "jpeg", "webp"]}
    maxFileSize={5 * 1024 * 1024}
  >
    {({ imageList, onImageUpload, errors }) => {
      console.log(errors);
      const RenderErrors = ({ errors }) => {
        return <div className="text-red">
          {errors.maxNumber && <span>Number of selected images exceed 10</span>}
          {errors.acceptType &&
            <span>Your selected file type is not allowed</span>}
          {errors.maxFileSize && <span>Selected file size exceed 5mb</span>}
        </div>;
      };

      return <div>
        <div>
          <Button
            icon="Add"
            variant="secondary"
            onClick={onImageUpload}
            text="Upload Image"
          />
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5"
          >
            {imageList.map((image) =>
              <ImagePreview
                key={image.key}
                url={image.dataURL}
                onEdit={image.onUpdate}
                onDelete={image.onRemove}
              />
            )}
          </div>
        </div>
        {hasError(errors) && <RenderErrors errors={errors} />}
      </div>;
    }}
  </ImageUploading>;
};

function hasError(obj) {
  for (var key in obj) {
    if (obj[key] === true) return true;
  }
  return false;
}
