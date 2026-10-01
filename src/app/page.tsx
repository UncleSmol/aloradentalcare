"use client";

import Link from "next/link";
import Image from "next/image";
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
  MapPin,
  MessageSquare,
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
              We are delighted to welcome patients to our modern practice at Shop 18, Reyno Ridge Centre, eMalahleni. From your very first visit, experience compassionate family care, gentle techniques, and dedicated oral healthcare in a relaxing setting.
            </p>
          </div>

          <div className="welcome-pillars-grid">
            <div className="welcome-pillar-card">
              <div className="pillar-icon-box">
                <UserCheck size={28} />
              </div>
              <h3>Compassionate Care</h3>
              <p>Our friendly, dedicated team takes the time to listen to your concerns, answer your questions, and tailor treatment specifically to your family's needs.</p>
            </div>

            <div className="welcome-pillar-card">
              <div className="pillar-icon-box">
                <HeartPulse size={28} />
              </div>
              <h3>Gentle & Pain-Free</h3>
              <p>Relax in total comfort with soft-touch clinical techniques, calm reception atmosphere, and clear explanations every step of the way.</p>
            </div>

            <div className="welcome-pillar-card">
              <div className="pillar-icon-box">
                <Stethoscope size={28} />
              </div>
              <h3>Modern Equipment</h3>
              <p>Clean, modern dentistry with low-radiation digital imaging, gentle ultrasonic hygiene, and direct medical aid billing for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Banner with Asset Images */}
      <section className="section-padding asset-showcase-section" style={{ background: "rgba(11, 23, 48, 0.4)" }}>
        <div className="section-container">
          <div className="about-grid" style={{ alignItems: "center" }}>
            <div className="about-image-wrapper">
              <Image
                src="/about-us-hero.png"
                alt="Alora Dental Care Practice"
                width={650}
                height={450}
                unoptimized
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
            <div className="about-features-col">
              <div className="section-subtitle-badge">
                <MapPin size={14} />
                <span>REYNO RIDGE CENTRE</span>
              </div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Your Local Family Dentist in <br />
                <span className="gold-text-accent">eMalahleni</span>
              </h2>
              <p className="feature-desc" style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Conveniently situated at <strong>Shop 18, Reyno Ridge Centre, 08 Darius Street, Reyno Ridge</strong>. We accept all major South African medical aids (Discovery Health, Bonitas, Momentum, Medshield, Bestmed, and more) and offer flexible cash payment options.
              </p>
              <div className="credentials-list" style={{ gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div className="cred-pill"><CheckCircle2 size={16} /> Direct Medical Aid Claims Submission</div>
                <div className="cred-pill"><CheckCircle2 size={16} /> Ample Free Parking & Easy Access</div>
                <div className="cred-pill"><CheckCircle2 size={16} /> Emergency Same-Day Appointments Available</div>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/booking" className="btn-primary-hero">
                  <Calendar size={16} />
                  <span>Book Appointment</span>
                </Link>
                <a href="https://wa.me/27618913052" target="_blank" rel="noopener noreferrer" className="btn-secondary-hero">
                  <MessageSquare size={16} />
                  <span>WhatsApp 061 891 3052</span>
                </a>
              </div>
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
              Whether you need a routine dental checkup, professional teeth whitening, clear aligners, or restorative crowns, we offer gentle solutions.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><ShieldCheck size={28} /></div>
              <h3>General & Preventive Care</h3>
              <p>Comprehensive oral examinations, gentle ultrasonic cleanings, digital X-rays, cavity prevention, and personalized hygiene plans.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Sun size={28} /></div>
              <h3>Cosmetic Dentistry & Whitening</h3>
              <p>Brighten and enhance your smile with custom teeth whitening, handcrafted porcelain veneers, and aesthetic tooth restorations.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Sparkles size={28} /></div>
              <h3>Clear Aligners & Orthodontics</h3>
              <p>Discreetly straighten your teeth using clear, removable aligners engineered for comfortable and smooth tooth movement.</p>
              <Link href="/services" className="service-link">
                <span>Learn More</span> <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Clock size={28} /></div>
              <h3>Restorative & Emergency Care</h3>
              <p>Porcelain crowns, tooth-colored fillings, dental implants, and prompt emergency relief when toothache or accidents happen.</p>
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
                <h4>Convenient Operating Hours</h4>
                <p>Monday - Thursday 08:00 to 17:00, Friday 08:00 to 16:00, and Saturday mornings for your family's convenience.</p>
              </div>
            </div>

            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>Direct Medical Aid Billing</h4>
                <p>We submit claims directly to Discovery Health, Bonitas, Momentum, Medshield, Bestmed, and all major SA medical aids.</p>
              </div>
            </div>

            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>Patient-Centered Care</h4>
                <p>Comprehensive welcome exams, clear treatment explanations, and customized dental care plans.</p>
              </div>
            </div>

            <div className="why-card">
              <CheckCircle2 className="check-gold" size={24} />
              <div>
                <h4>Gentle & Painless Environment</h4>
                <p>Soft-touch techniques, quiet clinical atmosphere, and friendly staff focused on anxiety-free visits.</p>
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
              <p>"The team at Alora Dental made me feel so comfortable. The practice in Reyno Ridge is clean, modern, and the treatment was completely painless!"</p>
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
              <p>"Best dental office I have ever visited in eMalahleni. Thorough consultation and the appointment started right on time."</p>
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
              <span>WELCOMING NEW PATIENTS IN EMALAHLENI</span>
            </div>
            <h2>Book Your First Appointment Today</h2>
            <p>Reserve your dental checkup or consultation online, or contact our reception team directly.</p>
          </div>
          <div className="cta-actions">
            <Link href="/booking" className="btn-primary-hero">
              <Calendar size={18} />
              <span>Book Appointment Online</span>
            </Link>
            <a href="tel:+27136973447" className="btn-secondary-hero">
              <Phone size={16} />
              <span>Call +27 13 697 3447</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
