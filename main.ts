input.onButtonPressed(Button.A, function () {
    Countdown_number += 1
    basic.showNumber(Countdown_number)
})
let Countdown_number = 0
Countdown_number = 30
basic.showNumber(Countdown_number)
