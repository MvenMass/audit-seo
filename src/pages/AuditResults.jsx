import { useLocation } from 'react-router-dom';
import './AuditResults.css';
import CardNav from '../components/CardNav';
import logo from '../assets/logo.svg';
import TopDomainsChart from './charts/TopDomainsChart';
import SemanticCoreChart from './charts/SemanticCoreChart';
import RobotsChart from './charts/RobotsChart';
import TrafficTable from './charts/TrafficTable';
import CompetitorTable from './charts/CompetitorTable';
import SSLReportTable from './charts/SSLReportTable';
import SeasonalityChart from './charts/SeasonalityChart';
import VisibilityChart from './charts/VisibilityChart';
import PositionStatsChart from './charts/PositionStatsChart';
import SemanticKeywordsTable from './charts/SemanticKeywordsTable';

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
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
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
            Аудит для сайта <span className="site-url">{formData?.site || 'www.site.ru'}</span>
          </h1>
          <p className="audit-description">
            Мы сделали для вас понятный разбор: где ошибки, какие элементы стоит улучшить и как это
            влияет на органику. Для контекста добавили сравнение с конкурентами и основные метрики качества.
          </p>
        </div>

        {/* Метрики - занимает всю ширину */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Возраст домена:</div>
            <div className="metric-value">13 лет 3 месяцев 10 дней (4845 days)</div>
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
                <li><a href="#domain-age" className="toc-link">Возраст доменов</a></li>
                <li><a href="#top-requests" className="toc-link">История запросов по доменам</a></li>
                <li><a href="#semantic-core" className="toc-link">Пересечение семантического ядра</a></li>
                <li><a href="#traffic" className="toc-link">Трафик, видимость и CMS</a></li>
                <li><a href="#ssl-report" className="toc-link">Отчет о проверке SSL</a></li>
                <li><a href="#seasonality" className="toc-link">Сезонность запросов</a></li>
                <li><a href="#visibility" className="toc-link">Видимость</a></li>
                <li><a href="#position-stats" className="toc-link">Статистика позиций</a></li>
                <li><a href="#semantic-keywords" className="toc-link">Семантическое ядро</a></li>
                <li><a href="#robots" className="toc-link">Проверка robots.txt</a></li>
              </ol>
            </div>
          </aside>

          {/* Правая колонка - Основной контент */}
          <main className="audit-main-content">
            {/* Секция: Возрасты доменов */}
            <section className="audit-section" id="domain-age">
              <h2 className="section-title">Возрасты доменов</h2>
              <p className="section-description">
                Таблица с возрастом сайтов конкурентов в годах и днях позволяет оценить зрелость и
                авторитетность доменов
              </p>
              <CompetitorTable />
            </section>

            {/* Секция: История запросов в ТОП */}
            <section className="audit-section" id="top-requests">
              <h2 className="section-title">История запросов в ТОП 50 по доменам</h2>
              <p className="section-description">
                Интерактивный график показывает, как менялось число запросов сайта в ТОП - 1, 3, 5, 10 и 50 за 2 года,
                что помогает анализировать динамику видимости
              </p>
              <TopDomainsChart />
            </section>

            {/* Секция: Пересечение семантического ядра */}
            <section className="audit-section" id="semantic-core">
              <h2 className="section-title">Пересечение семантического ядра с конкурентами</h2>
              <p className="section-description">
                Диаграмма показывает, сколько запросов совпадает с конкурентами, сколько уникальных у сайта и сколько
                упущено, дополняется краткой таблицей
              </p>
              <SemanticCoreChart />
            </section>

            {/* Секция: Трафик, видимость и CMS */}
            <section className="audit-section" id="traffic">
              <h2 className="section-title">Трафик, видимость и CMS</h2>
              <p className="section-description">
                В таблице собраны данные о CMS конкурентов, количестве страниц в индексе, запросах в топ-5/10/50 и
                среднем органическом трафике в день
              </p>
              <TrafficTable />
            </section>

            {/* Секция: SSL Отчет */}
            <section className="audit-section" id="ssl-report">
              <h2 className="section-title">Отчет о проверке SSL</h2>
              <p className="section-description">
                Сведения о SSL: владелец, эмитент, срок действия, серийный номер и статус сертификата (действителен /
                недействителен)
              </p>
              <SSLReportTable />
            </section>

            {/* Секция: Сезонность запросов */}
            <section className="audit-section" id="seasonality">
              <h2 className="section-title">Сезонность запросов</h2>
              <p className="section-description">
                График показывает изменение количества коммерческих и некоммерческих запросов по месяцам; помогает
                выявить пики спроса и сезонные провалы
              </p>
              <SeasonalityChart />
            </section>

            {/* Секция: Видимость */}
            <section className="audit-section" id="visibility">
              <h2 className="section-title">Видимость</h2>
              <p className="section-description">
                График показывает, по какому числу ключей сайт уже виден в поиске и как они делятся на коммерческие и
                некоммерческие. По долям понятно, где усилить коммерческие кластеры и где расширить информационный
                контент.
              </p>
              <VisibilityChart />
            </section>

            {/* Секция: Статистика позиций */}
            <section className="audit-section" id="position-stats">
              <h2 className="section-title">Статистика позиции по запросам (bar-диаграммы)</h2>
              <p className="section-description">
                Интерактивная диаграмма позволяет анализировать динамику позиций по разным критериям: запросы в ТОП-1/3/5/10/50,
                процент попаданий, страницы в индексе и среднее органическое посещение в день
              </p>
              <PositionStatsChart />
            </section>

            {/* Секция: Семантическое ядро: таблица ключевых слов */}
            <section className="audit-section" id="semantic-keywords">
              <h2 className="section-title">Семантическое ядро: таблица ключевых слов</h2>
              <p className="section-description">
                Полный набор целевых запросов, сгруппированный по темам и интентам. Таблица показывает частотность и
                текущие позиции (ТОП-1/3/5/10/50) — видно, где есть спрос, какие кластеры закрыты, а где не хватает страниц
                или контента.
              </p>
              <div className="semantic-core-note">
                <strong>Почему это важно:</strong> Ядро задает структуру сайта и контент-план; без него легко оптимизировать «не те»
                страницы и терять потенциальный трафик.
              </div>
              <SemanticKeywordsTable />
            </section>

            {/* Секция: Проверка robots.txt и sitemap */}
            <section className="audit-section" id="robots">
              <h2 className="section-title">Проверка robots.txt и sitemap</h2>
              <div className="robots-check">
                <div className="robots-status">
                  <strong>Код ответа:</strong> 200
                </div>
                <div className="robots-status">
                  <strong>Файл robots.txt найден</strong>
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
          </main>
        </div>
      </div>
    </div>
  );
}

export default AuditResults;
