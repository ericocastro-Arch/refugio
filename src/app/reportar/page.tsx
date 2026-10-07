"use client";

import React from 'react';
import { useToast } from '@/components/ToastProvider';
import { supabase } from '@/lib/supabase';

export default function ReportarPage() {
  const { showToast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const hasOwner = (form.elements.namedItem('hasOwner') as HTMLSelectElement).value;

    if (hasOwner === 'Sí') {
      showToast('Por política (RF-14), el refugio solo atiende a perritos abandonados o sin dueño. Debes contactar a bienestar animal de la municipalidad.');
      return;
    }

    const { error } = await supabase.from('applications').insert([{
      type: 'Reporte de caso',
      detail: 'Reporte de perrito en la calle/abandono',
      status: 'Recibido'
    }]);

    if (error) {
      showToast('Error al enviar el reporte.');
    } else {
      showToast('Reporte enviado. Nos pondremos en contacto contigo.');
      form.reset();
    }
  };

  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=2000" alt="Perrito en la calle" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <p className="eyebrow" style={{ color: 'var(--dorado)', marginBottom: 8 }}>Seamos su voz</p>
          <h1 style={{ color: '#fff', fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            Reportar un Caso
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, maxWidth: 600, marginBottom: 24, lineHeight: 1.6 }}>
            Si ves a un perrito herido, en peligro o abandonado, repórtalo. Nuestra capacidad es limitada, pero buscaremos la forma de ayudar difundiendo el caso o buscando un hogar temporal.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f7fbff' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', padding: '16px 24px', borderRadius: 16, fontSize: 14, color: '#991b1b', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'center' }}>
            <i className="ri-error-warning-fill" style={{ fontSize: 32 }}></i>
            <div>
              <strong style={{ display: 'block', fontSize: 16, marginBottom: 4 }}>Política del Refugio (RF-14)</strong>
              No brindamos apoyo a perritos con dueño, ya que su bienestar corresponde exclusivamente a sus propietarios. Así mismo, no atendemos reportes de perfiles falsos de redes sociales.
            </div>
          </div>

          <form className="card p-8" style={{ display: 'grid', gap: 16 }} onSubmit={handleFormSubmit}>
            <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}><i className="ri-megaphone-fill" style={{ color: 'var(--celeste)' }}></i> Formulario de Reporte</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
              <div><label>Nombre del reportante *</label><input className="input" type="text" required /></div>
              <div><label>Teléfono (WhatsApp) *</label><input className="input" type="tel" required /></div>
            </div>
            
            <div><label>Dirección exacta del caso *</label><input className="input" type="text" placeholder="Municipio, zona, calle, referencias" required /></div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
              <div>
                <label>¿El perrito tiene dueño? *</label>
                <select className="input" name="hasOwner" required>
                  <option value="">Selecciona...</option>
                  <option value="Sí">Sí, tiene dueño</option>
                  <option value="No">No, es de la calle / abandonado</option>
                </select>
              </div>
              <div><label>Nombre del dueño (si aplica)</label><input className="input" type="text" placeholder="Dejar en blanco si no tiene" /></div>
            </div>

            <div><label>Descripción del caso *</label><textarea className="input" rows={4} style={{ resize: 'vertical' }} placeholder="Describe el estado de salud, tamaño del perrito y qué pasó..." required></textarea></div>
            
            <div>
              <label>Fotografías / Videos (Evidencia) *</label>
              <label className="file-label"><i className="ri-image-add-line" style={{ fontSize: 20 }}></i><span>Haz clic para subir fotos/videos</span><input type="file" accept="image/*,video/*" multiple style={{ display: 'none' }} required /></label>
            </div>
            
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '16px', fontSize: 15, marginTop: 16 }}><i className="ri-send-plane-fill"></i> Enviar Reporte Oficial</button>
          </form>
        </div>
      </section>
    </>
  );
}
