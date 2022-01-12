import React from "react";
import CreateEvent from "../components/CreateEvent";
import Header from "../components/Header";

const AdminPanel = () => {
  return (
    <div>
      <Header />
      <div className="panelSelector"></div>
      <div className="formsContainer">
        <CreateEvent />
      </div>
    </div>
  );
};

export default AdminPanel;
