/** What each defect group covers, and what an owner can look at before the test (DVSA inspection manual). */
export const CAT_CHECK: Record<number, string> = {
  20158: 'walk round the car with the lights on: dipped and main beam, sidelights, indicators, hazard lights, brake lights (someone presses the pedal), the rear fog lamp and the number plate lamp, which fails a car as surely as a headlamp',
  20218: 'listen for knocks over speed bumps and look behind each wheel for a broken coil spring, often a short gap in the coils, or an oily shock absorber',
  20003: 'note whether the car pulls to one side under braking, whether the handbrake holds on a slope and whether a warning lamp stays lit; worn pads often squeal',
  20449: 'measure the tread across the central three quarters of every tyre (1.6 mm is the legal minimum) and look for cuts, bulges and exposed cords on both sidewalls',
  20147: 'top up the screen wash, replace smeared wiper blades and check that no chip in the driver\'s line of sight is larger than 10 mm',
  20310: 'look for rust holes near suspension and seat belt mountings, a split rubber boot on a driveshaft joint, and loose panels or bumpers',
  20385: 'deal with a lit engine management lamp before the test and look for oil or fuel leaks under the car; a blowing exhaust is also a failure',
  20106: 'feel for free play in the steering wheel and check that the power steering warning lamp goes out once the engine runs',
  20366: 'pull every seat belt out to its full length, check the buckles latch and that the airbag warning lamp goes out',
  20448: 'check that no wheel nut is missing and that the wheels are not visibly damaged',
  20000: 'make sure the number plates are clean, legible, correctly spaced and in a legal font, and that the VIN is readable',
};

/** DVSA defect group names (quarterly tables) → group id of the anonymised data. */
export const GROUP_ID: Record<string, number> = { 'Lamps, reflectors and electrical equipment': 20158, Suspension: 20218, Tyres: 20449, Brakes: 20003, Visibility: 20147, 'Body, chassis, structure': 20310, 'Noise, emissions and leaks': 20385, Steering: 20106, 'Seat belts and supplementary restraint systems': 20366, 'Road Wheels': 20448, 'Identification of the vehicle': 20000 };
