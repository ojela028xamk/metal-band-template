type Album = {
  album_name: string;
  tracks: string[];
  year: number;
  type: "Album" | "EP";
  url: string;
};

export const bandAlbums: Album[] = [
  {
    album_name: "Adrenaline Rush",
    tracks: [
      "Adrenaline Rush",
      "Rise Above the Pain",
      "Overdrive",
      "Chaos Theory",
      "Rush Hour Riot",
      "Resilient Heart",
      "Vortex",
      "No Limits",
    ],
    year: 2023,
    type: "Album",
    url: "/album_images/album_photo_4.png",
  },
  {
    album_name: "Breaking point",
    tracks: ["Darkest Hour", "Under Pressure", "Challenge", "No Turning Back"],
    year: 2020,
    type: "EP",
    url: "/album_images/album_photo_3.png",
  },
  {
    album_name: "Electric Storm",
    tracks: [
      "Rebel Anthem",
      "Thunder in the Night",
      "Break the Surface",
      "Electric Mirage",
    ],
    year: 2018,
    type: "EP",
    url: "/album_images/album_photo_2.png",
  },
  {
    album_name: "Shattered Reflections",
    tracks: [
      "Broken Glass Echoes",
      "Ghosts of Yesterday",
      "Fractured Dreams",
      "Edge of the Abyss",
      "Mirror of Deceit",
      "Silent Screams",
      "Rise from the Ruins",
      "Shattered Reflections",
    ],
    year: 2017,
    type: "Album",
    url: "/album_images/album_photo_1.png",
  },
];
