import { useState } from 'react';

function SemanticKeywordsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Пример данных - замени на реальные данные с бэкенда
  const allKeywords = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    keyword: `printair зеленоград ${i + 1}`,
    frequency: 1,
    top1: 12 + Math.floor(Math.random() * 30),
    top5: 123 + Math.floor(Math.random() * 200),
    top10: 1234 + Math.floor(Math.random() * 500)
  }));

  const totalPages = Math.ceil(allKeywords.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = allKeywords.slice(startIndex, endIndex);

  // Генерация номеров страниц для отображения
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const maxDotsPages = 3;
    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      if (currentPage <= 3) endPage = Math.min(totalPages - 1, maxDotsPages + 1);
      if (currentPage > totalPages - 3) startPage = Math.max(2, totalPages - maxDotsPages);
      if (startPage > 2) pages.push('...');
      for (let i = startPage; i <= endPage; i++) pages.push(i);
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePageChange = (page) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
      // Скроллим к нашей уникальной таблице
      document.getElementById('semantic-keywords-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <div className="traffic-table-container">
      <table
        className="traffic-table semantic-keywords-table"
        id="semantic-keywords-table"
      >
        <thead>
          <tr>
            <th>Ключевое слово/фраза</th>
            <th>Частотность</th>
            <th>ТОП 1</th>
            <th>ТОП 5</th>
            <th>ТОП 10</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id}>
              <td>{row.keyword}</td>
              <td>{row.frequency}</td>
              <td>{row.top1}</td>
              <td>{row.top5}</td>
              <td>{row.top10}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Пагинация */}
      <div className="pagination">
        <div className="pagination-buttons">
          {pageNumbers.map((page, idx) => (
            <button
              key={idx}
              className={`pagination-btn ${
                page === currentPage ? 'active' : ''
              } ${page === '...' ? 'dots' : ''}`}
              onClick={() => handlePageChange(page)}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}

          {/* Стрелка вперед */}
          <button
            className="pagination-btn arrow-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            title="Следующая страница"
          >
            →
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default SemanticKeywordsTable;
