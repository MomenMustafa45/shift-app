import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import ServicesPage from "./pages/services-page/ServicesPage";
import Navbar from "./components/navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Services Cards data
import { servicesData } from "./utils/servicesData/servicesData";
import { servicesPagesData } from "./utils/servicesPages/servicesPagesData";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={
            <ServicesPage cardsData={servicesData} title="Our Services" />
          }
        />
        {servicesPagesData.map((service) => (
          <Route
            path={service.url}
            element={
              <ServicesPage
                cardsData={service.data}
                title={service.title}
                url={service.url}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
