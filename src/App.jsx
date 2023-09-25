import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlus } from 'react-icons/fa';
import './styles/scrollbar.scss';
import './App.scss'; // Asegúrate de importar tu archivo SCSS

function App() {
  return (
    <div className='App'>
      {/* Header */}
      <header className='header'>
        {/* Barra de navegación */}
        <nav className='navbar'>
          <div className='container'>
            {/* Menú de navegación */}
            <ul className='nav-list'>
              <li><a href='#acerca'>Acerca de</a></li>
              <li><a href='#servicios'>Servicios</a></li>
              <li><a href='#mision'>Misión</a></li>
              <li><a href='#financiacion'>Financiación</a></li>
              <li><a href='#resenas'>Reseñas</a></li>
              <li><a href='#contactenos'>Contáctenos</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}

      <section className='hero'>
        <div className='container'>
          <div className='logo-container'>
            <div className='logotipo'>
              <img 
                src={require('./images/logo-panel-solar.png')} 
                alt='Logo de la empresa' 
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
          {/* Aquí puedes colocar la imagen */}
          <img
            src={require('./images/solar-home-1.jpg')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className='hero-image' // Agrega una clase para aplicar estilos específicos
          />
          <div className='hero-content'>
            {/* Aquí puedes colocar el encabezado */}
            <h1>Descubre la Energía del Mañana</h1>
            <p>Únete a la revolución de la energía sostenible.</p>
            <button type='button'>
              <a href='#acerca' style={{ textDecoration: 'none' }}>Aprende Más</a>
            </button>
          </div>
        </div>
      </section>

      <section className='about' id='acerca'>
        <div className='container'>
          <div className='about-content'>
            <h2>Acerca de Solar Home</h2>
            <p>
              Solar Home es tu socio confiable en la instalación de sistemas de energía solar residencial y comercial. Nuestro compromiso es ayudarte a aprovechar al máximo la energía solar, reduciendo tus costos de energía y tu huella de carbono.
            </p>
            <p>
              Con años de experiencia en la industria solar, nuestro equipo de expertos te guiará a través del proceso de selección, diseño e instalación de paneles solares de alta calidad. Estamos comprometidos con brindarte soluciones personalizadas y sostenibles para tu hogar o negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}

      <section className='services' id='servicios'>
        <div className='container'>
          <div className='services-content'>
            <div className='service-item-1'>
              <img
                src={require('./images/servicio-1.jpg')}
                alt='Una Amiga y Un Amigo'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className='hero-image' // Agrega una clase para aplicar estilos específicos
              />
              <div className='service-text-1'>
                <h3>Instalación Profesional</h3>
                <h4>Energía Sostenible a tu Alcance</h4>
                <p>
                  Nuestro equipo de expertos en energía solar se encargará de instalar paneles solares de alta eficiencia en tu hogar o empresa. Con una instalación profesional, puedes aprovechar al máximo la energía solar y reducir tus facturas de electricidad.
                </p>
              </div>
            </div>
            <div className='service-item-2'>
              <img
                src={require('./images/servicio-2.jpg')}
                alt='Una Amiga y Un Amigo'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className='hero-image' // Agrega una clase para aplicar estilos específicos
              />
              <div className='service-text-2'>
                <h3>Mantenimiento Confiable</h3>
                <h4>Paneles Solares Siempre en Óptimas Condiciones</h4>
                <p>
                  Ofrecemos servicios de mantenimiento preventivo y reparación de paneles solares. Nuestros técnicos altamente capacitados garantizan que tus paneles solares funcionen de manera eficiente durante años. Mantén tu inversión en energía solar en perfecto estado.
                </p>
              </div>
            </div>
            <div className='service-item-3'>
              <img
                src={require('./images/servicio-3.jpg')}
                alt='Una Amiga y Un Amigo'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className='hero-image' // Agrega una clase para aplicar estilos específicos
              />
              <div className='service-text-3'>
                <h3>Consultoría Especializada</h3>
                <h4>Planifica tu Transición a la Energía Solar</h4>
                <p>
                  Nuestros consultores en energía solar te ayudarán a tomar decisiones informadas sobre la transición a la energía solar. Te guiaremos a través de las opciones de financiamiento, el diseño de sistemas y los incentivos disponibles para que puedas obtener los máximos beneficios de la energía solar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión Section */}

      <section className='mission' id='mision'>
        <div className='container'>
          <img
            src={require('./images/solar-home-2.jpg')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className='hero-image' // Agrega una clase para aplicar estilos específicos
          />
          <div className='mission-text'>
            <h3>Empoderando Tu Futuro con Energía Solar Sostenible</h3>
            <p>
              Nuestra misión es hacer que la energía solar sea accesible y asequible para todos, promoviendo un futuro más limpio y sostenible a través de soluciones de alta calidad y prácticas ambientalmente responsables.
            </p>
          </div>
        </div>
      </section>
      <section className='financing' id='financiacion'>
        <div className='container'>
          {/* Contenido de la sección 'Financiación' */}
          <div className='video-container'>
            <iframe
              width={800 * 0.8} // Recudir tamaño original al 20%
              height={450 * 0.8}
              src='https://www.youtube.com/embed/xKxrkht7CpY' // URL de embebido del video
              title='Video Solar Home'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
          <div className='text-container'>
            <h3>Financiación Flexible</h3>
            <p>
              En Solar Hogar, entendemos que dar el salto hacia la energía solar puede ser una inversión significativa. Por eso, ofrecemos soluciones de financiación flexibles diseñadas para hacer que la transición a la energía solar sea accesible para todos. Nuestros planes de financiamiento te permiten disfrutar de los beneficios de la energía solar sin un impacto inmediato en tu presupuesto. Con tasas competitivas y plazos flexibles, estamos comprometidos en ayudarte a impulsar un futuro sostenible sin preocupaciones financieras. Juntos, podemos hacer que la energía solar sea una realidad para tu hogar o negocio.
            </p>
          </div>
        </div>
      </section>

      <section className='reviews' id='resenas'>
        <div className='container'>
          <Carousel
            autoPlay={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            className='carousel-container'
          >
            <div style={{ position: 'relative', userSelect: 'none' }}>
              <img
                src={require('./images/review-1.jpg')}
                alt='Almacén con Paneles Solares'
              />
              <h3>María González</h3>
              <p>
                ¡Los paneles solares han cambiado mi vida! Gracias a ellos, he reducido significativamente mis facturas de electricidad y contribuido a la protección del medio ambiente. ¡Una inversión que realmente vale la pena!
              </p>
            </div>
            <div style={{ position: 'relative', userSelect: 'none' }}>
              <img 
                src={require('./images/review-2.jpg')} 
                alt='Departamentos con Paneles Solares' 
              />
              <h3>Juan Carlos Pérez</h3>
              <p>
                Desde que instalé paneles solares en mi hogar, me he sentido más independiente energéticamente. La tecnología es confiable y eficiente, y no puedo dejar de recomendarla a amigos y familiares.
              </p>
            </div>
            <div style={{ position: 'relative', userSelect: 'none' }}>
              <img
                src={require('./images/review-3.jpg')}
                alt='Casa con Paneles Solares'
              />
              <h3>Laura Rodríguez</h3>
              <p>
                Como dueña de un negocio, la decisión de adoptar paneles solares fue una de las mejores que he tomado. No solo hemos reducido nuestros costos operativos, sino que también hemos ganado la admiración de nuestros clientes por nuestro compromiso con la sostenibilidad.
              </p>
            </div>
            <div style={{ position: 'relative', userSelect: 'none' }}>
              <img
                src={require('./images/review-4.jpg')}
                alt='Campo con Paneles Solares'
              />
              <h3>Diego López</h3>
              <p>
                La energía solar es el futuro, y no puedo estar más satisfecho con mi sistema de paneles solares. Además de los beneficios económicos, siento que estoy haciendo mi parte para combatir el cambio climático. ¡Es una victoria para todos!
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      <section className='contact' id='contactenos'>
        <div className='container'>
          {/* Agrega los iconos de redes sociales */}
          <div className='container-icons'>
            <h2>Asegure el futuro energético de su hogar</h2>
            <p>
              ¡Descubra soluciones confiables de energía de respaldo ahora!
            </p>
            <p>
              +1 (123) 456-7890.
            </p>
            <p>
              info@solar-hogar.com.
            </p>
            <div className='social-icons'>
              <a href='https://github.com/AldG99/solar-hogar' className='social-icon'>
                <FaFacebook />
              </a>
              <a href='https://github.com/AldG99/solar-hogar' className='social-icon'>
                <FaInstagram />
              </a>
              <a href='https://github.com/AldG99/solar-hogar' className='social-icon'>
                <FaTwitter />
              </a>
              <a href='https://github.com/AldG99/solar-hogar' className='social-icon'>
                <FaGooglePlus />
              </a>
            </div>
          </div>
          {/* Contenido de la sección de contacto */}
          <div className='container-form'>
            <form>
              <h2>Contacto</h2>
              <div className='form-group'>
                <label className='form-text' htmlFor='nombreCompleto'>Nombre Completo</label>
                <input type='text' id='nombreCompleto' name='nombreCompleto' required />
              </div>
              <div className='form-group'>
                <label className='form-text' htmlFor='correoElectronico'>Correo Electrónico</label>
                <input type='email' id='correoElectronico' name='correoElectronico' required />
              </div>
              <div className='form-group'>
                <label className='form-text' htmlFor='numeroTelefono'>Número de Teléfono</label>
                <input type='tel' id='numeroTelefono' name='numeroTelefono' required />
              </div>
              <div className='form-group'>
                <label className='form-text' htmlFor='direccion'>Dirección</label>
                <input type='text' id='direccion' name='direccion' required />
              </div>
              <div className='form-group'>
                <label className='form-text' htmlFor='consumoAnual'>Consumo Anual de Electricidad (kWh)</label>
                <input type='number' id='consumoAnual' name='consumoAnual' required />
              </div>
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      
      <footer className='footer'>
        <div className='container'>
          <div className='copyright'>
            © 2023 Alfredo García. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
