import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Градиент с переменным alpha: от непрозрачного вверху к прозрачному внизу
function createGradient(ctx, chartArea, colorStart, colorEnd) {
  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

function SeasonalityChart() {
  const chartRef = useRef();

  const labels = [
    '01.12', '01.13', '01.14', '01.15', '01.16', '01.17', '01.18',
    '01.19', '01.20', '01.21', '01.22', '01.23', '01.24', '01.25',
    '01.26', '01.27', '01.28', '01.29', '01.30', '01.31', '01.32'
  ];
  const commercialData = [
    50000, 120000, 180000, 220000, 200000, 190000, 210000, 240000,
    260000, 280000, 320000, 330000, 310000, 280000, 240000, 220000, 210000, 230000, 230000, 230000, 230000
  ];
  const nonCommercialData = [
    30000, 80000, 130000, 160000, 140000, 120000, 160000, 180000,
    200000, 230000, 250000, 280000, 240000, 200000, 170000, 150000, 130000, 120000, 120000, 120000, 120000
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 13
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        }
      },
      y: {
        beginAtZero: true,
        max: 400000,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          stepSize: 50000,
          callback: function(value) {
            return value / 1000 + 'K';
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0 // Глобально: острые углы для всех линий
      }
    }
  };

  const data = {
    labels,
    datasets: [
      // Оранжевый сзади (nonCommercial ниже)
      {
        label: 'Сезонность некоммерческих запросов',
        data: nonCommercialData,
        borderColor: 'rgba(251, 146, 60, 0.8)',
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return 'rgba(251, 146, 60, 0.18)';
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(251, 146, 60, 0.2)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
          return gradient;
        },
        fill: true,
        tension: 0, // Острые углы: прямые линии между точками
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgb(251, 146, 60)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      },
      // Фиолетовый спереди (коммерческий выше, перекрывает)
      {
        label: 'Сезонность коммерческих запросов',
        data: commercialData,
        borderColor: 'rgba(139, 92, 246, 0.9)',
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return 'rgba(139, 92, 246, 0.18)';
          return createGradient(ctx, chartArea, 'rgba(139, 92, 246, 0.3)', 'rgba(255, 255, 255, 0.1)');
        },
        fill: true,
        tension: 0, // Острые углы: прямые линии между точками
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgb(139, 92, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  return (
    <div style={{ height: '520px', marginTop: '20px', background: '#fff' }}>
      <Line ref={chartRef} options={options} data={data} />
    </div>
  );
}

export default SeasonalityChart;
