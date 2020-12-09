function searchReservation() {
    let code = $('#number').val()

    $.post("/reservation", {code:code}, function(data) {
        console.log(data)
    })
}