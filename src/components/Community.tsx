import "./community.css";

const Community = () => {
  return (
    <div className="community">
      <div className="community__container">
        <div className="community__header">
          <div className="community__logo-container">
            <img
              src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740768075/49378cc9-abb8-4efa-95cb-528ae1bb41ea-removebg-preview_ml5zx2.png"
              alt="Grumpy Cat Logo"
              className="community__logo"
            />
          </div>
          <div className="community__tagline">
            <h1 className="community__title">
              NO HAY MONEDAS MALAS, SOLO CREADORES CRIMINALES.
            </h1>
          </div>
          <div className="community__cta">
            <button className="community__buy-button">Buy $MCapital</button>
          </div>
        </div>

        <div className="community__content">
          <div className="community__disclaimer">
            <h2 className="community__disclaimer-title">INFORMACIÓN</h2>
            <p className="community__disclaimer-text">
              MindCapital vendió la promesa de ganancias fáciles, pero terminó
              siendo un esquema Ponzi que dejó a miles de personas sin su
              dinero. Muchos confiaron en el sistema y nunca pudieron recuperar
              lo que invirtieron.
            </p>
            <p className="community__disclaimer-text">
            $MCapital no es solo una memecoin, es una revancha financiera. Una parte de las ganancias financiará la demanda contra MindCapital, mientras que el resto impulsará la visibilidad del proyecto.
            </p>
            <a href="#" className="community__learn-more">
              Aprende más <span className="community__learn-more-icon">↗</span>
            </a>
            <p className="community__copyright">© 2025 MCapital.Site</p>
          </div>

          <div className="community__join">
            <h2 className="community__join-title">Entra a la comunidad</h2>
            <div className="community__social-buttons">
              <button className="community__social-button community__social-button--telegram">
                Telegram
              </button>
              <button className="community__social-button community__social-button--twitter">
                Twitter
              </button>
            </div>
            <div className="community__mascot">
              <img
                src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1740768075/49378cc9-abb8-4efa-95cb-528ae1bb41ea-removebg-preview_ml5zx2.png"
                alt="Grumpy Mascot"
                className="community__mascot-image"
              />
              <span className="community__mascot-name">$MCapital</span>
            </div>
            <div className="community__navigation">
              <button className="community__nav-button">Home</button>
              <button className="community__nav-button">Acerca de</button>
              <button className="community__nav-button">Roadmap</button>
              <button className="community__nav-button">Contrato</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
