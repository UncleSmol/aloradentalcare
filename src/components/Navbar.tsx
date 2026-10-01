"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Calendar } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Transformations", href: "/transformations" },
  { label: "Process", href: "/process" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo Link */}
        <Link href="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Alora Dental Care Logo"
            width={480}
            height={130}
            className="navbar-logo-img"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={isActive ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="navbar-actions">
          <a href="tel:+27136973447" className="nav-phone">
            <Phone size={14} />
            <span>+27 13 697 3447</span>
          </a>
          <Link href="/booking" className="btn-book-nav">
            <Calendar size={14} />
            <span>Book Visit</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="mobile-btn-book"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
