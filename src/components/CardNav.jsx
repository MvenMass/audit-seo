import { GoArrowUpRight } from "react-icons/go";

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
        
        {/* Логотип слева */}
        <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt={logoAlt} className="logo" style={{ height: "30px" }} />
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
    style={{
      backgroundColor: buttonBgColor,
      color: buttonTextColor,
      padding: "11px 34px",
      borderRadius: "40px",
      fontWeight: "600",
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Связаться с нами
  </button>
</a>
      </nav>
    </div>
  );
};

export default CardNav;
