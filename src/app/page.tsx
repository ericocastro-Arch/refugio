"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=2000" alt="Perrito rescatado" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(8,20,50,.92),rgba(8,20,50,.7) 50%,rgba(8,20,50,.3))' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4" style={{ position: 'relative', padding: '100px 16px 80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--dorado)', color: '#0b1220', padding: '8px 18px', borderRadius: 30, fontWeight: 900, fontSize: 13, marginBottom: 18, boxShadow: '0 4px 15px rgba(217,165,32,0.3)' }}>
            <i className="ri-gift-fill"></i> Todos nuestros servicios son gratuitos
          </div>
          <h1 style={{ color: '#fff', fontSize: 46, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', maxWidth: 650, margin: '0 0 16px' }}>
            Cada perrito abandonado merece una segunda oportunidad
          </h1>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 16, maxWidth: 550, marginBottom: 32, lineHeight: 1.6 }}>
            Somos un refugio independiente, sin fines de lucro y 100% voluntario en Amatitlán. <strong>En Amatitlán no existen albergues formales.</strong> Hacemos esta labor por amor puro, sin apoyo municipal ni gubernamental. Tu ayuda cambia vidas.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
            <Link href="/donaciones" className="btn-gold" style={{ textDecoration: 'none', padding: '14px 28px', fontSize: 15 }}>
              <i className="ri-heart-fill"></i> Quiero Donar
            </Link>
            <Link href="/adopciones" className="btn-outline" style={{ textDecoration: 'none', padding: '14px 28px', fontSize: 15, background: 'rgba(255,255,255,.12)', color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}>
              <i className="ri-paw-fill"></i> Ver Perritos
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))', gap: 10, maxWidth: 650 }}>
            <Link href="/reportar" className="chip" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', padding: '14px 8px', background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.25)', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}><i className="ri-alarm-warning-fill" style={{ color: 'var(--celeste)', fontSize: 22 }}></i><span style={{fontWeight:800}}>Reportar</span></Link>
            <Link href="/adopciones" className="chip" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', padding: '14px 8px', background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.25)', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}><i className="ri-home-heart-fill" style={{ color: 'var(--dorado)', fontSize: 22 }}></i><span style={{fontWeight:800}}>Adoptar</span></Link>
            <Link href="/castraciones" className="chip" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', padding: '14px 8px', background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.25)', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}><i className="ri-scissors-cut-fill" style={{ color: '#34d399', fontSize: 22 }}></i><span style={{fontWeight:800}}>Castrar</span></Link>
            <Link href="/donaciones#voluntariado" className="chip" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', padding: '14px 8px', background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.25)', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}><i className="ri-team-fill" style={{ color: 'var(--azul)', fontSize: 22 }}></i><span style={{fontWeight:800}}>Ayudar</span></Link>
            <Link href="/visitas" className="chip" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', padding: '14px 8px', background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.25)', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}><i className="ri-calendar-event-fill" style={{ color: '#a78bfa', fontSize: 22 }}></i><span style={{fontWeight:800}}>Visitas</span></Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '40px 0', background: '#0b1220', color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24, textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--celeste)', marginBottom: 4 }}>+300</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Perritos Rescatados</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--dorado)', marginBottom: 4 }}>+150</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Adopciones Exitosas</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#34d399', marginBottom: 4 }}>+500</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Castraciones Realizadas</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--azul)', marginBottom: 4 }}>100%</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amor y Voluntariado</div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section style={{ padding: '80px 0', background: '#f7fbff' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }} className="md:grid-cols-1">
            <div>
              <p className="eyebrow">Nuestra historia</p>
              <h2 className="section-title">Un sueño llamado santuario</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>
                DOG Rescue Guatemala nace del amor incondicional por los animales y la necesidad urgente de actuar ante el doloroso abandono en las calles de Amatitlán. En nuestro municipio <strong>no existen albergues formales</strong> ni centros de bienestar animal, por lo que miles de perritos sufren diariamente.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                Somos un pequeño grupo de voluntarios que decidió no mirar hacia otro lado. Sin recibir ni un centavo de apoyo de la municipalidad ni del Gobierno, pusimos manos a la obra. Rescatamos, curamos, alimentamos y rehabilitamos a perritos que han vivido el peor lado de la humanidad, para mostrarles que también existe la bondad.
              </p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border)', padding: '20px', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <div style={{ background: 'var(--dorado-soft)', width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="ri-target-fill" style={{ color: 'var(--dorado)', fontSize: 24 }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 900, color: '#0b1220' }}>Nuestra Gran Misión</h4>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>
                    Llegar a tener un <strong>Santuario Propio</strong>. Un lugar seguro, amplio y rodeado de naturaleza donde los perritos que no encuentren hogar puedan vivir dignamente por el resto de sus días.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" alt="Perritos jugando" style={{ width: '100%', borderRadius: 24, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
              <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', padding: 16, borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <i className="ri-heart-pulse-fill" style={{ fontSize: 32, color: 'var(--celeste)' }}></i>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>100% Vida</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>No practicamos la eutanasia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="eyebrow">Nuestros Valores</p>
          <h2 className="section-title" style={{ marginBottom: 40 }}>¿Qué nos hace diferentes?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 24 }}>
            <div className="card p-8" style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, margin: '0 auto 16px', background: 'var(--celeste-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-shield-cross-fill" style={{ fontSize: 32, color: 'var(--celeste)' }}></i>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>Rescate Ético</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>Solo intervenimos en casos de abandono real o maltrato extremo comprobado. No somos guardería ni asilo para dueños irresponsables.</p>
            </div>
            <div className="card p-8" style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, margin: '0 auto 16px', background: 'var(--azul-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-money-dollar-circle-line" style={{ fontSize: 32, color: 'var(--azul)' }}></i>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>Transparencia Total</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>Cada quetzal donado se invierte íntegramente en los animales: veterinario, medicinas y alimento. Nadie cobra un salario en el refugio.</p>
            </div>
            <div className="card p-8" style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, margin: '0 auto 16px', background: 'rgba(13,150,105,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ri-leaf-fill" style={{ fontSize: 32, color: '#0d9669' }}></i>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>Rehabilitación Integral</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>No solo curamos heridas físicas. Trabajamos la confianza y los traumas para asegurar que estén listos para una familia amorosa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA Y UBICACIÓN */}
      <section style={{ padding: '80px 0', background: '#f7fbff' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'center' }} className="md:grid-cols-1">
            <div>
              <p className="eyebrow">Ubicación</p>
              <h2 className="section-title">Centro de acopio de donaciones</h2>
              
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', padding: '12px 16px', borderRadius: 12, fontSize: 13, color: '#991b1b', fontWeight: 700, marginBottom: 24, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <i className="ri-error-warning-fill" style={{ fontSize: 20 }}></i>
                <div>
                  <strong>IMPORTANTE:</strong> Esta dirección corresponde a nuestro Centro de Acopio, <strong>NO al refugio</strong>. Por la seguridad de los animales (para evitar abandonos en la puerta), la dirección exacta del refugio no es pública.
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--celeste-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="ri-map-pin-2-fill" style={{ color: 'var(--celeste)', fontSize: 24 }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 800 }}>Dirección de Entrega</h4>
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--muted)' }}>
                    4.ª Calle y 4.ª Avenida, esquina.<br />
                    Amatitlán, Guatemala.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--dorado-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="ri-time-fill" style={{ color: 'var(--dorado)', fontSize: 24 }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 800 }}>Horario de Recepción</h4>
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--muted)' }}>
                    Lunes a Sábado: 9:00 a.m. a 4:00 p.m.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 24, padding: '16px', borderLeft: '4px solid var(--azul)', background: '#fff' }}>
                Si utilizas servicios de mensajería (Hugo, PedidosYa, CargoExpreso, Guatex), puedes dirigir tu paquete a nombre de <strong>"DOG Rescue Guatemala"</strong> a esta dirección.
              </p>
            </div>
            
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', height: 400, border: '1px solid var(--border)' }}>
              {/* iFrame de Google Maps apuntando a Amatitlán Centro (como referencia para la 4ta calle y 4ta avenida) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15449.626295552945!2d-90.62770252119957!3d14.484227096677943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85882cd4b9e27303%3A0xc4f5a3a7139174fb!2sAmatitl%C3%A1n%2C%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1700000000000!5m2!1ses-419!2sgt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
