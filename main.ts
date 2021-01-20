input.onButtonPressed(Button.A, function () {
    Countdown_number = 2
    basic.showNumber(Countdown_number)
    while (Countdown_number > 0) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
        }
        Countdown_number += -1
    }
})
input.onButtonPressed(Button.B, function () {
    Countdown_number = -1
})
let Countdown_number = 0
Countdown_number = -1
basic.forever(function () {
    while (Countdown_number == -1) {
        basic.showString("HELLO")
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("30 MINUTE TIMER")
        basic.pause(500)
    }
})
basic.forever(function () {
    while (Countdown_number > 1) {
        basic.showNumber(Countdown_number)
    }
})
basic.forever(function () {
    while (Countdown_number == 0) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(1000)
    }
})
basic.forever(function () {
    while (Countdown_number == 1) {
        basic.pause(500)
        basic.showString("FINAL MINUTE")
        basic.pause(500)
        basic.showString("STAND BY")
        basic.pause(500)
    }
})
