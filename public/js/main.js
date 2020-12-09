function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        let outcome = `<div class="container"><p><span class="text-bold">Name:</span> ${data[0].guestname} ${data[0].guestlastname}</p><p><span class="text-bold">Number of Guests:</span> ${data[0].guestnumber}</p>`

        $('#result').html(outcome)
    })
}