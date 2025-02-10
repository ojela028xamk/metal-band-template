export enum NavigationLinks {
  BAND = "band",
  MUSIC = "music",
  PHOTOS = "photos",
  EVENTS = "events",
}

export type NavigationItem = {
  link: NavigationLinks;
  image: string;
};

export const navigationList: NavigationItem[] = [
  {
    link: NavigationLinks.BAND,
    image: "/card_images/band_card.jpg",
  },
  {
    link: NavigationLinks.MUSIC,
    image: "/card_images/music_card.jpg",
  },
  {
    link: NavigationLinks.PHOTOS,
    image: "/card_images/photos_card.jpg",
  },
  {
    link: NavigationLinks.EVENTS,
    image: "/card_images/events_card.jpg",
  },
];
