import BusinessApp from "./BusinessApp/BusinessApp";
import CustomerApp from "./CustomerApp/CustomerApp";
import ManagersApp from "./ManagersApp/ManagersApp";
import Video from "./Video/Video";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import homeImg from "./home.png";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="home carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="dot active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            className="dot"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            className="dot"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            className="dot"
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={homeImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={homeImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={homeImg} className="d-block w-100" alt="..." />
          </div>
        </div>
       
      </div>
      <div className="container">
        <Video />
        <CustomerApp />
        <BusinessApp />
        <ManagersApp />
        <WhyChooseUs />

      </div>
    </>
  );
};

export default Home;
