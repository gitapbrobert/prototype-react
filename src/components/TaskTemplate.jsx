// import React, { useEffect, useState } from "react";

export default function Template({ data }) {
  //the docs of the component say that the template fild of the gantt doesnt admit
  //components with hooks in them
 
  
  return (
    <>
      {data.type !== "milestone" ? (
        <>
          <div className="custom-class ">{data.text || ""} ($ {String( data.price || 0)})</div>
          
        </>
      ) : (
        <div className="wx-text-out text-left">{data.text || ""}/{data.progress}%</div>
      )}
    </>
  );
}