"use client";

import React from 'react';
import { useToast } from '@/components/ToastProvider';

export default function VisitasPage() {
  const { showToast } = useToast();

  const handleFormSubmit = (e: React.FormEvent, type: string, msg: string) => {
    e.preventDefault();
    try {
      const stored = JSON.parse(localStorage.getItem('drg_subs') || '[]');
      stored.unshift({
        type,
        detail: `Solicitud recibida desde el formulario de ${type}`,
        status: 'Recibido',
        date: new Date().toLocaleDateString('es-GT')
      });
      localStorage.setItem('drg_subs', JSON.stringify(stored));
    } catch(e) {}
    
    showToast(msg);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* PORTADA UNIFICADA */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000" alt="Personas interactuando con perritos" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <p className="eyebrow" style={{ color: 'var(--dorado)', marginBottom: 8 }}>Puertas Abiertas</p>
          <h1 style={{ color: '#fff', fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            Visitas al Refugio
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, maxWidth: 600, marginBottom: 24, lineHeight: 1.6 }}>
            Ven a compartir amor. Las visitas están restringidas para garantizar la paz y seguridad de los perritos, por lo que toda visita debe agendarse previamente por este medio.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f7fbff' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title">Conoce el refugio con cita previa</h2>
          <div style={{ background: 'linear-gradient(135deg,#0b1220,#1a2744)', color: '#fff', borderRadius: 20, padding: 24, marginBottom: 30, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <i className="ri-lock-fill" style={{ fontSize: 28, color: 'var(--dorado)', flexShrink: 0 }}></i>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ fontWeight: 900, fontSize: 18, margin: '0 0 8px' }}>El refugio está cerrado al público general sin cita</h3>
              <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14, margin: '0 0 12px', lineHeight: 1.5 }}>Las visitas se coordinan únicamente por los medios oficiales o llenando estos formularios. El refugio tiene monitoreo permanente: staff y voluntarios de día, y guardián de noche.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="md:grid-cols-1">
                <div style={{ background: 'rgba(255,255,255,.1)', padding: '12px', borderRadius: '10px' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Público general:</strong>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>Solo sábados de 4:00 a 6:00 p.m., con registro previo obligatorio. Cupo limitado.</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,.1)', padding: '12px', borderRadius: '10px' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Instituciones educativas:</strong>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>Viernes y sábados, con solicitud previa por carta membretada oficial.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            <form className="card p-8" style={{ display: 'grid', gap: 14, alignContent: 'start' }} onSubmit={(e) => handleFormSubmit(e, 'Visita público general', 'Reserva de visita recibida (sábado 4-6pm).')}>
              <h3 style={{ fontWeight: 900, fontSize: 20, margin: 0, color: 'var(--celeste)' }}><i className="ri-calendar-event-fill"></i> Visita (Público General)</h3>
              <p style={{ fontSize: 13, background: 'var(--celeste-soft)', padding: '10px 14px', borderRadius: 8, margin: 0, fontWeight: 700, color: 'var(--azul)' }}>Solo sábados de 4:00 a 6:00 p.m.</p>
              <div><label>Nombre del responsable *</label><input className="input" type="text" required /></div>
              <div><label>Teléfono (WhatsApp) *</label><input className="input" type="tel" required /></div>
              <div><label>No. de personas *</label><input className="input" type="number" min="1" max="6" required /></div>
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: 12, fontSize: 14, marginTop: 8 }}>Reservar Espacio</button>
            </form>
            <form className="card p-8" style={{ display: 'grid', gap: 14, alignContent: 'start' }} onSubmit={(e) => handleFormSubmit(e, 'Visita académica', 'Solicitud de visita académica recibida.')}>
              <h3 style={{ fontWeight: 900, fontSize: 20, margin: 0, color: 'var(--dorado)' }}><i className="ri-school-fill"></i> Visita Académica</h3>
              <p style={{ fontSize: 13, background: 'var(--dorado-soft)', padding: '10px 14px', borderRadius: 8, margin: 0, fontWeight: 700, color: '#7a5a10' }}>Colegios, escuelas y facultades (viernes y sábados)</p>
              <div><label>Nombre del establecimiento *</label><input className="input" type="text" required /></div>
              <div><label>Coordinador/Director a cargo *</label><input className="input" type="text" required /></div>
              <div><label>Carta oficial (con propósito de la visita) *</label><label className="file-label"><i className="ri-file-text-line" style={{ fontSize: 18 }}></i><span>Subir carta oficial (PDF)</span><input type="file" accept=".pdf,image/*" style={{ display: 'none' }} required /></label></div>
              <div><label>Fotografía del grupo (opcional)</label><label className="file-label"><i className="ri-image-line" style={{ fontSize: 18 }}></i><span>Subir foto del grupo</span><input type="file" accept="image/*" style={{ display: 'none' }} /></label></div>
              <button type="submit" className="btn-gold" style={{ justifyContent: 'center', padding: 12, fontSize: 14, marginTop: 8 }}>Solicitar Fecha</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
