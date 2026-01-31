const getBookings = () => {
  const storedBookingString = localStorage.getItem('bookings');

  if (storedBookingString) {
    return JSON.parse(storedBookingString);
  }

  return [];
};


const saveBookings = (doctorInfo) => {
  const storedBookings = getBookings();

  const existDoctorInfo = storedBookings.find(
    doctor => doctor.registrationNumber === doctorInfo.registrationNumber
  );

  if (!existDoctorInfo) {
    localStorage.setItem(
      'bookings',
      JSON.stringify([...storedBookings, doctorInfo])
    );
  }
};


const removeBookings = (regisNo) => {
  const storedBookings = getBookings();

  const updatedBookings = storedBookings.filter(
    doctor => doctor.registrationNumber !== regisNo
  );

  localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  
  
};

export {getBookings,saveBookings,removeBookings};