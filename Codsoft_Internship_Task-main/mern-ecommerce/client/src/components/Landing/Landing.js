import "./Landing.css";
import land from "../../asset/brand/land1.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__ambient landing__ambient--one"></div>
      <div className="landing__ambient landing__ambient--two"></div>
      <div className="landing__content">
        <div className="landing__header__container">
          <div className="landing__header">
            <span className="landing__eyebrow">NEW SEASON DROP</span>
            <h1 className="landing__header__main">
              Luxury fashion, rebuilt for a sharper everyday look.
            </h1>
            <p className="landing__header__copy">
              Discover curated silhouettes, modern layers, and premium
              essentials designed to feel editorial, expressive, and ready to
              wear.
            </p>
            <div className="landing__actions">
              <Link to="/shop">
                <Button
                  variant="contained"
                  sx={{
                    width: "190px",
                    height: "52px",
                    borderRadius: "999px",
                    fontWeight: "800",
                    backgroundColor: "var(--accent)",
                    color: "#07101f",
                    boxShadow: "0 18px 35px rgba(249, 115, 22, 0.3)",
                    "&:hover": {
                      backgroundColor: "#fb923c",
                      color: "#07101f",
                    },
                  }}
                >
                  SHOP COLLECTION
                </Button>
              </Link>
              <Link to="/category/women">
                <Button
                  variant="outlined"
                  sx={{
                    width: "170px",
                    height: "52px",
                    borderRadius: "999px",
                    fontWeight: "800",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "var(--text)",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderColor: "rgba(255, 255, 255, 0.35)",
                    },
                  }}
                >
                  EXPLORE WOMEN
                </Button>
              </Link>
            </div>
            <div className="landing__stats">
              <div className="landing__stat">
                <span className="landing__stat__value">120+</span>
                <span className="landing__stat__label">Fresh drops</span>
              </div>
              <div className="landing__stat">
                <span className="landing__stat__value">24h</span>
                <span className="landing__stat__label">Dispatch window</span>
              </div>
              <div className="landing__stat">
                <span className="landing__stat__value">4.9/5</span>
                <span className="landing__stat__label">Customer rating</span>
              </div>
            </div>
          </div>
        </div>
        <div className="landing__image__container">
          <div className="landing__image__frame">
            <img
              className="landing__image"
              src={land}
              alt="Fashion editorial hero model"
            />
          </div>
          <div className="landing__floating-card landing__floating-card--top">
            <span className="landing__floating-card__label">Curated Edit</span>
            <strong>Statement pieces with clean silhouettes</strong>
          </div>
          <div className="landing__floating-card landing__floating-card--bottom">
            <span className="landing__floating-card__label">Trending now</span>
            <strong>Tailored layers, premium textures, bold lines</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
