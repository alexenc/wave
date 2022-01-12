import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosClient from "../axiosConfig";
import EventInfo from "../components/EventInfo";
import Header from "../components/Header";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axiosClient.get(`/event/${id}`);
        setEvent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getEvent();
  }, []);

  return (
    <div>
      <Header />
      <EventInfo event={event} />
    </div>
  );
};

export default Event;
