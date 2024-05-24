export const Tempos: string[] = ['3 0 2', '2 2 2', '4 1 1', '5 3 1', '1 0 1', '3 2 1', '2 1 1'];

interface Scheme {
    repRanges: [number, number];
    ratio: [number, number];
    rest: [number, number];
}

interface Schemes {
    [key: string]: Scheme;
}

export const SCHEMES: Schemes = {
    strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60]
    },
    growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60]
    },
    cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45]
    }
};


export interface Workout {
    [key: string]: string[];
}

export interface Workouts {
    individual: string[];
    bro_split: {
        push: string[];
        pull: string[];
        legs: string[];
    };
    bodybuilder_split: {
        chest: string[];
        back: string[];
        shoulders: string[];
        legs: string[];
        arms: string[];
        abs: string[];
    };
    upper_lower: {
        upper: string[];
        lower: string[];
    };
}

export const WORKOUTS: Workouts = {
    individual: ['biceps', 'triceps', 'chest', 'back', 'shoulders', 'quads', 'hamstrings', 'glutes', 'calves', 'abs'],
    bro_split: {
        push: ['triceps', 'chest', 'shoulders'],
        pull: ['back', 'shoulders', 'biceps'],
        legs: ['glutes', 'calves', 'hamstrings', 'quads']
    },
    bodybuilder_split: {
        chest: ['chest'],
        back: ['back'],
        shoulders: ['shoulders'],
        legs: ['glutes', 'quads', 'hamstrings', 'calves'],
        arms: ['biceps', 'triceps'],
        abs: ['abs']
    },
    upper_lower: {
        upper: ['triceps', 'biceps', 'shoulders', 'chest', 'back'],
        lower: ['quads', 'calves', 'hamstrings', 'glutes']
    }
};

interface Exercise {
    type: 'compound' | 'accessory';
    meta: {
        environment: 'gym' | 'gymhome';
        level: number[];
        equipment: string[];
    };
    variants: {
        [key: string]: string;
    };
    unit: 'reps' | 'duration';
    muscles: string[];
    description: string;
    substitutes: string[];
}

