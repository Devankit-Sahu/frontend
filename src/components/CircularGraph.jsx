import React, { useRef, useEffect, useState } from "react";

const CircularGraph = () => {
  const canvasRef = useRef(null);
  const [medicineDots, setMedicineDots] = useState([
    { x: 150, y: 50, name: "Med A" },
    { x: 200, y: 100, name: "Med B" },
    { x: 150, y: 150, name: "Med C" },
    { x: 100, y: 100, name: "Med D" },
    { x: 185, y: 55, name: "Med E" },
  ]);
  const [draggedDot, setDraggedDot] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const drawCanvas = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Coordinates of the central red dot
      const centralDot = { x: 150, y: 100, name: "disease" };
      const redDotSize = 10;

      // Draw central red triangle
      context.fillStyle = "red";
      context.beginPath();
      context.moveTo(centralDot.x, centralDot.y - redDotSize);
      context.lineTo(centralDot.x + redDotSize, centralDot.y + redDotSize);
      context.lineTo(centralDot.x - redDotSize, centralDot.y + redDotSize);
      context.closePath();
      context.fill();

      // Display disease name above the central red dot
      context.fillStyle = "black";
      context.font = "10px Arial";
      context.fillText(
        centralDot.name,
        centralDot.x - redDotSize,
        centralDot.y - redDotSize - 5
      );

      // Draw lines connecting the central red dot to green dots
      context.strokeStyle = "gray";
      medicineDots.forEach((dot) => {
        context.beginPath();
        context.moveTo(centralDot.x, centralDot.y);
        context.lineTo(dot.x, dot.y);
        context.stroke();

        // Draw green rhombus
        context.fillStyle = "green";
        context.beginPath();
        context.moveTo(dot.x, dot.y - 8);
        context.lineTo(dot.x + 8, dot.y);
        context.lineTo(dot.x, dot.y + 8);
        context.lineTo(dot.x - 8, dot.y);
        context.closePath();
        context.fill();

        // Display medicine names above the green dots
        context.fillStyle = "black";
        context.font = "10px Arial";
        context.fillText(dot.name, dot.x - 8, dot.y - 8 - 5);
      });
    };

    drawCanvas();
  }, [medicineDots]);

  const handleMouseDown = (e, dot) => {
    setDraggedDot(dot);
  };

  const handleMouseMove = (e) => {
    if (draggedDot) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      setMedicineDots((prevDots) =>
        prevDots.map((dot) =>
          dot === draggedDot ? { ...dot, x: mouseX, y: mouseY } : dot
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggedDot(false);
  };

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={"350px"} // Adjust the canvas size as needed
        height={"200px"}
        style={{ border: "1px solid #000" }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
    </div>
  );
};

export default CircularGraph;
