function CompetitorTable() {
  const competitors = [
    {
      domain: 'сайт клиента',
      age: '13 лет 3 мес 10 дней',
      source: 'источник',
      info: 'информация'
    },
    {
      domain: 'сайт клиента',
      age: '13 лет 3 мес 10 дней',
      source: 'источник',
      info: 'информация'
    },
    {
      domain: 'сайт клиента',
      age: '13 лет 3 мес 10 дней',
      source: 'источник',
      info: 'информация'
    },
    {
      domain: 'сайт клиента',
      age: '13 лет 3 мес 10 дней',
      source: 'источник',
      info: 'информация'
    },
    {
      domain: 'сайт клиента',
      age: '13 лет 3 мес 10 дней',
      source: 'источник',
      info: 'информация'
    }
  ];

  return (
    <div className="competitor-table-container">
      <table className="competitor-table">
        <thead>
          <tr>
            <th>Домен</th>
            <th>Возраст домена</th>
            <th>Источник расчёта</th>
            <th>Доп. информация</th>
          </tr>
        </thead>
        <tbody>
          {competitors.map((comp, idx) => (
            <tr key={idx}>
              <td>{comp.domain}</td>
              <td>{comp.age}</td>
              <td>{comp.source}</td>
              <td>{comp.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompetitorTable;
