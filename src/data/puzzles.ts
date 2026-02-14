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
    title: "Mortgages Change Everything",
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
          "Gasoline prices spike as demand for fuel surges nationwide",
          "Long-distance trucking becomes cheaper than rail freight",
          "Coastal cities lose influence as inland routes bypass them",
          "Car sales decline as families wait for highways to be completed"
        ],
        correctIndex: 1,
        explanation: "Highways gave trucks a massive advantage.  Freight that once required rail scheduling could now go door-to-door by truck. Rail's share of freight dropped from 75% to under 40%."
      },
      {
        event: "Long-distance trucking becomes cheaper than rail freight",
        options: [
          "Congress nationalizes the struggling railroad industry",
          "Factories relocate to cheap land near highway exits",
          "Trucking companies consolidate into a few regulated monopolies",
          "Retail chains build massive downtown distribution centers"
        ],
        correctIndex: 1,
        explanation: "Factories no longer needed to be near rail lines or ports. They moved to suburbs and exurbs where land was cheap, as long as there was a highway exit nearby."
      },
      {
        event: "Factories relocate to cheap land near highway exits",
        options: [
          "Rural small towns become the new manufacturing centers",
          "Suburban sprawl accelerates as jobs follow highways",
          "Inner-city unemployment drops as commuting becomes easier",
          "Labor unions strengthen as factories cluster in new industrial parks"
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
        event: "2000: US President Clinton orders the military to stop degrading GPS signals for civilians, improving accuracy from ~100 meters to ~10 meters",
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
  },
  {
    id: 42,
    title: "The Plague's Impact on Feudalism",
    events: [
      {
        event: "1347: The Black Death arrives in Europe, eventually killing one-third of the population",
        options: [
          "The Church gains power as survivors turn to religion for answers",
          "A massive labor shortage gives surviving workers newfound bargaining power",
          "Nobles consolidate land from the dead, strengthening the feudal system",
          "Trade collapses permanently as merchants fear spreading the plague"
        ],
        correctIndex: 1,
        explanation: "With so many dead, there simply weren't enough peasants to work the fields. For the first time in centuries, common laborers could demand higher wages — and lords had no choice but to pay. England even passed the Statute of Labourers in 1351 trying to freeze wages, but it largely failed."
      },
      {
        event: "A massive labor shortage gives surviving workers newfound bargaining power",
        options: [
          "Nobles raise private armies to force peasants back to the fields",
          "Wages rise and peasants begin negotiating freedom from serfdom",
          "The Pope declares rising wages sinful and demands a return to tradition",
          "Workers squander their new wealth, and poverty returns within a decade"
        ],
        correctIndex: 1,
        explanation: "Peasants leveraged their scarcity brilliantly. Many negotiated their way out of serfdom entirely, bought abandoned land cheaply, or simply moved to towns where labor was needed. Lords who refused to negotiate found their fields rotting unharvested."
      },
      {
        event: "Wages rise and peasants begin negotiating freedom from serfdom",
        options: [
          "The aristocracy adapts and feudalism continues for another 500 years",
          "The weakening of feudal bonds helps a new middle class emerge",
          "Peasants overthrow the monarchy and establish democratic republics",
          "The Church purchases abandoned estates and becomes Europe's largest landowner"
        ],
        correctIndex: 1,
        explanation: "The rigid feudal hierarchy began to crack. Former peasants became tenant farmers, craftsmen, and merchants. This new economic mobility — unthinkable before the plague — laid the groundwork for the merchant class that would fuel the Renaissance and reshape European society."
      }
    ]
  },
  {
    id: 43,
    title: "The Goats That Changed The World",
    events: [
      {
        event: "9th century: Legend tells of Kaldi, an Ethiopian goat herder who noticed his goats dancing energetically after eating red berries. Whether or not the tale is true, coffee cultivation takes hold in Ethiopia's highlands.",
        options: [
          "Ethiopian kings ban the stimulant, fearing it will make workers too restless",
          "The beans spread to Yemen, where Sufi monks brew coffee to stay awake during prayers",
          "Coffee remains unknown outside Ethiopia for the next thousand years",
          "Ethiopian traders export the beans to India, where they become a medicinal remedy"
        ],
        correctIndex: 1,
        explanation: "By the 1400s, coffee had crossed the Red Sea to Yemen. Sufi monks discovered that brewing the beans into a drink helped them stay alert during long nights of prayer. Yemen's port city of Mocha became the center of the early coffee trade — which is why 'mocha' became synonymous with coffee."
      },
      {
        event: "The beans spread to Yemen, where Sufi monks brew coffee to stay awake during prayers",
        options: [
          "Religious authorities declare coffee sinful and destroy the Yemeni coffee crops",
          "Coffeehouses emerge across the Ottoman Empire as social gathering places",
          "Yemeni rulers begin exporting live coffee plants to spread cultivation worldwide",
          "The stimulant proves too strong, and monks abandon coffee in favor of tea"
        ],
        correctIndex: 1,
        explanation: "After the Ottomans conquered Yemen in 1538, coffee spread rapidly to Istanbul and beyond. By the 1550s, coffeehouses — called 'kahvehane' — were popping up across the empire. Interestingly, Yemeni authorities did the opposite of exporting plants — they banned the export of live coffee seeds and plants to protect their monopoly. Only roasted beans could leave the country."
      },
      {
        event: "Coffeehouses emerge across the Ottoman Empire as social gathering places",
        options: [
          "Due to the popularity of tea in Europe, it takes 200 years for coffee to spread further north",
          "Venetian merchants trading in Ottoman ports bring coffee back to Europe",
          "Ottoman armies introduce coffee to Europe after conquering Vienna",
          "Coffee becomes a royal luxury, with commoners forbidden from drinking it"
        ],
        correctIndex: 1,
        explanation: "Venetian traders, who had deep commercial ties with the Ottoman Empire, began importing coffee beans in the late 1500s. Venice opened Europe's first coffeehouses, and the concept spread to London, Paris, and beyond. London's coffeehouses became hotbeds of Enlightenment thinking and commerce — one run by Edward Lloyd became the meeting spot for ship merchants and insurers, eventually becoming Lloyd's of London, birthplace of the modern insurance industry."
      }
    ]
  },
  {
    id: 44,
    title: "From Coffee Cups to New Industry",
    events: [
      {
        event: "1652: Coffee arrives in London, and coffeehouses rapidly multiply.",
        options: [
          "The king initially bans coffeehouses, fearing they encourage dangerous political debate",
          "Coffeehouses earn the nickname 'penny universities' for the learning exchanged inside",
          "Locals divide on political affiliation between coffee and tea houses",
          "Coffeehouses become exclusive gentlemen's clubs, charging steep membership fees"
        ],
        correctIndex: 1,
        explanation: "London's coffeehouses became hubs of intellectual exchange — a place where, for the price of a cup of coffee, you could access newspapers, pamphlets, and spirited debate with doctors, poets, and businessmen alike. King Charles II actually did try to ban them in 1675, but public outcry forced him to back down within 11 days."
      },
      {
        event: "Coffeehouses earn the nickname 'penny universities' for the learning exchanged inside",
        options: [
          "Enrollment at Oxford and Cambridge declines for the first time since the plague",
          "Different coffeehouses begin specializing — one for writers, one for stockbrokers, one for ship merchants",
          "The government standardizes coffeehouses, requiring them all to serve the same clientele",
          "Intellectuals abandon coffeehouses once the working class begins frequenting them"
        ],
        correctIndex: 1,
        explanation: "Each coffeehouse developed its own identity based on who gathered there. Writers debated at Will's Coffee House. Stockbrokers traded tips at Jonathan's Coffee House — which eventually became the London Stock Exchange. And near the Thames, a coffeehouse owner named Edward Lloyd attracted ship captains and maritime merchants by posting the latest shipping news on his walls."
      },
      {
        event: "Different coffeehouses begin specializing — one for writers, one for stockbrokers, one for ship merchants",
        options: [
          "The maritime coffeehouse evolves into a private postal service for international merchants",
          "Ship owners at Lloyd's Coffee House begin pooling risk on voyages, creating the modern insurance industry",
          "Shipbuilders use the coffeehouse to recruit skilled labor, launching a trade union movement",
          "Merchants at the coffeehouse form a joint venture, founding Britain's first commercial bank"
        ],
        correctIndex: 1,
        explanation: "At Lloyd's Coffee House near the docks, those wanting to insure risky voyages met those willing to underwrite the risk. Each 'underwriter' literally wrote their name under the amount they'd cover on a slip of paper. This system of shared risk became the foundation of modern insurance. Lloyd's Coffee House evolved into Lloyd's of London — still one of the world's largest insurance markets today."
      }
    ]
  },
  {
    id: 45,
    title: "How a Fashion Trend Built a Nation",
    events: [
      {
        event: "1600s: Beaver-felt hats become the height of fashion across Europe. The fur's unique barbed texture creates hats that are waterproof, hold their shape, and signal wealth and status.",
        options: [
          "European hatmakers begin breeding beavers in captivity to meet demand",
          "European beavers are hunted to near-extinction, and traders look west to North America",
          "The highest classes start wearing silk hats to differentiate themselves",
          "European countries begin passing beaver conservation laws - the first of their kind"
        ],
        correctIndex: 1,
        explanation: "Europeans hunted their native beaver populations nearly to extinction. But across the Atlantic, North America had an abundance of beavers — and Indigenous peoples willing to trade pelts. This demand sparked one of the largest commercial enterprises of the colonial era: the North American fur trade."
      },
      {
        event: "European beavers are hunted to near-extinction, and traders look west to North America",
        options: [
          "North American colonies ban fur exports to protect their own hat industry",
          "French and British traders establish competing fur trade networks, mapping vast territories",
          "North American countries begin passing beaver conservation laws",
          "Eastern Canada's population explodes as immigrants pour in to join the local industry"
        ],
        correctIndex: 1,
        explanation: "The Hudson's Bay Company (British) and the North West Company (French-Canadian) built sprawling trade networks deep into the continent. Indigenous peoples became essential partners, trading beaver pelts for European goods. These networks mapped rivers, mountain passes, and territories — effectively charting what would become Canada."
      },
      {
        event: "French and British traders establish competing fur trade networks, mapping vast territories",
        options: [
          "The gun production industry in Canada explodes due to popular demand",
          "The mapped territories and trade posts become the foundation for Canadian Confederation and westward expansion",
          "France wins control of the entire fur trade, blocking British access to the interior",
          "The fur companies evolve into the first North American banks"
        ],
        correctIndex: 1,
        explanation: "When the Hudson's Bay Company sold Rupert's Land to Canada in 1870, it transferred a territory covering nearly 4 million square kilometers — about a third of modern Canada. The trade posts became towns. The canoe routes became railways. A European hat craze had inadvertently mapped and claimed a nation."
      }
    ]
  },
  {
    id: 46,
    title: "The War That Built American Industry",
    events: [
      {
        event: "Early 1800s: Britain is at war with Napoleon and desperately needs sailors. British ships begin stopping American vessels and forcing American sailors into the Royal Navy — a practice called impressment.",
        options: [
          "The U.S. agrees to supply sailors in exchange for trade access to British ports",
          "Outraged Americans demand war, and in 1812 the U.S. declares war on Britain",
          "American merchants accept the losses as a cost of doing business with Europe",
          "Britain apologizes and the practice ends peacefully"
        ],
        correctIndex: 1,
        explanation: "Impressment, combined with British trade restrictions, infuriated Americans. 'War hawks' in Congress pushed for action, and in June 1812, the U.S. declared war on Britain — launching invasions into British North America while British ships blockaded American ports."
      },
      {
        event: "Outraged Americans demand war, and in 1812 the U.S. declares war on Britain",
        options: [
          "American merchants find alternative trade routes through South America",
          "The British naval blockade cuts off American access to European manufactured goods",
          "France comes to America's aid, breaking the British blockade",
          "American exports to Europe actually increase during the war"
        ],
        correctIndex: 1,
        explanation: "The Royal Navy blockaded American ports, strangling trade. Americans could no longer import the manufactured goods they had relied on from Britain. Suddenly, a young nation that had been happy to buy British-made products found itself completely cut off from foreign supply."
      },
      {
        event: "The British naval blockade cuts off American access to European manufactured goods",
        options: [
          "Americans resort to smuggling, creating a vast black market for British goods",
          "Forced to make their own goods, Americans rapidly build a domestic manufacturing industry",
          "The U.S. economy collapses, forcing an early surrender",
          "Britain lifts the blockade after American diplomatic pressure"
        ],
        correctIndex: 1,
        explanation: "Necessity became the mother of invention. By 1816, over 100,000 Americans worked in factories producing $40 million in goods annually. Textile mills, ironworks, and shipyards sprang up across the Northeast. After the war, Congress passed protective tariffs to shield these new industries from British competition — launching America's transformation into an industrial power."
      }
    ]
  },
  {
    id: 47,
    title: "To Tariff or not to Tariff",
    events: [
      {
        event: "1834: The German states are fragmented into dozens of tiny kingdoms and duchies. A merchant shipping goods from one end of Germany to the other must stop and pay tariffs at up to 80 different borders.",
        options: [
          "Merchants abandon overland trade in favor of sea routes around Europe",
          "Prussia convinces the German states to abolish internal tariffs, creating the Zollverein customs union",
          "Each state builds higher walls to protect its local industries",
          "Britain invades to force open German markets for its own exports"
        ],
        correctIndex: 1,
        explanation: "Prussia led the creation of the Zollverein — a customs union that eliminated internal tariffs between member states. For the first time, goods could flow freely across German territory. This created a unified market of 26 million people, making large-scale production and investment suddenly viable."
      },
      {
        event: "Prussia convinces the German states to abolish internal tariffs, creating the Zollverein customs union",
        options: [
          "Freed from tariffs, German artisans flood Europe with cheap handmade goods",
          "Investors rush to build railroads connecting the newly unified market",
          "Austria joins the union and takes control of German economic policy",
          "Without tariff revenue, German states start going bankrupt"
        ],
        correctIndex: 1,
        explanation: "A unified market only works if you can move goods efficiently. Railroad construction exploded — track length quadrupled between 1850 and 1870. But railroads need rails, locomotives, and wheels. All of which require massive amounts of one thing: steel."
      },
      {
        event: "Investors rush to build railroads connecting the newly unified market",
        options: [
          "Germany imports all its steel from Britain, creating a trade imbalance",
          "Demand for steel fuels the rise of German heavy industry, and by 1893 Germany overtakes Britain in steel production",
          "Railroad construction bankrupts German banks, causing an economic depression",
          "The railroads are built with wooden tracks to save on steel costs"
        ],
        correctIndex: 1,
        explanation: "The Krupp family's steel works in Essen became the symbol of German industrial power — their seamless steel railroad wheels revolutionized the industry. By 1893, Germany had surpassed Britain in steel production. By 1913, Germany produced twice as much steel as Britain. A simple decision to abolish internal tariffs had transformed a fragmented backwater into Europe's industrial powerhouse."
      }
    ]
  },
  {
    id: 48,
    title: "The Color of Industry",
    events: [
      {
        event: "1856: A British teenager named William Perkin accidentally creates the first synthetic dye — a vivid purple called mauveine — while trying to synthesize quinine. The discovery launches a new industry.",
        options: [
          "British industry invests to build a booming global textile industry",
          "German companies invest heavily in chemistry research and quickly overtake Britain",
          "Textile makers reject synthetic dyes as inferior to natural alternatives",
          "France patents the technology and bans exports to rival nations"
        ],
        correctIndex: 1,
        explanation: "While the British made the discovery, German companies recognized its potential and invested heavily in industrial chemistry research. BASF, Bayer, and Hoechst built world-class research labs and hired university-trained chemists. By 1877, Germany produced half the world's synthetic dyes. By 1914, German companies controlled 90% of the global market."
      },
      {
        event: "German companies invest heavily in chemistry research and quickly overtake Britain",
        options: [
          "German chemists become the leading researchers on textiles and dyes",
          "The same chemical techniques are applied to create pharmaceuticals, fertilizers, and explosives",
          "Britain retaliates with tariffs that lead to international tension",
          "Synthetic dyes prove to be a short-lived fad as natural dyes make a comeback"
        ],
        correctIndex: 1,
        explanation: "The expertise German chemists developed manipulating organic molecules didn't stop at dyes. Bayer created aspirin. BASF developed the Haber-Bosch process to synthesize ammonia — the foundation of modern fertilizers that now feed half the world's population. The same process also made explosives, which would prove critical when war came."
      },
      {
        event: "The same chemical techniques are applied to create pharmaceuticals, fertilizers, and explosives",
        options: [
          "Germany shares its chemical secrets with Britain and France as part of an international trade union",
          "When WWI begins, Germany's chemical expertise allows it to produce explosives despite being blockaded",
          "When WWI begins, the chemical industry shifts to Russia as German scientists are drafted into the army",
          "Other nations steal German chemical advances via espionage, leveling the playing field"
        ],
        correctIndex: 1,
        explanation: "When the British naval blockade cut off Germany's access to Chilean saltpeter — the natural source of nitrates for explosives — Germany's chemical industry stepped in. The Haber-Bosch process let them synthesize ammonia from air itself. What began as an accident in a British teenager's lab had become the foundation of industrial chemistry, modern agriculture, and the weapons that extended WWI by years."
      }
    ]
  },
  {
    id: 49,
    title: "After the Wall Fell",
    events: [
      {
        event: "1990: The Berlin Wall has fallen and Germany reunifies. But East Germany's economy is built on 8,000+ state-owned enterprises that can't compete in a capitalist market. Something must be done with them.",
        options: [
          "East German companies are given subsidies to slowly adapt to market competition",
          "A government agency is formed to privatize or close thousands of Eastern companies",
          "West German companies are banned from operating in the East to protect local jobs",
          "The government nationalizes West German companies to create economic equality"
        ],
        correctIndex: 1,
        explanation: "The Treuhand agency was tasked with privatizing East German industry virtually overnight. By 1994, it had sold or liquidated over 14,000 companies. The result was mass unemployment — millions of Eastern Germans lost their jobs as outdated factories closed. Wages and property values in the East plummeted."
      },
      {
        event: "A government agency is formed to privatize or close thousands of Eastern companies",
        options: [
          "Unemployed workers migrate west, leaving Eastern cities abandoned",
          "Discount retailers like Aldi and Lidl rapidly expand into the East, exploiting cheap labor and real estate",
          "Eastern Germany returns to being an agricultural economy as industry disappears",
          "Foreign companies refuse to invest, fearing political instability"
        ],
        correctIndex: 1,
        explanation: "With wages and real estate far cheaper than in the West, discount retailers saw an opportunity. Aldi and Lidl — German chains built on ruthless cost-cutting — expanded aggressively into the former East. They hired low-wage workers, snapped up cheap commercial property, and refined their no-frills model for price-sensitive consumers used to scarcity."
      },
      {
        event: "Discount retailers like Aldi and Lidl rapidly expand into the East, exploiting cheap labor and real estate",
        options: [
          "Traditional supermarkets quickly outcompete the discount chains with better selection",
          "The German discount model proves so efficient that Aldi and Lidl expand across Europe and into the US",
          "German consumers reject the discount model in favor of premium grocers",
          "The discount chains remain regional players, unable to scale beyond Germany"
        ],
        correctIndex: 1,
        explanation: "The expansion into Eastern Germany let Aldi and Lidl perfect their ultra-efficient model: tiny product selections, private-label goods, bare-bones stores. They then exported this formula worldwide. Today, Aldi operates over 10,000 stores globally and Lidl over 12,000. The political upheaval of reunification had inadvertently given birth to a retail revolution."
      }
    ]
  },
  {
    id: 50,
    title: "Bread from Air",
    events: [
      {
        event: "1909: German chemist Fritz Haber demonstrates something remarkable — he can combine nitrogen from the air with hydrogen to create ammonia, the key ingredient in fertilizer.",
        options: [
          "The process proves too expensive in Germany and remains a laboratory curiosity",
          "Cheap synthetic fertilizer floods the market, and global crop yields explode",
          "Farmers reject synthetic fertilizer as unnatural and potentially dangerous",
          "Other countries try to steal the technology, fearing German agricultural dominance"
        ],
        correctIndex: 1,
        explanation: "Synthetic nitrogen fertilizer transformed agriculture. The air around us is 78% nitrogen — Haber had figured out how to unlock it. Crops that once exhausted the soil could now be grown year after year in the same fields. Yields doubled, then tripled. Food became cheaper and more abundant than at any point in human history."
      },
      {
        event: "Cheap synthetic fertilizer floods the market, and global crop yields explode",
        options: [
          "Food abundance leads to falling prices, bankrupting farmers worldwide",
          "The global population surges — from 1.6 billion in 1900 to over 8 billion today",
          "Governments stockpile the excess food, creating strategic reserves",
          "Agricultural nations impose export bans to keep food prices stable"
        ],
        correctIndex: 1,
        explanation: "More food meant more people could survive. The Malthusian catastrophe that scientists had predicted — mass starvation as population outstripped food supply — never arrived. Instead, the global population exploded. Today, about half the nitrogen in your body passed through the Haber-Bosch process."
      },
      {
        event: "The global population surges — from 1.6 billion in 1900 to over 8 billion today",
        options: [
          "Rising demand for food drives up land prices, making farmers the new wealthy class",
          "Efficient farms need fewer workers, and by 2007 more humans live in cities than the countryside for the first time in history",
          "Industrial agriculture exhausts the soil, forcing a return to traditional farming methods",
          "Population growth triggers global food shortages, reversing the gains from synthetic fertilizer"
        ],
        correctIndex: 1,
        explanation: "Synthetic fertilizer meant fewer farmers could feed more people. Rural workers, no longer needed on farms, migrated to cities seeking factory jobs. In 2007, for the first time in human history, more people lived in urban areas than rural ones. A chemistry experiment in 1909 had reshaped not just what we eat, but where we live."
      }
    ]
  },

  {
    id: 51,
    title: "The Accidental Zap",
    events: [
      {
        event: "1945: Raytheon engineer Percy Spencer notices a chocolate bar melting in his pocket while standing near a magnetron radar tube",
        options: [
          "The military classifies the discovery and restricts it to weapons research",
          "Raytheon patents the 'Radarange' — a 750-pound, $5,000 microwave oven aimed at restaurants and ships",
          "Scientists dismiss the heating effect as a useless curiosity",
          "Spencer is fired for damaging lab equipment with food experiments"
        ],
        correctIndex: 1,
        explanation: "Raytheon recognized the commercial potential and built the first microwave oven in 1947 — it was six feet tall, weighed 750 pounds, and cost $5,000. Far too big and expensive for homes, it was marketed to restaurants and ocean liners."
      },
      {
        event: "Raytheon patents the 'Radarange' — a 750-pound, $5,000 microwave oven aimed at restaurants and ships",
        options: [
          "Microwaves remain a niche commercial product for decades",
          "Countertop models arrive in the late 1960s, and frozen convenience food explodes in popularity",
          "Consumers reject the technology, fearing radiation from their food",
          "Traditional oven manufacturers successfully lobby to ban microwave sales"
        ],
        correctIndex: 1,
        explanation: "Litton introduced the first countertop model in 1967, and by 1986, 25% of American homes had one. The microwave didn't just reheat leftovers — it created an entire industry of frozen dinners, microwave popcorn, and convenience food that restructured how families eat."
      },
      {
        event: "Countertop models arrive in the late 1960s, and frozen convenience food explodes in popularity",
        options: [
          "Families spend more time together now that cooking takes less effort",
          "Dinner prep drops from an hour to minutes, helping enable the rise of dual-income households",
          "Home cooking disappears entirely as restaurants take over",
          "Nutrition improves because microwaves preserve more vitamins than ovens"
        ],
        correctIndex: 1,
        explanation: "When dinner prep shrank from an hour to minutes, it removed one of the biggest daily time burdens that had kept many women at home. Economists including Harvard's Claudia Goldin credit kitchen technology — especially the microwave — as a quiet contributor to the surge of women entering the workforce in the 1970s and '80s."
      }
    ]
  },

  {
    id: 53,
    title: "The Pill Changes Everything",
    events: [
      {
        event: "1960: The FDA approves Enovid, the first oral contraceptive pill, giving women reliable control over the timing of pregnancy",
        options: [
          "Most women avoid the new drug, fearing side effects",
          "By 1965, 6.5 million American women are on the Pill — one in four married women under 45",
          "Birth rates remain unchanged because social norms still favor large families",
          "Doctors refuse to prescribe it to unmarried women, limiting its impact"
        ],
        correctIndex: 1,
        explanation: "Adoption was staggeringly fast. Within five years, one in four married American women under 45 was using oral contraceptives. For the first time in history, women could reliably separate sex from reproduction — and the downstream effects were enormous."
      },
      {
        event: "By 1965, 6.5 million American women are on the Pill — one in four married women under 45",
        options: [
          "Women continue entering the same careers they always have",
          "Women flood into professional graduate programs — law, medicine, business — because they can plan education around pregnancy",
          "Women leave the workforce in larger numbers to focus on family planning",
          "College enrollment for women declines as marriage becomes more appealing"
        ],
        correctIndex: 1,
        explanation: "When unplanned pregnancy no longer threatened to derail a decade of professional training, women invested in longer education. Women as a share of law school graduates jumped from 5% in 1970 to 30% by 1980. Economists Claudia Goldin and Lawrence Katz documented this in their landmark study 'The Power of the Pill.'"
      },
      {
        event: "Women flood into professional graduate programs — law, medicine, business — because they can plan education around pregnancy",
        options: [
          "The age of first marriage drops as career women seek stability sooner",
          "The average age of first marriage rises from 20 to 25, reshaping the American household into the two-income model",
          "Marriage rates remain steady but divorce rates plummet",
          "Women's earnings immediately reach parity with men's"
        ],
        correctIndex: 1,
        explanation: "The average age of first marriage rose from 20.3 in 1960 to 25.1 by 1990. Women who could control when they had children invested more years in education and careers first. This delayed marriage and childbearing, contributing to the rise of the dual-income household that now defines the American middle class."
      }
    ]
  },

  {
    id: 54,
    title: "The Dead Zone",
    events: [
      {
        event: "April 26, 1986: Reactor No. 4 at the Chernobyl Nuclear Power Plant explodes, releasing 400 times more radiation than the Hiroshima bomb",
        options: [
          "The surrounding area is quickly cleaned up and resettled within a decade",
          "350,000 people are permanently evacuated, and a 30-kilometer exclusion zone — the size of Rhode Island — becomes a ghost landscape",
          "Radiation levels prove lower than expected, and most residents stay",
          "The Soviet Union builds a new city nearby to house displaced workers"
        ],
        correctIndex: 1,
        explanation: "The city of Pripyat (population 49,400) was fully evacuated within 36 hours. A 30-km exclusion zone was established, and 350,000 people were permanently relocated. An area the size of a small US state was simply abandoned."
      },
      {
        event: "350,000 people are permanently evacuated, and a 30-kilometer exclusion zone becomes a ghost landscape",
        options: [
          "The land remains barren and lifeless due to radiation contamination",
          "Wildlife — wolves, lynx, bison, wild horses — repopulates the zone within a decade, thriving in the absence of humans",
          "The abandoned buildings are looted and dismantled for scrap",
          "Radiation mutates local plants into a completely alien ecosystem"
        ],
        correctIndex: 1,
        explanation: "With humans gone, nature rushed in. Wolves, lynx, Przewalski's horses, and European bison repopulated the zone. A 2015 study in Current Biology confirmed that large mammal populations had rebounded to levels comparable to uncontaminated nature reserves. The forests, fields, and waterways teemed with life."
      },
      {
        event: "Wildlife thrives in the absence of humans, and the exclusion zone becomes one of Europe's most biodiverse areas",
        options: [
          "Scientists use the zone to develop radiation-resistant crops",
          "The zone proves that even nuclear contamination is less damaging to ecosystems than sustained human presence",
          "Conservationists push to clean up radiation so the area can become a proper nature park",
          "The wildlife eventually dies off as long-term radiation effects accumulate"
        ],
        correctIndex: 1,
        explanation: "In 2016, the area was designated the Chornobyl Radiation and Ecological Biosphere Reserve. The profoundly counterintuitive lesson: the worst nuclear disaster in history created one of Europe's most important wildlife sanctuaries — because the one thing more destructive to nature than radiation is us."
      }
    ]
  },

  {
    id: 55,
    title: "Whitney's Gift",
    events: [
      {
        event: "1794: Eli Whitney patents the cotton gin, a machine that can separate cotton seeds from fiber 50 times faster than human hands",
        options: [
          "Cotton prices crash because supply exceeds demand",
          "Cotton becomes so profitable that plantation owners massively expand cultivation across the South",
          "Textile factories in the North shut down, unable to process the sudden glut",
          "Whitney becomes the richest man in America from patent royalties"
        ],
        correctIndex: 1,
        explanation: "Whitney believed his invention would reduce the need for slave labor. Instead, the gin made cotton enormously profitable. Production soared from 750,000 bales in 1830 to 2.85 million by 1850. The South's economy became a cotton monoculture — but there was a devastating catch."
      },
      {
        event: "Cotton becomes so profitable that plantation owners massively expand cultivation across the South",
        options: [
          "The booming cotton economy gradually makes slavery economically unnecessary",
          "The number of enslaved people skyrockets — from 700,000 in 1790 to 3.2 million by 1850",
          "Plantation owners switch to paid immigrant labor to cut costs",
          "Northern factories refuse to buy slave-picked cotton on moral grounds"
        ],
        correctIndex: 1,
        explanation: "The gin could clean cotton, but it couldn't pick it — that still required hand labor in brutal conditions. More cotton meant more demand for enslaved workers. The enslaved population rose from roughly 700,000 in 1790 to 3.2 million by 1850, reversing a trend that had been moving toward abolition."
      },
      {
        event: "The number of enslaved people skyrockets, and the South's economy locks into plantation agriculture",
        options: [
          "Economic success leads the South to voluntarily phase out slavery over time",
          "The deepening dependence on slavery makes compromise impossible, and the nation slides toward Civil War",
          "Northern states adopt the cotton economy and slavery spreads nationwide",
          "International pressure forces the South to abandon slavery peacefully"
        ],
        correctIndex: 1,
        explanation: "Cotton became 'King' — by 1860 it accounted for 60% of American exports. The South's identity and wealth were inseparable from slavery. A machine invented to make slavery unnecessary had instead made it indispensable, hardening positions until war became inevitable."
      }
    ]
  },

  {
    id: 56,
    title: "The Miracle Chemical",
    events: [
      {
        event: "1930: Chemist Thomas Midgley Jr. invents chlorofluorocarbons (CFCs) — hailed as a miracle chemical: non-toxic, non-flammable, perfect for refrigerators and aerosol cans",
        options: [
          "CFCs prove too expensive for widespread use",
          "CFCs become ubiquitous — in every refrigerator, air conditioner, and hairspray can on the planet",
          "Competing chemicals quickly replace CFCs before they spread",
          "Environmental concerns halt CFC production within a decade"
        ],
        correctIndex: 1,
        explanation: "CFCs seemed perfect. DuPont marketed Freon as revolutionary, and by the 1970s, CFCs were in hundreds of millions of products worldwide. Peak production reached 82,000 tonnes per year. No one imagined they could pose any danger — they were literally inert."
      },
      {
        event: "CFCs become ubiquitous — in every refrigerator, air conditioner, and hairspray can on the planet",
        options: [
          "Scientists confirm CFCs are completely harmless as originally claimed",
          "In 1985, British scientists discover a massive 'ozone hole' over Antarctica — CFCs are dissolving Earth's protective layer",
          "CFCs cause a minor local pollution problem that's easily cleaned up",
          "CFC production naturally declines as companies find cheaper alternatives"
        ],
        correctIndex: 1,
        explanation: "In May 1985, Joseph Farman, Brian Gardiner, and Jonathan Shanklin published their findings in Nature: a massive hole in the ozone layer over Antarctica, caused by CFCs. NASA's vivid satellite images of the growing hole shocked the world — the 'miracle chemical' was literally dissolving the shield that protects life on Earth from ultraviolet radiation."
      },
      {
        event: "British scientists discover a massive 'ozone hole' over Antarctica — CFCs are dissolving Earth's protective layer",
        options: [
          "Countries argue for decades and fail to agree on any action",
          "Just 18 months later, the Montreal Protocol is signed — the first universally ratified treaty in UN history — and the ozone layer begins healing",
          "Only wealthy nations ban CFCs while developing countries continue using them",
          "Scientists develop a technological fix that neutralizes CFCs in the atmosphere"
        ],
        correctIndex: 1,
        explanation: "In a rare triumph of global cooperation, the Montreal Protocol was signed in 1987 and eventually ratified by every UN member state — all 198 of them. It phased out 98% of ozone-depleting substances, is expected to prevent 280 million cases of skin cancer, and the ozone layer is on track to recover by 2040. Kofi Annan called it 'perhaps the single most successful international agreement to date.'"
      }
    ]
  },

  {
    id: 57,
    title: "Clinton's Folly",
    events: [
      {
        event: "1817: New York Governor DeWitt Clinton pushes to build a 363-mile canal through wilderness to connect the Great Lakes to the Atlantic. Critics call it 'Clinton's Folly'",
        options: [
          "The project is abandoned after engineers realize the terrain is impossible",
          "Amateur engineers — including judges and math teachers — somehow build it in eight years, finishing in 1825",
          "The federal government takes over the project and relocates it to Pennsylvania",
          "Private investors refuse to fund it and the canal is never completed"
        ],
        correctIndex: 1,
        explanation: "Thomas Jefferson himself called the idea 'little short of madness.' But Clinton persisted. The Erie Canal was built by amateur engineers — James Geddes, who laid out the route, had only used surveying instruments for a few hours before starting. Against all odds, the 363-mile canal opened on October 26, 1825."
      },
      {
        event: "The Erie Canal opens in 1825, connecting the Great Lakes to the Hudson River and the Atlantic Ocean",
        options: [
          "Shipping costs remain high because the canal is too narrow for large boats",
          "Shipping costs drop 95% — a barrel of flour goes from $3 to 75 cents — and tolls repay the construction debt within one year",
          "Railroads immediately make the canal obsolete before it can turn a profit",
          "The canal is mainly used for passenger travel rather than freight"
        ],
        correctIndex: 1,
        explanation: "The canal was an instant economic miracle. Shipping costs plummeted by 95%, and the $7 million construction debt was repaid within a single year from toll revenue. Suddenly the entire American Midwest had a cheap highway to the Atlantic."
      },
      {
        event: "Shipping costs drop 95%, and the entire American Midwest now has a cheap route to the Atlantic",
        options: [
          "Philadelphia and Baltimore maintain their positions as America's dominant port cities",
          "New York City becomes the gateway to the continent, catapulting past Philadelphia and Baltimore to become America's dominant city",
          "Chicago overtakes all East Coast cities as the nation's commercial capital",
          "The Midwest develops its own ports and no longer needs East Coast cities"
        ],
        correctIndex: 1,
        explanation: "The canal funneled all Midwest trade through New York's harbor, making it the most important port in the Americas almost overnight. Cities along the route boomed — Buffalo went from 200 settlers to 18,000 in twenty years. New York earned its nickname 'The Empire State' because of one audacious ditch."
      }
    ]
  },

  {
    id: 58,
    title: "The Devil's Apples",
    events: [
      {
        event: "1570: Spanish conquistadors bring the potato back from Peru to Europe. Europeans refuse to eat it, calling it 'the devil's apple'",
        options: [
          "European farmers immediately adopt the potato as a superior crop",
          "For 200 years, the potato is fed only to livestock and prisoners — Europeans consider it poisonous and possibly satanic",
          "The potato is grown purely as an ornamental garden plant",
          "The Catholic Church bans potato cultivation as unchristian"
        ],
        correctIndex: 1,
        explanation: "Europeans were deeply suspicious. The potato is a nightshade (like deadly belladonna), it grows underground (unlike 'honest' grain), and it wasn't mentioned in the Bible. For two centuries it was regarded as animal feed, prisoner food, and possibly witchcraft."
      },
      {
        event: "For 200 years, Europeans refuse to eat potatoes, feeding them only to livestock and prisoners",
        options: [
          "The potato gradually fades from European agriculture entirely",
          "After catastrophic grain famines in the 1770s, rulers like Frederick the Great mandate potato cultivation, and Marie Antoinette wears potato blossoms in her hair",
          "A new cooking method makes potatoes taste better and Europeans adopt them voluntarily",
          "Scientists prove potatoes are nutritious, and public opinion shifts overnight"
        ],
        correctIndex: 1,
        explanation: "It took famine. After the terrible crop failures of the 1770s, Frederick the Great of Prussia issued his 'Kartoffelbefehl' (Potato Order) in 1756 mandating cultivation. Marie Antoinette championed the cause by wearing potato blossoms in her hair. The lowly spud was finally rehabilitated — by royal decree."
      },
      {
        event: "European rulers mandate potato cultivation, and the crop finally catches on across the continent",
        options: [
          "The potato becomes a minor supplement to Europe's grain-based diet",
          "The potato yields 3× more calories per acre than grain, and Europe's population nearly doubles between 1750 and 1850 — fueling the Industrial Revolution",
          "Overreliance on the potato immediately causes famines across Europe",
          "The potato displaces grain but provides the same nutritional value"
        ],
        correctIndex: 1,
        explanation: "Potatoes yield three times more calories per acre than grain and grow in poor soil. Europe's population nearly doubled between 1750 and 1850 — Ireland's alone exploded from 2 million to 8 million. The cheap calories fed factory workers and powered industrialization. Friedrich Engels called the potato 'the equal of iron for its historically revolutionary role.'"
      }
    ]
  },

  {
    id: 59,
    title: "The Nobel Prize Pesticide",
    events: [
      {
        event: "1939: Swiss chemist Paul Müller discovers DDT's insecticidal powers. It's sprayed on soldiers, children, swimming pools, and farms. Müller wins the Nobel Prize",
        options: [
          "DDT proves less effective than traditional pest control methods",
          "DDT is sprayed so liberally that over 600,000 tonnes are applied in the US alone, with peak production reaching 82,000 tonnes per year",
          "Health concerns limit DDT to small-scale military use",
          "Farmers prefer natural pest control and reject DDT"
        ],
        correctIndex: 1,
        explanation: "DDT seemed like a miracle. It killed mosquitoes (fighting malaria), lice (fighting typhus), and crop pests. It was sprayed everywhere with abandon — on beaches, in neighborhoods, directly on people. Production peaked at 82,000 tonnes per year, and over 600,000 tonnes were applied across the US before anyone asked what it was doing to the ecosystem."
      },
      {
        event: "Over 600,000 tonnes of DDT are sprayed across the United States, saturating farms, neighborhoods, and waterways",
        options: [
          "DDT breaks down harmlessly in the environment, confirming its safety",
          "DDT bioaccumulates up the food chain, thinning the eggshells of bald eagles — America's national symbol — driving them to near-extinction",
          "DDT has no effect on wildlife, only killing target insects",
          "Birds develop resistance to DDT within a few generations"
        ],
        correctIndex: 1,
        explanation: "Rachel Carson documented the horror in 'Silent Spring' (1962). DDT didn't break down — it accumulated in the food chain, concentrating in top predators. Bald eagles, peregrine falcons, and pelicans laid eggs with shells so thin they cracked under the parents' weight. The bald eagle population crashed to roughly 400 breeding pairs by 1963."
      },
      {
        event: "DDT nearly wipes out the bald eagle, and Rachel Carson's 'Silent Spring' sparks public outrage",
        options: [
          "The chemical industry successfully discredits Carson and DDT use continues",
          "The outcry launches the modern environmental movement — the EPA bans DDT in 1972, and the bald eagle recovers from 400 pairs to over 9,700 by 2006",
          "Congress bans all pesticides, causing widespread crop failures",
          "The bald eagle is replaced as the national symbol because recovery seems impossible"
        ],
        correctIndex: 1,
        explanation: "Carson's book ignited a movement. The EPA was created and banned DDT in 1972. The Endangered Species Act followed in 1973. The bald eagle — down to ~400 breeding pairs — recovered to over 9,700 by 2006 and was removed from the endangered species list. A single book about a single chemical may have saved America's national bird."
      }
    ]
  },

  {
    id: 60,
    title: "What Hath God Wrought?",
    events: [
      {
        event: "1844: Samuel Morse sends the first telegraph message — 'What hath God wrought?' — from Washington to Baltimore, and telegraph lines spread rapidly alongside railroads",
        options: [
          "Telegraph communication standardizes business practices across the country",
          "Every city keeps its own local solar time, creating chaos — the Northern Pacific Railroad alone uses seven different time zones between St. Paul and Puget Sound",
          "Railroads adopt a single nationwide time immediately to simplify schedules",
          "Cities voluntarily agree to synchronize their clocks with Washington, D.C."
        ],
        correctIndex: 1,
        explanation: "The telegraph and railroads created a crisis no one had anticipated. Every town set clocks by the sun, meaning noon in Chicago was 12:31 in Pittsburgh and 12:24 in Cleveland. The Northern Pacific Railroad dealt with seven time zones on a single route. Train schedules were a nightmare — and missed connections could be deadly."
      },
      {
        event: "Railroad time chaos reaches a breaking point, with hundreds of conflicting local times across America",
        options: [
          "Congress passes a law mandating a single national time zone for simplicity",
          "On November 18, 1883 — 'The Day of Two Noons' — railroads simultaneously reset every clock in America to four new time zones, synchronized by telegraph",
          "Each state is allowed to choose its own time zone, leading to even more confusion",
          "Railroads give up on standardized time and print separate schedules for each city"
        ],
        correctIndex: 1,
        explanation: "It wasn't the government — it was the railroads. On November 18, 1883, every railroad in America simultaneously reset their clocks to four new standard time zones, synchronized by telegraph signal from the Allegheny Observatory in Pittsburgh. Cities woke up to discover their local time had vanished. Some called it 'The Day of Two Noons' because clocks were reset at midday."
      },
      {
        event: "American railroads create four standard time zones, and cities lose their own local times forever",
        options: [
          "The system remains a uniquely American oddity that no other country adopts",
          "The concept spreads globally at the 1884 International Meridian Conference, establishing the worldwide time zone system we still use today",
          "European countries reject the American system and keep local solar time",
          "Scientists propose decimal time (10-hour days) that eventually replaces time zones"
        ],
        correctIndex: 1,
        explanation: "The success of American time zones inspired the 1884 International Meridian Conference in Washington, which established Greenwich as the prime meridian and created the worldwide system of 24 time zones. A telegraph message and some frustrated railroad schedulers had fundamentally changed humanity's relationship with time itself."
      }
    ]
  },

  {
    id: 61,
    title: "The Accidental Growth Spurt",
    events: [
      {
        event: "1928: Alexander Fleming discovers penicillin. By WWII, mass production saves millions of soldiers' lives. Antibiotics seem like a miracle with no downside",
        options: [
          "Antibiotics are reserved exclusively for treating human illness",
          "In 1946, researchers accidentally discover that feeding low-dose antibiotics to chickens makes them grow 50% faster on less feed",
          "Antibiotics prove too expensive to manufacture for any use beyond hospitals",
          "The agricultural industry shows no interest in medical discoveries"
        ],
        correctIndex: 1,
        explanation: "It was an accidental discovery: chickens fed antibiotic-laced feed grew 50% faster and needed less food. American Cyanamid's 'Aureomycin' became the first FDA-approved antibiotic growth promoter in 1951. The economics were irresistible — farmers could raise more meat, cheaper, faster."
      },
      {
        event: "Farmers discover that antibiotics make livestock grow faster, and antibiotic-laced feed becomes standard practice",
        options: [
          "Animals are still raised in traditional pasture-based systems",
          "It becomes profitable to pack thousands of animals into cramped indoor facilities — factory farming is born — because antibiotics prevent the diseases that density would cause",
          "Antibiotic-fed animals produce lower-quality meat that consumers reject",
          "The FDA quickly bans antibiotic use in livestock to protect human health"
        ],
        correctIndex: 1,
        explanation: "Antibiotics were the key that unlocked factory farming. Without them, packing thousands of chickens or pigs into enclosed buildings would cause rampant disease. With low-dose antibiotics in the feed, density became manageable. By 2001, a staggering 70% of all antibiotics sold in the US went to livestock, not humans."
      },
      {
        event: "Factory farming becomes the dominant model, with 70% of all US antibiotics going to livestock rather than humans",
        options: [
          "The antibiotics have no effect beyond the farms where they're used",
          "Decades of sub-therapeutic antibiotic use breeds antibiotic-resistant 'superbugs,' threatening to make our most critical human medicines useless",
          "Scientists develop new antibiotics fast enough to stay ahead of any resistance",
          "Livestock antibiotics are chemically different from human antibiotics, so there's no crossover risk"
        ],
        correctIndex: 1,
        explanation: "Bacteria don't respect farm fences. Decades of low-dose antibiotics in animal feed created perfect breeding grounds for resistant bacteria like MRSA. The WHO now calls antimicrobial resistance 'one of the top 10 global public health threats facing humanity.' A miracle drug that saved millions in WWII may be creating the conditions for the next pandemic."
      }
    ]
  },

  {
    id: 63,
    title: "The Forgotten Pandemic",
    events: [
      {
        event: "1918: The 'Spanish Flu' pandemic sweeps the globe, ultimately killing an estimated 50–100 million people — more than World War I",
        options: [
          "Governments mount effective, coordinated responses that limit the death toll",
          "The pandemic exposes that governments have almost no public health infrastructure — cities with early quarantines (St. Louis) fare far better than those without (Philadelphia)",
          "The pandemic ends quickly because of rapid vaccine development",
          "Most countries are unaffected because the virus remains confined to Europe"
        ],
        correctIndex: 1,
        explanation: "The disparity was stark. St. Louis, which imposed early, aggressive quarantine measures, had a death rate less than half of Philadelphia's, which held a massive parade in the middle of the pandemic. But the core problem was that most governments simply had no infrastructure — no health departments, no disease surveillance, no coordinated response capability."
      },
      {
        event: "The pandemic exposes that no country has adequate public health infrastructure to handle a crisis",
        options: [
          "Governments conclude pandemics are unpreventable and do nothing",
          "Countries race to create Ministries of Health — Russia (1918), Britain (1919) — and the League of Nations establishes a Health Organization in 1923",
          "Private charities take over public health responsibilities instead of governments",
          "Countries focus on military preparedness instead, assuming the next threat will be war"
        ],
        correctIndex: 1,
        explanation: "The catastrophe was a wake-up call. Russia created a Ministry of Health in 1918, Britain in 1919, and many others followed. The League of Nations established its Health Organization in 1923 — the direct forerunner of the World Health Organization. For the first time, governments accepted that protecting public health was a core responsibility of the state."
      },
      {
        event: "Countries create Ministries of Health and international health organizations in response to the pandemic",
        options: [
          "These new institutions remain small and underfunded for the next century",
          "These institutions become the backbone of modern public health — disease surveillance, vaccination campaigns, and the WHO — enabling the eradication of smallpox and the fight against COVID-19",
          "The institutions focus only on pandemic preparedness and ignore other health issues",
          "National health systems prove ineffective and are mostly disbanded by the 1950s"
        ],
        correctIndex: 1,
        explanation: "The WHO was founded in 1948 as a direct descendant of the League's Health Organization. The public health infrastructure born from the 1918 catastrophe went on to eradicate smallpox, nearly eliminate polio, and provide the disease surveillance systems that (imperfectly) fought COVID-19. The worst pandemic in modern history built the systems that protect us today."
      }
    ]
  },

  {
    id: 64,
    title: "Gutenberg's Blind Spot",
    events: [
      {
        event: "1440s: Johannes Gutenberg perfects movable-type printing in Mainz, Germany. Between 1450 and 1500, the number of books in Europe explodes from a few thousand to 20 million",
        options: [
          "Most Europeans ignore printed books and continue relying on oral tradition",
          "Silent, private reading becomes common for the first time, and literacy rates climb dramatically across Europe",
          "Books remain too expensive for anyone except the wealthy",
          "The Church confiscates most printed books to maintain its monopoly on knowledge"
        ],
        correctIndex: 1,
        explanation: "Before the press, reading was mostly done aloud, in groups, by the few who could read. Printed books made silent, private reading possible for the first time. Literacy spread rapidly — and for the first time in history, millions of ordinary people were staring at small text for hours every day."
      },
      {
        event: "Millions of Europeans begin reading printed text for hours each day — something human eyes never evolved to do",
        options: [
          "Human eyesight adapts quickly to the new demands of reading",
          "Poor eyesight becomes a mass problem for the first time, and demand for corrective lenses explodes",
          "People limit their reading to protect their vision",
          "Printers solve the problem by using larger and larger typefaces"
        ],
        correctIndex: 1,
        explanation: "Spectacles had existed in limited form since about 1286, but they were rare luxury items. Suddenly millions of people needed them. The eyeglasses industry scaled up dramatically, and lens-grinding became one of Europe's most important precision crafts."
      },
      {
        event: "The eyeglasses industry scales up, and lens-grinding becomes a major precision craft across Europe",
        options: [
          "Lens-making remains focused on eyeglasses and never expands to other uses",
          "The lens-grinding expertise leads directly to the invention of the telescope (1608) and microscope (1590) — Galileo's telescope overturns our model of the universe",
          "Eyeglasses become a fashion accessory rather than a functional tool",
          "The Church commissions lens makers to build stained glass windows instead"
        ],
        correctIndex: 1,
        explanation: "The telescope and microscope were both invented by Dutch spectacle makers — Hans Lippershey (telescope, 1608) and Zacharias Janssen (microscope, ~1590). Galileo built his own telescope from spectacle-maker technology and used it to overturn the geocentric model of the universe. The chain: printing press → eyeglasses → telescope → scientific revolution."
      }
    ]
  },

  {
    id: 65,
    title: "From Mines to Milan",
    events: [
      {
        event: "1873: Levi Strauss and Jacob Davis patent riveted denim work pants, designed as ultra-durable clothing for California gold miners",
        options: [
          "The pants are a commercial failure because miners prefer traditional work clothes",
          "The riveted pants become the standard uniform for cowboys, miners, and laborers across the American West",
          "The patent is immediately copied by dozens of competitors, undercutting Strauss",
          "The pants are popular only in California and never spread east"
        ],
        correctIndex: 1,
        explanation: "Levi's 'waist overalls' (they weren't called 'jeans' until the 1950s) were purely functional — tough, cheap, and practically indestructible. For decades they were sold only as workwear, worn by cowboys, farmers, and laborers. Nobody would have called them fashion."
      },
      {
        event: "Denim work pants are standard workwear for decades — until James Dean wears them in 'Rebel Without a Cause' (1955)",
        options: [
          "The film has no effect on denim sales, which remain tied to manual labor",
          "Jeans transform overnight from workwear into a symbol of youth rebellion — schools across America ban them",
          "James Dean inspires a brief fad that dies out within a year",
          "Adults adopt jeans as casual weekend wear, but they remain unfashionable"
        ],
        correctIndex: 1,
        explanation: "James Dean in 'Rebel Without a Cause' and Marlon Brando in 'The Wild One' (1953) turned denim into an icon of defiance. Schools across America explicitly banned jeans. Parents hated them. Which, of course, made teenagers want them even more."
      },
      {
        event: "Jeans become a symbol of rebellion and are banned in American schools — which only makes them more desirable",
        options: [
          "The rebellion fades and jeans return to being workwear by the 1970s",
          "Behind the Iron Curtain, Levi's become a black-market symbol of Western freedom worth $200 a pair — and by the 2000s, 'designer jeans' cost hundreds on Milan runways",
          "Jeans remain an exclusively American product that never catches on globally",
          "Denim manufacturers pivot to making other types of clothing"
        ],
        correctIndex: 1,
        explanation: "The anti-establishment aura went global. In the Soviet Union, Levi's were a coveted black-market symbol of Western freedom, traded for as much as $200 a pair. By the 2000s, 'designer jeans' from brands like Gucci and Dolce & Gabbana sold for hundreds of dollars on Milan runways. The cheapest workwear in America had become the most expensive fashion in the world."
      }
    ]
  },

  {
    id: 66,
    title: "Who Cut the Cord?",
    events: [
      {
        event: "2007: Netflix launches streaming video. Viewers begin abandoning cable TV — a trend called 'cord-cutting' — and cable loses over 50 million subscribers by 2022",
        options: [
          "Cable companies adapt by offering cheaper packages and retain most subscribers",
          "As cable revenue collapses, local news stations — which depend on cable carriage fees and local ads — are hit hardest",
          "Local news thrives because people turn to it for information about their communities",
          "Streaming services begin producing local news content to fill the gap"
        ],
        correctIndex: 1,
        explanation: "Cable subscriptions peaked around 100 million in 2012 and then plummeted. National networks and streaming services survived — they had global audiences. But local news stations, which depended on local advertising and cable carriage fees, had nowhere to turn. The economics of covering city hall for a small audience simply collapsed."
      },
      {
        event: "Local news stations slash staff and close. Over 2,500 newspapers shut down between 2005 and 2024",
        options: [
          "Online news startups quickly replace traditional local journalism",
          "Entire communities become 'news deserts' — places with no professional journalists covering local government, schools, or corruption",
          "Citizen journalists on social media fill the gap with quality reporting",
          "National news outlets expand their local coverage to compensate"
        ],
        correctIndex: 1,
        explanation: "Northwestern University's Medill School documented the rise of 'news deserts' — communities where no professional journalist covers the local school board, city council, or police department. By 2024, over 2,500 newspapers had closed, and thousands of communities lost their only source of accountability journalism."
      },
      {
        event: "Thousands of communities become 'news deserts' with no professional journalists covering local affairs",
        options: [
          "Local government improves because officials are freed from adversarial press coverage",
          "Without watchdog journalists, municipal corruption rises, borrowing costs increase, voter turnout drops, and residents turn to national hyper-partisan media instead",
          "Communities self-govern more effectively without media interference",
          "Local politicians voluntarily increase transparency to compensate for the lack of press"
        ],
        correctIndex: 1,
        explanation: "Studies in the Journal of Financial Economics found that when local news disappears, municipal borrowing costs rise because there's less oversight of corruption. Political Communication research shows voter turnout drops. And without local news, residents turn to national hyper-partisan media — increasing polarization. A streaming revolution accidentally created a crisis for democracy."
      }
    ]
  },

  {
    id: 67,
    title: "Three Air Mattresses",
    events: [
      {
        event: "2007: Brian Chesky and Joe Gebbia can't make rent, so they put air mattresses in their San Francisco apartment and rent them to conference-goers. 'AirBed & Breakfast' is born",
        options: [
          "The idea fails because travelers prefer the reliability of hotels",
          "The concept explodes — by 2023, Airbnb has 7 million listings worldwide, more rooms than the top five hotel chains combined",
          "Hotels successfully lobby to ban the service before it can scale",
          "Airbnb remains a niche service used only in a few major cities"
        ],
        correctIndex: 1,
        explanation: "Airbnb IPO'd in December 2020 at a $47 billion valuation. By 2023, it offered over 7 million listings worldwide — more rooms than Marriott, Hilton, IHG, Wyndham, and Hyatt combined. Travelers loved the prices and local feel; hosts loved the extra income. It seemed like a pure win."
      },
      {
        event: "Airbnb grows to 7 million listings worldwide, offering travelers cheap alternatives to hotels",
        options: [
          "Airbnb listings supplement the existing housing supply without affecting local markets",
          "Landlords discover they earn 2–3× more from short-term vacation rentals than long-term tenants, and thousands of apartments are converted from housing to de facto hotels",
          "Hotels lower their prices to compete, benefiting all travelers",
          "Most Airbnb hosts only rent spare rooms, leaving the housing market unaffected"
        ],
        correctIndex: 1,
        explanation: "In tourist-heavy neighborhoods, the math was simple: why rent an apartment for $1,500/month to a local tenant when you could earn $3,000–5,000/month from tourists? Thousands of apartments in cities like Barcelona, Venice, Amsterdam, and New York were pulled from the long-term rental market and converted to full-time vacation rentals."
      },
      {
        event: "Thousands of apartments are converted from long-term housing to vacation rentals, shrinking the supply of available homes",
        options: [
          "Housing costs remain stable because new construction fills the gap",
          "Rents spike in popular destinations — Barcelona sees 50% rent increases in heavily impacted neighborhoods — and cities scramble to pass bans and restrictions",
          "Tourists stop using Airbnb because locals become hostile",
          "Landlords voluntarily return to long-term rentals when they realize the social cost"
        ],
        correctIndex: 1,
        explanation: "In Barcelona, rents rose ~50% in five years in heavily Airbnb-impacted neighborhoods. Venice lost so many residents that it began charging tourists entry fees. Amsterdam, New York, and dozens of other cities enacted restrictions. A tool meant to democratize travel ended up making cities unaffordable for the people who actually live there."
      }
    ]
  },

  {
    id: 71,
    title: "Sogō's Gamble",
    events: [
      {
        event: "1959: Japan National Railways president Shinji Sogō champions a radical plan — a 320-mile high-speed rail line connecting Tokyo and Osaka, the world's first 'bullet train.' The government estimates it will cost 200 billion yen. Sogō pushes construction to begin before the 1964 Tokyo Olympics",
        options: [
          "The project finishes on time and on budget, becoming a model of fiscal discipline",
          "Costs nearly double to 380 billion yen, Sogō is forced to resign in disgrace in 1963 — but the Tōkaidō Shinkansen opens on October 1, 1964, just nine days before the Olympics",
          "The project is cancelled due to spiraling costs and Japan invests in highways instead",
          "Construction delays push the opening well past the Olympics, diminishing public interest"
        ],
        correctIndex: 1,
        explanation: "The Shinkansen's budget exploded from 200 billion to roughly 380 billion yen. Sogō resigned in 1963 under political pressure, but his vision was vindicated: the line opened October 1, 1964, slashing Tokyo-to-Osaka travel from 6 hours 40 minutes to just 4 hours. It carried 100 million passengers within its first three years."
      },
      {
        event: "The Shinkansen proves wildly popular — 100 million passengers by 1967, with an average delay of just 24 seconds per train and zero passenger fatalities from derailments or collisions. Airlines between Tokyo and Osaka suddenly face an existential threat",
        options: [
          "Airlines compete by lowering fares, and the two modes reach a stable equilibrium",
          "The Shinkansen captures 85% of the Tokyo-Osaka travel market, and airlines withdraw service on several corridors entirely — Tokyo-Nagoya and Tokyo-Sendai air routes are simply cancelled",
          "The government forces the Shinkansen to limit service to protect the airline industry",
          "Passengers prefer flying for the speed advantage and airline market share holds steady"
        ],
        correctIndex: 1,
        explanation: "The Shinkansen didn't just compete with airlines — it annihilated them on medium-distance routes. Airlines withdrew Tokyo-Nagoya and Tokyo-Sendai service entirely. When the Hokuriku Shinkansen extension opened in 2015, airline market share on that corridor plummeted from 40% to 10%. Today the bullet train holds roughly 85% of the Tokyo-Osaka market."
      },
      {
        event: "With the Shinkansen connecting cities in under 3 hours, something unexpected happens: instead of decentralizing Japan, the bullet train centralizes it. Workers can now commute enormous distances daily",
        options: [
          "Smaller cities along the line boom as people relocate away from Tokyo's high costs",
          "The Shinkansen enables 'mega-commuting' — workers live 100+ miles away and commute into Tokyo daily, making the capital even more economically dominant while hollowing out regional cities",
          "The bullet train has no significant effect on where people choose to live",
          "Companies relocate their headquarters to smaller cities to reduce costs"
        ],
        correctIndex: 1,
        explanation: "A UCLA study found the Shinkansen actually increased Tokyo's dominance. Rather than spreading economic activity outward, it allowed workers to live in distant exurbs while commuting into the capital. Regional cities became bedroom communities. Japan National Railways accumulated ¥28 trillion in debt partly from network expansion and was privatized in 1987. A train meant to connect Japan's cities ended up feeding everything into one."
      }
    ]
  },

  {
    id: 72,
    title: "The Rubber Boom",
    events: [
      {
        event: "1887: Scottish veterinarian John Boyd Dunlop invents the inflatable rubber tire for his son's tricycle in Belfast. Within a decade, the bicycle craze and then the automobile revolution send global rubber demand skyrocketing",
        options: [
          "Rubber plantations spring up peacefully across Southeast Asia to meet demand",
          "King Leopold II of Belgium, who personally controls the Congo Free State — a territory 85 times the size of Belgium — realizes he's sitting on the world's largest supply of wild rubber vines and issues decrees in 1891-1892 forcing Congolese people to harvest it",
          "Synthetic rubber is quickly invented, making natural rubber obsolete",
          "European nations agree to regulate rubber extraction through international treaties"
        ],
        correctIndex: 1,
        explanation: "Leopold II had gained personal control of the Congo at the 1884-1885 Berlin Conference — 2.35 million square kilometers he ruled from Brussels and never once visited. When rubber demand exploded, he issued three decrees between 1891 and 1892 declaring all 'vacant' land and its products state property, effectively forcing the entire Congolese population into rubber harvesting. State revenue rocketed from 150,000 francs in 1890 to over 18 million francs by 1901."
      },
      {
        event: "Leopold's Force Publique enforces rubber quotas with systematic terror: villages that fail to meet their quota of 3-4 kilos of dried rubber per adult male per fortnight face mass killings. Soldiers are required to bring back severed hands as proof they haven't 'wasted' their bullets",
        options: [
          "The international community immediately intervenes to stop the atrocities",
          "A shipping clerk named E.D. Morel, working at the Liverpool firm Elder Dempster around 1900, notices something impossible: ships sail to Congo carrying only guns and ammunition, but return loaded with rubber and ivory. No trade goods go out — meaning the rubber isn't being traded for, it's being taken by force",
          "The Belgian parliament investigates and removes Leopold from power within months",
          "Congolese resistance forces successfully overthrow Leopold's administration"
        ],
        correctIndex: 1,
        explanation: "E.D. Morel's detective work at the Elder Dempster shipping office was extraordinary. By analyzing cargo manifests, he deduced that the Congo's rubber economy wasn't commerce — it was forced labor enforced by violence. Ships left Liverpool carrying guns, chains, and ammunition. They returned with vast quantities of rubber and ivory. No trade goods ever went out. Morel quit his job and became a journalist and activist, exposing the system."
      },
      {
        event: "Morel teams up with Roger Casement, a British consul who writes a devastating 1903 report documenting the atrocities firsthand. Together they found the Congo Reform Association",
        options: [
          "Their campaign is ignored and Leopold maintains control of the Congo indefinitely",
          "Their movement — joined by Arthur Conan Doyle, Mark Twain, and Booker T. Washington — becomes one of history's first international human rights campaigns, forcing Belgium to annex the Congo from Leopold in 1908. Before losing control, Leopold orders all financial and administrative archives burned",
          "Leopold voluntarily reforms his administration and the abuses gradually stop",
          "The Congo Reform Association focuses only on British colonial abuses and ignores Leopold"
        ],
        correctIndex: 1,
        explanation: "The Congo Reform Association became one of the first mass international human rights campaigns. Arthur Conan Doyle wrote 'The Crime of the Congo,' Mark Twain published the satirical 'King Leopold's Soliloquy,' and Booker T. Washington lent his voice. Under enormous pressure, Belgium annexed the Congo on November 15, 1908. Before surrendering control, Leopold ordered the destruction of all Congo state archives. He told an aide: 'I will give them my Congo, but they have no right to know what I did there.' A pneumatic tire inflated a rubber boom that inflated a genocide — and then inflated the modern human rights movement."
      }
    ]
  },

  {
    id: 73,
    title: "The Missile Scientist's Equation",
    events: [
      {
        event: "1980: Aerospace engineer Song Jian, a missile scientist, reads 'The Limits to Growth' while visiting Europe. He applies military control theory to China's population and concludes the ideal population is 700 million. On September 18, 1980, China formally implements a near-universal one-child policy",
        options: [
          "Chinese families accept the policy and the birth rate declines gradually and evenly",
          "Because of the traditional preference for male heirs — sons carry on the family name and support elderly parents — families use sex-selective abortion to ensure their one permitted child is a boy. The sex ratio at birth skews to 117 boys for every 100 girls, far above the natural 103-107 range",
          "The policy is loosely enforced and has little effect on birth rates or family composition",
          "Families have daughters at higher rates since girls are seen as easier to raise"
        ],
        correctIndex: 1,
        explanation: "The collision of an ancient cultural preference with a brutal numerical constraint produced a staggering demographic distortion. By the 2000s, China's sex ratio at birth hit 117:100, with some rural provinces reaching 140:100. An estimated 30-40 million 'missing women' resulted from sex-selective abortion, abandonment, and under-registration of girls. The Chinese Academy of Social Sciences projected 24 million more men than women of marriageable age by 2020 — men called 'bare branches' (guang gun) who would never find wives."
      },
      {
        event: "By 2015, China has a generation of 'Little Emperors' — single children lavished with attention by two parents and four grandparents — and tens of millions of men who cannot find partners. The government abolishes the one-child policy on January 1, 2016, then allows three children in 2021, then removes all limits entirely in July 2021",
        options: [
          "Chinese couples eagerly have more children once restrictions are lifted",
          "Almost nobody wants more children anymore — the government expected 21.9 million births in 2018 but got only 15.2 million, the lowest since 1961. By 2023, births hit a record low of 9.02 million. China's fertility rate falls to approximately 1.0 — less than half the 2.1 needed for a stable population",
          "Birth rates stabilize at replacement level within a few years of lifting restrictions",
          "Immigration offsets the declining birth rate and China's population remains stable"
        ],
        correctIndex: 1,
        explanation: "The cruelest irony: the one-child policy worked so well that it changed Chinese culture permanently. Young Chinese, especially women, now see small families or no children as ideal. The cost of housing, education, and child-rearing in modern China is staggering. When the government lifted all restrictions in July 2021, births kept falling — 9.56 million in 2022, 9.02 million in 2023. The policy didn't just reduce births for one generation; it eliminated the desire for children in the next."
      },
      {
        event: "China's population begins shrinking. A country that once feared having too many people now faces the opposite crisis",
        options: [
          "China's economy continues growing because automation replaces the missing workers",
          "A missile scientist's population formula has set China on course to lose 67 million working-age people by 2030 while doubling its elderly. By 2050, one-third of China will be over 60. One study projects China's population will drop from 1.4 billion to 525 million by 2100",
          "China successfully reverses the trend through financial incentives for having children",
          "The demographic shift has minimal economic impact due to China's large existing population"
        ],
        correctIndex: 1,
        explanation: "The United Nations projects China will lose 67 million working-age people by 2030 while simultaneously doubling the number of elderly. The Chinese Academy of Social Sciences estimates that by 2050, one-third of the country will be aged 60 or older. A Shanghai Academy of Social Sciences study projects China's population could plummet from 1.4 billion today to just 525 million by 2100. In September 2024, China announced it would raise the retirement age for the first time since the 1950s. A missile scientist's equation, meant to save China from overpopulation, may have instead set it on a path to demographic collapse."
      }
    ]
  },

  {
    id: 74,
    title: "Nasser's Dream",
    events: [
      {
        event: "1956: Egyptian President Gamal Abdel Nasser nationalizes the Suez Canal after the US and UK withdraw funding for his dream project — a massive dam across the Nile at Aswan. The Soviet Union steps in with $1.12 billion in loans at just 2% interest, and construction of the Aswan High Dam begins in 1960",
        options: [
          "The dam is completed quickly and all its effects are positive for Egypt",
          "The dam is completed in 1970 and successfully controls flooding, generates 2,100 megawatts of electricity, and reclaims 840,000 hectares of farmland — but it also traps 134 million tons of nutrient-rich sediment per year behind it that used to flow downstream to the Nile Delta and Mediterranean Sea",
          "The Soviet engineers abandon the project and the dam is never completed",
          "Egypt builds the dam but it proves too small to control the Nile's flooding"
        ],
        correctIndex: 1,
        explanation: "The Aswan High Dam was an engineering triumph: 3,830 meters long, 111 meters tall, creating Lake Nasser — one of the world's largest reservoirs at 500 kilometers long. It protected Egypt from devastating droughts in 1972-73 and 1983-87 that ravaged the rest of Africa. But the Nile's annual flood had carried 134 million tons of sediment — rich in nitrogen, phosphorus, and potash — that fertilized Egypt's fields and fed the Mediterranean's coastal ecosystem. The dam stopped it all."
      },
      {
        event: "With 134 million tons of annual sediment now trapped behind the dam, the consequences cascade: the nutrient-rich plume that once fed the southeastern Mediterranean ecosystem vanishes",
        options: [
          "Egyptian fishermen easily adapt by switching to freshwater fishing in Lake Nasser",
          "The sardine catch off Egypt's coast collapses from 18,000 tons in 1962 to just 460 tons by 1968 — a 97% drop. Meanwhile, Egypt's farmland, deprived of free natural fertilizer, becomes dependent on chemical fertilizers, and the red-brick industry starts mining arable topsoil, destroying 1,000 square kilometers of farmland by 1984",
          "Mediterranean fish populations are unaffected because they don't depend on Nile nutrients",
          "The Egyptian government quickly builds fish farms to replace the lost catch"
        ],
        correctIndex: 1,
        explanation: "The ecological cascade was devastating. Sardines — which depended on the nutrient plume from Nile sediment — virtually disappeared. A 1971 CIA report noted Egypt's Mediterranean catch shrank from 35,000-40,000 tons to under 20,000 tons. Without free sediment fertilizing their fields, farmers needed expensive chemical fertilizers. And the red-brick industry, deprived of Nile mud, began excavating fertile farmland itself — destroying roughly 1,000 square kilometers of arable land by 1984 before the government banned the practice 'with only modest success.'"
      },
      {
        event: "The dam that was supposed to make Egypt's farmland more productive triggers a chain of ecological destruction that extends from the Mediterranean seafloor to the farm fields along the Nile",
        options: [
          "Egypt tears down the dam after recognizing the environmental damage",
          "Egypt is forced to spend $3.1 billion on drainage systems to combat waterlogging and soil salinization caused by year-round irrigation — a dam built to feed Egypt's people ultimately made the country more dependent on imported food and foreign-made fertilizer than it was before",
          "The environmental effects are minor and easily managed by Egyptian engineers",
          "The dam's benefits so dramatically outweigh the costs that no remediation is needed"
        ],
        correctIndex: 1,
        explanation: "Without the Nile's seasonal flood cycle, groundwater levels stayed permanently high, pulling salt to the surface through capillary action and poisoning cropland. Egypt spent $3.1 billion from 1973 to 2002 installing subsurface drainage across over 2 million hectares. The sardine fishery eventually partially recovered to 8,590 tons by 1992 — still less than half its pre-dam peak. One observer wrote: 'As a structure it is a success. But in its effect on the ecology of the Nile Basin — most of which could have been predicted — it is a failure.' A Cold War megaproject meant to make Egypt self-sufficient in food instead made it dependent on chemical imports to grow crops on its own ancient soil."
      }
    ]
  },

  {
    id: 75,
    title: "A Penny Per Tail",
    events: [
      {
        event: "1897: France completes a grand colonial sewer system beneath Hanoi, French Indochina — 14 kilometers of modern underground tunnels meant to make the city as sanitary as Paris. The sewers are a showcase of colonial engineering and a symbol of France's 'civilizing mission'",
        options: [
          "The sewer system works perfectly and Hanoi becomes one of Asia's cleanest cities",
          "The warm, dark, wet tunnels become a paradise for rats — millions of brown rats colonize the sewers and begin emerging into French homes and businesses, carrying bubonic plague. By 1902, rat sightings in the European quarter trigger panic among colonial officials",
          "The sewers flood during monsoon season and are quickly abandoned",
          "Vietnamese residents refuse to connect their homes to the French sewer system"
        ],
        correctIndex: 1,
        explanation: "The French had built a highway system — for rats. The sewers connected every European home and business in Hanoi through a vast underground network of warm, wet tunnels. Brown rats thrived and multiplied into the millions, then started emerging through drains and toilet pipes directly into French colonial homes. When cases of bubonic plague appeared in Hanoi in 1902, the colonial government realized their proudest infrastructure project had created a public health catastrophe."
      },
      {
        event: "1902: In a panic, the French colonial government in Hanoi hires Vietnamese rat-catchers and offers a bounty: one cent per rat tail submitted as proof of kill. At the program's peak, residents turn in over 20,000 tails per day",
        options: [
          "The bounty program succeeds and Hanoi's rat population plummets within months",
          "Colonial officials start noticing rats running around Hanoi without tails — enterprising rat-catchers have been catching rats, cutting off their tails to collect the bounty, then releasing the rats alive so they can breed and produce more valuable tails",
          "The Vietnamese rat-catchers refuse the work because the pay is too low",
          "Rat catchers eliminate the rats but the plague continues spreading through other means"
        ],
        correctIndex: 1,
        explanation: "The French had accidentally created a rat-farming incentive. Why kill a rat worth one cent when you can clip its tail, release it, and let it breed more one-cent tails? Colonial officials soon discovered tailless rats scurrying through the streets of Hanoi — living proof that the bounty hunters were running a catch-and-release operation. Even worse, some enterprising Vietnamese began breeding rats in captivity, turning their homes into rat farms to harvest tails for the bounty."
      },
      {
        event: "The rat bounty program is cancelled in disgrace. The French have managed to increase Hanoi's rat population while paying for the privilege",
        options: [
          "The French never attempt pest control in Hanoi again",
          "The debacle becomes a famous case study in 'perverse incentives' — when a reward designed to solve a problem instead makes it worse. Economist Horst Siebert later coins the term 'cobra effect' for such backfiring bounties, and the pattern repeats worldwide: from Fort Benning paying for wild pigs (soldiers imported pigs to collect bounties) to paleontologists paying locals per fossil fragment (locals smashed complete fossils into pieces to maximize payment)",
          "The French switch to offering bounties for dead rats instead of just tails, which solves the problem",
          "Hanoi's rat problem resolves on its own when the plague subsides"
        ],
        correctIndex: 1,
        explanation: "Economist Horst Siebert coined the term 'cobra effect' in 2001 for bounty programs that backfire — named after an apocryphal story about cobra breeding in British India, though the Hanoi rat episode is far better documented. The pattern is universal: at Fort Benning, soldiers imported wild pigs to collect bounties; paleontologists who paid locals per bone fragment found them smashing complete skeletons into pieces. A sewer built to civilize Hanoi became a rat superhighway. A bounty meant to kill rats created rat farms. The French colonial government's proudest infrastructure project and its most rational policy combined to produce the exact opposite of their intended effect — a perfect monument to the law of unintended consequences."
      }
    ]
  },
  {
    id: 76,
    title: "The Patriot's Cup",
    events: [
      {
        event: "1773: American colonists dump 342 chests of British East India Company tea into Boston Harbor to protest the Tea Act's taxation without representation",
        options: [
          "Tea prices skyrocket and colonists simply pay the higher price",
          "Colonists boycott tea entirely as a patriotic act — drinking tea becomes seen as treasonous loyalty to the British Crown, and Americans turn to coffee as the 'drink of freedom'",
          "The British East India Company collapses immediately from the financial loss",
          "Colonists switch to drinking locally grown herbal teas instead"
        ],
        correctIndex: 1,
        explanation: "Tea had been the colonies' most popular drink, but overnight it became politically toxic. Drinking tea marked you as a Loyalist. Coffee houses — already gathering spots for revolutionary planning — became the patriotic alternative. John Adams himself wrote to his wife Abigail that he had switched to coffee as a matter of duty."
      },
      {
        event: "Coffee replaces tea as America's national drink. Demand for coffee beans explodes as the new nation grows",
        options: [
          "Americans begin growing coffee domestically across the southern states",
          "Massive coffee plantations spread across Latin America — Brazil, Colombia, Guatemala, and Costa Rica reshape their entire economies around feeding America's coffee habit",
          "Coffee consumption fades within a generation as Americans return to tea",
          "European traders maintain control of the global coffee supply"
        ],
        correctIndex: 1,
        explanation: "American coffee demand reshaped an entire continent. Brazil cleared vast tracts of Atlantic Forest for coffee plantations and by 1900 produced 75% of the world's coffee. Colombia, Guatemala, and Costa Rica built their economies around the crop. The US consumed more coffee than any other nation, and Latin American agriculture was restructured to serve that appetite."
      },
      {
        event: "By the 20th century, the United States consumes more coffee than any other nation, and Latin American economies depend on coffee exports",
        options: [
          "Coffee consumption plateaus and the industry stabilizes",
          "The infrastructure of coffee culture — roasters, cafés, espresso bars — eventually gives rise to the modern specialty coffee revolution, from Starbucks to third-wave artisan roasters, making coffee shops the defining social space of American life",
          "Americans switch back to tea once political tensions with Britain cool",
          "Coffee farming moves to Africa and Asia, ending Latin American dominance"
        ],
        correctIndex: 1,
        explanation: "A political protest against tea taxes created the world's largest coffee-consuming nation. That demand reshaped Latin American agriculture for two centuries and built the infrastructure for America's coffee obsession — from diner coffee to Starbucks to pour-over artisan shops. The café became America's 'third place' between home and work, all because colonists threw tea in a harbor in 1773."
      }
    ]
  },
  {
    id: 77,
    title: "The Taxman's Bricks",
    events: [
      {
        event: "1696: England introduces a Window Tax — property owners are charged based on the number of windows in their buildings, with higher rates for more windows",
        options: [
          "Wealthy homeowners proudly pay the tax as a status symbol",
          "Homeowners across England begin bricking up their windows to reduce their tax bills — landlords seal windows in tenement buildings, and architects design new buildings with fewer, smaller openings",
          "The tax generates enormous revenue and is quickly adopted across Europe",
          "Homeowners simply cover windows with curtains to hide them from tax assessors"
        ],
        correctIndex: 1,
        explanation: "The Window Tax created a perverse incentive to eliminate light and air. Across England and Scotland, you can still see bricked-up window frames in Georgian buildings — physical scars of tax avoidance. Landlords sealed windows in tenements housing the poor, and architects designed homes with fewer openings. The phrase 'daylight robbery' likely originates from this period."
      },
      {
        event: "Across England, buildings become darker and more poorly ventilated as windows are sealed. The poorest housing suffers most — landlords brick up windows in cramped tenements",
        options: [
          "Residents adapt to the darkness without significant health effects",
          "Widespread vitamin D deficiency, respiratory illness, and disease outbreaks surge in windowless housing — tuberculosis and rickets become epidemic in dark, unventilated rooms, killing tens of thousands",
          "The government quickly repeals the tax when it sees the effects",
          "Wealthy neighborhoods are affected just as badly as poor ones"
        ],
        correctIndex: 1,
        explanation: "Dark, unventilated rooms became breeding grounds for disease. Tuberculosis — which thrives in dark, poorly ventilated spaces — became epidemic in English cities. Rickets from vitamin D deficiency crippled children who never saw direct sunlight. Medical reformers began documenting the direct connection between housing conditions and disease rates."
      },
      {
        event: "Doctors and reformers document the link between dark, windowless housing and epidemic disease, building a case that housing conditions are a public health issue",
        options: [
          "The medical establishment dismisses housing as irrelevant to health",
          "The evidence fuels the public health reform movement — the Window Tax is finally repealed in 1851, and reformers like Edwin Chadwick use the data to push through Britain's first Public Health Acts, establishing the principle that governments must regulate housing conditions to protect citizens' health",
          "Parliament increases the Window Tax to fund hospitals instead",
          "Homeowners simply reopen their bricked-up windows on their own"
        ],
        correctIndex: 1,
        explanation: "The Window Tax was repealed in 1851 after 155 years, but its legacy was profound. The epidemic of disease in darkened housing gave reformers like Edwin Chadwick the ammunition to argue that government had a duty to regulate living conditions. The 1848 Public Health Act and subsequent legislation established modern building codes requiring minimum light and ventilation — all because a tax on windows had demonstrated, catastrophically, what happens when you let people live in darkness."
      }
    ]
  },
  {
    id: 78,
    title: "The Helpful Toad",
    events: [
      {
        event: "1935: Australian sugar cane farmers are losing crops to native cane beetles. Scientists import 2,400 cane toads from Hawaii as a biological control agent, releasing them into Queensland's sugar cane fields",
        options: [
          "The toads eat the beetles and the sugar cane industry is saved",
          "The toads completely ignore the cane beetles — the beetles live at the top of cane stalks, and the toads can't climb. Instead, the toads begin eating everything else and breeding explosively in Australia's warm, predator-free environment",
          "The toads die off quickly because they can't adapt to Australian conditions",
          "The toads eat the beetles but also destroy the sugar cane plants"
        ],
        correctIndex: 1,
        explanation: "The toads never ate a single cane beetle. The beetles lived on top of tall sugar cane stalks — far out of reach of a ground-dwelling toad. Instead, the toads found Australia to be paradise: warm, wet, and completely lacking the predators that controlled their population in the Americas. They bred explosively and started eating native insects, frogs, and small mammals."
      },
      {
        event: "The cane toad population explodes across northern Australia. By 2020, their numbers exceed 200 million. They spread west at 50 km per year, killing native species — their skin secretes a toxin lethal to any predator that tries to eat them",
        options: [
          "Scientists find a natural predator to control the toads",
          "The cane toad disaster becomes the world's most-cited case study in invasive species management — every biology textbook uses it as the cautionary example of why introducing non-native species is dangerous",
          "The toads eventually reach population equilibrium and stop spreading",
          "Australian wildlife quickly evolves resistance to the toad toxin"
        ],
        correctIndex: 1,
        explanation: "No predator could eat them without dying. Quolls, goannas, freshwater crocodiles, and snakes that tried to eat cane toads were poisoned by bufotoxin in the toad's skin. Entire populations of native predators collapsed in the toads' wake. The disaster became so infamous that it fundamentally changed how every country approaches biological pest control."
      },
      {
        event: "The cane toad catastrophe transforms global attitudes toward biological control and species introduction",
        options: [
          "Countries continue introducing species without much additional oversight",
          "Australia's Biosecurity Act and international agreements like the Convention on Biological Diversity now require rigorous risk assessment before any intentional species introduction — the cane toad is the reason every country has invasive species protocols today",
          "Scientists develop a way to remove cane toads from Australia entirely",
          "The cane toad problem is eventually solved by a genetically modified virus"
        ],
        correctIndex: 1,
        explanation: "2,400 toads released to solve a beetle problem became 200 million poisonous invaders that reshaped an entire continent's ecosystem. The catastrophe is now the foundational cautionary tale taught in every ecology course worldwide. Australia's strict modern biosecurity laws — among the toughest on Earth — exist because of those 2,400 toads. The lesson: ecosystems are not machines with interchangeable parts."
      }
    ]
  },
  {
    id: 79,
    title: "The Empty Frame",
    events: [
      {
        event: "1911: Vincenzo Peruggia, an Italian handyman who had helped install protective glass at the Louvre, hides inside the museum overnight and walks out the next morning with the Mona Lisa under his coat",
        options: [
          "The theft is discovered immediately and Peruggia is caught within hours",
          "The Louvre doesn't even notice the painting is missing for 28 hours — and when they do, the theft makes front-page news in every major newspaper worldwide. Crowds flock to the Louvre to stare at the empty wall where it hung",
          "The painting is quietly returned before anyone notices",
          "Museum security immediately tightens and the story stays out of the press"
        ],
        correctIndex: 1,
        explanation: "The Louvre was so large and poorly organized that a guard assumed the painting had been removed for photography. It wasn't until the next afternoon that anyone raised an alarm. The theft became a global media sensation — the first truly viral art story. Thousands of people lined up at the Louvre specifically to see the empty space on the wall, a surreal spectacle that kept the story in newspapers for over two years."
      },
      {
        event: "The Mona Lisa's disappearance becomes the biggest news story in the world. For two years, it appears on front pages from Paris to Buenos Aires. The painting — previously one of many respected Renaissance works — becomes the most famous artwork on Earth",
        options: [
          "Interest fades once the painting is recovered and it returns to its previous status",
          "The unprecedented global media attention transforms the Mona Lisa from a well-regarded painting into a cultural icon — its fame becomes self-reinforcing, and it remains the world's most recognized artwork for the next century",
          "Other stolen artworks receive similar levels of fame",
          "The Louvre's reputation suffers permanently from the security failure"
        ],
        correctIndex: 1,
        explanation: "Before the theft, the Mona Lisa was admired by art scholars but not particularly famous with the public. The two-year media circus — including wild theories involving Picasso and poet Guillaume Apollinaire, who was actually arrested — made it a household name. When Peruggia was caught trying to sell it in Florence in 1913, the recovery was celebrated like a national victory. The painting's fame had become permanent."
      },
      {
        event: "The Mona Lisa's status as the world's most famous painting creates a new phenomenon: art as celebrity. The painting becomes a must-see tourist attraction rather than just an artwork",
        options: [
          "Other museums try to replicate the effect by staging their own thefts",
          "The concept of the 'blockbuster artwork' transforms museums into tourist attractions — the Louvre builds its entire visitor experience around the Mona Lisa, and the model of art-as-spectacle spreads worldwide, creating the modern museum industry where a single famous piece drives millions of visits",
          "The art world rejects celebrity culture and returns to quiet scholarly appreciation",
          "The Mona Lisa is moved to a smaller museum to reduce crowds"
        ],
        correctIndex: 1,
        explanation: "Today, 80% of the Louvre's 10 million annual visitors come primarily to see the Mona Lisa. One painting drives a tourism economy worth billions. The 'blockbuster exhibition' model — built around star artworks that draw massive crowds — was born from the Mona Lisa's accidental fame. A petty theft by a disgruntled handyman who wanted to 'return' an Italian painting to Italy created the modern museum-as-tourist-attraction model and made the Mona Lisa priceless."
      }
    ]
  },
  {
    id: 80,
    title: "The Admiral's Black Ships",
    events: [
      {
        event: "1853: US Commodore Matthew Perry sails four steam-powered warships into Edo Bay, Japan, forcing the end of 220 years of isolation under the Tokugawa shogunate",
        options: [
          "Japan immediately goes to war with the United States",
          "The shock of Western military superiority triggers the Meiji Restoration — Japan's government launches a crash modernization program, sending thousands of students abroad to learn every aspect of Western technology, industry, and culture",
          "Japan closes its borders even more tightly after Perry leaves",
          "The Tokugawa shogunate successfully negotiates Perry's departure with no concessions"
        ],
        correctIndex: 1,
        explanation: "Perry's 'Black Ships' demonstrated that Japan's 220-year isolation had left it militarily helpless. The shock toppled the Tokugawa shogunate within 15 years and launched the Meiji Restoration. The new government sent students to Germany to learn military science, to Britain to learn naval engineering, to France to learn law, and to America to learn agriculture — an unprecedented national crash course in modernization."
      },
      {
        event: "Japan's Meiji government sends students to every Western country to master their specialties. In 1918, a young chemistry student named Masataka Taketsuru travels to Scotland specifically to learn the art of whisky distilling",
        options: [
          "Taketsuru finds Scottish distillers unwilling to share their secrets with a foreigner",
          "Taketsuru apprentices at multiple Scottish distilleries, masters the craft, marries a Scottish woman named Rita, and returns to Japan to found the country's whisky industry — applying Scottish techniques to Japanese water and climate",
          "Taketsuru abandons whisky and brings back beer-brewing techniques instead",
          "The Japanese government recalls Taketsuru before he can complete his studies"
        ],
        correctIndex: 1,
        explanation: "Taketsuru studied at multiple distilleries in Scotland, meticulously recording every detail of the process. He married Jessie Roberta 'Rita' Cowan and returned to Japan, where he first helped establish Suntory's Yamazaki distillery, then founded his own company: Nikka Whisky. He applied Scottish techniques to Japan's pristine mountain water and distinct climate, creating something genuinely new."
      },
      {
        event: "Taketsuru establishes Japanese whisky, blending Scottish tradition with Japanese precision and local ingredients. The industry he founded grows quietly for decades",
        options: [
          "Japanese whisky remains a minor domestic curiosity, never exported",
          "In 2003, Suntory's Yamazaki 12 Year wins a gold medal at the International Spirits Challenge — then Japanese whiskies begin routinely beating the greatest Scotch single malts in blind international competitions, shocking the whisky world and proving that Perry's forced opening of Japan eventually produced the world's finest whisky",
          "Japanese whisky is exposed as an inferior imitation of Scotch",
          "The Japanese whisky industry collapses after Taketsuru's death"
        ],
        correctIndex: 1,
        explanation: "American gunboat diplomacy forced Japan open. Japan's crash modernization sent a student to Scotland. That student brought whisky-making back to Japan. A century later, Japanese whisky — Yamazaki, Hakushu, Nikka, Hibiki — regularly wins 'World's Best' over Scotland's finest. In 2015, Jim Murray's Whisky Bible named Yamazaki Sherry Cask the best whisky in the world. Perry's Black Ships eventually produced something the Scots never imagined: a rival that could beat them at their own game."
      }
    ]
  },
  {
    id: 81,
    title: "The Sailor's Remedy",
    events: [
      {
        event: "1747: Scottish naval surgeon James Lind conducts one of history's first controlled clinical trials aboard HMS Salisbury, testing six treatments for scurvy on twelve sick sailors — vinegar, cider, seawater, sulfuric acid, oranges and lemons, or a spice paste",
        options: [
          "All six treatments prove equally ineffective against scurvy",
          "The two sailors given oranges and lemons recover dramatically within days while all others remain sick — proving citrus cures scurvy, though the Navy takes 50 years to act on the finding",
          "The sailors refuse to participate in the experiment",
          "The seawater treatment unexpectedly proves most effective"
        ],
        correctIndex: 1,
        explanation: "Lind's trial was elegantly simple: same disease, same ship, six different treatments. The citrus pair recovered so fast that one returned to duty within six days. Despite publishing his results in 1753, the British Admiralty wouldn't mandate citrus rations for another 42 years — bureaucratic delay that killed thousands of additional sailors from a now-preventable disease."
      },
      {
        event: "1795: The Royal Navy finally mandates daily lime or lemon juice for all sailors. British crews become dramatically healthier than their French and Spanish rivals, who continue losing men to scurvy at catastrophic rates",
        options: [
          "France and Spain quickly adopt the same citrus policy",
          "British crews gain a decisive strategic advantage — they can stay at sea for months longer than scurvy-weakened enemy fleets, patrol distant waters, and maintain blockades that French and Spanish ships cannot sustain",
          "The lime juice proves ineffective at sea because it loses potency",
          "British sailors mutiny over the taste of the lime juice rations"
        ],
        correctIndex: 1,
        explanation: "The health advantage was staggering. A British fleet could remain on station for months while French and Spanish crews were devastated. During the Napoleonic Wars, Napoleon's navy struggled to keep crews healthy on long voyages while the Royal Navy patrolled the world's oceans with relatively healthy sailors. This asymmetry was not about courage or tactics — it was about citrus."
      },
      {
        event: "British naval superiority — built partly on healthier crews who can operate for longer at sea — proves decisive in the wars against Napoleon",
        options: [
          "France eventually matches Britain's naval power through sheer numbers",
          "Britain's ability to maintain global naval supremacy enables it to build the largest empire in history — controlling a quarter of the world's land and population. A shipboard experiment with lemons gave Britain the maritime health advantage that helped make it the world's superpower for over a century",
          "Britain immediately disbands most of its navy after defeating Napoleon",
          "Other nations develop superior naval technology that negates Britain's health advantage"
        ],
        correctIndex: 1,
        explanation: "The connection seems absurd: lemons → empire. But naval power was the foundation of British global dominance, and sustained naval power required healthy crews. The Admiralty's long-delayed adoption of Lind's citrus cure gave Britain a compounding advantage: healthier sailors meant longer deployments, which meant more control of trade routes, which meant more wealth, which meant more ships. A Scottish doctor's experiment with twelve sick sailors helped build an empire that ruled a quarter of the world."
      }
    ]
  },
  {
    id: 82,
    title: "The Falling Ash",
    events: [
      {
        event: "536 AD: A massive volcanic eruption — likely Ilopango in El Salvador — ejects enormous quantities of sulfur and ash into the upper atmosphere, creating a dust veil that dims the sun across the entire Northern Hemisphere",
        options: [
          "The volcanic ash settles quickly and has no lasting effect",
          "An 18-month fog blankets Europe, the Middle East, and Asia — the Byzantine historian Procopius writes that 'the sun gave forth its light without brightness, like the moon' for over a year. Temperatures drop 2.5°C, crops fail across Eurasia, and famine spreads",
          "Only the Americas are affected since the volcano erupted there",
          "The eruption triggers a brief but dramatic warming period"
        ],
        correctIndex: 1,
        explanation: "536 AD has been called 'the worst year to be alive.' Tree-ring data from around the world confirms that summer temperatures dropped dramatically. The Byzantine Empire, Scandinavia, China, and Mesoamerica all recorded crop failures. Procopius described the sun looking like the moon for 18 months. Recent ice-core analysis pinpointed the culprit as a massive eruption, likely Ilopango in modern El Salvador."
      },
      {
        event: "The crop failures and cold weaken populations across Eurasia. In 541 AD, the weakened Byzantine Empire is struck by the Plague of Justinian — the first recorded bubonic plague pandemic — which kills 25 to 50 million people, roughly half the empire's population",
        options: [
          "The Byzantine Empire recovers quickly and reconquers its lost territories",
          "The combination of volcanic winter and plague permanently weakens the Byzantine Empire — Emperor Justinian's dream of restoring the Roman Empire collapses, and a massive power vacuum opens across the Eastern Mediterranean and Middle East",
          "The plague strengthens the Byzantine Empire by eliminating internal dissent",
          "Western Europe is hit harder than the Byzantine Empire"
        ],
        correctIndex: 1,
        explanation: "Justinian had been on the verge of reassembling the Roman Empire, having reconquered North Africa, Italy, and parts of Spain. The plague shattered those ambitions. Tax revenue collapsed, the army couldn't be maintained, and reconquered territories couldn't be held. The once-dominant Byzantine Empire became a shadow of its former self, creating a power vacuum across a vast region stretching from Egypt to Persia."
      },
      {
        event: "The weakened Byzantine and Persian empires — both devastated by decades of plague and climate disaster — leave a power vacuum across the Middle East and North Africa",
        options: [
          "The Byzantine Empire rebuilds and fills the vacuum within a generation",
          "The Arab conquests of the 7th century sweep through the weakened region with astonishing speed — within 100 years of Muhammad's death in 632, the Islamic caliphate stretches from Spain to Central Asia, reshaping the religious and cultural map of the world in ways that persist to this day",
          "The Persian Empire fills the vacuum and dominates the region for centuries",
          "The region remains fragmented with no dominant power emerging"
        ],
        correctIndex: 1,
        explanation: "A volcano in Central America dimmed the sun. The darkness caused famine. Famine weakened empires. Weakened empires were ravaged by plague. Plague created a power vacuum. That vacuum was filled by the fastest-expanding civilization in history. The Arab conquests — militarily impressive on their own — succeeded partly because they advanced into territories whose populations and armies had been shattered by a century of climate disaster and pandemic. A volcano in El Salvador helped redraw the religious map of the world."
      }
    ]
  },
  {
    id: 83,
    title: "The Gambler's Question",
    events: [
      {
        event: "1654: French nobleman Antoine Gombaud, Chevalier de Méré, is frustrated by a gambling puzzle — he keeps losing money on a dice bet that his math says he should win. He asks his friend, mathematician Blaise Pascal, to explain why",
        options: [
          "Pascal tells de Méré that gambling is sinful and refuses to help",
          "Pascal becomes fascinated by the problem and writes to fellow mathematician Pierre de Fermat — their exchange of letters over the summer of 1654 develops the first systematic mathematical theory of probability",
          "Pascal solves the problem in a few minutes and the matter is forgotten",
          "De Méré abandons gambling after Pascal shows him the odds are against him"
        ],
        correctIndex: 1,
        explanation: "The Pascal-Fermat correspondence of 1654 is one of the most consequential exchanges of letters in intellectual history. De Méré's question about splitting stakes in an interrupted dice game led Pascal and Fermat to develop concepts like expected value, combinatorial analysis, and the mathematics of chance. They didn't just solve a gambling problem — they invented an entire branch of mathematics."
      },
      {
        event: "Pascal and Fermat's mathematical theory of probability spreads through European intellectual circles. Mathematicians and scientists begin applying probability to problems far beyond gambling",
        options: [
          "Probability remains a purely theoretical curiosity with no practical applications",
          "In 1693, astronomer Edmond Halley uses probability theory to create the first actuarial life table — calculating the statistical likelihood of death at every age, which allows risk to be quantified and priced for the first time",
          "Governments ban the use of probability theory because it encourages gambling",
          "Probability theory is rejected by the scientific community as unreliable"
        ],
        correctIndex: 1,
        explanation: "Halley — yes, the comet guy — realized that probability could quantify the previously unquantifiable: the risk of death. His Breslau life table analyzed birth and death records from the Silesian city to calculate mortality rates at every age. For the first time in history, someone could put a number on the question 'How likely am I to die this year?' — and that number could be used to price a bet on survival."
      },
      {
        event: "Halley's life table makes it possible to calculate the mathematical cost of risk. Businesses realize they can sell protection against uncertain future events at a predictable profit",
        options: [
          "The life table is used only for academic research",
          "The modern insurance industry is born — Lloyd's of London, life insurance companies, and eventually health, property, and casualty insurers all build their business models on pricing risk using probability theory. A gambler's frustration with dice created the mathematical foundation of a multi-trillion-dollar global industry",
          "Governments nationalize all risk management and ban private insurance",
          "The life table proves too inaccurate for commercial use"
        ],
        correctIndex: 1,
        explanation: "One nobleman's bad luck at dice → a mathematical theory of probability → the ability to quantify risk → the entire global insurance industry. Today, insurance is a $6 trillion global industry, and every policy — life, health, auto, home, commercial — is priced using descendants of the probability theory that Pascal and Fermat invented to answer a gambler's question about why he kept losing money on a dice game in 1654."
      }
    ]
  },
  {
    id: 84,
    title: "The Mountain of Silver",
    events: [
      {
        event: "1545: Spanish conquistadors discover Cerro Rico — the 'Rich Mountain' — in Potosí, modern-day Bolivia. It is the largest silver deposit ever found, containing enough silver to reshape the world economy",
        options: [
          "Spain hoards the silver and becomes permanently wealthy",
          "Spain extracts staggering quantities of silver using forced indigenous labor — an estimated 8 million indigenous and African slaves die in the mines over three centuries. The silver floods into Europe and then onward to China, which demands silver for its economy",
          "The silver deposit turns out to be too difficult to mine profitably",
          "Indigenous people successfully defend the mountain from Spanish mining"
        ],
        correctIndex: 1,
        explanation: "Potosí became one of the largest cities in the world by 1600 — larger than London or Paris — built on unimaginable human suffering. The Spanish mita system forced indigenous people into the mines under lethal conditions. The silver flowed in enormous quantities to Spain, then largely onward to China, which had adopted a silver standard and whose massive economy acted as a vacuum for the world's silver supply."
      },
      {
        event: "Massive quantities of Potosí silver flow into Europe over 150 years. The sudden abundance of precious metal increases the money supply far faster than the economy can grow",
        options: [
          "The influx of silver makes all Europeans proportionally wealthier",
          "Europe experiences its first sustained inflation crisis — the 'Price Revolution' sees prices rise 400-600% over 150 years, devastating anyone on fixed incomes, especially feudal landlords whose rents were set by custom and couldn't adjust",
          "The silver has no effect on European prices because trade absorbs it",
          "European nations agree to limit silver imports to prevent economic disruption"
        ],
        correctIndex: 1,
        explanation: "The Price Revolution is one of history's most dramatic economic disruptions. When you suddenly multiply the money supply without multiplying the goods available to buy, prices rise. Across Europe, the cost of bread, grain, and basic goods rose 400-600% between 1500 and 1650. Feudal lords — whose income came from fixed rents set generations earlier — were devastated. Workers whose wages lagged behind prices suffered enormously."
      },
      {
        event: "The 150-year Price Revolution destroys Europe's feudal economic system, where landlords depended on fixed rents that couldn't keep pace with inflation",
        options: [
          "Feudal lords simply raise rents to match inflation",
          "The collapse of fixed-rent feudal economics forces the development of flexible market-based systems — modern capitalism, commercial banking, and market pricing emerge partly because the old feudal model was inflated into irrelevance by a mountain of silver from Bolivia",
          "Feudal lords maintain their power by switching to gold-based rents",
          "The inflation reverses and the feudal system recovers"
        ],
        correctIndex: 1,
        explanation: "A mountain of silver in Bolivia → massive extraction using slave labor → flood of silver into Europe → 150-year inflation crisis → destruction of the feudal fixed-rent economy → emergence of modern market capitalism. The Price Revolution didn't single-handedly create capitalism, but it fatally wounded the feudal economic system and forced Europeans to develop flexible market mechanisms, commercial banking, and modern pricing. The bones of millions of miners in Potosí are part of the foundation of the modern economic system."
      }
    ]
  },
  {
    id: 85,
    title: "The Dying Vines",
    events: [
      {
        event: "1863: A tiny aphid-like insect called Phylloxera arrives in France on imported American grapevine specimens. It attacks the roots of European grape varieties, which have no natural resistance",
        options: [
          "French winemakers quickly find a chemical treatment to kill the insect",
          "Within 20 years, Phylloxera destroys nearly every vineyard in France — and then spreads across Europe, devastating wine production in Italy, Spain, Germany, and Portugal. France's wine output drops by 75%",
          "The insect only affects a few vineyards in southern France",
          "French grape varieties evolve resistance to the insect within a few years"
        ],
        correctIndex: 1,
        explanation: "The Phylloxera epidemic was an extinction-level event for European wine. The insect fed on vine roots, killing the plant within three years. By the 1880s, it had destroyed approximately 70% of all European vineyards. France alone lost 2.5 million hectares of vines. The wine industry — the economic backbone of entire regions — collapsed. It was the greatest agricultural disaster in European history."
      },
      {
        event: "French winemakers desperately seek solutions. They discover that while European vine roots are defenseless against Phylloxera, American rootstock — which evolved alongside the insect — is naturally resistant",
        options: [
          "French winemakers refuse to use American roots out of national pride",
          "Every European vine is grafted onto American rootstock — French, Italian, and Spanish grape varieties are physically attached to American root systems. Nearly all European wine today technically grows on American roots",
          "French winemakers find a synthetic chemical alternative that eliminates the need for grafting",
          "Only a few experimental vineyards attempt the grafting technique"
        ],
        correctIndex: 1,
        explanation: "The solution was humbling for proud French vignerons: graft their precious European varieties onto the roots of 'inferior' American wild grapes. Nearly every vine in Europe today — Bordeaux, Burgundy, Barolo, Rioja — grows on American rootstock. The irony is complete: American vines brought the plague, and American vines provided the cure. Virtually no pre-Phylloxera European-rooted vines survive."
      },
      {
        event: "While rebuilding their devastated vineyards, desperate French winemakers also flee France — bringing their expertise, grape varieties, and techniques to new lands",
        options: [
          "The French winemakers who leave all return once their vineyards are replanted",
          "French vignerons establish vineyards in Napa Valley, Argentina's Mendoza region, Chile, South Africa, and Australia — accidentally creating the global wine industry. Regions that had never produced fine wine become world-class wine regions because Phylloxera scattered French expertise across the globe",
          "The winemakers who leave France abandon wine-making entirely",
          "Only South America receives any significant migration of French winemakers"
        ],
        correctIndex: 1,
        explanation: "A microscopic bug rewrote the world wine map. Before Phylloxera, fine wine was almost exclusively French. After the disaster, French expertise scattered to every continent. Argentina's Malbec, Chile's Carménère, California's Cabernet, Australia's Shiraz — all trace their lineage to French winemakers displaced by Phylloxera. The insect that nearly destroyed French wine accidentally created its global competition."
      }
    ]
  },
  {
    id: 86,
    title: "The Great Stench",
    events: [
      {
        event: "1858: A historic heat wave bakes London during an unusually hot summer. The River Thames — which serves as the city's open sewer, receiving the untreated waste of 3 million people — begins to produce an overwhelming, nauseating smell",
        options: [
          "Londoners are accustomed to the smell and barely notice",
          "The stench becomes so overpowering that it invades the Houses of Parliament, which sit directly on the riverbank — MPs gag during debates, and sheets soaked in chloride of lime are hung in windows in a futile attempt to block the smell",
          "The government temporarily relocates Parliament to another city",
          "The smell dissipates after a few days of rain"
        ],
        correctIndex: 1,
        explanation: "The 'Great Stink' of 1858 literally brought Parliament to its knees. The Thames was an open sewer flowing past the windows of the most powerful legislative body in the world. MPs tried soaking curtains in chloride of lime, but nothing could mask the stench of 3 million people's waste baking in record heat. Committees couldn't meet. Debates were cut short. The smell was democracy's most effective lobbyist."
      },
      {
        event: "MPs who had debated sewage reform for years without action suddenly cannot work in their own building. The smell makes the problem literally impossible to ignore",
        options: [
          "Parliament forms yet another committee to study the problem",
          "Parliament fast-tracks funding for engineer Joseph Bazalgette's massive sewer system in just 18 days — a project that had been stalled for years is approved in record time because politicians physically cannot tolerate their working conditions",
          "Parliament votes to move to a new building further from the river",
          "The government waits for winter, when the cold will reduce the smell"
        ],
        correctIndex: 1,
        explanation: "Eighteen days. A project that had been debated, delayed, and deprioritized for years was funded in less than three weeks — because the men who controlled the purse strings couldn't breathe. Benjamin Disraeli himself fled a committee room overlooking the Thames. The Great Stink accomplished what years of public health advocacy, cholera epidemics, and reformer campaigns could not: it made the problem personal for the people with power."
      },
      {
        event: "Bazalgette builds 1,100 miles of underground sewers beneath London, redirecting waste downstream and away from the city's water supply. Cholera and typhoid rates plummet",
        options: [
          "Other cities ignore London's example and continue dumping waste in rivers",
          "Bazalgette's system becomes the global blueprint for urban sanitation — cities worldwide copy his engineering principles. The project that was only funded because politicians couldn't stand the smell saves millions of lives and establishes the modern expectation that cities must manage their waste",
          "The sewer system fails within a decade and must be completely rebuilt",
          "London's improved sanitation has no measurable effect on disease rates"
        ],
        correctIndex: 1,
        explanation: "Bazalgette's sewers were an engineering marvel — many are still in use today, over 160 years later. The project didn't just fix London; it became the template for every modern city's sanitation system. Paris, Berlin, New York, and eventually every major city built sewer systems inspired by Bazalgette's design. The irony is exquisite: one of the greatest public health achievements in human history happened not because of moral arguments or scientific evidence, but because a smell made politicians physically uncomfortable."
      }
    ]
  },
  {
    id: 87,
    title: "The Shaking Earth",
    events: [
      {
        event: "1755: On November 1st — All Saints' Day — a massive earthquake strikes Lisbon, Portugal, followed by a tsunami and firestorms. An estimated 30,000 to 50,000 people are killed, many crushed inside churches packed for the holy day's services",
        options: [
          "Portugal quickly rebuilds and the disaster is forgotten within a year",
          "The destruction of churches full of faithful worshippers on one of Christianity's holiest days triggers a continent-wide theological crisis — philosophers and theologians across Europe ask: why would God destroy His own devoted followers in His own houses of worship?",
          "The disaster strengthens religious faith as people interpret it as divine punishment",
          "The earthquake affects only a small part of Lisbon"
        ],
        correctIndex: 1,
        explanation: "The timing was devastating to theodicy — the theological justification of God's goodness in the face of suffering. The earthquake struck during morning Mass on All Saints' Day, when churches were packed. The most pious people, in the most sacred spaces, on one of the holiest days, were crushed and burned. If God targeted the faithful in His own houses on His own holy day, what did that say about divine justice?"
      },
      {
        event: "The theological crisis spreads across Europe. The greatest minds of the age — Voltaire, Rousseau, and Kant — all write major philosophical responses grappling with the meaning of the disaster",
        options: [
          "All three philosophers conclude that the earthquake was God's punishment for Lisbon's sins",
          "Voltaire savagely attacks religious optimism in 'Candide,' Rousseau argues that human choices (building dense cities) caused the deaths, and Kant writes three scientific essays seeking natural explanations for earthquakes — together they accelerate Enlightenment secularism and birth modern seismology",
          "The philosophical responses have little impact on public opinion",
          "Religious authorities successfully suppress the philosophers' writings"
        ],
        correctIndex: 1,
        explanation: "Voltaire's 'Poem on the Lisbon Disaster' and later 'Candide' demolished Leibniz's 'best of all possible worlds' optimism. Rousseau countered that nature wasn't cruel — humans were foolish to build dense cities in earthquake zones (an argument eerily modern). Kant, then a young professor, wrote three separate treatises attempting to explain earthquakes through natural causes rather than divine will — laying groundwork for modern seismology."
      },
      {
        event: "The intellectual response to Lisbon reshapes European thought — pushing philosophy toward secular, scientific explanations for natural disasters rather than theological ones",
        options: [
          "Religion quickly reasserts its explanatory dominance over natural disasters",
          "The Lisbon earthquake becomes a turning point in Western intellectual history — it accelerates the Enlightenment's shift away from providential explanations, helps establish seismology as a science, and directly inspires Portugal's Marquis de Pombal to build one of Europe's first earthquake-resistant cities using rational urban planning",
          "European nations simply avoid building in earthquake-prone areas",
          "The scientific study of earthquakes doesn't develop for another century"
        ],
        correctIndex: 1,
        explanation: "An earthquake killed worshippers in churches on a holy day and the intellectual world shattered along with the buildings. The Lisbon disaster is now considered a pivotal moment in the transition from religious to secular explanations of natural events. It birthed seismology, inspired Voltaire's greatest satire, and prompted Pombal to rebuild Lisbon with the world's first earthquake-resistant building codes — the Pombaline cage system. When the earth shook, so did the foundations of European thought."
      }
    ]
  },
  {
    id: 88,
    title: "The Painted Sky",
    events: [
      {
        event: "1883: Krakatoa erupts in Indonesia — one of the most powerful volcanic explosions in recorded history, equivalent to 13,000 Hiroshima bombs. The eruption ejects 25 cubic kilometers of rock and ash into the upper atmosphere",
        options: [
          "The ash settles within a few weeks and has only local effects",
          "Volcanic aerosols circle the globe for years, scattering sunlight and producing vivid blood-red and fiery orange sunsets visible from London to New York — sunsets so spectacular and unusual that they're reported in newspapers worldwide and artists rush to capture them",
          "The eruption creates a brief period of complete darkness across Southeast Asia but has no global effects",
          "The ash cloud only affects the Southern Hemisphere"
        ],
        correctIndex: 1,
        explanation: "Krakatoa injected massive quantities of sulfur dioxide into the stratosphere, where it formed a global aerosol layer. For years afterward, sunsets around the world turned extraordinary shades of blood red and vivid orange. In New York, fire departments received calls from people who thought the western sky was ablaze. British artist William Ashcroft painted over 500 watercolors documenting the unusual twilight effects from Chelsea, London."
      },
      {
        event: "Artists worldwide paint the extraordinary blood-red skies. In Norway, a young artist named Edvard Munch witnesses the apocalyptic sunsets over the Oslo Fjord",
        options: [
          "Munch paints conventional landscape studies of the unusual skies",
          "In 1893, Munch paints 'The Scream' — featuring a swirling orange-red sky that researchers later confirm matches the atmospheric effects of Krakatoa's eruption over Scandinavia. The volcano's ash didn't just color the sky — it created one of the most iconic images in art history",
          "Munch doesn't notice the unusual sunsets at all",
          "The unusual skies inspire a brief artistic trend that is quickly forgotten"
        ],
        correctIndex: 1,
        explanation: "Munch wrote in his diary: 'I was walking along the road with two friends — the sun was setting — suddenly the sky turned blood red.' For decades, art historians assumed the sky in 'The Scream' was purely symbolic. Then in 2004, researchers at Texas State University analyzed the specific colors and atmospheric optics in the painting, along with Munch's diary entries and the viewing angle from the road in Oslo, and concluded the sky is a literal depiction of Krakatoa's atmospheric effects."
      },
      {
        event: "Krakatoa's atmospheric effects, painted by Munch and hundreds of other artists, are eventually recognized by scientists as a vast unintentional record of volcanic atmospheric science",
        options: [
          "Scientists dismiss the paintings as too subjective to be scientifically useful",
          "Atmospheric researchers discover that 19th-century paintings of sunsets — including works by Turner, Munch, and Ashcroft — serve as accurate records of volcanic aerosol loading. An Indonesian volcano's ash created some of Western art's most iconic images AND provided climate scientists with historical atmospheric data encoded in oil paint",
          "Art historians reject the volcanic connection as coincidence",
          "Krakatoa's atmospheric effects are fully explained by modern instruments, making the paintings irrelevant"
        ],
        correctIndex: 1,
        explanation: "In 2014, researchers from the National Observatory of Athens analyzed the red-to-green color ratios in over 500 sunset paintings from 1500 to 2000. They found that paintings produced after major volcanic eruptions consistently showed redder sunsets — and the redness matched measured aerosol levels. An Indonesian volcano turned the world's sky into a canvas, and artists unknowingly recorded atmospheric data in pigment. Krakatoa's eruption produced 'The Scream,' hundreds of fiery sunset paintings, and a century of climate data — all from the same cloud of ash."
      }
    ]
  },
  {
    id: 89,
    title: "The Glowing Girls",
    events: [
      {
        event: "1917: Young women are hired at the US Radium Corporation factory in Orange, New Jersey, to paint radium-laced luminous paint onto watch dials. They are told the paint is harmless and instructed to lick their brushes to get a fine point — a technique called 'lip-pointing'",
        options: [
          "The radium paint proves to be harmless as the company claims",
          "The workers begin developing horrifying symptoms — their jawbones crumble, their teeth fall out, they develop severe anemia and bone cancer. The radium they ingested is destroying them from the inside, replacing calcium in their bones with radioactive material",
          "The women refuse to lip-point their brushes after noticing a strange taste",
          "The factory closes before any workers show symptoms"
        ],
        correctIndex: 1,
        explanation: "The 'Radium Girls' were literally painting themselves with radioactive poison, brush stroke by brush stroke. Radium mimics calcium chemically, so when ingested it was absorbed directly into their bones, where it emitted radiation continuously. Their jaws literally disintegrated — a condition called 'radium jaw.' Some women's bones were so saturated with radium that their remains could expose photographic film decades after death."
      },
      {
        event: "Five Radium Girls — Grace Fryer, Edna Hussman, Katherine Schaub, Quinta McDonald, and Albina Larice — sue US Radium Corporation in 1927, despite the company's aggressive efforts to suppress medical evidence and discredit the women",
        options: [
          "The court dismisses the case because the company's doctors testify the paint is safe",
          "Their case becomes a national sensation — the women win a settlement, and the trial exposes systematic corporate cover-ups, establishing for the first time in American law that employers can be held responsible for workplace health hazards",
          "The women lose the case and the issue is forgotten",
          "US Radium Corporation settles quietly and the case receives no public attention"
        ],
        correctIndex: 1,
        explanation: "The Radium Girls' case was a David vs. Goliath battle. US Radium Corporation hired experts to blame the women's symptoms on syphilis. Company doctors falsified medical records. But the women persisted, and their case — covered extensively in the press — established the crucial legal precedent that employers are liable for the health effects of workplace conditions, even when the danger wasn't known at the time of exposure."
      },
      {
        event: "The Radium Girls' legal victory establishes that employers bear responsibility for occupational health hazards — a precedent that had never existed before in American law",
        options: [
          "The precedent applies only to radium exposure and has limited broader impact",
          "Their case becomes the legal foundation for all modern workplace safety regulation — it directly influences the creation of OSHA in 1970 and establishes the principle that workers have a right to a safe workplace. Women painting watch dials with radioactive paint created the legal framework that protects every American worker today",
          "Congress ignores the case and workplace safety remains unregulated",
          "The precedent is overturned by a higher court within a few years"
        ],
        correctIndex: 1,
        explanation: "The Radium Girls didn't just win compensation — they changed the law. Their case established that workers could sue employers for occupational diseases, that corporations had a duty to disclose known workplace hazards, and that the 'assumption of risk' defense couldn't shield companies that hid dangers from employees. These principles became the bedrock of OSHA and the Occupational Safety and Health Act of 1970. Every hard hat, safety railing, and hazmat protocol in America traces its legal ancestry to women who were told to lick radioactive paintbrushes."
      }
    ]
  },
  {
    id: 90,
    title: "The Pope's Line",
    events: [
      {
        event: "1494: Pope Alexander VI mediates a dispute between Spain and Portugal over who controls newly discovered lands. He draws a line on a map — the Treaty of Tordesillas — dividing the entire non-Christian world between the two powers",
        options: [
          "Both Spain and Portugal ignore the Pope's arbitrary line",
          "The line places most of the Americas in Spain's zone — but a large bulge of South American coastline, not yet fully explored, falls on Portugal's side. Portugal claims this territory, which turns out to be Brazil, the largest country in South America",
          "The line gives Portugal all of the Americas and Spain all of Africa",
          "Other European powers immediately challenge the treaty and it is never enforced"
        ],
        correctIndex: 1,
        explanation: "The Pope drew a line at roughly 46°37' West longitude. He couldn't have known exactly what land fell on which side — South America's full shape was still unmapped. But the easternmost bulge of Brazil jutted past the line into Portugal's hemisphere. When Pedro Álvares Cabral landed in Brazil in 1500, Portugal claimed it under the Treaty of Tordesillas. A line drawn in Rome based on incomplete geography determined the fate of a continent."
      },
      {
        event: "Portugal colonizes Brazil while Spain colonizes the rest of South America. For over 300 years, Brazil develops as a Portuguese colony — separate language, separate culture, separate legal system — while every neighboring territory is Spanish",
        options: [
          "Brazil and Spanish America develop identical cultures despite different colonial rulers",
          "Portuguese becomes the dominant language of Brazil while Spanish takes root everywhere else — creating a profound cultural and linguistic divide across South America that persists for centuries after independence",
          "Brazil switches to Spanish after gaining independence to match its neighbors",
          "Portugal abandons Brazil and Spain takes over the colony"
        ],
        correctIndex: 1,
        explanation: "Three centuries of Portuguese rule embedded the language, legal traditions, and cultural institutions so deeply that they survived independence entirely intact. Brazil declared independence in 1822 with Portuguese as its national language, Roman-Dutch-influenced legal codes, and cultural ties to Lisbon rather than Madrid. The linguistic divide between Brazil and its neighbors was already centuries old and completely irreversible."
      },
      {
        event: "Brazil gains independence in 1822 as a Portuguese-speaking nation surrounded by Spanish-speaking countries",
        options: [
          "Brazil gradually adopts Spanish to better integrate with its neighbors",
          "Today, 215 million Brazilians speak Portuguese — the largest Portuguese-speaking population on Earth — while every country that surrounds them speaks Spanish. An arbitrary line drawn by a Pope in Rome in 1494, based on an inaccurate map, is the reason South America's largest country speaks a different language from all its neighbors",
          "Portuguese dies out in Brazil within a few generations of independence",
          "Brazil's language has no significant effect on its relationship with neighbors"
        ],
        correctIndex: 1,
        explanation: "A Pope in Rome drew a line on an inaccurate map in 1494. That line happened to place the bulge of Brazil on Portugal's side. Five centuries later, 215 million people speak Portuguese in a continent where 400 million speak Spanish — the largest linguistic boundary in the world, determined by an arbitrary papal decision based on a map that didn't even show the continent's true shape."
      }
    ]
  },
  {
    id: 91,
    title: "The Khan's Forest",
    events: [
      {
        event: "1206: Genghis Khan unites the Mongol tribes and begins conquests that will span four decades. By the time his grandsons finish, the Mongol Empire stretches from Korea to Hungary, and an estimated 40 million people — roughly 10% of the world's population — have been killed",
        options: [
          "The conquered lands are immediately repopulated by Mongol settlers",
          "Massive depopulation causes farmland across Central Asia, China, Persia, and Eastern Europe to be abandoned — without farmers to maintain fields, cultivated land reverts to forest, scrubland, and grassland across millions of square kilometers",
          "The Mongols convert conquered farmland into even more intensive agriculture",
          "The conquered populations recover their numbers within a generation"
        ],
        correctIndex: 1,
        explanation: "The scale of killing was so vast that entire agricultural regions were emptied. Cities like Merv, Nishapur, and Baghdad saw populations of hundreds of thousands reduced to almost nothing. The irrigation systems that sustained agriculture across Persia and Central Asia were deliberately destroyed. Without human maintenance, nature reclaimed the land — forests grew where farms had been, grasslands expanded where cities had stood."
      },
      {
        event: "Across Eurasia, abandoned farmland reverts to forest and scrubland at an enormous scale. Millions of square kilometers of cultivated land return to nature over decades",
        options: [
          "The regrowing vegetation has no measurable effect on the atmosphere",
          "The regrowing forests absorb approximately 700 million tons of carbon dioxide from the atmosphere — enough to measurably reduce global CO₂ levels. The Mongol conquests inadvertently created history's largest carbon offset event before the modern era",
          "The abandoned land turns to desert rather than forest",
          "New farmers immediately move in and re-clear the regrowing forests"
        ],
        correctIndex: 1,
        explanation: "A 2011 study by Julia Pongratz at the Carnegie Institution's Department of Global Ecology calculated that the Mongol invasions removed enough farmland from cultivation to sequester approximately 700 million tons of atmospheric carbon. Trees and vegetation absorb CO₂ as they grow, and the sheer scale of reforestation across the Mongol-depopulated regions was sufficient to produce a detectable dip in atmospheric carbon levels."
      },
      {
        event: "A 2011 Carnegie Institution study confirms that the Mongol conquests measurably reduced atmospheric CO₂ through reforestation of depopulated farmland",
        options: [
          "The finding is dismissed as statistically insignificant",
          "Researchers identify the Mongol Empire as the only human activity in pre-industrial history that significantly reduced global carbon emissions — history's most destructive conqueror accidentally became history's most effective carbon sequestration program",
          "Other historical events are found to have had much larger carbon effects",
          "The study's methodology is immediately debunked by other researchers"
        ],
        correctIndex: 1,
        explanation: "The irony is staggering: the most destructive human force in pre-industrial history produced the only significant human-caused reduction in atmospheric carbon before the modern era. Genghis Khan killed 10% of humanity and the forests that grew on the emptied land cooled the climate. It is, as the researchers noted, the only known case of a human-driven event reducing global CO₂ before industrialization — achieved through the worst possible means."
      }
    ]
  },
  {
    id: 92,
    title: "The Luminous Poison",
    events: [
      {
        event: "1956: In the fishing town of Minamata, Japan, cats begin behaving erratically — convulsing, staggering, and throwing themselves into the sea. Locals call it 'dancing cat disease.' Soon, residents develop similar symptoms: numbness, slurred speech, loss of motor control, and madness",
        options: [
          "A local virus is identified as the cause and quickly contained",
          "Investigators trace the illness to Chisso Corporation's chemical factory, which has been dumping methylmercury waste directly into Minamata Bay for decades — the mercury concentrates up the food chain through fish and shellfish that locals eat daily",
          "The symptoms are caused by contaminated drinking water from a nearby mine",
          "A rare genetic condition affecting the local population is identified as the cause"
        ],
        correctIndex: 1,
        explanation: "Chisso Corporation had been releasing methylmercury — a potent neurotoxin — into Minamata Bay since 1932. The mercury settled in sediments, was absorbed by microorganisms, concentrated in fish and shellfish through bioaccumulation, and reached devastating concentrations in the humans and animals that ate them. By the time the source was identified, thousands of people had been poisoned. Chisso knew about the contamination but continued dumping for years."
      },
      {
        event: "Chisso Corporation denies responsibility for years despite mounting evidence. Victims — many of them desperately poor fishing families — fight a decades-long legal battle for recognition and compensation",
        options: [
          "Chisso successfully avoids all legal responsibility",
          "Photographer W. Eugene Smith documents the victims' suffering in devastating images that shock the world — the Minamata victims' decades-long fight becomes a global cause célèbre, demonstrating the human cost of industrial pollution and inspiring environmental movements worldwide",
          "The Japanese government sides with Chisso and suppresses the victims' movement",
          "International attention fades quickly and the victims are forgotten"
        ],
        correctIndex: 1,
        explanation: "W. Eugene Smith's photo of Tomoko Uemura being bathed by her mother — a child born with severe mercury poisoning — became one of the most powerful photographs ever taken. Smith himself was beaten by Chisso-hired thugs and partially lost his vision. The images galvanized global outrage and turned Minamata into a worldwide symbol of the consequences of industrial pollution and corporate negligence."
      },
      {
        event: "The Minamata disaster becomes the defining case study of industrial mercury poisoning and the catalyst for global mercury regulation",
        options: [
          "Mercury regulations remain a national issue handled only within Japan",
          "In 2013, 128 countries sign the Minamata Convention on Mercury — a binding UN treaty named after the town, banning or restricting mercury in products from thermometers to cosmetics to dental fillings. Cats going mad in a Japanese fishing village led to a global treaty that changed how the world uses mercury",
          "The convention is proposed but fails to gain enough signatories to take effect",
          "Japan bans mercury but no international agreement is reached"
        ],
        correctIndex: 1,
        explanation: "The UN chose to name its global mercury treaty after Minamata — an acknowledgment that the suffering of a small fishing town changed the world. The convention phases out mercury in batteries, switches, thermometers, cosmetics, and many other products. It was signed in the city of Kumamoto, near Minamata, with survivors present at the ceremony. Dancing cats in a Japanese fishing village in 1956 → the identification of methylmercury bioaccumulation → a global treaty that governs mercury use in 128 countries."
      }
    ]
  },
  {
    id: 93,
    title: "The Shrinking Sea",
    events: [
      {
        event: "1960: Soviet central planners divert the Amu Darya and Syr Darya rivers — which feed the Aral Sea — to irrigate cotton fields across Uzbekistan and Turkmenistan. The USSR wants to become the world's largest cotton exporter",
        options: [
          "The irrigation project fails because the desert soil can't sustain cotton",
          "Without river inflow, the Aral Sea — once the world's fourth-largest lake, roughly the size of Ireland — begins to shrink. Within 40 years, it loses 90% of its volume, splitting into small remnant pools surrounded by a vast toxic desert",
          "The Aral Sea is replenished by underground springs and remains stable",
          "The cotton project is abandoned before it significantly affects the sea"
        ],
        correctIndex: 1,
        explanation: "The Soviet planners knew the sea would shrink — they simply decided cotton was worth more than a lake. The rivers that had sustained the Aral Sea for millennia were redirected into 20,000 miles of irrigation canals, many of them poorly constructed and leaking. The sea began retreating almost immediately. By 2000, it had lost 90% of its water. Fishing boats sat rusting in desert sand, 150 kilometers from the nearest water."
      },
      {
        event: "As the Aral Sea shrinks, the exposed lakebed — contaminated with decades of agricultural runoff — becomes a vast toxic desert. The fishing industry that sustained 60,000 jobs collapses entirely",
        options: [
          "The exposed lakebed is reclaimed for productive farmland",
          "Wind picks up pesticide-laden salt and dust from the dry lakebed, creating toxic dust storms that blow across the region — cancer rates in surrounding communities double, respiratory illness becomes epidemic, and infant mortality in the region is among the highest in the world",
          "The environmental damage stays localized to the immediate lakebed area",
          "The fishing industry successfully transitions to the cotton industry"
        ],
        correctIndex: 1,
        explanation: "The lakebed had accumulated decades of pesticide and herbicide runoff from cotton farming. When the water evaporated, it left a toxic crust of salt, dried pesticides, and heavy metals. Wind turned this into poisonous dust storms that blew across Karakalpakstan and neighboring regions. Throat cancer rates near the former sea increased 30-fold. Tuberculosis became epidemic. The Aral region became one of the worst public health disaster zones on Earth."
      },
      {
        event: "The destruction of the Aral Sea — visible from space as the lake literally disappears over decades — becomes one of the most dramatic environmental catastrophes in human history",
        options: [
          "The Aral Sea disaster receives little international attention",
          "Satellite images of the vanishing sea become the defining visual of environmental destruction — the disaster directly inspires international water-rights frameworks, the modern concept of 'ecocide,' and Central Asian nations' post-Soviet environmental movements. A plan to grow cotton erased one of the world's great lakes",
          "The Soviet Union successfully reverses the damage before its collapse",
          "The Aral Sea naturally refills once the rivers are no longer diverted"
        ],
        correctIndex: 1,
        explanation: "NASA's time-lapse satellite images of the Aral Sea's disappearance became some of the most widely circulated environmental images in history. The before-and-after comparison — a great blue lake shrinking to a few toxic puddles — communicated the scale of environmental destruction more powerfully than any report. The Aral Sea's death inspired the concept of 'ecocide' as a crime against nature. A Soviet plan to grow cotton in the desert erased a lake that had existed for 5.5 million years."
      }
    ]
  },
  {
    id: 94,
    title: "The Tulip's Crash",
    events: [
      {
        event: "1636: Tulips imported from the Ottoman Empire become wildly fashionable in the Dutch Republic — the most desirable varieties, with flame-like streaks caused by a virus, sell for extraordinary prices. Speculation in tulip bulb futures reaches a fever pitch",
        options: [
          "The Dutch government steps in to regulate tulip trading before prices become extreme",
          "At the peak in February 1637, a single bulb of the 'Semper Augustus' variety sells for 10,000 guilders — more than a skilled craftsman earns in a lifetime and more than the price of a grand canal house in Amsterdam. Tulip bulbs become the most expensive objects in the world",
          "Tulip prices rise modestly and then stabilize at reasonable levels",
          "Only wealthy nobles participate in tulip trading"
        ],
        correctIndex: 1,
        explanation: "Tulipmania was a genuine frenzy. Futures contracts for tulip bulbs were traded in taverns across Holland by everyone from merchants to chimney sweeps. The 'Semper Augustus' — a red-and-white striped tulip whose coloring was actually caused by a mosaic virus — was the most valuable, but even ordinary varieties commanded astonishing prices. People mortgaged houses to buy bulbs they'd never physically seen, betting on paper contracts for flowers still in the ground."
      },
      {
        event: "In February 1637, the tulip market collapses virtually overnight. Buyers simply stop showing up at auctions in Haarlem. Bulbs that were worth a house yesterday are worth less than an onion today",
        options: [
          "The crash is contained to the tulip market and has no broader effects",
          "The sudden collapse is studied, debated, and written about for centuries — in 1841, Charles Mackay immortalizes it in 'Extraordinary Popular Delusions and the Madness of Crowds,' and the Dutch tulip crash becomes the foundational example of a speculative bubble in economics",
          "The Dutch economy collapses completely as a result of the crash",
          "Tulip prices recover within a few months and the crash is forgotten"
        ],
        correctIndex: 1,
        explanation: "The Dutch economy actually weathered the crash relatively well — most contracts were voided by courts. But the cultural impact was permanent. The image of rational people paying a fortune for flower bulbs became the archetypal example of speculative madness. Every financial bubble since — from the South Sea Bubble to dot-com stocks — has been compared to tulipmania. Mackay's 1841 book turned it into the founding myth of behavioral economics."
      },
      {
        event: "The tulip crash becomes the universal metaphor for speculative excess, referenced in every subsequent financial crisis for nearly 400 years",
        options: [
          "Modern economists dismiss tulipmania as irrelevant to modern markets",
          "The tulip crash gives humanity its conceptual vocabulary for understanding financial bubbles — terms like 'bubble,' 'mania,' and 'speculative fever' are applied to the South Sea Bubble, railway manias, 1929, dot-com stocks, crypto, and every crash in between. A flower fad in 1637 Holland gave us the template for understanding every financial panic since",
          "Each new financial crisis is understood on its own terms without historical comparison",
          "Tulipmania is debunked as a myth and economists stop referencing it"
        ],
        correctIndex: 1,
        explanation: "From the South Sea Bubble (1720) to the 2008 housing crisis to cryptocurrency speculation, every financial mania has been measured against the template of tulipmania. The pattern — speculative frenzy → detachment from underlying value → sudden collapse → 'how could people be so foolish?' — was first observed and documented in a 17th-century Dutch flower market. A virus-streaked tulip bulb in 1637 gave humanity the vocabulary and conceptual framework to recognize, analyze, and (theoretically) prevent speculative panics for the next four centuries."
      }
    ]
  },
  {
    id: 95,
    title: "The Bark That Conquered",
    events: [
      {
        event: "1631: Jesuit missionaries in Peru learn from indigenous Quechua people that the bark of the Cinchona tree cures the deadly fevers of malaria. They bring the bark back to Europe, where it becomes known as 'Jesuit's bark'",
        options: [
          "European doctors reject the bark as indigenous superstition",
          "Quinine extracted from the bark proves genuinely effective against malaria — for the first time, Europeans have a treatment for the disease that had killed more humans than any other in history. Demand for Cinchona bark explodes across the colonial world",
          "The bark works only as a placebo and malaria continues unchecked",
          "The Jesuit missionaries keep the cure secret within the Catholic Church"
        ],
        correctIndex: 1,
        explanation: "Quinine was a genuine medical miracle — the first effective treatment for malaria in human history. Malaria had killed pharaohs, emperors, and popes; it had halted armies and depopulated entire regions. Cinchona bark didn't just treat the disease — it transformed the geopolitics of tropical regions by making them survivable for Europeans for the first time."
      },
      {
        event: "Armed with quinine prophylaxis, European soldiers, administrators, and settlers can survive in tropical regions where malaria had previously killed them within months",
        options: [
          "Quinine has no effect on European colonial ambitions",
          "The 'Scramble for Africa' in the 1880s becomes possible — European powers penetrate the African interior for the first time, carving the continent into colonies. Before quinine, Africa's interior was called 'the White Man's Grave' because malaria killed most Europeans who ventured past the coast",
          "European powers decide to avoid tropical colonies entirely despite having quinine",
          "African nations use quinine to defend themselves against European invasion"
        ],
        correctIndex: 1,
        explanation: "Before quinine, European death rates in tropical Africa were catastrophic. The British Army's mortality rate in West Africa was 50-70% per year in the early 1800s — not from combat, but from malaria. Quinine prophylaxis reduced that dramatically. The Berlin Conference of 1884, which carved Africa into European colonies, was only possible because quinine had transformed the continent from a death sentence into a conquerable territory."
      },
      {
        event: "Quinine enables the colonization of tropical Africa, Southeast Asia, and the Pacific — regions that had been largely impenetrable to European settlement due to malaria",
        options: [
          "Colonization would have happened at the same pace without quinine",
          "A Peruvian tree bark becomes one of the most consequential botanical discoveries in history — indigenous Quechua knowledge, transmitted through Jesuit missionaries, gave European empires the chemical tool that enabled the colonization of the tropics and the subjugation of hundreds of millions of people across two continents",
          "Quinine's role in colonization is minimal compared to military technology",
          "Colonized peoples quickly gain access to quinine and use it to resist European armies"
        ],
        correctIndex: 1,
        explanation: "The causal chain is darkly ironic: indigenous people in South America shared their medical knowledge with Jesuit missionaries → that knowledge became the chemical prerequisite for the colonization of an entirely different continent. Without quinine, the interior of Africa and much of Southeast Asia would have remained inaccessible to Europeans for decades or centuries longer. A tree bark from the Andes enabled the subjugation of Africa."
      }
    ]
  },
  {
    id: 96,
    title: "The Milkmaid's Hands",
    events: [
      {
        event: "1796: English country doctor Edward Jenner notices something curious — milkmaids in Gloucestershire who catch cowpox from their cows develop mild hand sores but never get smallpox, the deadliest disease of the era",
        options: [
          "Jenner dismisses the observation as folklore",
          "Jenner hypothesizes that cowpox exposure protects against smallpox — he tests this by inoculating an 8-year-old boy, James Phipps, with pus from a cowpox sore on milkmaid Sarah Nelmes' hand, then deliberately exposing the boy to smallpox. The boy is immune",
          "Jenner reports his observation but no one takes it seriously for decades",
          "Other doctors had already developed smallpox vaccines before Jenner's observation"
        ],
        correctIndex: 1,
        explanation: "The experiment would be unthinkable today, but it worked. Jenner scratched cowpox material into 8-year-old James Phipps's arm. The boy developed a mild fever. Six weeks later, Jenner inoculated him with actual smallpox — the boy showed no symptoms. Jenner repeated the exposure multiple times over years. Phipps remained immune. Jenner coined the term 'vaccination' from 'vacca,' the Latin word for cow."
      },
      {
        event: "Jenner's 'vaccination' technique spreads globally despite fierce opposition from religious leaders who call it ungodly and doctors who distrust it. Governments begin mandating vaccination against smallpox",
        options: [
          "Vaccination remains controversial and is never widely adopted",
          "Over the next two centuries, vaccination campaigns progressively eradicate smallpox — the World Health Organization's intensified program, launched in 1967, hunts down the last cases. In 1980, the WHO declares smallpox officially eradicated, the first and still only human disease ever completely eliminated",
          "Smallpox mutates to resist the vaccine and continues killing millions",
          "Vaccination works but smallpox is replaced by an even deadlier disease"
        ],
        correctIndex: 1,
        explanation: "Smallpox had killed an estimated 300 million people in the 20th century alone before eradication. The WHO's campaign was an extraordinary logistical achievement — tracking every last case across war zones, remote villages, and refugee camps. The last natural case occurred in Somalia in 1977. On May 8, 1980, the WHO officially declared: 'The world and its peoples have won freedom from smallpox.' All because of a doctor who noticed that milkmaids had smooth hands."
      },
      {
        event: "Smallpox eradication saves an estimated 200 million lives and proves that vaccination can eliminate a disease from the planet entirely",
        options: [
          "The success of smallpox eradication has little effect on other disease-fighting efforts",
          "The principle of vaccination — first observed in milkmaids' hands — is applied to polio, measles, tetanus, and dozens of other diseases, saving billions of lives. The word 'vaccine' itself comes from 'vacca,' Latin for cow — every vaccination on Earth carries the etymological ghost of Jenner's cowpox-immune milkmaids",
          "Vaccination technology cannot be adapted for other diseases",
          "Governments stop funding vaccination programs after smallpox is eliminated"
        ],
        correctIndex: 1,
        explanation: "A country doctor noticed that milkmaids had smooth hands. He realized cowpox exposure protected against smallpox. He tested it on a child. Two centuries later, the deadliest disease in human history was wiped from the Earth. The word we use for the technology — 'vaccine' — literally means 'from the cow.' Every polio shot, every measles jab, every COVID vaccine carries in its name a tribute to the cowpox-immune milkmaids of 18th-century Gloucestershire."
      }
    ]
  },
  {
    id: 97,
    title: "Ford's Jungle",
    events: [
      {
        event: "1928: Henry Ford, frustrated by British monopoly on Asian rubber, buys 2.5 million acres of Amazon rainforest in Brazil. He plans to build 'Fordlândia' — a rubber plantation town complete with American-style houses, a hospital, a golf course, and a ban on alcohol",
        options: [
          "The rubber plantation succeeds and Ford breaks the British rubber monopoly",
          "Ford plants rubber trees in neat rows like a Michigan factory — ignoring botanists who warn that rubber trees only survive in the wild when dispersed. Leaf blight, which can't spread between widely scattered wild trees, devastates the plantation's densely packed rows",
          "The Amazon climate proves too cold for rubber trees",
          "Brazilian workers enthusiastically adopt American culture and Fordlândia thrives"
        ],
        correctIndex: 1,
        explanation: "Ford applied factory logic to a rainforest — and the rainforest fought back. In the wild, rubber trees grow widely spaced, which limits the spread of South American leaf blight (Microcyclus ulei). Ford's plantations packed them in uniform rows, creating a paradise for the fungus. Leaves blackened and dropped in waves. Replanting failed. The trees that survived produced almost no usable latex."
      },
      {
        event: "Meanwhile, Ford imposes Midwestern American culture on his Brazilian workers — mandatory square dancing, American food (hamburgers and canned spinach), no alcohol, and suburban-style housing in the jungle heat",
        options: [
          "Brazilian workers embrace American culture and the community flourishes",
          "Workers revolt against the forced cultural impositions — riots break out in 1930 when workers smash the cafeteria and destroy company equipment. Brazilian workers refuse to eat American food, dodge the mandatory square dances, and set up bars and brothels just outside the town's borders",
          "Workers quietly accept the cultural rules without any resistance",
          "Ford adapts the town to Brazilian customs and the social experiment succeeds"
        ],
        correctIndex: 1,
        explanation: "Ford's attempt to transplant middle America into the Amazon was cultural imperialism at its most absurd. Workers who were accustomed to rice and beans were served hamburgers. People who danced samba were forced to square dance. The December 1930 riot was sparked by a combination of terrible food, unbearable working conditions, and the prohibition of alcohol. Workers smashed the cafeteria, destroyed company trucks, and chased American managers into the jungle."
      },
      {
        event: "Fordlândia fails as both a rubber plantation and a social experiment. Ford abandons the project in 1945, having spent $20 million (over $200 million today) for virtually zero usable rubber",
        options: [
          "Ford's failure is quickly forgotten and has no lasting impact",
          "Fordlândia becomes a legendary case study in the limits of industrial thinking — the failure demonstrates that you cannot apply assembly-line logic to living ecosystems or impose one culture on another. It's now studied in ecology, business, and postcolonial studies as the definitive cautionary tale of industrial hubris versus nature",
          "Ford builds a second, more successful plantation to replace Fordlândia",
          "Synthetic rubber makes the entire project irrelevant before it fails"
        ],
        correctIndex: 1,
        explanation: "Henry Ford — the man who perfected the assembly line and revolutionized industry — met his match in a rainforest. You can standardize car parts; you can't standardize an ecosystem. Fordlândia's ruins still stand in the Amazon, overgrown with the jungle that defeated them — a monument to the idea that not everything can be engineered. Greg Grandin's 2009 book turned the forgotten project into a parable for our era: the lesson that nature and culture are not raw materials to be processed."
      }
    ]
  },
  {
    id: 98,
    title: "The Sleeping Pill's Children",
    events: [
      {
        event: "1957: German pharmaceutical company Grünenthal markets thalidomide as a safe sedative and morning-sickness remedy, sold over the counter across Europe, Canada, Australia, and Japan. It is not approved in the United States",
        options: [
          "Thalidomide proves to be a safe and effective medication as marketed",
          "Over 10,000 children are born worldwide with severe limb deformities — missing arms, shortened legs, malformed hands — because thalidomide crosses the placenta and disrupts fetal development during a critical window of early pregnancy",
          "Minor side effects are reported but no serious harm occurs",
          "The drug is recalled before any significant number of people take it"
        ],
        correctIndex: 1,
        explanation: "The thalidomide disaster was one of the worst drug catastrophes in history. Taken between the 20th and 36th day of pregnancy, the drug interfered with blood vessel formation in developing limbs. The resulting birth defects — phocomelia, where hands or feet grow directly from the torso without arms or legs — were devastating. An estimated 10,000 to 20,000 children were affected across 46 countries."
      },
      {
        event: "The disaster reveals a terrifying gap in drug regulation: no country required companies to prove that drugs were safe for pregnant women — or to conduct rigorous clinical trials — before selling them to the public",
        options: [
          "Pharmaceutical companies argue successfully that the tragedy was unforeseeable",
          "The United States — where FDA reviewer Frances Kelsey had blocked thalidomide's approval by demanding more safety data — becomes the model for reform. Kelsey's stubbornness saved thousands of American children and proved that rigorous review could prevent disasters",
          "The pharmaceutical industry self-regulates without government intervention",
          "Drug regulation remains unchanged because the disaster is seen as a one-time anomaly"
        ],
        correctIndex: 1,
        explanation: "Frances Kelsey was a new FDA reviewer who refused to approve thalidomide despite intense pressure from the manufacturer. She kept requesting more data, delaying approval month after month. When the disaster broke worldwide, her caution was vindicated spectacularly — she had single-handedly prevented the catastrophe in America. President Kennedy awarded her the President's Award for Distinguished Federal Civilian Service."
      },
      {
        event: "Frances Kelsey's example proves that rigorous drug review saves lives. The US Congress acts to ensure no drug can reach the market without thorough safety testing",
        options: [
          "The new regulations are mild and largely cosmetic",
          "The 1962 Kefauver-Harris Amendment transforms drug regulation worldwide — it requires rigorous clinical trials proving safety AND efficacy before any drug can be sold, mandatory reporting of side effects, and informed consent from clinical trial participants. Thalidomide's children created the entire modern system of drug safety that protects patients globally",
          "Congress delays action and the reforms don't pass until the 1980s",
          "The reforms apply only to sedatives and morning-sickness drugs"
        ],
        correctIndex: 1,
        explanation: "One drug's horrific birth defects created the modern pharmaceutical safety framework. The Kefauver-Harris Amendment required, for the first time, that drugs be proven both safe AND effective through controlled clinical trials before approval. Every drug you take today — every antibiotic, painkiller, vaccine, and chemotherapy — goes through a safety review process that exists because of thalidomide. The tragedy of 10,000 children created the system that protects billions."
      }
    ]
  },
  {
    id: 99,
    title: "The Opium Trader's Port",
    events: [
      {
        event: "1839: Chinese Imperial Commissioner Lin Zexu, on orders to end the opium trade devastating Chinese society, seizes and publicly destroys 1,400 tons of British-owned opium in Canton — worth an enormous fortune",
        options: [
          "Britain accepts the loss and withdraws from the opium trade",
          "Britain declares war on China — the First Opium War — to protect its immensely profitable drug trade. British naval superiority overwhelms China's defenses, and China is forced to sign the humiliating Treaty of Nanking in 1842",
          "Lin Zexu's action successfully ends the opium trade in China",
          "Britain and China negotiate a diplomatic compromise over the destroyed opium"
        ],
        correctIndex: 1,
        explanation: "Britain went to war to defend its right to sell narcotics. The opium trade generated enormous profits for British merchants and funded Britain's purchase of Chinese tea, silk, and porcelain. When Lin Zexu destroyed the opium, Britain treated it as an attack on property rights and free trade. The Royal Navy's steam-powered warships destroyed Chinese junks effortlessly. The Treaty of Nanking imposed massive indemnities on China and opened five ports to British trade."
      },
      {
        event: "The Treaty of Nanking forces China to cede a small, rocky island that the British describe as a 'barren rock' — Hong Kong — to Britain 'in perpetuity'",
        options: [
          "Hong Kong remains a minor military outpost of no economic importance",
          "Under British rule, Hong Kong transforms from a fishing village into one of the world's most important trading ports and financial centers — its position at the mouth of the Pearl River and its status as a free port attract merchants from across Asia",
          "Britain returns Hong Kong to China within a few decades",
          "The Chinese population refuses to live under British rule and Hong Kong remains empty"
        ],
        correctIndex: 1,
        explanation: "Lord Palmerston reportedly dismissed Hong Kong as 'a barren island with hardly a house upon it.' He was spectacularly wrong. Hong Kong's deep natural harbor, strategic location, and British free-trade policies transformed it into one of the world's great trading hubs. By the 20th century, it was the gateway between China and the global economy — a financial center to rival London and New York."
      },
      {
        event: "Hong Kong becomes one of the world's leading financial centers under British rule. In 1997, Britain hands Hong Kong back to China under a 'one country, two systems' arrangement",
        options: [
          "Hong Kong seamlessly integrates back into mainland China's system",
          "The 1997 handover becomes one of the most consequential geopolitical arrangements of the modern era — a global financial capital with its own legal system, currency, and civil liberties exists inside an authoritarian state. China destroying a drug shipment in 1839 is the reason one of the world's richest cities exists where it does",
          "Hong Kong's economy collapses after the handover",
          "Britain refuses to return Hong Kong and maintains colonial control"
        ],
        correctIndex: 1,
        explanation: "A Chinese official destroyed British drugs → Britain went to war → China was forced to give up a 'barren rock' → that rock became a global financial capital → its return to China 155 years later created one of the most complex and consequential political arrangements on Earth. The 'one country, two systems' framework — designed to preserve Hong Kong's capitalism inside communist China — was a direct consequence of an opium seizure in Canton in 1839."
      }
    ]
  },
  {
    id: 100,
    title: "The Prisoner's Stone",
    events: [
      {
        event: "1799: French soldiers digging fortifications in the Egyptian town of Rosetta (Rashid) discover a dark granodiorite slab inscribed with the same official decree in three scripts: ancient hieroglyphics, Demotic (everyday Egyptian script), and ancient Greek",
        options: [
          "The soldiers discard the stone as ordinary building material",
          "Officers recognize the stone's potential significance — a text in three scripts, one of which (Greek) is already understood, could be the key to decoding the other two. The stone is sent to scholars in Cairo and news of the discovery electrifies the European intellectual world",
          "The stone is immediately sent to France and hidden in a private collection",
          "The stone contains only a mundane tax record and generates little interest"
        ],
        correctIndex: 1,
        explanation: "The soldiers were building defenses at Fort Julien near the Nile Delta when they unearthed the slab. Officer Pierre-François Bouchard immediately recognized its importance: the Greek text could potentially serve as a 'crib' to decode the mysterious hieroglyphics that had baffled scholars for centuries. The stone was indeed a mundane priestly decree from 196 BC — but its trilingual nature made it invaluable."
      },
      {
        event: "After Napoleon's defeat in Egypt, the Rosetta Stone passes to the British (it's still in the British Museum today). A decryption race begins between British polymath Thomas Young and French linguist Jean-François Champollion",
        options: [
          "The stone proves insufficient to decode hieroglyphics and the scripts remain unreadable",
          "Champollion cracks the hieroglyphic code in 1822 — using the Greek text as a key, he realizes hieroglyphics are not just pictures but a complex system combining phonetic sounds and symbolic meanings. For the first time in over 1,400 years, humans can read ancient Egyptian writing",
          "Thomas Young solves the code first and publishes before Champollion",
          "The decryption takes over a century and isn't completed until the 1900s"
        ],
        correctIndex: 1,
        explanation: "Champollion's breakthrough came when he realized that hieroglyphics were not purely symbolic — they included phonetic elements representing sounds. Using cartouches (oval name-rings) containing the names 'Ptolemy' and 'Cleopatra' in both Greek and hieroglyphics, he matched sounds to symbols. On September 14, 1822, he reportedly ran to his brother's office shouting 'Je tiens l'affaire!' ('I've got it!') before fainting from excitement."
      },
      {
        event: "Champollion's decipherment of hieroglyphics means that 3,000 years of ancient Egyptian writing — on temple walls, papyrus scrolls, tomb inscriptions, and monuments — can suddenly be read for the first time since the Roman era",
        options: [
          "The decoded texts prove to contain mostly mundane records of little historical interest",
          "An entire civilization is unlocked — the Book of the Dead, royal histories, love poems, medical texts, and diplomatic correspondence become readable. The discipline of Egyptology is born, and scholars discover that ancient Egypt was far more complex, literate, and sophisticated than anyone had imagined. Soldiers digging a wall accidentally gave humanity the key to read 3,000 years of lost history",
          "The decoded texts largely confirm what historians already knew about Egypt",
          "Only a handful of texts can be decoded using Champollion's method"
        ],
        correctIndex: 1,
        explanation: "Before Champollion, ancient Egypt was essentially mute — a civilization of magnificent monuments covered in beautiful, unreadable writing. After 1822, the entire written record of one of humanity's greatest civilizations suddenly spoke. The Edwin Smith Papyrus revealed sophisticated surgical knowledge. The Amarna Letters showed pharaohs negotiating with Mesopotamian kings. Love poetry, legal contracts, and student homework assignments from 3,000 years ago became readable. All because soldiers building a fort hit a stone."
      }
    ]
  },
  {
    id: 101,
    title: "The Missing Days",
    events: [
      {
        event: "1582: Pope Gregory XIII issues a papal bull announcing a corrected calendar — the old Julian calendar has drifted 10 days out of alignment with the actual solar year. Catholic countries must skip from October 4 directly to October 15",
        options: [
          "All of Europe immediately adopts the corrected calendar",
          "Catholic countries comply, but Protestant countries refuse on principle — they would rather be wrong about the date than agree with the Pope. The continent splits into two incompatible calendar systems running 10 days apart",
          "The Pope's proposal is ignored by all countries as impractical",
          "Protestants adopt the calendar but rename it to avoid crediting the Pope"
        ],
        correctIndex: 1,
        explanation: "Religious pride trumped mathematical accuracy. Protestant leaders explicitly rejected the 'Popish calendar' even though the astronomy was objectively correct. The result was absurd: crossing from Catholic France into Protestant Germany could jump you forward or backward 10 days. Letters between countries carried two dates. Trade contracts required specifying which calendar applied. Europe literally couldn't agree on what day it was."
      },
      {
        event: "Protestant countries gradually adopt the Gregorian calendar over the next 170 years — Britain finally switches in 1752, by which point 11 days must be skipped. Riots reportedly break out with crowds shouting 'Give us our eleven days!'",
        options: [
          "All remaining countries adopt the Gregorian calendar shortly after Britain",
          "Russia holds out until 1918 and the Orthodox Church never fully switches — which means that Russia's 'October Revolution' of 1917 actually took place in November by the Western calendar, and Orthodox Christmas falls on January 7th rather than December 25th",
          "Russia adopts the calendar at the same time as Britain in 1752",
          "The calendar difference has no practical effect on historical events"
        ],
        correctIndex: 1,
        explanation: "Russia didn't adopt the Gregorian calendar until the Bolsheviks took power in 1918 — by which point the drift had grown to 13 days. This means the 'October Revolution' took place on October 25th in Russia's Julian calendar but November 7th in the Western Gregorian calendar. Orthodox churches that still follow the Julian calendar celebrate Christmas 13 days after the Western date. A papal calendar reform from 1582 is still creating confusion in 2026."
      },
      {
        event: "Nearly 450 years later, the consequences of religious resistance to a pope's calendar are still visible in global culture",
        options: [
          "The calendar differences have been completely resolved worldwide",
          "Religious spite over a pope's math created centuries of date chaos — the reason Russia's October Revolution is in November, Orthodox Christmas is on January 7th, and George Washington has two different birthdays (February 11 Old Style, February 22 New Style). A 16th-century religious grudge against a pope still shapes global calendars today",
          "Only historians are aware of the calendar differences",
          "A universal calendar replaces both the Julian and Gregorian systems"
        ],
        correctIndex: 1,
        explanation: "The Gregorian calendar reform was a simple fix for a real astronomical problem: the Julian calendar gained roughly 3 days every 400 years. But Protestant refusal to accept a Catholic pope's correction — purely out of religious spite — created centuries of chaos. George Washington was born on February 11 under the Julian calendar but we celebrate his birthday on February 22 (Gregorian). Russia's most famous revolution is named after the wrong month. And 200 million Orthodox Christians still celebrate Christmas on what the rest of the world calls January 7th. All because Protestants in 1582 decided they'd rather have the wrong date than agree with the Pope."
      }
    ]
  },
  {
    id: 102,
    title: "The Mosquito's Canal",
    events: [
      {
        event: "1881: Cuban doctor Carlos Finlay presents a paper to the Havana Academy of Sciences proposing that yellow fever is transmitted by mosquitoes — not by 'bad air' or contaminated objects, as the medical establishment believes. His colleagues mock the idea",
        options: [
          "Finlay's theory is quickly accepted and yellow fever is controlled",
          "Finlay spends 19 years defending his mosquito theory against ridicule — until 1900, when US Army surgeon Walter Reed conducts experiments in Cuba that prove Finlay was right all along. Mosquitoes, specifically Aedes aegypti, transmit yellow fever",
          "Finlay abandons his theory after failing to prove it experimentally",
          "Another scientist independently discovers the mosquito connection before Reed's experiments"
        ],
        correctIndex: 1,
        explanation: "Finlay was right for 19 years while the medical world laughed. He even identified the correct species of mosquito — Aedes aegypti. Reed's experiments in Cuba (using controversial human volunteers, some of whom died) definitively proved the mosquito transmission theory. Reed himself credited Finlay, writing that the Cuban doctor had been 'the first to state and uphold this theory.'"
      },
      {
        event: "With the mosquito identified as the vector, the US Army's William Gorgas launches an aggressive campaign in Cuba and then Panama: draining standing water, screening buildings, and fumigating mosquito breeding sites. Yellow fever rates plummet",
        options: [
          "The mosquito control campaign proves too expensive to sustain",
          "The success in controlling yellow fever solves the problem that had defeated the French canal project — France had abandoned the Panama Canal in 1889 after yellow fever and malaria killed an estimated 22,000 workers. With the mosquito conquered, the impossible becomes possible",
          "The canal project was abandoned for engineering reasons, not disease",
          "Yellow fever continues killing workers despite the mosquito control efforts"
        ],
        correctIndex: 1,
        explanation: "The French effort to build the Panama Canal was one of history's greatest engineering disasters — and the primary killer wasn't engineering, it was disease. Yellow fever and malaria devastated the workforce. Ferdinand de Lesseps, who had built the Suez Canal, couldn't conquer a mosquito. When the US took over the project, Gorgas's mosquito control program was as important as any engineering advance. He drained swamps, oiled standing water, and screened every building."
      },
      {
        event: "With yellow fever controlled through mosquito eradication, the United States completes the Panama Canal in 1914 — a project the French had been forced to abandon after losing 22,000 workers to mosquito-borne disease",
        options: [
          "The Panama Canal has only moderate impact on global trade",
          "The Panama Canal reshapes global maritime commerce — ships no longer need to round Cape Horn, cutting the New York-to-San Francisco voyage from 14,000 miles to 6,000 miles. A mocked Cuban doctor's mosquito theory is the reason one of the world's most important waterways exists",
          "The canal is completed but rarely used because shipping routes don't change",
          "Another canal is built across Nicaragua instead, making Panama's irrelevant"
        ],
        correctIndex: 1,
        explanation: "A Cuban doctor was laughed at for 19 years → an American Army surgeon proved him right → a public health officer used the knowledge to defeat yellow fever in Panama → the United States built a canal the French couldn't → that canal transformed global trade forever. The Panama Canal handles about 5% of world trade today. Every ship that passes through it owes a debt to Carlos Finlay, the doctor whose colleagues called him crazy for blaming a mosquito."
      }
    ]
  },
  {
    id: 103,
    title: "The King's Jaw",
    events: [
      {
        event: "1661: Charles II of Spain is born — the product of generations of Habsburg intermarriage so extreme that his family tree doesn't branch. His parents were uncle and niece, his grandparents were uncle and niece, and he was genetically more inbred than the child of a brother and sister",
        options: [
          "Charles II is a healthy, vigorous ruler who strengthens the Spanish Empire",
          "Charles is physically and mentally disabled — he can barely chew food due to his severely deformed 'Habsburg jaw,' doesn't speak until age four, can barely walk, and is widely regarded as unable to govern. Most critically, he cannot produce an heir",
          "Charles overcomes his disabilities through excellent medical care",
          "The Spanish court successfully conceals Charles's health problems"
        ],
        correctIndex: 1,
        explanation: "The Habsburg jaw — prognathism so severe that Charles's lower jaw protruded far beyond his upper, making it nearly impossible to chew — was the most visible symptom. He also suffered from numerous other genetic disorders: he was partially deaf, epileptic, and had an oversized tongue that made his speech nearly unintelligible. Nicknamed 'El Hechizado' (The Bewitched), he was king of the world's largest empire but could barely feed himself."
      },
      {
        event: "Charles II dies in 1700 with no heir — the last of the Spanish Habsburgs. His will names Philip, Duke of Anjou (a French Bourbon prince), as his successor, but other European powers refuse to accept a Bourbon on the Spanish throne",
        options: [
          "The succession dispute is resolved diplomatically without conflict",
          "The War of the Spanish Succession erupts in 1701 — every major European power is drawn in. Britain, Austria, the Dutch Republic, and others fight France and Spain for 13 years in one of the largest and most consequential wars in European history",
          "Philip of Anjou peacefully assumes the throne and the matter is settled",
          "The Spanish Empire is divided equally among claimants without war"
        ],
        correctIndex: 1,
        explanation: "One king's inability to produce an heir triggered a war that engulfed a continent. The War of the Spanish Succession (1701-1714) was fought across Europe, North America, and the seas. The stakes were enormous: if a French Bourbon controlled both France AND the Spanish Empire (including its vast colonies), the balance of power in Europe and the world would be permanently altered."
      },
      {
        event: "The War of the Spanish Succession ends with the Treaty of Utrecht in 1713, which redraws the map of Europe and the colonial world",
        options: [
          "The treaty restores the pre-war status quo",
          "Britain emerges as the biggest winner — gaining Gibraltar, Minorca, Newfoundland, Nova Scotia, and the Asiento (monopoly on the Atlantic slave trade). One inbred king's inability to chew his food or produce an heir redrew the colonial map and gave Britain strategic assets it holds to this day",
          "France gains the most territory from the treaty",
          "Spain retains all its territorial possessions after the war"
        ],
        correctIndex: 1,
        explanation: "Because one royal family couldn't stop marrying its cousins, one king was born who couldn't produce an heir, one succession dispute triggered a continental war, and one peace treaty gave Britain Gibraltar (which it still holds), control of key Atlantic territories, and the monopoly on the slave trade that would generate enormous wealth. The Habsburg jaw — a genetic deformity caused by centuries of inbreeding — quite literally reshaped the world map."
      }
    ]
  },
  {
    id: 104,
    title: "The Conqueror's Comet",
    events: [
      {
        event: "1066: A blazing comet appears in the skies over England — visible for weeks, its brilliant tail stretching across the heavens. Anglo-Saxon King Harold II and his court view it as an omen of disaster",
        options: [
          "Harold dismisses the comet as a natural phenomenon with no significance",
          "Across the English Channel, William of Normandy seizes on the comet as divine propaganda — he declares that God has sent a sign endorsing his planned invasion of England. The comet emboldens his followers and is later immortalized in the Bayeux Tapestry",
          "Both Harold and William ignore the comet entirely",
          "The comet delays William's invasion plans due to superstitious fear"
        ],
        correctIndex: 1,
        explanation: "The comet — later identified as Halley's Comet on one of its periodic returns — appeared in April 1066, just months before the most consequential invasion in English history. William brilliantly used it as propaganda: the heavens themselves blessed his claim to the English throne. The Bayeux Tapestry depicts the comet with courtiers pointing at the sky in awe, and the Latin inscription translates to 'They marvel at the star.'"
      },
      {
        event: "William invades England and defeats Harold at the Battle of Hastings on October 14, 1066. French-speaking Norman nobles take control of England, ruling over an Anglo-Saxon population that speaks Old English",
        options: [
          "The Norman rulers quickly adopt Old English and abandon French",
          "For centuries, French is the language of the English court, law, and aristocracy while the Anglo-Saxon common people continue speaking Old English — the two languages slowly merge, creating Middle English and eventually Modern English",
          "Old English dies out completely and is replaced entirely by French",
          "The two language communities remain completely separate for centuries"
        ],
        correctIndex: 1,
        explanation: "The linguistic fusion took centuries. French-speaking Norman lords governed English-speaking peasants. French became the language of law ('plaintiff,' 'defendant,' 'jury'), government ('parliament,' 'sovereign,' 'nation'), cuisine ('beef,' 'pork,' 'venison'), and high culture ('art,' 'music,' 'romance'). Anglo-Saxon persisted as the language of everyday life ('house,' 'bread,' 'water,' 'love'). The two streams gradually merged into something entirely new."
      },
      {
        event: "The fusion of Norman French and Anglo-Saxon English creates Modern English — a language with an extraordinarily large vocabulary because it has two words for almost everything",
        options: [
          "English develops a vocabulary similar in size to other European languages",
          "English ends up with roughly twice the vocabulary of most European languages — the Anglo-Saxon farmer raised a 'cow' or 'pig' or 'sheep,' but the French-speaking lord ate 'beef' or 'pork' or 'mutton.' A comet convinced a duke he had divine backing, and the resulting conquest is why English has more words than almost any other language",
          "The French vocabulary is eventually purged from English during a nationalist movement",
          "Only legal and governmental French words survive in modern English"
        ],
        correctIndex: 1,
        explanation: "A comet appeared in the sky → a duke used it as propaganda → he invaded England → French-speaking conquerors ruled English-speaking commoners → two languages slowly fused → English developed an enormous dual vocabulary. The cow/beef split is the most famous example: Anglo-Saxon farmers tended 'cows,' 'sheep,' and 'pigs' (Germanic words), while Norman lords dined on 'beef,' 'mutton,' and 'pork' (French words). Halley's Comet, returning every 75 years in perfect ignorance, helped create the language you're reading right now."
      }
    ]
  },
  {
    id: 105,
    title: "The Mapmaker's Mistake",
    events: [
      {
        event: "1507: German cartographer Martin Waldseemüller publishes a massive printed world map — 12 woodcut panels assembled into a 4.5-by-8-foot wall map. He names the newly discovered western landmass 'America' after Italian explorer Amerigo Vespucci, who described it as a 'New World'",
        options: [
          "The map is largely ignored and the name doesn't catch on",
          "The map is a sensation — 1,000 copies are printed and distributed across Europe. The name 'America' spreads rapidly through universities, mapmaking workshops, and libraries across the continent",
          "Columbus immediately objects and the name is changed to 'Columbia'",
          "Only the southern continent is named 'America' while the north is called something else"
        ],
        correctIndex: 1,
        explanation: "Waldseemüller's 1507 map was the first to apply the name 'America' to the new western landmass and the first to show it as a separate continent from Asia. It was a bestseller by 16th-century standards — a thousand copies circulated through the intellectual networks of Renaissance Europe. The map was so influential that its name stuck even though the reasoning behind it was questionable."
      },
      {
        event: "Waldseemüller later realizes his error — Vespucci didn't discover the continent; Columbus did. He removes the name 'America' from his 1513 updated map, replacing it with 'Terra Incognita' (Unknown Land)",
        options: [
          "The correction works and the name 'America' fades from use",
          "It's too late — the original 1,000 copies have already spread across Europe, and other mapmakers have adopted the name. 'America' has entered the vocabulary of geographers, scholars, and publishers. Waldseemüller's correction is simply ignored",
          "Both names — 'America' and 'Terra Incognita' — are used equally for centuries",
          "The name changes to 'Columbia' in honor of Columbus as Waldseemüller intended"
        ],
        correctIndex: 1,
        explanation: "The genie was out of the bottle. Waldseemüller tried to undo his naming decision, but 1,000 copies of the original map were already circulating. Other cartographers — including Gerardus Mercator, whose influential 1538 map extended 'America' to both continents — had adopted the name. Waldseemüller's retraction came too late. The printing press, which he had used to spread the name, made it impossible to recall."
      },
      {
        event: "Other mapmakers adopt and extend the name. By the mid-1500s, 'America' is applied to both the northern and southern continents, permanently naming them after Amerigo Vespucci",
        options: [
          "Historians eventually rename the continents after Columbus",
          "Two entire continents end up permanently named after a Florentine navigator who merely described someone else's discovery — because a German mapmaker made a 1,000-copy print run with a factual error that he couldn't take back. One of the most consequential naming mistakes in history was made permanent by the printing press",
          "The name 'America' is eventually replaced by an indigenous name",
          "Only North America keeps the name while South America gets a different one"
        ],
        correctIndex: 1,
        explanation: "Amerigo Vespucci never commanded a voyage of discovery — he was, at most, a navigator on other people's expeditions. But he was a gifted writer whose vivid descriptions of the 'New World' captured the European imagination. Waldseemüller, working from Vespucci's published letters, assumed Vespucci deserved naming rights. By the time he realized his mistake, 1,000 printed copies had seeded the name across Europe. A single print run of a map with a factual error permanently named two continents and 1 billion people."
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
  30, 31, 32, 33, 34, 35, 36, 42, 41, 47, 43, 38, 45, 39, 40,
  1, 2, 3, 4, 49, 48, 5, 6, 7, 50, 8, 9, 44, 46,
  55, 54, 71, 58, 51, 64, 53, 65, 60, 72,
  61, 56, 59, 73, 57, 67, 63, 74, 66, 75,
  76, 84, 82, 90, 78, 95, 86, 91, 80, 98,
  85, 94, 88, 99, 83, 101, 87, 92, 77, 103,
  89, 96, 93, 100, 79, 104, 81, 97, 102, 105,
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
