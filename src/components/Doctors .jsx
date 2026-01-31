import React, { useState } from "react";
import { useLoaderData} from "react-router";
import DoctorCard from "./DoctorCard";
import Loading from "./Loading";

const Doctors = () => {
  const [loadAll,setLoadAll]= useState(false);
  const doctorsData = useLoaderData();
  const handleLoadingAll =()=>{
    setLoadAll(true);
  }

 

  return (
    <section className="mb-10">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Our Best Doctors</h2>
          <p className="text-color md:w-4/5 text-center mx-auto text-sm dark:text-gray-600">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {
            loadAll?
            doctorsData.slice(0, 12).map((doctorData) => (
            <DoctorCard
              key={doctorData.registrationNumber}
              doctorData={doctorData}
            ></DoctorCard>
          )):doctorsData.slice(0, 6).map((doctorData) => (
            <DoctorCard
              key={doctorData.registrationNumber}
              doctorData={doctorData}
            ></DoctorCard>
          ))}
         
        </div>
          <div className={`${loadAll?'hidden':'text-center '}`}>
          <a
            onClick={()=>handleLoadingAll()}
            className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] cursor-pointer ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              View All Doctors
            </span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Doctors;
