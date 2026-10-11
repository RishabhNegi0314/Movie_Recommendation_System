export interface Movie {
  movie_id: number;
  title: string;
  genres: string[];
  overview: string;
  cast: string[];
  director: string;
  keywords: string[];
  release_year?: number;
  rating?: number;
  poster_url?: string;
}

export const MOVIES_DATASET: Movie[] = [
  {
    movie_id: 19995,
    title: "Avatar",
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
    overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    director: "James Cameron",
    keywords: ["culture clash", "future", "space war", "space colony", "alien"],
    release_year: 2009,
    rating: 7.5,
  },
  {
    movie_id: 155,
    title: "The Dark Knight",
    genres: ["Drama", "Action", "Crime", "Thriller"],
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    keywords: ["dc comics", "crime fighter", "joker", "gotham", "vigilante"],
    release_year: 2008,
    rating: 8.5,
  },
  {
    movie_id: 27205,
    title: "Inception",
    genres: ["Action", "Science Fiction", "Adventure"],
    overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    director: "Christopher Nolan",
    keywords: ["dream", "subconscious", "heist", "mind reading", "espionage"],
    release_year: 2010,
    rating: 8.4,
  },
  {
    movie_id: 157336,
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Science Fiction"],
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    keywords: ["black hole", "space travel", "astronaut", "future", "gravity"],
    release_year: 2014,
    rating: 8.6,
  },
  {
    movie_id: 24428,
    title: "The Avengers",
    genres: ["Science Fiction", "Action", "Adventure"],
    overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster.",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    director: "Joss Whedon",
    keywords: ["marvel comic", "superhero", "alien invasion", "shield", "super power"],
    release_year: 2012,
    rating: 7.7,
  },
  {
    movie_id: 680,
    title: "Pulp Fiction",
    genres: ["Thriller", "Crime"],
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    director: "Quentin Tarantino",
    keywords: ["hitman", "gangster", "nonlinear", "los angeles", "overdose"],
    release_year: 1994,
    rating: 8.5,
  },
  {
    movie_id: 597,
    title: "Titanic",
    genres: ["Drama", "Romance"],
    overview: "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic.",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    director: "James Cameron",
    keywords: ["shipwreck", "iceberg", "tragic love", "ocean liner", "class differences"],
    release_year: 1997,
    rating: 7.9,
  },
  {
    movie_id: 550,
    title: "Fight Club",
    genres: ["Drama"],
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way.",
    cast: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"],
    director: "David Fincher",
    keywords: ["insomnia", "alter ego", "anarchy", "soap", "anti establishment"],
    release_year: 1999,
    rating: 8.4,
  },
  {
    movie_id: 603,
    title: "The Matrix",
    genres: ["Action", "Science Fiction"],
    overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "Lana Wachowski",
    keywords: ["virtual reality", "artificial intelligence", "cyberpunk", "simulation", "dystopia"],
    release_year: 1999,
    rating: 8.2,
  },
  {
    movie_id: 13,
    title: "Forrest Gump",
    genres: ["Comedy", "Drama", "Romance"],
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do.",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    director: "Robert Zemeckis",
    keywords: ["vietnam war", "running", "historical events", "alabama", "optimism"],
    release_year: 1994,
    rating: 8.5,
  },
  {
    movie_id: 278,
    title: "The Shawshank Redemption",
    genres: ["Drama", "Crime"],
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    director: "Frank Darabont",
    keywords: ["prison", "escape", "wrongful imprisonment", "hope", "friendship"],
    release_year: 1994,
    rating: 8.7,
  },
  {
    movie_id: 98,
    title: "Gladiator",
    genres: ["Action", "Drama", "Adventure"],
    overview: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into turmoil. Maximus, one of the Roman army's most capable and trusted generals and his key advisor, is caught in a web of betrayal.",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    director: "Ridley Scott",
    keywords: ["roman empire", "gladiator", "revenge", "ancient rome", "emperor"],
    release_year: 2000,
    rating: 8.2,
  },
  {
    movie_id: 329,
    title: "Jurassic Park",
    genres: ["Adventure", "Science Fiction"],
    overview: "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park.",
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    director: "Steven Spielberg",
    keywords: ["dna", "dinosaur", "theme park", "island", "cloning"],
    release_year: 1993,
    rating: 7.9,
  },
  {
    movie_id: 1726,
    title: "Iron Man",
    genres: ["Action", "Science Fiction", "Adventure"],
    overview: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    cast: ["Robert Downey Jr.", "Terrence Howard", "Jeff Bridges"],
    director: "Jon Favreau",
    keywords: ["marvel comic", "superhero", "billionaire", "high tech suit", "weapons"],
    release_year: 2008,
    rating: 7.6,
  },
  {
    movie_id: 22,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    genres: ["Adventure", "Fantasy", "Action"],
    overview: "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate who steals Jack's ship, the Black Pearl, and kidnaps the governor's daughter.",
    cast: ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom"],
    director: "Gore Verbinski",
    keywords: ["pirate", "caribbean", "curse", "ghost ship", "sword fight"],
    release_year: 2003,
    rating: 7.8,
  },
  {
    movie_id: 120,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genres: ["Adventure", "Fantasy", "Action"],
    overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    director: "Peter Jackson",
    keywords: ["middle earth", "hobbit", "ring of power", "quest", "sorcery"],
    release_year: 2001,
    rating: 8.4,
  },
  {
    movie_id: 238,
    title: "The Godfather",
    genres: ["Drama", "Crime"],
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son steps in.",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    director: "Francis Ford Coppola",
    keywords: ["mafia", "crime family", "organized crime", "italy", "patriarch"],
    release_year: 1972,
    rating: 8.7,
  },
  {
    movie_id: 129,
    title: "Spirited Away",
    genres: ["Animation", "Family", "Fantasy"],
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    director: "Hayao Miyazaki",
    keywords: ["witch", "spirit realm", "bathhouse", "curse", "japanese animation"],
    release_year: 2001,
    rating: 8.5,
  },
  {
    movie_id: 12,
    title: "Finding Nemo",
    genres: ["Animation", "Family"],
    overview: "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish named Dory to rescue him.",
    cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    director: "Andrew Stanton",
    keywords: ["ocean", "clownfish", "father son", "great barrier reef", "sydney"],
    release_year: 2003,
    rating: 7.8,
  },
  {
    movie_id: 862,
    title: "Toy Story",
    genres: ["Animation", "Comedy", "Family"],
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz.",
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    director: "John Lasseter",
    keywords: ["toys come to life", "rivalry", "friendship", "space ranger", "childhood"],
    release_year: 1995,
    rating: 8.0,
  },
  {
    movie_id: 557,
    title: "Spider-Man",
    genres: ["Action", "Science Fiction"],
    overview: "After being bitten by a genetically altered spider at Oscorp, nerdy high school student Peter Parker is endowed with spider-like abilities to fight crime.",
    cast: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst"],
    director: "Sam Raimi",
    keywords: ["marvel comic", "superhero", "spider bite", "green goblin", "new york city"],
    release_year: 2002,
    rating: 7.3,
  },
  {
    movie_id: 11,
    title: "Star Wars",
    genres: ["Adventure", "Action", "Science Fiction"],
    overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable droid duo to rescue her.",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    director: "George Lucas",
    keywords: ["jedi", "galaxy", "death star", "lightsaber", "empire"],
    release_year: 1977,
    rating: 8.2,
  },
  {
    movie_id: 671,
    title: "Harry Potter and the Philosopher's Stone",
    genres: ["Adventure", "Fantasy", "Family"],
    overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry.",
    cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    director: "Chris Columbus",
    keywords: ["wizard", "magic", "hogwarts", "sorcerer", "boarding school"],
    release_year: 2001,
    rating: 7.9,
  },
  {
    movie_id: 8587,
    title: "The Lion King",
    genres: ["Family", "Animation", "Drama"],
    overview: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows beyond the Savannah, living by a philosophy: No worries for the rest of your days.",
    cast: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons"],
    director: "Roger Allers",
    keywords: ["africa", "lion", "uncle", "pride rock", "circle of life"],
    release_year: 1994,
    rating: 8.3,
  },
  {
    movie_id: 105,
    title: "Back to the Future",
    genres: ["Adventure", "Comedy", "Science Fiction", "Family"],
    overview: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage before he ceases to exist.",
    cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    director: "Robert Zemeckis",
    keywords: ["time travel", "delorean", "1950s", "inventor", "clock tower"],
    release_year: 1985,
    rating: 8.3,
  },
  {
    movie_id: 769,
    title: "GoodFellas",
    genres: ["Drama", "Crime"],
    overview: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    director: "Martin Scorsese",
    keywords: ["mafia", "organized crime", "gangster", "brooklyn", "heist"],
    release_year: 1990,
    rating: 8.5,
  },
  {
    movie_id: 274,
    title: "The Silence of the Lambs",
    genres: ["Crime", "Drama", "Thriller"],
    overview: "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism.",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    director: "Jonathan Demme",
    keywords: ["serial killer", "fbi", "cannibal", "psychiatrist", "investigation"],
    release_year: 1991,
    rating: 8.3,
  },
  {
    movie_id: 348,
    title: "Alien",
    genres: ["Horror", "Science Fiction"],
    overview: "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When three crew members investigate the source of the signal, they discover a hive of extraterrestrial eggs.",
    cast: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
    director: "Ridley Scott",
    keywords: ["xenomorph", "spaceship", "extraterrestrial", "horror in space", "nostromo"],
    release_year: 1979,
    rating: 8.1,
  },
  {
    movie_id: 10681,
    title: "WALL-E",
    genres: ["Animation", "Family", "Science Fiction"],
    overview: "WALL·E is the last robot left on an Earth that has been abandoned by mankind and overrun with trash. One day, a sleek search robot named EVE arrives, sparking a grand adventure across the cosmos.",
    cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin"],
    director: "Andrew Stanton",
    keywords: ["robot", "earth", "future", "space", "environment"],
    release_year: 2008,
    rating: 8.1,
  },
  {
    movie_id: 68718,
    title: "Django Unchained",
    genres: ["Drama", "Western"],
    overview: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
    director: "Quentin Tarantino",
    keywords: ["bounty hunter", "slavery", "plantation", "revenge", "wild west"],
    release_year: 2012,
    rating: 8.2,
  },
  {
    movie_id: 244786,
    title: "Whiplash",
    genres: ["Drama", "Music"],
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, pushing himself to the physical and mental limit.",
    cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    director: "Damien Chazelle",
    keywords: ["jazz", "drummer", "mentor", "ambition", "music school"],
    release_year: 2014,
    rating: 8.4,
  },
  {
    movie_id: 106646,
    title: "The Wolf of Wall Street",
    genres: ["Crime", "Drama", "Comedy"],
    overview: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, the corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    director: "Martin Scorsese",
    keywords: ["wall street", "stockbroker", "greed", "drugs", "biography"],
    release_year: 2013,
    rating: 8.0,
  },
  {
    movie_id: 808,
    title: "Shrek",
    genres: ["Animation", "Comedy", "Fantasy", "Adventure", "Family"],
    overview: "It ain't easy bein' green -- especially if you're a likable ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an endearing donkey.",
    cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
    director: "Andrew Adamson",
    keywords: ["ogre", "fairytale", "donkey", "princess", "dragon"],
    release_year: 2001,
    rating: 7.7,
  },
  {
    movie_id: 118340,
    title: "Guardians of the Galaxy",
    genres: ["Action", "Science Fiction", "Adventure"],
    overview: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    director: "James Gunn",
    keywords: ["marvel comic", "space", "outlaw", "raccoon", "team"],
    release_year: 2014,
    rating: 7.9,
  },
  {
    movie_id: 293660,
    title: "Deadpool",
    genres: ["Action", "Adventure", "Comedy"],
    overview: "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool.",
    cast: ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein"],
    director: "Tim Miller",
    keywords: ["anti hero", "marvel comic", "mercenary", "fourth wall", "revenge"],
    release_year: 2016,
    rating: 7.6,
  },
  {
    movie_id: 14160,
    title: "Up",
    genres: ["Animation", "Comedy", "Family", "Adventure"],
    overview: "Carl Fredricksen, a 78-year-old balloon salesman, ties thousands of balloons to his house and flies away to the South American wilderness, inadvertently taking an earnest 8-year-old wilderness explorer with him.",
    cast: ["Edward Asner", "Christopher Plummer", "Jordan Nagai"],
    director: "Pete Docter",
    keywords: ["balloons", "flying house", "south america", "wilderness explorer", "grief"],
    release_year: 2009,
    rating: 8.0,
  },
  {
    movie_id: 354912,
    title: "Coco",
    genres: ["Animation", "Family", "Comedy", "Music", "Adventure"],
    overview: "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead.",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    director: "Lee Unkrich",
    keywords: ["day of the dead", "mexico", "guitar", "family ancestry", "land of the dead"],
    release_year: 2017,
    rating: 8.2,
  },
  {
    movie_id: 335984,
    title: "Blade Runner 2049",
    genres: ["Science Fiction", "Drama", "Mystery"],
    overview: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    director: "Denis Villeneuve",
    keywords: ["cyberpunk", "replicant", "artificial intelligence", "dystopia", "investigation"],
    release_year: 2017,
    rating: 8.0,
  },
  {
    movie_id: 49026,
    title: "The Dark Knight Rises",
    genres: ["Action", "Crime", "Drama", "Thriller"],
    overview: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department.",
    cast: ["Christian Bale", "Michael Caine", "Gary Oldman"],
    director: "Christopher Nolan",
    keywords: ["dc comics", "gotham", "bane", "catwoman", "vigilante"],
    release_year: 2012,
    rating: 7.8,
  },
  {
    movie_id: 157,
    title: "Star Trek",
    genres: ["Science Fiction", "Action", "Adventure"],
    overview: "The fate of the galaxy rests in the hands of bitter rivals, James T. Kirk and Spock. Aboard the USS Enterprise, the maiden crew must face a vengeful Romulan commander bent on destroying the Federation.",
    cast: ["Chris Pine", "Zachary Quinto", "Leonard Nimoy"],
    director: "J.J. Abrams",
    keywords: ["starfleet", "space travel", "enterprise", "romulan", "teleportation"],
    release_year: 2009,
    rating: 7.4,
  },
  {
    movie_id: 672,
    title: "Harry Potter and the Chamber of Secrets",
    genres: ["Adventure", "Fantasy", "Family"],
    overview: "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Soon, words written on the wall in blood declare the Chamber of Secrets has been opened.",
    cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    director: "Chris Columbus",
    keywords: ["wizard", "hogwarts", "basilisk", "chamber of secrets", "magic"],
    release_year: 2002,
    rating: 7.7,
  },
  {
    movie_id: 1891,
    title: "The Empire Strikes Back",
    genres: ["Adventure", "Action", "Science Fiction"],
    overview: "The epic adventure continues as Luke Skywalker seeks out Jedi Master Yoda on Dagobah to train in the ways of the Force, while Darth Vader relentlessly pursues Han Solo and Princess Leia.",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    director: "Irvin Kershner",
    keywords: ["jedi", "yoda", "darth vader", "hoth", "cloud city"],
    release_year: 1980,
    rating: 8.4,
  },
  {
    movie_id: 99861,
    title: "Avengers: Age of Ultron",
    genres: ["Action", "Adventure", "Science Fiction"],
    overview: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance.",
    cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    director: "Joss Whedon",
    keywords: ["marvel comic", "superhero", "artificial intelligence", "ultron", "avengers"],
    release_year: 2015,
    rating: 7.3,
  },
  {
    movie_id: 284054,
    title: "Black Panther",
    genres: ["Action", "Adventure", "Science Fiction"],
    overview: "King T'Challa returns home to the isolated, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country.",
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    director: "Ryan Coogler",
    keywords: ["wakanda", "vibranium", "marvel comic", "african king", "superhero"],
    release_year: 2018,
    rating: 7.4,
  },
  {
    movie_id: 424,
    title: "Schindler's List",
    genres: ["Drama", "History", "War"],
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Holocaust during World War II while running a factory in Poland.",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
    director: "Steven Spielberg",
    keywords: ["holocaust", "world war ii", "concentration camp", "rescue", "poland"],
    release_year: 1993,
    rating: 8.6,
  },
  {
    movie_id: 857,
    title: "Saving Private Ryan",
    genres: ["Drama", "History", "War"],
    overview: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory to bring the boy home.",
    cast: ["Tom Hanks", "Tom Sizemore", "Matt Damon"],
    director: "Steven Spielberg",
    keywords: ["normandy", "world war ii", "d-day", "soldiers", "brotherhood"],
    release_year: 1998,
    rating: 8.2,
  },
  {
    movie_id: 27578,
    title: "The Expendables",
    genres: ["Action", "Adventure", "Thriller"],
    overview: "A team of elite mercenaries tasked with a mission to overthrow a Latin American dictator finds that things are not as they appear, putting them in a tangled web of deceit.",
    cast: ["Sylvester Stallone", "Jason Statham", "Jet Li"],
    director: "Sylvester Stallone",
    keywords: ["mercenary", "guns", "explosion", "mission", "tough guys"],
    release_year: 2010,
    rating: 6.2,
  },
  {
    movie_id: 1124,
    title: "The Prestige",
    genres: ["Drama", "Mystery", "Thriller"],
    overview: "A mysterious story of two magicians whose intense desire to outwit each other pushes them to the edge, leading them to sacrifice everything they love in a ruthless battle for superiority.",
    cast: ["Hugh Jackman", "Christian Bale", "Michael Caine"],
    director: "Christopher Nolan",
    keywords: ["magician", "rivalry", "illusion", "teleportation", "victorian era"],
    release_year: 2006,
    rating: 8.2,
  },
  {
    movie_id: 77,
    title: "Memento",
    genres: ["Mystery", "Thriller"],
    overview: "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty, however, of locating his wife's killer is compounded by the fact that he suffers from an untreatable form of short-term memory loss.",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    director: "Christopher Nolan",
    keywords: ["amnesia", "polaroid", "tattoos", "revenge", "nonlinear"],
    release_year: 2000,
    rating: 8.2,
  },
  {
    movie_id: 497,
    title: "The Green Mile",
    genres: ["Drama", "Crime", "Fantasy"],
    overview: "A supernatural tale for the ages set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious gift of healing and innocence.",
    cast: ["Tom Hanks", "David Morse", "Michael Clarke Duncan"],
    director: "Frank Darabont",
    keywords: ["death row", "prison guard", "miracle", "supernatural", "innocence"],
    release_year: 1999,
    rating: 8.5,
  }
];

