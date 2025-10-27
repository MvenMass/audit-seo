function SSLReportTable() {
  const sslData = [
    { label: 'Субъект', value: 'press-kod.ru' },
    { label: 'Эмитент', value: 'R11' },
    { label: 'Действителен с', value: 'Aug 4 06:48:25 2025 GMT' },
    { label: 'Действителен до', value: 'Nov 2 06:48:24 2025 GMT' },
    { label: 'Статус', value: 'Сертификат действителен', isStatus: true },
    { label: 'Серийный номер', value: '0542814B9BCFF25CB645920E3A70E8E9426E' },
    { label: 'Алгоритм подписи', value: 'Неизвестен' },
    { label: 'Дополнительные субъекты (SAN)', value: 'DNS:press-kod.ru, DNS:www.press-kod.ru' },
    { label: 'Самоподписанный', value: 'Нет' }
  ];

  return (
    <div className="ssl-report-container">
      <table className="ssl-report-table">
        <tbody>
          {sslData.map((row, idx) => (
            <tr key={idx} className="ssl-report-row">
              <td className="ssl-report-label">{row.label}</td>
              <td className={`ssl-report-value ${row.isStatus ? 'ssl-status-active' : ''}`}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SSLReportTable;
