export type RouteOverlayCard = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export type QuotePack = {
  /** Display name for the theme/source */
  name: string;
  /** Short label shown in the overlay */
  label: string;
  /**
   * Relative selection weight when picking a random pack.
   * Higher = picked more often. Defaults to 1.
   */
  weight?: number;
  /** Quotes or lines to rotate through (must be text you have rights to use) */
  lines: string[];
  /** Optional emoji/icons to rotate */
  icons?: string[];
};

/**
 * Add your own quote packs here.
 * IMPORTANT: Only include text you wrote yourself or have permission/license to display.
 */
export const quotePacks: QuotePack[] = [
  {
    name: "Game of Thrones",
    label: "GoT",
    weight: 4,
    lines: [
      "\"Winter is coming.\" — House Stark (Game of Thrones)",
      "\"When you play the game of thrones, you win or you die. There is no middle ground.\" — Cersei Lannister (Game of Thrones)",
      "\"A mind needs books like a sword needs a whetstone, if it is to keep its edge.\" — Tyrion Lannister (Game of Thrones)",
      "\"Chaos isn't a pit. Chaos is a ladder.\" — Petyr Baelish (Game of Thrones)",
      "\"What do we say to the Lord of Death? Not today.\" — Syrio Forel (Game of Thrones)",
      "\"You know nothing, Jon Snow.\" — Ygritte (Game of Thrones)",
      "\"A bruise is a lesson… and each lesson makes us better.\" — Arya Stark (Game of Thrones)",
      "\"I’m Sansa Stark of Winterfell. This is my home, and you can’t frighten me.\" — Sansa Stark (Game of Thrones)",
      "\"When you play the Game of Thrones, you win or you die.\" — Cersei Lannister (Game of Thrones)",
      "\"I will take what is mine with fire and blood.\" — Daenerys Targaryen (Game of Thrones)",
      "\"What is dead may never die.\" — The Ironborn (Game of Thrones)",
      "\"I am the sword in the darkness. I am the watcher on the walls.\" — Night’s Watch vow (Game of Thrones)",
      "\"A Lannister always pays his debts.\" — The Lannisters (Game of Thrones)",
      "\"The North remembers.\" — The Starks (Game of Thrones)",
      "\"Valar morghulis — Valar dohaeris.\" — The Faceless Men (Game of Thrones)",
    ],
    icons: ["🐉", "⚔", "🛡", "🧊", "🜂", "🕯"],
  },
  {
    name: "Friends",
    label: "Friends",
    lines: [
      "\"How you doin'.\" — Joey Tribbiani (Friends)",
      "\"We were on a break!\" — Ross Geller (Friends)",
      "\"Pivot!\" — Ross Geller (Friends)",
      "\"Welcome to the real world. It sucks. You’re gonna love it.\" — Monica Geller (Friends)",
      "\"I’m not great at the advice. Can I interest you in a sarcastic comment?\" — Chandler Bing (Friends)",
      "\"She’s your lobster.\" — Phoebe Buffay (Friends)",
    ],
    icons: ["☕", "🛋", "📺", "😂", "✨"],
  },
  {
    name: "The Office (US)",
    label: "Office",
    lines: [
      "\"That’s what she said.\" — Michael Scott (The Office US)",
      "\"I’m not superstitious, but I am a little stitious.\" — Michael Scott (The Office US)",
      "\"Bears, beets, Battlestar Galactica.\" — Jim Halpert (The Office US)",
      "\"Identity theft is not a joke, Jim!\" — Dwight Schrute (The Office US)",
      "\"Would I rather be feared or loved? Easy. Both.\" — Michael Scott (The Office US)",
    ],
    icons: ["📄", "🖇", "📎", "☎", "🗄"],
  },
  {
    name: "Stranger Things",
    label: "ST",
    lines: [
      "\"Friends don't lie.\" — Eleven (Stranger Things)",
      "\"Mornings are for coffee and contemplation.\" — Jim Hopper (Stranger Things)",
      "\"Nobody normal ever accomplished anything meaningful in this world.\" — Jonathan Byers (Stranger Things)",
      "\"You can't spell America without Erica.\" — Erica Sinclair (Stranger Things)",
      "\"I dump your ass.\" — Eleven (Stranger Things)",
    ],
    icons: ["🔦", "📼", "🧇", "🩸", "🌀"],
  },
];

export const portfolioCards: RouteOverlayCard[] = [
  { title: "Work", subtitle: "Case studies & builds", imageSrc: "/images/gallery/vertical-1.jpg" },
  { title: "About", subtitle: "Story & background", imageSrc: "/images/avatar.jpg" },
  { title: "Gallery", subtitle: "Visuals & snapshots", imageSrc: "/images/gallery/vertical-2.jpg" },
  { title: "Certs", subtitle: "Proof of craft", imageSrc: "/images/projects/certchev.jpg" },
  { title: "Impact", subtitle: "Results & outcomes", imageSrc: "/images/projects/certchev2.jpg" },
  { title: "Now Playing", subtitle: "Music & vibe", imageSrc: "/images/gallery/vertical-3.jpg" },
];
