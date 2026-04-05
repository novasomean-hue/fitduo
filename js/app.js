// ===== STORAGE =====
const Storage = {
  PREFIX: 'fitduo-',
  get(key) {
    try { const r = localStorage.getItem(this.PREFIX + key); return r ? JSON.parse(r) : null; } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(this.PREFIX + key, JSON.stringify(value)); }
    catch (e) { if (e.name === 'QuotaExceededError') alert('Storage full. Try clearing old progress photos.'); }
  },
  remove(key) { localStorage.removeItem(this.PREFIX + key); },
  getP(profile, key) { return this.get(profile + '-' + key); },
  setP(profile, key, value) { this.set(profile + '-' + key, value); }
};

// ===== DATA =====
const NOVA_DATA = {
  profile: { name: "Nova", program: "Lean Muscle Blueprint", subtitle: "5-Day Push / Pull / Legs / Upper / Lower Split" },
  stats: { days: 5, duration: "60-75", weeks: 12, calories: 2800, protein: 200, carbs: 310, fat: 85 },
  phases: [
    { name: "Phase 1", weeks: "Weeks 1-4", description: "Focus on form and mind-muscle connection. Moderate weight." },
    { name: "Phase 2", weeks: "Weeks 5-8", description: "Progressive overload — add weight or reps every session." },
    { name: "Phase 3", weeks: "Weeks 9-12", description: "Intensity techniques — drop sets, supersets, rest-pause on final sets." }
  ],
  days: [
    {
      id: "nova-day1", name: "Day 1 — Push", subtitle: "Chest / Shoulders / Triceps", tag: "Push", tagClass: "tag-push",
      sections: [
        { label: "Compound", exercises: [
          { name: "Flat Barbell Bench Press", sets: "4 x 6-8", rest: "90s", videoId: "rT7DgCr-3pg" },
          { name: "Incline Dumbbell Press", sets: "3 x 8-10", rest: "75s", videoId: "8iPEnn-ltC8" }
        ]},
        { label: "Isolation", exercises: [
          { name: "Cable Flyes (low to high)", sets: "3 x 12-15", rest: "60s", videoId: "Iwe6AmxVf7o" },
          { name: "Seated DB Shoulder Press", sets: "3 x 8-10", rest: "75s", videoId: "qEwKCR5JCog" },
          { name: "Lateral Raises", sets: "4 x 12-15", rest: "45s", videoId: "3VcKaXpzqRo" },
          { name: "Overhead Tricep Extension (cable)", sets: "3 x 10-12", rest: "60s", videoId: "kiuVA0gs3EI" },
          { name: "Tricep Pushdowns", sets: "3 x 12-15", rest: "45s", videoId: "2-LAMcpzODU" }
        ]}
      ]
    },
    {
      id: "nova-day2", name: "Day 2 — Pull", subtitle: "Back / Biceps / Rear Delts", tag: "Pull", tagClass: "tag-pull",
      sections: [
        { label: "Compound", exercises: [
          { name: "Barbell Rows", sets: "4 x 6-8", rest: "90s", videoId: "FWJR5Ve8bnQ" },
          { name: "Weighted Pull-Ups (or Lat Pulldown)", sets: "4 x 8-10", rest: "75s", videoId: "eGo4IYlbE5g" }
        ]},
        { label: "Isolation", exercises: [
          { name: "Seated Cable Row (close grip)", sets: "3 x 10-12", rest: "60s", videoId: "GZbfZ033f74" },
          { name: "Face Pulls", sets: "3 x 15-20", rest: "45s", videoId: "rep-qVOkqgk" },
          { name: "Rear Delt Flyes", sets: "3 x 12-15", rest: "45s", videoId: "EA7u4Q_8HQ0" },
          { name: "Barbell Curls", sets: "3 x 8-10", rest: "60s", videoId: "kwG2ipFRgFo" },
          { name: "Incline Dumbbell Curls", sets: "3 x 10-12", rest: "45s", videoId: "soxrZlIl35U" }
        ]}
      ]
    },
    {
      id: "nova-day3", name: "Day 3 — Legs", subtitle: "Quads / Hams / Glutes / Calves", tag: "Legs", tagClass: "tag-legs",
      sections: [
        { label: "Compound", exercises: [
          { name: "Barbell Back Squat", sets: "4 x 6-8", rest: "120s", videoId: "ultWZbUMPL8" },
          { name: "Romanian Deadlift", sets: "3 x 8-10", rest: "90s", videoId: "7j-2w4-P14I" }
        ]},
        { label: "Isolation", exercises: [
          { name: "Leg Press", sets: "3 x 10-12", rest: "75s", videoId: "IZxyjW7MPJQ" },
          { name: "Leg Curl (lying or seated)", sets: "3 x 10-12", rest: "60s", videoId: "1Tq3QdYUuHs" },
          { name: "Leg Extensions", sets: "3 x 12-15", rest: "60s", videoId: "YyvSfVjQeL0" },
          { name: "Walking Lunges", sets: "3 x 12/leg", rest: "60s", videoId: "L8fvypPrzzs" },
          { name: "Standing Calf Raises", sets: "4 x 12-15", rest: "45s", videoId: "gwLzBJYoWlI" }
        ]}
      ]
    },
    {
      id: "nova-day4", name: "Day 4 — Upper Power", subtitle: "Chest / Back / Shoulders", tag: "Upper", tagClass: "tag-upper",
      sections: [
        { label: "Compound", exercises: [
          { name: "Incline Barbell Bench Press", sets: "4 x 6-8", rest: "90s", videoId: "SrqOu55lrYU" },
          { name: "Weighted Chin-Ups", sets: "4 x 6-8", rest: "90s", videoId: "Hdc7Mw6BIEE" }
        ]},
        { label: "Hypertrophy", exercises: [
          { name: "Dumbbell Chest Flyes", sets: "3 x 10-12", rest: "60s", videoId: "eozdVDA78K0" },
          { name: "T-Bar Row or Meadows Row", sets: "3 x 10-12", rest: "60s", videoId: "j3Igk5nyZE4" },
          { name: "Arnold Press", sets: "3 x 10-12", rest: "60s", videoId: "6Z15_WdXmVw" },
          { name: "Hammer Curls", sets: "3 x 10-12", rest: "45s", videoId: "zC3nLlEvin4" },
          { name: "Close-Grip Bench Press", sets: "3 x 8-10", rest: "60s", videoId: "nEF0bv2FW94" }
        ]}
      ]
    },
    {
      id: "nova-day5", name: "Day 5 — Lower Hypertrophy + Abs", subtitle: "Quads / Glutes / Core", tag: "Lower", tagClass: "tag-legs",
      sections: [
        { label: "Compound", exercises: [
          { name: "Front Squat or Goblet Squat", sets: "4 x 8-10", rest: "90s", videoId: "m4ytaCJZpl0" },
          { name: "Bulgarian Split Squats", sets: "3 x 10/leg", rest: "60s", videoId: "2C-uNgKwPLE" }
        ]},
        { label: "Isolation", exercises: [
          { name: "Hip Thrust", sets: "3 x 10-12", rest: "60s", videoId: "SEdqd1n0cvg" },
          { name: "Seated Calf Raises", sets: "4 x 15-20", rest: "45s", videoId: "JbyjNymZOt0" }
        ]},
        { label: "Core Circuit (3 rounds)", exercises: [
          { name: "Hanging Leg Raises", sets: "3 x 12-15", rest: "30s", videoId: "hdng3Nm1x_E" },
          { name: "Cable Woodchoppers", sets: "3 x 12/side", rest: "30s", videoId: "pAplQXk3dkU" },
          { name: "Ab Wheel Rollouts", sets: "3 x 10-12", rest: "30s", videoId: "rqiTPiqDGG0" },
          { name: "Dead Bug", sets: "3 x 10/side", rest: "30s", videoId: "4XLEnwUr1d8" }
        ]}
      ]
    },
    {
      id: "nova-day67", name: "Days 6 & 7 — Active Recovery", subtitle: "Rest & Recover", tag: "Rest", tagClass: "tag-rest",
      sections: [
        { label: "Recovery", exercises: [
          { name: "20-30 min light cardio (walk, cycle, swim)", sets: "Optional", rest: "—" },
          { name: "Foam rolling & stretching", sets: "15 min", rest: "—" },
          { name: "Sleep 7-9 hours — this is when you grow", sets: "Priority", rest: "—" }
        ]}
      ]
    }
  ],
  meals: [
    { time: "7:00 AM", number: 1, title: "Power Breakfast", items: ["4 whole eggs scrambled with spinach", "1 cup oats with 1 banana & 1 tbsp honey", "1 glass orange juice"], macros: { p: 35, c: 75, f: 22 } },
    { time: "10:00 AM", number: 2, title: "Mid-Morning Snack", items: ["Greek yogurt (200g) with mixed berries", "1 scoop whey protein mixed in", "Handful of almonds (~20g)"], macros: { p: 40, c: 25, f: 14 } },
    { time: "1:00 PM", number: 3, title: "Lunch — Lean Muscle Builder", items: ["200g chicken breast (grilled / pan-seared)", "1.5 cups white rice", "Roasted broccoli & bell peppers", "1 tbsp olive oil for cooking"], macros: { p: 50, c: 70, f: 16 } },
    { time: "4:00 PM", number: 4, title: "Pre-Workout Fuel", items: ["2 slices whole grain bread with 2 tbsp peanut butter", "1 banana", "Optional: black coffee or pre-workout"], macros: { p: 15, c: 55, f: 18 } },
    { time: "6:30 PM", number: 5, title: "Recovery Shake + Meal", items: ["1.5 scoops whey protein with water (immediately post)", "200g lean ground turkey or salmon", "1 large sweet potato", "Side salad with avocado"], macros: { p: 55, c: 60, f: 12 } },
    { time: "9:00 PM", number: 6, title: "Night Recovery", items: ["200g cottage cheese or casein shake", "1 tbsp natural peanut butter", "Small handful of walnuts"], macros: { p: 35, c: 10, f: 15 } }
  ],
  mealNote: "Adjust calories based on your weight trend — if gaining more than ~0.5 lb/week, reduce by 200 cal. If weight is flat, add 150-200 cal. These meals assume a ~180 lb male. Scale portions to your body weight.",
  tips: [
    { title: "Progressive Overload", text: "This is the #1 driver of muscle growth. Every week, aim to add either 1 more rep or 2.5-5 lbs to each lift. Track everything. If you hit the top of the rep range (e.g., 4x8), go up in weight next session.", type: "tip" },
    { title: "Getting Abs Like The Photo", text: "Abs are built in the gym but revealed in the kitchen. You need to get to roughly 10-12% body fat for visible abs. This program includes direct ab work, but the meal plan's calorie control is what will strip the fat. Don't rush — losing more than 1 lb/week means you're also losing muscle.", type: "tip" },
    { title: "Mind-Muscle Connection", text: "Don't just move weight from A to B. Squeeze the target muscle on every rep. Use a 2-second eccentric (lowering) on every isolation exercise. This one habit separates people who look like they lift from people who just lift heavy.", type: "tip" },
    { title: "Sleep = Gains", text: "Aim for 7-9 hours of quality sleep. Growth hormone peaks during deep sleep. If you're sleeping 5-6 hours, no program in the world will get you to that physique. This is non-negotiable.", type: "tip" },
    { title: "Water Intake", text: "Drink at least 3-4 liters per day. Dehydration kills performance and makes you look flat. Add electrolytes if you sweat heavily. A gallon jug is your new best friend.", type: "tip" },
    { title: "Supplements (Keep It Simple)", text: "The basics are all you need: Creatine monohydrate (5g daily, every day), whey protein (to hit daily targets), and a multivitamin. Everything else is optional. Don't waste money on fat burners or BCAAs.", type: "tip" },
    { title: "Realistic Timeline", text: "Expect noticeable changes in 12 weeks, significant transformation in 6-9 months, and approaching elite development in 2-3 years with consistency. Trust the process.", type: "tip" }
  ]
};

