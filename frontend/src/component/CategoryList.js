
import React from 'react';
 const CategoryList = ({ categories, onChange }) => {
  //console.log("categories:", categories)
  return (
    <select onChange={onChange}>
    <option value="">All</option>
      { categories.map((category) =>
        <option value={category.name} key={category.name}>
          {category.name}
        </option>
      )}
    </select>
  );
