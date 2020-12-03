// Made ths variable the dice count of the other micro bit
radio.onReceivedNumber(function (receivedNumber) {
    RadioNUmber = receivedNumber
})
// When button A is pressed then it will show the score of the player.
// 
// After 1.5 seconds, it will stop displaying.
// 
// 
input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
    basic.pause(1500)
    basic.clearScreen()
})
// On shaking it, it chooses a random number 1-6. And the number is equal to the dice count.
// 
// Shows the number when the random number is chosen.
// 
// Now the dice is done, we need to connect them now.
// 
// 
input.onGesture(Gesture.Shake, function () {
    if (Dice_number == 0) {
        Dice_number = randint(1, 6)
        basic.showNumber(Dice_number)
        radio.sendNumber(Dice_number)
    }
})
// Inspired by the game multi-dice, only looked at the idea and not the code. The goal is to compete with the highest number dice.
// 
// https://makecode.microbit.org/v1/projects/multi-dice
// 
// The radio set group will make the other micro bit show at the start.
// 
// I also set all of the variables such as the dice count and the score to 0.
// 
// 
let Dice_number = 0
let RadioNUmber = 0
radio.setGroup(1)
RadioNUmber = 0
radio.sendNumber(0)
Dice_number = 0
game.setScore(0)
// Made it so that if the number is 0, nothing is happening. 
// 
// If the dice count is less than the other one it will show an x mark, which means you lost that round.
// 
// And when it is higher then it will show a checkmark, which means you won.
// 
// 
// 
// Also when it is the same, it will display TIE on the LED screen.
// 
// if someone wins then their score will be added by +1.
// 
// 
// Then after the round, the dice count of both of them changes to 0.
// 
// 
// 
// 
basic.forever(function () {
    if (RadioNUmber != 0 && Dice_number != 0) {
        // Note for Player: 
        // 
        // After finishing a game
        // 
        // Shake the dice first with a number already.
        if (Dice_number < RadioNUmber) {
            basic.showIcon(IconNames.No)
        } else if (Dice_number == RadioNUmber) {
            basic.showString("TIE")
        } else {
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
        }
        basic.pause(1500)
        RadioNUmber = 0
        Dice_number = 0
        basic.clearScreen()
    }
})
