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
  title: "The Kudzu Invasion",
  events: [
    {
      event: "1930s: US government promotes kudzu vine across the South to prevent soil erosion",
      options: [
        "Kudzu fails to grow in American soil",
        "Farmers plant millions of kudzu seedlings",
        "Southern states immediately ban the vine",
        "Kudzu remains confined to test plots"
      ],
      correctIndex: 1,
      explanation: "The Civilian Conservation Corps planted kudzu widely, and farmers were paid $8/acre to plant it.  The fast-growing vine seemed like a miracle solution."
    },
    {
      event: "Millions of kudzu seedlings planted across the American South",
      options: [
        "Erosion is successfully controlled forever",
        "Kudzu grows up to 1 foot per day, smothering everything",
        "Kudzu dies back each winter and stays controlled",
        "Native plants easily outcompete kudzu"
      ],
      correctIndex: 1,
      explanation:  "Kudzu can grow 60 feet per season and a foot per day in summer.  It grows over trees, houses, and power lines — smothering and killing native vegetation."
    },
    {
      event: "Kudzu spreads uncontrollably, smothering forests and structures",
      options:  [
        "Easy control methods are quickly found",
        "Kudzu now covers over 7 million acres",
        "Southern states successfully eradicate it",
        "Kudzu becomes a valuable commercial crop"
      ],
      correctIndex:  1,
      explanation: "Called 'the vine that ate the South,' kudzu now covers over 7 million acres and spreads 150,000 acres annually. It remains nearly impossible to eradicate."
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
  title: "Glass-Steagall Protects Banks",
  events: [
    {
      event:  "1933: Glass-Steagall Act separates commercial banking from investment banking",
      options: [
        "Banks immediately find loopholes",
        "Banks become smaller and more boring but stable",
        "The financial industry opposes and ignores it",
        "Another financial crisis happens immediately"
      ],
      correctIndex: 1,
      explanation: "Banks could no longer gamble with depositors' money. Commercial banks became boring, stable institutions — exactly what regulators intended."
    },
    {
      event: "Commercial banks become stable, boring, and separated from Wall Street risk",
      options:  [
        "Financial crises continue regularly",
        "No major banking crises occur for 50+ years",
        "Banks become unprofitable and fail",
        "Regulation is repealed within a decade"
      ],
      correctIndex: 1,
      explanation: "From 1933 to the 1980s, there were no major banking crises in the US — the longest such period in American history.  Boring banks were safe banks."
    },
    {
      event: "50 years of banking stability under Glass-Steagall",
      options: [
        "The law is strengthened further",
        "Law repealed in 1999; complex financial instruments emerge",
        "Banks voluntarily maintain separation",
        "Other countries adopt similar laws"
      ],
      correctIndex: 1,
      explanation: "Glass-Steagall was repealed in 1999.  Banks merged commercial and investment operations.  Complex derivatives emerged.  Nine years later:  the 2008 financial crisis."
    }
  ]
},
{
  id: 18,
  title: "The 1965 Immigration Act Transforms America",
  events: [
    {
      event:  "1965: Immigration Act eliminates national-origin quotas favoring Europeans",
      options:  [
        "Immigration patterns remain unchanged",
        "Asian and Latin American immigration increases dramatically",
        "Total immigration decreases",
        "European immigration increases further"
      ],
      correctIndex: 1,
      explanation: "The old quota system heavily favored Northern Europeans. The new law opened doors to immigrants from Asia, Latin America, and Africa for the first time."
    },
    {
      event: "Immigration from Asia and Latin America increases significantly",
      options:  [
        "Immigrants struggle to find skilled work",
        "Wave of engineers and doctors immigrate to US",
        "Tech industry rejects immigrant workers",
        "Immigration is quickly restricted again"
      ],
      correctIndex: 1,
      explanation: "The law prioritized skilled workers and family reunification. Waves of engineers, doctors, and scientists immigrated — particularly from India, China, and Taiwan."
    },
    {
      event: "Skilled immigrants reshape American tech and medicine",
      options:  [
        "Immigrant entrepreneurs remain rare",
        "Over half of billion-dollar startups have immigrant founder",
        "Silicon Valley remains homogeneous",
        "Immigrants leave after gaining skills"
      ],
      correctIndex: 1,
      explanation: "By 2020, 55% of US billion-dollar startups had at least one immigrant founder.  Google, Tesla, eBay, Yahoo — American tech was built by immigrants the 1965 law admitted."
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
  id: 21,
  title: "The Soviet Wheat Deal",
  events:  [
    {
      event: "1972: Soviet Union secretly buys massive amounts of US wheat after crop failure",
      options: [
        "US wheat supplies remain adequate",
        "Global wheat prices triple as supplies vanish",
        "American farmers refuse to sell",
        "Soviet purchase is announced immediately"
      ],
      correctIndex: 1,
      explanation: "The Soviets bought 30% of the US wheat crop before anyone realized what was happening. When news broke, wheat prices spiked from $1.70 to $5. 00 per bushel."
    },
    {
      event: "Wheat prices triple, bread and food costs spike in US",
      options:  [
        "American consumers are unaffected",
        "Inflation surges, eroding purchasing power",
        "Farmers are blamed for high prices",
        "Prices return to normal within weeks"
      ],
      correctIndex: 1,
      explanation: "The wheat shock contributed to the broader 1970s inflation crisis. Food prices rose 20% in one year.  Consumers felt the pain at every grocery store visit."
    },
    {
      event: "Food inflation contributes to broader economic crisis",
      options: [
        "Government ignores commodities trading",
        "Commodity futures trading is reformed for transparency",
        "Secret commodity purchases continue",
        "Farmers stop exporting grain"
      ],
      correctIndex: 1,
      explanation: "The scandal led to reforms requiring disclosure of large commodity purchases. The 'Great Grain Robbery' showed how secret trading could destabilize markets."
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
  title: "The Wolves That Moved Rivers",
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
