"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Reportar', path: '/reportar' },
    { name: 'Adopción', path: '/adopciones' },
    { name: 'Castraciones', path: '/castraciones' },
    { name: 'Donaciones', path: '/donaciones' },
    { name: 'Visitas', path: '/visitas' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: 'var(--text)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(135deg,var(--celeste),var(--azul))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <i className="ri-paw-fill" style={{ fontSize: 20 }}></i>
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.1 }}>DOG Rescue</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700 }}>GUATEMALA</div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-4">
            {links.map(link => (
              <Link 
                key={link.path} 
                href={link.path} 
                className="nav-link" 
                style={pathname === link.path ? { color: 'var(--celeste)' } : {}}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/admin" className="btn-outline" style={{ padding: '8px 14px', fontSize: 12, textDecoration: 'none' }}>
              <i className="ri-admin-line"></i> Admin
            </Link>
          </div>
          <button className="lg:hidden" style={{ background: 'none', border: 'none', fontSize: 24, color: 'var(--text)', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="ri-menu-line"></i>
          </button>
        </div>
        <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'open' : ''}`} style={{ borderTop: '1px solid var(--border)', background: '#fff' }}>
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map(link => (
              <Link 
                key={link.path} 
                href={link.path} 
                className="nav-link text-sm" 
                onClick={() => setMobileMenuOpen(false)}
                style={pathname === link.path ? { color: 'var(--celeste)' } : {}}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="btn-outline text-xs justify-center" style={{ textDecoration: 'none' }}>
              <i className="ri-admin-line"></i> Panel Admin
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
