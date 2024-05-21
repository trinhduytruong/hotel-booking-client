import React, { useContext } from "react";
import MainHeader from "../layout/MainHeader";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";
import RoomCarousel from "../common/RoomCarousel";
import RoomSearch from "../common/RoomSearch";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();


  return (
    <section>

        <h6 className="text-success text-center">
          {" "}
          You are logged-In as
        </h6>

      <MainHeader />
      <div className="container">
        <RoomCarousel />
        <Parallax />
        <RoomCarousel />
        <HotelService />
        <Parallax />
        <RoomCarousel />
      </div>
    </section>
  );
};

export default Home;