const CHARISMA_DATA = {
  profile: { name: "Charisma", program: "Sculpt & Burn", subtitle: "Lose belly fat · Build glutes & hips · Tone everywhere" },
  stats: { days: 5, duration: "50-65", weeks: 12, calories: 1750, protein: 130, carbs: 160, fat: 60 },
  phases: [
    { name: "Phase 1", weeks: "Weeks 1-4", description: "Build foundations — learn the lifts, establish mind-muscle connection with glutes." },
    { name: "Phase 2", weeks: "Weeks 5-8", description: "Progressive overload — increase weights on all compound lifts." },
    { name: "Phase 3", weeks: "Weeks 9-12", description: "Peak phase — higher volume, burnout sets, metabolic finishers." }
  ],
  goalNote: "The strategy: Heavy glute training 3x/week to build and shape the booty. Upper body toning to stay proportional. Strategic cardio to burn belly fat without burning off your curves. You cannot spot-reduce stomach fat — but you can build the muscles you want to keep while losing fat overall.",
  days: [
    {
      id: "char-day1", name: "Day 1 — Glutes & Hamstrings", subtitle: "Heavy Day", tag: "Glutes", tagClass: "tag-glutes",
      sections: [
        { label: "Activation (do first!)", exercises: [
          { name: "Banded Glute Bridge Hold", sets: "2 x 20s", rest: "—", videoId: "8bbE64NuDni" },
          { name: "Banded Clamshells", sets: "2 x 15/side", rest: "—", videoId: "cEhJMCxDGXE" }
        ]},
        { label: "Main Lifts", exercises: [
          { name: "Barbell Hip Thrust", sets: "4 x 8-10", rest: "90s", videoId: "SEdqd1n0cvg" },
          { name: "Romanian Deadlift", sets: "3 x 10-12", rest: "75s", videoId: "7j-2w4-P14I" },
          { name: "Bulgarian Split Squat", sets: "3 x 10/leg", rest: "60s", videoId: "2C-uNgKwPLE" }
        ]},
        { label: "Isolation", exercises: [
          { name: "Cable Kickbacks", sets: "3 x 12/leg", rest: "45s", videoId: "b_MHflCAliY" },
          { name: "Lying Leg Curl", sets: "3 x 12-15", rest: "45s", videoId: "1Tq3QdYUuHs" },
          { name: "Seated Abductor Machine", sets: "3 x 15-20", rest: "45s", videoId: "ipJBfOBIFP8" }
        ]}
      ],
      finisher: "15 min incline treadmill walk (10-12% incline, 3.5 mph) — burns calories while activating glutes."
    },
    {
      id: "char-day2", name: "Day 2 — Upper Body Tone", subtitle: "Push + Pull", tag: "Upper", tagClass: "tag-upper",
      sections: [
        { label: "Push", exercises: [
          { name: "Dumbbell Bench Press", sets: "3 x 10-12", rest: "60s", videoId: "VmB1G1K7v94" },
          { name: "Seated DB Shoulder Press", sets: "3 x 10-12", rest: "60s", videoId: "qEwKCR5JCog" },
          { name: "Lateral Raises", sets: "3 x 12-15", rest: "45s", videoId: "3VcKaXpzqRo" }
        ]},
        { label: "Pull", exercises: [
          { name: "Lat Pulldown", sets: "3 x 10-12", rest: "60s", videoId: "CAwf7n6Luuc" },
          { name: "Seated Cable Row", sets: "3 x 10-12", rest: "60s", videoId: "GZbfZ033f74" },
          { name: "Face Pulls", sets: "3 x 15", rest: "45s", videoId: "rep-qVOkqgk" }
        ]},
        { label: "Arms (Superset)", exercises: [
          { name: "Bicep Curls + Tricep Pushdowns", sets: "3 x 12 each", rest: "45s", videoId: "ykJmrZ5v0Oo" }
        ]}
      ],
      finisher: "10 min steady-state bike or stair climber at moderate effort."
    },
    {
      id: "char-day3", name: "Day 3 — Glutes & Quads", subtitle: "Sculpt Day", tag: "Glutes", tagClass: "tag-glutes",
      sections: [
        { label: "Activation", exercises: [
          { name: "Banded Monster Walks", sets: "2 x 20 steps", rest: "—", videoId: "jMaDhLQioW4" }
        ]},
        { label: "Main Lifts", exercises: [
          { name: "Goblet Squat (deep)", sets: "4 x 10-12", rest: "75s", videoId: "MeIiIdhvXT4" },
          { name: "Sumo Deadlift", sets: "3 x 10-12", rest: "75s", videoId: "aIlJsil0rME" },
          { name: "Walking Lunges (DB)", sets: "3 x 12/leg", rest: "60s", videoId: "L8fvypPrzzs" }
        ]},
        { label: "Isolation", exercises: [
          { name: "Leg Press (feet high & wide)", sets: "3 x 12-15", rest: "60s", videoId: "IZxyjW7MPJQ" },
          { name: "Cable Pull-Throughs", sets: "3 x 12-15", rest: "45s", videoId: "MBcVj-YnKUc" },
          { name: "Leg Extensions (light)", sets: "3 x 15", rest: "45s", videoId: "YyvSfVjQeL0" }
        ]}
      ],
      finisher: "15 min incline treadmill walk."
    },
    {
      id: "char-day4", name: "Day 4 — HIIT + Core Shred", subtitle: "Burn & Tone", tag: "HIIT", tagClass: "tag-hiit",
      sections: [
        { label: "HIIT Circuit (4 rounds, 40s work / 20s rest)", exercises: [
          { name: "Kettlebell Swings", sets: "40s on", rest: "20s off", videoId: "YSxHifyI6s8" },
          { name: "Jump Squats or Box Step-Ups", sets: "40s on", rest: "20s off", videoId: "A-cFYGvaYpM" },
          { name: "Battle Ropes or Mountain Climbers", sets: "40s on", rest: "20s off", videoId: "nmwgirgXLYM" },
          { name: "Dumbbell Thrusters", sets: "40s on", rest: "20s off", videoId: "M-DPHOMalkQ" },
          { name: "2 min rest between rounds", sets: "—", rest: "—" }
        ]},
        { label: "Core Circuit (3 rounds)", exercises: [
          { name: "Dead Bug", sets: "12/side", rest: "—", videoId: "4XLEnwUr1d8" },
          { name: "Pallof Press Hold", sets: "20s/side", rest: "—", videoId: "AH_QZLm_0-s" },
          { name: "Bicycle Crunches", sets: "20 reps", rest: "—", videoId: "9FGilxCbdz8" },
          { name: "Plank (front)", sets: "30-45s", rest: "—", videoId: "ASdvN_XEl_c" },
          { name: "Side Plank", sets: "20s/side", rest: "45s", videoId: "K2VljzCC16g" }
        ]}
      ],
      finisher: "The core work tightens and flattens the midsection. Combined with the calorie deficit, this is how stomach fat comes off."
    },
    {
      id: "char-day5", name: "Day 5 — Glute Burnout + Full Body", subtitle: "Finish Strong", tag: "Full", tagClass: "tag-full",
      sections: [
        { label: "Glute Focus", exercises: [
          { name: "Hip Thrust (single leg or banded)", sets: "3 x 12/leg", rest: "60s", videoId: "SEdqd1n0cvg" },
          { name: "Smith Machine Reverse Lunge", sets: "3 x 10/leg", rest: "60s", videoId: "Z2nXR_mOPCE" },
          { name: "Frog Pumps (banded)", sets: "2 x 25", rest: "45s", videoId: "94bBOKNcCbU" }
        ]},
        { label: "Upper Tone", exercises: [
          { name: "Push-Ups (or kneeling)", sets: "3 x AMRAP", rest: "60s", videoId: "IODxDxX7oi4" },
          { name: "DB Row (single arm)", sets: "3 x 10/arm", rest: "45s", videoId: "roCP6wCXPqo" },
          { name: "Lateral Raises", sets: "3 x 15", rest: "45s", videoId: "3VcKaXpzqRo" }
        ]},
        { label: "Core + Cardio Finisher", exercises: [
          { name: "Hanging Knee Raises (or lying)", sets: "3 x 12", rest: "30s", videoId: "hdng3Nm1x_E" },
          { name: "Russian Twists", sets: "3 x 20", rest: "30s", videoId: "wkD8rjkodUI" }
        ]}
      ],
      finisher: "20 min incline walk or stair climber at moderate pace."
    },
    {
      id: "char-day67", name: "Days 6 & 7 — Active Recovery", subtitle: "Rest & Restore", tag: "Rest", tagClass: "tag-rest",
      sections: [
        { label: "Recovery", exercises: [
          { name: "Light walk, yoga, or stretching (30 min)", sets: "Optional", rest: "—" },
          { name: "Foam roll glutes, quads & hamstrings", sets: "10 min", rest: "—" },
          { name: "Prioritize sleep — 7-9 hours minimum", sets: "Essential", rest: "—" }
        ]}
      ]
    }
  ],
  meals: [
    { time: "7:30 AM", number: 1, title: "High Protein Breakfast", items: ["3 egg whites + 1 whole egg scramble with spinach & tomato", "1 slice whole grain toast", "1/2 avocado", "Black coffee or green tea"], macros: { p: 28, c: 22, f: 15 } },
    { time: "10:30 AM", number: 2, title: "Mid-Morning Snack", items: ["Greek yogurt (150g, plain, non-fat)", "Handful of mixed berries", "1 tbsp chia seeds or flaxseeds"], macros: { p: 18, c: 18, f: 5 } },
    { time: "1:00 PM", number: 3, title: "Lean Lunch", items: ["150g grilled chicken breast or turkey", "1 cup brown rice or quinoa", "Large mixed green salad with cucumber & peppers", "1 tbsp olive oil + lemon dressing"], macros: { p: 40, c: 45, f: 14 } },
    { time: "4:00 PM", number: 4, title: "Pre-Workout Fuel", items: ["1 rice cake with 1 tbsp almond butter", "1 small banana", "Optional: green tea or black coffee"], macros: { p: 5, c: 35, f: 9 } },
    { time: "7:00 PM", number: 5, title: "Recovery Dinner", items: ["150g baked salmon or lean ground turkey", "1 medium sweet potato", "Steamed broccoli & asparagus", "Squeeze of lemon"], macros: { p: 38, c: 35, f: 14 } },
    { time: "9:00 PM", number: 6, title: "Evening Protein (Optional)", items: ["Protein shake (1 scoop whey or plant-based) with water", "OR 150g cottage cheese with cinnamon", "Small handful of almonds (~10)"], macros: { p: 28, c: 8, f: 7 } }
  ],
  mealNote: "A moderate deficit (300-500 cal below maintenance) burns fat while keeping enough protein to protect your glutes and muscle. You'll lose belly fat while your booty stays fed. Adjust if you're under 130 lbs (reduce to ~1,550) or over 170 lbs (increase to ~1,900).",
  tips: [
    { title: "Myth: You Can Spot-Reduce Belly Fat", text: "Doing 1,000 crunches won't burn belly fat. Fat loss happens systemically — your body decides where it comes off first. The solution is a calorie deficit + high protein + resistance training. Belly fat is typically the last to go, so patience and consistency are everything.", type: "myth" },
    { title: "Myth: Lifting Heavy Makes Women \"Bulky\"", text: "Women produce roughly 1/15th the testosterone of men. You will not accidentally get bulky. What heavy lifting DOES is shape your glutes, tighten your arms, and create the \"toned\" look. The women with the best curves lift heavy.", type: "myth" },
    { title: "Why 3 Glute Days?", text: "Training glutes 3x/week with enough volume and progressive overload signals your body to keep and grow those muscles even while in a calorie deficit. This is how you keep your curves while the midsection leans out.", type: "tip" },
    { title: "Progressive Overload Still Applies", text: "Even as a beginner in a deficit, you can and should get stronger. Add weight or reps to your hip thrusts, squats, and deadlifts every 1-2 weeks. If your hip thrust goes from 65 lbs to 155 lbs over 12 weeks, your glutes WILL be noticeably bigger and rounder.", type: "tip" },
    { title: "Incline Walking > Running", text: "Long-distance running can burn muscle along with fat. Incline treadmill walks (10-12% grade) burn nearly as many calories, activate the glutes, and preserve muscle. 3-4 sessions of 15-20 min per week is plenty.", type: "tip" },
    { title: "Protein Is Non-Negotiable", text: "Aim for 0.8-1g per pound of bodyweight daily. This protects your muscle in a deficit and gives your glutes the building blocks to grow. If you struggle to hit protein targets, add a shake or swap snacks for Greek yogurt or cottage cheese.", type: "tip" },
    { title: "Water & Bloating", text: "Drink 2.5-3 liters daily. Counterintuitively, drinking MORE water reduces bloating and water retention around the midsection. Cut back on sodium-heavy processed foods.", type: "tip" },
    { title: "Realistic Timeline", text: "Weeks 1-3: Stronger and more energized. Weeks 4-6: Clothes start fitting differently. Weeks 8-12: Visible stomach fat reduction and noticeable glute/hip growth. For full transformation, give it 6 months of consistency.", type: "tip" }
  ]
};

