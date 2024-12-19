let sonoarping = 0
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    robotbit.StpCarMove(2, 31)
    sonoarping = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (sonoarping <= 8) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 5; index++) {
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            robotbit.StpCarMove(-2, 31)
        }
        basic.showIcon(IconNames.Silly)
        music.play(music.stringPlayable("B A G B A G B C5 ", 500), music.PlaybackMode.UntilDone)
        robotbit.StpCarTurn(randint(45, 270), 31, 20)
        music.play(music.stringPlayable("B A G B A G C5 C ", 500), music.PlaybackMode.UntilDone)
    }
})
