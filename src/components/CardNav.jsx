import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  className = "",
  baseColor = "#fff",
  buttonBgColor = "#000",
  buttonTextColor = "#fff",
}) => {
  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        className="card-nav"
        style={{
          backgroundColor: baseColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Логотип слева — всегда на главную (SPA-ссылка) */}
        <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt={logoAlt} className="logo" style={{ height: "30px" }} />
          </Link>
        </div>

        {/* Кнопка справа */}
        <a
          href="https://seo-performance.ru/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            type="button"
            className="card-nav-cta-button"
          
          >
            Связаться с нами
          </button>
        </a>
      </nav>
    </div>
  );
};

export default CardNav;
