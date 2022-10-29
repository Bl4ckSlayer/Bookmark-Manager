import React from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const CategoryData = () => {
  const stored = JSON.parse(localStorage.getItem("fakeData"));

  console.log(stored);

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="row row-cols-1 p-5">
          {stored?.map((item) => (
            <SingleCategory key={item} item={item}></SingleCategory>
          ))}
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6"></div>
    </div>
  );
};

export default CategoryData;
