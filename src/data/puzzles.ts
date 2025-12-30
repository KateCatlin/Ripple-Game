export interface PuzzleEvent {
  event: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Puzzle {
  id: number;
  title: string;
  events: PuzzleEvent[];
}

export const puzzles: Puzzle[] = [
  {
    id:  1,
    title: "The Oil Embargo Shock",
    events: [
      {
        event: "1973:  OPEC announces oil embargo against the United States",
        options: [
          "Oil prices remain stable due to domestic reserves",
          "Gas prices quadruple within months",
          "Consumer demand for gasoline drops immediately",
          "Alternative energy sources quickly replace oil"
        ],
        correctIndex:  1,
        explanation: "The embargo caused gas prices to spike from $0.39 to $1.35 per gallon — a quadrupling that shocked American consumers and the economy."
      },
      {
        event: "Gas prices quadruple, fuel becomes scarce",
        options: [
          "Automakers accelerate production of large vehicles",
          "Federal government mandates fuel conservation measures",
          "Consumers continue driving habits unchanged",
          "Public transportation ridership declines"
        ],
        correctIndex:  1,
        explanation: "Congress passed the National Maximum Speed Law, reducing speed limits to 55 mph to conserve fuel — part of a wave of federal conservation mandates."
      },
      {
        event: "Government mandates fuel conservation, consumers seek efficiency",
        options:  [
          "Domestic automakers dominate with new efficient models",
          "Fuel-efficient foreign cars capture massive US market share",
          "Gasoline demand continues rising despite high prices",
          "Auto industry sales collapse entirely"
        ],
        correctIndex: 1,
        explanation: "Smaller, fuel-efficient Japanese cars gained massive US market share.  Detroit's big-car dominance ended, and fuel economy became a major selling point."
      }
    ]
  },

{
  id:  2,
  title: "Online Dating Transforms Romance",
  events: [
    {
      event:  "2000s: Online dating goes mainstream, giving people access to thousands of potential partners",
      options: [
        "People marry faster with more options available",
        "Average marriage age rises as people spend longer searching",
        "Dating pools remain limited to local communities",
        "People settle down with fewer total relationships"
      ],
      correctIndex: 1,
      explanation: "With access to seemingly endless options, people spent longer searching for the 'perfect' match. Average marriage age rose from 23 to 30 over two decades."
    },
    {
      event: "People delay marriage, spending years dating across wider networks",
      options: [
        "Couples continue meeting within their own social class",
        "Relationships increasingly cross social and geographic boundaries",
        "Workplaces become the dominant place to meet partners",
        "People date fewer total partners before marrying"
      ],
      correctIndex:  1,
      explanation: "Dating apps connected people who would never have crossed paths — different neighborhoods, social circles, education levels. Relationships became less predictable by background."
    },
    {
      event: "Dating crosses traditional social and geographic boundaries",
      options: [
        "Friend groups remain the center of social life",
        "Strangers replace friends as the core of adult social networks",
        "Community institutions grow stronger",
        "People maintain larger local friend networks"
      ],
      correctIndex:  1,
      explanation: "When couples meet through apps instead of friends, they merge separate social worlds rather than overlapping ones. Adult friendships increasingly come through partners, not the reverse."
    }
  ]
},
{
  id: 3,
  title: "The Mortgage Interest Deduction",
  events: [
    {
      event: "1913: U.S. tax code allows homeowners to deduct mortgage interest from taxable income",
      options: [
        "Renting remains as financially attractive as buying",
        "Buying a home becomes financially advantageous over renting",
        "Housing prices decrease due to tax changes",
        "Homeownership rates remain flat"
      ],
      correctIndex: 1,
      explanation: "The deduction meant the government was effectively subsidizing home purchases. A $1,000 mortgage payment might only 'cost' $700 after the tax break — renters got no such benefit."
    },
    {
      event: "Tax policy makes homeownership financially advantageous",
      options: [
        "Americans buy modest homes to minimize debt",
        "Americans buy the largest homes they can finance",
        "Home sizes remain stable across decades",
        "Multi-family housing becomes more popular"
      ],
      correctIndex: 1,
      explanation: "Bigger mortgage = bigger deduction. The tax code incentivized maximizing your mortgage. Average new home size grew from 1,500 sq ft in 1970 to 2,500 sq ft by 2010."
    },
    {
      event: "Americans buy increasingly large homes to maximize tax benefits",
      options: [
        "Neighborhoods become denser to meet demand",
        "Suburban sprawl accelerates as large lots become standard",
        "Urban apartments grow in popularity",
        "Housing costs decrease with larger supply"
      ],
      correctIndex: 1,
      explanation: "Big houses need big lots. Demand for space pushed development outward into suburbs and exurbs, reinforcing car-dependent sprawl and long commutes."
    }
  ]
},

{
  id: 4,
  title: "The Jet Engine Shrinks the World",
  events: [
    {
      event: "1958: First commercial jet service crosses the Atlantic in 6 hours instead of 12",
      options: [
        "Ocean liners remain competitive for transatlantic travel",
        "Air travel rapidly replaces ships for long-distance passenger trips",
        "Ticket prices remain too high for most travelers",
        "Airlines struggle to fill the faster planes"
      ],
      correctIndex: 1,
      explanation: "Speed won. Ocean liner crossings dropped from 1 million passengers in 1957 to 250,000 by 1965. By 1970, passenger ships were essentially extinct outside cruises."
    },
    {
      event: "Jet travel makes international trips fast and affordable",
      options: [
        "Business headquarters stay rooted in single cities",
        "Multinational corporations expand as executives can oversee global operations",
        "International trade decreases due to easier communication",
        "Businesses concentrate in fewer locations"
      ],
      correctIndex: 1,
      explanation: "When an executive could fly to Tokyo and back in a week, managing overseas factories became practical. Jet travel enabled the multinational corporation model."
    },
    {
      event: "Corporations expand globally, managing operations across continents",
      options: [
        "Manufacturing stays close to headquarters",
        "Manufacturing moves to wherever labor is cheapest",
        "Shipping costs prevent global supply chains",
        "Companies prefer domestic suppliers for reliability"
      ],
      correctIndex: 1,
      explanation: "If you can fly managers anywhere, you can put factories anywhere. Manufacturing moved to low-wage countries, and global supply chains emerged — your iPhone has parts from 40+ countries."
    }
  ]
},

{
  id: 5,
  title: "The Seatbelt Paradox",
  events: [
    {
      event: "1970s–1980s: Seatbelts become widespread, and many states adopt mandatory seatbelt laws",
      options: [
        "Overall traffic fatalities drop sharply because accidents become less common",
        "Fatalities among car occupants fall, but total crashes change less than expected",
        "Driving becomes dramatically slower as people feel more vulnerable to injury",
        "Pedestrian and cyclist deaths fall in lockstep with occupant deaths"
      ],
      correctIndex: 1,
      explanation: "Seatbelts clearly reduce the chance of dying in a crash for people inside the car. But the big surprise is that the *number of crashes* doesn't necessarily drop much — safer occupants can coincide with similar crash rates."
    },
    {
      event: "Drivers feel more protected inside the car, and roads 'feel' safer",
      options: [
        "Drivers become consistently more cautious, leaving larger following distances",
        "Drivers take more risks at the margin (speeding, tighter gaps), offsetting some safety gains",
        "Drivers switch massively from cars to public transit because cars feel 'regulated'",
        "Cities immediately redesign streets to prioritize pedestrians over cars"
      ],
      correctIndex: 1,
      explanation: "This is the classic risk-compensation idea: when people feel safer, some will drive a bit more aggressively — not enough to erase seatbelt benefits for occupants, but enough to change the distribution of harm."
    },
    {
      event: "Crashes still happen, but the people inside cars are better protected",
      options: [
        "The biggest gains accrue to pedestrians and cyclists, who become safer too",
        "More of the remaining crash harm shifts toward people outside the vehicle (pedestrians/cyclists/motorcyclists)",
        "Insurance costs collapse because crash severity falls across the board",
        "Large vehicles rapidly disappear because they are no longer needed for safety"
      ],
      correctIndex: 1,
      explanation: "If a collision is less deadly for the driver, the 'cost' of risky driving can shift outward. Some research argues that safety regulations reduce occupant deaths while increasing the share of fatalities borne by non-occupants (like pedestrians and cyclists) — a grim second-order effect."
    }
  ]
},

{
  id: 6,
  title: "Refrigeration Changes What We Eat",
  events: [
    {
      event: "Early–mid 20th century: Refrigerators become common in American homes",
      options: [
        "Households continue shopping daily for fresh food from local markets",
        "Food spoilage drops dramatically, allowing households to store food for weeks",
        "Refrigeration mainly benefits restaurants, with little impact on home cooking",
        "Cold storage remains a luxury limited to wealthy households"
      ],
      correctIndex: 1,
      explanation: "Refrigerators sharply reduced spoilage and decoupled eating from daily shopping. Families could safely store meat, dairy, and leftovers for long periods — a fundamental shift in food logistics."
    },
    {
      event: "Food can now be stored safely for much longer periods",
      options: [
        "People visit local markets more often to take advantage of fresh inventory",
        "Shopping frequency drops as households shift to weekly or biweekly trips",
        "Households rely entirely on preserved foods like salt-cured meats",
        "Urban density increases as food access becomes more centralized"
      ],
      correctIndex: 1,
      explanation: "When food lasts longer, there's less need for daily shopping. Trips consolidate into fewer, larger grocery runs — changing how cities, neighborhoods, and food retail evolve."
    },
    {
      event: "Consumers shop less often but buy more food at once",
      options: [
        "Small local vendors thrive as demand for specialty goods increases",
        "National food brands and supermarkets gain dominance over local producers",
        "Home gardening expands as people store seasonal harvests",
        "Regional cuisines become more distinct and insulated"
      ],
      correctIndex: 1,
      explanation: "Large, infrequent shopping trips favor scale. Supermarkets, standardized products, and national brands outperform small local vendors — quietly reshaping diets, advertising, and food culture."
    }
  ]
},

{
  id: 7,
  title: "Standardized Testing Reshapes Education",
  events: [
    {
      event: "1960s–2000s: Standardized testing expands and becomes central to school accountability",
      options: [
        "Schools treat test scores as one of many minor performance indicators",
        "Test scores become the primary metric used to judge schools, teachers, and districts",
        "Testing remains limited to college-bound students only",
        "Curricula diversify as schools experiment with alternative assessments"
      ],
      correctIndex: 1,
      explanation: "As standardized tests became tied to funding, evaluations, and public rankings, they shifted from diagnostic tools into the primary metric by which schools were judged."
    },
    {
      event: "School funding, evaluations, and public rankings hinge on test performance",
      options: [
        "Schools invest equally across all subjects to raise overall educational quality",
        "Instructional time shifts toward tested subjects like math and reading",
        "Arts and electives expand as schools seek to differentiate themselves",
        "Class sizes shrink uniformly across all subjects"
      ],
      correctIndex: 1,
      explanation: "When scores determine consequences, schools optimize for them. Time, staffing, and resources increasingly flow toward tested subjects, especially math and reading."
    },
    {
      event: "Instructional time concentrates on tested subjects",
      options: [
        "Art and music participation rises as enrichment becomes a priority",
        "Art and music offerings decline measurably across U.S. public schools",
        "Creative subjects remain stable due to federal protections",
        "Extracurricular arts replace in-school instruction without overall loss"
      ],
      correctIndex: 1,
      explanation: "The decline is measurable. Between 2000 and 2010, the share of U.S. elementary schools offering music instruction fell by roughly 20%, and visual arts offerings dropped by about 16%. Schools serving low-income students experienced the largest cuts, as resources were redirected toward tested subjects."
    }
  ]
},

{
  id:  8,
  title: "Draining the Everglades",
  events: [
    {
      event:  "1948: Army Corps of Engineers begins draining Florida's Everglades for development",
      options:  [
        "Wildlife populations thrive in new habitat",
        "Everglades shrink to half their original size",
        "Drainage project fails due to flooding",
        "Local communities successfully oppose the project"
      ],
      correctIndex:  1,
      explanation: "The drainage project was an engineering success — canals diverted water, and the Everglades shrank from 4 million acres to under 2 million."
    },
    {
      event:  "Everglades shrink by half, development expands",
      options: [
        "Freshwater supply increases for residents",
        "Saltwater intrudes into freshwater aquifers",
        "Wildlife adapts easily to new conditions",
        "Flooding problems are permanently solved"
      ],
      correctIndex:  1,
      explanation: "Without the Everglades filtering and storing freshwater, saltwater from the ocean began intruding into underground aquifers — threatening Miami's drinking water."
    },
    {
      event:  "Saltwater threatens South Florida's drinking water supply",
      options:  [
        "Residents switch entirely to bottled water",
        "Massive $10 billion Everglades restoration project launched",
        "Desalination plants completely solve the problem",
        "Population relocates away from South Florida"
      ],
      correctIndex:  1,
      explanation: "Congress authorized a $10+ billion Everglades restoration project — one of the largest environmental restoration efforts ever, attempting to undo decades of damage."
    }
  ]
},
{
  id: 9,
  title: "The Suez Canal Opens",
  events:  [
    {
      event: "1869: Suez Canal opens, connecting Mediterranean Sea to Red Sea",
      options: [
        "Trade routes remain centered around Africa",
        "Marine species begin migrating between the two seas",
        "Ship traffic has minimal environmental impact",
        "The seas maintain separate ecosystems indefinitely"
      ],
      correctIndex:  1,
      explanation: "The canal created the first water connection between the Mediterranean and Red Sea in millions of years — allowing marine species to swim between them."
    },
    {
      event: "Marine species begin migrating between Mediterranean and Red Sea",
      options: [
        "Both ecosystems absorb new species without disruption",
        "Species from the warmer sea outcompete native species in the cooler sea",
        "Migration flows equally in both directions",
        "Native species quickly adapt to new competitors"
      ],
      correctIndex: 1,
      explanation: "Red Sea species, adapted to warmer and saltier water, proved more competitive.  Hundreds of species invaded the Mediterranean in what scientists call 'Lessepsian migration.'"
    },
    {
      event:  "Invasive species flood into Mediterranean, outcompeting natives",
      options:  [
        "Fishing yields increase from new species diversity",
        "Native Mediterranean species and fishing industries decline",
        "Ecosystem reaches a new stable balance within years",
        "Invasive species remain confined to areas near the canal"
      ],
      correctIndex: 1,
      explanation: "Native Mediterranean species face severe competition.  Venomous lionfish, poisonous pufferfish, and aggressive species have disrupted fishing and ecosystems across the eastern Mediterranean."
    }
  ]
},
{
  id: 10,
  title: "The Dishwasher Liberation",
  events: [
    {
      event: "Post–WWII: Dishwashers, washing machines, and other labor-saving appliances spread rapidly",
      options: [
        "Household labor hours fall sharply as chores become automated",
        "Standards for cleanliness and frequency rise (more laundry, cleaner dishes)",
        "Domestic work disappears as families rely on services instead",
        "Appliances are rarely adopted outside wealthy households"
      ],
      correctIndex: 1,
      explanation: "By making chores faster and easier, appliances raised expectations. Clothes were washed more often, dishes were used more freely, and standards of cleanliness increased."
    },
    {
      event: "Standards for cleanliness and frequency rise (more laundry, cleaner dishes)",
      options: [
        "People do fewer chores overall since the work is easier",
        "Higher standards offset much of the time saved per task",
        "Households shift responsibility entirely to children",
        "Meals become simpler to reduce remaining work"
      ],
      correctIndex: 1,
      explanation: "As expectations rose, households did more total tasks. Efficiency gains were reinvested into higher standards rather than into leisure."
    },
    {
      event: "Higher standards offset much of the time saved per task",
      options: [
        "Total household labor hours drop dramatically over the century",
        "Total household labor hours remain surprisingly flat over decades",
        "Domestic labor disappears from time-use surveys",
        "Housework shifts entirely to paid domestic workers"
      ],
      correctIndex: 1,
      explanation: "Time-use studies show this clearly. Despite major appliance adoption, average weekly housework hours stayed near ~50 hours for women through the mid-20th century, and declined far less than technology alone would predict."
    }
  ]
},
{
  id: 11,
  title: "The Highway Boom Backfires",
  events: [
    {
      event: "1950s–1970s: Massive investment in urban highways to reduce traffic congestion",
      options: [
        "Congestion falls permanently as road capacity increases",
        "Traffic initially eases but congestion soon returns",
        "Car usage declines as driving becomes less stressful",
        "Public transit replaces driving as cities expand"
      ],
      correctIndex: 1,
      explanation: "New highways often provide short-term relief, but congestion tends to return within a few years as driving becomes more attractive."
    },
    {
      event: "Easier driving reduces travel time and inconvenience",
      options: [
        "People maintain the same driving habits and routes",
        "More people choose to drive, and existing drivers travel farther",
        "Drivers shift permanently to off-peak travel times",
        "Households abandon cars due to improved road efficiency"
      ],
      correctIndex: 1,
      explanation: "When roads feel faster, people respond: they drive more often, live farther from work, and make trips that were previously too inconvenient."
    },
    {
      event: "Driving volume rises in response to new capacity",
      options: [
        "Congestion remains lower due to expanded infrastructure",
        "Congestion returns to near previous levels despite wider roads",
        "Traffic volume stabilizes while commute times shrink",
        "Urban density increases as highways attract development"
      ],
      correctIndex: 1,
      explanation: "Empirical studies show that vehicle miles traveled increase nearly one-for-one with highway capacity. Over time, congestion returns — a phenomenon known as induced demand."
    }
  ]
},
{
  id: 12,
  title: "The Refrigerated Railroad Car",
  events: [
    {
      event: "1880s:  Refrigerated railroad cars allow meat to be shipped long distances without spoiling",
      options: [
        "Local slaughterhouses remain dominant in every city",
        "Meatpacking centralizes in a few major hubs",
        "Meat consumption declines as prices rise",
        "Railroads refuse to carry perishable goods"
      ],
      correctIndex: 1,
      explanation: "Before refrigeration, every city needed local slaughterhouses.  With refrigerated cars, meatpacking concentrated in Chicago and Kansas City where cattle arrived by rail — then shipped nationwide."
    },
    {
      event:  "Meatpacking industry concentrates in Chicago and a few midwestern cities",
      options: [
        "Workers gain bargaining power due to specialized skills",
        "A small number of companies dominate the entire meat supply",
        "Competition increases as more firms enter the market",
        "Meat prices rise due to transportation costs"
      ],
      correctIndex:  1,
      explanation:  "Centralization led to consolidation.  By 1900, four companies controlled most of America's meat supply — the original 'Big Four' meatpackers wielded enormous market power."
    },
    {
      event: "A few giant meatpacking companies control the nation's meat supply",
      options: [
        "Food quality improves due to standardization",
        "Public outcry leads to federal food safety regulation",
        "Prices drop and no further issues emerge",
        "Local farming becomes more profitable"
      ],
      correctIndex: 1,
      explanation: "Concentrated, unsanitary conditions drew public outrage — Upton Sinclair's 'The Jungle' exposed the industry.  Congress passed the Meat Inspection Act and Pure Food and Drug Act in 1906."
    }
  ]
},
{
  id: 13,
  title: "Google Kills the Yellow Pages",
  events:  [
    {
      event: "1998: Google's PageRank algorithm makes web search actually useful",
      options: [
        "Other search engines quickly catch up",
        "People can suddenly find any information online",
        "Users prefer older search methods like directories",
        "Google remains a small academic project"
      ],
      correctIndex: 1,
      explanation: "Before Google, finding information online was frustrating. PageRank made search results actually relevant — suddenly the internet was navigable."
    },
    {
      event: "Web search becomes fast and reliable",
      options:  [
        "Print encyclopedias and Yellow Pages sales increase",
        "Print reference materials become obsolete",
        "Libraries see increased visitor traffic",
        "People still prefer phone directories"
      ],
      correctIndex:  1,
      explanation: "Why flip through Yellow Pages when you could Google it? Encyclopedia Britannica ended its print edition in 2012 after 244 years.  Phone books became recycling material."
    },
    {
      event: "Print directories and encyclopedias become obsolete",
      options: [
        "Newspapers thrive on print subscriptions",
        "Newspapers lose classified ad revenue to Craigslist and Google",
        "Print advertising revenue increases",
        "Local journalism expands significantly"
      ],
      correctIndex: 1,
      explanation: "Classified ads were newspapers' profit engine.  Craigslist and Google captured that revenue, triggering newspaper bankruptcies and the collapse of local journalism."
    }
  ]
},
{
  id: 14,
  title: "Digital Music Disrupts the Record Industry",
  events: [
    {
      event: "Late 1990s:  Peer-to-peer file sharing allows free music downloading over the internet",
      options: [
        "Music consumption decreases as quality suffers",
        "Millions download music for free, album sales plummet",
        "Record labels capture new digital revenue streams",
        "Artists earn more from direct fan access"
      ],
      correctIndex: 1,
      explanation: "File sharing reached tens of millions of users.  For the first time, anyone could download almost any song for free — devastating traditional music industry sales."
    },
    {
      event: "Free downloading becomes widespread, recorded music revenue collapses",
      options: [
        "Artists stop producing new music",
        "Music industry pursues legal action and anti-piracy technology",
        "Consumers voluntarily return to paying for music",
        "Live concert revenue declines alongside recordings"
      ],
      correctIndex: 1,
      explanation: "The industry fought back with lawsuits and digital rights management (DRM). But legal battles couldn't stop the technology — piracy continued through new platforms."
    },
    {
      event: "Legal action fails to stop piracy, industry seeks new models",
      options:  [
        "Physical album sales recover as nostalgia grows",
        "Subscription streaming emerges as the new revenue model",
        "Music becomes completely free with no monetization",
        "Radio becomes the dominant music distribution method"
      ],
      correctIndex:  1,
      explanation: "The industry realized it had to compete with free.  Subscription streaming services emerged, offering convenience and legality — eventually becoming the industry's primary revenue source."
    }
  ]
},
{
  id: 15,
  title: "The Green Revolution",
  events:  [
    {
      event: "1960s: High-yield wheat and rice varieties are introduced to developing nations",
      options: [
        "Crop yields stay flat due to poor soil conditions",
        "Food production doubles or triples in adopting countries",
        "Farmers reject new seeds as too expensive",
        "Only wealthy nations benefit from new varieties"
      ],
      correctIndex: 1,
      explanation: "New dwarf wheat and rice varieties produced 2-3x more grain per acre.  India went from famine conditions to food self-sufficiency within two decades."
    },
    {
      event: "Crop yields soar, preventing predicted mass famines",
      options: [
        "Population growth slows as food security improves",
        "Population growth accelerates as food becomes abundant",
        "Agricultural land use decreases significantly",
        "Farmers return to traditional seed varieties"
      ],
      correctIndex:  1,
      explanation: "More food meant fewer famines and lower infant mortality. World population grew from 3 billion in 1960 to 6 billion by 2000 — the food supply kept pace."
    },
    {
      event: "Population booms in countries with new high-yield crops",
      options: [
        "Soil and water resources remain unaffected",
        "Aquifers deplete and soil degrades from intensive farming",
        "Farmers need fewer chemical inputs over time",
        "Agricultural employment increases dramatically"
      ],
      correctIndex: 1,
      explanation: "High-yield crops required heavy irrigation and fertilizers. Aquifers in India and China began depleting rapidly, and soil degradation became a long-term crisis."
    }
  ]
},
{
  id: 16,
  title: "Prohibition Creates Organized Crime",
  events: [
    {
      event: "1920: 18th Amendment bans the sale of alcohol in the United States",
      options: [
        "Americans stop drinking alcohol",
        "Illegal speakeasies and bootleggers emerge",
        "Crime rates decrease significantly",
        "Alcohol consumption is easily eliminated"
      ],
      correctIndex: 1,
      explanation: "Demand for alcohol didn't disappear — it went underground. Speakeasies (hidden bars) popped up everywhere, supplied by bootleggers running illegal alcohol."
    },
    {
      event: "Speakeasies and bootleggers fill the demand for illegal alcohol",
      options: [
        "Small-time criminals run the trade",
        "Organized crime syndicates take control",
        "Police easily shut down the operations",
        "Alcohol prices decrease"
      ],
      correctIndex: 1,
      explanation:  "The massive profits attracted organized crime.  Al Capone's empire made $60 million annually from bootlegging alone — crime became industrialized."
    },
    {
      event: "Organized crime grows wealthy and powerful from bootlegging",
      options: [
        "Crime disappears when Prohibition ends",
        "FBI is expanded to combat organized crime",
        "Criminals voluntarily stop operations",
        "Local police handle all enforcement"
      ],
      correctIndex:  1,
      explanation: "J. Edgar Hoover's FBI grew specifically to combat organized crime that Prohibition had empowered. Even after repeal in 1933, the crime syndicates had diversified."
    }
  ]
},
{
  id: 17,
  title: "Barcodes Create Modern Retail",
  events: [
    {
      event: "1970s–1980s: Barcodes and scanners are adopted across U.S. retail",
      options: [
        "Barcodes mainly speed up checkout with little impact beyond convenience",
        "Retailers gain precise, real-time data on prices, inventory, and sales",
        "Scanning technology remains too expensive for widespread use",
        "Small shops benefit more than large chains from automation"
      ],
      correctIndex: 1,
      explanation: "Barcodes didn't just speed up checkout — they turned every transaction into data. For the first time, retailers could see exactly what was selling, when, and where."
    },
    {
      event: "Retailers gain precise, real-time data on prices, inventory, and sales",
      options: [
        "Stores maintain similar sizes but operate more efficiently",
        "Inventory costs fall as stores optimize stocking and reduce overordering",
        "Retailers rely more heavily on supplier intuition than data",
        "Product variety shrinks as stores simplify offerings"
      ],
      correctIndex: 1,
      explanation: "With accurate, item-level data, retailers dramatically reduced stockouts and excess inventory. Inventory accuracy rose from roughly 65% to over 95%, cutting carrying costs."
    },
    {
      event: "Inventory costs fall as stores optimize stocking and reduce overordering",
      options: [
        "Small neighborhood stores gain a lasting competitive edge",
        "Large-format stores and national chains gain scale advantages",
        "Retail decentralizes into smaller, specialized shops",
        "Retail employment collapses across all roles"
      ],
      correctIndex: 1,
      explanation: "Lower inventory and labor costs reward scale. Large chains and big-box stores could offer lower prices and wider selection, driving consolidation — average supermarket size more than doubled after barcode adoption."
    }
  ]
},
{
  id: 18,
  title: "ATMs Increase Bank Branches",
  events: [
    {
      event: "1970s–1980s: Automated Teller Machines (ATMs) spread across the banking system",
      options: [
        "Bank branches become obsolete as customers switch entirely to self-service",
        "Banks dramatically reduce staffing needs for routine transactions",
        "Customers abandon banks in favor of cash-only alternatives",
        "ATMs remain niche due to low consumer trust"
      ],
      correctIndex: 1,
      explanation: "ATMs automated routine tasks like cash withdrawals and balance checks, sharply reducing the labor required to operate a bank branch."
    },
    {
      event: "Banks dramatically reduce staffing needs for routine transactions",
      options: [
        "Banks consolidate into fewer, larger flagship branches",
        "Routine banking becomes cheaper to provide per location",
        "Banks maintain the same number of branches but cut hours",
        "Banks shift entirely to phone-based banking"
      ],
      correctIndex: 1,
      explanation: "With fewer tellers required per branch, the cost of running each location dropped substantially, changing the economics of physical banking."
    },
    {
      event: "Routine banking becomes cheaper to provide per location",
      options: [
        "The total number of bank branches declines steadily",
        "The total number of bank branches increases significantly",
        "Branch counts remain flat despite population growth",
        "Banking becomes almost entirely online"
      ],
      correctIndex: 1,
      explanation: "Lower costs made smaller branches economically viable. Instead of closing branches, banks expanded into more neighborhoods — U.S. branch counts rose by roughly 40% between the mid-1970s and early 2000s."
    }
  ]
},
{
  id:  19,
  title: "Airline Deregulation",
  events: [
    {
      event: "1978:  Airline Deregulation Act allows airlines to set their own routes and prices",
      options:  [
        "Airlines keep prices the same",
        "New airlines emerge to compete on price",
        "Only major airlines survive",
        "Air travel decreases significantly"
      ],
      correctIndex: 1,
      explanation: "Deregulation sparked a wave of new airlines — People Express, Southwest, JetBlue — competing on price for the first time.  Airfare became affordable for average Americans."
    },
    {
      event: "New budget airlines compete, ticket prices drop significantly",
      options:  [
        "All airlines remain profitable",
        "Weaker airlines go bankrupt or merge",
        "Airlines maintain high service levels",
        "Competition decreases over time"
      ],
      correctIndex:  1,
      explanation: "Intense competition meant razor-thin margins. Airlines that couldn't compete went bankrupt — Pan Am, TWA, Eastern.  Survivors merged to gain scale."
    },
    {
      event: "Airlines consolidate through bankruptcies and mergers",
      options:  [
        "Dozens of major airlines remain",
        "Four airlines control 80% of US market",
        "New airlines continue to emerge easily",
        "Prices return to pre-deregulation levels"
      ],
      correctIndex: 1,
      explanation: "By 2024, American, Delta, United, and Southwest controlled about 80% of the domestic market.  Prices dropped overall, but consolidation reduced competition."
    }
  ]
},
{
  id: 20,
  title: "The Gold Rush Gender Imbalance",
  events: [
    {
      event: "1849: California Gold Rush draws hundreds of thousands of men, but few women migrate",
      options: [
        "Gender balance quickly normalizes as families follow",
        "Extreme gender imbalance emerges in western territories",
        "Women migrate at equal rates seeking opportunity",
        "Men return east after failing to find gold"
      ],
      correctIndex: 1,
      explanation: "By 1850, California's population was over 90% male. Mining towns, lumber camps, and frontier territories had extreme shortages of women for decades."
    },
    {
      event: "Western territories have dramatic shortages of women",
      options: [
        "Women remain in traditional domestic roles",
        "Women gain economic and political power in scarcity",
        "Gender roles become more rigid to attract women",
        "Marriage rates decline as men give up searching"
      ],
      correctIndex: 1,
      explanation: "Scarcity meant bargaining power. Women in the West could demand more from suitors. Wyoming granted women voting rights in 1869 — partly to attract female settlers."
    },
    {
      event: "Women's scarcity gives them unusual leverage in western territories",
      options: [
        "Domestic tasks remain exclusively women's work",
        "Commercial laundries and restaurants boom to fill domestic gaps",
        "Men import goods from eastern states instead",
        "Household labor becomes less valuable"
      ],
      correctIndex: 1,
      explanation: "With few wives to cook and clean, entrepreneurs filled the gap. Commercial laundries, restaurants, and boarding houses became massive industries — work that was unpaid in the East became paid labor in the West."
    }
  ]
},
{
  id: 21,
  title:  "The Elevator Makes Skyscrapers Possible",
  events: [
    {
      event: "1850s: Elisha Otis invents the safety elevator, preventing deadly falls",
      options: [
        "Buildings remain limited to 5-6 stories",
        "Upper floors become desirable real estate for the first time",
        "Ground floors become more valuable",
        "Stairs remain preferred for their reliability"
      ],
      correctIndex: 1,
      explanation: "Before safe elevators, nobody wanted to climb above the fifth floor. Suddenly penthouses became premium real estate — height meant status, not inconvenience."
    },
    {
      event:   "Upper floors become premium real estate, developers build upward",
      options:  [
        "Cities spread outward to accommodate growth",
        "Land values in city centers skyrocket as density increases",
        "Building heights stay modest due to construction costs",
        "Residents prefer low-rise neighborhoods"
      ],
      correctIndex:  1,
      explanation: "If you can build 50 stories instead of 5, the same plot of land becomes 10x more valuable. Downtown real estate prices soared as skyscrapers rose."
    },
    {
      event:  "City centers become dense clusters of skyscrapers",
      options:   [
        "Population spreads evenly across metro areas",
        "Commuting patterns emerge as workers travel into dense cores",
        "Walking remains the primary way to get to work",
        "Businesses relocate away from expensive downtown areas"
      ],
      correctIndex:  1,
      explanation: "Dense downtowns meant millions of jobs concentrated in small areas.  Subways, commuter rails, and highways emerged to move workers in and out each day."
    }
  ]
},
{
  id: 22,
  title: "Indonesia's Nickel Export Ban",
  events:  [
    {
      event: "2014: Indonesia bans raw nickel ore exports to build domestic smelting industry",
      options:  [
        "Global nickel prices remain stable",
        "Global nickel supply tightens significantly",
        "Other countries easily replace Indonesian nickel",
        "Indonesia reverses the ban immediately"
      ],
      correctIndex: 1,
      explanation: "Indonesia had the world's largest nickel reserves.  Banning raw exports forced buyers to source elsewhere or build smelters in Indonesia — tightening global supply."
    },
    {
      event: "Global nickel supply tightens as Indonesia restricts exports",
      options: [
        "Electric vehicle batteries are unaffected",
        "EV battery costs increase due to nickel prices",
        "Automakers find nickel alternatives easily",
        "Indonesia's policy has no effect on EVs"
      ],
      correctIndex:  1,
      explanation: "Nickel is critical for EV battery cathodes. Tighter supply meant higher costs for Tesla, Volkswagen, and every automaker racing to build electric vehicles."
    },
    {
      event: "EV battery costs rise, automakers scramble for nickel sources",
      options:  [
        "Automakers accept higher costs indefinitely",
        "Deep-sea mining proposals accelerate to find new sources",
        "Electric vehicle production stops",
        "Nickel is easily replaced in batteries"
      ],
      correctIndex: 1,
      explanation: "Companies began exploring deep-sea mining of nickel nodules on the ocean floor. Indonesia's trade policy accelerated controversial seabed mining proposals."
    }
  ]
},
{
  id:  23,
  title: "The Ever Given Blocks the Suez Canal",
  events:  [
    {
      event: "March 2021: Container ship Ever Given runs aground, blocking the Suez Canal",
      options: [
        "Ship is freed within hours",
        "Global shipping is delayed, $9 billion in goods stuck daily",
        "Ships easily reroute around Africa",
        "Only local Egyptian trade is affected"
      ],
      correctIndex: 1,
      explanation: "The Ever Given blocked one of the world's busiest trade routes for 6 days. Over 400 ships were stuck, with $9.6 billion in goods delayed each day."
    },
    {
      event: "$9 billion in goods delayed daily as ships wait",
      options: [
        "Factories worldwide continue operating normally",
        "European factories halt production waiting for parts",
        "Companies have plenty of inventory buffer",
        "Shipping delays only affect luxury goods"
      ],
      correctIndex:  1,
      explanation: "Factories running on 'just-in-time' inventory had no buffer. European auto plants and manufacturers halted production as essential parts sat on stuck ships."
    },
    {
      event: "Just-in-time supply chains prove fragile",
      options: [
        "Companies continue just-in-time practices unchanged",
        "Companies begin reshoring and building inventory buffers",
        "Global shipping becomes more efficient",
        "Supply chain concerns disappear after ship is freed"
      ],
      correctIndex: 1,
      explanation: "The crisis exposed supply chain fragility. Companies began 'reshoring' production, building larger inventories, and diversifying shipping routes — reversing decades of just-in-time orthodoxy."
    }
  ]
},
{
  id: 24,
  title: "The 401(k) Shifts Retirement Risk",
  events: [
    {
      event: "1980s–1990s: Employers shift from pensions to 401(k)-style retirement plans",
      options: [
        "Retirement benefits remain predictable regardless of market performance",
        "Investment responsibility shifts from employers to individual workers",
        "Most workers opt out of retirement saving entirely",
        "Government replaces private retirement plans with public programs"
      ],
      correctIndex: 1,
      explanation: "Traditional pensions promised fixed benefits paid by employers. 401(k)s flipped this model, making workers responsible for contribution rates, asset allocation, and market risk."
    },
    {
      event: "Workers become responsible for saving and investing their retirement funds",
      options: [
        "Most workers invest optimally and achieve similar retirement outcomes",
        "Retirement outcomes become more unequal across income and education levels",
        "Average retirement wealth rises uniformly across the population",
        "Market participation declines as workers avoid financial risk"
      ],
      correctIndex: 1,
      explanation: "Participation rates, contribution levels, and investment choices vary widely. Higher-income and more financially literate workers benefit disproportionately, increasing inequality in retirement outcomes."
    },
    {
      event: "Retirement security depends heavily on individual behavior and market timing",
      options: [
        "Economic shocks have little effect on retirement readiness",
        "Market downturns directly impact when and whether people can retire",
        "Employers resume offering pensions to stabilize outcomes",
        "Retirement age becomes fixed and predictable"
      ],
      correctIndex: 1,
      explanation: "Because retirement wealth is tied to market performance, recessions and crashes can delay retirement for millions. Events like the 2000 dot-com crash and 2008 financial crisis had lasting effects on retirement timing."
    }
  ]
},
{
  id: 25,
  title: "New Zealand Caps Fishing, Fish Farming Explodes",
  events: [
    {
      event: "1986: New Zealand introduces strict catch limits through an Individual Transferable Quota (ITQ) system",
      options: [
        "Wild fish stocks continue declining despite the new limits",
        "Commercial fishing pressure on wild stocks drops significantly",
        "Fishing activity shifts immediately to illegal and unreported catch",
        "Seafood exports collapse due to lower allowable harvests"
      ],
      correctIndex: 1,
      explanation: "New Zealand's ITQ system set enforceable caps on total allowable catch. Evidence suggests it reduced overfishing pressure and helped stabilize or rebuild several targeted fisheries."
    },
    {
      event: "Commercial fishing pressure on wild stocks drops significantly",
      options: [
        "Global seafood demand collapses because fish becomes scarce",
        "Wild-caught fish supply becomes tightly constrained by catch limits",
        "Prices fall because consumers switch away from seafood",
        "Governments everywhere copy the policy within a year"
      ],
      correctIndex: 1,
      explanation: "When you cap harvest, you cap supply. Even if stocks recover, the quota system limits how much wild fish can be taken each year — constraining wild-catch growth."
    },
    {
      event: "Wild-caught fish supply becomes tightly constrained by catch limits",
      options: [
        "The world permanently eats less seafood overall",
        "Producers look for alternative ways to meet growing seafood demand",
        "Wild fisheries expand rapidly to meet demand anyway",
        "Seafood becomes a luxury product and disappears from diets"
      ],
      correctIndex: 1,
      explanation: "Global demand for seafood kept rising. With wild supply capped, producers and investors had a strong incentive to find scalable substitutes rather than accept a permanent shortage."
    },
    {
      event: "Producers look for alternative ways to meet growing seafood demand",
      options: [
        "Wild fisheries expand sustainably fast enough to keep up",
        "Aquaculture (fish farming) expands rapidly worldwide",
        "Synthetic seafood replaces fish within a decade",
        "International seafood trade collapses"
      ],
      correctIndex: 1,
      explanation: "Aquaculture scaled to fill the gap. Over the past few decades, farmed fish output has surged and now supplies roughly half (or more) of seafood consumed globally — a structural shift driven by rising demand colliding with capped wild catch."
    }
  ]
},
{
  id: 26,
  title: "The Credit Card Revolution",
  events: [
    {
      event:  "1950s:  Credit cards emerge, allowing consumers to pay without carrying cash",
      options: [
        "Consumer spending patterns remain unchanged",
        "Consumers begin spending more freely without immediate payment",
        "Savings rates increase as people track spending better",
        "Cash transactions become more popular for security"
      ],
      correctIndex: 1,
      explanation: "Credit cards psychologically separated buying from paying. Purchases felt less 'real' without handing over cash — consumer spending patterns shifted dramatically."
    },
    {
      event:  "'Buy now, pay later' becomes normalized consumer behavior",
      options: [
        "Consumers maintain low debt levels through discipline",
        "Household debt levels rise dramatically over decades",
        "Interest rates drop as lending risk decreases",
        "Credit becomes harder to obtain over time"
      ],
      correctIndex:  1,
      explanation: "Average US household debt rose from near zero in 1950 to over $100,000 by 2020. Easy credit fundamentally changed how Americans finance their lifestyles."
    },
    {
      event: "Consumer debt becomes a normal part of household finances",
      options: [
        "Economic downturns have less impact on households",
        "Consumer spending becomes more vulnerable to economic shocks",
        "Bankruptcy rates decline as credit access improves",
        "Household savings rates increase to offset debt"
      ],
      correctIndex:  1,
      explanation: "High debt loads meant households had less cushion.  When recessions hit, indebted consumers cut spending sharply — amplifying economic downturns like 2008."
    }
  ]
},
{
  id: 27,
  title: "The TV Dinner Changes Family Life",
  events: [
    {
      event:  "1950s:  Frozen TV dinners offer complete meals requiring no cooking",
      options:  [
        "Home cooking skills become more valued and taught",
        "Time spent on meal preparation drops dramatically",
        "Families eat more meals together due to convenience",
        "Processed food remains a small niche market"
      ],
      correctIndex: 1,
      explanation: "Swanson sold 10 million TV dinners in the first year.  Working families embraced the convenience — dinner could be ready in 25 minutes with no preparation."
    },
    {
      event:  "Convenience meals reduce time families spend preparing food together",
      options:  [
        "Families gather at dining tables with more free time",
        "Eating shifts from dining tables to living rooms",
        "Family conversation increases during shorter meals",
        "Meal times become more structured and formal"
      ],
      correctIndex: 1,
      explanation: "The 'TV Dinner' was named because it came in a tray designed for eating while watching TV.   Family dinners at the table began declining."
    },
    {
      event:  "Families eat in front of televisions instead of dining tables",
      options: [
        "Television viewing hours remain limited",
        "Television becomes the center of home life and leisure",
        "Families seek more interactive entertainment together",
        "Meal portions decrease due to distracted eating"
      ],
      correctIndex: 1,
      explanation: "The living room replaced the dining room as the family gathering place. Average TV viewing grew to over 4 hours per day — advertisers gained unprecedented access to family attention."
    }
  ]
},
{
  id: 28,
  title:  "The Surgeon General vs. Cigarettes",
  events: [
    {
      event: "1964: Surgeon General officially declares cigarettes cause cancer",
      options: [
        "Cigarette sales increase as publicity spreads",
        "Congress bans cigarette advertising on TV and radio",
        "Tobacco companies accept the findings",
        "No regulatory action is taken"
      ],
      correctIndex:  1,
      explanation: "The report led to the Public Health Cigarette Smoking Act of 1970, banning cigarette ads from TV and radio — the first major blow to tobacco marketing."
    },
    {
      event: "Cigarette ads banned from American television",
      options: [
        "Tobacco companies stop marketing entirely",
        "Tobacco companies aggressively target developing nations",
        "Smoking rates drop to zero in the US",
        "Tobacco industry shrinks globally"
      ],
      correctIndex: 1,
      explanation: "Blocked from US airways, tobacco companies pivoted to Asia, Africa, and Latin America — where regulations were weak and markets were huge."
    },
    {
      event: "Tobacco marketing shifts to developing nations",
      options: [
        "Global smoking rates decline",
        "Smoking rates soar in developing countries",
        "Developing nations ban tobacco immediately",
        "Tobacco companies abandon international markets"
      ],
      correctIndex:  1,
      explanation: "By 2020, 80% of the world's smokers lived in low- and middle-income countries.  US regulations pushed the health crisis overseas rather than ending it."
    }
  ]
},
{
  id: 29,
  title: "The Rise of 24-Hour News",
  events: [
    {
      event: "1980: First 24-hour television news network launches",
      options:  [
        "Audiences prefer scheduled evening news programs",
        "News must now fill 24 hours instead of 30-minute broadcasts",
        "News quality improves with more time for reporting",
        "Viewership remains concentrated in prime time slots"
      ],
      correctIndex: 1,
      explanation: "Suddenly news had 24 hours to fill, not just the evening 30-minute slot. This fundamental shift changed what counted as 'news' and how it was presented."
    },
    {
      event: "Networks must fill 24 hours with content to retain viewers",
      options: [
        "In-depth investigative journalism expands",
        "News becomes more entertainment-focused to attract viewers",
        "Audiences become better informed on complex issues",
        "Viewership spreads evenly across all hours"
      ],
      correctIndex: 1,
      explanation: "To fill airtime and attract viewers, news became more sensational and entertainment-focused. Opinion segments, debates, and speculation filled the hours between breaking stories."
    },
    {
      event: "News blends with entertainment, opinion fills airtime",
      options: [
        "News cycles slow down as stories are covered thoroughly",
        "News cycles accelerate to minute-by-minute coverage",
        "Audiences seek out slower, more deliberate news sources",
        "Advertising revenue declines due to fragmented attention"
      ],
      correctIndex: 1,
      explanation: "To keep viewers watching, everything became urgent. The news cycle accelerated from daily to hourly to minute-by-minute — creating a sense of perpetual breaking news."
    }
  ]
},
{
  id: 30,
  title: "Online Dating Transforms Romance",
  events: [
    {
      event: "1995: Match.com launches, pioneering online dating",
      options: [
        "Online dating remains stigmatized for decades",
        "Meeting partners online slowly becomes normalized",
        "People prefer meeting only through friends",
        "Match.com fails to attract users"
      ],
      correctIndex: 1,
      explanation: "Early online dating carried stigma, but it worked. By the 2000s, millions had tried it.  By the 2010s, it was unremarkable.  By 2020, it was dominant."
    },
    {
      event: "Meeting romantic partners online becomes mainstream",
      options:  [
        "People continue marrying their high school sweethearts",
        "Average marriage age increases as options multiply",
        "Dating becomes simpler with fewer choices",
        "Local dating pools remain unchanged"
      ],
      correctIndex: 1,
      explanation: "With access to more potential partners, people spent longer searching for the 'right' one. Average marriage age rose from 23 to 30 over two decades."
    },
    {
      event: "More choices lead to longer searches and later marriages",
      options: [
        "Most couples still meet through friends or work",
        "Dating apps become the most common way couples meet",
        "Online dating declines in popularity",
        "Meeting strangers online becomes less common"
      ],
      correctIndex:  1,
      explanation: "By 2020, dating apps surpassed friends, work, and school as the most common way couples meet. A 1995 website fundamentally rewired human romance."
    }
  ]
},
{
  id: 31,
  title:  "The Box That Changed Trade",
  events: [
    {
      event: "1956: Standardized shipping containers are introduced, replacing manual cargo loading",
      options:  [
        "Shipping costs rise due to new equipment investment",
        "Shipping costs collapse as loading time drops from days to hours",
        "Labor unions gain power as shipping volumes increase",
        "Smaller ships become more economical than large vessels"
      ],
      correctIndex: 1,
      explanation: "Before containers, loading a ship took days of manual labor.  Standardized boxes could be loaded in hours — slashing costs by up to 90%."
    },
    {
      event: "Shipping costs collapse, moving goods across oceans becomes trivially cheap",
      options:  [
        "Manufacturing clusters near consumers to reduce delivery time",
        "Factories relocate to wherever labor is cheapest worldwide",
        "Domestic production becomes more competitive",
        "Trade volumes decrease as fewer shipments are needed"
      ],
      correctIndex: 1,
      explanation: "When shipping costs became trivial, geography mattered less. Factories moved to wherever labor was cheapest — enabling the globalized manufacturing we know today."
    },
    {
      event: "Manufacturing moves to lowest-cost countries across the globe",
      options: [
        "Ports shrink as fewer but larger shipments arrive",
        "Mega-ports emerge in strategic coastal cities",
        "Inland cities become new centers of trade",
        "Air freight replaces ocean shipping for most goods"
      ],
      correctIndex:  1,
      explanation: "Containerization required massive cranes and deep harbors. Cities like Singapore, Rotterdam, and Long Beach became mega-ports, while older ports that couldn't adapt declined."
    }
  ]
},
{
  id: 32,
  title: "The Wolves",
  events: [
    {
      event:  "1995: Wolves are reintroduced to Yellowstone after 70-year absence",
      options: [
        "Elk populations immediately collapse from predation",
        "Elk change their grazing behavior to avoid predators",
        "Vegetation declines as wolves drive elk into new areas",
        "Prey species migrate out of the park entirely"
      ],
      correctIndex: 1,
      explanation: "Elk had grazed freely for decades without predators. With wolves back, elk became vigilant and stopped lingering in open valleys — they had to keep moving."
    },
    {
      event:  "Elk stop overgrazing riverbanks and open valleys",
      options:  [
        "Soil erosion accelerates without elk trampling",
        "Trees and shrubs regenerate along rivers",
        "Grasslands expand into former forest areas",
        "Riverbank ecosystems remain unchanged"
      ],
      correctIndex: 1,
      explanation: "Without elk constantly eating young shoots, willows and aspens grew back along riverbanks for the first time in decades.  Vegetation that had been suppressed for 70 years returned."
    },
    {
      event: "Trees and shrubs return to riverbanks after decades",
      options: [
        "Rivers widen and become shallower",
        "Rivers narrow and deepen as roots stabilize banks",
        "Flooding increases as vegetation blocks water flow",
        "Water temperature rises due to less shade"
      ],
      correctIndex: 1,
      explanation: "Root systems stabilized riverbanks, reducing erosion. Rivers that had been wide and braided became narrower and deeper — wolves had literally changed the physical geography."
    }
  ]
},
{
  id: 33,
  title: "Air Conditioning Reshapes America",
  events: [
    {
      event: "1950s:  Affordable home air conditioning becomes widely available",
      options: [
        "Housing prices rise in northern cities with mild summers",
        "Migration to hot Sun Belt states accelerates dramatically",
        "Population concentrates in temperate coastal regions",
        "Suburban sprawl slows as people stay in dense urban cores"
      ],
      correctIndex: 1,
      explanation: "Before AC, the South and Southwest were considered too hot for comfortable living. Once homes could be cooled affordably, millions moved to Arizona, Florida, and Texas."
    },
    {
      event:  "Population booms in Sun Belt states like Texas, Florida, and Arizona",
      options: [
        "Political power remains concentrated in northeastern states",
        "Political power shifts to the South and West",
        "Federal spending decreases in fast-growing states",
        "Northern states increase investment to retain residents"
      ],
      correctIndex:  1,
      explanation: "Congressional seats follow population. As millions moved south and west, states like Texas and Florida gained seats while New York and Ohio lost them — reshaping national elections."
    },
    {
      event:  "Sun Belt gains population and political power",
      options: [
        "Energy demand stays consistent year-round",
        "Summer becomes peak electricity season, straining power grids",
        "Renewable energy adoption slows in hot climates",
        "Water consumption decreases as outdoor activity drops"
      ],
      correctIndex:  1,
      explanation: "Air conditioning now consumes 6% of all US electricity. Summer became peak demand season, causing strain, blackouts, and massive infrastructure investment in Sun Belt states."
    }
  ]
},
{
  id: 34,
  title: "The Dust Bowl",
  events: [
    {
      event: "1920s: Farmers plow up millions of acres of Great Plains grassland to plant wheat",
      options:  [
        "Soil fertility increases from crop rotation",
        "Deep-rooted prairie grasses that anchored soil are destroyed",
        "Wheat yields decline due to unsuitable climate",
        "Groundwater levels rise from increased irrigation"
      ],
      correctIndex:  1,
      explanation: "Native grasses had roots reaching 5+ feet deep, anchoring the soil for thousands of years.  Wheat roots reached only inches deep, leaving topsoil vulnerable."
    },
    {
      event:  "1930s drought arrives with no deep roots holding soil in place",
      options: [
        "Farmers pivot to drought-resistant crops",
        "Massive dust storms bury farms and darken skies across the country",
        "Soil compacts and retains moisture better",
        "Drought affects only irrigated areas"
      ],
      correctIndex: 1,
      explanation: "Without roots to anchor it, topsoil simply blew away. 'Black blizzards' carried 300 million tons of soil — dust reached New York City and Washington DC, darkening skies."
    },
    {
      event:  "Dust storms devastate the Great Plains, displacing millions of people",
      options: [
        "Farming practices return to normal after rains return",
        "Federal government mandates soil conservation practices",
        "Great Plains are permanently converted to grazing land",
        "Private industry develops new farming techniques independently"
      ],
      correctIndex: 1,
      explanation: "The disaster led to federal intervention in farming practices.  Soil conservation, windbreaks, and crop rotation became standard — the government paid farmers to protect land, not just produce."
    }
  ]
},
{
  id: 35,
  title:  "The Bicycle Craze",
  events: [
    {
      event: "1890s: 'Safety bicycles' with equal-sized wheels become affordable for the masses",
      options: [
        "Bicycles remain toys for wealthy hobbyists",
        "Millions of people gain personal transportation for the first time",
        "Horse sales increase to compete with bicycles",
        "Walking remains preferred for short trips"
      ],
      correctIndex:  1,
      explanation: "Before bicycles, if you couldn't afford a horse, you walked.  Suddenly factory workers, women, and young people could travel miles on their own — freedom of movement for the masses."
    },
    {
      event: "Millions of people experience personal mobility for the first time",
      options: [
        "Cyclists use existing dirt roads without issue",
        "Cyclists demand paved roads, launching the 'Good Roads' movement",
        "Cities ban bicycles as dangerous nuisances",
        "Rural areas reject bicycle infrastructure"
      ],
      correctIndex: 1,
      explanation: "Cyclists hated muddy, rutted roads. They organized politically and demanded smooth pavement — creating the road infrastructure that automobiles would later inherit."
    },
    {
      event: "Paved roads spread across America to accommodate cyclists",
      options:  [
        "Bicycles remain the dominant personal vehicle",
        "Road infrastructure enables the automobile revolution",
        "Paved roads are limited to urban areas only",
        "Horse-drawn vehicles benefit most from new roads"
      ],
      correctIndex: 1,
      explanation: "When cars arrived, paved roads already existed thanks to cyclists. The bicycle craze built the infrastructure that made automobile adoption possible."
    }
  ]
},
{
  id: 36,
  title: "The Interstate Highway System",
  events: [
    {
      event: "1956: U.S. begins building 41,000 miles of interstate highways",
      options: [
        "Rail travel becomes more competitive for short trips",
        "Long-distance trucking becomes cheaper than rail freight",
        "City centers become more accessible and valuable",
        "Americans continue relying on trains for travel"
      ],
      correctIndex: 1,
      explanation: "Highways gave trucks a massive advantage.  Freight that once required rail scheduling could now go door-to-door by truck. Rail's share of freight dropped from 75% to under 40%."
    },
    {
      event: "Trucking dominates freight, highways enable door-to-door delivery",
      options:  [
        "Factories stay in city centers near rail depots",
        "Factories relocate to cheap land near highway exits",
        "Urban manufacturing employment grows",
        "Warehouses cluster around train stations"
      ],
      correctIndex:  1,
      explanation: "Factories no longer needed to be near rail lines or ports. They moved to suburbs and exurbs where land was cheap, as long as there was a highway exit nearby."
    },
    {
      event:  "Manufacturing and warehouses scatter to suburban highway corridors",
      options: [
        "Workers continue living near downtown factories",
        "Suburban sprawl accelerates as jobs follow highways",
        "Public transit ridership increases",
        "Downtown employment remains dominant"
      ],
      correctIndex: 1,
      explanation: "Jobs followed highways, and workers followed jobs. Suburbs exploded outward along highway corridors, creating car-dependent sprawl and hollowing out many city centers."
    }
  ]
}
];

// Get puzzle for a specific day (uses date to determine which puzzle)
export const getPuzzleForDay = (date: Date = new Date()): Puzzle => {
  const startDate = new Date('2024-01-01');
  const diffTime = Math.abs(date.getTime() - startDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const puzzleIndex = diffDays % puzzles.length;
  return { ...puzzles[puzzleIndex], id: diffDays + 1 };
};

export const getDayNumber = (date: Date = new Date()): number => {
  const startDate = new Date('2024-01-01');
  const diffTime = Math.abs(date.getTime() - startDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
};
