let number = 0
function showLed (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . . . . .
            . . # . .
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    }
}
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    soundExpression.giggle.play()
    showLed(number)
})