export const EXERCISES: { [key: string]: Exercise } = {
    barbell_bench_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            incline: 'With a bench inclined between 30 and 45 degrees, hold the bar directly above your chest.',
            flat: 'Perform this exercise on a horizontal bench.',
            decline: 'Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.',
            underhand: 'Lying on a flat bench, grab the bar with a reversed underhand grip, so that you are now holding the barbell thumbs pointing outwards. Be sure to reduce the weight when performing this variation of the exercise.'
        },
        unit: 'reps', //vs duration
        muscles: ['chest'],
        description: 'Ensure your scapula are retracted when performing the bench press, arms 2 palm widths wider than shoulder width. Lower the bar with your elbows flared at a 45 degree angle from your torso, touching the bar down to your chest at your nipple line.',
        substitutes: ['pushups', 'dumbbell bench press', 'floor press']
        //have general description first and specific one second
    },    
    cable_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'To target your upper chest, ensure the cable fixing is low, close to the ground. Your hands will move from low at your sides, to high, up infront of your face.',
            horizontal: 'Ensure the cabling fixing is at approximately chest height while performing this exercise.',
            decline: 'Set the cable fixing to the highest setting, so your hands move from high to low (as they come together infront of you) throughout the motion.'
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'This exercise can be performed from high to low, or low to high. Using the handles and with your arms mostly straight, bring the two handles together in front of you, and then slowly release backwards.',
        substitutes: ['Inclined dumbbell fly']
    },
    pushup: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'To perform the inline pushup, ensure your feet are atop of a slightly elevated surface, while your hands are on the ground.',
            military: 'Ensure your hands are in the same vertical plane as your chest and shoulders',
            decline: 'To perform a decline pushup, place your hands slightly further underneath you, so that you are leaning over your hands and they are closer towards the line of your waist, that your shoulders.'
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'In a plank position, with hands slightly further than shoulder width apart (and thumbs around nipple height), slowly lower your chest to the ground, keeping elbows flared to a 45 degree angle. Then press back up.',
        substitutes: ['pushups', 'dumbbell bench press', 'floor press']
    },
    dips: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['chest', 'triceps'],
        description: 'When in the dip position, ensure you are leaning forward over your hands and slowly lower your body until your elbows are parallel with the ground. Then press back up. Keep your elbow flare to a maximum of 45 degrees.',
        substitutes: ['Chair dip'],
        variants: {}
    },  
    dumbbell_bench_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        variants: {
            incline: 'Perform this exercise on a bench inclined to 30 degrees.',
            horizontal: 'Perform this exercise on a flat bench.',
            decline: 'Perform this exercise on a bench declined by around 15 degrees, with your head resting at the lower end.',
            neutral_grip_incline: 'Perform this exercise on a bench inclined to 30 degrees. Align the dumbbells so that they are parallel to one another, your thumbs able to point along the length of your body.',
            neutral_grip_horizontal: 'Perform this exercise on a flat bench. Align the dumbbells so that they are parallel to one another, your thumbs able to point along the length of your body.',
            neutral_grip_decline: 'Perform this exercise on a bench declined by around 15 degrees, with your head resting at the lower end. Align the dumbbells so that they are parallel to one another, your thumbs able to point along the length of your body.',
            rotating_incline: 'Perform this exercise on a bench inclined to 30 degrees. Begin the movement with the dumbbells up above your chest, thumbs pointing towards eachother, and as you lower them either side of your chest, rotate the dumbbells so that your thumbs rotate to point up your body in the direction of your head, making the dumbbells parallel to each other. As you press back up, rotate them back to the original position.',
            rotating_horizontal: 'Perform this exercise on a flat bench. Begin the movement with the dumbbells up above your chest, thumbs pointing towards eachother, and as you lower them either side of your chest, rotate the dumbbells so that your thumbs rotate to point up your body in the direction of your head, making the dumbbells parallel to each other. As you press back up, rotate them back to the original position.',
            rotating_decline: 'Perform this exercise on a bench declined by around 15 degrees, with your head resting at the lower end. Begin the movement with the dumbbells up above your chest, thumbs pointing towards eachother, and as you lower them either side of your chest, rotate the dumbbells so that your thumbs rotate to point up your body in the direction of your head, making the dumbbells parallel to each other. As you press back up, rotate them back to the original position.',
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'With your scapula retracted, hold the dumbbells directly above your chest with your hands slightly wider than shoulder width apart. Lower the dumbbells, keeping elbows to a maximum 45 degree flare, until the your thumbs can touch your nipples/or are at the same height as your nipples, keeping your elbows flared at 45 degrees from your torso. Then press back up.',
        substitutes: ['pushup', 'bench press']
    },  
    chest_press: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            high: 'Place the seat height so that your hands move in the same horizontal plane as your mouth/chin.',
            standard: 'Place the seat height so that your hands move in the same horizontal plane as your nipple height',
            decline: 'Place the seat height as high as possible so that the hand holds are below nipple height while sitting.',
            unilateral: 'Adjust the seat so the handles are approximately mid-chest level. Turn your torso 30 to 45 degrees towards the side you are about to press with. Press the handle across your body. Repeat on both sides.'
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'Begin with your chest puffed and your scapula down and retracted. Press the handles out until your arms are straight. Then slow release backwards.',
        substitutes: ['bench press', 'pushup']
    }, 
    smith_machine_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'With a bench inclined between 30 and 45 degrees, hold the bar directly above your chest.',
            flat: 'Perform this exercise on a horizontal bench.',
            decline: 'Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.',
            underhand: 'Lying on a flat bench, grab the bar with a reversed underhand grip, so that you are now holding the barbell thumbs pointing outwards. Be sure to reduce the weight when performing this variation of the exercise.'
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'Lying under a smith machine, ensure that the bar is aligned with your nipple height when it contacts your body. Keep elbows flared to a maximum of 45 degrees from your torso, hands slightly wider than shoulder width.',
        substitutes: ['bench press', 'pushup', 'dumbbell press']
    }, 
    unilateral_cable_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'To target your upper chest, ensure the cable fixing is low, close to the ground. Your hand will move from low at your side, to high, up infront of your face. Use an underhand grip for this movement.',
            horizontal: 'Ensure the cabling fixing is at approximately chest height while performing this exercise. Hold the cable in a neutral or overhand grip.',
            decline: 'Set the cable fixing to the highest setting, so your hand moves from high to low throughout the motion.'
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'Align your body at a 30 to 45 degree plane to the cable. Press the cable handle across your body until your elbow is straight and slowly release backwards. Ensure elbows are tucked during the exercise.',
        substitutes: ['unilateral chest press']
    },
    cable_crossover_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'To target your upper chest, ensure the cable fixing is low, close to the ground. Your hands will move from low at your sides, to high, up infront of your face.',
            horizontal: 'Ensure the cabling fixing is at approximately chest height while performing this exercise.',
            decline: 'Set the cable fixing to the highest setting, so your hands move from high to low (as they come together infront of you) throughout the motion.'
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'As if you were doing a pushup or bench press, press the handles together and then crossed over in front of you, alternating the crossover of your hands with each rep.',
        substitutes: ['cable fly', 'unilateral chest press']
    }, 
    dumbbell_chest_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        variants: {
            incline: 'With a bench inclined between 30 and 45 degrees, hold the dumbbells directly above your chest.',
            flat: 'Perform this exercise on a horizontal bench.',
            decline: 'Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.',
        },
        unit: 'reps', //vs duration    
        muscles: ['chest'],
        description: 'Holding a dumbbell in each hand directly above your chest, slowly lower the dumbbells to either side of your body while keeping your arms mostly straight, palms to the ceiling. Ensure the weights do not drop lowering than the height of your body.',
        substitutes: ['cable fly']
    }, 
    dumbbell_pullover: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['chest', 'back'],
        description: 'Lying holding a single dumbbell as if it were a goblet directly above your chest, slowly track the dumbbell back over your head, keeping your elbows tucked. Track back as far as comfortable behind your head, and then return to the starting position.',
        substitutes: ['Inclined dumbbell fly'],
        variants: {}
    },
    pullup: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.'
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull your body up until your chin is above bar height. Then return to a dead hang. Use an assisted pullup machine if required.',
        substitutes: ['lat pulldown']
    },
    lat_pulldown: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.'
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and back, and then pull the bar down until it touches your chest. Then return to a dead hang position.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },   
    barbell_bentover_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.',
        substitutes: ['seated row', 'dumbbell row']
    },
    dumbbell_bentover_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Begin standing, with your hands either side of your body holding the dumbbells. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.',
        substitutes: ['seated row', 'dumbbell row']
    },
    pendlay_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbells']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Begin with the bar on the ground, with your hands slightly wider than shoulder width apart. Hold your core tight, and pull your elbows back behind you until the bar touches your mid-chest. Slowly release back down to the ground and then repeat.',
        substitutes: ['seated row', 'barbell row']
    },
    bodyweight_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Find a bar or table at approximately chest to weight height, and hang underneath it with your legs extending out underneath the support. Row your chest to the bar, and slowly lower yourself back down. It\'s preferable that your body remain rigid and straight during the execution of the exercise.',
        substitutes: ['seated row', 'barbell row']
    },
    tbar_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'With the bar between your legs, your legs slightly bent, and with your torso hinged forward at the hips by approximately 45 degrees, row your elbows backwards until the weights touch your chest. Sit your bum back a bit to counter-balance the weight during this exercise.',
        substitutes: ['seated row', 'dumbbell row'],
        variants: {}
    },
    seated_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards the ceiling.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'With your back vertical, row your elbows back and imagine pulling your hands to your hips on either side of your body. Ensure to minimise torso and hip hinging during the movement. Row low to grow.',
        substitutes: ['barbell row', 'dumbbell row']
    },
    unilateral_seated_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing the ceiling.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing towards your body.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'With the handle attachment, row your elbow back and pull your hand and the handle to your hip, and then release forwards.',
        substitutes: ['seated row', 'dumbbell row']
    },
    cable_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards the ceiling.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'With the cable at any height, bend your knees and lean back against the weights. Maintain your body in a stationary position, and row your elbows back, keeping your forearms neutral to the movement. Hold your core strong and tight.',
        substitutes: ['seated row', 'tbar row']
    },
    unilaterial_dumbbell_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Leaning forward at a 45 degree angle, with your weight supported through one arm pressing on a study surface, hang the dumbbell from your other arm. Ensure the leg on the same side as your supporting arm is forward. Row your elbow back and your hand to your hip. Repeat on both sides.',
        substitutes: ['unilateral seated row', 'dumbbell row'],
        variants: {}
    },
    chest_supported_dumbbell_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'With your chest supported on a bench angled to a 30 to 45 degree incline, hand your arms either side with dumbbells in each. Row your elbows back with your hands on a trajectory towards your lower waist. Slowly release the weights back forward.',
        substitutes: ['seated row', 'barbell row'],
        variants: {}
    },
    machine_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing the ceiling.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing towards your body.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Adjust the seat height so your hands retract back to a lower torso height. Row your elbows back.',
        substitutes: ['seated row', 'dumbbell row']
    },
    machine_lat_pulldown: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.'
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Ensure you look at the ceiling while performing this exercise. Begin by retracting your scapula down and back, and then pull the machine bar down until your thumbs can touch your chest.',
        substitutes: ['lat pulldown', 'pullup']
    },
    smith_machine_row: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards forwards.',
            overhand: 'Perform this movement with a pronated grip, palms facing backwards.',
        },
        unit: 'reps', //vs duration    
        muscles: ['back'],
        description: 'Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.',
        substitutes: ['seated row', 'dumbbell row']
    },
    seated_dumbbell_overhead_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'With dumbbells in each hand, begin with the weights in-line with your ears and press them directly up above your head. Lower down until until your thumbs can touch your ears. Puff your chest out during this exercise.',
        substitutes: ['barbell overhead press', 'arnold press'],
        variants: {}
    },
    barbell_overhead_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'Standing with the bar starting at chin height and hands slightly wider than shoulder width, press the bar up and as it moves above head height, press your head forward between your arms. Squeeze your bum throughout the duration of the exercise.',
        substitutes: ['barbell overhead press', 'arnold press'],
        variants: {}
    },
    dumbbell_lateral_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'With dumbbells in each hand, pretend your a bird trying to flap your arms, and raise the weights up either side of your body. Ensure your elbows are always at a higher height than the weights and your wrists. Slowly lower down to each side.',
        substitutes: ['unilateral cable raise', 'face pulls'],
        variants: {}
    },
    dumbbell_front_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'With dumbbells in each hand down by your side, one at a time, raise the dumbbell out infront of you until it is at eye height, keeping your arm straight. Then slowly lower back down and repeat on the other side.',
        substitutes: ['unilateral cable raise', 'face pulls', 'cable_rope_front_raise'],
        variants: {}
    },
    cable_rope_front_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'With a rope handle in each hand (the cable pinned as low as possible and the cable itself, between your legs), raise the rope handles out infront of you until it is at eye height, keeping your arms straight. Then slowly lower back down.',
        substitutes: ['dumbbell front raise', 'face pulls'],
        variants: {}
    },
    unilateral_cable_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'With the cable on the lowest adjustment, hold the vertical bar with one hand and lean out from the cable machine by approximately 30 degrees. Hold the handle in the other hand, and raise the handle (leading with your elbow) up to shoulder height.',
        substitutes: ['dumbbell lateral raise', 'face pulls'],
        variants: {}
    },
    cable_rope_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'Using the rope cable attachment, adjust the cable height so the pulley is just above head height. Hold the handles with your thumbs at the end of the rope, pointing towards you. Pull the rope towards your forehead, with your hands approximately ear height and your thumbs pointing behind you.',
        substitutes: ['unilateral cable raise', 'cable push aparts'],
        variants: {}
    },
    cable_push_aparts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'For this exercise, grip the carribena/handles so that your pinky fingers are facing backwards. Then imagine you\'re walking through a forest full of vines and spread those bad boys apart. The cable should be pinned just above head height.',
        substitutes: ['unilateral cable raise', 'cable rope face pulls'],
        variants: {}
    }, 
    arnold_dumbbell_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['shoulders'],
        description: 'Seated on a bench with a back rest, hold the dumbbells in-front of you at eye height, palms facing your face. Keeping the dumbbells at their current height, open your shoulders and move your elbows to either side until the dumbbells are next to your ears, your palms facing forwards, and then press them up overhead.',
        substitutes: ['barbell overhead press', 'dumbbell overhead press'],
        variants: {}
    }, 
    back_squats: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['quads'],
        description: 'Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Rest the bar on the backs of your shoulders, behind your head.',
        substitutes: ['front squats', 'legpress'],
        variants: {}
    }, 
    front_squats: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['quads'],
        description: 'Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Hold the bar on your shoulders, crossing your arms in-front of you (elbows above the bar).',
        substitutes: ['back squats', 'legpress'],
        variants: {}
    },
    goblet_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['quads'],
        description: 'Elevate the heels of your feet on a plate approximate 2in or 5cm above thick. Keep your feet slightly narrower than shoulder width, and holding the dumbbell like a goblet at shoulder height, squat down, keeping your back as erect as possible.',
        substitutes: ['front squats', 'legpress'],
        variants: {}
    },
    box_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['quads'],
        description: 'With a barbell on your shoulders, bodyweight, or holding a dumbbell, situate yourself standing infront of, and facing away from, a box or chair or simular elevated surface. Position your feet shoulder width apart, and slow squat down, as if sitting back to sit down on the chair. Only lightly let your bum touch the chair, before standing back up.',
        substitutes: ['front squats', 'legpress'],
        variants: {}
    },
    bulgarian_split_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['quads', 'glutes'],
        description: 'Body weight or with dumbbells in each hand, lunge forward, elevating your rear leg up approximately 20 to 30cm, 1ft, above the ground. Keep your weight over your front leg, and lunge your body down until your front thigh is parallel with the ground.',
        substitutes: ['lunges', 'legpress'],
        variants: {}
    },
    lunges: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['quads', 'glutes'],
        description: 'Continuously lunge forward, slowly dropping your rear knee to touch the ground with each subsequent lunge. Ensure your body weight stays predominantly over your front leg.',
        substitutes: ['front squats', 'bulgarian split squats'],
        variants: {}
    },
    legpress: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            wide_stance: 'Place your feet a fair bit wider than shoulder width apart and vertically/centrally on the face of feet placement area.',
            neutral_stance: 'Place your feet shoulder width apart and vertically/centrally on the face of feet placement area.',
            narrow_stance: 'Place your feet 10cm/3in apart and vertically/centrally on the face of feet placement area.'
        },
        unit: 'reps', //vs duration    
        muscles: ['quads'],
        description: 'Slowly lower the weight down until your knees are at a 90 degree angle. Then push the weight back up, ensuring not to lock-out your legs at the top.',
        substitutes: ['front squats', 'back squats']
    },
    quad_extension: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['quads'],
        description: 'On a quad extension machine, straighten your legs against the resistance of the machine. Face your toes in different directions to preferencially engage different parts of your quad muscles.',
        substitutes: ['goblet squats', 'legpress'],
        variants: {}
    },
    step_ups: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['quads', 'glutes'],
        description: 'Without jumping, step up onto an evelated surface. They key is to slowly lower yourself back down on one leg without falling.',
        substitutes: ['lunges', 'front squats'],
        variants: {}
    }, 
    romanian_deadlifts: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            wide_stance: 'Place your feet one and half times as wide as shoulder width.',
            neutral_stance: 'Place your feet shoulderwidth distance apart.',
            narrow_stance: 'Place your feet right besides eachother so that they are touching.'
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings'],
        description: 'Stand holding a bar or dumbbells hanging at your waist, hands shoulder width apart. With a slight bend in your knees, you want to hinge at your hips, slightly sitting back whilst tilting your torso forward. Keeping your back straight, run the barbell/dumbbells back down the length of your legs (as if touching).',
        substitutes: ['dumbbell rdls']
    },
    hamstring_back_extensions: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings', 'glutes'],
        description: 'On the back extension machine, lock your feet in place and while lowering your torso down over the front of the machine, resist the motion by trying to curl your heels backwards to your bum, against the foot stop.',
        substitutes: ['dumbbell rdls', 'seated hamstring curl'],
        variants: {}
    },
    unilateral_dumbbell_rdls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings', 'glutes'],
        description: 'Placing on foot forward of the other, lean your weight onto the front foot and track the dumbbells up and down said forward leg. Ensure you are maintain a straight back while performing this exercise.',
        substitutes: ['barbell rdls', 'hamstring back extensions'],
        variants: {}
    },
    seated_hamstring_curl: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings'],
        description: 'With you knees locked into place, try to pull your heels back as far as you can towards your bum.',
        substitutes: ['dumbbell rdls', 'seated hamstring curl'],
        variants: {}
    },
    tbar_rdls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings'],
        description: 'With the bar between your legs, and your feet place slightly in-front of your center of gravity, slowly sit back keep your legs mostly straight, until the weight touches the ground. Maintain a straight back during the execution of this exercise.',
        substitutes: ['dumbbell rdls', 'unilateral dumbbell rdls'],
        variants: {}
    },
    lying_machine_hamstring_curls: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings'],
        description: 'Lying on the machine, curl your heels back to your bum, and then slowly release.',
        substitutes: ['tbar rdls', 'seated hamstring curl'],
        variants: {}
    },
    lying_dumbbell_hamstring_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['hamstrings'],
        description: 'Lying face down on the ground, hold a dumbbell up in the air between your feet, knees bent. Slowly lower the dumbbell down towards the ground, and after touching the ground, curl the dumbbell back up, heels pulling back towards up bum and up towards the ceiling.',
        substitutes: ['tbar rdls', 'seated hamstring curl'],
        variants: {}
    }, 
    cable_kickbacks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['glutes'],
        description: 'Facing the cable machine, place the cable machine at the lowest placement, and with the handle wrapped around your ankle, kick your heel backwards as far as you can.',
        substitutes: ['cable leg adduction'],
        variants: {}
    },
    hip_thrusts: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['glutes'],
        description: 'With your back rest on an elevated surface, or on the ground, and your knees bent to appoximately 90 degrees, thrust your hips forward and tuck your chin. Without moving your heels, try to pull them back towards your bum throughout the motion.',
        substitutes: ['unilateral hip thrusts'],
        variants: {}
    }, 
    deadlift: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['back', 'hamstrings'],
        description: 'Standing with the bar over your feet, grip it overhand shoulder width apart, while ensuring you back remains straight throughout the entire exercise. Begin the lift by straightening your legs, dragging the bar up your shins, and as soon as the bar is above knee height, straighten your torso and lean back to heavy the bar off the ground. In reverse, you start standing tall, and with a micro bend in your knees, you hinge at the hips (maintaining a straight) back until the bar is over you knees, at which point your hips stop hinging and your knees start bending until the bar touches the ground. This exercise may also be done with a sumo stance.',
        substitutes: ['romanian deadlifts'],
        variants: {}
    }, 
    fire_hydrants: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['glutes'],
        description: 'As if your weren\'t already a dog, hop down on all fours, with your hands underneath your pectorals. Now let your natural instincts take control, raising one leg out to the side as if to take care of business on the neighborhood firehydrant. Keep all other three points of contact station throughout this movement.',
        substitutes: ['froggy pumps'],
        variants: {}
    }, 
    seated_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Face your toes 30 degrees inwards from forwards while completing this movement.',
            standard: 'Ensure your feet are directioned forward and shoulder width apart.',
            toes_out: 'Face your toes 30 degrees outwards from forwards while completing this movement.'
        },
        unit: 'reps', //vs duration    
        muscles: ['calves'],
        description: 'Seated with a restaint above your knees, you want to plantar flex your toes, pushing your knees away from the ground.',
        substitutes: ['standing calf raises']
    },
    standing_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Face your toes 30 degrees inwards from forwards while completing this movement.',
            standard: 'Ensure your feet are directioned forward and shoulder width apart.',
            toes_out: 'Face your toes 30 degrees outwards from forwards while completing this movement.'
        },
        unit: 'reps', //vs duration    
        muscles: ['calves'],
        description: 'Standing with weight loaded either in your hands or on your shoulders, you want to plantar flex your toes.',
        substitutes: ['seated calf raises']
    }, 
    dumbbell_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'bands']
        },
        variants: {
            hammer: 'Perform this exercise with a neutral grip, palms facing your body throughout the movement.',
            supinated: 'Maintain a supinated grip on the dumbbell throughout the motion - palms facing forwards through to upwards.',
            alternating: 'Begin the curl with dumbbells in a neutral grip, finishing with you palm supinated and facing the ceiling.'
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'Perform this exercise seated or standing with dumbbells in either hand by your sides. You can perform both hands at the same time or alternating. Curl each dumbbell upwards from your side until your elbows are fully bent, and the dumbbell is raised. Minimise swinging or shoulder usage throughout the movement.',
        substitutes: ['hammer curls']
    }, 
    rope_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'Using the rope cable attachment at the lowest elevation, hold the ends of the rope attachment with a neutral grip and curl them inwards and upwards',
        substitutes: ['dumbbell hammer curls'],
        variants: {}
    },
    spider_curl: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        variants: {
            hammer: 'Perform this exercise with a neutral grip, palms facing your body throughout the movement.',
            supinated: 'Maintain a supinated grip on the dumbbell throughout the motion - palms facing forwards through to upwards.',
            alternating: 'Begin the curl with dumbbells in a neutral grip, finishing with you palm supinated and facing the ceiling.'
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'With you chest support on an inclined bench and with dumbbells in either hand, perform an alternating curl with a supinated wrist at the peak of the motion. Curl the dumbbells slightly inwards and under the bench.',
        substitutes: ['barbell curls']
    },
    barbell_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            wide_grip: 'Perform this exercise with hands space one and a half times shoulder width apart.',
            narrow_grip: 'Perform this exercise with hands only a palms width apart.',
            standard: 'Perform this exercise with hands spaced shoulder width apart.'
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'Hold the barbell with a supinated grip and reduce shoulder engagement and swinging throughout the curl.',
        substitutes: ['dumbbell curls']
    },
    drag_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell', 'dumbbells']
        },
        variants: {
            dumbbell: 'Perform this exercise with dumbbells.',
            barbell: 'Perform this exercise with a barbell, and space your hands slightly wider than shoulder width apart.',
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'Holding the weight with a supinated grip, drag the weights up an imaginary line in the same plane as your torso. It is a similar movement to a row with the major difference that you are standing mostly upright, only very slightly bent fowards at the hips.',
        substitutes: ['dumbbell curls']
    }, 
    preacher_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'barbell']
        },
        variants: {
            underhand: 'Hold a barbell or easy-curl bar with an underhand grip, palms facing the ceiling.',
            neutral_grip: 'Perform this exercise with dumbbells in each hand, with a neutral grip, palms facing the horizontal.',
            overhand: 'Hold a barbell or easy-curl bar with an overhand grip, palms facing the ground.'
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'Perform this curl with your elbows supported on a surface angled 45 degrees down and away from you, or on the preacher curl machine. It is good practice to micro-pause at the bottom of the eccentric portion of the movement.',
        substitutes: ['barbell curl']
    },
    cable_bar_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['biceps'],
        description: 'Using the bar cable attachment at the lowest elevation, hold each end of the bar with a supinated grip (palms to the ceiling) and curl the weight up, minimizing shoulder engagement and swinging.',
        substitutes: ['dumbbell hammer curls'],
        variants: {}
    },
    tricep_rope_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'Adjust the cable to maximum elevation. Keeping your elbows just in-front of your sides, straighten your arms, pushing the weight down. Try to keep you elbows stationary in space throughout the motion. At the bottom of the pushing movement, twist the ropes handles down so that your palms face downwards as opposed to eachother.',
        substitutes: ['bar cable pushdown'],
        variants: {}
    },
    tricep_bar_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'Adjust the cable to maximum elevation. Keeping your elbows just in-front of your sides, straighten your arms, pushing the weight down. Try to keep you elbows stationary in space throughout the motion.',
        substitutes: ['rope cable pushdown'],
        variants: {}
    }, 
    skull_crushers: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'Lie either on a flat or on a slighty inclined surface with a barbell directly above your skull. Starting with your arms straight, lower the weight down either to your forehead, or down behind your head and then press it back up. Vary your grip width to whatever is most comfortable for you and keep your elbows tucked throughout the movement.',
        substitutes: ['face press'],
        variants: {}
    },
    face_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'In an incline plank position with your hands pressing on something mid-chest height (hands closer than shoulder width), keep your elbows tucked and slowly lower your body/face towards the surface. Then press back up. Your elbows should track directly downwards, not flaring to either side.',
        substitutes: ['overhead_skull_crushers'],
        variants: {}
    },
    overhead_skull_crusher: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell', 'dumbbell', 'bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'Performed with either a barbell, dumbbell or cable attachment, start with the weight down behind your head while sitting vertically (elbows overhead). Straighten your arms overhead, extending the weight up above your head.',
        substitutes: ['rope cable pushdown'],
        variants: {}
    },
    tricep_dip: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'Perform with a bench behind you and your legs out in-front of you, your body supported by your hands on the bench. Slowly lower your bum down in-front of the bench, elbows tucked and tracking back behind you, and then press back up.',
        substitutes: ['rope cable pushdown'],
        variants: {}
    },
    dumbbell_skull_crushers: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['triceps'],
        description: 'Lie either flat or on a slight incline with heavy dumbbells in each hand directly above your skull. Starting with your arms straight, lower the weight down either either side of your forehead and then press it back up. Begin with palms facing the ceiling to neutral grip besides your ears.',
        substitutes: ['face press'],
        variants: {}
    }, 
    crunches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['abs'],
        description: 'Lying flat on the ground with your knees bent at right angles, crunch your abs and imagine you\'re trying to squash a bug under your lower back deep into the ground.',
        substitutes: ['dead_bugs', 'bicycle_crunches'],
        variants: {}
    },  
    plank: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['abs'],
        description: 'Be the plank. Make sure your hips are tucked, your bum squeeze, your core tight, flat as a pancake.',
        substitutes: ['banana_hold, side_plank'],
        variants: {}
    } 
}
