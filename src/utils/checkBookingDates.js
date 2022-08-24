import { isWithinInterval } from 'date-fns';

const checkBookingDates = (
  { initialDate, finalDate, bookings, propertyId },
  bookingId
) => {
  const checkingBookings = bookingId
    ? bookings.filter((b) => b.id !== bookingId)
    : bookings;

  const bookingsDates = checkingBookings.map((booking) => ({
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
        }) ||
        isWithinInterval(new Date(b.initialDate), {
          start: new Date(initialDate),
          end: new Date(finalDate),
        }) ||
        isWithinInterval(new Date(b.finalDate), {
          start: new Date(initialDate),
          end: new Date(finalDate),
        })) &&
      b.propertyId === propertyId
    ) {
      alreadyExists = true;
    }
  });

  return alreadyExists;
};

export default checkBookingDates;
