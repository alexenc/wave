import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosClient from "../axiosConfig";

const EventInfo = ({ event }) => {
  const [peopleList, setPeopleList] = useState([]);
  const [userInEvent, setUserInEvent] = useState(false);
  const user = useSelector((state) => state.user.user.user);

  useEffect(() => {
    setPeopleList(event.peopleList);
    userInEventCheck();
  }, [event, user]);

  const userInEventCheck = () => {
    event.peopleList?.forEach((person) => {
      if (person?._id == user?._id) {
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

      event.peopleList.push(user);
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
    <div className="eventpage-container">
      <div className="eventpage-info-container">
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>{event.title}</h2>
        <img src={event.img} />
        <div className="eventpage-info-c2">
          <p>Start date: {new Date(event.startDate).toLocaleDateString()}</p>
          <p>{event.location}</p>
          <p>cost: x{event.cost} ticket</p>
          <div className="peoplelist">
            <p>People in the event: </p>
            {peopleList?.map((person) => (
              <img src={person?.img} />
            ))}
            <p>x{peopleList?.length}</p>
          </div>
          {user && (
            <div>
              {userInEvent ? (
                <button className="btn-main red" onClick={exitEvent}>
                  Exit
                </button>
              ) : (
                <button className="btn-main" onClick={() => joinEvent()}>
                  join
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="evetpage-map-container">
        <p>map</p>
      </div>
    </div>
  );
};

export default EventInfo;
