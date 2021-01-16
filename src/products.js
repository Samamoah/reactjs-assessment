import Image from './images/bryant.jpg';
import Image1 from './images/brazil.jpg';
import Image2 from './images/brazil2.jpg';
import Image3 from './images/bryant2.jpg';

var products = [
  {
    id: 'f1f940ce-f1c8-47cd-9ddf-cb5e29b97521',
    slug: "laker's-kobe-bryant-24-jersey",
    title: "Laker's Kobe Bryant 24 jersey",
    primaryImage: {
      color: 'white',
      URLs: [
        {
          large: Image,
          medium: Image,
          small: Image,
          thumbnail: Image,
        },
        {
          large: Image3,
          medium: Image3,
          small: Image3,
          thumbnail: Image3,
        },
      ],
    },
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
    primaryImage: {
      color: 'yellow',
      URLs: [
        {
          large: Image1,
          medium: Image1,
          small: Image1,
          thumbnail: Image1,
        },
        {
          large: Image2,
          medium: Image2,
          small: Image2,
          thumbnail: Image2,
        },
      ],
    },
    pricing: {
      compareAtPrice: null,
      currency: { code: 'GHS' },
      displayPrice: '200.00',
    },
  },
];

export default products;
