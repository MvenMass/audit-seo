import React from 'react';
import './AboutUsNumber.css'; // подключи стили, если надо

function AboutUsNumber() {
  return (
    <section className="about__us-number">
      <div className="container services__container">
        <div className="about__us-number-header">
          <h2 className="icon-text title title--theme-dark">О нас</h2>
          <div>
            <p className="about__us-header-title">Мы привлекаем клиентов</p>
          </div>
        </div>

        <p className="about__us-header-title">
          <span>а Вы — увеличиваете прибыль!</span>
        </p>
<div className='about__us_cont'>
        <div className="about__us-number-stats-container-right">
          <p className="about__us-header-text">
            Мы — команда профессионалов, которая помогает привлекать клиентов через сайт и не только. Работаем с самыми конкурентными нишами - недвижимость, медицина, стройка, курсы, гемблинг, мебель, интернет-магазин товаров и так далее.
          </p>
        </div>

        <div className="about__us-number-stats-container-right">
          <div className="us-number-stat-block about-number-stat-block">
            <div className="number is-visible">32<span className='number-accent'>%</span></div>
            <div className="description">новых клиентов приходят<br /> по рекомендациям</div>
          </div>

          <div className="us-number-stat-block about-number-stat-block">
            <div className="number is-visible">3<span>+</span></div>
            <div className="description">года на рынке</div>
          </div>

          <div className="us-number-stat-block about-number-stat-block">
            <div className="number is-visible">100<span>+</span></div>
            <div className="description">довольных клиентов</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsNumber;
