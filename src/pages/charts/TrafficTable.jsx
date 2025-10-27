function TrafficTable() {
  // Placeholder данные (замени на данные с бэкенда)
  const tableData = [
    {
      site: 'сайт клиента',
      cms: 'Unknown',
      pages: 10,
      top5: 10,
      top10: 10,
      top50: 10,
      traffic: 10
    },
    {
      site: 'сайт клиента',
      cms: 'Unknown',
      pages: 10,
      top5: 10,
      top10: 10,
      top50: 10,
      traffic: 10
    },
    {
      site: 'сайт клиента',
      cms: 'Unknown',
      pages: 10,
      top5: 10,
      top10: 10,
      top50: 10,
      traffic: 10
    },
    {
      site: 'press-kod.ru',
      cms: 'Unknown',
      pages: 10,
      top5: 10,
      top10: 10,
      top50: 10,
      traffic: 10
    }
  ];

  return (
    <div className="traffic-table-container">
      <h3 className="table-subtitle">По данным Яндекса: 48/день</h3>
      <table className="traffic-table">
        <thead>
          <tr>
            <th>Сайт</th>
            <th>CMS</th>
            <th>Страниц в индексе</th>
            <th>ТОП 5</th>
            <th>ТОП 10</th>
            <th>ТОП 50</th>
            <th>Орг. трафик/ день</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.site}</td>
              <td>{row.cms}</td>
              <td>{row.pages}</td>
              <td>{row.top5}</td>
              <td>{row.top10}</td>
              <td>{row.top50}</td>
              <td>{row.traffic}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h3 className="table-subtitle" style={{marginTop: '40px'}}>По данным Google: 31/день</h3>
      <table className="traffic-table">
        <thead>
          <tr>
            <th>Сайт</th>
            <th>CMS</th>
            <th>Страниц в индексе</th>
            <th>ТОП 5</th>
            <th>ТОП 10</th>
            <th>ТОП 50</th>
            <th>Орг. трафик/ день</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.site}</td>
              <td>{row.cms}</td>
              <td>{row.pages}</td>
              <td>{row.top5}</td>
              <td>{row.top10}</td>
              <td>{row.top50}</td>
              <td>{row.traffic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrafficTable;
