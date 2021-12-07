import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import axiosClient from "../axiosConfig";

const EventCard = ({ event }) => {
  //Crear logica para hacer un contador que cuente hasta el inicio del evento
  const user = useSelector((state) => state.user.user.user);
  const [userInEvent, setUserInEvent] = useState(false);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    userInEventCheck();
    console.log("hola");
  }, [user, event]);

  const userInEventCheck = () => {
    event.peopleList.forEach((person) => {
      if (person._id == user?._id) {
        setUserInEvent(true);
        return;
      }
    });
  };

  const joinEvent = async () => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    try {
      await axiosClient.put(`/event/join/${event._id}`, {}, config);
      setUserInEvent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const exitEvent = async () => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    try {
      await axiosClient.put(`/event/exit/${event._id}`, {}, config);
      setUserInEvent(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item className="event-card" xs={12} sm={6} md={4} lg={3}>
        <div className="titlecontainer">
          <img src={event.img} alt="" />
          <div>
            <h3>{event.location}</h3>
          </div>
        </div>
        <div className="event-cardinfo-container">
          <div>
            <p>{event.isActive ? <p>Currently active</p> : <p>Inactive</p>}</p>
            <p>Start date: {new Date(event.startDate).toLocaleDateString()}</p>
          </div>

          {userInEvent ? (
            <button className="btn-main red" onClick={exitEvent}>
              Exit
            </button>
          ) : (
            <button className="btn-main" onClick={joinEvent}>
              join
            </button>
          )}
        </div>
      </Grid>
    </>
  );
};

export default EventCard;
