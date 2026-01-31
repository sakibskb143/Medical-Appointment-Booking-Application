import React, { useEffect, useState } from "react";
import { getBookings, removeBookings } from "../utilities/utilities";
import CancelCard from "../components/CancelCard";
import toast from "react-hot-toast";
import ReChart from "../components/ReChart";
import EmptyState from "../components/EmptyState";
import { useNavigation } from "react-router";

const BookingPage = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const storeData = getBookings();
    setDoctorData(storeData);
  }, []);

  const handleCancelAppointment = (registrationNumber) => {
    removeBookings(registrationNumber);

    const updatedData = getBookings();
    setDoctorData(updatedData);

    toast.success("Successfully Cancel Appointment!");
  };



  
  if(doctorData.length<1) return <EmptyState></EmptyState>
  return (
    <div className="container mx-auto ">
      <div className="w-full">
        <div>
          <ReChart doctorData={doctorData}></ReChart>
        </div>
        <div className="text-center md:w-2/3 mx-auto mb-5">
          <h1 className="text-3xl font-bold py-5">My Today Appointments</h1>
          <p className="text-sm  text-color w-2/3 mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className="flex flex-col justify-between  gap-5 mb-10">
          {doctorData.map((cancelInfo) => (
            <CancelCard
              key={cancelInfo.registrationNumber}
              handleCancelAppointment={handleCancelAppointment}
              cancelInfo={cancelInfo}
            ></CancelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
