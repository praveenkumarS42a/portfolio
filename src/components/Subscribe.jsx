import React from "react";

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="section__container subscribe__container">
        <div className="subscribe__content">
          <h2 className="section__title">Subscribe for Updates</h2>
          <p className="section__subtitle">
            Stay updated on my latest projects, research, and resources in the fields of AI and machine learning.
          </p>
        </div>
        <div className="subscribe__form">
          <form>
            <input type="email" placeholder="Your email here" />
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
