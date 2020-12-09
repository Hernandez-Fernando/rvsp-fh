function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        let outcome = `<label>Review Your Reservation</label><p>Name: <b>${data[0].guestname} ${data[0].guestlastname}</b></p><p>Number of Guests: <b>${data[0].guestnumber}</b></p><input id="reservationId" type="hidden" value="${data[0].guestid}"><button class="btn btn-primary text-uppercase" onclick="confirmAttendance()>Confirm Attendance</button>`

        $('#result').html(outcome)
    })
}

function confirmAttendance() {
    let id = $('#reservationId').val()
    
}