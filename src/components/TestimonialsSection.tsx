"use client";

import { Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Dr. Alora Vance and her team completely changed how I feel about going to the dentist. My 3D veneers look so natural, and the process was completely painless!",
    name: "Sophia Martinez",
    treatment: "Cosmetic Veneers Patient",
    initials: "SM",
  },
  {
    quote: "I was super nervous about getting dental implants after an old injury. The 3D scan procedure was seamless, and I healed in just a couple of days. 10/10 recommendation!",
    name: "Marcus Sterling",
    treatment: "3D Implant Patient",
    initials: "MS",
  },
  {
    quote: "The Invisalign treatment plan was executed perfectly. Being able to see my 3D smile design before starting gave me so much confidence.",
    name: "Elena Rostova",
    treatment: "Invisalign Patient",
    initials: "ER",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <Sparkles size={14} />
            <span>PATIENT STORIES</span>
          </div>
          <h2 className="section-title">
            Loved By Thousands Of <br />
            <span className="gold-text-accent">Happy Patients</span>
          </h2>
          <p className="section-description">
            Read real feedback from patients who entrusted their smiles to Alora Dental Care.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#cea656" color="#cea656" />
                ))}
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-author-box">
                <div className="author-avatar">{item.initials}</div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-treatment">{item.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
