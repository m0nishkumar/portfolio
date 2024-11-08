import { useRef, useEffect } from "react";

/**
 * Represents a drawing canvas that creates trails as the user moves the mouse,
 * which disappear 5 seconds after the last movement.
 */

const Draw = () => {
  const canvasRef = useRef(null);
  const lastPositionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const startDrawing = (e) => {
      ctx.lineWidth = 0.2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#fff";
      ctx.globalAlpha = 1;

      const { pageX, pageY } = e;

      // Start a new path for each movement to prevent old paths from persisting
      ctx.beginPath();
      if (lastPositionRef.current) {
        const { x, y } = lastPositionRef.current;
        ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
        ctx.lineTo(pageX - canvas.offsetLeft, pageY - canvas.offsetTop);
        ctx.stroke();
      }
      ctx.closePath();

      // Update the last position
      lastPositionRef.current = { x: pageX, y: pageY };

      // Reset the timer on each movement
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 3000);
    };

    // Attach event listener
    canvas.addEventListener("mousemove", startDrawing);

    // Clean up on unmount
    return () => {
      canvas.removeEventListener("mousemove", startDrawing);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 100, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight - 100}
    />
  );
};

export default Draw;
