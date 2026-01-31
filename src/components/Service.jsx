import React from 'react';
import doctor from '../assets/success-doctor.png'
import staff from '../assets/success-staffs.png'
import patient from '../assets/success-patients.png'
import review from '../assets/success-review.png'
import CountUp from 'react-countup';

const Service = () => {
    return (
        <div className='mb-10'>
            <div className='flex flex-col justify-center items-center gap-3 mb-5'>
                <h1 className='text-2xl font-bold'>We Provide Best Medical Services</h1>
                <p className='text-sm text-color'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5'>
                <div className='p-5 bg-white rounded-2xl shadow space-y-4 flex flex-col justify-center items-center'>
                    <img src={doctor} alt="" />
                    <h1 className='font-bold text-4xl'><CountUp end={451} duration={5}>451+</CountUp></h1>
                    <p className="text-color text-sm">Total Doctor</p>

                </div>
                <div className='p-5 bg-white rounded-2xl shadow space-y-4 flex flex-col justify-center items-center'>
                    <img src={review} alt="" />
                    <h1 className='font-bold text-4xl'><CountUp end={471} duration={5}>471+</CountUp></h1>
                    <p className="text-color text-sm">Total Doctor</p>

                </div>
                <div className='p-5 bg-white rounded-2xl shadow space-y-4 flex flex-col justify-center items-center'>
                    <img src={patient} alt="" />
                    <h1 className='font-bold text-4xl'><CountUp end={1900} duration={5}>1900+</CountUp></h1>
                    <p className="text-color text-sm">Total Patient</p>

                </div>
                <div className='p-5 bg-white rounded-2xl shadow space-y-4 flex flex-col justify-center items-center'>
                    <img src={staff} alt="" />
                    <h1 className='font-bold text-4xl'><CountUp end={300} duration={5}>300+</CountUp></h1>
                    <p className="text-color text-sm">Total Staffs</p>

                </div>
                
            </div>
        </div>
    );
};

export default Service;