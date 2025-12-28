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
    title: "The New Coke Disaster",
    events: [
      {
        event: "1985: Coca-Cola launches 'New Coke' formula, consumers revolt",
        options: [
          "Stock crashes 40%",
          "Pepsi sales double overnight",
          "Original returns as 'Coca-Cola Classic'",
          "CEO resigns in disgrace"
        ],
        correctIndex: 2,
        explanation: "After just 79 days of backlash, Coca-Cola brought back the original formula as 'Coca-Cola Classic' — one of the fastest product reversals in history."
      },
      {
        event: "Coca-Cola Classic returns to store shelves",
        options: [
          "Sales surge past pre-New Coke levels",
          "Pepsi sues for false advertising",
          "New Coke is discontinued immediately",
          "Company splits into two divisions"
        ],
        correctIndex: 0,
        explanation: "The controversy generated massive free publicity, and Classic Coke sales actually surged beyond original levels — some theorized it was all planned."
      },
      {
        event: "Coca-Cola's sales surge due to 'New Coke' publicity",
        options: [
          "Pepsi launches 'Classic Pepsi' in response",
          "Conspiracy theories emerge about marketing stunt",
          "New Coke quietly rebranded as 'Coke II'",
          "Company stock reaches all-time high"
        ],
        correctIndex: 2,
        explanation: "New Coke wasn't killed — it was quietly rebranded as 'Coke II' in 1990 and sold in limited markets until 2002."
      }
    ]
  },
  {
    id: 2,
    title: "The Butterfly Effect of Apollo 13",
    events: [
      {
        event: "1970: Apollo 13's oxygen tank explodes en route to the Moon",
        options: [
          "Mission is aborted immediately",
          "Crew attempts manual Moon landing",
          "NASA uses lunar module as lifeboat",
          "Soviet Union offers rescue mission"
        ],
        correctIndex: 2,
        explanation: "In a brilliant improvisation, NASA engineers guided the crew to use the Lunar Module 'Aquarius' as an emergency lifeboat to survive."
      },
      {
        event: "Crew survives using Lunar Module as lifeboat",
        options: [
          "Moon program canceled entirely",
          "NASA redesigns all spacecraft systems",
          "Astronauts awarded Medal of Freedom",
          "Mission called 'successful failure'"
        ],
        correctIndex: 3,
        explanation: "NASA called Apollo 13 a 'successful failure' — the mission failed its objective but the safe return became one of NASA's greatest triumphs."
      },
      {
        event: "Apollo 13 becomes known as 'the successful failure'",
        options: [
          "NASA budget doubles for safety improvements",
          "All future missions include backup modules",
          "Oxygen tank design completely overhauled",
          "Mission inspires famous 1995 film"
        ],
        correctIndex: 2,
        explanation: "The oxygen tank design flaw that caused the explosion was completely redesigned — the stirring fans that sparked the explosion were removed from all future tanks."
      }
    ]
  },
  {
    id: 3,
    title: "The Streisand Effect Origins",
    events: [
      {
        event: "2003: Barbra Streisand sues photographer for $50M over aerial photo of her mansion",
        options: [
          "Photo is removed from all websites",
          "Photographer pays settlement",
          "Photo goes viral, viewed 420,000 times",
          "Court rules in Streisand's favor"
        ],
        correctIndex: 2,
        explanation: "Before the lawsuit, the photo had been downloaded just 6 times. After news of the lawsuit spread, it was viewed over 420,000 times in one month."
      },
      {
        event: "Streisand's lawsuit backfires, photo goes viral",
        options: [
          "Streisand wins on appeal",
          "New privacy laws enacted",
          "Term 'Streisand Effect' is coined",
          "Photographer wins counter-suit"
        ],
        correctIndex: 2,
        explanation: "The phenomenon was dubbed 'The Streisand Effect' by tech blogger Mike Masnick — now a widely-used term for when attempts to hide information backfire."
      },
      {
        event: "'Streisand Effect' becomes internet terminology",
        options: [
          "Streisand embraces the term humorously",
          "Term added to Oxford Dictionary",
          "Studied in university PR courses",
          "Inspires similar celebrity lawsuits"
        ],
        correctIndex: 2,
        explanation: "The Streisand Effect became a case study in PR and communications courses worldwide, teaching the dangers of attempting to suppress public information."
      }
    ]
  },
  {
    id: 4,
    title: "The Accidental Invention of Penicillin",
    events: [
      {
        event: "1928: Alexander Fleming leaves petri dish uncovered, mold grows on bacteria",
        options: [
          "Fleming discards the contaminated sample",
          "Mold kills all bacteria around it",
          "Laboratory is shut down for contamination",
          "Fleming patents the mold immediately"
        ],
        correctIndex: 1,
        explanation: "Fleming noticed a clear ring around the mold where bacteria couldn't grow — the mold was producing something that killed bacteria."
      },
      {
        event: "Fleming discovers mold killing bacteria",
        options: [
          "Immediately creates antibiotic medicine",
          "Names the substance 'penicillin'",
          "Sells discovery to pharmaceutical company",
          "Receives Nobel Prize that year"
        ],
        correctIndex: 1,
        explanation: "Fleming named the bacteria-killing substance 'penicillin' after the Penicillium mold, but he couldn't figure out how to purify it for medical use."
      },
      {
        event: "Fleming names discovery 'penicillin' but can't purify it",
        options: [
          "Discovery is forgotten for decades",
          "German scientists steal the research",
          "WWII creates urgent need for antibiotics",
          "Other scientists successfully purify it in 1940"
        ],
        correctIndex: 3,
        explanation: "In 1940, Howard Florey and Ernst Chain finally purified penicillin — all three shared the 1945 Nobel Prize for the discovery that would save millions."
      }
    ]
  },
  {
    id: 5,
    title: "Netflix's Blockbuster Mistake",
    events: [
      {
        event: "2000: Netflix offers to sell itself to Blockbuster for $50 million",
        options: [
          "Blockbuster acquires Netflix",
          "Blockbuster CEO laughs them out of the room",
          "Netflix accepts lower counter-offer",
          "Deal falls through due to regulations"
        ],
        correctIndex: 1,
        explanation: "Blockbuster CEO John Antioco reportedly laughed at the offer, calling Netflix a 'very small niche business.' It's now worth over $150 billion."
      },
      {
        event: "Blockbuster rejects Netflix acquisition",
        options: [
          "Netflix goes bankrupt within a year",
          "Blockbuster launches competing service",
          "Netflix pivots to streaming technology",
          "Both companies merge years later"
        ],
        correctIndex: 2,
        explanation: "Netflix invested heavily in streaming technology, launching its streaming service in 2007 — fundamentally changing how people consume entertainment."
      },
      {
        event: "Netflix launches streaming service in 2007",
        options: [
          "Blockbuster immediately copies the model",
          "Cable companies buy Blockbuster",
          "Streaming fails, DVD remains dominant",
          "Blockbuster files for bankruptcy in 2010"
        ],
        correctIndex: 3,
        explanation: "Blockbuster filed for bankruptcy in 2010. Today, only one Blockbuster store remains — in Bend, Oregon — while Netflix has 230+ million subscribers."
      }
    ]
  },
  {
    id: 6,
    title: "The Y2K Bug Panic",
    events: [
      {
        event: "1999: Fears grow that computers will fail when the year changes to 2000",
        options: [
          "Tech companies downplay the threat",
          "Governments spend billions on fixes",
          "People hoard food and water",
          "Stock market crashes preemptively"
        ],
        correctIndex: 1,
        explanation: "Governments and businesses worldwide spent an estimated $300-600 billion fixing the Y2K bug, updating millions of computer systems."
      },
      {
        event: "Billions spent fixing Y2K bug before midnight",
        options: [
          "Major systems still crash globally",
          "New Year arrives with minimal problems",
          "Internet collapses for 48 hours",
          "Power grids fail across Europe"
        ],
        correctIndex: 1,
        explanation: "January 1, 2000 arrived with remarkably few problems — leading to debate whether the spending was necessary or if the threat was overhyped."
      },
      {
        event: "Y2K arrives with minimal disruption",
        options: [
          "Companies demand refunds on Y2K fixes",
          "IT workers laid off en masse",
          "Debate continues: was spending worth it?",
          "Conspiracy theories claim cover-up"
        ],
        correctIndex: 2,
        explanation: "To this day, experts debate whether Y2K would have been catastrophic without intervention, or if it was history's most expensive overreaction."
      }
    ]
  },
  {
    id: 7,
    title: "The Berlin Wall Falls",
    events: [
      {
        event: "November 9, 1989: East German spokesman mistakenly says borders are open 'immediately'",
        options: [
          "Statement is quickly retracted",
          "Soviet troops move to close borders",
          "Thousands rush to Berlin Wall",
          "West Germany closes its borders"
        ],
        correctIndex: 2,
        explanation: "Günter Schabowski wasn't briefed properly — when asked when the new travel rules started, he guessed 'immediately.' Thousands of East Germans rushed to the Wall."
      },
      {
        event: "Thousands of East Germans gather at the Berlin Wall",
        options: [
          "Guards open fire on the crowd",
          "Soviet tanks arrive to disperse crowd",
          "Overwhelmed guards open the gates",
          "Crowd retreats after warnings"
        ],
        correctIndex: 2,
        explanation: "Border guards, with no orders and facing overwhelming crowds, simply opened the gates — people began climbing and chipping away at the Wall."
      },
      {
        event: "Berlin Wall opens, people begin tearing it down",
        options: [
          "Soviet Union threatens military action",
          "East and West Germany reunify",
          "Wall is rebuilt within weeks",
          "Cold War tensions escalate"
        ],
        correctIndex: 1,
        explanation: "The fall of the Wall accelerated German reunification — less than a year later, on October 3, 1990, Germany was officially reunited as one nation."
      }
    ]
  },
  {
    id: 8,
    title: "The Invention of Post-It Notes",
    events: [
      {
        event: "1968: 3M scientist Spencer Silver creates a weak adhesive that 'failed'",
        options: [
          "3M fires Silver for wasting resources",
          "Adhesive is used for tape",
          "Silver spends years finding a use for it",
          "Patent is sold to competitor"
        ],
        correctIndex: 2,
        explanation: "Silver's 'failed' adhesive didn't stick permanently — but he believed it had potential and spent years presenting it to colleagues looking for applications."
      },
      {
        event: "Silver searches for years to find use for weak adhesive",
        options: [
          "Colleague uses it for bookmarks",
          "It becomes surgical tape",
          "3M cancels the project",
          "Silver leaves 3M in frustration"
        ],
        correctIndex: 0,
        explanation: "In 1974, colleague Art Fry had an idea — he needed bookmarks that wouldn't fall out of his hymn book. Silver's adhesive was perfect."
      },
      {
        event: "Art Fry creates sticky bookmarks using Silver's adhesive",
        options: [
          "Product launches to immediate success",
          "Initial market tests fail completely",
          "Patent lawsuit delays launch",
          "Competitor releases similar product first"
        ],
        correctIndex: 1,
        explanation: "Early market tests of 'Press 'n Peel' failed because people didn't understand sticky notes. But free samples created addicts — Post-it Notes launched in 1980."
      }
    ]
  },
  {
    id: 9,
    title: "The Facebook-Instagram Story",
    events: [
      {
        event: "2010: Kevin Systrom and Mike Krieger launch Instagram with just 13 employees",
        options: [
          "App fails to gain traction",
          "Twitter immediately acquires it",
          "Reaches 1 million users in 2 months",
          "Apple removes it from App Store"
        ],
        correctIndex: 2,
        explanation: "Instagram's simple photo-sharing concept exploded — it reached 1 million users in just two months, making it one of the fastest-growing apps ever."
      },
      {
        event: "Instagram reaches 1 million users in two months",
        options: [
          "Google offers to acquire Instagram",
          "Twitter and Facebook compete to buy it",
          "Instagram launches paid tier",
          "User growth suddenly plateaus"
        ],
        correctIndex: 1,
        explanation: "With 30 million users by 2012, both Twitter and Facebook competed to acquire Instagram. Twitter's offer was reportedly around $500 million."
      },
      {
        event: "Twitter and Facebook compete to acquire Instagram",
        options: [
          "Instagram stays independent",
          "Twitter wins with $600M offer",
          "Facebook buys Instagram for $1 billion",
          "Bidding war reaches $2 billion"
        ],
        correctIndex: 2,
        explanation: "Facebook won with a $1 billion offer in 2012 — widely mocked as overpriced at the time. Instagram is now estimated to be worth over $100 billion."
      }
    ]
  },
  {
    id: 10,
    title: "The Titanic's Warning Signs",
    events: [
      {
        event: "April 14, 1912: Titanic receives iceberg warnings but doesn't slow down",
        options: [
          "Captain orders immediate course change",
          "Wireless operators ignore warnings",
          "Passengers are moved to lower decks",
          "Ship increases speed to clear ice field"
        ],
        correctIndex: 3,
        explanation: "Despite six iceberg warnings, Titanic maintained high speed — some historians believe the pressure to arrive on schedule in New York played a role."
      },
      {
        event: "Titanic maintains speed despite iceberg warnings",
        options: [
          "Ship successfully avoids all icebergs",
          "Lookout spots iceberg too late to avoid",
          "Captain orders emergency stop",
          "Iceberg strikes stern of ship"
        ],
        correctIndex: 1,
        explanation: "At 11:40 PM, lookout Frederick Fleet spotted the iceberg dead ahead. With only 37 seconds warning, the ship couldn't turn fast enough."
      },
      {
        event: "Titanic strikes iceberg, begins taking on water",
        options: [
          "Watertight compartments contain flooding",
          "Ship sinks in under an hour",
          "Only enough lifeboats for half the passengers",
          "Nearby ships arrive in time"
        ],
        correctIndex: 2,
        explanation: "Titanic carried only 20 lifeboats — enough for 1,178 people, but there were 2,224 aboard. Over 1,500 people died in the freezing Atlantic waters."
      }
    ]
  },
  {
    id: 11,
    title: "The Discovery of Viagra",
    events: [
      {
        event: "1989: Pfizer tests compound UK-92480 as a heart medication",
        options: [
          "Drug successfully treats heart disease",
          "Clinical trials are abandoned",
          "Patients report unusual side effect",
          "FDA rejects the drug"
        ],
        correctIndex: 2,
        explanation: "The heart medication trials showed disappointing results, but male patients reported an unexpected side effect — which got researchers' attention."
      },
      {
        event: "Heart medication trial fails, but reveals unusual side effect",
        options: [
          "Pfizer abandons the compound",
          "Drug is reformulated for different use",
          "Competitors steal the research",
          "Scientists ignore the side effect"
        ],
        correctIndex: 1,
        explanation: "Pfizer pivoted entirely, reformulating the drug to treat erectile dysfunction instead of heart conditions — turning a failure into a goldmine."
      },
      {
        event: "Pfizer pivots to develop erectile dysfunction treatment",
        options: [
          "Drug fails FDA approval process",
          "Launch faces religious opposition",
          "Viagra becomes fastest-selling drug ever",
          "Only sold through hospitals"
        ],
        correctIndex: 2,
        explanation: "Approved in 1998, Viagra became the fastest-selling drug in history, generating over $2 billion in its first year — all from a 'failed' heart medication."
      }
    ]
  },
  {
    id: 12,
    title: "The Sony Walkman Revolution",
    events: [
      {
        event: "1979: Sony engineers create portable cassette player that can't record",
        options: [
          "Executives demand recording capability",
          "Product is shelved as failure",
          "Sony's founder insists on releasing it",
          "Engineers add recording feature"
        ],
        correctIndex: 2,
        explanation: "Sony chairman Akio Morita loved the prototype for personal use and overruled skeptical executives, ordering it into production despite concerns."
      },
      {
        event: "Sony releases the Walkman despite internal skepticism",
        options: [
          "Sales disappoint in first month",
          "Becomes instant cultural phenomenon",
          "Critics dismiss it as novelty",
          "Only sells well in Japan"
        ],
        correctIndex: 0,
        explanation: "Initial sales were disappointing — the first month only sold 3,000 units. Sony employees were sent to walk around Tokyo wearing Walkmans to generate buzz."
      },
      {
        event: "Walkman starts slow, Sony employees promote it publicly",
        options: [
          "Product is quietly discontinued",
          "Sales explode as word spreads",
          "Sony sells the technology to Apple",
          "Cassette industry fights the product"
        ],
        correctIndex: 1,
        explanation: "Word-of-mouth exploded — Sony sold over 200 million Walkmans, fundamentally changing how people listen to music and paving the way for iPods."
      }
    ]
  },
  {
    id: 13,
    title: "The Chernobyl Disaster",
    events: [
      {
        event: "April 26, 1986: Operators disable safety systems for reactor test at Chernobyl",
        options: [
          "Test completes successfully",
          "Reactor overheats and explodes",
          "Safety systems automatically restart",
          "Operators abort the test in time"
        ],
        correctIndex: 1,
        explanation: "With safety systems disabled during a test, the reactor became unstable. At 1:23 AM, a sudden power surge caused a steam explosion that blew off the reactor roof."
      },
      {
        event: "Chernobyl reactor explodes, releasing radioactive material",
        options: [
          "Soviet Union immediately evacuates area",
          "Officials deny any explosion occurred",
          "International aid arrives within hours",
          "Fire is extinguished same day"
        ],
        correctIndex: 1,
        explanation: "Soviet officials initially denied the disaster. The nearby city of Pripyat wasn't evacuated for 36 hours, and the world only learned when Swedish sensors detected radiation."
      },
      {
        event: "Soviet Union covers up disaster; Sweden detects radiation",
        options: [
          "USSR admits disaster same day",
          "Cover-up continues for months",
          "International pressure forces admission",
          "Sweden keeps detection secret"
        ],
        correctIndex: 2,
        explanation: "Facing international evidence, the Soviet Union finally admitted to the disaster on April 28 — beginning a transparency shift that historians link to the USSR's eventual collapse."
      }
    ]
  },
  {
    id: 14,
    title: "The Birth of Wikipedia",
    events: [
      {
        event: "2000: Jimmy Wales launches Nupedia, an expert-written online encyclopedia",
        options: [
          "Nupedia becomes instant success",
          "Experts write thousands of articles",
          "Only 21 articles completed in first year",
          "Britannica buys Nupedia"
        ],
        correctIndex: 2,
        explanation: "Nupedia's expert-only model was painfully slow — after a year and $250,000 spent, only 21 articles had completed the seven-stage review process."
      },
      {
        event: "Nupedia's expert-only model proves too slow",
        options: [
          "Wales shuts down the project",
          "Wales creates open wiki as feeder",
          "New investors save Nupedia",
          "Experts agree to faster reviews"
        ],
        correctIndex: 1,
        explanation: "In January 2001, Wales and Larry Sanger launched Wikipedia as a 'feeder' project for Nupedia — anyone could write articles that would later be reviewed."
      },
      {
        event: "Wikipedia launches as experimental side project",
        options: [
          "No one uses the wiki format",
          "Wikipedia surpasses Nupedia in days",
          "Experts boycott Wikipedia",
          "Wikipedia remains small experiment"
        ],
        correctIndex: 1,
        explanation: "Wikipedia exploded — it had more articles than Nupedia within weeks. By end of 2001, it had 20,000 articles. Nupedia quietly shut down in 2003."
      }
    ]
  },
  {
    id: 15,
    title: "The Dot-Com Bubble Burst",
    events: [
      {
        event: "1999: Pets.com spends $1.2 million on Super Bowl ad before turning profit",
        options: [
          "Sales skyrocket after Super Bowl",
          "Company becomes profitable overnight",
          "Investors pour in more money",
          "Stock price drops immediately"
        ],
        correctIndex: 2,
        explanation: "Despite burning cash on marketing without profits, investors kept funding Pets.com and similar startups — this was the height of dot-com mania."
      },
      {
        event: "Investors continue funding unprofitable dot-com startups",
        options: [
          "All startups eventually become profitable",
          "NASDAQ reaches all-time high March 2000",
          "Warren Buffett invests heavily in tech",
          "Banks refuse to lend to tech companies"
        ],
        correctIndex: 1,
        explanation: "The NASDAQ Composite hit an all-time high of 5,048.62 on March 10, 2000 — then began a catastrophic collapse that would erase $5 trillion in value."
      },
      {
        event: "NASDAQ peaks in March 2000, then begins collapse",
        options: [
          "Recovery happens within months",
          "Only small companies fail",
          "Pets.com shuts down 9 months after IPO",
          "Tech sector grows even faster"
        ],
        correctIndex: 2,
        explanation: "Pets.com went from IPO to liquidation in 268 days, becoming a symbol of the dot-com excess. Its sock puppet mascot was sold to help pay creditors."
      }
    ]
  },
  {
    id: 16,
    title: "The Moon Landing Conspiracy Origins",
    events: [
      {
        event: "July 20, 1969: Apollo 11 astronauts walk on the Moon, watched by 600 million",
        options: [
          "USSR immediately concedes space race",
          "Some question authenticity immediately",
          "Universal celebration worldwide",
          "NASA releases all footage publicly"
        ],
        correctIndex: 2,
        explanation: "The Moon landing was celebrated globally as humanity's greatest achievement — even the Soviet Union congratulated the US, effectively conceding the Space Race."
      },
      {
        event: "World celebrates Moon landing as humanity's achievement",
        options: [
          "Conspiracy theories emerge immediately",
          "All nations start space programs",
          "NASA budget doubles overnight",
          "Apollo program continues unchanged"
        ],
        correctIndex: 3,
        explanation: "NASA continued the Apollo program, landing five more crews on the Moon. But public interest waned, and Apollo 17 in 1972 became the last lunar mission."
      },
      {
        event: "Public interest fades, Apollo program ends in 1972",
        options: [
          "Moon base completed by 1980",
          "1976 book claims landing was faked",
          "NASA immediately plans Mars mission",
          "Other countries land on Moon"
        ],
        correctIndex: 1,
        explanation: "In 1976, Bill Kaysing published 'We Never Went to the Moon' — launching conspiracy theories that persist today despite overwhelming evidence."
      }
    ]
  },
  {
    id: 17,
    title: "The iPhone Announcement",
    events: [
      {
        event: "January 9, 2007: Steve Jobs announces iPhone, combines phone, iPod, and internet",
        options: [
          "Audience reaction is lukewarm",
          "Microsoft CEO mocks the price",
          "Nokia announces similar product",
          "Apple stock crashes on concerns"
        ],
        correctIndex: 1,
        explanation: "Microsoft CEO Steve Ballmer laughed at the iPhone: '$500? Fully subsidized? That is the most expensive phone in the world and it doesn't even have a keyboard.'"
      },
      {
        event: "Microsoft CEO dismisses iPhone as overpriced",
        options: [
          "iPhone fails to meet sales targets",
          "Microsoft quickly releases competitor",
          "iPhone sells 1 million in 74 days",
          "Apple lowers price immediately"
        ],
        correctIndex: 2,
        explanation: "The iPhone sold over 1 million units in its first 74 days — exceeding expectations and beginning the smartphone revolution."
      },
      {
        event: "iPhone succeeds, smartphone revolution begins",
        options: [
          "Nokia remains dominant for years",
          "BlackBerry adapts and survives",
          "Microsoft Windows Phone thrives",
          "Nokia and BlackBerry collapse"
        ],
        correctIndex: 3,
        explanation: "Nokia went from 49% smartphone market share to selling its phone business to Microsoft in 2014. BlackBerry's market share dropped from 20% to near zero."
      }
    ]
  },
  {
    id: 18,
    title: "The Panama Canal Saga",
    events: [
      {
        event: "1881: France begins construction of Panama Canal, led by Ferdinand de Lesseps",
        options: [
          "Canal completed in 5 years",
          "Project runs smoothly as planned",
          "Disease kills 22,000 workers",
          "Colombia stops construction"
        ],
        correctIndex: 2,
        explanation: "Tropical diseases, especially malaria and yellow fever, devastated the workforce. Over 22,000 workers died before France abandoned the project in 1889."
      },
      {
        event: "France abandons Panama Canal after 22,000 deaths",
        options: [
          "Project is abandoned permanently",
          "Britain takes over construction",
          "US buys rights and restarts project",
          "Panama completes canal alone"
        ],
        correctIndex: 2,
        explanation: "In 1904, the US bought the French rights for $40 million and restarted the project — but first had to solve the disease problem that had defeated the French."
      },
      {
        event: "US takes over Panama Canal project in 1904",
        options: [
          "Deaths continue at same rate",
          "Doctor eliminates mosquito breeding grounds",
          "US abandons project like France",
          "Workers are replaced with machines"
        ],
        correctIndex: 1,
        explanation: "Dr. William Gorgas's mosquito eradication campaign dramatically reduced disease deaths. The canal was completed in 1914, transforming global shipping forever."
      }
    ]
  },
  {
    id: 19,
    title: "The Discovery of DNA Structure",
    events: [
      {
        event: "1952: Rosalind Franklin creates X-ray image showing DNA's helical structure",
        options: [
          "Franklin publishes discovery immediately",
          "Image is shown to Watson without consent",
          "Franklin wins Nobel Prize",
          "Image is proven incorrect"
        ],
        correctIndex: 1,
        explanation: "Franklin's 'Photo 51' was shown to James Watson by Maurice Wilkins without her permission — it was the key evidence for DNA's double helix structure."
      },
      {
        event: "Watson sees Franklin's photo without her permission",
        options: [
          "Watson credits Franklin immediately",
          "Franklin sues for stolen research",
          "Watson and Crick build DNA model",
          "Research is published jointly"
        ],
        correctIndex: 2,
        explanation: "Using insights from Franklin's image, Watson and Crick built their famous double helix model of DNA — published in Nature in April 1953."
      },
      {
        event: "Watson and Crick publish DNA structure based on Franklin's work",
        options: [
          "Franklin shares Nobel Prize with them",
          "Franklin dies before Nobel awarded",
          "Franklin's contribution is acknowledged",
          "Watson and Crick give full credit"
        ],
        correctIndex: 1,
        explanation: "Franklin died of ovarian cancer in 1958, aged 37. The 1962 Nobel Prize went to Watson, Crick, and Wilkins. Nobel rules prohibited posthumous awards."
      }
    ]
  },
  {
    id: 20,
    title: "The Rise of Tesla Motors",
    events: [
      {
        event: "2008: Tesla Roadster launches as first highway-legal electric sports car",
        options: [
          "Sells out immediately",
          "Major automakers copy the design",
          "Company nearly goes bankrupt",
          "Roadster wins Car of the Year"
        ],
        correctIndex: 2,
        explanation: "Despite the Roadster's innovation, Tesla nearly died in the 2008 financial crisis — Elon Musk put in his last $35 million to keep the company alive."
      },
      {
        event: "Tesla survives 2008 crisis with Musk's personal investment",
        options: [
          "Company goes public immediately",
          "Major automaker acquires Tesla",
          "Tesla receives federal loan of $465 million",
          "Production stops for two years"
        ],
        correctIndex: 2,
        explanation: "In 2010, Tesla received a $465 million federal loan to develop the Model S — a loan they paid back 9 years early in 2013."
      },
      {
        event: "Tesla receives $465 million government loan",
        options: [
          "Loan is criticized as waste",
          "Model S launches to critical acclaim",
          "Other automakers receive similar loans",
          "Tesla uses money for factory"
        ],
        correctIndex: 1,
        explanation: "The Model S launched in 2012 to critical acclaim, winning Motor Trend's Car of the Year — the first electric car to win and first unanimous vote in the award's history."
      }
    ]
  },
  {
    id: 21,
    title: "The Tulip Mania Crash",
    events: [
      {
        event: "1636: Dutch tulip bulb prices rise to extraordinary levels in speculation frenzy",
        options: [
          "Government regulates tulip trade",
          "Single bulb sells for 10x annual salary",
          "Farmers increase tulip production",
          "Other countries ban Dutch tulips"
        ],
        correctIndex: 1,
        explanation: "At the peak, a single Semper Augustus bulb sold for 10,000 guilders — more than 10 times a skilled craftsman's annual income. Houses were traded for tulips."
      },
      {
        event: "Tulip prices reach absurd heights, homes traded for bulbs",
        options: [
          "Prices continue rising indefinitely",
          "Government intervention stabilizes market",
          "Buyers suddenly refuse to pay high prices",
          "New tulip varieties cause gradual decline"
        ],
        correctIndex: 2,
        explanation: "In February 1637, buyers suddenly stopped showing up to auctions. Within days, tulip prices crashed to a fraction of their peak values."
      },
      {
        event: "Tulip market collapses in February 1637",
        options: [
          "Dutch economy collapses completely",
          "Event becomes warning about speculation",
          "Government compensates all traders",
          "Tulip prices recover within months"
        ],
        correctIndex: 1,
        explanation: "Tulip Mania became history's most famous example of a speculative bubble — still cited today when discussing Bitcoin, meme stocks, and market manias."
      }
    ]
  },
  {
    id: 22,
    title: "The Invention of the World Wide Web",
    events: [
      {
        event: "1989: Tim Berners-Lee proposes 'information management' system at CERN",
        options: [
          "CERN immediately funds the project",
          "Proposal is rejected and forgotten",
          "Boss writes 'Vague but exciting' on proposal",
          "Other scientists steal the idea"
        ],
        correctIndex: 2,
        explanation: "Berners-Lee's boss Mike Sendall wrote 'Vague, but exciting...' on the proposal. This lukewarm approval led to the creation of the World Wide Web."
      },
      {
        event: "Berners-Lee gets approval to develop the Web",
        options: [
          "CERN patents the technology",
          "First website goes live in 1991",
          "Project is sold to Microsoft",
          "Only scientists can access the Web"
        ],
        correctIndex: 1,
        explanation: "The first website went live on August 6, 1991 at CERN. It explained what the World Wide Web was and how to use a browser."
      },
      {
        event: "First website goes live at CERN in 1991",
        options: [
          "CERN charges licensing fees for Web",
          "Web remains academic tool only",
          "CERN releases Web technology for free",
          "Microsoft buys the technology"
        ],
        correctIndex: 2,
        explanation: "In 1993, CERN made the web technology available royalty-free to everyone. This decision enabled the explosive growth that transformed modern life."
      }
    ]
  },
  {
    id: 23,
    title: "The Wright Brothers' First Flight",
    events: [
      {
        event: "December 17, 1903: Wright Brothers achieve first powered flight at Kitty Hawk",
        options: [
          "News spreads worldwide immediately",
          "Flight is witnessed by thousands",
          "Only 5 local people witness the flight",
          "US government funds their work immediately"
        ],
        correctIndex: 2,
        explanation: "Only 5 local lifesaving station crew members witnessed history's first powered flight. The 12-second, 120-foot flight happened in obscurity."
      },
      {
        event: "Wright Brothers' flight witnessed by only 5 people",
        options: [
          "Major newspapers cover story next day",
          "Story is ignored or misreported",
          "Government immediately contacts brothers",
          "Investors rush to fund them"
        ],
        correctIndex: 1,
        explanation: "Most newspapers ignored the story or got it completely wrong. The Dayton Daily News didn't even cover their hometown heroes' achievement."
      },
      {
        event: "Media ignores or misreports the first flight",
        options: [
          "Brothers stop flying entirely",
          "Public doesn't believe flight is possible until 1908",
          "Government forces media to cover it",
          "Brothers sell their plane to Europe"
        ],
        correctIndex: 1,
        explanation: "The Wrights flew in relative obscurity for years. Only in 1908, after public demonstrations, did the world finally believe humans could fly."
      }
    ]
  },
  {
    id: 24,
    title: "The Fall of Kodak",
    events: [
      {
        event: "1975: Kodak engineer Steve Sasson invents the first digital camera",
        options: [
          "Kodak immediately commercializes it",
          "Executives tell him to hide the invention",
          "Patent is sold to Japanese competitor",
          "Invention is leaked to press"
        ],
        correctIndex: 1,
        explanation: "Kodak executives told Sasson to keep the digital camera secret — they feared it would cannibalize their hugely profitable film business."
      },
      {
        event: "Kodak buries the digital camera to protect film sales",
        options: [
          "Strategy works, film remains dominant",
          "Competitors develop digital cameras",
          "Kodak sells digital camera rights",
          "Engineer leaks technology anyway"
        ],
        correctIndex: 1,
        explanation: "While Kodak protected film, Japanese companies like Sony developed digital photography. By the time Kodak entered digital, they were far behind."
      },
      {
        event: "Competitors dominate digital photography while Kodak clings to film",
        options: [
          "Kodak successfully pivots to digital",
          "Film makes unexpected comeback",
          "Kodak files for bankruptcy in 2012",
          "Government saves Kodak with bailout"
        ],
        correctIndex: 2,
        explanation: "Once worth $28 billion, Kodak filed for bankruptcy in 2012. The company that invented digital photography was killed by digital photography."
      }
    ]
  },
  {
    id: 25,
    title: "The Cuban Missile Crisis",
    events: [
      {
        event: "October 1962: US discovers Soviet nuclear missiles in Cuba",
        options: [
          "US immediately attacks Cuba",
          "Kennedy announces discovery on TV",
          "US secretly negotiates with Soviets",
          "Military coup removes Kennedy"
        ],
        correctIndex: 1,
        explanation: "On October 22, 1962, JFK went on national television to reveal the missiles and announce a naval 'quarantine' of Cuba — bringing the world to the brink of nuclear war."
      },
      {
        event: "Kennedy announces naval quarantine of Cuba",
        options: [
          "Soviet ships turn back immediately",
          "Soviet ships challenge the blockade",
          "Nuclear war begins within hours",
          "Castro surrenders immediately"
        ],
        correctIndex: 1,
        explanation: "Soviet ships initially headed toward the quarantine line. The world held its breath as Secretary of State Dean Rusk said: 'We're eyeball to eyeball.'"
      },
      {
        event: "Soviet ships approach US naval quarantine line",
        options: [
          "Ships break through quarantine",
          "US fires warning shots",
          "Soviet ships stop, then turn back",
          "Nuclear submarines surface"
        ],
        correctIndex: 2,
        explanation: "The Soviet ships stopped, then turned back. Rusk said: 'The other fellow just blinked.' Secret negotiations led to missile removal in exchange for US promises."
      }
    ]
  },
  {
    id: 26,
    title: "The Accidental Discovery of Microwave Ovens",
    events: [
      {
        event: "1945: Engineer Percy Spencer stands near radar magnetron, chocolate bar melts",
        options: [
          "Spencer files safety complaint",
          "Spencer experiments with popcorn kernels",
          "Discovery is ignored as anomaly",
          "Radar development is halted"
        ],
        correctIndex: 1,
        explanation: "Instead of ignoring the melted chocolate, curious Spencer put popcorn kernels near the magnetron — they popped. He then tried an egg, which exploded."
      },
      {
        event: "Spencer successfully pops popcorn with radar waves",
        options: [
          "Military classifies the discovery",
          "Raytheon develops commercial microwave",
          "Discovery is sold to food industry",
          "Spencer patents it personally"
        ],
        correctIndex: 1,
        explanation: "Raytheon, Spencer's employer, filed for the patent and developed the first commercial microwave oven — the 'Radarange' weighed 750 pounds and cost $5,000."
      },
      {
        event: "First commercial microwave weighs 750 pounds, costs $5,000",
        options: [
          "Only restaurants can afford them",
          "Home versions available immediately",
          "Microwave technology abandoned",
          "Countertop version debuts in 1967"
        ],
        correctIndex: 3,
        explanation: "The first countertop microwave, priced at $495, launched in 1967. Today over 90% of American homes have microwaves — from an accidental melted chocolate bar."
      }
    ]
  },
  {
    id: 27,
    title: "The MySpace Rise and Fall",
    events: [
      {
        event: "2005: MySpace becomes the most visited website in the United States",
        options: [
          "Google immediately acquires MySpace",
          "News Corporation buys MySpace for $580 million",
          "MySpace goes public with $10B valuation",
          "Facebook offers to merge"
        ],
        correctIndex: 1,
        explanation: "Rupert Murdoch's News Corporation bought MySpace for $580 million in 2005, beating out Viacom — at the time, it seemed like a brilliant acquisition."
      },
      {
        event: "News Corporation acquires MySpace for $580 million",
        options: [
          "MySpace continues to dominate",
          "New owners improve the platform",
          "Platform becomes cluttered with ads",
          "Facebook immediately shuts down"
        ],
        correctIndex: 2,
        explanation: "Under News Corp, MySpace became increasingly cluttered with ads and customization features that slowed pages. Meanwhile, Facebook offered a cleaner experience."
      },
      {
        event: "MySpace becomes cluttered; Facebook offers cleaner alternative",
        options: [
          "MySpace successfully redesigns",
          "Facebook surpasses MySpace in 2008",
          "Both platforms merge",
          "MySpace pivots to gaming"
        ],
        correctIndex: 1,
        explanation: "Facebook overtook MySpace in 2008. In 2011, News Corp sold MySpace for just $35 million — a 94% loss on one of tech's most famous failed acquisitions."
      }
    ]
  },
  {
    id: 28,
    title: "The Printing Press Revolution",
    events: [
      {
        event: "1440: Johannes Gutenberg invents the movable type printing press",
        options: [
          "Church immediately supports the invention",
          "Hand scribes welcome the technology",
          "First major work printed is the Bible",
          "Gutenberg becomes wealthy"
        ],
        correctIndex: 2,
        explanation: "Gutenberg printed 180 copies of the Bible around 1455 — each page had 42 lines, earning it the name 'Gutenberg Bible.' Only 49 copies survive today."
      },
      {
        event: "Gutenberg prints 180 copies of the Bible",
        options: [
          "Gutenberg profits enormously",
          "Bibles are immediately burned as heresy",
          "Investor lawsuit bankrupts Gutenberg",
          "Church orders mass Bible production"
        ],
        correctIndex: 2,
        explanation: "Gutenberg's investor Johann Fust sued him for repayment, won, and seized the printing equipment. Gutenberg died in relative obscurity and poverty in 1468."
      },
      {
        event: "Gutenberg loses printing business to investors",
        options: [
          "Printing technology dies with him",
          "Printing spreads across Europe rapidly",
          "Church bans printing presses",
          "Only religious texts are printed"
        ],
        correctIndex: 1,
        explanation: "Despite Gutenberg's personal failure, printing spread rapidly. By 1500, over 20 million books had been printed in Europe — fueling the Renaissance and Reformation."
      }
    ]
  },
  {
    id: 29,
    title: "The Discovery of America (Columbus)",
    events: [
      {
        event: "1492: Columbus lands in the Bahamas, believing he's reached Asia",
        options: [
          "Columbus immediately realizes his mistake",
          "Native peoples are called 'Indians'",
          "Spain recalls Columbus immediately",
          "Columbus accurately maps the Americas"
        ],
        correctIndex: 1,
        explanation: "Believing he had reached the East Indies, Columbus called the native Taíno people 'Indians' — a misnomer that persisted for centuries."
      },
      {
        event: "Columbus calls native peoples 'Indians,' thinks he's in Asia",
        options: [
          "Columbus eventually realizes the truth",
          "Columbus dies believing he reached Asia",
          "Maps are corrected immediately",
          "Native peoples correct Columbus"
        ],
        correctIndex: 1,
        explanation: "Columbus made four voyages to the Americas and died in 1506 still convinced he had reached Asia. He never knew he had found continents unknown to Europeans."
      },
      {
        event: "Columbus dies in 1506, never knowing he found new continents",
        options: [
          "Americas named after Columbus",
          "Continents named after Amerigo Vespucci",
          "Continents called 'West Indies'",
          "Native name 'Turtle Island' adopted"
        ],
        correctIndex: 1,
        explanation: "German cartographer Martin Waldseemüller named the continents after Amerigo Vespucci, who correctly identified them as a 'New World' — not Columbus who discovered them."
      }
    ]
  },
  {
    id: 30,
    title: "The Bitcoin Pizza Transaction",
    events: [
      {
        event: "May 22, 2010: Laszlo Hanyecz offers 10,000 Bitcoin for two pizzas",
        options: [
          "No one accepts the offer",
          "Someone buys him $25 worth of pizza",
          "Bitcoin community mocks the transaction",
          "Transaction fails technically"
        ],
        correctIndex: 1,
        explanation: "A user named 'jercos' accepted the offer, ordering two Papa John's pizzas for Hanyecz. It was the first real-world Bitcoin transaction — 10,000 BTC for $25 in pizza."
      },
      {
        event: "First Bitcoin purchase: 10,000 BTC for two pizzas worth $25",
        options: [
          "Transaction is reversed as fraud",
          "Bitcoin immediately gains mainstream attention",
          "May 22 becomes 'Bitcoin Pizza Day'",
          "Hanyecz regrets decision immediately"
        ],
        correctIndex: 2,
        explanation: "May 22 is now celebrated as 'Bitcoin Pizza Day' in the crypto community — commemorating the first real-world Bitcoin transaction."
      },
      {
        event: "'Bitcoin Pizza Day' commemorates first real-world BTC transaction",
        options: [
          "Those 10,000 BTC remain worth $25",
          "Hanyecz becomes Bitcoin billionaire anyway",
          "Pizza purchase worth $690 million at BTC peak",
          "Papa John's buys back the coins"
        ],
        correctIndex: 2,
        explanation: "At Bitcoin's peak of $69,000 in 2021, those two pizzas were worth approximately $690 million — making them the most expensive pizzas in human history."
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
