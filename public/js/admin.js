function refreshGuests() {
    $.post("/refreshGuests", function(data) {
        let outcome = ''
        for (let i = 0; i < data.length; i++) {
            outcome += '<div class="row border-bottom mb-1">'
            outcome += `<div class="col-lg-2"><p class="text-center my-1">${data[i].guestcode}</p></div>`
            outcome += `<div class="col-lg-4"><p class="my-1">${data[i].guestname} ${data[i].guestLastname}</p></div>`
            outcome += `<div class="col-lg-1"><p class="text-center my-1">${data[i].guestnumber}</p></div>`
            outcome += `<div class="col-lg-2"><p class="text-center my-1">${data[i].guestattending}</p></div>`
            outcome += '<div class="col-lg-3"><p class="text-center my-1">Options</p></div>'
            outcome += '</div>'
        }

        $('#guestList').html(outcome)
    })
}


function addGuest() {
    let guestName = $('#guestName').val()
    let guestLastname = $('#guestLastname').val()
    let guestNumber = $('#guestNumber').val()
    let guestCode = generateCode(guestName, guestLastname)
    guestCode = guestCode.toUpperCase()

    $.post("/addGuest", {guestName: guestName, guestLastname: guestLastname, guestCode: guestCode, guestNumber: guestNumber}, function(data) {
        
        // Clear Inputs
        $('#guestName').val('')
        $('#guestLastname').val('')
        $('#guestNumber').val('')

        if(data !=0 ) {
            outcome = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Reservation added successfuly for ${guestName} ${guestLastname}. The reservation code is <strong>${guestCode}</strong>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
          refreshGuests()
        } else {
            outcome = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            The reservation for ${guestName} ${guestLastname} cannot be completed at this moment, please try again.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
        }
        $('#alerts').html(outcome)
    })

}

function generateCode(name, lastname) {
    let firstBlock = name.substring(0,2)
    let secondBlock = lastname.substring(0,2)
    let thirdBlock = Math.floor(Math.random() * Math.floor(99))
    if (thirdBlock < 10) thirdBlock = '0' + thirdBlock
    let code = firstBlock + secondBlock + thirdBlock
    return code
}



