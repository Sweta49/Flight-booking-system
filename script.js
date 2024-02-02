// Array to store booking details
const bookings = [];

// Function to handle form submission
function handleBookingFormSubmit(event) {
    event.preventDefault();

    // form values
    const flightId = parseInt(document.getElementById('flight-id').value);
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const departure_date = document.getElementById('departure-date').value;
    const tickets = parseInt(document.getElementById('passengers').value);
    const email = document.getElementById('email').value; 
     const name = document.getElementById('name').value;
      

    // Validate input
    if (isNaN(flightId) || !name || !email || !departure || !arrival || !departure_date  || isNaN(tickets) || tickets <= 0) {
        alert('Please fill in all fields and select a valid number of tickets.');
        return;
    }

    //  booking details
    const booking = {
        flightId,
        departure,
        arrival,
        departure_date,
        tickets,
        email,
        name
    };
    bookings.push(booking);

    // Display confirmation message
        const confirmationMessage = `Thank you! ${name},You have successfully booked tickets for flight ${flightId}. An email confirmation has been sent to ${email}.`;
        console.log('Confirmation Message:', confirmationMessage); //  for debugging
        alert(confirmationMessage);

    // Clear form
    document.getElementById('booking-form').reset();
}

// Event listener for form submission
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    console.log('Event listener registered');
    bookingForm.addEventListener('submit', handleBookingFormSubmit);
}


// Function to toggle between flight selection and booking form
function bookTicket(flightId) {
    document.getElementById('flight-id').value = flightId;
    document.getElementById('Flight-selection').style.display = 'none';
    document.getElementById('booking-form').style.display = 'block';
}




