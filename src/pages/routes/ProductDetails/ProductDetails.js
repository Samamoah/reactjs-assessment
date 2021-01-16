import React, { useState, useContext } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Star from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import ImageGallery from 'react-image-gallery';
import _ from 'lodash';

import withRoot from '../../../modules/withRoot';
import { renderItem } from '../../../modules/components/renderers';
import products from '../../../products';
import { GlobalContext } from '../../../context/GlobalState';
import './image-gallery.css';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 40px',
  },
  main: {
    marginTop: 20,
  },
  text: {
    fontSize: 13,
  },
  productName: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: '32px',
    color: '#002b5c',
    marginBottom: 10,
  },
  productDiscount: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '18px',
    color: '#1176bb',
    marginBottom: 10,
  },
  amount: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: '25px',
    color: '#002b5c',
    marginBottom: 15,
    marginTop: 10,
  },
  shipping: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '16px',
    color: '#d63855',

    marginBottom: 10,
  },
  shippingAmount: {
    fontSize: 14,
    textTransform: 'uppercase',
    lineHeight: '16px',
    color: '#717171',
    marginLeft: 10,
    marginBottom: 10,
  },
  productReview: {
    fontSize: 13,
    lineHeight: '17px',
    color: '#666666',
    marginBottom: 15,
  },
  productReviewButton: {
    fontSize: 14,
    lineHeight: '18px',
    textDecoration: 'underline',
    color: '#4a4a4a',
    marginBottom: 15,
    marginLeft: 20,
  },
  star: {
    color: 'lightgray',
  },
  color: {
    fontSize: 12,
    lineHeight: '15px',
    color: '#002b5c',
  },
  colorContainer: {
    marginBottom: 30,
  },
  button: {
    background: 'rgb(0, 43, 92)',
    color: 'white',
    width: '80%',
    padding: 10,
    borderRadius: '0',
    fontWeight: 700,
    fontSize: 16,
    '&:hover': {
      background: 'rgb(0, 43, 92)',
    },
  },
  stars: {
    marginBottom: 15,
  },
  productPage: {
    width: '100%',
    '& > div': {
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        padding: '40px 10px 20px 10px',
      },
    },
    '& .image-gallery-slide': {
      // background: colors.alabaster,
    },
    '& .image-gallery-image': {
      textAlign: 'center',
    },
    '& .image-gallery-slide img': {
      borderRadius: '3px',
      maxWidth: 600,
      height: 'auto',
      width: '100%',
    },
    '& .image-gallery-left-nav, & .image-gallery-right-nav': {
      display: 'none',
    },
    '& .image-gallery-slide-wrapper:hover .image-gallery-left-nav, & .image-gallery-slide-wrapper:hover .image-gallery-right-nav': {
      display: 'block',
    },
    '& .image-gallery-swipe': {
      // margin: "30px 0px",
      overflow: 'hidden',
      width: '100%',
      height: 'auto',
      textAlign: 'center',
    },
    '& .image-gallery-thumbnails > .image-gallery-thumbnails-container': {
      // textAlign: "left",
    },
    '& .image-gallery-thumbnails > .image-gallery-thumbnails-container a': {
      '&.active': {
        // borderColor: "#3c5d6f",
        border: 'none',
      },
      '&.active > div': {
        opacity: '1',
        borderColor: 'rgb(0, 43, 92)',
      },
      '& > div': {
        width: '80%',
        maxWidth: '85px',
        margin: '0 auto',
        padding: '8px',
        display: 'block',
        border: '1px solid #DDE2E5',
        background: '#EEEEF0',
      },
      '& > div img': {
        borderRadius: '3px',
        width: '100%',
        height: 'auto',
        textAlign: 'center',
      },
    },
  },
  size: {
    width: '40px',
    height: '40px',
    display: 'flex',
    minWidth: '0px',
    fontWeight: 400,
    borderRadius: '0px',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F7F7F7',
    fontSize: 16,
    marginRight: 10,
  },
  selectedSize: {
    background: '#002B5C',
    color: 'white',
    '&:hover': {
      background: '#002B5C',
    },
  },
  colorButton: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1px',
    borderRadius: '50px',

    border: '1px solid lightgray',
    fontSize: 16,
  },
  colorButtonContainer: {
    border: '2px solid #002B5C',
  },

  colorBtn: {
    borderRadius: '50px',
    marginRight: 5,
  },
}));