// Helper: Extract content-based tags matching ContentBased.py
function getMovieTags(movie: Movie): string[] {
  const words: string[] = [];

  // overview split
  const overviewWords = movie.overview.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(w => w.length > 2);
  words.push(...overviewWords);

  // genres (collapsed without spaces, matching ContentBased.py)
  for (const genre of movie.genres) {
    words.push(genre.toLowerCase().replace(/\s+/g, ''));
  }

  // keywords (collapsed without spaces)
  for (const kw of movie.keywords) {
    words.push(kw.toLowerCase().replace(/\s+/g, ''));
  }

  // cast (top 3, collapsed)
  for (const actor of movie.cast) {
    words.push(actor.toLowerCase().replace(/\s+/g, ''));
  }

  // director (collapsed)
  words.push(movie.director.toLowerCase().replace(/\s+/g, ''));

  return words;
}

// Compute frequency map for bag-of-words
function getWordFrequency(tokens: string[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const token of tokens) {
    map.set(token, (map.get(token) || 0) + 1);
  }
  return map;
}

// Cosine similarity between two frequency vectors (as in CountVectorizer + cosine_similarity)
function computeCosineSimilarity(freq1: Map<string, number>, freq2: Map<string, number>): number {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (const [, val] of freq1) {
    norm1 += val * val;
  }
  for (const [, val] of freq2) {
    norm2 += val * val;
  }

  if (norm1 === 0 || norm2 === 0) return 0;

  for (const [key, val1] of freq1) {
    if (freq2.has(key)) {
      dotProduct += val1 * freq2.get(key)!;
    }
  }

  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}

