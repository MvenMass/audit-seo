import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UrlGenerator = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [site, setSite] = useState("");
  const [competitors, setCompetitors] = useState(["", "", "", "", ""]);

  const handleCompetitorChange = (index, value) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
  };

  const handleGenerate = () => {
    // Валидация: проверяем, что хотя бы город и сайт заполнены
    if (!city.trim() || !site.trim()) {
      alert("Пожалуйста, заполните поля 'Ваш город' и 'Ваш сайт'");
      return;
    }

    // Собираем данные для отправки на бэкенд
    const formData = {
      city,
      site,
      competitors: competitors.filter(comp => comp.trim() !== "") // Убираем пустые поля
    };

    console.log("Отправка данных:", formData);

    // Здесь будет запрос на бэкенд, например:
    // fetch('/api/generate-audit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Сохраняем результаты и переходим на страницу результатов
    //   navigate('/audit-results', { state: { auditData: data } });
    // })
    // .catch(error => console.error('Ошибка:', error));

    // Пока бэкенда нет, просто переходим на страницу результатов
    navigate('/audit-results', { state: { formData } });
  };

  const handleClear = () => {
    setCity("");
    setSite("");
    setCompetitors(["", "", "", "", ""]);
  };

  return (
    <div className="url-generator">
      <div className="url-generator-header">
        <span>Генератор URL</span> с выбором города
      </div>

      <div className="url-generator-block">
        <label className="url-generator-label">Ваш город:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город"
          className="url-generator-input"
        />
      </div>

      <div className="url-generator-block">
        <label className="url-generator-label">Ваш сайт:</label>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          placeholder="Введите сайт"
          className="url-generator-input"
        />
      </div>

      <div className="url-generator-block url-generator-block__container">
        <label className="url-generator-label">Укажите сайты конкурентов:</label>
        <div className="url-generator-block__conc">
          {competitors.map((comp, index) => (
            <input
              key={index}
              type="text"
              value={comp}
              onChange={(e) => handleCompetitorChange(index, e.target.value)}
              placeholder={`Сайт конкурента ${index + 1}`}
              className="url-generator-input url-generator-input-conc"
            />
          ))}
        </div>
      </div>

      <div className="url-generator-buttons">
        <button className="url-generator-generate" onClick={handleGenerate}>
          Сгенерировать URL
        </button>
        <button className="url-generator-clear" onClick={handleClear}>
          Очистить данные
        </button>
      </div>
    </div>
  );
};

export default UrlGenerator;
