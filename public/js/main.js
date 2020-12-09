function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        console.log(data)
        let outcome = `<div class="container><p class="text-bold>${data[0].guestname} ${data[0].guestlastname}</p><p>Number of Guests: ${data[0].guestnumber}</p>`

        $('#result').html(outcome)
    })
}