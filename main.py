DIAMETER = 0
TRACK_LENGTH = 0
HIGH_ANGLE = 0
LOW_ANGLE = 0
sonarPing = 0

def on_forever():
    global DIAMETER, TRACK_LENGTH, HIGH_ANGLE, LOW_ANGLE, sonarPing
    DIAMETER = 31
    TRACK_LENGTH = 20
    HIGH_ANGLE = 270
    LOW_ANGLE = 45
    robotbit.stp_car_move(10, DIAMETER)
    sonarPing = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
    if sonarPing == 5:
        robotbit.stp_car_move(-10, DIAMETER)
        robotbit.stp_car_turn(randint(LOW_ANGLE, HIGH_ANGLE), DIAMETER, TRACK_LENGTH)
basic.forever(on_forever)
