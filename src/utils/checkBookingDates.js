import { isWithinInterval } from 'date-fns';

const checkBookingDates = (initialDate, finalDate, bookings, propertyId) => {
  const bookingsDates = bookings.map((booking) => ({
    initialDate: booking.initialDate,
    finalDate: booking.finalDate,
    propertyId: booking.property.id,
  }));

  let alreadyExists = false;

  bookingsDates.forEach((b) => {
    if (
      (isWithinInterval(new Date(initialDate), {
        start: new Date(b.initialDate),
        end: new Date(b.finalDate),
      }) ||
        isWithinInterval(new Date(finalDate), {
          start: new Date(b.initialDate),
          end: new Date(b.finalDate),
        })) &&
      b.propertyId === propertyId
    ) {
      alreadyExists = true;
    }
  });

  return alreadyExists;
};

export default checkBookingDates;
