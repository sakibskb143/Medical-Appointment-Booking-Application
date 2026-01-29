import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import defaultDoctor from "../assets/doctor-sample.png";
import { AiFillTrademarkCircle } from "react-icons/ai";
import { AiFillExclamationCircle } from "react-icons/ai";

const DoctorDetails = () => {
  const doctorDatas = useLoaderData();
  const { registrationNumber } = useParams();
  const [isAvailable, setAvailable] = useState(false);
  const doctorInfo = doctorDatas.find(
    (doctor) => doctor.registrationNumber === registrationNumber,
  );
  const {
    image,
    name,
    education,
    availability,
    workingHospital,
    consultationFee,
  } = doctorInfo;

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    if (availability.includes(today)) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  }, [availability]);

  console.log(availability);

  return (
    <div className="container mx-auto ">
      <div className="bg-white rounded-2xl mb-10">
        <div className="mx-auto text-center w-3/4 py-20 ">
          <h1 className="text-3xl font-bold mb-5">Doctor’s Profile Details</h1>
          <p className="text-color">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row rounded-2xl bg-white mb-10 p-5 gap-5">
        {/* Left: Image */}
        <div className="md:w-[40%] flex-shrink-0  rounded-2xl overflow-hidden">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Doctor profile image"
          >
            <img
              alt={name || "Doctor"}
              className="object-fit w-full h-full max-h-[350px] rounded-2xl block mx-auto"
              src={defaultDoctor || image}
            />
          </a>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col flex-1 gap-3">
          <h1 className="text-xl font-bold tracking-wider uppercase dark:text-default-600">
            {name || "Unknown Doctor"}
          </h1>
          <h3 className="text-sm text-color font-semibold">
            {education || "N/A"}
          </h3>
          {workingHospital && (
            <p className="text-color text-sm">
              Working at: <br /> {workingHospital}
            </p>
          )}
          <div className="border-dashed border-t-2 border-gray-300 my-2"></div>

          <div className="flex gap-3 items-center">
            <AiFillTrademarkCircle size={20} />
            <h1 className="text-color text-sm">Reg no: {registrationNumber}</h1>
          </div>

          <div className="border-dashed border-t-2 border-gray-300 my-2"></div>

          {availability && availability.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <p className="text-lg font-bold w-full">Availability:</p>
              {availability.map((value, idx) => (
                <span
                  key={idx}
                  className="text-green-600 bg-green-100 px-3 py-1 rounded-2xl text-sm font-semibold"
                >
                  {value}
                </span>
              ))}
            </div>
          )}

          {consultationFee && (
            <h1 className="font-bold mt-2">
              Consultation Fee:{" "}
              <span className="text-color">{consultationFee} Take</span>
            </h1>
          )}
        </div>
      </div>
      <div className="p-8 rounded-2xl bg-white mb-10">
        <h1 className="text-center text-2xl font-bold pb-5">
          Book an Appointment
        </h1>
        <div className="border-dashed border-t-2 border-gray-300 my-2"></div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Availability</h1>
          <div
            className={`${isAvailable ? "text-green-600 bg-green-100" : "text-red-500 bg-red-100"} px-3 py-1 rounded-2xl text-sm  btn font-semibold`}
          >
            {isAvailable
              ? "Doctor Available Today"
              : "Doctor UnAvailable Today"}
          </div>
        </div>
        <div className="border-dashed border-t-2 border-gray-300 my-2"></div>
        <div className="text-orange-600 bg-orange-100 px-3 py-1 rounded-2xl text-sm  btn font-semibold my-5">
          <AiFillExclamationCircle size={20} />
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </div>
        <button
          disabled={!isAvailable}
          className={`relative inline-flex items-center justify-center px-5 py-3 w-full rounded-full font-medium transition-all
    ${
      isAvailable
        ? "bg-blue-600 hover:bg-white hover:border-2 hover:border-blue-400 text-white hover:text-blue-600"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
