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

function SeasonalityChart() {
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
    }
  };

  const labels = [
    '01.12', '01.13', '01.14', '01.15', '01.16', '01.17', '01.18',
    '01.19', '01.20', '01.21', '01.22', '01.23', '01.24', '01.25',
    '01.26', '01.27', '01.28', '01.29', '01.30', '01.31', '01.32'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Сезонность коммерческих запросов',
        data: [50000, 120000, 180000, 220000, 200000, 190000, 210000, 240000, 260000, 280000, 320000, 330000, 310000, 280000, 240000, 220000, 210000, 230000],
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.15)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgb(139, 92, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      },
      {
        label: 'Сезонность некоммерческих запросов',
        data: [30000, 80000, 130000, 160000, 140000, 120000, 160000, 180000, 200000, 230000, 250000, 280000, 240000, 200000, 170000, 150000, 130000, 120000],
        borderColor: 'rgb(251, 146, 60)',
        backgroundColor: 'rgba(251, 146, 60, 0.15)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgb(251, 146, 60)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  return (
    <div style={{ height: '400px', marginTop: '20px' }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default SeasonalityChart;
