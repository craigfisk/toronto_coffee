export interface CoffeeShop {
  id: string;
  name: string;
  intersection: string;
  lat: number;
  lng: number;
  url?: string;
  wifi: boolean;
  notes: string;
}

export const coffeeShops: CoffeeShop[] = [
  {
    id: "kava-coffee-house",
    name: "Kava Coffee House",
    intersection: "100 Howard St",
    lat: 43.6713994,
    lng: -79.3714777,
    wifi: true,
    notes: "2025-8-26 Bloor at Parliament. Cortado: good. Brie and pear sandwich. People doing calls on phones. Flies. Wifi. WC ground floor. Curated music maybe > most but not top group."
  },
  {
    id: "mofer-coffee",
    name: "Mofer Coffee",
    intersection: "55 University Ave #3",
    lat: 43.6532,
    lng: -79.3832,
    wifi: true,
    notes: "2025-8-23 on University down from Queen. Extra cortado for spilling half of the first one. WC same floor. Wifi. Longtable good for 6-7 person Mob Programming. Window counters. Helpful barista."
  },
  {
    id: "issho",
    name: "Issho",
    intersection: "583 Gerrard St E",
    lat: 43.6654204,
    lng: -79.3522456,
    wifi: false,
    notes: "Gerrard and Broadview. 2025-8-20. Very good cheese scone, very good cortado. Interesting nekko art. Good music: Bill Evans jazz. Very small (bench). Interesting selections (Japanese)."
  },
  {
    id: "remarkable-bean",
    name: "Remarkable Bean",
    intersection: "1103 Queen St E",
    lat: 43.66193,
    lng: -79.3356945,
    wifi: true,
    notes: "2025-8-16 on Queen at Willow, wifi, flies, tomato quiche, wc downstairs, reasonable ceramic cortado with handle. Nice walk down Willow from Kingston. Maybe 2nd best audio (but pretty distant)."
  },
  {
    id: "black-canary",
    name: "Black Canary",
    intersection: "900 Kingston Rd",
    lat: 43.6804179,
    lng: -79.2897047,
    wifi: true,
    notes: "2025-8-16, Kingston at Pickering, wifi, WC in basement, pretty good cortado, veggie breakfast sandwich, walked up thru Glen Stewart Ravine (\"watch out for Coyotes\") from Queen St #501 (but could take #503) to Kingston, waiting for the Great Escape bookstore to open at 10:00AM. Nice shop. Sit out front. Desultory \"art\"."
  },
  {
    id: "poured-coffee",
    name: "Poured Coffee",
    intersection: "2165 Danforth Ave",
    lat: 43.6860721,
    lng: -79.3104308,
    wifi: true,
    notes: "on Danforth. 2025-8-11.  Nice AC on a hot day but pretty marginal cortado. wifi. WC upstairs."
  },
  {
    id: "doapen-coffee-greek-town",
    name: "Doapen Coffee @Greek Town",
    intersection: "850 Carlaw Ave",
    lat: 43.6805163,
    lng: -79.3483032,
    wifi: false,
    notes: "2025-8-12 on Carlaw up from Danforth. No wifi. WC ground level. Music? Indistinct. Chairs but no tables outside. Noisy cooler inside. Better cortado and good blueberry scone."
  },
  {
    id: "oliver-coffee-bar",
    name: "Oliver Coffee Bar",
    intersection: "852 Pape Ave Unit 3",
    lat: 43.6532,
    lng: -79.3832,
    wifi: false,
    notes: "2025-8-12 wifi broken, wouldn't reboot router (music works), WC downstairs, mediocre cortado, humming barista, country music. Went here in October 2024 and it was slightly better."
  },
  {
    id: "dark-horse-espresso",
    name: "Dark Horse Espresso",
    intersection: "630 Queen St E",
    lat: 43.658461,
    lng: -79.3526646,
    wifi: false,
    notes: "Queen and Carroll St. got a chives and cheese scone to take to Joel Weeks Park (big acorn with 4 squirrels) prior to Univ. Chicago alumni call. Pretty good scone. Need to go back and check out cortado."
  },
  {
    id: "alice-marie",
    name: "Alice Marie",
    intersection: "807 Gerrard St E",
    lat: 43.6667558,
    lng: -79.3456178,
    wifi: true,
    notes: "Gerrard and Logan. wifi. Best cortado so far and definitely best custom bakery ( cheddar chive scone, yes). Ceramic cup. Only open at 8:30AM and 4 days/week (starting Thursdays). Music? Beatles. Too quiet to tell. Cute hooker black lace. Dundas streetcar stops."
  },
  {
    id: "coffee-all-that-jazz",
    name: "Coffee & All That Jazz",
    intersection: "72 Howard Park Ave",
    lat: 43.65152,
    lng: -79.45159,
    wifi: false,
    notes: "Howard Park at Roncevalles. WC ground floor. Reasonable cortado and blueberry muffin. Billie Holiday music."
  },
  {
    id: "bevy",
    name: "Bevy",
    intersection: "738 Dundas St E",
    lat: 43.6615685,
    lng: -79.357144,
    wifi: false,
    notes: "Dundas at River St - ok, event space (skateboarding).  Better but not great music. Second location? closed, was maybe at 401 Logan Ave #101, Toronto, ON M4M 2N9, Canada Dundas at Logan - ok cortado, apple scone, dogs inside barking at people. WC on ground floor."
  },
  {
    id: "second-cup-cafe",
    name: "Second Cup Cafe",
    intersection: "355 Danforth Ave",
    lat: 43.6772272,
    lng: -79.3529021,
    wifi: false,
    notes: "on Danforth at Hampton opposite Book City. Entered and left."
  },
  {
    id: "sumach-espresso",
    name: "Sumach Espresso",
    intersection: "118 Sumach St #2",
    lat: 43.6532,
    lng: -79.3832,
    wifi: false,
    notes: "ok, ground floor WC, out of regular blueberry muffins, ok cortado. I wouldn't go back. Uninteresting clientele and poor music."
  },
  {
    id: "moss-park-espresso",
    name: "Moss Park Espresso",
    intersection: "185 Queen St E",
    lat: 43.65393,
    lng: -79.37142,
    wifi: false,
    notes: "bad. downstairs only, no wifi (\"no laptops, no ipads\"), left w/o ordering"
  },
  {
    id: "nana-s-creperie",
    name: "Nana's Creperie",
    intersection: "1917 Queen St E",
    lat: 43.66889,
    lng: -79.30419,
    wifi: false,
    notes: "Queen East at Kippendavid near the less good Book City. Salmon crepe; no coffee."
  },
  {
    id: "balzac-s",
    name: "Balzac's",
    intersection: "1 Trinity St",
    lat: 43.64975,
    lng: -79.35913,
    wifi: true,
    notes: "- 2025-8-5 In the Distillery complex (walk through) at Mill and Parliament. Blueberry muffin, ok cortado. Nothing special. Maybe I can walk around from here. Wifi open. Ground floor WC. Tables and chairs outside."
  },
  {
    id: "jetfuel-coffee-shop",
    name: "JetFuel Coffee Shop",
    intersection: "519 Parliament St",
    lat: 43.665277,
    lng: -79.3682133,
    wifi: true,
    notes: "- 2025-8-26:cortado, cookie. Tom Waits, Nirvana, The Smashing Pumpkins, and Bob Dylan music. -:2025-8-18 late afternoon: cortado and shortbread, wifi, WC in basement, sound on low. not as good as ideal: charles bradley vs. duke ellington and ruben gonzales. - 2025-8-13 2nd time, late in the afternoon, Wifi password could not get right; WC in basement; good cortado; Prince music; great sound system. - 2025-8-5 On Parliament just above Carlton. Wifi. Best blueberry muffin, but sticks to the paper so I could only eat half. Cortado ok. Nobody is grumpy today. New Chinese girl helpful taking orders; first day? Bikes/bikers in front. Nonstop Curtis Mayfield and Prince music. Very good sound system. Tangerine rental bikes out front."
  },
  {
    id: "rooster-coffee-house",
    name: "Rooster Coffee House",
    intersection: "479 Broadview Ave",
    lat: 43.6691616,
    lng: -79.352812,
    wifi: true,
    notes: "- 2025-7-26 mediocre cortado, not great cheese thing. Can cut across Broadview from Riverdale Park with Sun Yatsen status. Abandoned for Riverdale Perk via Riverdale walking. -2024/10/17 Ok cortado. Cheese scone. Lucky timing. Line later. Walked across Broadview to Sun Yatsen statue, frost-covered hillside with great view of downtown, and down to Don Valley Freeway footbridge, then along the running track to the north to the woods and along freeway until the path was blocked. Came up in Riverdale East Park dog walk area and swimming pool at Montcrest Blvd. street going west from Broadview before Danforth. 2025-7-26 has wifi, mediocre cortado and cold cheese scone; first ex-wife/sister-in-law carrying on about something I couldn't hear anyway; left to walk down to Riverdale Perk."
  },
  {
    id: "riverdale-perk-cafe",
    name: "Riverdale Perk Cafe",
    intersection: "633 Logan Avenue",
    lat: 43.6703536,
    lng: -79.3463627,
    wifi: false,
    notes: "- 2025-8-24 no wifi, Spinach feta not so good cold. Diffident barista. No cortado. Ignorant people talking on phones. - 2025-7-26 no wifi; cortado (ok; at least better than and spinach scone - 2024-10/12 cortado (not great) and pumpkin scone with chocolate (last one); no wifi; No wifi. Nicest place to hang out. Pumpkin scones and flat white (cortado they can make it but it's not on the menu). - 2025-7-26 slightly better cortado. 2025-7-26 no wifi; slight improvement over the Rooster. Ok cortado; no wifi."
  },
  {
    id: "dineen-outpost",
    name: "Dineen Outpost",
    intersection: "1042 Gerrard St E",
    lat: 43.6690981,
    lng: -79.3367999,
    wifi: true,
    notes: "off Gerrard north side one block before Jones. - 2025-8-28 Billie Eilish and Ariana Grande. Cortado and cheese/chive scone./ - 2025-8-9 8:00 AM opening Sat/Sun. Strange cortado; new barista?l - 2025-7-28 flies everywhere. wifi *guest* with email; cheese + blueberry scones + ok cortado - 2024/10/15 (Tuesday), busy traffic down Logan. Best cortado so far. Single origin beans. 2 scones: cheese/chive + blueberry. Outside seating, counter, front room, half-flight up back room. Wifi. - 2024 date? again to try the Flat White. Good. Wifi but ad-driven."
  },
  {
    id: "hailed-coffee",
    name: "Hailed Coffee",
    intersection: "801 Gerrard St E",
    lat: 43.6669075,
    lng: -79.3454403,
    wifi: false,
    notes: "- on Gerrard near Logan (ok cortado; cheese scone) no wifi. - 2024/10/13 (Sunday) - best (?) cortado.a"
  },
  {
    id: "mercury-espresso",
    name: "Mercury Espresso",
    intersection: "915 Queen St E",
    lat: 43.660667,
    lng: -79.3413718,
    wifi: true,
    notes: "Queen near Leslie (Carlaw) - 2024? better cortado, cheese/chive scone) - wifi; walked down to Eastern and back to Logan"
  },
  {
    id: "the-schmooz",
    name: "The Schmooz",
    intersection: "590 Pape Ave",
    lat: 43.6751891,
    lng: -79.3435646,
    wifi: true,
    notes: "- on Pape at Wroxeler. - 2025-8-24 from Sunday soccer at Withrow. Good cortado with oat + oatmeal pistachio cookie. WC up half a flight. Wifi. Busy. No music. - 2024/10/14 (holiday) Small, heat from baking oven, best cortado so far, some kind of berry scone + Perk for flat white (better than their cortado; pumpkin scone straight out of the oven X 2."
  },
  {
    id: "ideal-coffee-wine",
    name: "Ideal Coffee & Wine",
    intersection: "162 Ossington Ave",
    lat: 43.6478667,
    lng: -79.4204274,
    wifi: false,
    notes: "on Ossington at Foxley - 2025-8-18: flat white and blueberry scone, followed by cortado and cheese/chive scone, at 7:45AM, Ellington music, maybe close to Jet Fuel. 2024/10)18: a cortado and then a flat white to go with Mexican Huatusco beans. Excellent! - 2024-10-?"
  },
  {
    id: "oliver-coffee-bar",
    name: "Oliver Coffee Bar",
    intersection: "852 Pape Ave Unit 3",
    lat: 43.6532,
    lng: -79.3832,
    wifi: false,
    notes: "on Fulton at Pape. Ok flat white. - 2024/10/20 - 10/21"
  },
  {
    id: "la-gloria-mexican-coffee",
    name: "La gloria Mexican Coffee",
    intersection: "453 Parliament St",
    lat: 43.66362,
    lng: -79.36737,
    wifi: false,
    notes: "on Parliament, enroute walking via UofT bookstore from Ideal on Ossington to Victor Ave. La Gloria: flat white with medium Veracruz beans. Also excellent. - 2024-10/18"
  },
  {
    id: "supernova",
    name: "Supernova",
    intersection: "897 Broadview Ave",
    lat: 43.6808633,
    lng: -79.3574494,
    wifi: false,
    notes: "Broadview past Danforth at Browning so so (didn't go in)-"
  },
  {
    id: "vlad-s-bakery",
    name: "Vlad's bakery",
    intersection: "713 Danforth Ave",
    lat: 43.679072,
    lng: -79.3434019,
    wifi: false,
    notes: "Danforth south side just past Pape Ave. Books ---------------------------------- no software; bought 2 books -"
  },
];
