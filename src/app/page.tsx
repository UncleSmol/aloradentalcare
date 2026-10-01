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
  Stethoscope,
  Award,
  UserCheck,
  Sun,
  MapPin,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TransformationSection from "@/components/TransformationSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import PracticeMap from "@/components/PracticeMap";
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
            <h2 className="section-title">
              A New Standard in Gentle, <br />
              <span className="gold-text-accent">Patient-Centered Dentistry</span>
            </h2>
            <p className="section-description">
              We are delighted to welcome patients to our modern practice at Shop 18, Reyno Ridge Centre, eMalahleni. Experience compassionate family care, gentle techniques, and dedicated oral healthcare in a relaxing setting.
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

      {/* Feature Showcase Banner with Practice Image */}
      <section className="section-padding asset-showcase-section" style={{ background: "rgba(11, 23, 48, 0.45)", borderTop: "1px solid rgba(206, 166, 86, 0.15)", borderBottom: "1px solid rgba(206, 166, 86, 0.15)" }}>
        <div className="section-container">
          <div className="about-grid" style={{ alignItems: "center" }}>
            <div className="about-image-wrapper">
              <Image
                src="/about-us-hero.png"
                alt="Alora Dental Care Practice in eMalahleni"
                width={650}
                height={450}
                unoptimized
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
            <div className="about-features-col">
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Your Local Family Dentist in <br />
                <span className="gold-text-accent">eMalahleni</span>
              </h2>
              <p className="feature-desc" style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Conveniently situated at <strong>Shop 18, Reyno Ridge Centre, 08 Darius Street, Reyno Ridge</strong>. We accept all major South African medical aids (Discovery Health, Bonitas, Momentum, Medshield, Bestmed, and more) and offer flexible cash payment options.
              </p>
              <div className="credentials-list" style={{ gap: "0.75rem", marginBottom: "1.75rem" }}>
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
            <h2 className="section-title">
              Comprehensive Dental Care <br />
              <span className="gold-text-accent">For The Entire Family</span>
            </h2>
            <p className="section-description">
              Whether you need a routine dental checkup, professional teeth whitening, clear aligners, or restorative crowns, we offer gentle solutions tailored to your needs.
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

      {/* Interactive Smile Transformation Visualizer */}
      <TransformationSection />

      {/* Patient Care Process Steps */}
      <ProcessSection />

      {/* Patient Reviews & Testimonials */}
      <TestimonialsSection />

      {/* Practice Map Location Section */}
      <section className="section-padding map-wrapper-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Visit Our Dental Practice in <br />
              <span className="gold-text-accent">Reyno Ridge, eMalahleni</span>
            </h2>
            <p className="section-description">
              Shop 18, Reyno Ridge Centre, 08 Darius Street, Reyno Ridge, eMalahleni, 1039. Tel: +27 13 697 3447 | WhatsApp: 061 891 3052.
            </p>
          </div>
          <PracticeMap />
        </div>
      </section>

      {/* Online Booking Appointment Section */}
      <BookingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
