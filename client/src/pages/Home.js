import Header from "../components/Header";
import EventList from "../components/EventList";
import MainSection from "../components/MainSection";
import Tickets from "../components/Tickets";

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <EventList />
      <Tickets />
    </div>
  );
};

export default Home;
