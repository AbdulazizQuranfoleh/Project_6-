import React, { useState, createContext } from "react";
import "../style/Booking.css";
import BookingCardInfo from "../components/BookingCardInfo";
export const BookingContext = createContext();

function Booking() {
  const [date, setDate] = useState("empty");
  const [time, setTime] = useState("01:00-02:00");
  return (
    <div>
      <BookingContext.Provider value={{ date, setDate, time, setTime }}>
        <div className="teacher">teacher</div>
        <BookingCardInfo />
      </BookingContext.Provider>
    </div>
  );
}

export default Booking;
