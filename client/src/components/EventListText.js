import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEvents } from "../redux/apiCalls";

const EventListText = () => {
  const events = useSelector((state) => state.event.event);

  const dispatch = useDispatch();

  const handleGetEvents = () => {
    getEvents(dispatch);
  };

  useEffect(() => {
    handleGetEvents();
  }, []);
  return (
    <div className="eventstext">
      {events.map((event) => (
        <Link to={`event/${event._id}`}>{event.title}</Link>
      ))}
    </div>
  );
};

export default EventListText;
