"use client";

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ToastProvider';
import { supabase } from '@/lib/supabase';

const lvlMap: Record<string, any> = {
  urgente:{t:'URGENTE',c:'#fee2e2',tc:'#991b1b'},
  normal:{t:'Normal',c:'var(--dorado-soft)',tc:'#7a5a10'},
  cubierto:{t:'Cubierto',c:'rgba(13,150,105,.12)',tc:'#0d9669'}
};

export default function DonacionesPage() {
  const [inventoryData, setInventoryData] = useState<any[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchInventory = async () => {
      const { data } = await supabase.from('inventory').select('*').order('created_at', { ascending: true });
      if (data) setInventoryData(data);
    };
    fetchInventory();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const { error } = await supabase.from('applications').insert([{
      type: type,
      detail: `Solicitud de ${type}`,
      status: 'Recibido'
    }]);

    if (error) {
      showToast('Error al enviar la solicitud.');
    } else {
      showToast(`Solicitud de ${type} recibida exitosamente.`);
      form.reset();
    }
  };

  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=2000" alt="Perrito agradecido" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <p className="eyebrow" style={{ color: 'var(--celeste)', marginBottom: 8 }}>Apoyo y Esperanza</p>
          <h1 style={{ color: '#fff', fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            Tu donación salva vidas
          </h1>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f7fbff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Formas de apoyar nuestra labor</h2>
          
          <h3 style={{ fontWeight: 900, fontSize: 22, margin: '40px 0 20px' }}><i className="ri-archive-fill" style={{ color: 'var(--celeste)' }}></i> Inventario de necesidades actuales</h3>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)', background: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
              <thead>
                <tr style={{ background: 'var(--celeste-soft)', textAlign: 'left' }}>
                  <th style={{ padding: '16px 20px', fontWeight: 800, color: 'var(--azul)' }}>Artículo</th>
                  <th style={{ padding: '16px 20px', fontWeight: 800, color: 'var(--azul)' }}>Descripción</th>
                  <th style={{ padding: '16px 20px', fontWeight: 800, color: 'var(--azul)' }}>¿Para qué se usa?</th>
                  <th style={{ padding: '16px 20px', fontWeight: 800, color: 'var(--azul)' }}>Nivel</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((it, i) => {
                  const l = lvlMap[it.urgency_level] || lvlMap['normal'];
                  return (
                    <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                      <td style={{ padding: '14px 20px', fontWeight: 800 }}>{it.item_name}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--muted)' }}>{it.description}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--muted)', fontSize: 13 }}>{it.why_needed}</td>
                      <td style={{ padding: '14px 20px' }}><span style={{ background: l.c, color: l.tc, padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 900 }}>{l.t}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VOLUNTARIADO */}
      <section id="voluntariado" style={{ padding: '80px 0', background: '#0b1220', color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: 36, fontWeight: 900, margin: '8px 0 16px', textAlign: 'center' }}>Hogar temporal y voluntariado</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginTop: 40 }}>
            <form className="card p-8" style={{ display: 'grid', gap: 14, color: 'var(--text)' }} onSubmit={(e) => handleFormSubmit(e, 'Voluntariado')}>
              <h3 style={{ fontWeight: 900, fontSize: 22, margin: '0 0 8px', color: 'var(--azul)' }}>Voluntariado Presencial</h3>
              <div><label>Nombre *</label><input className="input" type="text" required /></div>
              <button type="submit" className="btn-primary" style={{ padding: 14, fontSize: 15 }}>Aplicar como Voluntario</button>
            </form>

            <form className="card p-8" style={{ display: 'grid', gap: 14, color: 'var(--text)' }} onSubmit={(e) => handleFormSubmit(e, 'Hogar temporal')}>
              <h3 style={{ fontWeight: 900, fontSize: 22, margin: '0 0 8px', color: 'var(--dorado)' }}>Ser Hogar Temporal</h3>
              <div><label>Nombre *</label><input className="input" type="text" required /></div>
              <button type="submit" className="btn-gold" style={{ padding: 14, fontSize: 15 }}>Registrar mi hogar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
