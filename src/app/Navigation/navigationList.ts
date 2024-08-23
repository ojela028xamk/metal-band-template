export enum NavigationLinks {
  BAND = "band",
  MUSIC = "music",
  PHOTOS = "photos",
  EVENTS = "events",
}

export type NavigationItem = {
  link: NavigationLinks;
  image: string;
  alt: string;
};

export const navigationList: NavigationItem[] = [
  {
    link: NavigationLinks.BAND,
    image: "/card_images/band_card.jpg",
    alt: "Image By: Wendy Wei: https://www.pexels.com/fi-fi/kuva/1943411/",
  },
  {
    link: NavigationLinks.MUSIC,
    image: "/card_images/music_card.jpg",
    alt: "Image By: Microsoft Designer",
  },
  {
    link: NavigationLinks.PHOTOS,
    image: "/card_images/photos_card.jpg",
    alt: "Image By: Microsoft Designer",
  },
  {
    link: NavigationLinks.EVENTS,
    image: "/card_images/events_card.png",
    alt: "Imege by: David Bartus: https://www.pexels.com/fi-fi/kuva/690779/",
  },
];
