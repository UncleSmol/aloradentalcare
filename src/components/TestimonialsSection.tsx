"use client";

import { Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Dr. Vance and her team completely changed how I feel about going to the dentist. My porcelain veneers look so natural, and the entire process was completely painless!",
    name: "Sophia Martinez",
    treatment: "Cosmetic Veneers Patient",
    initials: "SM",
  },
  {
    quote: "I was super nervous about getting a dental implant after breaking a tooth. The consultation was thorough, the procedure was smooth, and I healed quickly. 10/10 recommendation!",
    name: "Marcus Sterling",
    treatment: "Dental Implant Patient",
    initials: "MS",
  },
  {
    quote: "The clear aligner treatment plan was executed perfectly. Being able to get gentle, professional care in Reyno Ridge Centre gave me so much confidence.",
    name: "Elena Rostova",
    treatment: "Clear Aligner Patient",
    initials: "ER",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Loved By Families Across <br />
            <span className="gold-text-accent">eMalahleni</span>
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
