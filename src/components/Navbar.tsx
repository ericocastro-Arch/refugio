"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
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
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>
        
        {/* LOGO MEJORADO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--text)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80&w=150" alt="Logo" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--celeste)', padding: 2, background: '#fff' }} />
            <div style={{ position: 'absolute', bottom: 0, right: -4, background: 'var(--dorado)', width: 16, height: 16, borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="ri-heart-fill" style={{ fontSize: 10, color: '#fff' }}></i>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 19, lineHeight: 1.1, letterSpacing: '-0.5px' }} className="hover-gradient-text">DOG Rescue</div>
            <div style={{ fontSize: 10, color: 'var(--celeste)', fontWeight: 900, letterSpacing: '1.5px' }}>GUATEMALA</div>
          </div>
        </Link>

        {/* ENLACES Y BOTONES DE NAVEGACIÓN */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden lg:flex">
          {navItems.map(item => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                href={item.path} 
                className="nav-link-btn"
                style={{
                  padding: '8px 14px',
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 800,
                  textDecoration: 'none',
                  color: isActive ? 'var(--celeste)' : 'var(--muted)',
                  background: isActive ? 'var(--celeste-soft)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
              </Link>
            )
          })}
          
          <div style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 8px' }}></div>
          
          <a href="http://localhost:3001" target="_blank" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13, boxShadow: '0 4px 15px rgba(31,168,224,0.3)' }}>
            <i className="ri-admin-fill"></i> Panel Staff
          </a>
        </div>

        {/* MENU MOVIL */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'var(--celeste-soft)', border: 'none', borderRadius: 12, width: 44, height: 44, fontSize: 24, color: 'var(--celeste)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="lg:hidden">
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      <div className={`mobile-menu lg:hidden ${menuOpen ? 'open' : ''}`} style={{ borderTop: menuOpen ? '1px solid var(--border)' : 'none', background: '#fff' }}>
        <div className="px-4 py-4" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {navItems.map(item => (
            <Link key={item.name} href={item.path} onClick={() => setMenuOpen(false)} style={{ padding: '12px 16px', borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: 'none', color: pathname === item.path ? 'var(--celeste)' : 'var(--text)', background: pathname === item.path ? 'var(--celeste-soft)' : 'transparent' }}>
              {item.name}
            </Link>
          ))}
          <a href="http://localhost:3001" target="_blank" className="btn-primary" style={{ padding: '14px', fontSize: 15, justifyContent: 'center', marginTop: 10 }}>
            <i className="ri-admin-fill"></i> Panel Staff
          </a>
        </div>
      </div>
    </nav>
  );
}
