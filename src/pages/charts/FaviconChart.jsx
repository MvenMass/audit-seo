import React from 'react';

function FaviconChart() {
  return (
    <div className="traffic-table-container">
      <table className="traffic-table">
        <thead>
          <tr>
            <th>Сайт</th>
            <th>Тип</th>
            <th>Размер</th>
            <th>Метод</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>https://press-kod.ru/favicon.ico</td>
            <td>image/x-icon</td>
            <td>N/A KB</td>
            <td>HTML tag</td>
          </tr>
          {/* Если есть дубликат, добавьте вторую строку: */}
          <tr>
            <td>https://press-kod.ru/favicon.ico</td>
            <td>image/x-icon</td>
            <td>N/A KB</td>
            <td>HTML tag</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FaviconChart;