function getDataForProfile(profile) {
  return profile === 'nova' ? NOVA_DATA : CHARISMA_DATA;
}

// ===== CALENDAR HELPERS =====
function getCurrentProgramDay(profile) {
  var startDate = Storage.getP(profile, 'startDate');
  if (!startDate) return { week: 0, day: 0, totalDays: -1 };
  var today = new Date(); today.setHours(0,0,0,0);
  var start = new Date(startDate); start.setHours(0,0,0,0);
  var diffDays = Math.floor((today - start) / 86400000);
  if (diffDays < 0) return { week: 0, day: 0, totalDays: diffDays };
  return { week: Math.floor(diffDays / 7) + 1, day: (diffDays % 7) + 1, totalDays: diffDays };
}

function getStreak(profile, data) {
  var startDate = Storage.getP(profile, 'startDate');
  if (!startDate) return 0;
  var pd = getCurrentProgramDay(profile);
  var streak = 0, cw = pd.week, cd = pd.day;
  for (var i = 0; i < 84; i++) {
    if (cw < 1) break;
    if (cd <= 5) {
      var dd = data.days[cd - 1];
      if (dd) {
        var checks = Storage.getP(profile, 'checks-w' + cw + '-' + dd.id) || {};
        if (Object.values(checks).some(function(v){return v;})) { streak++; }
        else if (i > 0) { break; }
      }
    }
    cd--;
    if (cd < 1) { cd = 7; cw--; }
  }
  return streak;
}

