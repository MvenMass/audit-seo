import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TopDomainsChart() {
  const [activeTab, setActiveTab] = useState('top1');

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          stepSize: 10
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  const labels = [
    '03.05.23', '03.06.23', '03.07.23', '03.08.23', '03.09.23', '03.10.23',
    '03.11.23', '03.12.23', '03.01.24', '03.02.24', '03.03.24', '03.04.24',
    '03.05.24', '03.06.24', '03.07.24', '03.08.24', '03.09.24', '03.10.24'
  ];

  // Данные для каждого таба
  const tabsData = {
    top1: [
      { label: 'Домен 1', data: [30, 25, 20, 18, 20, 22, 28, 27, 25, 28, 27, 25, 22, 20, 12, 10, 22, 25], borderColor: 'rgb(139, 92, 246)', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
      { label: 'Домен 2', data: [25, 22, 18, 17, 19, 20, 25, 24, 20, 19, 18, 20, 24, 26, 18, 15, 20, 26], borderColor: 'rgb(251, 146, 60)', backgroundColor: 'rgba(251, 146, 60, 0.1)' },
      { label: 'Домен 3', data: [28, 27, 23, 21, 23, 25, 30, 29, 28, 30, 29, 27, 26, 25, 22, 20, 28, 30], borderColor: 'rgb(34, 197, 94)', backgroundColor: 'rgba(34, 197, 94, 0.1)' },
      { label: 'Домен 4', data: [22, 20, 17, 16, 18, 19, 23, 22, 19, 20, 21, 22, 25, 27, 20, 18, 24, 28], borderColor: 'rgb(239, 68, 68)', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
      { label: 'Домен 5', data: [27, 25, 22, 20, 22, 24, 27, 26, 24, 26, 25, 24, 23, 22, 18, 16, 25, 27], borderColor: 'rgb(59, 130, 246)', backgroundColor: 'rgba(59, 130, 246, 0.1)' }
    ],
    top3: [
      { label: 'Домен 1', data: [45, 38, 32, 28, 32, 35, 42, 40, 38, 42, 40, 38, 35, 32, 28, 25, 35, 38], borderColor: 'rgb(139, 92, 246)', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
      { label: 'Домен 2', data: [42, 35, 28, 25, 28, 32, 38, 36, 32, 30, 28, 32, 36, 40, 32, 28, 35, 38], borderColor: 'rgb(251, 146, 60)', backgroundColor: 'rgba(251, 146, 60, 0.1)' },
      { label: 'Домен 3', data: [48, 42, 36, 32, 35, 38, 45, 43, 42, 45, 43, 42, 40, 38, 35, 32, 42, 45], borderColor: 'rgb(34, 197, 94)', backgroundColor: 'rgba(34, 197, 94, 0.1)' },
      { label: 'Домен 4', data: [38, 32, 28, 25, 28, 30, 35, 33, 30, 32, 33, 35, 40, 42, 35, 30, 38, 42], borderColor: 'rgb(239, 68, 68)', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
      { label: 'Домен 5', data: [45, 38, 32, 28, 32, 35, 42, 40, 38, 42, 40, 38, 35, 32, 28, 25, 38, 42], borderColor: 'rgb(59, 130, 246)', backgroundColor: 'rgba(59, 130, 246, 0.1)' }
    ],
    top5: [
      { label: 'Домен 1', data: [55, 48, 42, 38, 42, 45, 52, 50, 48, 52, 50, 48, 45, 42, 38, 35, 45, 48], borderColor: 'rgb(139, 92, 246)', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
      { label: 'Домен 2', data: [52, 45, 38, 35, 38, 42, 48, 46, 42, 40, 38, 42, 46, 50, 42, 38, 45, 48], borderColor: 'rgb(251, 146, 60)', backgroundColor: 'rgba(251, 146, 60, 0.1)' },
      { label: 'Домен 3', data: [58, 52, 46, 42, 45, 48, 55, 53, 52, 55, 53, 52, 50, 48, 45, 42, 52, 55], borderColor: 'rgb(34, 197, 94)', backgroundColor: 'rgba(34, 197, 94, 0.1)' },
      { label: 'Домен 4', data: [48, 42, 38, 35, 38, 40, 45, 43, 40, 42, 43, 45, 50, 52, 45, 40, 48, 52], borderColor: 'rgb(239, 68, 68)', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
      { label: 'Домен 5', data: [55, 48, 42, 38, 42, 45, 52, 50, 48, 52, 50, 48, 45, 42, 38, 35, 48, 52], borderColor: 'rgb(59, 130, 246)', backgroundColor: 'rgba(59, 130, 246, 0.1)' }
    ],
    top10: [
      { label: 'Домен 1', data: [70, 62, 55, 50, 55, 60, 68, 65, 62, 68, 65, 62, 58, 55, 50, 48, 58, 62], borderColor: 'rgb(139, 92, 246)', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
      { label: 'Домен 2', data: [68, 60, 52, 48, 52, 58, 65, 62, 58, 55, 52, 58, 65, 70, 60, 55, 62, 68], borderColor: 'rgb(251, 146, 60)', backgroundColor: 'rgba(251, 146, 60, 0.1)' },
      { label: 'Домен 3', data: [75, 68, 60, 55, 58, 62, 70, 68, 68, 72, 70, 68, 65, 62, 58, 55, 68, 72], borderColor: 'rgb(34, 197, 94)', backgroundColor: 'rgba(34, 197, 94, 0.1)' },
      { label: 'Домен 4', data: [62, 55, 50, 48, 50, 55, 62, 60, 55, 58, 60, 62, 68, 72, 62, 58, 65, 72], borderColor: 'rgb(239, 68, 68)', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
      { label: 'Домен 5', data: [70, 62, 55, 50, 55, 60, 68, 65, 62, 68, 65, 62, 58, 55, 50, 48, 62, 68], borderColor: 'rgb(59, 130, 246)', backgroundColor: 'rgba(59, 130, 246, 0.1)' }
    ],
    top50: [
      { label: 'Домен 1', data: [120, 110, 100, 95, 100, 110, 125, 120, 115, 125, 120, 115, 110, 105, 100, 95, 110, 115], borderColor: 'rgb(139, 92, 246)', backgroundColor: 'rgba(139, 92, 246, 0.1)' },
      { label: 'Домен 2', data: [115, 105, 95, 90, 95, 105, 120, 115, 110, 105, 100, 105, 115, 125, 115, 105, 115, 120], borderColor: 'rgb(251, 146, 60)', backgroundColor: 'rgba(251, 146, 60, 0.1)' },
      { label: 'Домен 3', data: [130, 120, 110, 105, 110, 120, 130, 128, 125, 130, 128, 125, 120, 118, 115, 110, 125, 130], borderColor: 'rgb(34, 197, 94)', backgroundColor: 'rgba(34, 197, 94, 0.1)' },
      { label: 'Домен 4', data: [110, 100, 95, 90, 95, 105, 115, 112, 108, 115, 112, 110, 120, 128, 115, 110, 120, 128], borderColor: 'rgb(239, 68, 68)', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
      { label: 'Домен 5', data: [120, 110, 100, 95, 100, 110, 125, 120, 115, 125, 120, 115, 110, 105, 100, 95, 115, 125], borderColor: 'rgb(59, 130, 246)', backgroundColor: 'rgba(59, 130, 246, 0.1)' }
    ]
  };

  // Формируем datasets на основе активного таба
  const datasets = tabsData[activeTab].map(item => ({
    label: item.label,
    data: item.data,
    borderColor: item.borderColor,
    backgroundColor: item.backgroundColor,
    tension: 0.4
  }));

  const data = {
    labels,
    datasets
  };

  const tabs = [
    { id: 'top1', label: 'Запросы в ТОП 1' },
    { id: 'top3', label: 'Запросы в ТОП 3' },
    { id: 'top5', label: 'Запросы в ТОП 5' },
    { id: 'top10', label: 'Запросы в ТОП 10' },
    { id: 'top50', label: 'Запросы в ТОП 50' }
  ];

  return (
    <div className="chart-container">
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
      <div style={{ height: '400px', marginTop: '20px' }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default TopDomainsChart;
