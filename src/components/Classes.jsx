import React from "react";
import "./Classes.css";

export default function Classes() {
  const programs = [
    { name: "Yoga", img: "/images/yoga.jpg" },
    { name: "Cardio", img: "https://tse3.mm.bing.net/th/id/OIP.vOXZVWMg5uS9ZR0galc40QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Weight Training", img: "https://cdn8.dissolve.com/p/D187_254_012/D187_254_012_1200.jpg" },
    { name: "Zumba", img: "https://www.verywellfit.com/thmb/SaUyT2h2ujEDx4zCAU0ilFclWqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4688722-GettyImages-950806258-06e1e050ab184f3694fd96017c9a42ee.jpg" }
  ];

  return (
    <section className="classes" id="classes">
      <h2>Our Classes</h2>
      <div className="class-list">
        {programs.map((p) => (
          <div className="class-card" key={p.name}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
