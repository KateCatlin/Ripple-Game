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
    id: 1,
    title: "The Oil Embargo Shock",
    events: [
      {
        event: "1973: OPEC announces oil embargo against the United States",
        options: [
          "US increases domestic drilling immediately",
          "Gas prices quadruple within months",
          "Americans switch to electric cars",
          "Oil companies are nationalized"
        ],
        correctIndex: 1,
        explanation:
          "The embargo caused gas prices to spike from $0.39 to $1.35 per gallon — a quadrupling that shocked American consumers and the economy."
      },
      {
        event: "Gas prices quadruple, fuel becomes scarce",
        options: [
          "Government rations gasoline by license plate",
          "Speed limits reduced to 55 mph nationwide",
          "Public transit systems shut down",
          "Auto industry remains unchanged"
        ],
        correctIndex: 1,
        explanation:
          "Congress passed the National Maximum Speed Law, reducing speed limits to 55 mph to conserve fuel — a law that remained until 1995."
      },
      {
        event: "Speed limits lowered to save fuel",
        options: [
          "Smaller, fuel-efficient foreign cars gain US market share",
          "Gas prices return to normal immediately",
          "Trucking industry collapses",
          "Americans buy even larger vehicles"
        ],
        correctIndex: 0,
        explanation:
          "Smaller, fuel-efficient Japanese cars gained massive US market share.  Detroit's big-car dominance ended, and fuel economy became a selling point."
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
        "Ship traffic between seas remains surprisingly low",
        "Marine species can now migrate between the seas",
        "The seas remain completely biologically separate",
        "Only cargo ships use the new canal"
      ],
      correctIndex: 1,
      explanation: "The canal created the first water connection between the Mediterranean and Red Sea in millions of years — allowing marine species to swim between them."
    },
    {
      event: "Marine species begin migrating between Mediterranean and Red Sea",
      options: [
        "Both ecosystems remain balanced",
        "Red Sea species invade and dominate the Mediterranean",
        "Mediterranean species dominate the Red Sea",
        "Migration stops after initial movement"
      ],
      correctIndex: 1,
      explanation: "Red Sea species, adapted to warmer and saltier water, proved more competitive.  Hundreds of species invaded the Mediterranean in 'Lessepsian migration. '"
    },
    {
      event: "Invasive Red Sea species flood into Mediterranean",
      options: [
        "Mediterranean species adapt quickly to competition",
        "Native Mediterranean species decline significantly",
        "Fishing industry benefits from new species",
        "Ecosystem reaches a new stable balance"
      ],
      correctIndex: 1,
      explanation: "Native Mediterranean species face severe competition.  Venomous lionfish, poisonous pufferfish, and aggressive species have disrupted fishing and ecosystems."
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
  id: 11,
  title: "Section 230 Changes the Internet",
  events:  [
    {
      event: "1996: Congress passes Section 230, protecting websites from liability for user content",
      options:  [
        "Websites become fully liable for all user content",
        "User-generated content platforms become legally viable",
        "Internet growth slows due to regulations",
        "Only government-approved content is allowed online"
      ],
      correctIndex: 1,
      explanation: "Section 230 meant websites couldn't be sued for what users posted. Without this protection, platforms like YouTube or Facebook would be too legally risky to operate."
    },
    {
      event: "Platforms protected from liability for user posts",
      options:  [
        "Platforms carefully moderate all content before posting",
        "Social media and video sharing platforms explode in growth",
        "Users post less due to fear of restrictions",
        "Only professional content creators share online"
      ],
      correctIndex: 1,
      explanation: "YouTube launched in 2005, Facebook opened publicly in 2006, Twitter grew rapidly — none would have been viable if liable for every user's post."
    },
    {
      event: "Social media platforms scale to billions of users",
      options: [
        "Content remains high-quality and well-curated",
        "Misinformation spreads with limited platform accountability",
        "Platforms successfully self-regulate all content",
        "Users demand even more liability protections for platforms"
      ],
      correctIndex: 1,
      explanation: "The same protection that enabled social media also meant platforms had limited incentive to police misinformation, hate speech, and harmful content at scale."
    }
  ]
},
{
  id: 12,
  title: "The iPhone Overwhelms AT&T",
  events: [
    {
      event:  "2007: Apple launches iPhone exclusively with AT&T",
      options: [
        "AT&T easily handles the new data traffic",
        "AT&T's network becomes completely overwhelmed",
        "Customers prefer other carriers and avoid iPhone",
        "iPhone uses less data than expected"
      ],
      correctIndex: 1,
      explanation: "iPhone users consumed vastly more data than any previous phone users — streaming, browsing, and apps crushed AT&T's network infrastructure."
    },
    {
      event: "AT&T's network overwhelmed by iPhone data usage",
      options:  [
        "AT&T cancels the iPhone exclusivity deal",
        "AT&T invests billions in network infrastructure upgrades",
        "Customers accept poor network quality indefinitely",
        "Apple reduces iPhone data capabilities"
      ],
      correctIndex: 1,
      explanation: "AT&T was forced to invest billions in infrastructure upgrades — building out 3G and eventually 4G networks to handle smartphone data demands."
    },
    {
      event: "AT&T massively upgrades network for smartphone era",
      options:  [
        "Other carriers ignore smartphones entirely",
        "Verizon and others race to get their own flagship smartphones",
        "Smartphones remain AT&T exclusive forever",
        "Network upgrades prove unnecessary"
      ],
      correctIndex: 1,
      explanation: "Competitors rushed to secure their own smartphones.  Verizon partnered with Google on Android, eventually getting the iPhone in 2011. The smartphone wars began."
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
  title:  "Napster Changes Music Forever",
  events: [
    {
      event: "1999: Napster launches, enabling free peer-to-peer music sharing",
      options: [
        "Users reject free music as low quality",
        "Millions begin downloading music for free",
        "Record labels embrace the technology",
        "Only obscure artists are shared"
      ],
      correctIndex: 1,
      explanation: "Napster reached 80 million users at its peak. For the first time, anyone could download almost any song for free — devastating music industry sales."
    },
    {
      event: "Millions download music for free, album sales plummet",
      options: [
        "Record labels ignore the trend",
        "Record labels sue Napster and individual users",
        "Artists embrace free distribution",
        "CD sales actually increase"
      ],
      correctIndex: 1,
      explanation: "The RIAA sued Napster into bankruptcy and began suing individual downloaders — sometimes grandmothers and children — creating a massive PR backlash."
    },
    {
      event: "Record labels sue file sharers, but piracy continues",
      options:  [
        "Piracy is successfully eliminated",
        "Apple launches iTunes as legal alternative",
        "Physical album sales recover fully",
        "Record labels give up on digital"
      ],
      correctIndex: 1,
      explanation:  "Steve Jobs convinced labels that 99-cent songs could compete with free.  iTunes launched in 2003, eventually giving way to streaming — the industry's new model."
    }
  ]
},
{
  id:  15,
  title: "The Super Bowl Ad Revolution",
  events:  [
    {
      event: "1984: Apple airs '1984' Super Bowl ad, then never runs it again",
      options: [
        "The ad is forgotten immediately",
        "Scarcity creates massive buzz and free news coverage",
        "Apple loses money on the failed ad",
        "Other companies avoid Super Bowl advertising"
      ],
      correctIndex: 1,
      explanation: "By only airing the ad once, Apple created scarcity.  News programs replayed it for free, analyzing it endlessly — generating millions in free publicity."
    },
    {
      event: "News coverage multiplies the ad's reach for free",
      options: [
        "Other companies ignore the lesson",
        "Super Bowl ads become cultural events worth discussing",
        "TV networks ban memorable ads",
        "Apple never advertises again"
      ],
      correctIndex: 1,
      explanation: "Companies realized Super Bowl ads could generate buzz beyond the game.  Ads became entertainment — discussed, ranked, and anticipated as content themselves."
    },
    {
      event: "Super Bowl ads become anticipated cultural moments",
      options:  [
        "Ad prices decrease due to competition",
        "30-second Super Bowl spots cost over $7 million by 2024",
        "Companies shift away from Super Bowl ads",
        "Ads become less creative to save money"
      ],
      correctIndex: 1,
      explanation: "Super Bowl ad prices skyrocketed from $500K in 1984 to over $7 million for 30 seconds by 2024 — companies pay for cultural relevance, not just eyeballs."
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
  id:  20,
  title: "China Joins the WTO",
  events: [
    {
      event: "2001: China officially joins the World Trade Organization",
      options: [
        "Trade barriers with China remain high",
        "American companies shift manufacturing to China",
        "Chinese wages rise to US levels",
        "US manufacturing increases"
      ],
      correctIndex: 1,
      explanation:  "WTO membership gave China 'most favored nation' trade status.  With wages a fraction of US levels, companies rushed to manufacture in China."
    },
    {
      event: "American companies move manufacturing to China",
      options: [
        "US factory workers easily find new jobs",
        "US manufacturing employment drops by 30%",
        "Wages in manufacturing increase",
        "Unions successfully stop outsourcing"
      ],
      correctIndex: 1,
      explanation: "The US lost 5 million manufacturing jobs between 2000-2015. The 'China Shock' devastated factory towns in the Midwest and South."
    },
    {
      event:  "Rust Belt loses millions of manufacturing jobs",
      options: [
        "Affected regions quickly recover economically",
        "Economic anxiety contributes to political realignment",
        "Workers embrace free trade policies",
        "Manufacturing returns within a decade"
      ],
      correctIndex:  1,
      explanation: "Economic devastation in manufacturing regions contributed to the populist political movements of the 2010s.  Trade policy became a major campaign issue."
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
  id: 24,
  title: "Chile's Copper Nationalization",
  events: [
    {
      event: "1971: Chile nationalizes its copper mines under President Allende",
      options: [
        "Copper production increases immediately",
        "Global copper prices spike on supply fears",
        "US companies accept the nationalization peacefully",
        "Copper prices decrease"
      ],
      correctIndex: 1,
      explanation:  "Chile was the world's largest copper producer.  Nationalization threatened US corporate interests and global copper supply — prices spiked on uncertainty."
    },
    {
      event: "Copper prices spike, US corporate interests threatened",
      options:  [
        "US accepts Chile's sovereign decision",
        "US supports coup that overthrows Allende",
        "Diplomatic negotiations resolve the dispute",
        "Other countries nationalize copper in solidarity"
      ],
      correctIndex: 1,
      explanation: "The CIA supported the 1973 coup that installed Pinochet.  Declassified documents confirmed US involvement — resource control shaped Cold War interventions."
    },
    {
      event: "US-backed coup installs Pinochet, mines are privatized",
      options: [
        "This remains an isolated incident",
        "Pattern repeats in other resource-rich countries",
        "Nationalization movements succeed globally",
        "US stops intervening in foreign nations"
      ],
      correctIndex: 1,
      explanation: "Chile became a template.  US intervention in Guatemala, Iran, and elsewhere followed similar patterns — protecting corporate resource access through regime change."
    }
  ]
},
{
  id: 25,
  title: "Russia Invades Ukraine, Energy Crisis Follows",
  events:  [
    {
      event: "February 2022: Russia invades Ukraine; Europe sanctions Russian gas",
      options:  [
        "European energy prices remain stable",
        "European energy costs triple as Russian gas is cut off",
        "Alternative energy sources replace Russian gas easily",
        "Sanctions are lifted within weeks"
      ],
      correctIndex: 1,
      explanation: "Europe depended on Russia for 40% of its natural gas. When flows stopped, energy prices tripled — German electricity costs hit record highs."
    },
    {
      event: "European energy prices triple, industry faces crisis",
      options:  [
        "All industries adapt to higher costs",
        "Energy-intensive industry begins relocating from Europe",
        "Europe quickly builds renewable alternatives",
        "Consumers don't notice price increases"
      ],
      correctIndex:  1,
      explanation: "Chemical plants, steel mills, and fertilizer producers couldn't afford European energy prices. Many began relocating to the US or Middle East with cheaper energy."
    },
    {
      event: "European industry relocates to regions with cheaper energy",
      options: [
        "Only European markets are affected",
        "Global fertilizer prices spike, affecting world food costs",
        "Agriculture is unaffected by fertilizer costs",
        "Food prices decrease globally"
      ],
      correctIndex: 1,
      explanation: "Natural gas is the key ingredient in nitrogen fertilizer. European fertilizer plant closures spiked global fertilizer prices — raising food costs from Africa to Asia."
    }
  ]
},
{
  id: 26,
  title: "The First Credit Card",
  events: [
    {
      event: "1950:  Diners Club issues first credit card for restaurant payments",
      options:  [
        "Restaurants refuse to accept the new cards",
        "Consumers can now pay without carrying cash",
        "Credit cards remain limited to wealthy elites",
        "Cash payments increase in popularity"
      ],
      correctIndex: 1,
      explanation: "Diners Club solved a simple problem — businessmen didn't want to carry cash. The concept spread rapidly as consumers loved the convenience."
    },
    {
      event:  "Credit cards spread, enabling cashless purchases",
      options:  [
        "Consumers only buy what they can afford",
        "'Buy now, pay later' becomes normalized",
        "Savings rates increase dramatically",
        "Debt remains stigmatized"
      ],
      correctIndex: 1,
      explanation: "Credit cards psychologically separated buying from paying. Purchases felt less 'real' without handing over cash — consumer debt began its long climb."
    },
    {
      event: "Consumer debt becomes normal and accepted",
      options:  [
        "Household debt levels remain stable",
        "Average household debt rises dramatically over decades",
        "Consumers pay off balances monthly",
        "Credit card companies struggle to profit"
      ],
      correctIndex: 1,
      explanation: "Average US household debt rose from near zero in 1950 to over $100,000 by 2020. A simple restaurant card invented the consumer debt economy."
    }
  ]
},
{
  id:  27,
  title: "The TV Dinner Changes Family Life",
  events:  [
    {
      event: "1954:  Swanson introduces the first 'TV Dinner' — a complete frozen meal",
      options: [
        "Consumers reject processed food",
        "Meals no longer require cooking from scratch",
        "Families continue eating home-cooked dinners",
        "Frozen food technology fails"
      ],
      correctIndex: 1,
      explanation: "Swanson sold 10 million TV dinners in the first year. Working families embraced the convenience — dinner could be ready in 25 minutes with no preparation."
    },
    {
      event:  "Frozen convenience meals become popular",
      options:  [
        "Families continue gathering at dinner tables",
        "Families begin eating in front of the television",
        "Cooking skills become more valued",
        "Meal times become longer"
      ],
      correctIndex: 1,
      explanation: "The 'TV Dinner' was named because it came in a tray designed for eating while watching TV. Family dinners at the table began declining."
    },
    {
      event:  "Families eat in front of TV instead of dining tables",
      options:  [
        "Family conversation increases",
        "Television becomes the center of home life",
        "Advertising has less influence on families",
        "Children watch less television"
      ],
      correctIndex:  1,
      explanation: "The living room replaced the dining room as the family gathering place.  Advertisers gained direct access to families during their most attentive hours."
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
  title: "CNN Invents 24-Hour News",
  events: [
    {
      event: "1980: Ted Turner launches CNN, the first 24-hour news network",
      options: [
        "Viewers prefer nightly news broadcasts",
        "News must now fill 24 hours, not 30 minutes",
        "Other networks ignore 24-hour format",
        "CNN fails within its first year"
      ],
      correctIndex: 1,
      explanation: "Suddenly news had 24 hours to fill, not just the evening 30-minute slot.  This fundamental shift changed what counted as 'news' and how it was presented."
    },
    {
      event: "Networks must fill 24 hours with news content",
      options:  [
        "Coverage becomes more in-depth and analytical",
        "News becomes entertainment to attract viewers",
        "Networks show test patterns overnight",
        "Viewership decreases significantly"
      ],
      correctIndex: 1,
      explanation: "To fill airtime and attract viewers, news became more sensational and entertainment-focused. Opinion hosts, debates, and speculation filled the hours."
    },
    {
      event: "News blends with entertainment to fill airtime",
      options: [
        "The news cycle remains daily",
        "'Breaking news' becomes constant to maintain urgency",
        "Viewers become better informed",
        "Coverage becomes more objective"
      ],
      correctIndex: 1,
      explanation: "To keep viewers watching, everything became 'breaking.' The news cycle accelerated from daily to hourly to minute-by-minute — creating perpetual urgency."
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
