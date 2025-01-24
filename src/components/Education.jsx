import React from "react";

function Education() {
  return (
    <section className="section__container education__container">
      <h2 className="section__title">Educational Background</h2>
      <p className="section__subtitle">
        My academic journey has been focused on computer science and artificial intelligence, enabling me to develop skills in software development and machine learning.
      </p>
      <div className="education__grid">
        <div className="education__card">
          <p className="education__degree">Bachelor of Technology (B.Tech)</p>
          <p className="education__details">
            Artificial Intelligence & Data Science, Sri Eshwar College of Engineering <br />
            2023 - Present
          </p>
        </div>
        <div className="education__card">
          <p className="education__degree">Vimal Matric Higher Secondary School</p>
          <p className="education__details">
            Vimal Matric Higher Secondary School <br />
            2021 - 2023
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