// ===== SVG ICONS =====
var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
var PLAY_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';

// ===== APP STATE =====
var currentProfile = 'nova';
var currentPage = 'workout';
var chartInstance = null;

// ===== RENDER: WORKOUT =====
function renderWorkout(container, data, profile) {
  var pd = getCurrentProgramDay(profile);
  var week = pd.week, day = pd.day;
  var h = '';

  h += '<div class="page-hero"><h2>' + data.profile.program + '</h2><p>' + data.profile.subtitle + '</p>';
  h += '<div class="stats-row">';
  h += '<div class="stat-item"><div class="stat-val">' + data.stats.days + '</div><div class="stat-label">Days / Week</div></div>';
  h += '<div class="stat-item"><div class="stat-val">' + data.stats.duration + '</div><div class="stat-label">Min / Session</div></div>';
  h += '<div class="stat-item"><div class="stat-val">' + data.stats.weeks + '</div><div class="stat-label">Week Program</div></div>';
  h += '</div></div>';

  h += '<div class="phase-note">';
  data.phases.forEach(function(p) { h += '<strong>' + p.name + ' (' + p.weeks + '):</strong> ' + p.description + '<br>'; });
  h += '</div>';

  if (data.goalNote) h += '<div class="phase-note">' + data.goalNote + '</div>';

  data.days.forEach(function(dayData, dayIndex) {
    var isToday = day === dayIndex + 1 && week >= 1 && week <= 12;
    var todayClass = isToday ? ' today-highlight' : '';
    var todayBadge = isToday ? '<span class="today-badge">Today</span>' : '';

    h += '<div class="day-card glass-card' + todayClass + '" data-day-index="' + dayIndex + '">';
    h += '<div class="day-header" onclick="this.parentElement.classList.toggle(\'open\')">';
    h += '<div class="day-title-wrap"><div class="day-title">' + dayData.name + todayBadge + '</div>';
    h += '<div class="day-subtitle">' + dayData.subtitle + '</div></div>';
    h += '<span class="day-tag ' + dayData.tagClass + '">' + dayData.tag + '</span>';
    h += '<span class="chevron">&#9660;</span></div>';
    h += '<div class="day-body">';

    var exerciseIdx = 0;
    dayData.sections.forEach(function(section) {
      h += '<div class="section-label">' + section.label + '</div>';
      section.exercises.forEach(function(ex) {
        var checkKey = 'checks-w' + week + '-' + dayData.id;
        var checks = Storage.getP(profile, checkKey) || {};
        var isChecked = checks[exerciseIdx];
        var checkedCls = isChecked ? ' checked' : '';
        var completedCls = isChecked ? ' completed' : '';
        var safeName = ex.name.replace(/'/g, "\\'");
        var videoBtn = '<button class="btn-video" onclick="FitDuo.openVideo(\'' + safeName + '\')" title="Watch form video">' + PLAY_SVG + '</button>';

        h += '<div class="exercise-row' + completedCls + '">';
        h += '<button class="exercise-check' + checkedCls + '" onclick="FitDuo.toggleCheck(this,\'' + profile + '\',\'' + dayData.id + '\',' + exerciseIdx + ',' + week + ')">' + CHECK_SVG + '</button>';
        h += '<span class="exercise-name">' + ex.name + '</span>';
        h += '<span class="exercise-sets">' + ex.sets + '</span>';
        h += '<span class="exercise-rest">' + ex.rest + '</span>';
        h += videoBtn;
        h += '</div>';
        exerciseIdx++;
      });
    });

    if (dayData.finisher) {
      h += '<div class="finisher-note"><strong>Finisher:</strong> ' + dayData.finisher + '</div>';
    }

    var notesKey = 'notes-w' + week + '-' + dayData.id;
    var notes = Storage.getP(profile, notesKey) || '';
    h += '<div class="workout-notes"><textarea placeholder="Workout notes (weight used, how it felt...)" onblur="FitDuo.saveNotes(this,\'' + profile + '\',\'' + dayData.id + '\',' + week + ')">' + notes + '</textarea></div>';

    h += '</div></div>';
  });

  container.innerHTML = h;

  if (day >= 1 && day <= 7 && week >= 1 && week <= 12) {
    var tc = container.querySelector('.today-highlight');
    if (tc) tc.classList.add('open');
  }
}

// ===== RENDER: MEALS =====
function renderMeals(container, data) {
  var h = '<div class="page-hero"><h2>Meal Plan</h2><p>' + data.profile.name + '\'s Daily Nutrition</p></div>';
  h += '<div class="daily-totals glass-card"><h3>Daily Macro Targets</h3><div class="totals-grid">';
  h += '<div class="total-item"><div class="t-val">' + data.stats.calories.toLocaleString() + '</div><div class="t-label">Calories</div></div>';
  h += '<div class="total-item"><div class="t-val">' + data.stats.protein + 'g</div><div class="t-label">Protein</div></div>';
  h += '<div class="total-item"><div class="t-val">' + data.stats.carbs + 'g</div><div class="t-label">Carbs</div></div>';
  h += '<div class="total-item"><div class="t-val">' + data.stats.fat + 'g</div><div class="t-label">Fat</div></div>';
  h += '</div></div>';
  if (data.mealNote) h += '<div class="phase-note">' + data.mealNote + '</div>';
  data.meals.forEach(function(m) {
    h += '<div class="meal-card glass-card"><div class="meal-time">' + m.time + ' — Meal ' + m.number + '</div>';
    h += '<div class="meal-title">' + m.title + '</div>';
    h += '<div class="meal-items">' + m.items.join('<br>') + '</div>';
    h += '<div class="macro-row"><span class="macro macro-p">P: ' + m.macros.p + 'g</span>';
    h += '<span class="macro macro-c">C: ' + m.macros.c + 'g</span>';
    h += '<span class="macro macro-f">F: ' + m.macros.f + 'g</span></div></div>';
  });
  container.innerHTML = h;
}

// ===== RENDER: CALENDAR =====
function renderCalendar(container, data, profile) {
  var startDate = Storage.getP(profile, 'startDate');
  var pd = getCurrentProgramDay(profile);
  var week = pd.week, day = pd.day;
  var h = '<div class="page-hero"><h2>Calendar</h2><p>Week ' + (week > 0 && week <= 12 ? week : '—') + ' of 12</p></div>';

  h += '<div class="glass-card" style="padding:16px;margin-bottom:16px"><div class="calendar-header">';
  h += '<h3>Program Start Date</h3>';
  h += '<input type="date" class="start-date-input" value="' + (startDate || '') + '" onchange="FitDuo.setStartDate(this.value,\'' + profile + '\')">';
  h += '</div></div>';

  if (week >= 1 && week <= 12) {
    var cp = week <= 4 ? 1 : week <= 8 ? 2 : 3;
    h += '<div class="phase-progress glass-card">';
    h += '<div style="font-family:var(--font-heading);font-size:0.75rem;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted)">Phase Progress</div>';
    h += '<div class="phase-bar-container">';
    [1,2,3].forEach(function(p){ h += '<div class="phase-segment ' + (p < cp ? 'past' : p === cp ? 'active' : '') + '"></div>'; });
    h += '</div><div class="phase-labels">';
    data.phases.forEach(function(p, i){ h += '<span class="phase-label ' + (i+1===cp?'active':'') + '">' + p.name + '</span>'; });
    h += '</div></div>';
  }

  if (startDate) {
    var dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    h += '<div class="glass-card" style="padding:16px;margin-bottom:16px"><div class="calendar-grid">';
    dayNames.forEach(function(d){ h += '<div class="cal-header-cell">' + d + '</div>'; });
    for (var w = 1; w <= 12; w++) {
      for (var d = 1; d <= 7; d++) {
        var isToday = w === week && d === day;
        var isRest = d >= 6;
        var isFuture = w > week || (w === week && d > day);
        var cls = 'cal-cell';
        if (isToday) cls += ' today';
        if (isRest) cls += ' rest';
        if (isFuture) cls += ' future';
        if (!isRest && !isFuture && d <= 5 && data.days[d-1]) {
          var dd = data.days[d-1];
          var ck = Storage.getP(profile, 'checks-w' + w + '-' + dd.id) || {};
          if (Object.values(ck).some(function(v){return v;})) cls += ' completed';
        }
        var tag = d <= 5 && data.days[d-1] ? data.days[d-1].tag.charAt(0) : (isRest ? 'R' : '');
        h += '<div class="' + cls + '" title="Week ' + w + ', Day ' + d + '">';
        h += '<span class="cal-week">W' + w + '</span><span class="cal-day">' + tag + '</span></div>';
      }
    }
    h += '</div></div>';
  } else {
    h += '<div class="phase-note" style="text-align:center">Set your program start date above to see the full calendar view.</div>';
  }
  container.innerHTML = h;
}

// ===== RENDER: PROGRESS =====
function renderProgress(container, data, profile) {
  var pd = getCurrentProgramDay(profile);
  var week = pd.week;
  var h = '<div class="page-hero"><h2>Progress</h2><p>' + data.profile.name + '\'s Transformation</p></div>';

  // Weekly summary
  var workouts = 0, exercises = 0;
  if (week >= 1 && week <= 12) {
    data.days.slice(0,5).forEach(function(dd) {
      var ck = Storage.getP(profile, 'checks-w' + week + '-' + dd.id) || {};
      var cnt = Object.values(ck).filter(function(v){return v;}).length;
      if (cnt > 0) workouts++;
      exercises += cnt;
    });
  }
  var entries = Storage.getP(profile, 'weightLog') || [];
  var wc = '—';
  if (entries.length >= 2) {
    var diff = entries[entries.length-1].weight - entries[entries.length-2].weight;
    wc = (diff >= 0 ? '+' : '') + diff.toFixed(1);
  }

  h += '<div class="weekly-summary glass-card">';
  h += '<div style="font-family:var(--font-heading);font-size:0.75rem;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted)">This Week</div>';
  h += '<div class="summary-grid">';
  h += '<div class="summary-item"><div class="summary-val">' + workouts + '/5</div><div class="summary-label">Workouts</div></div>';
  h += '<div class="summary-item"><div class="summary-val">' + exercises + '</div><div class="summary-label">Exercises</div></div>';
  h += '<div class="summary-item"><div class="summary-val">' + wc + '</div><div class="summary-label">Weight Chg</div></div>';
  h += '</div></div>';

  // Weight log
  h += '<div class="progress-section"><h3>Weight Log</h3>';
  h += '<div class="weight-input-row">';
  h += '<input type="date" id="weightDate" value="' + new Date().toISOString().split('T')[0] + '">';
  h += '<input type="number" id="weightValue" placeholder="Weight (lbs)" step="0.1">';
  h += '<button class="btn-primary" onclick="FitDuo.logWeight(\'' + profile + '\')">Log</button></div>';
  h += '<div class="chart-container glass-card"><canvas id="weightChart"></canvas></div>';

  if (entries.length > 0) {
    h += '<div class="weight-log-list">';
    var rev = entries.slice().reverse().slice(0, 10);
    rev.forEach(function(e, i) {
      var idx = entries.length - 1 - i;
      h += '<div class="weight-entry"><span class="we-date">' + formatDate(e.date) + '</span>';
      h += '<span class="we-value">' + e.weight + ' lbs</span>';
      h += '<button class="we-delete" onclick="FitDuo.deleteWeight(\'' + profile + '\',' + idx + ')">×</button></div>';
    });
    h += '</div>';
  }
  h += '</div>';

  // Photos
  h += '<div class="progress-section"><h3>Before & After</h3><div class="photo-zones">';
  h += renderPhotoZone(profile, 'before', 'Before');
  h += renderPhotoZone(profile, 'after', 'After');
  h += '</div><input type="file" id="photoInput" accept="image/*" style="display:none" onchange="FitDuo.handlePhoto(event)"></div>';

  container.innerHTML = h;
  requestAnimationFrame(function(){ renderChart(profile); });
}

function renderPhotoZone(profile, type, label) {
  var pd = Storage.getP(profile, 'photo-' + type);
  if (pd) {
    return '<div class="photo-zone glass-card" onclick="FitDuo.promptPhoto(\'' + profile + '\',\'' + type + '\')">' +
      '<img src="' + pd.src + '" alt="' + label + '">' +
      '<div class="photo-label">' + label + '</div>' +
      '<div class="photo-date">' + formatDate(pd.date) + '</div></div>';
  }
  return '<div class="photo-zone glass-card" onclick="FitDuo.promptPhoto(\'' + profile + '\',\'' + type + '\')">' +
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
    '<div class="photo-label">' + label + '</div><div class="photo-date">Tap to upload</div></div>';
}

function renderChart(profile) {
  var canvas = document.getElementById('weightChart');
  if (!canvas) return;
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  var entries = Storage.getP(profile, 'weightLog') || [];
  if (entries.length === 0) return;
  var accent = getComputedStyle(document.body).getPropertyValue('--accent').trim();
  chartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels: entries.map(function(e){ return formatDate(e.date); }),
      datasets: [{ label: 'Weight (lbs)', data: entries.map(function(e){ return e.weight; }),
        borderColor: accent, backgroundColor: accent + '20', fill: true, tension: 0.3, pointRadius: 4, pointBackgroundColor: accent }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#55556a', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#55556a', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

// ===== RENDER: GUIDE =====
function renderGuide(container, data) {
  var h = '<div class="page-hero"><h2>Guide & Tips</h2><p>' + data.profile.name + '\'s Training Wisdom</p></div>';
  data.tips.forEach(function(tip) {
    if (tip.type === 'myth') {
      h += '<div class="myth-card"><div class="myth-title">' + tip.title + '</div><div class="myth-text">' + tip.text + '</div></div>';
    } else {
      h += '<div class="tip-card glass-card"><div class="tip-title">' + tip.title + '</div><div class="tip-text">' + tip.text + '</div></div>';
    }
  });
  container.innerHTML = h;
}

// ===== TIMER =====
var Timer = {
  CIRC: 2 * Math.PI * 90,
  total: 60, remaining: 0, interval: null, audioCtx: null,
  toggle: function() { document.getElementById('timerOverlay').classList.toggle('active'); },
  startStop: function() {
    var btn = document.getElementById('timerStartBtn');
    if (this.interval) { clearInterval(this.interval); this.interval = null; btn.textContent = 'Start'; document.getElementById('timerFab').classList.remove('running'); return; }
    if (this.remaining <= 0) this.remaining = this.total;
    btn.textContent = 'Pause'; document.getElementById('timerFab').classList.add('running');
    var self = this;
    this.interval = setInterval(function() {
      self.remaining--;
      self.updateDisplay();
      if (self.remaining <= 0) { clearInterval(self.interval); self.interval = null; btn.textContent = 'Start'; document.getElementById('timerFab').classList.remove('running'); self.beep(); }
    }, 1000);
    this.updateDisplay();
  },
  reset: function() {
    if (this.interval) { clearInterval(this.interval); this.interval = null; }
    this.remaining = this.total;
    document.getElementById('timerStartBtn').textContent = 'Start';
    document.getElementById('timerFab').classList.remove('running');
    this.updateDisplay();
  },
  updateDisplay: function() {
    var m = Math.floor(this.remaining / 60), s = this.remaining % 60;
    document.getElementById('timerDisplay').textContent = m + ':' + (s < 10 ? '0' : '') + s;
    var prog = document.getElementById('timerProgress');
    prog.style.strokeDashoffset = this.CIRC * (1 - this.remaining / this.total);
  },
  beep: function() {
    try {
      if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      for (var i = 0; i < 3; i++) {
        var osc = this.audioCtx.createOscillator(), gain = this.audioCtx.createGain();
        osc.connect(gain); gain.connect(this.audioCtx.destination);
        osc.frequency.value = 880; gain.gain.value = 0.3;
        var st = this.audioCtx.currentTime + i * 0.2;
        osc.start(st); osc.stop(st + 0.12);
      }
    } catch(e){}
  },
  init: function() {
    var self = this;
    document.querySelectorAll('.timer-preset').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.timer-preset').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        self.total = parseInt(btn.dataset.seconds);
        self.remaining = self.total;
        if (self.interval) { clearInterval(self.interval); self.interval = null; document.getElementById('timerStartBtn').textContent = 'Start'; document.getElementById('timerFab').classList.remove('running'); }
        self.updateDisplay();
      });
    });
    this.remaining = this.total;
    this.updateDisplay();
  }
};

