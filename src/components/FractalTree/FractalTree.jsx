import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { motion } from "framer-motion";
import "./FractalTree.css"; // We'll create this next

let angle;

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(500, 300); // Made canvas larger
    angle = p5.PI / 4;
  };

  p5.draw = () => {
    p5.clear(); // Use clear() for a transparent background
    p5.stroke(255, 255, 255, 150); // Translucent white
    p5.translate(250, p5.height); // Centered at the bottom
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle
    branch(100);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <motion.div
    className="fractal-tree-container"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    <ReactP5Wrapper sketch={Sketch} />
  </motion.div>
);

export default FractalTree;