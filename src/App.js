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
import { servicesDataPage } from "./utils/servicesData/servicesData";
import { servicesPagesData } from "./utils/servicesPages/servicesPagesData";

// import networks imgs and lightballs
import LightBluredBall from "./components/light-blured-ball/LightBluredBall";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <LightBluredBall width="105px" height="105px" top="26%" left="-65px" />
      <LightBluredBall width="140px" height="140px" top="58%" right="-90px" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={
            <ServicesPage cardsData={servicesDataPage} title="Our Services" />
          }
        />
        {servicesPagesData.map((service) => (
          <Route
            path={service.url}
            element={
              <ServicesPage
                cardsData={service.data}
                cardsDataSecond={service.dataSecond}
                cardsDataThird={service.dataThird}
                title={service.title}
                url={service.url}
                headerPageImg={service.headerImg}
                headerPageText={service.headerDescription}
                extraImages={service.extraImages}
                servicePagination={service.paginationTexts}
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
