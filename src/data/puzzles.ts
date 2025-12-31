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
        event: "Gas prices quadruple within months",
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
        event: "Federal government mandates fuel conservation measures",
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
  id: 2,
  title: "Online Dating Reshapes How People Form Relationships",
  events: [
    {
      event: "2000s: Online dating goes mainstream, expanding access to potential partners beyond local social circles",
      options: [
        "People commit more quickly due to abundant choice",
        "People spend longer searching before committing to long-term relationships",
        "Dating remains centered around friends and family networks",
        "People form fewer romantic relationships overall"
      ],
      correctIndex: 1,
      explanation: "Greater choice and lower search costs encouraged longer partner searches. Over the past few decades, the average age at first marriage steadily increased in many countries, influenced in part by changing dating dynamics alongside education and career trends."
    },
    {
      event: "People spend longer searching before committing to long-term relationships",
      options: [
        "Romantic partnerships remain mostly within the same social and geographic circles",
        "More couples form across social, educational, and geographic boundaries",
        "Workplaces replace dating apps as the primary way people meet",
        "People rely more heavily on family-arranged introductions"
      ],
      correctIndex: 1,
      explanation: "Online platforms made it easier to meet partners outside one’s immediate social environment, increasing relationships that cross neighborhoods, regions, and educational or cultural backgrounds."
    },
    {
      event: "More couples form across social, educational, and geographic boundaries",
      options: [
        "Friend groups become more tightly interconnected",
        "Romantic partners increasingly serve as bridges between separate social networks",
        "Community institutions play a larger role in adult friendships",
        "Local friend networks grow larger and more cohesive"
      ],
      correctIndex: 1,
      explanation: "When partners meet independently through apps rather than shared friends, couples often connect previously separate social circles. As a result, adult social networks are increasingly shaped by romantic relationships rather than pre-existing friend groups."
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
      event: "Buying a home becomes financially advantageous over renting",
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
      event: "Americans buy the largest homes they can finance",
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
      event: "Air travel rapidly replaces ships for long-distance passenger trips",
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
      event: "Multinational corporations expand as executives can oversee global operations",
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
      event: "Fatalities among car occupants fall, but total crashes change less than expected",
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
      event: "Drivers take more risks at the margin (speeding, tighter gaps), offsetting some safety gains",
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
      event: "Food spoilage drops dramatically, allowing households to store food for weeks",
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
      event: "Shopping frequency drops as households shift to weekly or biweekly trips",
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
      event: "Test scores become the primary metric used to judge schools, teachers, and districts",
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
      event: "Instructional time shifts toward tested subjects like math and reading",
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
  id: 8,
  title: "Draining the Everglades",
  events: [
    {
      event: "1948: Army Corps of Engineers begins draining Florida's Everglades for development",
      options: [
        "Wildlife populations thrive in new habitat",
        "Everglades shrink to half their original size",
        "Drainage project fails due to flooding",
        "Local communities successfully oppose the project"
      ],
      correctIndex: 1,
      explanation: "The drainage project succeeded in redirecting water through canals. Over time, the Everglades shrank from roughly 4 million acres to under 2 million."
    },
    {
      event: "Everglades shrink to half their original size",
      options: [
        "Freshwater supply increases for residents",
        "Saltwater intrudes into freshwater aquifers",
        "Wildlife rapidly adapts to new conditions",
        "Flooding problems are permanently solved"
      ],
      correctIndex: 1,
      explanation: "With less freshwater stored and filtered by wetlands, coastal aquifers became vulnerable to saltwater intrusion from reduced inland flow and ocean pressure."
    },
    {
      event: "Saltwater intrudes into freshwater aquifers",
      options: [
        "Residents permanently abandon South Florida",
        "Real estate and insurance markets adjust to rising infrastructure and water-risk costs",
        "Desalination fully replaces natural freshwater sources",
        "Wetlands recover without intervention"
      ],
      correctIndex: 1,
      explanation: "As freshwater became harder and more expensive to secure, development costs rose. Insurance pricing, infrastructure investment, and long-term real estate risk increasingly reflected water availability and environmental stability."
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
      event: "Marine species begin migrating between the two seas",
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
      event:  "Species from the warmer sea outcompete native species in the cooler sea",
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
  title: "The Highway Boom",
  events: [
    {
      event: "1950s–1970s: Cities build major urban highways to reduce traffic congestion",
      options: [
        "Congestion worsens immediately due to construction",
        "Traffic initially eases as new lanes open",
        "Car usage declines as driving becomes easier",
        "Public transit replaces driving as cities expand"
      ],
      correctIndex: 1,
      explanation: "When new highways open, they often reduce travel times at first by adding capacity and smoothing bottlenecks."
    },
    {
      event: "Traffic initially eases as new lanes open",
      options: [
        "Traffic stays low because people keep the same routines",
        "Driving becomes more attractive, so people drive more and travel farther",
        "Most drivers permanently switch to off-peak commuting",
        "Households abandon cars because roads are efficient"
      ],
      correctIndex: 1,
      explanation: "When driving feels faster, people take trips they previously avoided, choose the car over other modes, and are more willing to live farther from work—raising total driving."
    },
    {
      event: "Driving becomes more attractive, so people drive more and travel farther",
      options: [
        "Congestion disappears because capacity stays ahead of demand",
        "Congestion returns to near previous levels despite wider roads",
        "Commute times shrink permanently as traffic stabilizes",
        "Cities become denser because highways pull people inward"
      ],
      correctIndex: 1,
      explanation: "Over time, added road capacity tends to be ‘filled’ by additional driving. In many places, vehicle miles traveled rise roughly in proportion to lane-miles added—so congestion often rebounds (a pattern known as induced demand)."
    }
  ]
}

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
      event:  "Meatpacking centralizes in a few major hubs",
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
      event: "A small number of companies dominate the entire meat supply",
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
      event: "People can suddenly find any information online",
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
      event: "Print reference materials become obsolete",
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
  title: "Digital Music Reshapes Creative Markets",
  events: [
    {
      event: "Late 1990s: Digital files make music easy to copy and distribute at near-zero cost",
      options: [
        "Music becomes more expensive due to piracy controls",
        "Ownership of music weakens as free access becomes widespread",
        "Listeners consume less music due to lower perceived value",
        "Artists gain full control over pricing and distribution"
      ],
      correctIndex: 1,
      explanation: "Once music could be copied perfectly and shared freely, the idea of owning individual albums or tracks weakened. Access, not possession, became the central value."
    },
    {
      event: "Ownership of music weakens as free access becomes widespread",
      options: [
        "Recorded music becomes the primary income source for artists",
        "Revenue shifts away from recordings toward concerts, merchandise, and licensing",
        "Music consumption declines as prices fall",
        "Radio regains dominance as the main discovery channel"
      ],
      correctIndex: 1,
      explanation: "As recorded music lost scarcity, its price collapsed. Artists and labels increasingly relied on live performances, merchandise, brand partnerships, and licensing for income."
    },
    {
      event: "Revenue shifts away from recordings toward concerts, merchandise, and licensing",
      options: [
        "Artists regain bargaining power over distributors",
        "Platforms that control access and discovery capture more economic value",
        "Music production concentrates among fewer major labels",
        "Audiences pay directly for individual songs again"
      ],
      correctIndex: 1,
      explanation: "When access matters more than ownership, control over discovery and distribution becomes critical. Streaming platforms emerged as powerful intermediaries, capturing a growing share of value in the music economy."
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
      event: "Food production doubles or triples in adopting countries",
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
      event: "Population growth accelerates as food becomes abundant",
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
      event: "Illegal speakeasies and bootleggers emerge",
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
      event: "Organized crime syndicates take control",
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
      event: "New airlines emerge to compete on price",
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
      event: "Weaker airlines go bankrupt or merge",
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
      event: "Extreme gender imbalance emerges in western territories",
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
      event: "Women gain economic and political power in scarcity",
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
      event:   "Upper floors become desirable real estate for the first time",
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
      event:  "Land values in city centers skyrocket as density increases",
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
      event: "Global nickel supply tightens significantly",
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
      event: "EV battery costs increase due to nickel prices",
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
      event: "Global shipping is delayed, $9 billion in goods stuck daily",
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
      event: "European factories halt production waiting for parts",
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
        "Government replaces private retirement plans with public programs",
      ],
      correctIndex: 1,
      explanation:
        "Data show a broad shift in the U.S. from employer-managed pensions (defined benefit) toward worker-managed 401(k)-style plans (defined contribution). That shift moved contribution decisions and market exposure from employers to individuals.",
    },
    {
      event: "Investment responsibility shifts from employers to individual workers",
      options: [
        "Most workers invest optimally and achieve similar retirement outcomes",
        "Retirement outcomes become more unequal across income and education levels",
        "Average retirement wealth rises uniformly across the population",
        "Market participation declines as workers avoid financial risk",
      ],
      correctIndex: 1,
      explanation:
        "This pattern is well-documented in survey data: participation, contribution rates, and investment choices vary a lot by income and education. That variation leads to wider gaps in retirement readiness than under more uniform pension benefits.",
    },
    {
      event: "Retirement outcomes become more unequal across income and education levels",
      options: [
        "Economic shocks have little effect on retirement readiness",
        "Market downturns unevenly delay retirement, especially for less-prepared workers",
        "Employers resume offering pensions to stabilize outcomes",
        "Retirement age becomes fixed and predictable",
      ],
      correctIndex: 1,
      explanation:
        "This is data-backed too: when retirement wealth is tied to markets, downturns reduce balances and increase 'timing risk.' People with smaller balances or fewer backup assets are more likely to delay retirement, while wealthier households can often ride out losses.",
    },
  ],
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
      event:  "Consumers begin spending more freely without immediate payment",
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
      event: "Household debt levels rise dramatically over decades",
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
      event: "1950s: Frozen 'TV dinners' popularize pre-portioned meals designed to be heated and eaten with minimal preparation",
      options: [
        "Home cooking becomes more valued and time-intensive",
        "Time spent on meal preparation begins to decline as convenience foods spread",
        "Families eat more formal meals together at the table",
        "Processed food remains a small niche market"
      ],
      correctIndex: 1,
      explanation: "TV dinners scaled fast (Swanson sold ~10 million in 1954), helping normalize heat-and-eat meals. Over the following decades, time-use research shows a broad decline in time spent cooking/food prep in the U.S., consistent with the rise of convenience foods (TV dinners weren’t the only driver, but they were an early visible signal of the shift)."
    },
    {
      event: "Time spent on meal preparation begins to decline as convenience foods spread",
      options: [
        "Meals become more synchronized because dinner is easier",
        "Meal timing becomes more flexible, and more eating happens away from the dining table",
        "Family conversation increases during longer shared meals",
        "Meal routines become more structured and formal"
      ],
      correctIndex: 1,
      explanation: "When meals require less coordinated cooking, it’s easier for households to eat at different times and in different places. Time-use and diet research documents long-run changes in home food preparation and eating patterns, including reduced time cooking and shifts in where/how meals are consumed."
    },
    {
      event: "Meal timing becomes more flexible, and more eating happens away from the dining table",
      options: [
        "Television remains a minor background activity in most homes",
        "The living room (and TV) becomes a primary shared leisure space, concentrating attention for entertainment and advertising",
        "Families shift toward more interactive group entertainment instead of screens",
        "Portion sizes reliably decrease due to distracted eating"
      ],
      correctIndex: 1,
      explanation: "By the mid-20th century, TV already commanded multiple hours of daily household attention and continued to grow, making it a dominant focal point of home leisure. As more daily life clustered around the TV, advertisers gained more consistent access to household attention."
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
      event: "Congress bans cigarette advertising on TV and radio",
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
      event: "Tobacco companies aggressively target developing nations",
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
      event: "News must now fill 24 hours instead of 30-minute broadcasts",
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
      event: "News becomes more entertainment-focused to attract viewers",
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
      event: "1995: Match.com launches, making it possible to browse and contact many potential partners outside your existing social circle",
      options: [
        "People marry earlier because matching is more efficient",
        "The median age at first marriage rises over time",
        "Marriage age stays flat because technology cancels out uncertainty",
        "Most people return to marrying their high school sweetheart"
      ],
      correctIndex: 1,
      explanation: "Expanding the pool of potential partners increases optionality and lowers the cost of continued search. Demographic data show a steady rise in the median age at first marriage from the 1990s onward, consistent with longer partner search alongside other social and economic factors."
    },
    {
      event: "The median age at first marriage rises over time",
      options: [
        "Divorce rates rise because people commit less seriously",
        "Divorce rates decline as people marry later and more selectively",
        "Divorce rates remain unchanged because age has no effect",
        "Divorce nearly disappears as marriage becomes rare"
      ],
      correctIndex: 1,
      explanation: "Overall U.S. divorce rate has broadly declined since an early-1980s peak—so this decline overlaps the period after Match.com launched—but it’s not solely “because of online dating.” Divorce trends also reflect changing marriage rates and age patterns (including higher divorce at older ages even as divorce fell for younger adults)."
    },
    {
      event: "Divorce rates decline as people marry later and more selectively",
      options: [
        "Marriage becomes more common across the population",
        "Marriage becomes more stable but less universal",
        "Family structures converge toward a single dominant model",
        "Most children grow up with continuously married parents"
      ],
      correctIndex: 1,
      explanation: "Marriages have become more durable among those who marry, while overall marriage has become less universal—so you get fewer but more stable marriages overall."
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
      event: "Shipping costs collapse as loading time drops from days to hours",
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
      event: "Factories relocate to wherever labor is cheapest worldwide",
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
      event:  "Elk change their grazing behavior to avoid predators",
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
      event: "Trees and shrubs regenerate along rivers",
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
      event:  "Migration to hot Sun Belt states accelerates dramatically",
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
      event:  "Political power shifts to the South and West",
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
      event:  "Deep-rooted prairie grasses that anchored soil are destroyed",
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
      event:  "Massive dust storms bury farms and darken skies across the country",
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
      event: "Millions of people gain personal transportation for the first time",
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
      event: "Cyclists demand paved roads, launching the 'Good Roads' movement",
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
      event: "Long-distance trucking becomes cheaper than rail freight",
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
      event:  "Factories relocate to cheap land near highway exits",
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
