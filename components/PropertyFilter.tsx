import React, { useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import Button from "./Button";
import states from "../assets/states";
import { CostType } from "../generated/graphql";

export interface Filters {
  state: string;
  budget: string | number;
  type: CostType;
}

interface Props {
  initialFilters?: Filters;
}

export default (props: Props) => {
  const [filters, setFilters] = useState<Filters>(
    props.initialFilters || {
      state: "FCT",
      type: CostType.Sale,
      budget: "",
    },
  );

  return <Card noShadow className="">
    <>
      <div
        className=" w-full mb-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5"
      >
        <div className="w-full">
          <Dropdown
            initialValue={filters.state}
            label="Location"
            onChange={(state) => {
              setFilters({ ...filters, state });
            }}
            options={states.map((s) => ({ value: s, label: s }))}
          />
        </div>
        <div className="w-full ">
          <Dropdown
            initialValue={filters.type}
            label="Type"
            onChange={(type) => {
              setFilters({ ...filters, type: CostType[type] });
            }}
            options={[
              { label: "Sale", value: "Sale" },
              { label: "Rent", value: "Rent" },
            ]}
          />
        </div>
        <div className="w-full">
          <TextInput
            value={filters.budget}
            type="currency"
            onChange={(budget) => {
              setFilters({ ...filters, budget });
            }}
            label="Budget"
          />
        </div>
        <div className="flex items-end ">
          <a
            href={`/properties?state=${filters.state}&type=${filters.type}&budget=${filters
              .budget ?? 0}`}
          >
            <Button
              preventDefault={false}
              variant="primary"
              text="Search"
              icon="Search"
              onClick={() => {}}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-end">
      </div>
    </>
  </Card>;
};
