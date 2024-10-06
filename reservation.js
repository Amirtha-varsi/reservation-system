class Reservation {
    constructor(name, guests, time) {
      this.name = name;
      this.guests = guests;
      this.time = time;
    }

    getDetails() {
      return `${this.name} (Guests: ${this.guests}, Time: ${this.time})`;
    }
  }

  class ReservationSystem {
    constructor() {
      this.reservations = [];
    }

    
    addReservation(name, guests, time) {
      const newReservation = new Reservation(name, guests, time);
      this.reservations.push(newReservation);
      this.updateReservationList();
    }

    
    updateReservationList() {
      const reservationList = document.getElementById('reservationList');
      reservationList.innerHTML = '';
      if (this.reservations.length === 0) {
        reservationList.innerHTML = '<p>No reservations available.</p>';
      } else {
        this.reservations.forEach((res, index) => {
          const reservationItem = document.createElement('div');
          reservationItem.className = 'reservation-item';
          reservationItem.innerHTML = `
            <p>${res.getDetails()}</p>
            <button class="cancel-button" onclick="restaurant.cancelReservation(${index})">Cancel</button>
          `;
          reservationList.appendChild(reservationItem);
        });
      }
    }

    
    cancelReservation(index) {
      this.reservations.splice(index, 1);
      this.updateReservationList();
    }
  }

  const restaurant = new ReservationSystem();


  document.getElementById('addReservation').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const time = document.getElementById('time').value;

    if (name && guests && time) {
      restaurant.addReservation(name, guests, time);
      document.getElementById('name').value = '';
      document.getElementById('guests').value = '';
      document.getElementById('time').value = '';
    } else {
      alert('Please fill in all fields.');
    }
  });