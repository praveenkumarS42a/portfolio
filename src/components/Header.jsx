import React from "react";

function Header() {
  return (
    <header>
      <div className="section__container header__container">
        <div className="header__image">
          <img src="/assets/header-1.jpg" alt="header" />
          <img src="/assets/header-2.jpg" alt="header" />
        </div>
        <div className="header__content">
          <div>
            <p className="sub__header">Hi, I'm</p>
            <h1>Praveenkumar <br />Software Developer & AI/ML Enthusiast</h1>
            <p className="section__subtitle">
              Combining my expertise in software development and machine learning, I aim to solve complex problems and create intelligent systems that drive innovation.
            </p>
            <div className="action__btns">
              <button className="btn">Educational Details</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
