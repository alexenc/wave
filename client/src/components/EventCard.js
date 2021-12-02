import React from "react";

const EventCard = ({ event }) => {
  //Crear logica para hacer un contador que cuente hasta el inicio del evento

  const currDate = new Date();

  return (
    <>
      <h3>{event.location}</h3>
      <p>{event.isActive.toString()}</p>
      <p>{Date.parse(event.startDate)}</p>
    </>
  );
};

export default EventCard;
