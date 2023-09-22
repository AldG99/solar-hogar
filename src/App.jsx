import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlus } from "react-icons/fa";
import './styles/scrollbar.scss';
import './App.scss'; // Asegúrate de importar tu archivo SCSS



function App() {

  return (
<div className="App">
  {/* Header */}
  <header className="header">
    {/* Barra de navegación */}
    <nav className="navbar">
      <div className="container">
        {/* Menú de navegación */}
        <ul className="nav-list">
          <li><a href="#acerca">Acerca de</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#mision">Misión</a></li>
          <li><a href="#financiacion">Financiación</a></li>
          <li><a href="#resenas">Reseñas</a></li>
          <li><a href="#contactenos">Contáctenos</a></li>
        </ul>
      </div>
    </nav>
  </header>

  {/* Hero Section */}
  <section className="hero">
    <div className="container">
      {/* Aquí puedes colocar la imagen */}
      <img
        src={require('./images/solar-home-1.jpg')}
        alt='Una Amiga y Un Amigo'
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="hero-image" // Agrega una clase para aplicar estilos específicos
      />
      <div className="hero-content">
        {/* Aquí puedes colocar el encabezado */}
        <h1>Descubre la Energía del Mañana</h1>
        <p>Explora nuestra gama de paneles solares y únete a la revolución de la energía sostenible.</p>
        <button type="button">
  <a href="#acerca">Aprende Más</a>
</button>

      </div>
    </div>
  </section>



  <section className="about" id="acerca">
  <div className="container">
    <div className="about-content">
      <h2>Acerca de Solar Home</h2>
      <p>
        Solar Home es tu socio confiable en la instalación de sistemas de energía solar residencial
        y comercial. Nuestro compromiso es ayudarte a aprovechar al máximo la energía solar,
        reduciendo tus costos de energía y tu huella de carbono.
      </p>
      <p>
        Con años de experiencia en la industria solar, nuestro equipo de expertos te guiará a través
        del proceso de selección, diseño e instalación de paneles solares de alta calidad.
        Estamos comprometidos con brindarte soluciones personalizadas y sostenibles para tu hogar o negocio.
      </p>
    </div>
  </div>
</section>

      {/* Sección de Servicios o Productos */}
<section className="services" id="servicios">
  <div className="container">
    <div className="services-content">
      <div className="service-item-1">
      <img
        src={require('./images/servicio-1.jpg')}
        alt='Una Amiga y Un Amigo'
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="hero-image" // Agrega una clase para aplicar estilos específicos
      />
        <div className='service-text-1'>
        <h3>Servicio 1</h3>
        <h4>Servicio 1</h4>
        <p>Descripción del Servicio 1.</p>
        </div>
      </div>
      <div className="service-item-2">
      <img
        src={require('./images/servicio-2.jpg')}
        alt='Una Amiga y Un Amigo'
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="hero-image" // Agrega una clase para aplicar estilos específicos
      />
        <div className='service-text-2'>
        <h3>Servicio 2</h3>
        <h4>Servicio 1</h4>
        <p>Descripción del Servicio 2.</p>
        </div>
      </div>
      <div className="service-item-3">
      <img
        src={require('./images/servicio-3.jpg')}
        alt='Una Amiga y Un Amigo'
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="hero-image" // Agrega una clase para aplicar estilos específicos
      />
      <div className='service-text-3'>
        <h3>Servicio 3</h3>
        <h4>Servicio 1</h4>
        <p>Descripción del Servicio 3.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Misión Section */}
      <section className="mission" id="mision">
        <div className="container">
        <img
        src={require('./images/solar-home-2.jpg')}
        alt='Una Amiga y Un Amigo'
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="hero-image" // Agrega una clase para aplicar estilos específicos
      />
      <div className='mission-text'>
        <h3>Mision</h3>
        <p>TEXTO</p>
        </div>
        </div>
      </section>

      <section className="financing" id="financiacion">
  <div className="container">
    {/* Contenido de la sección "Financiación" */}
    <div className="video-container">
    <iframe
  width='800'
  height='450'
  src='https://www.youtube.com/embed/xKxrkht7CpY' // URL de embebido del video
  title='Video Solar Home'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  allowFullScreen
></iframe>

</div>
    <div className="text-container">
      {/* Aquí puedes agregar tu contenido de texto */}
      <h3>Título del Video</h3>
      <p>Descripción del video y otros detalles relacionados con la financiación.</p>
    </div>
  </div>
</section>


<section className="reviews" id="resenas">
  <div className="container">
  <Carousel autoPlay={true} interval={3000} showThumbs={false} showStatus={false} infiniteLoop={true} className='carousel-container'>
  <div style={{ position: 'relative', userSelect: 'none' }}>
        <img src={require('./images/review-1.jpg')} alt='Almacén con Paneles Solares' />
        <h3>Autor 1</h3>
        <p>Reseña</p>
      </div>
      <div style={{ position: 'relative', userSelect: 'none' }}>
        <img src={require('./images/review-2.jpg')} alt='Departamentos con Paneles Solares' />
        <h3>Autor 2</h3>
        <p>Reseña</p>
      </div>
      <div style={{ position: 'relative', userSelect: 'none' }}>
        <img src={require('./images/review-3.jpg')} alt='Casa con Paneles Solares' />
        <h3>Autor 3</h3>
        <p>Reseña</p>
      </div>
      <div style={{ position: 'relative', userSelect: 'none' }}>
        <img src={require('./images/review-4.jpg')} alt='Campo con Paneles Solares' />
        <h3>Autor 4</h3>
        <p>Reseña</p>
      </div>
    </Carousel>
  </div>
</section>


<section className="contact" id="contactenos">
  <div className="container">
  {/* Agrega los iconos de redes sociales */}
  <div className='container-icons'>
  <div className="social-icons">
          <a href="https://github.com/" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://github.com/" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://github.com/" className="social-icon">
            <FaGooglePlus />
          </a>
        </div>
        </div>
    {/* Contenido de la sección de contacto */}
    <div className='container-form'>
    <form>
      <h2>Contacto</h2>
      <div className="form-group">
        <label className='form-text' htmlFor="nombreCompleto">Nombre Completo</label>
        <input type="text" id="nombreCompleto" name="nombreCompleto" required />
      </div>
      <div className="form-group">
        <label className='form-text' htmlFor="correoElectronico">Correo Electrónico</label>
        <input type="email" id="correoElectronico" name="correoElectronico" required />
      </div>
      <div className="form-group">
        <label className='form-text' htmlFor="numeroTelefono">Número de Teléfono</label>
        <input type="tel" id="numeroTelefono" name="numeroTelefono" required />
      </div>
      <div className="form-group">
        <label className='form-text' htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" name="direccion" required />
      </div>
      <div className="form-group">
        <label className='form-text' htmlFor="consumoAnual">Consumo Anual de Electricidad (kWh)</label>
        <input type="number" id="consumoAnual" name="consumoAnual" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
        <div className='copyright'>
          © 2023 Alfredo García. Todos los derechos reservados.
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