// ===== HELPERS =====
function formatDate(ds) {
  var d = new Date(ds + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

var pendingPhotoProfile = null, pendingPhotoType = null;

// ===== MAIN APP =====
function applyProfile(profile) {
  document.body.setAttribute('data-profile', profile);
  var data = getDataForProfile(profile);
  document.getElementById('topBarName').textContent = data.profile.name;
  document.getElementById('streakCount').textContent = getStreak(profile, data);
}

function navigate(page) {
  currentPage = page;
  window.location.hash = page;
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.classList.toggle('active', item.dataset.page === page);
  });
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  var el = document.getElementById('page-' + page);
  if (el) { el.classList.add('active'); el.style.animation = 'none'; el.offsetHeight; el.style.animation = ''; }
  renderCurrentPage();
}

function renderCurrentPage() {
  var data = getDataForProfile(currentProfile);
  var el = document.getElementById('page-' + currentPage);
  if (!el) return;
  switch(currentPage) {
    case 'workout': renderWorkout(el, data, currentProfile); break;
    case 'meals': renderMeals(el, data); break;
    case 'calendar': renderCalendar(el, data, currentProfile); break;
    case 'progress': renderProgress(el, data, currentProfile); break;
    case 'guide': renderGuide(el, data); break;
  }
}

// ===== PUBLIC API =====
window.FitDuo = {
  selectProfile: function(profile) {
    currentProfile = profile;
    Storage.set('activeProfile', profile);
    applyProfile(profile);
    document.getElementById('profileSelector').classList.add('hidden');
    renderCurrentPage();
  },
  showProfileSelector: function() {
    document.getElementById('profileSelector').classList.remove('hidden');
  },
  navigate: navigate,
  openVideo: function(exerciseName) {
    var modal = document.getElementById('videoModal');
    var query = encodeURIComponent(exerciseName + ' form tutorial');
    document.getElementById('videoSearchTitle').textContent = exerciseName;
    document.getElementById('ytSearchLink').href = 'https://www.youtube.com/results?search_query=' + query + '+short';
    document.getElementById('tiktokSearchLink').href = 'https://www.tiktok.com/search?q=' + query;
    document.getElementById('ytShortsLink').href = 'https://www.youtube.com/results?search_query=' + query + '+%23shorts&sp=EgIYAQ%253D%253D';
    modal.classList.add('active');
  },
  closeVideo: function(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('video-close') && !event.target.closest('.video-close')) return;
    document.getElementById('videoModal').classList.remove('active');
  },
  toggleCheck: function(btn, profile, dayId, exIdx, week) {
    var key = 'checks-w' + week + '-' + dayId;
    var checks = Storage.getP(profile, key) || {};
    checks[exIdx] = !checks[exIdx];
    Storage.setP(profile, key, checks);
    btn.classList.toggle('checked');
    btn.closest('.exercise-row').classList.toggle('completed');
    var data = getDataForProfile(profile);
    document.getElementById('streakCount').textContent = getStreak(profile, data);
  },
  saveNotes: function(textarea, profile, dayId, week) {
    Storage.setP(profile, 'notes-w' + week + '-' + dayId, textarea.value);
  },
  setStartDate: function(value, profile) {
    Storage.setP(profile, 'startDate', value);
    renderCurrentPage();
  },
  logWeight: function(profile) {
    var dateEl = document.getElementById('weightDate');
    var valEl = document.getElementById('weightValue');
    var w = parseFloat(valEl.value);
    if (!w || w < 50 || w > 500) return;
    var entries = Storage.getP(profile, 'weightLog') || [];
    entries.push({ date: dateEl.value, weight: w });
    entries.sort(function(a,b){ return a.date.localeCompare(b.date); });
    Storage.setP(profile, 'weightLog', entries);
    valEl.value = '';
    renderCurrentPage();
  },
  deleteWeight: function(profile, idx) {
    var entries = Storage.getP(profile, 'weightLog') || [];
    entries.splice(idx, 1);
    Storage.setP(profile, 'weightLog', entries);
    renderCurrentPage();
  },
  promptPhoto: function(profile, type) {
    pendingPhotoProfile = profile;
    pendingPhotoType = type;
    document.getElementById('photoInput').click();
  },
  handlePhoto: function(event) {
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = new Image();
      img.onload = function() {
        var canvas = document.createElement('canvas');
        var scale = Math.min(800 / img.width, 1);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        Storage.setP(pendingPhotoProfile, 'photo-' + pendingPhotoType, {
          src: canvas.toDataURL('image/jpeg', 0.7),
          date: new Date().toISOString().split('T')[0]
        });
        renderCurrentPage();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  },
  timerToggle: function() { Timer.toggle(); },
  timerStartStop: function() { Timer.startStop(); },
  timerReset: function() { Timer.reset(); },
  renderCurrentPage: renderCurrentPage
};

// ===== INIT =====
(function() {
  var saved = Storage.get('activeProfile');
  if (saved) {
    currentProfile = saved;
    document.getElementById('profileSelector').classList.add('hidden');
  }
  applyProfile(currentProfile);
  Timer.init();

  var hash = window.location.hash.replace('#', '');
  if (['workout','meals','calendar','progress','guide'].indexOf(hash) !== -1) currentPage = hash;
  navigate(currentPage);
})();
