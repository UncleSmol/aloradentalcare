"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

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
            Alora Dental Care is a modern, patient-centered dental practice committed to delivering gentle family dentistry, comprehensive oral health, and radiant smile transformations in eMalahleni.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Practice</Link></li>
            <li><Link href="/services">Treatments & Services</Link></li>
            <li><Link href="/transformations">Smile Transformations</Link></li>
            <li><Link href="/process">Patient Journey</Link></li>
            <li><Link href="/reviews">Reviews & Ratings</Link></li>
            <li><Link href="/booking">Book Visit & Contact</Link></li>
          </ul>
        </div>

        {/* Practice Hours */}
        <div className="footer-col">
          <h4>Office Hours</h4>
          <ul>
            <li>Mon - Thu: 8:00 AM - 5:00 PM</li>
            <li>Friday: 8:00 AM - 4:00 PM</li>
            <li>Saturday: 8:30 AM - 1:00 PM</li>
            <li>Sunday & Holidays: Closed</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <Phone size={14} />
              <a href="tel:+27136973447">+27 13 697 3447</a>
            </li>
            <li>
              <MessageSquare size={14} />
              <a href="https://wa.me/27618913052" target="_blank" rel="noopener noreferrer">WhatsApp: 061 891 3052</a>
            </li>
            <li>
              <Mail size={14} />
              <a href="mailto:info@aloradentalcare.co.za">info@aloradentalcare.co.za</a>
            </li>
            <li>
              <MapPin size={14} />
              <span>Shop 18, Reyno Ridge Centre, 08 Darius Street, Reyno Ridge, eMalahleni, 1039</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Alora Dental Care. All rights reserved.</div>
        <div>Gentle Dentistry & Dedicated Patient Care in eMalahleni</div>
      </div>
    </footer>
  );
}

