import { useLocation } from "react-router-dom";
import "./AuditResults.css";
import CardNav from "../components/CardNav";
import logo from "../assets/logomain.png";
import TopDomainsChart from "./charts/TopDomainsChart";
import SemanticCoreChart from "./charts/SemanticCoreChart";
import RobotsChart from "./charts/RobotsChart";
import TrafficTable from "./charts/TrafficTable";
import CompetitorTable from "./charts/CompetitorTable";
import SSLReportTable from "./charts/SSLReportTable";
import SeasonalityChart from "./charts/SeasonalityChart";
import VisibilityChart from "./charts/VisibilityChart";
import PositionStatsChart from "./charts/PositionStatsChart";
import SemanticKeywordsTable from "./charts/SemanticKeywordsTable";
import FaviconChart from "./charts/FaviconChart";
import PageSpeedTable from "./charts/PageSpeedTable";
import SitemapSummary from './charts/SitemapSummary'; // путь корректируйте по структуре проекта
import Footer from '../components/Footer';
import LogoLoop from '../components/LogoLoop';
import AboutUsNumber from '../components/AboutUsNumber';

import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import logo4 from '../assets/logo-5.png';
import logo5 from '../assets/logo-6.png';
import logo6 from '../assets/logo-7.png';
import logo7 from '../assets/logo-8.png';

const imageLogos = [
  { src: logo1, alt: "Company 1", href: "https://company1.com" },
  { src: logo2, alt: "Company 2", href: "https://company2.com" },
  { src: logo3, alt: "Company 3", href: "https://company3.com" },
  { src: logo4, alt: "Company 4", href: "https://company4.com" },
  { src: logo5, alt: "Company 5", href: "https://company5.com" },
  { src: logo6, alt: "Company 6", href: "https://company6.com" },
  { src: logo7, alt: "Company 7", href: "https://company7.com" },
];

