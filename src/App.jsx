import "./App.css";

export default function App() {
  const whatsapp = "https://wa.me/523332187199";

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Héctor Web Studio</h2>
        <div>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#precios">Precios</a>
          <a href={whatsapp} target="_blank">Contacto</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <span>Páginas web para negocios locales</span>
          <h1>Diseño páginas modernas para que tu negocio venda más</h1>
          <p>
            Landing pages rápidas, profesionales y adaptadas a celular para
            gimnasios, restaurantes, cafeterías, consultorios y negocios locales.
          </p>

          <div className="hero-buttons">
            <a href="#proyectos">Ver proyectos</a>
            <a href={whatsapp} target="_blank" className="secondary">
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="about">
        <p className="section-label">Sobre mí</p>
        <h2>Diseño web claro, funcional y accesible</h2>
        <p>
          Soy Héctor Romero, estudiante de Física en la Universidad de
          Guadalajara y desarrollador web independiente. Ayudo a pequeños
          negocios a tener presencia profesional en internet mediante páginas
          modernas, rápidas y fáciles de compartir.
        </p>
      </section>

      <section className="projects" id="proyectos">
        <p className="section-label">Portafolio</p>
        <h2>Proyectos de demostración</h2>

        <div className="project-grid">
          <Project
            title="Orange Gym"
            category="Gimnasio"
            text="Landing page para gimnasio con secciones de planes, beneficios, ubicación y contacto."
            link="https://orange-gym-web.vercel.app"
          />
          <Project
            title="Sabor Local"
            category="Restaurante"
            text="Página para restaurante con menú visual, galería, opiniones, mapa y WhatsApp."
            link="https://restaurante-web.vercel.app"
          />
          <Project
            title="Café Aroma"
            category="Cafetería"
            text="Plantilla premium para cafetería con productos destacados, galería y ambiente visual."
            link="#"
          />
          <Project
            title="Clínica Vital"
            category="Consultorio"
            text="Página profesional para consultorio con servicios, especialista, ubicación y citas."
            link="#"
          />
        </div>
      </section>

      <section className="services" id="servicios">
        <p className="section-label">Servicios</p>
        <h2>Qué incluye tu página</h2>

        <div className="service-grid">
          <Service title="Diseño responsive" text="Tu página se verá bien en celular, tablet y computadora." />
          <Service title="WhatsApp integrado" text="Botones directos para que tus clientes te contacten rápido." />
          <Service title="Google Maps" text="Ubicación visible para que puedan llegar fácilmente a tu negocio." />
          <Service title="Hosting 24/7" text="La página queda publicada en internet aunque tu computadora esté apagada." />
          <Service title="Dominio propio" text="Te ayudo a conectar un dominio como tunegocio.com." />
          <Service title="Actualizaciones" text="Puedo cambiar horarios, precios, promociones o imágenes cuando lo necesites." />
        </div>
      </section>

      <section className="pricing" id="precios">
        <p className="section-label">Precios</p>
        <h2>Paquetes iniciales</h2>

        <div className="pricing-grid">
          <Plan
            name="Básico"
            price="$2,500"
            items={[
              "Landing page sencilla",
              "WhatsApp",
              "Google Maps",
              "Diseño adaptable a celular",
            ]}
          />
          <Plan
            name="Profesional"
            price="$4,500"
            featured
            items={[
              "Diseño más completo",
              "Galería de imágenes",
              "Menú o servicios",
              "Dominio conectado",
              "SEO básico",
            ]}
          />
          <Plan
            name="Premium"
            price="$7,000"
            items={[
              "Página personalizada",
              "Copywriting básico",
              "Más secciones",
              "Soporte inicial",
              "Optimización visual",
            ]}
          />
        </div>
      </section>

      <section className="cta">
        <h2>¿Quieres una página para tu negocio?</h2>
        <p>
          Mándame mensaje y te muestro cómo podría verse tu negocio en internet.
        </p>
        <a href={whatsapp} target="_blank">Cotizar por WhatsApp</a>
      </section>

      <footer>
        <h3>Héctor Web Studio</h3>
        <p>Diseño web para negocios locales.</p>
        <p>© 2026 Héctor Romero. Todos los derechos reservados.</p>
      </footer>

      <a className="whatsapp" href={whatsapp} target="_blank">💬</a>
    </div>
  );
}

function Project({ title, category, text, link }) {
  return (
    <div className="project-card">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link} target="_blank">Ver demo</a>
    </div>
  );
}

function Service({ title, text }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Plan({ name, price, items, featured }) {
  return (
    <div className={featured ? "plan featured" : "plan"}>
      {featured && <span className="badge">Más recomendado</span>}
      <h3>{name}</h3>
      <h4>{price} MXN</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}