// Pre-compute tags frequency vectors
const movieVectors: Map<number, Map<string, number>> = new Map();
for (const m of MOVIES_DATASET) {
  movieVectors.set(m.movie_id, getWordFrequency(getMovieTags(m)));
}

/**
 * Recommends 5 similar movies based on content similarity (matching recommend() in app4.py)
 */
export function recommend(movieTitle: string): Movie[] {
  const targetMovie = MOVIES_DATASET.find(m => m.title.toLowerCase() === movieTitle.toLowerCase());
  if (!targetMovie) {
    return [];
  }

  const targetVector = movieVectors.get(targetMovie.movie_id)!;
  const scores: { movie: Movie; score: number }[] = [];

  for (const other of MOVIES_DATASET) {
    if (other.movie_id === targetMovie.movie_id) continue;
    const otherVector = movieVectors.get(other.movie_id)!;
    const score = computeCosineSimilarity(targetVector, otherVector);
    scores.push({ movie: other, score });
  }

  // Sort descending by similarity distance
  scores.sort((a, b) => b.score - a.score);

  // Return top 5
  return scores.slice(0, 5).map(item => item.movie);
}

/**
 * Recommends 5 movies by genre (matching recommend_by_genre() in app4.py)
 */
export function recommendByGenre(selectedGenre: string): Movie[] {
  const genreMovies = MOVIES_DATASET.filter(m =>
    m.genres.some(g => g.toLowerCase() === selectedGenre.toLowerCase())
  );

  if (genreMovies.length === 0) {
    return [];
  }

  // Shuffle sample up to 5 movies (matching genre_movies.sample(n=min(5, len(genre_movies))))
  const shuffled = [...genreMovies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
}

// Get all unique genres sorted alphabetically
export function getUniqueGenres(): string[] {
  const genres = new Set<string>();
  for (const movie of MOVIES_DATASET) {
    for (const g of movie.genres) {
      genres.add(g);
    }
  }
  return Array.from(genres).sort();
}
