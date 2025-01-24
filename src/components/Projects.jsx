import React from "react";

function Projects() {
  return (
    <section className="section__container destination__container">
      <div className="section__header">
        <h2 className="section__title">Academic Projects</h2>
      </div>
      <div className="destination__grid">
        <div className="destination__card">
          <img src="/assets/project-1.jpg" alt="project" />
          <div className="destination__details">
            <p className="destination__title">Predictive Analysis System</p>
            <p className="destination__subtitle">
              A machine learning model for forecasting trends using time-series data, developed during my undergraduate studies.
            </p>
          </div>
        </div>
        <div className="destination__card">
          <img src="/assets/project-2.jpg" alt="project" />
          <div className="destination__details">
            <p className="destination__title">Personalized Learning Platform</p>
            <p className="destination__subtitle">
              A platform utilizing AI to deliver tailored study materials based on individual learning patterns.
            </p>
          </div>
        </div>
        <div className="destination__card">
          <img src="/assets/project-3.jpg" alt="project" />
          <div className="destination__details">
            <p className="destination__title">College Database Management System</p>
            <p className="destination__subtitle">
              An efficient system for managing academic records, created as part of my coursework in database systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
