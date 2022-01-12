import React, { useState } from "react";
import Swal from "sweetalert2";
import axiosClient from "../axiosConfig";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    startDate: "",
    cost: 1,
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axiosClient.post("/event/create", event, config);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Event created",
        showConfirmButton: false,
        timer: 2000,
      });
      setEvent({
        title: "",
        location: "",
        startDate: "",
        cost: 1,
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="auth-form">
      <form>
        <h3>Create Event</h3>
        <div>
          <label>Event name:</label>
          <input
            type="text"
            value={event.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Event location:</label>
          <input
            value={event.location}
            type="text"
            name="location"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cost:</label>
          <input
            value={event.cost}
            defaultValue={1}
            type="number"
            name="cost"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Set start date:</label>
          <input
            value={event.startDate}
            type="date"
            name="startDate"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn-main"
          onClick={(e) => handleSubmit(e)}
        >
          Create
        </button>
      </form>
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default CreateEvent;
