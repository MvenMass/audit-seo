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

function SemanticCoreChart() {
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
            return `Запросов: ${context.parsed.y}`;
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
    labels: ['Домен 1', 'Домен 2', 'Домен 3', 'Домен 4', 'Домен 5'],
    datasets: [{
      data: [600, 120, 720, 920, 560],
      backgroundColor: [
        'rgba(139, 92, 246, 0.8)',
        'rgba(251, 146, 60, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(59, 130, 246, 0.8)'
      ],
      borderRadius: 6
    }]
  };

  return (
    <div className="semantic-section">
      <div className="semantic-table">
        <table>
          <thead>
            <tr>
              <th>Всего запросов</th>
              <th>Уникальных запросов</th>
              <th>Упущенных запросов</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>823</td>
              <td>788</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ height: '350px', marginTop: '30px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default SemanticCoreChart;
