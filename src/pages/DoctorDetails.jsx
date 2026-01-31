import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import defaultDoctor from "../assets/doctor-sample.png";
import { AiFillTrademarkCircle, AiFillExclamationCircle } from "react-icons/ai";
import { getBookings, saveBookings } from "../utilities/utilities";
import toast from "react-hot-toast";

const DoctorDetails = () => {
  const doctorDatas = useLoaderData();
  const { registrationNumber } = useParams();

  const doctorInfo = doctorDatas.find(
    (doctor) => doctor.registrationNumber === registrationNumber
  );

  const {
    image,
    name,
    education,
    availability,
    workingHospital,
    consultationFee,
  } = doctorInfo;

  /* ---------------- availability (today) ---------------- */
  const [isAvailable, setAvailable] = useState(false);

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
    setAvailable(availability?.includes(today));
  }, [availability]);

  /* ---------------- appointment state ---------------- */
  const [appoint, setAppointment] = useState(true);

  // persist appointment after reload
  useEffect(() => {
    const doctorsData = getBookings();
    const isBooked = doctorsData.find(
      (doctor) => doctor.registrationNumber === registrationNumber
    );

    if (isBooked) {
      setAppointment(false);
    }
  }, [registrationNumber]);

  /* ---------------- handle appointment ---------------- */
  const handleAppointment = () => {
    if (!isAvailable) return;

    const doctorsData = getBookings();
    const isAlreadyBooked = doctorsData.find(
      (doctor) => doctor.registrationNumber === doctorInfo.registrationNumber
    );

    if (!isAlreadyBooked) {
      saveBookings(doctorInfo);
      toast.success(`Successfully added ${doctorInfo.name}`);
      setAppointment(false);
    } else {
      toast.error("Appointment is already taken.");
    }
  };

  return (
    <div className="container mx-auto">
      {/* header */}
      <div className="bg-white rounded-2xl mb-10">
        <div className="mx-auto text-center w-3/4 py-20">
          <h1 className="text-3xl font-bold mb-5">Doctor’s Profile Details</h1>
          <p className="text-color">
            Book appointments based on real-time availability.
          </p>
        </div>
      </div>

      {/* profile */}
      <div className="flex flex-col md:flex-row rounded-2xl bg-white mb-10 p-5 gap-5">
        <div className="md:w-[40%] rounded-2xl overflow-hidden">
          <img
            src={image || defaultDoctor}
            alt={name}
            className="w-full max-h-[350px] object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col flex-1 gap-3">
          <h1 className="text-xl font-bold uppercase">{name}</h1>
          <h3 className="text-sm text-color font-semibold">{education}</h3>

          {workingHospital && (
            <p className="text-color text-sm">
              Working at:<br /> {workingHospital}
            </p>
          )}

          <div className="border-dashed border-t-2 border-gray-300 my-2"></div>

          <div className="flex gap-3 items-center">
            <AiFillTrademarkCircle size={20} />
            <h1 className="text-color text-sm">
              Reg no: {registrationNumber}
            </h1>
          </div>

          <div className="border-dashed border-t-2 border-gray-300 my-2"></div>

          {availability?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <p className="text-lg font-bold w-full">Availability:</p>
              {availability.map((day, idx) => (
                <span
                  key={idx}
                  className="text-green-600 bg-green-100 px-3 py-1 rounded-2xl text-sm font-semibold"
                >
                  {day}
                </span>
              ))}
            </div>
          )}

          {consultationFee && (
            <h1 className="font-bold mt-2">
              Consultation Fee:{" "}
              <span className="text-color">{consultationFee} Taka</span>
            </h1>
          )}
        </div>
      </div>

      {/* appointment */}
      <div className="p-8 rounded-2xl bg-white mb-10">
        <h1 className="text-center text-2xl font-bold pb-5">
          Book an Appointment
        </h1>

        <div className="border-dashed border-t-2 border-gray-300 my-3"></div>

        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Availability</h1>
          <div
            className={`px-3 py-1 rounded-2xl text-sm font-semibold ${
              isAvailable
                ? "text-green-600 bg-green-100"
                : "text-red-500 bg-red-100"
            }`}
          >
            {isAvailable
              ? "Doctor Available Today"
              : "Doctor Unavailable Today"}
          </div>
        </div>

        <div className="border-dashed border-t-2 border-gray-300 my-3"></div>

        <div className="flex items-center gap-2 text-orange-600 bg-orange-100 px-3 py-2 rounded-2xl text-sm font-semibold my-5">
          <AiFillExclamationCircle size={20} />
          Appointments are accepted for today only.
        </div>

        {/* BUTTON */}
        <Link
          to={`${isAvailable?'/bookingPage':''}`}
          onClick={handleAppointment}
          disabled={!isAvailable}
          className={`relative inline-flex items-center justify-center px-5 py-3 w-full rounded-full font-medium transition-all
            ${
              !isAvailable
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : appoint
                ? "bg-blue-600 hover:bg-white hover:border-2 hover:border-blue-400 text-white hover:text-blue-600"
                : "bg-red-500 text-white cursor-not-allowed"
            }
          `}
        >
          {!isAvailable
            ? "Doctor Not Available Today"
            : appoint
            ? "Book Appointment Now"
            : "Already Booked"}
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
