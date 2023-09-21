const vscode = require("vscode");

/**
 * Insert a random character name into the active text editor.
 * @param {vscode.TextEditor} editor - The active text editor.
 */
async function insertRandomCharName(editor) {
  if (editor) {

    for (const selection of editor.selections) {
      const randomIndex = Math.floor(Math.random() * animeCharacters.length);
      const randomCharName = animeCharacters[randomIndex].name;

      await editor.edit((editBuilder) => {
        editBuilder.insert(selection.start, randomCharName);
      });
    }
  }
}

/**
 * Insert a random guild name into the active text editor.
 * @param {vscode.TextEditor} editor - The active text editor.
 */
async function insertRandomGuildName(editor) {
  if (editor) {

    for (const selection of editor.selections) {
      const randomIndex = Math.floor(Math.random() * animeGuilds.length);
      const randomGuildName = animeGuilds[randomIndex].name;

      await editor.edit((editBuilder) => {
        editBuilder.insert(selection.start, randomGuildName);
      });
    }
  }
}

/**
 * Activate the extension.
 * @param {vscode.ExtensionContext} context - The extension context.
 */
function activate(context) {
  let disposable1 = vscode.commands.registerCommand(
    "extension.getRandomCharName",
    () => {
      const editor = vscode.window.activeTextEditor;
      insertRandomCharName(editor);
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "extension.getRandomGuildName",
    () => {
      const editor = vscode.window.activeTextEditor;
      insertRandomGuildName(editor);
    }
  );

  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
}

/**
 * Deactivate the extension.
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate,
  insertRandomCharName,
  insertRandomGuildName,
};

const animeGuilds = [
  { name: "Nanto Seiken" },
  { name: "Saiyans" },
  { name: "Shinsengumi" },
  { name: "Gurren Brigade" },
  { name: "Karasuno High School Volleyball Club" },
  { name: "Kakashi's Team 7" },
  { name: "Exorcist Cram School" },
  { name: "The Chimeras" },
  { name: "Yorozuya" },
  { name: "Witch Hunter Robin" },
  { name: "Quinx Squad" },
  { name: "The Espada" },
  { name: "Luffy's Grand Fleet" },
  { name: "Celestial Being" },
  { name: "Barto Club" },
  { name: "The Zodiacs" },
  { name: "Eins, zwei, drei" },
  { name: "Mages Guild" },
  { name: "Nox Pirates" },
  { name: "Nudist Beach" },
  { name: "Seven Stars Sword Art Festival Participants" },
  { name: "Order of the Black Knights" },
  { name: "Sakamaki Vampires" },
  { name: "Kohona Elders" },
  { name: "Gekkostate" },
  { name: "Shinobi Alliance" },
  { name: "The Crew of the Going Merry" },
  { name: "The Gourmet Hunters" },
  { name: "Shinsen-gumi" },
  { name: "Mugen's Group" },
  { name: "Kingsguard" },
  { name: "The Nura Clan" },
  { name: "Katsuki Clan" },
  { name: "Soul Eater Meisters and Weapons" },
  { name: "The Ainz Ooal Gown" },
  { name: "Legendary Super Saiyans" },
  { name: "Grimoire Heart" },
  { name: "Team Rocket" },
  { name: "Ryozanpaku Dojo" },
  { name: "The Hero Association" },
  { name: "Sakaki's Ryozanpaku Dojo" },
  { name: "Bleach Visoreds" },
  { name: "The Holy Order of the North Star" },
  { name: "League of Villains" },
  { name: "Hyakkaou Private Academy Student Council" },
  { name: "Red Ribbon Army" },
  { name: "Elite Ten Council" },
  { name: "Crimson Demon Clan" },
  { name: "Team Dai-Gurren" },
  { name: "Akame's Elite Seven" },
  { name: "Sun Pirates" },
  { name: "Nara Clan" },
  { name: "Saiyan Royal Family" },
  { name: "Team Natsu" },
  { name: "The Amanto" },
  { name: "Organization for the Preservation of Order and Peace" },
  { name: "Invisible Storm" },
  { name: "The Z Fighters" },
  { name: "Levi Squad" },
  { name: "Seven Warlords of the Sea" },
  { name: "Mystogan's Guild" },
  { name: "Gourmet World" },
  { name: "Shinigami Research and Development Institute" },
  { name: "The Red Dragon Pirates" },
  { name: "Mugen Tenshin Clan" },
  { name: "Jura Neekis Guild" },
  { name: "Mist Gun's Guild" },
  { name: "Dragon Slayers" },
  { name: "The Phantom Troupe" },
  { name: "Tenrou Island Guild Members" },
  { name: "Central Knights" },
  { name: "The Enforcers" },
  { name: "Strategists" },
  { name: "Outer Moka's Group" },
  { name: "Shinsengumi Special Police" },
  { name: "Proud Immortal Demon Way" },
  { name: "Black Bulls" },
  { name: "Ainzach's Guild" },
  { name: "Revocs Corporation" },
  { name: "Tengen Toppa Gurren Lagann" },
  { name: "The Guardians of the Galaxy" },
  { name: "Class 2-F" },
  { name: "Order of the White Dragon" },
  { name: "The Shinigami" },
  { name: "Ten Commandments" },
  { name: "Espers of Academy City" },
  { name: "Wandering Tribe" },
  { name: "The Nox Pirates" },
  { name: "Twelve Demon Moons" },
  { name: "The League of Villains" },
  { name: "Great Tomb of Nazarick" },
  { name: "Swordmasters of Black Iron" },
  { name: "Fangpire Clan" },
  { name: "The Shogun's Guardians" },
  { name: "The Heavens Arena Fighters" },
  { name: "Elite Four" },
  { name: "Shinsengumi 3rd Division" },
  { name: "Hunter x Hunter Association" },
  { name: "Space Pirate Captain Harlock's Crew" },
  { name: "Yusuke's Team" },
  { name: "The Black Bulls" },
  { name: "Seven Deadly Sins of Britannia" },
  { name: "Great Holy Knights" },
  { name: "Whitebeard Pirates" },
  { name: "Sakura's Team 7" },
  { name: "The Zodiacs" },
  { name: "The Pillars" },
  { name: "League of Demon Slayer Corps" },
  { name: "The Homunculi" },
  { name: "Chimera Ant Royal Guards" },
  { name: "Royal Guard" },
  { name: "Team 10" },
  { name: "Team JNPR" },
  { name: "The Generals of the Revolutionary Army" },
  { name: "Team Guy" },
  { name: "The Inklings" },
];

const animeCharacters = [
  {
    name: "Edward Elric",
  },
  {
    name: "Alphonse Elric",
  },
  {
    name: "Winry Rockbell",
  },
  {
    name: "Roy Mustang",
  },
  {
    name: "Riza Hawkeye",
  },
  {
    name: "Maes Hughes",
  },
  {
    name: "Alex Louis Armstrong",
  },
  {
    name: "Jean Havoc",
  },
  {
    name: "Edward Van Hohenheim",
  },
  {
    name: "Ling Yao",
  },
  {
    name: "Lan Fan",
  },
  {
    name: "Envy",
  },
  {
    name: "Lust",
  },
  {
    name: "Pride",
  },
  {
    name: "Gluttony",
  },
  {
    name: "Sloth",
  },
  {
    name: "Greed",
  },
  {
    name: "Wrath",
  },
  {
    name: "Light Yagami",
  },
  {
    name: "L",
  },
  {
    name: "Ryuk",
  },
  {
    name: "Misa Amane",
  },
  {
    name: "Soichiro Yagami",
  },
  {
    name: "Rem",
  },
  {
    name: "Near",
  },
  {
    name: "Matt",
  },
  {
    name: "Mello",
  },
  {
    name: "Spongebob Squarepants",
  },
  {
    name: "Patrick Star",
  },
  {
    name: "Squidward Tentacles",
  },
  {
    name: "Mr. Krabs",
  },
  {
    name: "Sandy Cheeks",
  },
  {
    name: "Plankton",
  },
  {
    name: "Karen Plankton",
  },
  {
    name: "Gary the Snail",
  },
  {
    name: "Naruto Uzumaki",
  },
  {
    name: "Sasuke Uchiha",
  },
  {
    name: "Sakura Haruno",
  },
  {
    name: "Kakashi Hatake",
  },
  {
    name: "Madara Uchiha",
  },
  {
    name: "Hashirama Senju",
  },
  {
    name: "Itachi Uchiha",
  },
  {
    name: "Obito Uchiha",
  },
  {
    name: "Pain",
  },
  {
    name: "Gaara",
  },
  {
    name: "Rock Lee",
  },
  {
    name: "Shikamaru Nara",
  },
  {
    name: "Choji Akimichi",
  },
  {
    name: "Kiba Inuzuka",
  },
  {
    name: "Hinata Hyuga",
  },
  {
    name: "Shino Aburame",
  },
  {
    name: "Kurenai Yuhi",
  },
  {
    name: "Might Guy",
  },
  {
    name: "Asuma Sarutobi",
  },
  {
    name: "Jiraiya",
  },
  {
    name: "Orochimaru",
  },
  {
    name: "Tsunade",
  },
  {
    name: "Minato Namikaze",
  },
  {
    name: "Kushina Uzumaki",
  },
  {
    name: "Monkey D. Luffy",
  },
  {
    name: "Roronoa Zoro",
  },
  {
    name: "Nami",
  },
  {
    name: "Usopp",
  },
  {
    name: "Sanji",
  },
  {
    name: "Tony Tony Chopper",
  },
  {
    name: "Nico Robin",
  },
  {
    name: "Franky",
  },
  {
    name: "Brook",
  },
  {
    name: "Jinbe",
  },
  {
    name: "Gol D. Roger",
  },
  {
    name: "Whitebeard",
  },
  {
    name: "Shanks",
  },
  {
    name: "Blackbeard",
  },
  {
    name: "Akainu",
  },
  {
    name: "Aokiji",
  },
  {
    name: "Kizaru",
  },
  {
    name: "Mihawk",
  },
  {
    name: "Shichibukai",
  },
  {
    name: "Yonkou",
  },
  {
    name: "Luffy's Straw Hat Pirates",
  },
  {
    name: "Goku",
  },
  {
    name: "Vegeta",
  },
  {
    name: "Krillin",
  },
  {
    name: "Piccolo",
  },
  {
    name: "Killua Zoldyck",
  },
  {
    name: "Gon Freecss",
  },
  {
    name: "Leorio Paladiknight",
  },
  {
    name: "Kurapika",
  },
  {
    name: "Hisoka Morrow",
  },
  {
    name: "Chrollo Lucilfer",
  },
  {
    name: "Feitan Portor",
  },
  {
    name: "Phinks Magcub",
  },
  {
    name: "Nobunaga Hazama",
  },
  {
    name: "Machi Komacine",
  },
  {
    name: "Shizuku Muto",
  },
  {
    name: "Kalluto Zoldyck",
  },
  {
    name: "Illumi Zoldyck",
  },
  {
    name: "Silva Zoldyck",
  },
  {
    name: "Zeno Zoldyck",
  },
  {
    name: "Netero",
  },
  {
    name: "Meruem",
  },
  {
    name: "Colt",
  },
  {
    name: "Youpi",
  },
  {
    name: "Pouf",
  },
  {
    name: "Neferpitou",
  },
  {
    name: "Komugi",
  },
  {
    name: "Kenshin Himura",
  },
  {
    name: "Kaoru Kamiya",
  },
  {
    name: "Sanosuke Sagara",
  },
  {
    name: "Yahiko Myojin",
  },
  {
    name: "Megumi Takani",
  },
  {
    name: "Haji Aoshi",
  },
  {
    name: "Seijuro Hiko",
  },
  {
    name: "Shishio Makoto",
  },
  {
    name: "Aoshi Shinomori",
  },
  {
    name: "Hajime Saito",
  },
  {
    name: "Sojiro Seta",
  },
  {
    name: "Akemi Takeda",
  },
  {
    name: "Enishi Yukishiro",
  },
  {
    name: "Kenshin's Ten Hitotsu Battojutsu",
  },
  {
    name: "Saitama",
  },
  {
    name: "Genos",
  },
  {
    name: "Mumen Rider",
  },
  {
    name: "Tanktop Master",
  },
  {
    name: "Silver Fang",
  },
  {
    name: "Speed-o'-Sound Sonic",
  },
  {
    name: "Tatsumaki",
  },
  {
    name: "Fubuki",
  },
  {
    name: "Metal Knight",
  },
  {
    name: "King",
  },
  {
    name: "Child Emperor",
  },
  {
    name: "Puri-Puri Prisoner",
  },
  {
    name: "Garou",
  },
  {
    name: "Boros",
  },
  {
    name: "Lord Orochi",
  },
  {
    name: "Psykos",
  },
  {
    name: "God",
  },
  {
    name: "Tanjiro Kamado",
  },
  {
    name: "Nezuko Kamado",
  },
  {
    name: "Zenitsu Agatsuma",
  },
  {
    name: "Inosuke Hashibira",
  },
  {
    name: "Kanao Tsuyuri",
  },
  {
    name: "Giyu Tomioka",
  },
  {
    name: "Shinobu Kocho",
  },
  {
    name: "Kyojuro Rengoku",
  },
  {
    name: "Tengen Uzui",
  },
  {
    name: "Mitsuri Kanroji",
  },
  {
    name: "Obanai Iguro",
  },
  {
    name: "Sanemi Shinazugawa",
  },
  {
    name: "Gyomei Himejima",
  },
  {
    name: "Muichiro Tokito",
  },
  {
    name: "Kagaya Ubuyashiki",
  },
  {
    name: "Makomo",
  },
  {
    name: "Saburo",
  },
  {
    name: "Tamayo",
  },
  {
    name: "Yushiro",
  },
  {
    name: "Muzan Kibutsuji",
  },
  {
    name: "Akaza",
  },
  {
    name: "Doma",
  },
  {
    name: "Hantengu",
  },
];
