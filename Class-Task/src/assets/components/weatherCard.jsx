const WeatherCard = ({ weather }) => {
  const condition = weather.weather[0].main;

  return (
    <div>
      <h2>{weather.name}</h2>

      <h3>{weather.main.temp}°C</h3>

      {condition === "Clear" && <p>☀️ Sunny</p>}
      {condition === "Rain" && <p>🌧️ Rainy</p>}
      {condition === "Clouds" && <p>☁️ Cloudy</p>}
      {condition === "Snow" && <p>❄️ Snowy</p>}
    </div>
  );
};

export default WeatherCard;