"use client";

import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Clock,
  ArrowRight,
  Star,
  CheckCircle2,
  Calendar,
  Smile,
  Phone,
  Stethoscope,
  Award,
  UserCheck,
  Sun,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome & Practice Intro Section */}
      <section className="section-padding welcome-practice-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Sparkles size={14} />
              <span>WELCOME TO ALORA DENTAL CARE</span>
            </div>
            <h2 className="section-title">
              A New Standard in Gentle, <br />
              <span className="gold-text-accent">Patient-Centered Dentistry</span>
            </h2>
            <p className="section-description">
              We are delighted to welcome new patients to our modern practice. From your very first visit, experience compassionate care, gentle techniques, and state-of-the-art dental technology in a relaxing environment.
            </p>
          </div>

          <div className="welcome-pillars-grid">
            <div className="welcome-pillar-card">
              <div className="pillar-icon-box">
                <UserCheck size={28} />
              </div>
              <h3>Compassionate Care</h3>
              <p>Our friendly, dedicated team takes the time to listen to your goals, answer your questions, and tailor treatment to your needs.</p>
            </div>

            <div className="welcome-pillar-card">
              <div className="pillar-icon-box">
                <HeartPulse size={28} />
              </div>
              <h3>Zero-Anxiety Environment</h3>
              <p>Relax in total peace with our soft-touch techniques, noise-canceling headphones, overhead streaming screens, and soothing amenities.</p>
            </div>

            <div className="welcome-pillar-card">
              <div className="pillar-icon-box">
                <Stethoscope size={28} />
              </div>
              <h3>Advanced 3D Technology</h3>
              <p>Clean, digital dentistry with low-radiation imaging and 3D optical scanning — no messy impression trays or long wait times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Treatments & Services */}
      <section className="section-padding services-preview-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Smile size={14} />
              <span>OUR DENTAL SERVICES</span>
            </div>
            <h2 className="section-title">
              Comprehensive Dental Care <br />
              <span className="gold-text-accent">For The Entire Family</span>
            </h2>
            <p className="section-description">
              Whether you need a routine checkup, teeth whitening, or complete smile restoration, we offer a full suite of gentle treatments.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><ShieldCheck size={28} /></div>
              <h3>General & Preventive Care</h3>
              <p>Comprehensive oral exams, gentle ultrasonic cleanings, digital X-rays, cavity prevention, and personalized oral health plans.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Sun size={28} /></div>
              <h3>Cosmetic Dentistry & Whitening</h3>
              <p>Brighten and enhance your smile with custom laser teeth whitening, handcrafted porcelain veneers, and cosmetic bonding.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Sparkles size={28} /></div>
              <h3>3D Invisalign & Aligners</h3>
              <p>Discreetly straighten your teeth using clear, removable aligners engineered for rapid comfort and precise tooth movement.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Clock size={28} /></div>
              <h3>Restorative & Emergency Care</h3>
              <p>Same-day porcelain crowns, tooth-colored fillings, dental implants, and prompt emergency care when you need it most.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="view-all-cta-center">
            <Link href="/services" className="btn-primary-hero">
              <span>View All Practice Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding why-choose-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Award size={14} />
              <span>WHY CHOOSE ALORA DENTAL</span>
            </div>
            <h2 className="section-title">
              Designed Around Your <br />
              <span className="gold-text-accent">Comfort & Convenience</span>
            </h2>
          </div>

          <div className="why-choose-grid">
            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>Flexible Appointment Slots</h4>
                <p>Early morning, evening, and Saturday hours designed to fit around your work and family schedule.</p>
              </div>
            </div>

            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>Transparent & Affordable</h4>
                <p>No unexpected fees. We maximize your insurance benefits and offer flexible 0% APR payment options.</p>
              </div>
            </div>

            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>New Patient Package</h4>
                <p>Enjoy our comprehensive welcome exam, 3D digital imaging scan, and personalized care plan.</p>
              </div>
            </div>

            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>Comfort & Amenities</h4>
                <p>Warm blankets, Netflix on ceiling screens, Bose headphones, and soothing aromatherapy suites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Teaser */}
      <section className="section-padding reviews-teaser-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle-badge">
              <Star size={14} className="star-gold" />
              <span>PATIENT REVIEWS</span>
            </div>
            <h2 className="section-title">
              What Our Patients Say <br />
              <span className="gold-text-accent">About Their Visit</span>
            </h2>
          </div>

          <div className="reviews-teaser-grid">
            <div className="review-teaser-card">
              <div className="stars-row">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="star-gold" />
                ))}
              </div>
              <p>"The team at Alora Dental made me feel so comfortable. The office is clean, modern, and the treatment was completely painless!"</p>
              <div className="reviewer-info">
                <strong>Sarah M.</strong>
                <span>Verified Patient</span>
              </div>
            </div>

            <div className="review-teaser-card">
              <div className="stars-row">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="star-gold" />
                ))}
              </div>
              <p>"I’ve always had dental anxiety, but Dr. Vance and her team put me completely at ease. My teeth whitening results are amazing!"</p>
              <div className="reviewer-info">
                <strong>David K.</strong>
                <span>Verified Patient</span>
              </div>
            </div>

            <div className="review-teaser-card">
              <div className="stars-row">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="star-gold" />
                ))}
              </div>
              <p>"Best dental office I have ever visited. The 3D scan was fast and easy, and the appointment started right on time."</p>
              <div className="reviewer-info">
                <strong>Emily R.</strong>
                <span>Verified Patient</span>
              </div>
            </div>
          </div>

          <div className="view-all-cta-center">
            <Link href="/reviews" className="btn-secondary-hero">
              <span>Read More Verified Reviews</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* New Patient Booking CTA Banner */}
      <section className="section-padding cta-banner-section">
        <div className="section-container cta-banner-card">
          <div className="cta-content">
            <div className="section-subtitle-badge">
              <Calendar size={14} />
              <span>NOW ACCEPTING NEW PATIENTS</span>
            </div>
            <h2>Book Your First Appointment Today</h2>
            <p>Schedule your new patient exam, 3D digital scan, and consultation online in under 60 seconds.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Appointment Online</span>
            </Link>
            <a href="tel:18005552567" className="btn-secondary-hero">
              <Phone size={16} />
              <span>Call (800) 555-ALORA</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
