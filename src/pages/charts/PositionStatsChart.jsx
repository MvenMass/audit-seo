import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
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

function PositionStatsChart() {
  const [activeButton, setActiveButton] = useState('top1');

  const chartDataSets = {
    top1: {
      labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
      data: [600, 100, 700, 900, 550],
      title: 'Запросы в ТОП 1'
    },
    top3: {
      labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
      data: [550, 120, 680, 850, 520],
      title: 'Запросы в ТОП 3'
    },
    top5: {
      labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
      data: [620, 150, 720, 920, 580],
      title: 'Запросы в ТОП 5'
    },
    percentage: {
      labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
      data: [35, 20, 42, 55, 40],
      title: 'Процент в ТОП 5'
    },
    pages: {
      labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
      data: [250, 180, 300, 280, 220],
      title: 'Страницы в индексе'
    },
    traffic: {
      labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
      data: [85, 45, 120, 110, 75],
      title: 'Посещаемость в день'
    }
  };

  const currentData = chartDataSets[activeButton];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    }
  };

  const data = {
    labels: currentData.labels,
    datasets: [{
      label: currentData.title,
      data: currentData.data,
      backgroundColor: [
        'rgba(139, 92, 246, 0.8)',
        'rgba(251, 146, 60, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(59, 130, 246, 0.8)'
      ],
      borderRadius: 6,
      borderSkipped: false
    }]
  };

  const buttons = [
    { id: 'top1', label: 'Запросы в ТОП 1' },
    { id: 'top3', label: 'Запросы в ТОП 3' },
    { id: 'top5', label: 'Запросы в ТОП 5' },
    { id: 'percentage', label: 'Процент в ТОП 5' },
    { id: 'pages', label: 'Страницы в индексе' },
    { id: 'traffic', label: 'Посещаемость в день' }
  ];

  return (
    <div className="position-stats-container">
      <div className="position-buttons">
        {buttons.map(btn => (
          <button
            key={btn.id}
            className={`position-btn ${activeButton === btn.id ? 'active' : ''}`}
            onClick={() => setActiveButton(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div style={{ height: '400px', marginTop: '20px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default PositionStatsChart;
