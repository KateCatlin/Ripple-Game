export interface PuzzleEvent {
  event: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Puzzle {
  id: number;
  title: string;
  date?: string; // YYYY-MM-DD format - assigned dynamically based on rotation
  events: PuzzleEvent[];
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
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
        correctIndex: 1,
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
        correctIndex: 1,
        explanation: "Congress passed the National Maximum Speed Law, reducing speed limits to 55 mph to conserve fuel — part of a wave of federal conservation mandates."
      },
      {
        event: "Federal government mandates fuel conservation measures",
        options: [
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
    events: [
      {
        event: "1869: Suez Canal opens, connecting Mediterranean Sea to Red Sea",
        options: [
          "Trade routes remain centered around Africa",
          "Marine species begin migrating between the two seas",
          "Ship traffic has minimal environmental impact",
          "The seas maintain separate ecosystems indefinitely"
        ],
        correctIndex: 1,
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
        event: "Species from the warmer sea outcompete native species in the cooler sea",
        options: [
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
        event: "Meatpacking centralizes in a few major hubs",
        options: [
          "Workers gain bargaining power due to specialized skills",
          "A small number of companies dominate the entire meat supply",
          "Competition increases as more firms enter the market",
          "Meat prices rise due to transportation costs"
        ],
        correctIndex: 1,
        explanation: "Centralization led to consolidation.  By 1900, four companies controlled most of America's meat supply — the original 'Big Four' meatpackers wielded enormous market power."
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
    title: "Uber Upends the Taxi Industry",
    events: [
      {
        event: "2009: Uber launches, letting anyone with a car become a driver and anyone with a smartphone hail a ride",
        options: [
          "Taxi companies quickly build competing apps and retain most riders",
          "Taxi medallion values collapse as regulated supply loses its advantage",
          "Cities fast-track regulations that limit ride-sharing to licensed vehicles",
          "Riders initially prefer Uber but return to taxis for reliability"
        ],
        correctIndex: 1,
        explanation: "Taxi medallions in New York City had sold for over $1 million — they represented a government-enforced monopoly on street pickups. When Uber bypassed the medallion system entirely, those licenses lost most of their value within years. Medallion owners who had borrowed against their licenses faced financial ruin."
      },
      {
        event: "Taxi medallion values collapse as regulated supply loses its advantage",
        options: [
          "Ride-sharing remains a niche service for tech-savvy urban professionals",
          "The 'gig economy' model spreads to food delivery, cleaning, errands, and dozens of industries",
          "Traditional taxi fleets adopt gig-style flexibility while keeping employee protections",
          "Drivers unionize quickly, standardizing pay and benefits across platforms"
        ],
        correctIndex: 1,
        explanation: "Uber proved that apps could match workers to tasks on-demand without traditional employment. DoorDash, Instacart, TaskRabbit, and countless others copied the model — creating a new category of work that was neither traditional employment nor traditional contracting."
      },
      {
        event: "The 'gig economy' model spreads to food delivery, cleaning, errands, and dozens of industries",
        options: [
          "Gig platforms voluntarily offer benefits to compete for the best workers",
          "Ongoing legal battles emerge over whether gig workers are employees or contractors",
          "Congress passes clear legislation defining gig worker status within years",
          "Most gig workers transition to traditional employment as the novelty fades"
        ],
        correctIndex: 1,
        explanation: "Are gig workers independent contractors (no benefits, no minimum wage) or employees (entitled to protections)? California's AB5, Prop 22, and court cases across the world have grappled with this question — the legal framework built for factories and offices didn't anticipate work dispatched by algorithm."
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
    events: [
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
        correctIndex: 1,
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
        explanation: "The massive profits attracted organized crime.  Al Capone's empire made $60 million annually from bootlegging alone — crime became industrialized."
      },
      {
        event: "Organized crime syndicates take control",
        options: [
          "Crime disappears when Prohibition ends",
          "FBI is expanded to combat organized crime",
          "Criminals voluntarily stop operations",
          "Local police handle all enforcement"
        ],
        correctIndex: 1,
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
    id: 19,
    title: "Airline Deregulation",
    events: [
      {
        event: "1978:  Airline Deregulation Act allows airlines to set their own routes and prices",
        options: [
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
        options: [
          "All airlines remain profitable",
          "Weaker airlines go bankrupt or merge",
          "Airlines maintain high service levels",
          "Competition decreases over time"
        ],
        correctIndex: 1,
        explanation: "Intense competition meant razor-thin margins. Airlines that couldn't compete went bankrupt — Pan Am, TWA, Eastern.  Survivors merged to gain scale."
      },
      {
        event: "Weaker airlines go bankrupt or merge",
        options: [
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
    title: "The Elevator Makes Skyscrapers Possible",
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
        event: "Upper floors become desirable real estate for the first time",
        options: [
          "Cities spread outward to accommodate growth",
          "Land values in city centers skyrocket as density increases",
          "Building heights stay modest due to construction costs",
          "Residents prefer low-rise neighborhoods"
        ],
        correctIndex: 1,
        explanation: "If you can build 50 stories instead of 5, the same plot of land becomes 10x more valuable. Downtown real estate prices soared as skyscrapers rose."
      },
      {
        event: "Land values in city centers skyrocket as density increases",
        options: [
          "Population spreads evenly across metro areas",
          "Commuting patterns emerge as workers travel into dense cores",
          "Walking remains the primary way to get to work",
          "Businesses relocate away from expensive downtown areas"
        ],
        correctIndex: 1,
        explanation: "Dense downtowns meant millions of jobs concentrated in small areas.  Subways, commuter rails, and highways emerged to move workers in and out each day."
      }
    ]
  },
  {
    id: 22,
    title: "Indonesia's Nickel Export Ban",
    events: [
      {
        event: "2014: Indonesia bans raw nickel ore exports to build domestic smelting industry",
        options: [
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
        correctIndex: 1,
        explanation: "Nickel is critical for EV battery cathodes. Tighter supply meant higher costs for Tesla, Volkswagen, and every automaker racing to build electric vehicles."
      },
      {
        event: "EV battery costs increase due to nickel prices",
        options: [
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
    id: 23,
    title: "The Ever Given Blocks the Suez Canal",
    events: [
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
        correctIndex: 1,
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
        event: "1950s:  Credit cards emerge, allowing consumers to pay without carrying cash",
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
        event: "Consumers begin spending more freely without immediate payment",
        options: [
          "Consumers maintain low debt levels through discipline",
          "Household debt levels rise dramatically over decades",
          "Interest rates drop as lending risk decreases",
          "Credit becomes harder to obtain over time"
        ],
        correctIndex: 1,
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
        correctIndex: 1,
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
    title: "The Surgeon General vs. Cigarettes",
    events: [
      {
        event: "1964: Surgeon General officially declares cigarettes cause cancer",
        options: [
          "Cigarette sales increase as publicity spreads",
          "Congress bans cigarette advertising on TV and radio",
          "Tobacco companies accept the findings",
          "No regulatory action is taken"
        ],
        correctIndex: 1,
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
        correctIndex: 1,
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
        options: [
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
    title: "The Box That Changed Trade",
    events: [
      {
        event: "1956: Standardized shipping containers are introduced, replacing manual cargo loading",
        options: [
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
        options: [
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
        correctIndex: 1,
        explanation: "Containerization required massive cranes and deep harbors. Cities like Singapore, Rotterdam, and Long Beach became mega-ports, while older ports that couldn't adapt declined."
      }
    ]
  },
  {
    id: 32,
    title: "The Wolves",
    events: [
      {
        event: "1995: Wolves are reintroduced to Yellowstone after 70-year absence",
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
        event: "Elk change their grazing behavior to avoid predators",
        options: [
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
        event: "Migration to hot Sun Belt states accelerates dramatically",
        options: [
          "Political power remains concentrated in northeastern states",
          "Political power shifts to the South and West",
          "Federal spending decreases in fast-growing states",
          "Northern states increase investment to retain residents"
        ],
        correctIndex: 1,
        explanation: "Congressional seats follow population. As millions moved south and west, states like Texas and Florida gained seats while New York and Ohio lost them — reshaping national elections."
      },
      {
        event: "Political power shifts to the South and West",
        options: [
          "Energy demand stays consistent year-round",
          "Summer becomes peak electricity season, straining power grids",
          "Renewable energy adoption slows in hot climates",
          "Water consumption decreases as outdoor activity drops"
        ],
        correctIndex: 1,
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
        options: [
          "Soil fertility increases from crop rotation",
          "Deep-rooted prairie grasses that anchored soil are destroyed",
          "Wheat yields decline due to unsuitable climate",
          "Groundwater levels rise from increased irrigation"
        ],
        correctIndex: 1,
        explanation: "Native grasses had roots reaching 5+ feet deep, anchoring the soil for thousands of years.  Wheat roots reached only inches deep, leaving topsoil vulnerable."
      },
      {
        event: "Deep-rooted prairie grasses that anchored soil are destroyed",
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
        event: "Massive dust storms bury farms and darken skies across the country",
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
    title: "The Bicycle Craze",
    events: [
      {
        event: "1890s: 'Safety bicycles' with equal-sized wheels become affordable for the masses",
        options: [
          "Bicycles remain toys for wealthy hobbyists",
          "Millions of people gain personal transportation for the first time",
          "Horse sales increase to compete with bicycles",
          "Walking remains preferred for short trips"
        ],
        correctIndex: 1,
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
        options: [
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
        options: [
          "Factories stay in city centers near rail depots",
          "Factories relocate to cheap land near highway exits",
          "Urban manufacturing employment grows",
          "Warehouses cluster around train stations"
        ],
        correctIndex: 1,
        explanation: "Factories no longer needed to be near rail lines or ports. They moved to suburbs and exurbs where land was cheap, as long as there was a highway exit nearby."
      },
      {
        event: "Factories relocate to cheap land near highway exits",
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
  },
  {
    id: 37,
    title: "The Index Fund Revolution",
    events: [
      {
        event: "1976: Vanguard launches the first index fund for individual investors, offering market returns at a fraction of active management fees",
        options: [
          "Investors dismiss index funds as 'settling for average' and stick with stock pickers",
          "Index funds slowly gain traction as decades of data show most active managers underperform",
          "Active fund managers cut fees dramatically to match index fund pricing",
          "Regulators restrict index funds to protect the active management industry"
        ],
        correctIndex: 1,
        explanation: "Academic research increasingly showed that most active managers failed to beat the market after fees. By the 2010s, the evidence was overwhelming — index funds delivered better net returns for most investors, and money began flowing out of active funds."
      },
      {
        event: "Index funds slowly gain traction as decades of data show most active managers underperform",
        options: [
          "Index fund assets remain a small fraction of total market holdings",
          "Trillions of dollars flow into index funds, concentrating assets in a few giant firms",
          "Hundreds of new index fund providers emerge, fragmenting the market",
          "Active managers adapt by creating hybrid funds that outperform pure indexing"
        ],
        correctIndex: 1,
        explanation: "By 2024, over $15 trillion sat in U.S. index funds. But indexing has massive economies of scale — lower fees win, and lower fees require massive size. Three firms (BlackRock, Vanguard, State Street) came to manage the vast majority of index assets."
      },
      {
        event: "Trillions of dollars flow into index funds, concentrating assets in a few giant firms",
        options: [
          "These firms remain passive investors with no influence on corporate decisions",
          "Three asset managers become the largest shareholders in most major U.S. companies",
          "Companies buy back shares to reduce index fund ownership stakes",
          "Regulators break up the largest index fund providers to prevent concentration"
        ],
        correctIndex: 1,
        explanation: "BlackRock, Vanguard, and State Street are now among the top shareholders of over 90% of S&P 500 companies. They vote on CEO pay, board members, and major decisions at almost every large American company — a concentration of corporate influence that few anticipated when index funds launched."
      }
    ]
  },
  {
    id: 38,
    title: "GPS Goes Civilian",
    events: [
      {
        event: "2000: President Clinton orders the military to stop degrading GPS signals for civilians, improving accuracy from ~100 meters to ~10 meters",
        options: [
          "Dedicated GPS navigation devices become a booming consumer electronics category",
          "Smartphones integrate GPS chips, making precise location a standard feature",
          "Automakers add built-in GPS as a luxury feature, charging thousands extra",
          "Location-based advertising immediately becomes the dominant online business model"
        ],
        correctIndex: 1,
        explanation: "Once GPS was accurate enough to be truly useful, phone makers rushed to include GPS chips. By the late 2000s, every smartphone knew exactly where it was — location became as basic as a clock."
      },
      {
        event: "Smartphones integrate GPS chips, making precise location a standard feature",
        options: [
          "Standalone GPS makers like Garmin pivot to smartphone apps and thrive",
          "Free navigation apps replace standalone GPS devices and paper maps",
          "Privacy concerns lead most users to disable location services",
          "Automakers make built-in navigation standard, limiting phone-based apps"
        ],
        correctIndex: 1,
        explanation: "Google Maps, Waze, and Apple Maps offered free turn-by-turn navigation. Standalone GPS device sales collapsed. Rand McNally, the iconic map publisher, went from household name to near-bankruptcy — why buy a $30 road atlas when your phone knows where you are?"
      },
      {
        event: "Free navigation apps replace standalone GPS devices and paper maps",
        options: [
          "Taxi companies build competing apps and retain their dominant market position",
          "Ride-sharing and delivery apps emerge, reshaping transportation and retail",
          "Local retail thrives as customers can easily navigate to nearby stores",
          "Public transit ridership surges as real-time arrival apps boost convenience"
        ],
        correctIndex: 1,
        explanation: "Uber, Lyft, DoorDash, and Instacart all depend on knowing exactly where drivers and customers are in real-time. With 100-meter accuracy, you'd wander looking for your car. With 10-meter accuracy, the driver pulls up right where you're standing. A military technology, unleashed by a single policy decision, enabled a trillion-dollar restructuring of transportation and retail."
      }
    ]
  },
  {
    id: 39,
    title: "Social Security Transforms Old Age",
    events: [
      {
        event: "1935: Social Security Act passes, guaranteeing monthly income to Americans over 65",
        options: [
          "Most elderly continue relying on adult children, as initial benefits are too small to live on",
          "Elderly poverty rates begin a dramatic decades-long decline",
          "Private employers rapidly expand pension plans to compete with government benefits",
          "Elderly workers delay retirement to maximize their eventual benefit payments"
        ],
        correctIndex: 1,
        explanation: "Before Social Security, roughly half of elderly Americans lived in poverty. The program's expansion over following decades drove elderly poverty below 10% — one of the most dramatic demographic shifts in American history."
      },
      {
        event: "Elderly poverty rates begin a dramatic decades-long decline",
        options: [
          "Extended families grow closer as financial stress between generations eases",
          "Elderly Americans increasingly live independently rather than with adult children",
          "Adult children redirect savings toward their parents' medical care",
          "Grandparents take on larger childcare roles, strengthening multi-generational bonds"
        ],
        correctIndex: 1,
        explanation: "When elderly parents could afford their own housing, they no longer needed to live with children. Multi-generational households, once the American norm, declined sharply. In 1940, over 70% of widows lived with family; by 2000, fewer than 20% did."
      },
      {
        event: "Elderly Americans increasingly live independently rather than with adult children",
        options: [
          "Retirees scatter across the country, diluting their political influence",
          "The elderly become one of America's most powerful voting blocs",
          "Younger generations gain political power as elderly become less engaged",
          "Politicians focus on working families since retirees have fewer economic concerns"
        ],
        correctIndex: 1,
        explanation: "Retirees have time, they vote in every election, and they fiercely protect Social Security. AARP became one of Washington's most powerful lobbies. Politicians learned that cutting benefits meant electoral defeat — Social Security became 'the third rail of American politics.'"
      }
    ]
  },
  {
    id: 40,
    title: "The Walkman Changes How We Experience Public Space",
    events: [
      {
        event: "1979: Sony introduces the Walkman, letting people listen to music through headphones while walking, commuting, or exercising",
        options: [
          "Boomboxes remain dominant as people prefer sharing music socially",
          "Listening to music shifts from a shared activity to a private, portable experience",
          "Cassette sales decline as consumers wait for a higher-quality portable format",
          "Headphone use remains stigmatized as antisocial and rude in public"
        ],
        correctIndex: 1,
        explanation: "The Walkman sold 200 million units over its lifetime. For the first time, you could carry your personal soundtrack everywhere. Music went from something you experienced in a room with others to something you carried in your pocket, heard only by you."
      },
      {
        event: "Listening to music shifts from a shared activity to a private, portable experience",
        options: [
          "Strangers interact more on public transit, bonding over visible music choices",
          "Headphones become a socially acceptable way to signal unavailability in public",
          "Commuters complain about headphone users and push for bans on transit",
          "Portable music remains a niche habit among joggers and teenagers"
        ],
        correctIndex: 1,
        explanation: "Headphones created a new social norm: wearing them signals 'don't talk to me' without saying a word. Subway riders, coffee shop patrons, and office workers discovered a socially acceptable way to create private space in public — the headphone bubble became universal body language."
      },
      {
        event: "Headphones become a socially acceptable way to signal unavailability in public",
        options: [
          "Audio content stagnates as music dominates all headphone listening",
          "Spoken-word audio like podcasts and audiobooks becomes a massive industry",
          "Headphone use declines as smartphones shift attention to screens",
          "Radio adapts by becoming the primary audio source for commuters"
        ],
        correctIndex: 1,
        explanation: "Once millions of people had hours of 'headphone time' built into their daily routines, they needed content to fill it. Podcasts exploded from niche hobby to mainstream medium; audiobook revenue tripled in a decade. The Walkman didn't just change how we listen to music — it created the audience for an entirely new content industry decades later."
      }
    ]
  },
  {
    id: 41,
    title: "The Volcano That Created a Monster",
    events: [
      {
        event: "1815: Mount Tambora in Indonesia erupts — the most powerful volcanic explosion in recorded history",
        options: [
          "Tsunamis devastate coastal cities across the Indian Ocean",
          "Massive ash clouds spread through the atmosphere, circling the globe",
          "The Dutch colonial government evacuates all Europeans from the region",
          "Volcanic gases poison water supplies, causing cholera outbreaks across Asia"
        ],
        correctIndex: 1,
        explanation: "Tambora ejected 160 cubic kilometers of rock and ash into the stratosphere — so much debris that it spread worldwide, creating a veil of sulfur particles that would reflect sunlight away from Earth for over a year."
      },
      {
        event: "Massive ash clouds spread through the atmosphere, circling the globe",
        options: [
          "Spectacular blood-red sunsets inspire a golden age of landscape painting",
          "The following year, 1816, becomes the 'Year Without a Summer'",
          "Global shipping routes shift to avoid the ash-darkened skies",
          "Scientists race to study the phenomenon, founding modern volcanology"
        ],
        correctIndex: 1,
        explanation: "The volcanic veil caused global temperatures to drop by up to 3°C. Europe and North America experienced killing frosts in June, failed harvests, and widespread famine. In Switzerland, the summer of 1816 brought endless cold rain and darkness."
      },
      {
        event: "The following year, 1816, becomes the 'Year Without a Summer'",
        options: [
          "Mass migrations begin as thousands flee to warmer climates in Southern Europe",
          "Trapped indoors by the gloomy weather, a teenage Mary Shelley writes 'Frankenstein'",
          "Food riots topple the recently restored French monarchy",
          "The Catholic Church declares the darkness a divine punishment, triggering religious revival"
        ],
        correctIndex: 1,
        explanation: "At Villa Diodati in Switzerland, 18-year-old Mary Shelley joined Lord Byron and Percy Shelley for what should have been a summer holiday. Trapped inside by incessant storms, Byron challenged the group to write ghost stories. Mary's contribution became 'Frankenstein' — often considered the first science fiction novel. An Indonesian volcano inadvertently gave birth to an entire literary genre."
      }
    ]
  }
];

/**
 * Generate dates for puzzles based on a stable schedule.
 *
 * IMPORTANT: The app launched on Dec 30, 2025 on LinkedIn.
 * - Archive starts from Dec 30, 2025 (first playable puzzle)
 * - A fixed date schedule is used for existing puzzles, so dates never shift
 * - New puzzles added to the end are scheduled AFTER the fixed block
 *
 * TIMEZONE: All date calculations use HST (Pacific/Honolulu, UTC-10) as the reference.
 * HST was chosen to give users worldwide maximum time before daily reset.
 * Hawaii doesn't observe DST, so reset is always at midnight HST (10am UTC).
 * This is especially helpful for Australian users who get extra hours before reset.
 */
const LAUNCH_DATE = '2025-12-30'; // App launch date - archive starts here

/**
 * Get the current date in HST (Hawaii) timezone as a YYYY-MM-DD string.
 * This ensures all users see the same "today" based on HST midnight.
 * HST = UTC-10, no daylight saving time.
 */
export const getTodayInPST = (): string => {
  const now = new Date();
  // Format date in HST timezone (using Pacific/Honolulu)
  const hstDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Pacific/Honolulu',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(now);
  return hstDate; // Returns YYYY-MM-DD format
};

/**
 * Convert a Date object to HST date string (YYYY-MM-DD).
 * Note: Function name kept as dateToPSTString for backwards compatibility.
 */
export const dateToPSTString = (date: Date): string => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Pacific/Honolulu',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};

const FIXED_ORDERED_IDS = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 41, 38, 39, 40,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
];

const buildPuzzleDateMap = (): Map<number, string> => {
  const dateMap = new Map<number, string>();
  
  // Use a fixed reference point for date generation
  // Using HST offset (-10:00) at noon to avoid any edge cases
  const launchDate = new Date('2025-12-30T12:00:00-10:00'); // Noon HST on launch day
  
  // Assign dates for the fixed schedule
  FIXED_ORDERED_IDS.forEach((puzzleId, index) => {
    const puzzleDate = new Date(launchDate);
    puzzleDate.setDate(puzzleDate.getDate() + index);
    const dateStr = dateToPSTString(puzzleDate);
    dateMap.set(puzzleId, dateStr);
  });

  // Schedule any puzzles not in the fixed block after the last fixed date
  const fixedIdSet = new Set(FIXED_ORDERED_IDS);
  const unscheduled = puzzles.filter(p => !fixedIdSet.has(p.id));
  const lastFixedIndex = FIXED_ORDERED_IDS.length - 1;
  const startFutureDate = new Date(launchDate);
  startFutureDate.setDate(startFutureDate.getDate() + lastFixedIndex + 1);

  unscheduled.forEach((puzzle, index) => {
    const puzzleDate = new Date(startFutureDate);
    puzzleDate.setDate(puzzleDate.getDate() + index);
    const dateStr = dateToPSTString(puzzleDate);
    dateMap.set(puzzle.id, dateStr);
  });
  
  return dateMap;
};

// Generate dates once and cache
const puzzleDateMap = buildPuzzleDateMap();

// Add dates to puzzles
puzzles.forEach(puzzle => {
  (puzzle as Puzzle).date = puzzleDateMap.get(puzzle.id) || '';
});

/**
 * Get the puzzle for today (or a specific date).
 * Uses PST timezone to determine "today".
 */
export const getPuzzleForDay = (date: Date = new Date()): Puzzle => {
  // Convert to PST date string
  const dateStr = dateToPSTString(date);
  const puzzle = puzzles.find(p => p.date === dateStr);
  
  if (puzzle) {
    return puzzle;
  }
  
  // Fallback: return the most recently scheduled puzzle if date is beyond range
  return puzzles[puzzles.length - 1];
};

/**
 * Get the day number for display (e.g., Ripple #1, #2, etc.).
 * Based on days since launch (Dec 30, 2025) in PST.
 */
export const getDayNumber = (date: Date = new Date()): number => {
  const dateStr = dateToPSTString(date);
  const launchDateStr = LAUNCH_DATE;
  
  // Calculate days between the two date strings
  const currentDate = new Date(dateStr + 'T12:00:00');
  const launchDate = new Date(launchDateStr + 'T12:00:00');
  const diffTime = currentDate.getTime() - launchDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

/**
 * Get a puzzle by its assigned date string (YYYY-MM-DD).
 */
export const getPuzzleByDate = (dateStr: string): Puzzle | null => {
  return puzzles.find(p => p.date === dateStr) || null;
};

/**
 * Get all archived puzzles (puzzles with dates before today in PST).
 * Sorted most recent first.
 * Only includes puzzles from launch date (Dec 30, 2025) onwards.
 */
export const getArchivedPuzzles = (): Puzzle[] => {
  const todayStr = getTodayInPST();
  
  return puzzles
    .filter(p => p.date && p.date < todayStr && p.date >= LAUNCH_DATE)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
};

/**
 * Check if a date string represents today's puzzle (in PST).
 */
export const isToday = (dateStr: string): boolean => {
  return dateStr === getTodayInPST();
};

/**
 * Get the day number for a specific date string.
 */
export const getDayNumberForDate = (dateStr: string): number => {
  const date = new Date(dateStr + 'T12:00:00');
  return getDayNumber(date);
};
