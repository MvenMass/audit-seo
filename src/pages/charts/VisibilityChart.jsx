import { useEffect, useRef, useState } from 'react';
import './VisibilityChart.css';

function VisibilityChart() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [chartsReady, setChartsReady] = useState(false);

  useEffect(() => {
    let killed = false;

    const checkAndInit = () => {
      if (
        window.am4core &&
        window.am4charts &&
        window.am4themes_animated &&
        chartRef.current
      ) {
        setChartsReady(true);
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    const loadScripts = () => {
      const scripts = [
        'https://cdn.amcharts.com/lib/4/core.js',
        'https://cdn.amcharts.com/lib/4/charts.js',
        'https://cdn.amcharts.com/lib/4/themes/animated.js'
      ];
      let loadedCount = 0;
      scripts.forEach(src => {
        if (document.querySelector(`script[src="${src}"]`)) {
          loadedCount++;
          if (loadedCount === scripts.length) checkAndInit();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          loadedCount++;
          if (loadedCount === scripts.length) checkAndInit();
        };
        script.onerror = () => {};
        document.head.appendChild(script);
      });
    };

    if (window.am4core && window.am4charts) {
      checkAndInit();
    } else {
      loadScripts();
    }

    return () => {
      killed = true;
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!chartsReady) return;
    if (!chartRef.current) return;

    try {
      window.am4core.useTheme(window.am4themes_animated);

      const chart = window.am4core.create(
        chartRef.current,
        window.am4charts.PieChart3D
      );
      chartInstanceRef.current = chart;
      chart.hiddenState.properties.opacity = 0;
      chart.depth = 10;
      chart.angle = 15;

      chart.data = [
        { category: 'Коммерческие', value: 292 },
        { category: 'Некоммерческие', value: 530 }
      ];

      const series = chart.series.push(new window.am4charts.PieSeries3D());
      series.dataFields.value = 'value';
      series.dataFields.category = 'category';
      series.slices.template.strokeWidth = 2;
      series.slices.template.tooltipText = '{category}: {value}';

      const colors = [
        window.am4core.color('#3B82F6'),
        window.am4core.color('#FB923C')
      ];
      series.slices.template.adapter.add('fill', (fill, target) => {
        if (target.dataItem) {
          return colors[target.dataItem.index];
        }
        return fill;
      });

      const label = series.labels.template;
      label.text = '{value}';
      label.fontSize = 12;
      label.fill = window.am4core.color('#fff');
      label.fontWeight = 'bold';

      const legend = new window.am4charts.Legend();
      chart.legend = legend;
      legend.position = "right";
      legend.valign = "middle";
      legend.contentAlign = "left";
      legend.labels.template.fontSize = 13;
      legend.labels.template.fill = window.am4core.color('#666');
      legend.margin(0, 30, 0, 20);
      legend.markers.template.width = 16;
      legend.markers.template.height = 16;
      legend.markers.template.cornerRadius(8, 8, 8, 8);

      series.sequencedInterpolation = true;
      series.sequencedInterpolationDelay = 30;
      const hoverState = series.slices.template.states.create('hover');
      hoverState.properties.scale = 1.05;
    } catch (error) {
      // Do nothing
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, [chartsReady]);

  return (
    <div className="visibility-container">
      <div className="traffic-table-container">
        <table className="traffic-table">
          <thead>
            <tr>
              <th>Коммерческие</th>
              <th>Некоммерческие</th>
              <th>Общее количество</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>292</td>
              <td>530</td>
              <td>822</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="amcharts-wrapper" style={{ display: "flex", alignItems: "center" }}>
        <div
          ref={chartRef}
          className="amcharts-container"
          style={{ width: "100%", height: "700px", minWidth: "380px" }}
        >
          {!chartsReady && (
            <div style={{
              textAlign: "center",
              width: "100%",
              padding: "60px",
              color: "#888"
            }}>
              Загрузка графика...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisibilityChart;
