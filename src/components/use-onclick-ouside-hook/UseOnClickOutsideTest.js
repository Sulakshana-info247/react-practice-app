import React, { useRef, useState } from "react";
import UseOutSideClick from "./UseOutSideClick";

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref= useRef();
  UseOutSideClick(ref,()=>setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1> This is a random content</h1>
          <p>
            Please click outside of this to close this. It wont close if you
            click inside of this box.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
