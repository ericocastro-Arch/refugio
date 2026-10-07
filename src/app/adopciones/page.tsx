"use client";

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ToastProvider';
import { supabase } from '@/lib/supabase';

const statusMap: Record<string, any> = {
  disponible:{t:'Disponible',c:'rgba(13,150,105,.12)',tc:'#0d9669'},
  proceso:{t:'En proceso',c:'var(--dorado-soft)',tc:'var(--dorado)'},
  adoptado:{t:'Adoptado',c:'rgba(128,128,128,.12)',tc:'#64748b'}
};

export default function AdopcionesPage() {
  const [dogFilter, setDogFilter] = useState('todos');
  const [dogsAfterState, setDogsAfterState] = useState<Record<string, boolean>>({});
  const [selectedDog, setSelectedDog] = useState<any>(null);
  const [dogsData, setDogsData] = useState<any[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchDogs = async () => {
      const { data, error } = await supabase.from('dogs').select('*').order('created_at', { ascending: true });
      if (data) setDogsData(data);
    };
    fetchDogs();
  }, []);

  const filteredDogs = dogsData.filter(d => dogFilter === 'todos' || d.age_category === dogFilter || d.size === dogFilter || d.temperament === dogFilter);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Simulate getting form data (in reality you'd capture these properly)
    const formData = new FormData(form);
    
    const { error } = await supabase.from('applications').insert([{
      type: 'Solicitud de adopción',
      detail: selectedDog ? `Solicitud por ${selectedDog.name}` : 'Solicitud general',
      status: 'Recibido'
    }]);

    if (error) {
      showToast('Error al enviar solicitud.');
    } else {
      showToast('Solicitud enviada. Revisaremos tu perfil por la vía oficial.');
      form.reset();
    }
  };

  return (
    <>
      {/* PORTADA UNIFICADA */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000" alt="Perritos en adopción" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <p className="eyebrow" style={{ color: 'var(--celeste)', marginBottom: 8 }}>Nuevos Comienzos</p>
          <h1 style={{ color: '#fff', fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            La magia de adoptar a un mestizo
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, maxWidth: 600, marginBottom: 24, lineHeight: 1.6 }}>
            Los perritos mestizos ("aguacateros") son únicos. Tienen una genética más fuerte, menos problemas de salud y una capacidad enorme de agradecer. Al adoptar, estás salvando dos vidas.
          </p>
        </div>
      </section>

      {/* CATALOGO */}
      <section style={{ padding: '60px 0', background: '#f7fbff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Conócelos y encuentra a tu compañero</h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24, maxWidth: 800 }}>Toca una tarjeta para ver el perfil detallado del perrito y su historia.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
            {['todos', 'cachorro', 'joven', 'adulto', 'pequeno', 'mediano', 'grande', 'calmo', 'activo'].map(f => (
              <button key={f} className={`chip ${dogFilter === f ? 'active' : ''}`} onClick={() => setDogFilter(f)}>
                {f === 'todos' ? 'Todos' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {filteredDogs.length === 0 ? (
              <p style={{ color: 'var(--muted)', gridColumn: '1/-1', textAlign: 'center', padding: 40, fontSize: 16 }}>Cargando perritos o no hay coincidencias...</p>
            ) : (
              filteredDogs.map(d => {
                const st = statusMap[d.status] || statusMap['disponible'];
                const isAfter = dogsAfterState[d.id] ?? true;
                return (
                  <div key={d.id} className="card overflow-hidden" style={{ cursor: 'pointer', padding: 0 }} onClick={() => setSelectedDog(d)}>
                    <div style={{ height: 200, background: isAfter ? d.image_after : d.image_before, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      {!isAfter && <i className="ri-paw-fill" style={{ fontSize: 52, color: 'rgba(255,255,255,.85)' }}></i>}
                      <span style={{ position: 'absolute', top: 12, right: 12, background: isAfter ? 'rgba(255,255,255,.9)' : 'rgba(11,18,32,.8)', color: isAfter ? 'var(--text)' : '#fff', padding: '4px 12px', borderRadius: 20, fontSize: 10, fontWeight: 900 }}>{isAfter ? 'DESPUÉS' : 'ANTES'}</span>
                      <span style={{ position: 'absolute', top: 12, left: 12, background: st.c, color: st.tc, padding: '4px 12px', borderRadius: 20, fontSize: 10, fontWeight: 900 }}>{st.t}</span>
                    </div>
                    <div style={{ padding: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <strong style={{ fontSize: 18, fontWeight: 900 }}>{d.name}</strong>
                        <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700 }}>{d.age_text} · {d.sex}</span>
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 8px' }}><strong>Tamaño:</strong> {d.size} · <strong>Temp:</strong> {d.temperament}</p>
                      <button className="chip" style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 6, alignItems: 'center', padding: '10px' }} onClick={(e) => { e.stopPropagation(); setDogsAfterState({...dogsAfterState, [d.id]: !isAfter}); }}>
                        <i className="ri-swap-line"></i> Ver Antes / Después
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="adopcion" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-4">
          <p className="eyebrow">Proceso de adopción</p>
          <h2 className="section-title">Pasos para adoptar</h2>
          <form className="card p-8" style={{ display: 'grid', gap: 16, maxWidth: 640 }} onSubmit={handleFormSubmit}>
            <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}><i className="ri-file-list-3-fill" style={{ color: 'var(--celeste)' }}></i> Formulario de Solicitud</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
              <div><label>Nombre completo *</label><input className="input" type="text" required /></div>
              <div><label>No. de DPI *</label><input className="input" type="text" required /></div>
            </div>
            <div><label>Dirección exacta *</label><input className="input" type="text" required /></div>
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '14px', fontSize: 15, marginTop: 10 }}><i className="ri-send-plane-fill"></i> Enviar solicitud</button>
          </form>
        </div>
      </section>

      {/* DOG MODAL */}
      <div className={`modal-bg ${selectedDog ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setSelectedDog(null); }}>
        <div className="card" style={{ maxWidth: 520, width: '100%', padding: 0, overflow: 'hidden', position: 'relative' }}>
          <button onClick={() => setSelectedDog(null)} style={{ position: 'absolute', top: 12, right: 12, background: '#fff', border: 'none', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', fontSize: 18, zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,.2)' }}><i className="ri-close-line"></i></button>
          {selectedDog && (
            <div>
              <div style={{ height: 250, backgroundImage: selectedDog.image_after, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>{selectedDog.name}</h3>
                <p style={{ fontSize: 14, margin: '10px 0', lineHeight: 1.5 }}><strong>Historia:</strong> {selectedDog.story}</p>
                <button onClick={() => { setSelectedDog(null); document.getElementById('adopcion')?.scrollIntoView(); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15 }}><i className="ri-heart-fill"></i> Solicitar adopción de {selectedDog.name}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
