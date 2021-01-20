input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    Countdown_number = 30
})
input.onButtonPressed(Button.B, function () {
    Countdown_number = -1
})
let Countdown_number = 0
Countdown_number = -1
basic.forever(function () {
    while (Countdown_number == -1) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.pause(500)
    }
})
basic.forever(function () {
    while (Countdown_number > 1) {
        basic.showNumber(Countdown_number)
        basic.showString("MINS")
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
basic.forever(function () {
    while (Countdown_number > 0) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
        }
        Countdown_number += -1
    }
})
