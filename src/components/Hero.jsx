import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Transform Your Body,<br />Transform Your Life</h1>
        <p>Join FitLife Gym today and start your fitness journey.</p>
        <div>
          <button className="btn-primary">Join Now</button>
          <button className="btn-secondary">View Classes</button>
        </div>
      </div>
    </section>
  );
}
