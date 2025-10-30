import React from 'react';

function SemanticCoreChart() {
  return (
    <div className="traffic-table-container">
      <table className="traffic-table">
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
  );
}

export default SemanticCoreChart;
