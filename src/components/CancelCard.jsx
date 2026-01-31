import React from "react";

const CancelCard = ({ cancelInfo,handleCancelAppointment }) => {
  const {
    name,
    education,
    consultationFee,
    registrationNumber
  } = cancelInfo;
  return (
    <div className="bg-white rounded-2xl  p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold py-2">{name}</h1>
          <p className="text-color text-xs">{education}</p>
        </div>
        <div>
          <p className="text-color text-xs">Appointment Fee :  {" "}                                      {consultationFee} Taka + Vat</p>
        </div>
      </div>
      <div className="border-dashed border-t-2 border-gray-300 my-5"></div>
      <button onClick={()=>handleCancelAppointment(registrationNumber)}
       className="btn w-full text-center border-2 rounded-2xl  bg-white  border-red-400 text-red-500">
        Cancel Appointment
      </button>
    </div>
  );
};

export default CancelCard;
