import React, { useState } from "react";

export default function TaskTemplate({ data }) {
  const [clicked, setClicked] = useState(data.clicked);

  function doClick(ev) {
    ev.stopPropagation();
    setClicked(!clicked);
    // Handle custom dispatch logic here
    // Example: props.onAction({ action: "custom-click", data: { clicked: !clicked, id: data.id } });
  }

  return (
    <>
      {data.type !== "milestone" ? (
        <>
          <div className="wx-text-out text-right">{data.text || ""}</div>
          <button onClick={doClick}>
            {clicked ? "Was clicked" : "Click Me"}
          </button>
        </>
      ) : (
        <div className="wx-text-out text-left">{data.text || ""}</div>
      )}
    </>
  );
}