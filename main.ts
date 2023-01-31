input.onButtonPressed(Button.A, function () {
    PlayerA += 1
    Rounds += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `)
    updateScores()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    updateScores()
})
input.onButtonPressed(Button.B, function () {
    PlayerB += 1
    Rounds += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    updateScores()
})
input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    PlayerA = 0
    PlayerB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("\"Want to play?\"")
    basic.pause(2000)
    updateScores()
})
function updateScores () {
    OLED.clear()
    OLED.writeStringNewLine("\"Player A:\"" + PlayerA)
    OLED.newLine()
    OLED.writeStringNewLine("\"Player B:\"" + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("\"Ties:\"" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("\"Rounds:\"" + Rounds)
}
function reset () {
    reset()
}
let PlayerB = 0
let Ties = 0
let Rounds = 0
let PlayerA = 0
reset()
