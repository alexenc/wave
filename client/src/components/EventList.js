import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/apiCalls";
import EventCard from "./EventCard";

const EventList = () => {
  const events = useSelector((state) => state.event.event);

  const dispatch = useDispatch();

  const handleGetEvents = () => {
    getEvents(dispatch);
  };

  useEffect(() => {
    handleGetEvents();
  }, []);

  return (
    <div>
      <h3>Active Events</h3>
      <div className="eventscontainer">
        {events.map((event) => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
