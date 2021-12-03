import { Grid } from "@mui/material";
import React from "react";

const EventCard = ({ event }) => {
  //Crear logica para hacer un contador que cuente hasta el inicio del evento

  const currDate = new Date();

  return (
    <>
      <Grid item className="event-card" xs={12} md={6} lg={3}>
        <div className="titlecontainer">
          <img src={event.img} alt="" />
          <div>
            <h3>{event.location}</h3>
          </div>
        </div>
        <p>{event.isActive.toString()}</p>
        <p>{Date.parse(event.startDate)}</p>
      </Grid>
    </>
  );
};

export default EventCard;
