import React, { useRef } from "react";
import useFetchCustomHook from "../use-custom-hook/useFetchCustomHook";

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetchCustomHook(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  if (error) {
    return <h1>Error Occured! Please try again ..</h1>;
  }
  if (pending) {
    return <h1>Loading !! Please wait..</h1>;
  }
  

  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior : "smooth"})
  }

  return (
    <div>
      <h1>Scrool to Top and Bottom Feature</h1>
      <h3>This is top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h3> This is the bottom of the page.</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
