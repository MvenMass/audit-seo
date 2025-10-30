import React from 'react';

function PageSpeedTable() {
  const tableData = [
    {
      metric: 'Скорость загрузки',
      mobile: '38/100',
      desktop: '37/100'
    },
    {
      metric: 'First Contentful Paint',
      mobile: '0.4 s',
      desktop: '10.7 s'
    },
    {
      metric: 'Speed Index',
      mobile: '3.6 s',
      desktop: '10.7 s'
    },
    {
      metric: 'Time to Interactive',
      mobile: '6.8 s',
      desktop: '24.6 s'
    },
    {
      metric: 'Total Blocking Time',
      mobile: '920 ms',
      desktop: '200 ms'
    },
    {
      metric: 'Cumulative Layout Shift',
      mobile: '0.104',
      desktop: '0.314'
    }
  ];

  const siteUrl = 'https://press-kod.ru/';

  return (
    <div className="traffic-table-container">
      {/* Wrapper с радиусом вокруг всей таблицы */}
      <div className="table-wrapper">
        <table className="traffic-table">
          <thead>
            {/* Заголовок интегрирован в таблицу: colSpan="3" для центрирования */}
            <tr>
              <th colSpan="3" className="pagespeed-site-header">
                Результаты PageSpeed для: <a href={siteUrl} target="_blank" rel="noopener noreferrer">{siteUrl}</a>
              </th>
            </tr>
            {/* Обычные заголовки колонок */}
            <tr>
              <th>Показатель</th>
              <th>Mobile</th>
              <th>Desktop</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.metric}</td>
                <td>{row.mobile}</td>
                <td>{row.desktop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PageSpeedTable;
