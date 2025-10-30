import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./FlowField.css";

let particles = [];
const numParticles = 1500;
const noiseScale = 0.01;
const speed = 0.5;

const Sketch = (p5) => {
  p5.setup = () => {
    // 1. Create canvas to fill the entire window
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    for (let i = 0; i < numParticles; i++) {
      particles.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)));
    }
    p5.stroke(255, 255, 255, 20); // Faint white
    p5.strokeWeight(2);
  };

  p5.draw = () => {
    p5.clear();
    
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      let n = p5.noise(p.x * noiseScale, p.y * noiseScale, p5.frameCount * 0.001);
      let angle = p5.map(n, 0, 1, 0, p5.TWO_PI * 2);
      
      let force = p5.constructor.Vector.fromAngle(angle);
      force.mult(speed);
      p.add(force);

      if (p.x > p5.width) p.x = 0;
      if (p.x < 0) p.x = p5.width;
      if (p.y > p5.height) p.y = 0;
      if (p.y < 0) p.y = p5.height;

      p5.point(p.x, p.y);
    }
  };

  // 2. Resize canvas if window is resized
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};

const FlowField = () => (
  <div className="flow-field-container">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FlowField;