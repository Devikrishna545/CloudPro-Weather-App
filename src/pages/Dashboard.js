import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";

const Dashboard = () => {
  return (
    <div className="dashboard modern-bg min-vh-100">
      <Header />
      <div className="container py-3">
        <h1 className="text-white">Welcome to Dashboard !</h1>
        <div>
          <CurrentWeather />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
