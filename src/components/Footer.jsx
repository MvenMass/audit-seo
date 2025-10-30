import React from 'react';

const Footer = ({ logo, logoAlt }) => {
  
  const servicesFirstColumn = [
    { name: "SEO Продвижение сайта Яндекс", href: "/uslugi/prodvizhenie-sajta-v-yandex/" },
    { name: "SEO Продвижение сайта Google", href: "/uslugi/prodvizhenie-sajta-v-google/" },
    { name: "Комплексное SEO", href: "#" },
    { name: "SEO Продвижение по трафику", href: "/uslugi/prodvizhenie-po-trafiky/" },
    { name: "SEO Продвижение по позициям", href: "https://seo-performance.ru/uslugi/prodvizhenie-po-pozicijam/" },
    { name: "Продвижение в маркетплейсах", href: "https://seo-performance.ru/uslugi/prodvizheniye-na-marketplejs/" },
    { name: "SEO Копирайтинг", href: "https://seo-performance.ru/uslugi/seo-kopirajting/" },
    { name: "SMM продвижение", href: "https://seo-performance.ru/smm/" },
    { name: "Цены на SEO", href: "#" }
  ];

  const servicesSecondColumn = [
    { name: "Таргетированная реклама", href: "https://seo-performance.ru/target/" },
    { name: "SERM", href: "#" },
    { name: "ORM", href: "#" },
    { name: "CRM маркетинг", href: "#" },
    { name: "Google Adwords", href: "https://seo-performance.ru/google-adwords/" },
    { name: "Продвижение Telegram", href: "https://seo-performance.ru/uslugi/telegram-promoti/" },
    { name: "Ведение Telegram", href: "#" },
    { name: "Яндекс Директ", href: "https://seo-performance.ru/uslugi/yandex-direct/" }
  ];

  const servicesThirdColumn = [
    { name: "Продвижение Youtube", href: "https://seo-performance.ru/uslugi/prodvizhenie-na-youtube/" },
    { name: "Реклама у блогеров", href: "https://seo-performance.ru/uslugi/reklama-blogerov/" },
    { name: "Технический SEO аудит", href: "https://seo-performance.ru/uslugi/tekhnicheskiy-audit/" },
    { name: "Коммерческий SEO аудит", href: "#" },
    { name: "Юзабилити аудит", href: "https://seo-performance.ru/uslugi/usability-audit/" },
    { name: "Маркетинговый аудит", href: "#" },
    { name: "Разработка сайтов", href: "https://seo-performance.ru/razrabotka-sajta-pod-klyuch/" }
  ];

  const companyLinks = [
    { name: "Вакансии", href: "https://hh.ru/employer/9170839" },
    { name: "Блог", href: "https://seo-performance.ru/blog/" },
    { name: "Кейсы", href: "https://seo-performance.ru/case/" },
    { name: "Команда", href: "https://seo-performance.ru/komanda/" },
    { name: "Отзывы", href: "https://seo-performance.ru/otzivi/" },
    { name: "Контакты", href: "https://seo-performance.ru/contacts/" },
    { name: "Партнерам", href: "https://seo-performance.ru/partneram/" },
    { name: "Акции", href: "#" }
  ];

  const socialLinks = [
    { 
      name: "VK", 
      href: "https://vk.com/seo.performance", 
      icon: <path d="M14.85 0.600098C6.98014 0.600098 0.599976 7.04742 0.599976 15.0001C0.599976 22.9528 6.98014 29.4001 14.85 29.4001C22.7198 29.4001 29.1 22.9528 29.1 15.0001C29.1 7.04742 22.7198 0.600098 14.85 0.600098ZM20.5078 21.0924C19.8397 18.9856 18.1746 17.3556 15.9724 17.1341V21.0924H15.6326C9.64105 21.0924 6.22325 16.9341 6.08075 10.0155H9.08256C9.18122 15.0937 11.3938 17.2448 13.1466 17.6885V10.0155H15.973V14.3953C17.7038 14.207 19.5223 12.2109 20.1356 10.0155H22.9621C22.4913 12.721 20.5193 14.7165 19.1168 15.5373C20.5187 16.2025 22.7648 17.9432 23.6192 21.0924H20.5078Z" fill="#F7F7F7"/>
    },
    { 
      name: "WhatsApp", 
      href: "https://api.whatsapp.com/send/?phone=79296733645&text&type=phone_number&app_absent=0", 
      icon: <path d="M15 1.2002C7.39084 1.2002 1.20004 7.391 1.20004 15.0002C1.20004 17.3762 1.81384 19.7126 2.97784 21.7742L1.22224 28.0382C1.16464 28.244 1.22044 28.4648 1.36924 28.6178C1.48384 28.736 1.63984 28.8002 1.80004 28.8002C1.84804 28.8002 1.89664 28.7942 1.94404 28.7828L8.48164 27.1634C10.4778 28.235 12.726 28.8002 15 28.8002C22.6092 28.8002 28.8 22.6094 28.8 15.0002C28.8 7.391 22.6092 1.2002 15 1.2002ZM21.942 19.8698C21.6468 20.687 20.2308 21.4328 19.5504 21.533C18.9396 21.6224 18.1668 21.6608 17.3184 21.3944C16.8042 21.2324 16.1442 21.0176 15.2988 20.657C11.745 19.1414 9.42424 15.608 9.24664 15.3746C9.06964 15.1412 7.80004 13.478 7.80004 11.7566C7.80004 10.0352 8.71504 9.18859 9.04024 8.83819C9.36544 8.48779 9.74884 8.4002 9.98524 8.4002C10.2216 8.4002 10.4574 8.40319 10.6644 8.41279C10.8822 8.42359 11.1744 8.3306 11.4618 9.01339C11.757 9.7142 12.4656 11.4356 12.5532 11.6114C12.642 11.7866 12.7008 11.9912 12.5832 12.2246C12.4656 12.458 12.4068 12.6038 12.2292 12.8084C12.0516 13.013 11.8572 13.2644 11.6976 13.4216C11.52 13.5962 11.3358 13.7852 11.5422 14.1356C11.7486 14.486 12.4596 15.6314 13.5132 16.559C14.8662 17.7506 16.008 18.1202 16.362 18.2954C16.716 18.4706 16.923 18.4412 17.1294 18.2078C17.3358 17.9738 18.015 17.186 18.2508 16.8362C18.4866 16.4864 18.723 16.544 19.0482 16.661C19.3734 16.7774 21.1152 17.6234 21.4692 17.7986C21.8232 17.9738 22.0596 18.0614 22.1484 18.2072C22.2372 18.3524 22.2372 19.0532 21.942 19.8698Z" fill="#F7F7F7"/>
    },
    { 
      name: "Telegram", 
      href: "https://t.me/m/qLYW1hVENTA5", 
      icon: <path d="M15 1.2002C22.6217 1.2002 28.7999 7.3784 28.7999 15.0002C28.7999 22.622 22.6217 28.8002 15 28.8002C7.37815 28.8002 1.19995 22.622 1.19995 15.0002C1.19995 7.3784 7.37815 1.2002 15 1.2002ZM19.7603 20.6252C20.0141 19.8464 21.2034 12.0848 21.3503 10.5554C21.3948 10.0922 21.2484 9.78439 20.9615 9.64699C20.6147 9.48019 20.1011 9.5636 19.5054 9.7784C18.6882 10.073 8.24095 14.5088 7.63735 14.7656C7.06495 15.0086 6.52375 15.2738 6.52375 15.6578C6.52375 15.9278 6.68395 16.0796 7.12555 16.2374C7.58515 16.4012 8.74255 16.7522 9.42595 16.9406C10.0842 17.1224 10.8336 16.9646 11.2536 16.7036C11.6988 16.427 16.8366 12.989 17.2056 12.6878C17.5739 12.3866 17.868 12.7724 17.5667 13.0742C17.2656 13.3754 13.7387 16.7984 13.2738 17.2724C12.7092 17.8478 13.11 18.4442 13.4886 18.683C13.9212 18.9554 17.0321 21.0422 17.5007 21.377C17.9693 21.7118 18.4445 21.8636 18.8795 21.8636C19.3146 21.8636 19.5437 21.2906 19.7603 20.6252Z" fill="#F7F7F7"/>
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@seoperformance", 
      icon: <path d="M27.3781 6.51382C28.6353 7.82408 28.7999 9.90605 28.7999 15.0001C28.7999 20.0941 28.6353 22.1761 27.3781 23.4864C26.1203 24.7966 24.8108 24.9001 15 24.9001C5.18914 24.9001 3.87962 24.7966 2.62184 23.4864C1.36457 22.1761 1.19995 20.0941 1.19995 15.0001C1.19995 9.90605 1.36457 7.82408 2.62184 6.51382C3.87912 5.20355 5.18914 5.1001 15 5.1001C24.8108 5.1001 26.1203 5.20355 27.3781 6.51382ZM12.7643 19.1957L19.4687 15.2139L12.7643 11.2945V19.1957Z" fill="#F7F7F7"/>
    }
  ];

  return (
    <footer className="nfooter">
      <div className="container">
        {/* Top Section */}
        <div className="nfooter__top">
          <div className="nfooter__left-block">
            
         <div className='main__footer-cont'>
                <div className="logo-container" style={{ display: "flex", alignItems: "center", marginBottom: "15px",  paddingTop: '45px' }}>
                  
                  <a target='_blank' href="https://seo-performance.ru/">
            <img src={logo} alt={logoAlt} className="logo" style={{ height: "40px" }} />
          </a>
              </div>
              <span className="nfooter__title" style={{fontSize: '20px', paddingTop: '15px', fontWeight: '400'}}>
               Чтобы заказать услугу — обращайтесь <br></br>
к вашему менеджеру.
              </span>
            </div>
          </div>
          
          <div className="nfooter__block">
            <h3 className="nfooter__caption">Контакты</h3>
            <div className="nfooter__info">
              <div className="nfooter__thing nfooter__thing-first">
                <div className="nfooter__item">
                  <p className="nfooter__label">телефон</p>
                  <a className="nfooter__phone" href="tel:+74952410680">+7 (495) 241-06-80</a>
                </div>
              
                <div className="nfooter__item">
                  <p className="nfooter__label">соц. сети</p>
                  <div className="nfooter__socials">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        className="nfooter__social" 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {social.icon}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="nfooter__thing">
                <div className="nfooter__item">
                  <p className="nfooter__label">почта</p>
                  <a className="nfooter__mail" href="mailto:info@seo-performance.ru">info@seo-performance.ru</a>
                </div>
                <div className="nfooter__item">
                  <p className="nfooter__label">адрес</p>
                  <p className="nfooter__address">
                    <a 
                      target="_blank" 
                      rel="nofollow noopener noreferrer" 
                      style={{color: 'white'}} 
                      href="https://yandex.ru/maps/-/CHB2UUZP"
                    >
                      Плетешковский переулок, 3с2, Москва, 105005
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="nfooter__middle">
          <div className="nfooter__middle-item">
            <h3 className="nfooter__middle-title">Услуги</h3>
            <div className="nfooter__middle-block">
              <div className="nfooter__middle-peace">
                {servicesFirstColumn.map((service, index) => (
                  <a key={index} className="nfooter__middle-link" href={service.href}>
                    {service.name}
                  </a>
                ))}
              </div>
              <div className="nfooter__middle-peace">
                {servicesSecondColumn.map((service, index) => (
                  <a key={index} className="nfooter__middle-link" href={service.href}>
                    {service.name}
                  </a>
                ))}
              </div>
              <div className="nfooter__middle-peace">
                {servicesThirdColumn.map((service, index) => (
                  <a key={index} className="nfooter__middle-link" href={service.href}>
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="nfooter__middle-right">
            <h3 className="nfooter__middle-title">О компании</h3>
            <div className="nfooter__middle-menu">
              {companyLinks.map((link, index) => (
                <a key={index} className="nfooter__middle-link" href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="nfooter__bottom">
          <div className="nfooter__bottom-left">
            <p className="nfooter__copyright">2006 - 2025 © SEO - Performance</p>
            <p className="nfooter__all">Все права защищены</p>
          </div>
          <div className="nfooter__bottom-right">
            <a 
              className="nfooter__bottom-link" 
              href="https://seo-performance.ru/wp-content/uploads/agreement.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Пользовательское соглашение
            </a>
            <a 
              className="nfooter__bottom-link" 
              href="https://seo-performance.ru/wp-content/uploads/politic.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;