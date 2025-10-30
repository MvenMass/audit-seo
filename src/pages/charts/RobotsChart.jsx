import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RobotsChart() {
  const [activeTab, setActiveTab] = useState('top1');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Данные для каждого таба
  const tabsData = {
    top1: {
      title: 'Запросы в ТОП 1',
      data: [120, 80, 95, 110, 105]
    },
    top3: {
      title: 'Запросы в ТОП 3',
      data: [180, 140, 160, 170, 165]
    },
    top5: {
      title: 'Запросы в ТОП 5',
      data: [240, 200, 220, 230, 225]
    },
    percentage: {
      title: 'Процент в ТОП 5',
      data: [65, 45, 55, 60, 58]
    },
    pages: {
      title: 'Страницы в индексе',
      data: [450, 420, 440, 460, 450]
    },
    traffic: {
      title: 'Посещаемость в день',
      data: [145, 120, 135, 150, 140]
    }
  };

  const labels = ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'];
  const currentTabData = tabsData[activeTab];

  // Данные для таблицы
  const allRows = Array.from({ length: 75 }, (_, i) => ({
    id: i + 1,
    status: i % 3 === 0 ? 'Строка' : i % 3 === 1 ? 'Условие' : 'Результат',
    query: `user-agent #${i + 1}`,
    info: 'Yandex'
  }));

  const totalPages = Math.ceil(allRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tableRows = allRows.slice(startIndex, endIndex);

  // Генерация номеров страниц для пагинации
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4);
      }
      if (currentPage > totalPages - 3) {
        startPage = Math.max(2, totalPages - 3);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { mode: 'index', intersect: false }
  },
  scales: {
    x: {
      grid: { display: false },
      offset: true,
      // min: -0.5,
      // max: labels.length - 0.5,
    },
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(0, 0, 0, 0.05)' }
    }
  }
};


  const chartData = {
    labels,
    datasets: [
      {
        label: currentTabData.title,
        data: currentTabData.data,
        backgroundColor: [
          'rgba(139, 92, 246, 0.8)',
          'rgba(251, 146, 60, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(59, 130, 246, 0.8)'
        ],
        borderRadius: 6,
        borderSkipped: false
      }
    ]
  };

  const tabs = [
    { id: 'top1', label: 'Запросы в ТОП 1' },
    { id: 'top3', label: 'Запросы в ТОП 3' },
    { id: 'top5', label: 'Запросы в ТОП 5' },
    { id: 'percentage', label: 'Процент в ТОП 5' },
    { id: 'pages', label: 'Страницы в индексе' },
    { id: 'traffic', label: 'Посещаемость в день' }
  ];

  return (
    <div className="chart-container">
      {/* Табы */}
      <div className="chart-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`chart-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* График */}
      <div style={{
        height: '500px',
        marginTop: '20px',
        background: 'white',
        borderRadius: '8px',
        padding: '20px 40px 60px', // внутренние отступы по бокам
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}>
        <Bar options={options} data={chartData} />
      </div>

      {/* Таблица и пагинация */}
      <div className="traffic-table-container">
        <table className="traffic-table">
          <thead>
            <tr>
              <th>Строка</th>
              <th>Клиент</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td>{row.status}</td>
                <td>{row.query}</td>
                <td>{row.info}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="pagination-buttons">
            {pageNumbers.map((page, idx) => (
              <button
                key={idx}
                className={`pagination-btn ${
                  page === currentPage ? 'active' : ''
                } ${page === '...' ? 'dots' : ''}`}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                disabled={page === '...'}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className="pagination-btn arrow-btn"
                onClick={() => setCurrentPage(currentPage + 1)}
                title="Следующая страница"
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RobotsChart;
