import React from "react";
import Button from "./Button";
import { CostType } from "../generated/graphql";
import NumberFormat from "react-number-format";

export interface Props {
  title?: string;
  slug?: string;
  image?: string;
  price?: number;
  priceType?: CostType;
  description?: string;
  loading?: boolean
}

export default (
  { title, price, description, image, slug, priceType,loading }: Props,
) => {
  return <a
    href={"/property/" + slug}
    className={`h-full   overflow-hidden bg-white ${loading&&' shadow-none'} shadow-xl w-full group animate-pulse  text-center `}
  >
    <div className={`duration-150  shadow-lg opacity-75 hover:opacity-100 relative ${loading&&'animate-pulse shadow-none'}`}>

      <div>

        <div
          className="w-full  "
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '80%',
              backgroundPosition: 'center',
            backgroundImage: `url(${(image??'').replace(
              "tr:n-media_library_thumbnail",
              "tr:n-thumbnail"
            )})`

          }}
        // alt={title}
        // src={}
        >
          <a  href={"/property/" + slug}>
            <Button
              className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 duration-200"
              variant="secondary"
              onClick={() => { }}
              text="View"
              preventDefault={false}
              icon="Right"
            />
          </a>
        </div>
      </div>


    </div>

    <div className="bg-white px-10 py-6">
      <div className="font-pop text-blue truncate font-bold text-xl mb-2">{title}</div>
      <div className="h-10 overflow-hidden">
        <p className="font-pop text-blue truncate text-base">{description}</p>
      </div>
      <h5 className="font-pop text-xl text-blue">
        {!loading&&<NumberFormat
          displayType="text"
          value={price}
          prefix="₦"
          isNumericString
          thousandSeparator=","
          decimalSeparator=""
          suffix={CostType[priceType] === CostType.Rent ? "/yr" : ""}
        />}
      </h5>
    </div>
  </a>
};
