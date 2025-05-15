import React, { useState } from "react";

export default function Template({ data }) {
  //the docs of the component say that the template fild of the gantt doesnt admit
  //components with hooks in them

  return (
    <>
      {data.type !== "milestone" ? (
        <>
          <div className=" text-right">{data.sysname || ""}</div>
          
        </>
      ) : (
        <div className="wx-text-out text-left">{data.text || ""}/{data.progress}%</div>
      )}
    </>
  );
}