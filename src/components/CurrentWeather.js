import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { WiDaySunny } from "react-icons/wi"; // Weather icon

const CurrentWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    // Example: set your location, e.g., "London"
    const location = "United Arab Emirates";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=94.04&appid=${apiKey}`
    )
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Failed to fetch data")
      )
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return (
    <Card
      className="bg-dark text-white mb-3 glass-card"
      style={{ maxWidth: "50rem", alignContent: "center", margin: "auto" }}
    >
      <div className="position-relative">
        <img
          src={require("../static/Images/weatherImage.jpg")}
          alt="Weather"
          className="glass-img card-img weather-img-overlay"
        />
        <Card.ImgOverlay
          className="p-0"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Card.Title className="d-flex align-items-center mb-4 mt-2 ms-2">
            <WiDaySunny size={32} className="me-2" />
            Weather
          </Card.Title>
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-2">
              {loading && <Card.Text>Loading...</Card.Text>}
              {error && <Card.Text>Error</Card.Text>}
              {data && (
                <Card.Text>
                  <strong>Location</strong>
                  <br />
                  {data.name}
                </Card.Text>
              )}
            </div>
            <div className="col-6 col-md-3 mb-2">
              {data && (
                <Card.Text>
                  <strong>Temperature</strong>
                  <br />
                  {Math.round(data.main.temp - 273.15)}°C
                </Card.Text>
              )}
            </div>
            <div className="col-6 col-md-3 mb-2">
              {data && (
                <Card.Text>
                  <strong>Weather</strong>
                  <br />
                  {data.weather[0].description}
                </Card.Text>
              )}
            </div>
            <div className="col-6 col-md-3 mb-2">
              {data && (
                <Card.Text>
                  <strong>Humidity</strong>
                  <br />
                  {data.main.humidity}%
                </Card.Text>
              )}
            </div>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  );
};

export default CurrentWeather;
