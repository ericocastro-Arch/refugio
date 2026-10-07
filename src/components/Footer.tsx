import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#0b1220', color: 'rgba(255,255,255,.6)', padding: '60px 0 30px', borderTop: '1px solid rgba(255,255,255,.1)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: '#fff', marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,var(--celeste),var(--azul))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <i className="ri-paw-fill" style={{ fontSize: 18 }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 14, lineHeight: 1.1 }}>DOG Rescue</div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,.6)', fontWeight: 700 }}>GUATEMALA</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
              Refugio independiente y sin fines de lucro en Amatitlán. Trabajamos por amor a los animales, sin apoyo gubernamental.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(217,165,32,.15)', color: 'var(--dorado)', padding: '6px 12px', borderRadius: 20, fontSize: 11, fontWeight: 800 }}>
              <i className="ri-gift-fill"></i> Servicios 100% gratuitos
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 800, fontSize: 15, marginBottom: 16 }}>Enlaces Rápidos</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <li><a href="/adopciones" style={{ color: 'inherit', textDecoration: 'none' }}>Perritos en Adopción</a></li>
              <li><a href="/donaciones" style={{ color: 'inherit', textDecoration: 'none' }}>Cómo Donar</a></li>
              <li><a href="/reportar" style={{ color: 'inherit', textDecoration: 'none' }}>Reportar un Caso</a></li>
              <li><a href="/castraciones" style={{ color: 'inherit', textDecoration: 'none' }}>Jornadas de Castración</a></li>
              <li><a href="/visitas" style={{ color: 'inherit', textDecoration: 'none' }}>Agendar Visita</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 800, fontSize: 15, marginBottom: 16 }}>Síguenos en Redes</h4>
            <p style={{ fontSize: 13, marginBottom: 16 }}>Únete a nuestra comunidad y ayúdanos a compartir los casos de rescate y adopción.</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'background .2s' }} className="hover:bg-blue-600">
                <i className="ri-facebook-fill" style={{ fontSize: 20 }}></i>
              </a>
              <a href="#" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'background .2s' }} className="hover:bg-pink-600">
                <i className="ri-instagram-fill" style={{ fontSize: 20 }}></i>
              </a>
              <a href="#" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'background .2s' }} className="hover:bg-green-500">
                <i className="ri-whatsapp-fill" style={{ fontSize: 20 }}></i>
              </a>
              <a href="#" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'background .2s' }} className="hover:bg-red-500">
                <i className="ri-mail-fill" style={{ fontSize: 20 }}></i>
              </a>
            </div>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', fontSize: 12, borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: 24 }}>
          © 2026 DOG Rescue Guatemala · Hecho con amor por los animales
        </div>
      </div>
    </footer>
  );
}
