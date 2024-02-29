import React from "react";
import useFetchCustomHook from "./useFetchCustomHook";

const UseFetchHookTest = () => {
    const {data,error,pending} = useFetchCustomHook("https://dummyjson.com/products",{})
    console.log(error, data, pending);
  return (
    <div>
      <h1>Use Custom Fetch Hook</h1>
      {
            pending ? <h3>Pending! Please Wait...</h3> : null
      }
      {
            error ? <h3>{error}</h3> : null
      }
      {
        data && data.products && data.products.length ?
        data.products.map((productItem)=><p key={productItem.key}>{productItem.title}</p>)
        : null
      }
    </div>
  );
};

export default UseFetchHookTest;
