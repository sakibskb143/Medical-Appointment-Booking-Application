import React, { useEffect, useState } from "react";
import { AiFillTrademarkCircle } from "react-icons/ai";
import defaultDoctor from "../assets/doctor-sample.png";

const DoctorCard = ({ doctorData }) => {
  console.log(doctorData);
  const [isAvailable, setAvailable] = useState(false);

  const {
    image,
    name,
    experience,
    education,
    registrationNumber,
    speciality,
    availability,
  } = doctorData;


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

  return (
    <article className="flex flex-col p-5  rounded-2xl bg-white">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-[248px] rounded-2xl "
          src={image || defaultDoctor}
        />
      </a>
      <div className="flex gap-5 pt-5">
        <div className={`${isAvailable?'text-green-500 bg-green-100':'text-red-500 bg-red-100'} bg-opacity-20 overflow-hidden btn  rounded-2xl`}>
          {isAvailable?'Availability':'Unavailability'}
        </div>
        <div className="text-blue-500 bg-blue-200  bg-opacity-20 overflow-hidden btn  rounded-2xl">
          {experience} Experience
        </div>
      </div>
      <div className="flex flex-col flex-1 py-5 gap-5">
        <h1
          rel="noopener noreferrer"
          className="text-xl font-bold tracking-wider uppercase  dark:text-default-600"
        >
          {name}
        </h1>
        <h3 className="flex-1  text-sm text-color font-semibold ">
          {education}
        </h3>
        <div className="border-dashed border-t-2 border-gray-500 "></div>
        <div className="flex gap-3 items-center">
          <AiFillTrademarkCircle size={20} />
          <h1 className="text-color text-sm ">Reg no :{registrationNumber}</h1>
        </div>
        <div className="w-full ">
          <a
            href="#_"
            class="relative inline-flex  items-center justify-start inline-block px-5 btn overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group w-full hover:border-blue-500"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full  text-white text-center transition-colors duration-200 ease-in-out group-hover:text-blue-600 ">
              View Details
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default DoctorCard;
