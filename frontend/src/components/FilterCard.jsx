import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hydrabad", "Pune", "Mumbar"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developoer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40K", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-5 rounded-md">
      <h1 className="font-semibold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-semibold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
