"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link href="/" className="navbar-brand">
            <Image
              src="/logo.png"
              alt="Alora Dental Care Logo"
              width={480}
              height={130}
              className="footer-logo-img"
            />
          </Link>
          <p>
            Alora Dental Care is dedicated to delivering extraordinary smile transformations using state-of-the-art 3D digital technology, gentle technique, and personalized patient care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Practice</Link></li>
            <li><Link href="/services">Treatments & Services</Link></li>
            <li><Link href="/transformations">3D Smile Gallery</Link></li>
            <li><Link href="/process">Patient Journey</Link></li>
            <li><Link href="/reviews">Reviews & Ratings</Link></li>
            <li><Link href="/booking">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Practice Hours */}
        <div className="footer-col">
          <h4>Office Hours</h4>
          <ul>
            <li>Mon - Thu: 8:00 AM - 6:00 PM</li>
            <li>Friday: 8:00 AM - 4:00 PM</li>
            <li>Saturday: 9:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li><Phone size={14} /> +1 (800) 555-ALORA</li>
            <li><Mail size={14} /> hello@aloradental.com</li>
            <li><MapPin size={14} /> 742 Evergreen Suite #100</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Alora Dental Care. All rights reserved.</div>
        <div>Designed with 3D Precision & Boutique Aesthetics</div>
      </div>
    </footer>
  );
}
