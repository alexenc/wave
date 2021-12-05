import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/apiCalls";
import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";
import EventPlaceholder from "./EventPlaceholder";

const EventList = () => {
  const events = useSelector((state) => state.event.event);
  const pending = useSelector((state) => state.event.isPending);
  const dispatch = useDispatch();

  const handleGetEvents = () => {
    getEvents(dispatch);
  };

  useEffect(() => {
    handleGetEvents();
  }, []);

  return (
    <section className="eventlist-section">
      <h3 className="eventlist-section-h3">Active Events</h3>
      <div className="eventList-container">
        <Grid container justify="center" alignItems="center" spacing={3}>
          {pending && (
            <>
              <EventPlaceholder />
              <EventPlaceholder />
              <EventPlaceholder />
              <EventPlaceholder />
            </>
          )}
          {events.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default EventList;
