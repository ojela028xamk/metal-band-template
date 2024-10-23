type Album = {
  album_name: string;
  tracks: string[];
  year: number;
  type: "Album" | "EP";
  url: string;
};

export const bandAlbums: Album[] = [
  {
    album_name: "Whispers of the Forsaken Woods",
    tracks: [
      "Shadows Among the Trees",
      "Howl of the Forgotten",
      "Silence Beneath the Canopy",
      "The Phantom's Grove",
      "Veil of Thorns",
      "Ritual of the Eldertide",
      "Eclipsed by the Night",
      "Bound by Ancient Roots",
      "Echoes of the Lost",
      "Dawn of the Damned",
    ],
    year: 2024,
    type: "Album",
    url: "/album_images/album_photo_5.png",
  },
  {
    album_name: "Ashes of a Withering World",
    tracks: [
      "Crimson Skies",
      "Wasteland Mourning",
      "Echoes of Silence",
      "Fading Sun",
      "Rivers Run Dry",
      "The Last Breath",
      "Steel Requiem",
      "Desolation's Grasp",
      "Eclipse of Hope",
      "Final Ashen Dawn",
    ],
    year: 2022,
    type: "Album",
    url: "/album_images/album_photo_4.png",
  },
  {
    album_name: "Embers of Desolation",
    tracks: ["Inferno's Call", "Ashen Rebirth", "Blaze of Ruin"],
    year: 2020,
    type: "EP",
    url: "/album_images/album_photo_3.png",
  },
  {
    album_name: "Fires of Valour",
    tracks: [
      "Ignition of the Brave",
      "Titan's Roar",
      "Unbreakable Will",
      "Surge of the Heart",
      "Winds of Reckoning",
      "Steel and Fire",
      "Rising from the Ashes",
      "Echoes of a Warrior",
      "Dawn of Defiance",
      "Embers of Inspiration",
    ],
    year: 2019,
    type: "Album",
    url: "/album_images/album_photo_2.png",
  },
  {
    album_name: "Serpent's Wrath",
    tracks: ["Venomous Visions", "Shed Skin Symphony", "Crowning Constrictor"],
    year: 2017,
    type: "EP",
    url: "/album_images/album_photo_1.png",
  },
];
