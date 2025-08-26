import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At FitLife Gym, we believe fitness is a lifestyle. Our world-class
          trainers and state-of-the-art equipment help you achieve your fitness
          goals faster and safer.
        </p>
      </div>
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.MRqRaB6anbdGGXgxGwh9NQHaEl?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Gym"
      />
    </section>
  );
}
