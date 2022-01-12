import Header from "../components/Header";
import EventList from "../components/EventList";
import MainSection from "../components/MainSection";
import Tickets from "../components/Tickets";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <EventList />
      <Tickets />
      <Footer />
    </div>
  );
};

export default Home;
