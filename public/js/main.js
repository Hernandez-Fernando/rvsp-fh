function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        let outcome = `<label class="font-weight-medium">Your Reservation</label><p><span class="font-weight-medium">Name:</span> ${data[0].guestname} ${data[0].guestlastname}</p><p><span class="font-weight-medium">Number of Guests:</span> ${data[0].guestnumber}</p>`

        $('#result').html(outcome)
    })
}