function AuditResults() {
  const location = useLocation();
  const formData = location.state?.formData;

  // Данные для навигации (как в App.jsx)
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="audit-results">
      {/* Используем CardNav вместо простого header */}
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#4B60E6"
        menuColor="#000"
        buttonBgColor="#FFC702"
        buttonTextColor="#000000ff"
        ease="power3.out"
      />

      <div className="audit-container">
        {/* Заголовок и описание - занимает всю ширину */}
        <div className="audit-title-section">
          <h1 className="audit-title">
            Аудит для сайта{" "}
            <span className="site-url">{formData?.site || "www.site.ru"}</span>
          </h1>
          <p className="audit-description">
            Мы сделали для вас понятный разбор: где ошибки, какие элементы стоит
            улучшить и как это влияет на органику. Для контекста добавили
            сравнение с конкурентами и основные метрики качества.
          </p>
        </div>

        {/* Метрики - занимает всю ширину */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Возраст домена:</div>
            <div className="metric-value">
              13 лет 3 месяцев 10 дней (4845 days)
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-label">% запросов в ТОП:</div>
            <div className="metric-value metric-highlight">10%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Наличие SSL:</div>
            <div className="metric-value metric-success">есть</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Наличие robots.txt:</div>
            <div className="metric-value metric-success">есть</div>
          </div>
        </div>

        {/* Основная сетка: 2-колоночный макет начинается здесь */}
        <div className="audit-wrapper">
          {/* Левая колонка - Оглавление */}
       <aside className="audit-sidebar">
  <div className="table-of-contents">
    <h2 className="section-title sidebar-title">Оглавление:</h2>
    <ol className="toc-list">
    
      <li>
        <a href="#domain-age" className="toc-link">Возраст доменов</a>
      </li>
      <li>
        <a href="#top-requests" className="toc-link">История запросов по доменам</a>
      </li>
      <li>
        <a href="#semantic-core" className="toc-link">Пересечение семантического ядра</a>
      </li>
         <li>
        <a href="#seasonality" className="toc-link">Сезонность</a>
      </li>
      <li>
        <a href="#favicon" className="toc-link">Наличие фавикона</a>
      </li>
            <li>
        <a href="#pagespeed" className="toc-link">PageSpeed</a>
      </li>
           <li>
        <a href="#ssl-report" className="toc-link">SSL-отчет</a>
      </li>
        <li>
        <a href="#robots" className="toc-link">Проверка robots.txt и sitemap</a>
      </li>
        <li>
        <a href="#sitemap-summary" className="toc-link">Итоговая статистика карты сайта</a>
      </li>
      <li>
        <a href="#semantic-keywords" className="toc-link">Семантическое ядро: таблица ключевых слов</a>
      </li>
      <li>
        <a href="#visibility" className="toc-link">Видимость</a>
      </li>
   
    </ol>
  </div>
</aside>


          {/* Правая колонка - Основной контент */}
          <main className="audit-main-content">
            {/* Секция: Возрасты доменов */}
            <section className="audit-section" id="domain-age">
              <h2 className="section-title">Возрасты доменов</h2>
              <p className="section-description">
                Таблица с возрастом сайтов конкурентов в годах и днях позволяет
                оценить зрелость и авторитетность доменов
              </p>
              <CompetitorTable />
            </section>

            {/* Секция: Трафик, видимость и CMS */}
            <section className="audit-section" id="traffic">
              <h2 className="section-title">Трафик, видимость и CMS</h2>
              <p className="section-description">
                В таблице собраны данные о CMS конкурентов, количестве страниц в
                индексе, запросах в топ-5/10/50 и среднем органическом трафике в
                день
              </p>
              <TrafficTable />
            </section>

            {/* Секция: История запросов в ТОП */}
            <section className="audit-section" id="top-requests">
              <h2 className="section-title">
                История запросов в ТОП 50 по доменам
              </h2>
              <p className="section-description">
                Интерактивный график показывает, как менялось число запросов
                сайта в ТОП - 1, 3, 5, 10 и 50 за 2 года, что помогает
                анализировать динамику видимости
              </p>
              <TopDomainsChart />
            </section>

            {/* Секция: Пересечение семантического ядра */}
            <section className="audit-section" id="semantic-core">
              <h2 className="section-title">
                Пересечение семантического ядра с конкурентами
              </h2>
              <p className="section-description">
                Диаграмма показывает, сколько запросов совпадает с конкурентами,
                сколько уникальных у сайта и сколько упущено, дополняется
                краткой таблицей
              </p>
              <SemanticCoreChart />
            </section>

            {/* Секция: Сезонность запросов */}
            <section className="audit-section" id="seasonality">
              <h2 className="section-title">Сезонность запросов</h2>
              <p className="section-description">
                График показывает изменение количества коммерческих и
                некоммерческих запросов по месяцам; помогает выявить пики спроса
                и сезонные провалы
              </p>
              <SeasonalityChart />
            </section>

            {/* Секция: Наличие фавикона */}
            <section className="audit-section" id="favicon">
              <h2 className="section-title">Наличие фавикона</h2>
              <p className="section-description">
                Favicon выделяет сайт в поисковой выдаче, повышает CTR
                (кликабельность) и тем самым дает поисковикам позитивный сигнал,
                укрепляющий позиции сайта.
              </p>
              <FaviconChart />
            </section>

            {/* Секция: PageSpeed */}
<section className="audit-section" id="pagespeed">
  <h2 className="section-title">Скорость загрузки сайта (PageSpeed)</h2>
  <p className="section-description">
    Сравнение Mobile и Desktop по ключевым метрикам: насколько быстро появляется контент, когда страница становится интерактивной и насколько стабильна верстка.
  </p>
  <PageSpeedTable />
</section>


            {/* Секция: SSL Отчет */}
            <section className="audit-section" id="ssl-report">
              <h2 className="section-title">Отчет о проверке SSL</h2>
              <p className="section-description">
                Сведения о SSL: владелец, эмитент, срок действия, серийный номер
                и статус сертификата (действителен / недействителен)
              </p>
              <SSLReportTable />
            </section>

             {/* Секция: Проверка robots.txt и sitemap */}
            <section className="audit-section" id="robots">
              <h2 className="section-title">Проверка robots.txt и sitemap</h2>
              <div className="robots-check">
                <div className="robots-status">
                  <strong>Код ответа:</strong> 200
                </div>
                <div className="robots-status">
                 Файл robots.txt найден
                </div>
                <div className="robots-status">
                  <strong>Результаты анализа:</strong> ошибок не обнаружено
                </div>
                <div className="robots-info">
                  <strong>Информация:</strong>
                  <ul>
                    <li>Блок User-agent начинается в строке 1: "Yandex"</li>
                    <li>Блок User-agent начинается в строке 18: "Googlebot"</li>
                    <li>Блок User-agent начинается в строке 39: "Slurp"</li>
                  </ul>
                </div>
              </div>
              <RobotsChart />
            </section>
{/* Секция: Итоговая статистика карты сайта */}
<section className="audit-section" id="sitemap-summary">
  <h2 className="section-title">Итоговая статистика проверки карты сайта</h2>
  <p className="section-description">
    Здесь мы фиксируем, открыт ли sitemap для роботов (HTTP-статус), сколько в нём URL и есть ли подозрительные элементы — дубликаты, недоступные или закрытые страницы. Используйте блок как быстрый индикатор качества карты.
  </p>
  <SitemapSummary />
</section>


   {/* Секция: Семантическое ядро: таблица ключевых слов */}
            <section className="audit-section" id="semantic-keywords">
              <h2 className="section-title">
                Семантическое ядро: таблица ключевых слов
              </h2>
              <p className="section-description">
                Полный набор целевых запросов, сгруппированный по темам и
                интентам. Таблица показывает частотность и текущие позиции
                (ТОП-1/3/5/10/50) — видно, где есть спрос, какие кластеры
                закрыты, а где не хватает страниц или контента.
              </p>
              <div className="semantic-core-note">
                <strong>Почему это важно:</strong> Ядро задает структуру сайта и
                контент-план; без него легко оптимизировать «не те» страницы и
                терять потенциальный трафик.
              </div>
              <SemanticKeywordsTable />
            </section>

            {/* Секция: Видимость */}
            <section className="audit-section" id="visibility">
              <h2 className="section-title">Видимость</h2>
              <p className="section-description">
                График показывает, по какому числу ключей сайт уже виден в
                поиске и как они делятся на коммерческие и некоммерческие. По
                долям понятно, где усилить коммерческие кластеры и где расширить
                информационный контент.
              </p>
              <VisibilityChart />
            </section>


         

       
          </main>
        </div>
        
      </div>
      <AboutUsNumber />
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden', opacity: '0.8'}}>
      <LogoLoop
        logos={imageLogos}
        speed={40}
        direction="left"
        logoHeight={68}
        gap={100}
        pauseOnHover={false}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
     <Footer
     logo={logo}
  logoAlt="Company Logo"/>
    </div>
  );
}

export default AuditResults;
