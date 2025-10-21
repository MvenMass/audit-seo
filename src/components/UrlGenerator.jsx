import { useState } from "react";

const UrlGenerator = () => {
  const [city, setCity] = useState("");
  const [site, setSite] = useState("");
  const [competitors, setCompetitors] = useState(["", "", "", "", ""]);

  const handleCompetitorChange = (index, value) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
  };

  const handleGenerate = () => {
    console.log({ city, site, competitors });
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
