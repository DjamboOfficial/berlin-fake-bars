const mongoose = require("mongoose");
const Bar = require("../models/bar"); // Update the path based on your project structure

require("../db");

const seedDatabase = async () => {
  try {
    await Bar.deleteMany();
    const insertedBars = await Bar.insertMany(bars);
    console.log("Bars inserted! Cheers!");
  } catch (error) {
    console.error("Error in seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
};

const bars = [
  {
    bar_id: 10001,
    name: "Bohemian Bliss Bar",
    twist:
      "Step into a hyperrealistic realm at our bohemian-themed bar, where mismatched furniture, live acoustic melodies, and twinkling fairy lights create an intimate haven. Crafted for laptop and smartphone screens, this scene exudes the cozy charm of a detailed photograph, capturing the essence of a soulful, musical soirée.",
    location: "Kreuzberg",
    capacity: 80,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10002,
    name: "Quantum Quaffery",
    twist:
      "Embark on a visionary odyssey at QuantumQuaff, our futuristic-themed bar. Mixologists, masters of molecular gastronomy, sculpt avant-garde cocktails. The bar's name, displayed with futuristic flair, mirrors the establishment's design—where innovation melds seamlessly with mixology, offering a tantalizing journey into the future of avant-garde libations.",
    location: "Mitte",
    capacity: 50,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10003,
    name: "Retro Rocket Pub",
    twist:
      "Take a cosmic voyage at RocketRetro, our 1950s space exploration-themed bar. Dive into nostalgia amid retro arcade games and vintage space memorabilia. The bar's name, displayed in a style evocative of the era, encapsulates the charm of yesteryears. Immerse yourself in an atmosphere where mid-century flair meets interstellar fascination.",
    location: "Prenzlauer Berg",
    capacity: 60,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10004,
    name: "Enchanted Elixir Emporium",
    twist:
      "Step into enchantment at Enchanted Elixir Emporium, our magical fantasy bar. Elixirs and potions, served in whimsical containers, weave a spellbinding experience. Staff, donned as wizards, add to the mystical aura. The bar's name, displayed in an enchanting style, mirrors the mysterious atmosphere—a haven where fantasy and libation seamlessly intertwine.",
    location: "Friedrichshain",
    capacity: 70,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10005,
    name: "Neon Nectar Nook",
    twist:
      "Neon-lit bar specializing in glowing cocktails, UV face paint nights, and a playlist that transports you to the '80s.",
    location: "Charlottenburg",
    capacity: 45,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10006,
    name: "Safari Sips",
    twist:
      "Embark on a wild escapade at SafariSips, our jungle-themed bar. Lush greenery and animal print decor create an exotic haven. Sip on cocktails served in coconut shells, immersing yourself in the untamed atmosphere. The bar's name, displayed with a touch of wilderness, mirrors the vibrant spirit of this lush and lively retreat.",
    location: "Neukölln",
    capacity: 55,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10007,
    name: "Steampunk Speakeasy",
    twist:
      "Fusion of Victorian aesthetics and modern mixology, featuring gears, cogs, and bartenders in steampunk attire.",
    location: "Wedding",
    capacity: 65,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10008,
    name: "Aquatic Ale Annex",
    twist:
      "Underwater-themed bar with mermaid bartenders, bioluminescent cocktails, and a serene ambiance.",
    location: "Moabit",
    capacity: 75,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10009,
    name: "Pixel Pint Parlour",
    twist:
      "Nostalgic dive into the world of retro video games with pixel art, joystick-controlled tables, and gaming-themed drinks.",
    location: "Schöneberg",
    capacity: 40,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10010,
    name: "Gastronomic Galaxy Grotto",
    twist:
      "Celestial-inspired bar with galaxy-themed cocktails, cosmic projections, and a menu that takes you on a journey through the cosmos.",
    location: "Tempelhof",
    capacity: 85,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10011,
    name: "Lunar Lounge Libation",
    twist:
      "Moonlit rooftop bar with lunar-themed decor, glow-in-the-dark cocktails, and celestial views of the city.",
    location: "Kreuzberg",
    capacity: 80,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10012,
    name: "Carnival Carousel Club",
    twist:
      "Whimsical carnival-themed bar featuring a rotating carousel, cotton candy cocktails, and a lively, festive atmosphere.",
    location: "Mitte",
    capacity: 50,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10013,
    name: "Cactus Cantina Corner",
    twist:
      "Desert-inspired bar with a southwestern vibe, cactus decor, and tequila-based cocktails served in quirky desert-themed glassware.",
    location: "Prenzlauer Berg",
    capacity: 60,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10014,
    name: "Cosmic Comedy Cabaret",
    twist:
      "Comedy club and bar combo with cosmic-themed stand-up nights, interactive comedy games, and laughter that echoes through the cosmos.",
    location: "Friedrichshain",
    capacity: 70,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10015,
    name: "Bollywood Bazaar Bar",
    twist:
      "Indian-inspired bar with vibrant colors, Bollywood dance nights, and a menu featuring exotic spices and flavors.",
    location: "Charlottenburg",
    capacity: 45,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10016,
    name: "Zen Zephyr Zenith",
    twist:
      "Tranquil rooftop bar with a zen garden, bamboo decor, and a menu focused on calming herbal infusions.",
    location: "Neukölln",
    capacity: 55,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10017,
    name: "Graffiti Grove Pub",
    twist:
      "Street art-themed bar showcasing local graffiti artists, colorful murals, and graffiti-inspired cocktails.",
    location: "Wedding",
    capacity: 65,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10018,
    name: "Funky Feline Fiasco",
    twist:
      "Cat cafe meets bar with feline-themed cocktails, kitty cuddle corners, and quirky cat-centric decor.",
    location: "Moabit",
    capacity: 75,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10019,
    name: "Jazz Jamboree Joint",
    twist:
      "Vintage jazz bar with live jazz bands, retro furnishings, and classic cocktails reminiscent of the Roaring Twenties.",
    location: "Schöneberg",
    capacity: 40,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10020,
    name: "Electric Eden Emporium",
    twist:
      "Garden-inspired bar with bioluminescent flora, botanical cocktails, and an enchanted garden atmosphere.",
    location: "Tempelhof",
    capacity: 85,
    happyHour: false,
    nsfw: true,
  },
  // ... (Previous bars)

  // 21-30
  {
    bar_id: 10021,
    name: "Pirate's Plunder Pub",
    twist:
      "Nautical-themed bar with pirate decor, ship wheel tables, and rum-based cocktails fit for a swashbuckler.",
    location: "Tempelhof",
    capacity: 85,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10022,
    name: "Aloha Aloft Annex",
    twist:
      "Tropical paradise bar with tiki huts, surfboard tables, and Hawaiian-inspired cocktails.",
    location: "Kreuzberg",
    capacity: 80,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10023,
    name: "Wacky Wonderland Whiskey Den",
    twist:
      "Whimsical winter wonderland bar with ice sculptures, toboggan seating, and a selection of warming whiskey drinks.",
    location: "Mitte",
    capacity: 50,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10024,
    name: "Circus Circus Saloon",
    twist:
      "Vintage circus-themed bar with circus tent canopies, clown-inspired cocktails, and a lively carnival atmosphere.",
    location: "Prenzlauer Berg",
    capacity: 60,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10025,
    name: "Floral Fizz Fiesta",
    twist:
      "Embark on a hyperrealistic journey with a captivating botanical bar—vivid blossoms framing an inviting space. Herb-infused cocktails glisten, artfully crafted for a taste adventure. This picturesque scene, designed for laptop and smartphone screens, mirrors a vibrant garden party, resembling a stunningly detailed photograph that brings the experience to life.",
    location: "Friedrichshain",
    capacity: 70,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10026,
    name: "Spyglass Spectacle Spot",
    twist:
      "Adventure-themed bar with spyglass tables, treasure map menus, and a sense of exploration in every sip.",
    location: "Charlottenburg",
    capacity: 45,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10027,
    name: "Café Cognac Corner",
    twist:
      "Parisian-inspired bar with a cozy cafe atmosphere, accordion music, and a selection of fine cognacs.",
    location: "Neukölln",
    capacity: 55,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10028,
    name: "Mystic Masquerade Mansion",
    twist:
      "Masquerade ball-themed bar with elaborate masks, mysterious cocktails, and an air of enchantment.",
    location: "Wedding",
    capacity: 65,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10029,
    name: "Futuristic Fusion Foundry",
    twist:
      "Sci-fi-inspired bar with holographic menus, futuristic cocktails, and a sleek, minimalist aesthetic.",
    location: "Moabit",
    capacity: 75,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10030,
    name: "Gourmet Gondola Grotto",
    twist:
      "Canal-side bar with gondola seating, Italian-inspired cocktails, and a romantic ambiance.",
    location: "Schöneberg",
    capacity: 40,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10031,
    name: "Retro Rollercoaster Rendezvous",
    twist:
      "Nostalgic theme park bar with rollercoaster-shaped tables, carnival games, and cotton candy cocktails.",
    location: "Tempelhof",
    capacity: 85,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10032,
    name: "Mystical Mirror Maze Lounge",
    twist:
      "Enchanting mirror maze bar with illusion cocktails, hidden nooks, and a sense of wonder around every corner.",
    location: "Kreuzberg",
    capacity: 80,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10033,
    name: "Choco Loco Chocolate Factory",
    twist:
      "Willy Wonka-inspired chocolate factory bar with chocolate-infused cocktails, cocoa nib snacks, and golden ticket giveaways.",
    location: "Mitte",
    capacity: 50,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10034,
    name: "Apex Astronaut Alehouse",
    twist:
      "Space station-themed bar with astronaut bartenders, anti-gravity cocktails, and a cosmic DJ spinning intergalactic beats.",
    location: "Prenzlauer Berg",
    capacity: 60,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10035,
    name: "Viking Voyage Vessel",
    twist:
      "Nordic longship bar with Viking-inspired mead, longboat seating, and roaring bonfires for a true Norse experience.",
    location: "Friedrichshain",
    capacity: 70,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10036, // DONE!
    name: "Time Traveler's Tavern",
    twist:
      "Time machine-themed bar with era-specific zones, historical cocktails, and bartenders dressed in period costumes.",
    location: "Charlottenburg",
    capacity: 45,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10037,
    name: "Fire and Ice Inferno Inn",
    twist:
      "Dual-themed bar with a fiery side featuring spicy cocktails and an icy side with chilled concoctions, separated by a magical barrier.",
    location: "Neukölln",
    capacity: 55,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10038,
    name: "Secret Garden Grog Greenhouse",
    twist:
      "Hidden garden bar with botanical-infused grogs, floral decor, and a greenhouse ambiance.",
    location: "Wedding",
    capacity: 65,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10039,
    name: "Rock 'n' Roll Retro Rooftop",
    twist:
      "Retro rooftop bar with vinyl DJ booths, vintage jukeboxes, and a rock 'n' roll playlist that'll transport you to the '50s.",
    location: "Moabit",
    capacity: 75,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10040,
    name: "Mirrorball Madness Mansion",
    twist:
      "Disco-themed bar with mirrored walls, light-up dance floors, and glittering cocktails under the sparkling disco ball.",
    location: "Schöneberg",
    capacity: 40,
    happyHour: true,
    nsfw: false,
  },

  // 41-50
  {
    bar_id: 10041,
    name: "Alice in Wonderland Whimsy Wharf",
    twist:
      "Whimsical Wonderland bar with oversized teacup seating, Mad Hatter mixologists, and 'Drink Me' potion cocktails.",
    location: "Tempelhof",
    capacity: 85,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10042,
    name: "Graffiti Galaxy Garage",
    twist:
      "Urban art-inspired bar in an underground garage setting, featuring graffiti-covered walls, spray paint cocktails, and hip-hop vibes.",
    location: "Kreuzberg",
    capacity: 80,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10043,
    name: "Thunderstruck Thunderstorm Tavern",
    twist:
      "Electrifying bar with simulated thunderstorms, lightning cocktails, and a cozy atmosphere for storm enthusiasts.",
    location: "Mitte",
    capacity: 50,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10044,
    name: "Sushi Sensation Sake Shack",
    twist:
      "Japanese sushi bar with a conveyor belt, sake tastings, and sushi-themed cocktails served in soy sauce dishes.",
    location: "Prenzlauer Berg",
    capacity: 60,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10045,
    name: "Dreamy Disco Dive",
    twist:
      "Dreamy underwater disco bar with bioluminescent sea creatures, dance floor bubbles, and aquatic-themed cocktails.",
    location: "Friedrichshain",
    capacity: 70,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10046,
    name: "Moonlit Movie Magic Theater",
    twist:
      "Open-air cinema bar with classic movie screenings, director's chair seating, and themed cocktails based on iconic films.",
    location: "Charlottenburg",
    capacity: 45,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10047,
    name: "Tropical Treehouse Tiki Terrace",
    twist:
      "Treehouse-style tiki bar nestled in tropical greenery, featuring bamboo furniture, exotic fruit cocktails, and a laid-back island vibe.",
    location: "Neukölln",
    capacity: 55,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10048,
    name: "Jungle Jive Juice Joint",
    twist:
      "Safari adventure bar with jungle sounds, animal-print decor, and adventurous cocktails served in tribal-inspired glassware.",
    location: "Wedding",
    capacity: 65,
    happyHour: true,
    nsfw: false,
  },
  {
    bar_id: 10049,
    name: "Amber Ale Alchemist's Abode",
    twist:
      "Medieval alchemist's bar with bubbling potions, medieval decor, and a selection of craft ales brewed on-site.",
    location: "Moabit",
    capacity: 75,
    happyHour: false,
    nsfw: true,
  },
  {
    bar_id: 10050,
    name: "Funky Futon Fusion Lounge",
    twist:
      "Eclectic lounge with colorful futons, fusion cuisine, and mixologists blending cultural influences into every drink.",
    location: "Schöneberg",
    capacity: 40,
    happyHour: true,
    nsfw: false,
  },
];

// Continue the pattern for the remaining bars

seedDatabase();

/* const berlinCocktails = [
  {
    id: "20001",
    name: "Brandenburg Breeze",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Mix Berliner Kindl beer, gin, and elderflower syrup. Garnish with a lemon twist.",
    thumb: "",
    ingredient1: "Berliner Kindl beer",
    ingredient2: "Gin",
    ingredient3: "Elderflower syrup",
    imageSource: ""
  },
  {
    id: "20002",
    name: "Checkpoint Charlie Cooler",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "Combine vodka, cranberry juice, and club soda over ice. Garnish with a lime wheel.",
    thumb: "",
    ingredient1: "Vodka",
    ingredient2: "Cranberry juice",
    ingredient3: "Club soda",
    imageSource: ""
  },
  {
    id: "20003",
    name: "Spree Sparkler",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Champagne flute",
    instructions: "Mix sparkling water, grapefruit juice, and a splash of grenadine. Garnish with a grapefruit twist.",
    thumb: "",
    ingredient1: "Sparkling water",
    ingredient2: "Grapefruit juice",
    ingredient3: "Grenadine",
    imageSource: ""
  },
  {
    id: "20004",
    name: "Currywurst Crush",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Old Fashioned glass",
    instructions: "Infuse vodka with curry leaves, add tomato juice and a dash of hot sauce. Garnish with a slice of bratwurst.",
    thumb: "",
    ingredient1: "Curry leaf-infused vodka",
    ingredient2: "Tomato juice",
    ingredient3: "Hot sauce",
    imageSource: ""
  },
  {
    id: "20011",
    name: "Berliner Mule",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Copper mug",
    instructions: "Combine Berliner Weisse beer, ginger beer, and vodka. Serve over ice and garnish with a lime wedge.",
    thumb: "",
    ingredient1: "Berliner Weisse beer",
    ingredient2: "Ginger beer",
    ingredient3: "Vodka",
    imageSource: ""
  },
  {
    id: "20012",
    name: "Kreuzberg Kombucha Fizz",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Highball glass",
    instructions: "Mix kombucha, apple juice, and sparkling water. Serve over ice and garnish with apple slices.",
    thumb: "",
    ingredient1: "Kombucha",
    ingredient2: "Apple juice",
    ingredient3: "Sparkling water",
    imageSource: ""
  },
  {
    id: "20013",
    name: "Potsdamer Platz Punch",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions: "Blend rum, pineapple juice, orange juice, and grenadine. Serve in a punch bowl with sliced fruits.",
    thumb: "",
    ingredient1: "Rum",
    ingredient2: "Pineapple juice",
    ingredient3: "Orange juice",
    ingredient4: "Grenadine",
    imageSource: ""
  },
  {
    id: "20014",
    name: "Berlin Wallbanger",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "Shake vodka, orange juice, and Galliano. Strain over ice and garnish with an orange wheel.",
    thumb: "",
    ingredient1: "Vodka",
    ingredient2: "Orange juice",
    ingredient3: "Galliano",
    imageSource: ""
 },
  {
    id: "20021",
    name: "Alexanderplatz Ambrosia",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Martini glass",
    instructions: "Mix gin, elderflower liqueur, and lemon juice. Strain into a chilled martini glass and garnish with a twist of lemon.",
    thumb: "",
    ingredient1: "Gin",
    ingredient2: "Elderflower liqueur",
    ingredient3: "Lemon juice",
    imageSource: ""
  },
  {
    id: "20022",
    name: "Tempelhof Tiki Tonic",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Tiki mug",
    instructions: "Blend rum, coconut cream, and pineapple juice. Serve in a tiki mug over crushed ice and garnish with a pineapple leaf.",
    thumb: "",
    ingredient1: "Rum",
    ingredient2: "Coconut cream",
    ingredient3: "Pineapple juice",
    imageSource: ""
  },
  {
    id: "20023",
    name: "Tiergarten Twist",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Highball glass",
    instructions: "Combine black tea, peach nectar, and a splash of lime juice. Serve over ice and garnish with a peach slice.",
    thumb: "",
    ingredient1: "Black tea",
    ingredient2: "Peach nectar",
    ingredient3: "Lime juice",
    imageSource: ""
  },
  {
    id: "20024",
    name: "Fernsehturm Fizz",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Fizz glass",
    instructions: "Shake gin, raspberry syrup, and lemon juice. Strain into a fizz glass and top with club soda. Garnish with a fresh raspberry.",
    thumb: "",
    ingredient1: "Gin",
    ingredient2: "Raspberry syrup",
    ingredient3: "Lemon juice",
    ingredient4: "Club soda",
    imageSource: ""
 },
  {
    id: "20031",
    name: "Späti Spritz",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Wine glass",
    instructions: "Combine Aperol, prosecco, and soda water over ice. Garnish with an orange slice.",
    thumb: "",
    ingredient1: "Aperol",
    ingredient2: "Prosecco",
    ingredient3: "Soda water",
    imageSource: ""
  },
  {
    id: "20032",
    name: "Mauerpark Mojito",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Muddle mint and sugar, add white rum and lime juice. Top with soda water and crushed ice. Garnish with mint leaves.",
    thumb: "",
    ingredient1: "White rum",
    ingredient2: "Mint",
    ingredient3: "Sugar",
    ingredient4: "Lime juice",
    ingredient5: "Soda water",
    imageSource: ""
  },
  {
    id: "20033",
    name: "Wannsee Watermelon Whirl",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Collins glass",
    instructions: "Blend watermelon, cucumber, and lime juice. Strain into a Collins glass over ice and top with ginger ale.",
    thumb: "",
    ingredient1: "Watermelon",
    ingredient2: "Cucumber",
    ingredient3: "Lime juice",
    ingredient4: "Ginger ale",
    imageSource: ""
  },
  {
    id: "20034",
    name: "Kudamm Kiss",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake peach schnapps, vodka, and cranberry juice. Strain into a chilled coupe glass and garnish with a twist of lemon.",
    thumb: "",
    ingredient1: "Peach schnapps",
    ingredient2: "Vodka",
    ingredient3: "Cranberry juice",
    imageSource: "",
 },
  {
    id: "20051",
    name: "Checkpoint Charlie Chamomile Cooler",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Collins glass",
    instructions: "Infuse chamomile tea in cold water, mix with honey, and add a splash of apple juice. Serve over ice and garnish with a chamomile flower.",
    thumb: "",
    ingredient1: "Chamomile tea",
    ingredient2: "Honey",
    ingredient3: "Apple juice",
    imageSource: ""
  },
  {
    id: "20052",
    name: "Hackescher Markt Hibiscus Highball",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Combine hibiscus-infused vodka, grapefruit juice, and soda water. Serve over ice and garnish with a grapefruit twist.",
    thumb: "",
    ingredient1: "Hibiscus-infused vodka",
    ingredient2: "Grapefruit juice",
    ingredient3: "Soda water",
    imageSource: ""
  },
  {
    id: "20053",
    name: "Brandenburg Bramble",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Muddle blackberries and lemon zest, add gin and blackberry liqueur. Stir over ice and strain into a rocks glass.",
    thumb: "",
    ingredient1: "Gin",
    ingredient2: "Blackberries",
    ingredient3: "Blackberry liqueur",
    ingredient4: "Lemon zest",
    imageSource: ""
  },
  {
    id: "20054",
    name: "Berlin Bear Martini",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Martini glass",
    instructions: "Shake vodka, blue curaçao, and pineapple juice. Strain into a chilled martini glass and garnish with a gummy bear.",
    thumb: "",
    ingredient1: "Vodka",
    ingredient2: "Blue curaçao",
    ingredient3: "Pineapple juice",
    imageSource: "",
 },
  {
    id: "20061",
    name: "Potsdamer Platz Passionfruit Punch",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions: "Mix passionfruit vodka, orange juice, and sparkling wine in a punch bowl. Add slices of orange, pineapple, and passionfruit for a tropical touch.",
    thumb: "",
    ingredient1: "Passionfruit vodka",
    ingredient2: "Orange juice",
    ingredient3: "Sparkling wine",
    ingredient4: "Orange slices",
    ingredient5: "Pineapple slices",
    ingredient6: "Passionfruit slices",
    imageSource: ""
  },
  {
    id: "20062",
    name: "Kreuzberg Kaffee Kicker",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coffee mug",
    instructions: "Brew strong coffee, add coffee liqueur and hazelnut syrup. Top with whipped cream and a sprinkle of cocoa powder.",
    thumb: "",
    ingredient1: "Strong coffee",
    ingredient2: "Coffee liqueur",
    ingredient3: "Hazelnut syrup",
    ingredient4: "Whipped cream",
    ingredient5: "Cocoa powder",
    imageSource: ""
  },
  {
    id: "20063",
    name: "Molecule Man Melon Mule",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Copper mug",
    instructions: "Muddle watermelon and mint, add vodka and ginger beer. Serve in a copper mug over ice and garnish with a mint sprig.",
    thumb: "",
    ingredient1: "Vodka",
    ingredient2: "Watermelon",
    ingredient3: "Mint leaves",
    ingredient4: "Ginger beer",
    ingredient5: "Mint sprig",
    imageSource: ""
  },
  {
    id: "20064",
    name: "Kreuzkölln Kiwi Cooler",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Collins glass",
    instructions: "Blend kiwi, coconut water, and lime juice. Strain into a Collins glass over ice and garnish with a kiwi slice.",
    thumb: "",
    ingredient1: "Kiwi",
    ingredient2: "Coconut water",
    ingredient3: "Lime juice",
    ingredient4: "Kiwi slice",
    imageSource: ""
  },
  {
    id: "20071",
    name: "Tiergarten Tiki Temptation",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Tiki mug",
    instructions: "Combine dark rum, pineapple juice, and coconut cream. Shake well and strain into a Tiki mug filled with crushed ice. Garnish with a pineapple leaf and a cherry.",
    thumb: "",
    ingredient1: "Dark rum",
    ingredient2: "Pineapple juice",
    ingredient3: "Coconut cream",
    ingredient4: "Crushed ice",
    ingredient5: "Pineapple leaf",
    ingredient6: "Cherry",
    imageSource: ""
  },
  {
    id: "20072",
    name: "Königsallee Kiwi Kick",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Muddle kiwi and basil, add gin, elderflower liqueur, and lime juice. Shake well and strain into a highball glass filled with ice. Garnish with a kiwi wheel and a basil leaf.",
    thumb: "",
    ingredient1: "Gin",
    ingredient2: "Kiwi",
    ingredient3: "Basil leaves",
    ingredient4: "Elderflower liqueur",
    ingredient5: "Lime juice",
    ingredient6: "Kiwi wheel",
    ingredient7: "Basil leaf",
    imageSource: ""
  },
  {
    id: "20073",
    name: "Reichstag Rooibos Refresher",
    category: "Mocktail",
    alcoholic: "Non-Alcoholic",
    glass: "Collins glass",
    instructions: "Brew rooibos tea and let it cool. Mix with cranberry juice, orange juice, and simple syrup. Serve over ice and garnish with an orange slice.",
    thumb: "",
    ingredient1: "Rooibos tea",
    ingredient2: "Cranberry juice",
    ingredient3: "Orange juice",
    ingredient4: "Simple syrup",
    ingredient5: "Ice",
    ingredient6: "Orange slice",
    imageSource: ""
  },
  {
    id: "20074",
    name: "Tempelhofer Tangerine Twist",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Martini glass",
    instructions: "Shake tangerine-infused vodka, triple sec, and lemon juice. Strain into a chilled martini glass and garnish with a twist of tangerine peel.",
    thumb: "",
    ingredient1: "Tangerine-infused vodka",
    ingredient2: "Triple sec",
    ingredient3: "Lemon juice",
    ingredient4: "Tangerine peel",
    imageSource: ""
   },
]  
*/
