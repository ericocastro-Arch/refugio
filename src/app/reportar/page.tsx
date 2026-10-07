"use client";

import React, { useState } from 'react';
import { useToast } from '@/components/ToastProvider';

export default function ReportarPage() {
  const [hasOwner, setHasOwner] = useState(false);
  const { showToast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const stored = JSON.parse(localStorage.getItem('drg_subs') || '[]');
      stored.unshift({
        type: 'Reporte de caso',
        detail: 'Solicitud recibida desde el formulario de Reporte de caso',
        status: 'Recibido',
        date: new Date().toLocaleDateString('es-GT')
      });
      localStorage.setItem('drg_subs', JSON.stringify(stored));
    } catch(e) {}
    
    showToast('Reporte enviado. El administrador ha sido notificado.');
    (e.target as HTMLFormElement).reset();
    setHasOwner(false);
  };

  return (
    <>
      {/* HEADER BANNER */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '350px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=2000" alt="Perrito en situación de calle" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.85),rgba(8,20,50,.6) 50%,rgba(8,20,50,.2))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', zIndex: 10, color: '#fff', width: '100%' }}>
          <p className="eyebrow" style={{ color: 'var(--celeste)' }}>Ayuda en la calle</p>
          <h1 style={{ fontSize: 44, fontWeight: 900, margin: '8px 0 16px', lineHeight: 1.1 }}>Reporte de Casos</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.8)', maxWidth: 600, lineHeight: 1.6 }}>
            No podemos salvarlos a todos al mismo tiempo, pero con tu reporte podemos empezar a buscarles un hogar temporal o brindarles difusión. Tu voz es su única esperanza.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f7fbff' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title">Reporta un perrito sin dueño</h2>
          <div style={{ background: '#fee2e2', border: '1.5px solid #fca5a5', borderRadius: 14, padding: '14px 18px', marginBottom: 16, fontSize: 13, fontWeight: 700, color: '#991b1b', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <i className="ri-error-warning-fill" style={{ fontSize: 20, flexShrink: 0 }}></i>
            <div><strong>No atendemos reportes de perfiles falsos.</strong> Solo apoyamos a perritos sin dueño y abandonados; el apoyo consiste en difundir el caso y buscar un hogar temporal. <strong>No brindamos apoyo a perritos con dueño</strong>, ya que su bienestar corresponde a sus propietarios.</div>
          </div>
          <form className="card p-8" style={{ display: 'grid', gap: 16 }} onSubmit={handleFormSubmit}>
            <div>
              <label>Fotos y/o video del caso * (múltiples archivos)</label>
              <label className="file-label"><i className="ri-upload-cloud-2-line" style={{ fontSize: 20 }}></i><span>Toca para subir fotos o video</span><input type="file" multiple accept="image/*,video/*" style={{ display: 'none' }} required /></label>
              <p style={{ fontSize: 11, color: 'var(--muted)', margin: '4px 0 0' }}>Límite de tamaño por archivo: <span className="tag-ej">configurable</span></p>
            </div>
            <div><label>Dirección exacta *</label><input className="input" type="text" placeholder="Colonia, barrio, calle, avenida, referencias" required /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', background: 'var(--celeste-soft)', padding: '12px', borderRadius: '12px' }} onClick={() => setHasOwner(!hasOwner)}>
              <span className={`check-box ${hasOwner ? 'checked' : ''}`}>{hasOwner && <i className="ri-check-line" style={{ color: '#fff', fontSize: 13, fontWeight: 900 }}></i>}</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--azul)' }}>¿El perrito tiene dueño?</span>
            </div>
            {hasOwner && (
              <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <label>Nombre del dueño (si lo hubiera)</label>
                <input className="input" type="text" placeholder="Nombre de quien lo reclama" />
                <p style={{ fontSize: 13, color: '#991b1b', fontWeight: 700, margin: '8px 0 0' }}><i className="ri-prohibited-line"></i> Si tiene dueño, no podemos brindarle apoyo. Este reporte será rechazado por política del refugio.</p>
              </div>
            )}
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '14px', fontSize: 15, marginTop: '8px' }}><i className="ri-send-plane-fill"></i> Enviar reporte al refugio</button>
          </form>
        </div>
      </section>
    </>
  );
}
