import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { motion } from "framer-motion";
import "./LorenzAttractor.css"; // CSS for centering

let x = 0.01;
let y = 0;
let z = 0;

// Lorenz Attractor parameters
const a = 10;
const b = 28;
const c = 8.0 / 3.0;
const dt = 0.01; // The time step

let points = [];

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(500, 300, p5.WEBGL); // Use the 3D WEBGL renderer
    p5.colorMode(p5.HSB); // Use HSB for easy color cycling
  };

  p5.draw = () => {
    p5.background("transparent"); // Transparent background

    // Calculate the next point in the sequence
    let dx = a * (y - x) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;

    x += dx;
    y += dy;
    z += dz;

    // Add the new point to our array
    points.push(p5.createVector(x, y, z));

    // To keep it fast, only draw the last 2000 points
    if (points.length > 2000) {
      points.shift(); // Remove the oldest point
    }

    // --- Draw the shape ---
    p5.noFill();
    p5.scale(4); // Scale the whole shape up
    p5.strokeWeight(1.5);
    
    // Slowly rotate the camera around the Y-axis
    p5.rotateY(p5.frameCount * 0.003);

    // Draw the line by connecting all vertices
    p5.beginShape();
    for (let i = 0; i < points.length; i++) {
      let p = points[i];
      // Map the point's position in the array to a color
      // Creates a beautiful rainbow "tail" effect
      let hue = p5.map(i, 0, points.length, 0, 360);
      p5.stroke(hue, 90, 90, 0.7); // (Hue, Saturation, Brightness, Alpha)
      p5.vertex(p.x, p.y, p.z);
    }
    p5.endShape();
  };
};

const LorenzAttractor = () => (
  <motion.div
    className="lorenz-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.0 }}
  >
    <ReactP5Wrapper sketch={Sketch} />
  </motion.div>
);

export default LorenzAttractor;