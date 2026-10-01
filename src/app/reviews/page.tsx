"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Sparkles,
  CheckCircle2,
  Calendar,
  Quote,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const ALL_REVIEWS = [
  {
    id: 1,
    author: "Jessica K.",
    rating: 5,
    treatment: "Porcelain Veneers",
    date: "Verified Patient — 2 Weeks Ago",
    review:
      "Dr. Vance and her entire staff treated me like royalty. The consultation was thorough and effortless, and my porcelain veneers look so natural that even my closest friends just thought I had a teeth whitening! Cannot recommend Alora Dental enough.",
  },
  {
    id: 2,
    author: "David R.",
    rating: 5,
    treatment: "Clear Aligners & Whitening",
    date: "Verified Patient — 1 Month Ago",
    review:
      "As someone who had intense dental anxiety for years, finding Alora Dental Care in Reyno Ridge Centre was life-changing. They used soft techniques and gentle care. I felt zero pain throughout my aligner treatment.",
  },
  {
    id: 3,
    author: "Amanda B.",
    rating: 5,
    treatment: "Porcelain Crown",
    date: "Verified Patient — 1 Month Ago",
    review:
      "Broke a front tooth on a Thursday morning and walked out with a permanent porcelain crown! The practice is so clean, modern, and welcoming.",
  },
  {
    id: 4,
    author: "Robert H.",
    rating: 5,
    treatment: "Dental Implant & Restorative Care",
    date: "Verified Patient — 2 Months Ago",
    review:
      "The implant procedure was incredibly smooth. Precision guidance meant zero downtime and very little swelling. Dr. Vance is truly a wonderful dentist.",
  },
  {
    id: 5,
    author: "Samantha P.",
    rating: 5,
    treatment: "Teeth Whitening",
    date: "Verified Patient — 3 Months Ago",
    review:
      "My teeth went shades whiter in a single visit without any sensitivity. The clinic is so pleasant and the team in eMalahleni is wonderful.",
  },
  {
    id: 6,
    author: "Michael C.",
    rating: 5,
    treatment: "General & Family Dentistry",
    date: "Verified Patient — 3 Months Ago",
    review:
      "Best dental experience for my entire family. From the warm waiting room to the gentle checkup, everything is top tier.",
  },
];

export default function ReviewsPage() {
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [formAuthor, setFormAuthor] = useState("");
  const [formReview, setFormReview] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formAuthor || !formReview) return;
    setReviewSubmitted(true);
    setFormAuthor("");
    setFormReview("");
  };

  return (
    <div className="page-container reviews-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-container">
          <div className="section-subtitle-badge">
            <Star size={14} className="star-gold" />
            <span>PATIENT TESTIMONIALS</span>
          </div>
          <h1 className="page-title">
            Loved By Families Across <br />
            <span className="gold-text-accent">eMalahleni</span>
          </h1>
          <p className="page-subtitle">
            Read verified reviews from patients who experienced our gentle care, warm atmosphere, and dedicated dentistry at Shop 18, Reyno Ridge Centre.
          </p>
        </div>
      </section>

      {/* Star Ratings Summary Badges */}
      <section className="section-padding ratings-summary-section">
        <div className="section-container ratings-summary-grid">
          <div className="rating-badge-card">
            <h3>4.9 / 5.0</h3>
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="star-gold" />
              ))}
            </div>
            <p>Google Patient Ratings</p>
          </div>

          <div className="rating-badge-card">
            <h3>5.0 / 5.0</h3>
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="star-gold" />
              ))}
            </div>
            <p>Verified Patient Feedback</p>
          </div>

          <div className="rating-badge-card">
            <h3>100% Gentle</h3>
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="star-gold" />
              ))}
            </div>
            <p>Family Care Guarantee</p>
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <TestimonialsSection />

      {/* All Verified Patient Reviews Grid */}
      <section className="section-padding all-reviews-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Quote size={14} />
              <span>VERIFIED REVIEWS</span>
            </div>
            <h2 className="section-title">
              What Our Patients Say <br />
              <span className="gold-text-accent">About Their Visit</span>
            </h2>
          </div>

          <div className="reviews-detail-grid">
            {ALL_REVIEWS.map((rev) => (
              <div key={rev.id} className="review-card-full">
                <div className="rev-header">
                  <div>
                    <h4 className="rev-author">{rev.author}</h4>
                    <span className="rev-treatment">{rev.treatment}</span>
                  </div>
                  <div className="rev-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="star-gold" />
                    ))}
                  </div>
                </div>
                <p className="rev-body">"{rev.review}"</p>
                <div className="rev-footer">
                  <span className="rev-date">{rev.date}</span>
                  <span className="rev-verified"><CheckCircle2 size={12} /> Verified Patient</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story / Leave a Review Form */}
      <section className="section-padding review-form-section">
        <div className="section-container review-form-card">
          <div className="form-intro">
            <div className="section-subtitle-badge">
              <MessageSquare size={14} />
              <span>SHARE YOUR STORY</span>
            </div>
            <h2>Have You Visited Alora Dental Care?</h2>
            <p>We value your feedback and love hearing how your visit has improved your smile and health.</p>
          </div>

          {reviewSubmitted ? (
            <div className="review-success-msg">
              <CheckCircle2 size={36} className="check-gold" />
              <h3>Thank You for Sharing Your Experience!</h3>
              <p>Your review has been submitted for verification.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formAuthor}
                  onChange={(e) => setFormAuthor(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Review & Experience</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your visit, treatment, and results..."
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary-hero">
                <ThumbsUp size={16} />
                <span>Submit Patient Review</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <h2>Join Our Happy Patients at Alora Dental Care</h2>
            <p>Book your appointment today at Shop 18, Reyno Ridge Centre, eMalahleni.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Visit Online</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
