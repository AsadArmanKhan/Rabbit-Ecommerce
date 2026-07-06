import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 gap-1 flex items-center justify-end">
      <select
        name="sort"
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy")|| ""}
        className="border-2 p-2 rounded-md focus:outline-none "
      >
        <option value="Default">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  ); 
}
