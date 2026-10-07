"use client";

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ToastProvider';
import { supabase } from '@/lib/supabase';

export default function TiendaPage() {
  const [productsData, setProductsData] = useState<any[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase.from('products').select('*').order('created_at', { ascending: true });
      if (data) setProductsData(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=2000" alt="Perrito con estilo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <p className="eyebrow" style={{ color: 'var(--celeste)', marginBottom: 8 }}>Tienda Solidaria</p>
          <h1 style={{ color: '#fff', fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            Apoya y Viste con Propósito
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, maxWidth: 600, marginBottom: 24, lineHeight: 1.6 }}>
            El 100% de las ganancias generadas por estos productos se destinan a la compra de concentrado y pago de tratamientos médicos de nuestros rescatados.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f7fbff', minHeight: 'calc(100vh - 68px)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Catálogo Solidario</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 24 }}>
            {productsData.map((p, i) => (
              <div key={i} className="card overflow-hidden" style={{ padding: 0 }}>
                <div style={{ height: 200, background: p.image_url, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  {p.name.includes('Taza') ? (
                    <i className="ri-cup-fill" style={{ fontSize: 64, opacity: .9 }}></i>
                  ) : p.name.includes('Gorra') ? (
                    <i className="ri-user-smile-fill" style={{ fontSize: 64, opacity: .9 }}></i>
                  ) : (
                    <i className="ri-shirt-fill" style={{ fontSize: 64, opacity: .9 }}></i>
                  )}
                </div>
                <div style={{ padding: 20 }}>
                  <strong style={{ fontSize: 16, fontWeight: 800 }}>{p.name}</strong>
                  <p style={{ fontSize: 13, color: 'var(--muted)', margin: '6px 0 4px' }}><strong>Detalle:</strong> {p.color_detail}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 16px' }}><strong>Tallas/Specs:</strong> {p.sizes}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                    <span style={{ fontWeight: 900, fontSize: 20, color: 'var(--azul)' }}>{p.price}</span>
                    <button className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }} onClick={() => showToast('Pedido registrado. Te contactaremos por WhatsApp.')}><i className="ri-shopping-cart-2-fill"></i> Pedir</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
