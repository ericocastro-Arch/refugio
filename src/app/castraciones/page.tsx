"use client";

import React, { useState } from 'react';
import { useToast } from '@/components/ToastProvider';

const jornadasData = [
  {date:'Sábado 17 de octubre',slots:['9:00','10:00','11:00'],cap:3,taken:[1,0,0]},
  {date:'Sábado 31 de octubre',slots:['9:00','10:00','11:00'],cap:3,taken:[2,1,0]},
  {date:'Sábado 14 de noviembre',slots:['9:00','10:00','11:00'],cap:3,taken:[0,0,0]}
];

export default function CastracionesPage() {
  const [isMestizo, setIsMestizo] = useState(false);
  const [acceptRisks, setAcceptRisks] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleCastrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const age = parseFloat(form.petAge.value);
    
    if(isNaN(age) || age < 0.5 || age > 5) { showToast('Edad fuera de rango: solo se aceptan mascotas de 6 meses a 5 años.'); return; }
    if(!isMestizo) { showToast('Debes confirmar que tu mascota es mestiza.'); return; }
    if(!acceptRisks) { showToast('Debes aceptar los riesgos asociados a la castración.'); return; }
    if(!selectedSlot) { showToast('Selecciona una jornada y horario disponible.'); return; }
    
    try {
      const stored = JSON.parse(localStorage.getItem('drg_subs') || '[]');
      stored.unshift({
        type: 'Solicitud de castración',
        detail: 'Solicitud recibida desde el formulario de castración',
        status: 'Recibido',
        date: new Date().toLocaleDateString('es-GT')
      });
      localStorage.setItem('drg_subs', JSON.stringify(stored));
    } catch(e) {}
    
    showToast('Cita solicitada. Recibirás confirmación y recordatorio.');
    form.reset();
    setIsMestizo(false);
    setAcceptRisks(false);
    setSelectedSlot(null);
  };

  return (
    <>
      {/* PORTADA UNIFICADA */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=2000" alt="Veterinaria y perrito" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <p className="eyebrow" style={{ color: '#34d399', marginBottom: 8 }}>Salud y Bienestar</p>
          <h1 style={{ color: '#fff', fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            Jornadas de Castración
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, maxWidth: 600, marginBottom: 24, lineHeight: 1.6 }}>
            Castrar es un acto de amor y la única forma real de detener la sobrepoblación callejera. Ofrecemos este servicio de forma gratuita para mestizos.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#0b1220', color: '#fff', minHeight: 'calc(100vh - 68px)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1.15, margin: '8px 0 10px' }}>Solicita tu cita</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12, marginBottom: 24 }}>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: 14 }}><i className="ri-calendar-check-fill" style={{ color: 'var(--celeste)', fontSize: 20 }}></i><h4 style={{ fontWeight: 800, fontSize: 14, margin: '6px 0 2px' }}>Edad permitida</h4><p style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', margin: 0 }}>6 meses a 5 años <span className="tag-pend">pendiente validar mínimo</span></p></div>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: 14 }}><i className="ri-paw-fill" style={{ color: '#34d399', fontSize: 20 }}></i><h4 style={{ fontWeight: 800, fontSize: 14, margin: '6px 0 2px' }}>Solo mestizos</h4><p style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', margin: 0 }}>La foto se compara con el animal el día de la jornada.</p></div>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: 14 }}><i className="ri-heart-pulse-fill" style={{ color: 'var(--dorado)', fontSize: 20 }}></i><h4 style={{ fontWeight: 800, fontSize: 14, margin: '6px 0 2px' }}>Debe estar sana</h4><p style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', margin: 0 }}>Sin vómitos, diarrea ni enfermedades preexistentes.</p></div>
          </div>
          <div style={{ background: 'rgba(217,165,32,.12)', border: '1px solid var(--dorado)', borderRadius: 14, padding: '14px 18px', marginBottom: 24, fontSize: 13, color: '#f0c94a' }}>
            <strong>Riesgos de la castración y edad mínima:</strong> <span className="tag-pend">PENDIENTE DE VALIDAR</span> — texto oficial por confirmar con el veterinario del refugio. Todo procedimiento quirúrgico conlleva riesgos asociados a la anestesia general.
          </div>
          <form style={{ background: '#fff', color: 'var(--text)', borderRadius: 20, padding: 24, display: 'grid', gap: 14 }} onSubmit={handleCastrationSubmit}>
            <h3 style={{ fontWeight: 900, fontSize: 17, margin: 0, color: 'var(--celeste)' }}><i className="ri-user-fill"></i> Datos del responsable</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
              <div><label>Nombre completo *</label><input className="input" type="text" required /></div>
              <div><label>No. de DPI *</label><input className="input" type="text" required /></div>
              <div><label>Teléfono *</label><input className="input" type="tel" required /></div>
            </div>
            <div><label>Dirección exacta (colonia, barrio, referencias) *</label><input className="input" type="text" required /></div>
            <h3 style={{ fontWeight: 900, fontSize: 17, margin: '4px 0 0', color: 'var(--azul)' }}><i className="ri-paw-fill"></i> Datos de la mascota</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
              <div><label>Nombre *</label><input className="input" type="text" required /></div>
              <div><label>Edad (0.5 a 5 años) *</label><input className="input" id="petAge" name="petAge" type="number" min="0.5" max="5" step="0.1" placeholder="Ej: 2" required /></div>
              <div><label>Especie *</label><select className="input" required><option value="">Selecciona...</option><option>Perro</option><option>Gato</option></select></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => setIsMestizo(!isMestizo)}>
              <span className={`check-box ${isMestizo ? 'checked' : ''}`}>{isMestizo && <i className="ri-check-line" style={{ color: '#fff', fontSize: 13, fontWeight: 900 }}></i>}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Confirmo que mi mascota es mestiza *</span>
            </div>
            <div><label>Fotografía reciente * (se comparará el día de la jornada)</label><label className="file-label"><i className="ri-image-line" style={{ fontSize: 18 }}></i><span>Subir fotografía reciente</span><input type="file" accept="image/*" style={{ display: 'none' }} required /></label></div>
            <div>
              <label>Selecciona una jornada y horario *</label>
              <div style={{ display: 'grid', gap: 10 }}>
                {jornadasData.map((j, ji) => (
                  <div key={ji} style={{ border: '1px solid var(--border)', borderRadius: 12, padding: '10px 12px' }}>
                    <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 8 }}><i className="ri-calendar-line" style={{ color: 'var(--celeste)' }}></i> {j.date}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {j.slots.map((s, si) => {
                        const isFull = j.taken[si] >= j.cap;
                        const sId = `${ji}-${si}`;
                        return (
                          <button key={si} type="button" className={`slot ${isFull ? 'full' : ''} ${selectedSlot === sId ? 'active' : ''}`} disabled={isFull} onClick={() => setSelectedSlot(sId)}>
                            {s} ({j.cap - j.taken[si]} cupos)
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--dorado-soft)', padding: '12px 16px', borderRadius: 12, fontSize: 12, fontWeight: 700, color: '#7a5a10' }}>Se verificará la información. Solicitudes incompletas no reciben seguimiento; perfiles falsos o restringidos se anulan de inmediato.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => setAcceptRisks(!acceptRisks)}>
              <span className={`check-box ${acceptRisks ? 'checked' : ''}`}>{acceptRisks && <i className="ri-check-line" style={{ color: '#fff', fontSize: 13, fontWeight: 900 }}></i>}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Acepto los riesgos asociados a la castración (anestesia, recuperación) *</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center', minWidth: 180, padding: 14 }}><i className="ri-calendar-check-fill"></i> Solicitar cita</button>
              <button type="button" className="btn-gold" onClick={() => showToast('Gracias por querer donar una castración.')} style={{ fontSize: 13, padding: '10px 16px' }}><i className="ri-heart-fill"></i> Donar una castración</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
