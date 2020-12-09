function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        let outcome = `<div class="container><p class="text-bold>${data.guestname} ${data.guestlastname}</p><p>Number of Guests: ${data.guestnumber}</p>`

        $('#result').html(outcome)
    })
}