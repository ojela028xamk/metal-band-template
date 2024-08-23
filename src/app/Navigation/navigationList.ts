export enum NavigationLinks {
  BAND = "band",
  MUSIC = "music",
  PHOTOS = "photos",
  EVENTS = "events",
}

type NavigationItem = {
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
    image: "/card_images/band_card.jpg",
    alt: "Image By: Wendy Wei: https://www.pexels.com/fi-fi/kuva/1943411/",
  },
  {
    link: NavigationLinks.PHOTOS,
    image: "/card_images/band_card.jpg",
    alt: "Image By: Wendy Wei: https://www.pexels.com/fi-fi/kuva/1943411/",
  },
  {
    link: NavigationLinks.EVENTS,
    image: "/card_images/band_card.jpg",
    alt: "Image By: Wendy Wei: https://www.pexels.com/fi-fi/kuva/1943411/",
  },
];