function Index() {
  const classes = useStyles();
  const [imageFit] = useState('cover');
  const [size, setSize] = useState('small');
  const [color, setColor] = useState(0);
  const [counter, setCounter] = useState(1);

  const { slug } = useParams();
  const history = useHistory();

  const { addToCart } = useContext(GlobalContext);

  const product = _.find(products, { slug });

  if (Boolean(!product)) {
    return <Redirect to={`/`} />;
  }

  var handleIncrement = () => {
    setCounter(counter + 1);
  };

  var handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  function buy() {
    var cartItem = {
      id: product.id,
      slug: product.slug,
      image: product.primaryImage[color].URLs[0].large,
      color: product.primaryImage[color].color,
      name: product.title,
      price: product.pricing.displayPrice,
      size,
      quantity: counter,
    };
    addToCart(cartItem);
    history.push('/cart');
  }

  function galleryImages(urls) {
    var images = urls.map((image) => ({
      original: image.large,
      thumbnail: image.thumbnail,
    }));

    return images;
  }

  return (
    <React.Fragment>
      <Container>
        <Helmet title={product.title} />
        <div className={classnames(classes.main, classes.productPage)}>
          <div>
            <Grid container alignItems="center">
              <Typography className={classes.text}>Home</Typography>
              <ChevronRightIcon style={{ width: '20px' }} />
              <Typography className={classes.text}>New</Typography>
              <ChevronRightIcon style={{ width: '20px' }} />
              <Typography className={classes.text}>Shirts</Typography>
            </Grid>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <ImageGallery
                thumbnailPosition="left"
                useBrowserFullscreen
                showFullscreenButton={false}
                showPlayButton={false}
                startIndex={0}
                items={galleryImages(product.primaryImage[color].URLs)}
                renderItem={(item) => renderItem(item, imageFit)}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.productName}>
                {product.title}
              </Typography>
              <Typography className={classes.productDiscount}>
                *Not Eligible for Discount
              </Typography>
              <Grid container className={classes.stars}>
                <Star classes={{ root: classes.star }} />
                <Star classes={{ root: classes.star }} />
                <Star classes={{ root: classes.star }} />
                <Star classes={{ root: classes.star }} />
                <Star classes={{ root: classes.star }} />
              </Grid>
              <Grid container>
                <Typography className={classes.productReview}>
                  No Reviews
                </Typography>
                <Typography className={classes.productReviewButton}>
                  Write Reviews
                </Typography>
              </Grid>
              <Grid container>
                <Typography className={classes.shipping}>
                  Free Ground Shipping
                </Typography>
                <Typography className={classes.shippingAmount}>
                  On all orders over GH¢ 125
                </Typography>
              </Grid>
              <Typography className={classes.amount}>
                GH¢ {product.pricing.displayPrice}
              </Typography>
              <Grid container alignItems="center">
                {product.primaryImage.map((image, index) => (
                  <div
                    key={index}
                    className={classnames(
                      classes.colorBtn,
                      index === color && classes.colorButtonContainer
                    )}
                  >
                    <Typography
                      onClick={() => {
                        setColor(index);
                      }}
                      className={classes.colorButton}
                      style={{ background: `${image.color}` }}
                    />
                  </div>
                ))}
              </Grid>
              <Grid container className={classes.colorContainer}>
                <Typography className={classes.color}>Color:</Typography>
                <Typography
                  className={classes.color}
                  style={{ marginLeft: 3, textTransform: 'capitalize' }}
                >
                  {' '}
                  {product.primaryImage[color].color}
                </Typography>
              </Grid>
              <Grid container style={{ marginBottom: '5px' }}>
                <Button
                  className={classnames(
                    classes.size,
                    size === 'small' && classes.selectedSize
                  )}
                  onClick={() => {
                    setSize('small');
                  }}
                >
                  s
                </Button>
                <Button
                  className={classnames(
                    classes.size,
                    size === 'large' && classes.selectedSize
                  )}
                  onClick={() => {
                    setSize('large');
                  }}
                >
                  l
                </Button>
                <Button
                  className={classnames(
                    classes.size,
                    size === 'X large' && classes.selectedSize
                  )}
                  onClick={() => {
                    setSize('X large');
                  }}
                >
                  xl
                </Button>
              </Grid>
              <Grid container className={classes.colorContainer}>
                <Typography className={classes.color}>Size:</Typography>
                <Typography
                  className={classes.color}
                  style={{ marginLeft: 3, textTransform: 'capitalize' }}
                >
                  {' '}
                  {size}
                </Typography>
              </Grid>
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
                style={{ marginBottom: '40px' }}
              >
                <Button disabled={counter === 1} onClick={handleDecrement}>
                  -
                </Button>

                <Button>{counter}</Button>
                <Button onClick={handleIncrement}>+</Button>
              </ButtonGroup>
              <Button fullWidth className={classes.button} onClick={buy}>
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Index);
