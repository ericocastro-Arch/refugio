"use client";

import React from 'react';

export default function ContactoPage() {
  return (
    <>
      {/* HEADER BANNER */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '350px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=2000" alt="Perrito atento" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.85),rgba(8,20,50,.6) 50%,rgba(8,20,50,.2))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', zIndex: 10, color: '#fff', width: '100%' }}>
          <p className="eyebrow" style={{ color: 'var(--celeste)' }}>Hablemos</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, margin: '8px 0 16px', lineHeight: 1.1 }}>Contacto y Redes Oficiales</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.8)', maxWidth: 600, lineHeight: 1.6 }}>
            Si tienes dudas sobre donaciones, procesos de adopción o quieres sumarte como voluntario, escríbenos. Te responderemos lo más pronto posible.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', minHeight: 'calc(100vh - 350px)', background: '#f7fbff' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Canales de Comunicación</h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.6 }}>
            Toda coordinación (visitas, donaciones, adopciones) se realiza <strong style={{ color: 'var(--azul)' }}>exclusivamente</strong> a través de nuestros medios oficiales para garantizar tu seguridad y la nuestra.
          </p>
          
          <div className="card p-8" style={{ display: 'grid', gap: 16, marginBottom: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(31,168,224,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-whatsapp-fill" style={{ color: 'var(--celeste)', fontSize: 24 }}></i>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 15 }}>Teléfono / WhatsApp Oficial</strong>
                <span style={{ fontSize: 14, color: 'var(--muted)' }}><span className="tag-pend">PENDIENTE (Ej. +502 4455-6677)</span></span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(31,168,224,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-mail-fill" style={{ color: 'var(--celeste)', fontSize: 24 }}></i>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 15 }}>Correo Electrónico</strong>
                <span style={{ fontSize: 14, color: 'var(--muted)' }}><span className="tag-pend">PENDIENTE (Ej. hola@dogrescue.gt)</span></span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(31,168,224,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-facebook-circle-fill" style={{ color: 'var(--celeste)', fontSize: 24 }}></i>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 15 }}>Redes Sociales</strong>
                <span style={{ fontSize: 14, color: 'var(--muted)' }}>DOG Rescue Guatemala en Facebook e Instagram</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(217,165,32,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-map-pin-2-fill" style={{ color: 'var(--dorado)', fontSize: 24 }}></i>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 15 }}>Centro de Acopio (Donaciones Físicas)</strong>
                <span style={{ fontSize: 14, color: 'var(--muted)' }}>4.ª Calle y 4.ª Avenida, esquina, Amatitlán. (De lunes a sábado de 9am a 4pm).</span>
                <p style={{ fontSize: 12, margin: '4px 0 0', color: '#991b1b', fontWeight: 700 }}>Esta dirección NO es el refugio.</p>
              </div>
            </div>
          </div>
          
          <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '20px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}><i className="ri-shield-check-fill" style={{ color: '#0d9669' }}></i> Aviso de Privacidad</h3>
            <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
              Todos los datos compartidos en nuestros formularios (DPI, direcciones, fotos) se utilizan estrictamente para el proceso de validación de adopciones, voluntariado o castraciones. Tus datos serán eliminados de nuestros registros si la solicitud es rechazada. <span className="tag-pend">PENDIENTE POLÍTICA FORMAL</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
