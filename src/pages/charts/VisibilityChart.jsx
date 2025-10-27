import { useEffect, useRef } from 'react';
import './VisibilityChart.css';

function VisibilityChart() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Проверяем, загружены ли уже скрипты
    if (window.am4core && window.am4charts) {
      initChart();
    } else {
      // Загружаем скрипты по очереди
      loadScripts();
    }

    return () => {
      // Cleanup
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, []);

  const loadScripts = () => {
    const scripts = [
      'https://cdn.amcharts.com/lib/4/core.js',
      'https://cdn.amcharts.com/lib/4/charts.js',
      'https://cdn.amcharts.com/lib/4/themes/animated.js'
    ];

    let loadedCount = 0;

    scripts.forEach((src, index) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      
      script.onload = () => {
        loadedCount++;
        
        // Когда все скрипты загружены
        if (loadedCount === scripts.length) {
          setTimeout(() => {
            initChart();
          }, 100);
        }
      };

      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
      };

      document.head.appendChild(script);
    });
  };

  const initChart = () => {
    try {
      if (!window.am4core || !window.am4charts) {
        console.error('AmCharts not loaded');
        return;
      }

      // Применяем тему
      window.am4core.useTheme(window.am4themes_animated);

      // Создаем диаграмму
      const chart = window.am4core.create(
        'chartdiv',
        window.am4charts.PieChart3D
      );

      // Сохраняем ссылку на диаграмму
      chartInstanceRef.current = chart;

      // Скрываем на загрузке
      chart.hiddenState.properties.opacity = 0;

      // 3D настройки
      chart.depth = 10;
      chart.angle = 15;

      // Данные
      chart.data = [
        {
          category: 'Коммерческие',
          value: 292
        },
        {
          category: 'Некоммерческие',
          value: 530
        }
      ];

      // Серия
      const series = chart.series.push(new window.am4charts.PieSeries3D());
      series.dataFields.value = 'value';
      series.dataFields.category = 'category';

      // Стили срезов
      series.slices.template.strokeWidth = 2;
      series.slices.template.tooltipText = '{category}: {value}';

      // Цвета
      const colors = [
        window.am4core.color('#3B82F6'), // Коммерческие
        window.am4core.color('#FB923C')  // Некоммерческие
      ];
      
      series.slices.template.adapter.add('fill', (fill, target) => {
        if (target.dataItem) {
          return colors[target.dataItem.index];
        }
        return fill;
      });

      // Labels
      const label = series.labels.template;
      label.text = '{value}';
      label.fontSize = 12;
      label.fill = window.am4core.color('#ffffff');
      label.fontWeight = 'bold';

      // Легенда
      const legend = new window.am4charts.Legend();
      chart.legend = legend;
      legend.labels.template.fontSize = 13;
      legend.labels.template.fill = window.am4core.color('#666');
      legend.margin(20, 0, 20, 0);

      // Анимация
      series.sequencedInterpolation = true;
      series.sequencedInterpolationDelay = 30;

      // Эффект при наведении
      const hoverState = series.slices.template.states.create('hover');
      hoverState.properties.scale = 1.05;

    } catch (error) {
      console.error('Error initializing chart:', error);
    }
  };

  return (
    <div className="visibility-container">
      {/* Статистика сверху */}
      <div className="visibility-stats">
        <div className="visibility-stat-card">
          <div className="visibility-stat-label">Коммерческие</div>
          <div className="visibility-stat-value">292</div>
        </div>
        <div className="visibility-stat-card">
          <div className="visibility-stat-label">Некоммерческие</div>
          <div className="visibility-stat-value">530</div>
        </div>
        <div className="visibility-stat-card">
          <div className="visibility-stat-label">Общее количество</div>
          <div className="visibility-stat-value">822</div>
        </div>
      </div>

      {/* 3D Pie Chart */}
      <div className="amcharts-wrapper">
        <div id="chartdiv" ref={chartRef} className="amcharts-container"></div>
      </div>
    </div>
  );
}

export default VisibilityChart;
