import Image from './images/bryant.jpg';
import Image1 from './images/brazil.jpg';

var products = [
  {
    slug: 'f1f940ce-f1c8-47cd-9ddf-cb5e29b97521',
    title: "Laker's Kobe Bryant 24 jersey",
    primaryImage: {
      color: 'white',
      URLs: {
        large: Image,
        medium: Image,
        small: Image,
        thumbnail: Image,
      },
    },
    pricing: {
      compareAtPrice: null,
      currency: { code: 'GHS' },
      displayPrice: '200.00',
    },
  },
  {
    slug: 'f1f940ce-f1c8-47cd-9ddf-cb5e29b97522',
    title: 'Brazil Nike Home Jersey 2014',
    primaryImage: {
      color: 'yellow',
      URLs: {
        large: Image1,
        medium: Image1,
        small: Image1,
        thumbnail: Image1,
      },
    },
    pricing: {
      compareAtPrice: null,
      currency: { code: 'GHS' },
      displayPrice: '200.00',
    },
  },
];

export default products;
