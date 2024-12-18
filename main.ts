let DIAMETER = 0
let TRACK_LENGTH = 0
let HIGH_ANGLE = 0
let LOW_ANGLE = 0
let sonarPing = 0
basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    DIAMETER = 31
    TRACK_LENGTH = 20
    HIGH_ANGLE = 270
    LOW_ANGLE = 45
    robotbit.StpCarMove(1, 20)
    sonarPing = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (sonarPing <= 5) {
        basic.showIcon(IconNames.Skull)
        robotbit.StpCarMove(-10, DIAMETER)
        robotbit.StpCarTurn(randint(LOW_ANGLE, HIGH_ANGLE), DIAMETER, TRACK_LENGTH)
    }
})
