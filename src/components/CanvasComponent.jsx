import React from "react";

const CanvasComponent = ({ zIndex, dataId, width, height }) => {
  return (
    <canvas
      className="select-none tap-highlight-transparent absolute outline-none"
      style={{
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        zIndex,
        width,
        height,
      }}
      data-id={dataId}
      width={width}
      height={height}
    ></canvas>
  );
};

export default CanvasComponent;
