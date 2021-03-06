import brazilFront from './images/brazil.jpg';
import brazilBlue from './images/brazilblue.jpg';
import bryantBack from './images/bryant.jpg';
import bryantFront from './images/bryant2.jpg';
import bryantPurple from './images/bryantpurple.webp';

var products = [
  {
    id: 'f1f940ce-f1c8-47cd-9ddf-cb5e29b97521',
    slug: "laker's-kobe-bryant-24-jersey",
    title: "Laker's Kobe Bryant 24 jersey",
    primaryImage: [
      {
        color: 'white',
        URLs: [
          {
            large: bryantBack,
            medium: bryantBack,
            small: bryantBack,
            thumbnail: bryantBack,
          },
          {
            large: bryantFront,
            medium: bryantFront,
            small: bryantFront,
            thumbnail: bryantFront,
          },
        ],
      },
      {
        color: 'purple',
        URLs: [
          {
            large: bryantPurple,
            medium: bryantPurple,
            small: bryantPurple,
            thumbnail: bryantPurple,
          },
        ],
      },
    ],
    pricing: {
      compareAtPrice: null,
      currency: { code: 'GHS' },
      displayPrice: '200.00',
    },
  },
  {
    id: 'f1f940ce-f1c8-47cd-9ddf-cb5e29b97522',
    slug: 'brazil-nike-home-jersey-2014',
    title: 'Brazil Nike Home Jersey 2014',
    primaryImage: [
      {
        color: 'yellow',
        URLs: [
          {
            large: brazilFront,
            medium: brazilFront,
            small: brazilFront,
            thumbnail: brazilFront,
          },
        ],
      },
      {
        color: 'blue',
        URLs: [
          {
            large: brazilBlue,
            medium: brazilBlue,
            small: brazilBlue,
            thumbnail: brazilBlue,
          },
        ],
      },
    ],
    pricing: {
      compareAtPrice: null,
      currency: { code: 'GHS' },
      displayPrice: '150.00',
    },
  },
];

export default products;
