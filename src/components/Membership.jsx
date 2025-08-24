import React from "react";
import "./Membership.css";

export default function Membership() {
  const plans = [
    { name: "Basic", price: "₹999/month", benefits: ["Gym Access", "Locker"] },
    { name: "Premium", price: "₹1499/month", benefits: ["Gym + Classes", "Free Diet Plan"] },
    { name: "VIP", price: "₹2499/month", benefits: ["All Access", "Personal Trainer"] }
  ];

  return (
    <section className="membership" id="membership">
      <h2>Membership Plans</h2>
      <div className="plan-list">
        {plans.map((p) => (
          <div className="plan-card" key={p.name}>
            <h3>{p.name}</h3>
            <h4>{p.price}</h4>
            <ul>
              {p.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <button>Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
