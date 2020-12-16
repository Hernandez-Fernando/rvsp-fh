function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        let outcome = `<label>Review Your Reservation</label><p>Name: <b>${data[0].guestname} ${data[0].guestlastname}</b></p><p>Number of Guests: <b>${data[0].guestnumber}</b></p><input id="id" type="hidden" value="${data[0].guestid}"><button class="btn btn-primary text-uppercase" onclick="confirmAttendance()">Confirm Attendance</button>`
        $('#result').html(outcome)
    })
}

function confirmAttendance() {
    let id = $('#id').val()
    $.post("/confirmation", {id:id}, function(data) {
        let outcome = ''
        if(data !=0 ) {
            outcome = '<label>Reservation Confirmed!</label><p>We are glad you can enjoy our big day with us. Thank you, and see you on October 4th.</p>'
        } else {
            outcome = '<p>Sorry, your reservation could not be confirm; please try again.</p>'
        }
        $('#result').html(outcome)
    })
}