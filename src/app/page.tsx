"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function InicioPage() {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase.from('site_content').select('*');
      if (data) {
        const contentMap: any = {};
        data.forEach((c: any) => contentMap[c.id] = c.content_text);
        setContent(contentMap);
      }
    };
    fetchContent();
  }, []);

  return (
    <>
      {/* HERO HERO SECTION */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=2000" alt="Perritos felices" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px', display: 'flex', flexDirection: 'column', minHeight: '85vh', justifyContent: 'center' }}>
          <p className="eyebrow" style={{ color: 'var(--celeste)', marginBottom: 12 }}>DOG Rescue Guatemala</p>
          <h1 className="hover-gradient-text" style={{ color: '#fff', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', maxWidth: 700, margin: '0 0 20px' }}>
            Transformando dolor en esperanza.
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: 600, marginBottom: 32, lineHeight: 1.6 }}>
            Somos un refugio voluntario, independiente y sin fines de lucro en Amatitlán. Rescatamos perritos abandonados para sanarlos y encontrarles la familia que siempre merecieron.
          </p>
          
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/adopciones" className="btn-primary" style={{ padding: '16px 28px', fontSize: 16 }}>
              <i className="ri-heart-fill"></i> Adoptar ahora
            </Link>
            <Link href="/donaciones" className="btn-gold" style={{ padding: '16px 28px', fontSize: 16 }}>
              <i className="ri-hand-coin-fill"></i> Hacer una donación
            </Link>
          </div>
        </div>
      </section>

      {/* AVISO IMPORTANTE */}
      <div style={{ background: '#0b1220', borderTop: '2px solid var(--dorado)', padding: '16px 0', color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <i className="ri-error-warning-fill" style={{ color: 'var(--dorado)', fontSize: 28 }}></i>
          <p style={{ fontSize: 14, margin: 0, fontWeight: 700, lineHeight: 1.5 }}>
            <span style={{ color: 'var(--dorado)' }}>AVISO OFICIAL:</span> Todos nuestros servicios son 100% gratuitos. En Amatitlán no existen albergues formales, por lo que trabajamos con fondos propios y sin apoyo gubernamental o municipal.
          </p>
        </div>
      </div>

      {/* 3 FORMAS DE AYUDAR (NUEVAS TARJETAS) */}
      <section style={{ padding: '80px 0', background: '#f7fbff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="eyebrow">Únete a la causa</p>
            <h2 className="section-title">Tres formas de cambiar sus vidas</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            <div className="card" style={{ padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--celeste-soft)', color: 'var(--celeste)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 20 }}>
                <i className="ri-home-heart-fill"></i>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Adopción y Hogar Temporal</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24, flex: 1 }}>Darle un hogar a un perrito mestizo es darle una segunda oportunidad. También puedes ser hogar temporal mientras se recuperan.</p>
              <Link href="/adopciones" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Ver perritos</Link>
            </div>

            <div className="card" style={{ padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid var(--celeste)' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,var(--celeste),var(--azul))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 20, boxShadow: '0 8px 20px rgba(31,168,224,.3)' }}>
                <i className="ri-hand-heart-fill"></i>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Donaciones de Insumos</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24, flex: 1 }}>Sobrevivimos gracias a los donativos de personas de buen corazón. Necesitamos concentrado, medicinas y artículos de limpieza.</p>
              <Link href="/donaciones" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Ver qué donar</Link>
            </div>

            <div className="card" style={{ padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--dorado-soft)', color: 'var(--dorado)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 20 }}>
                <i className="ri-store-2-fill"></i>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Tienda Solidaria</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24, flex: 1 }}>Compra tazas, playeras y accesorios del refugio. El 100% de lo recaudado sirve para pagar cirugías y tratamientos médicos urgentes.</p>
              <Link href="/tienda" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Ir a la tienda</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA LEYENDO DE SUPABASE */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--celeste)' }}>Nuestra Historia</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>¿Cómo empezó todo?</h2>
            <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
              {content.historia_principal || 'Cargando historia desde la base de datos...'}
            </p>
            <div style={{ padding: '24px', background: 'var(--dorado-soft)', borderRadius: 16, borderLeft: '4px solid var(--dorado)', marginTop: 24 }}>
              <strong style={{ display: 'block', color: '#7a5a10', fontSize: 18, marginBottom: 8 }}><i className="ri-focus-3-line"></i> Nuestra Misión</strong>
              <p style={{ fontSize: 15, color: '#7a5a10', margin: 0, lineHeight: 1.6 }}>
                {content.mision || 'Cargando misión...'}
              </p>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -15, background: 'var(--celeste-soft)', borderRadius: 30, transform: 'rotate(-3deg)' }}></div>
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" alt="Rescate de perritos" style={{ width: '100%', borderRadius: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', position: 'relative' }} />
          </div>
        </div>
      </section>

      {/* CASOS DE EXITO (NUEVA SECCIÓN) */}
      <section style={{ padding: '80px 0', background: '#0b1220', color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="eyebrow" style={{ color: 'var(--dorado)' }}>Finales Felices</p>
            <h2 className="section-title" style={{ color: '#fff' }}>El milagro del amor</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', overflow: 'hidden', padding: 0 }}>
              <div style={{ height: 220, backgroundImage: 'url("https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Canelo</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Fue rescatado tras un mes amarrado bajo la lluvia. Hoy vive en un hogar lleno de sillones suaves y dos niños que lo aman.</p>
              </div>
            </div>
            <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', overflow: 'hidden', padding: 0 }}>
              <div style={{ height: 220, backgroundImage: 'url("https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=500")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Pelusa</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Encontrada con sarna severa y desnutrición. Su transformación tomó 4 meses, y ahora es la reina indiscutible de su nueva familia.</p>
              </div>
            </div>
            <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', overflow: 'hidden', padding: 0 }}>
              <div style={{ height: 220, backgroundImage: 'url("https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=500")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Negrito</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>A sus 6 años, pensamos que nadie lo adoptaría por ser un "perrito mayor". Una pareja de abuelitos lo vio y fue amor a primera vista.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Punto de Recepción</p>
          <h2 className="section-title">Centro de Acopio en Amatitlán</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 600, margin: '0 auto 40px' }}>Por la seguridad de los perritos, la ubicación del refugio no es pública. Recibimos donaciones físicas en nuestro centro de acopio autorizado.</p>
          
          <div className="card overflow-hidden" style={{ padding: 0, border: '4px solid #fff' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30894.254394042877!2d-90.64069811559869!3d14.474614138075306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890d7db99f7f4f%3A0xbccbe4ea6c9d0b50!2sAmatitl%C3%A1n!5e0!3m2!1ses-419!2sgt!4v1717800000000!5m2!1ses-419!2sgt" width="100%" height="450" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div style={{ padding: 24, background: '#0b1220', color: '#fff', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <strong style={{ fontSize: 18, display: 'block', color: 'var(--dorado)' }}>Ubicación para donativos físicos</strong>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,.8)' }}>4.ª Calle y 4.ª Avenida, esquina, Amatitlán. (Lunes a Sábado de 9am a 4pm)</span>
              </div>
              <Link href="/donaciones" className="btn-primary" style={{ padding: '10px 20px' }}>Ver qué donar</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
