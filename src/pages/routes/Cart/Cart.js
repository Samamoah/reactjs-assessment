import withRoot from '../../../modules/withRoot';
import React, { useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useHistory, Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Delete from '@material-ui/icons/DeleteOutline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { GlobalContext } from '../../../context/GlobalState';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classnames from 'classnames';

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
  head: {
    // marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '40px',
    color: '#002b5c',
  },
  button: {
    background: 'rgb(0, 43, 92)',
    color: 'white',
    padding: 8,
    borderRadius: '0',
    fontWeight: 700,
    marginTop: 20,
    fontSize: 12,
    '&:hover': {
      background: 'rgb(0, 43, 92)',
    },
    '&:disabled': {
      background: 'lightgray',
      opacity: '0.8',
      color: 'white',
    },
  },
  deleteButton: {
    color: '#f03d3e',
    marginTop: '10px',
    textTransform: 'capitalize',
    padding: '3px 5px 3px 3px',
    justifyContent: 'flex-start',
    fontSize: 14,
    borderRadius: '0',
  },
  price: {
    fontSize: 16,
    lineHeight: '22px',
    textAlign: 'center',
    color: 'black',
  },
  totalPrice: {
    fontSize: 16,
    lineHeight: '22px',
    textAlign: 'center',
    fontWeight: 700,
    color: 'black',
  },
  tableTitle: {
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 700,
    color: 'black',
  },
  amount: {
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 700,
    color: 'black',
  },
  productName: {
    fontSize: 17,
    lineHeight: '20px',
    color: '#333333',
  },
  order: {
    padding: '20px',
    width: '80%',
    margin: 'auto',
    background: '#EEEEF0',
  },
  totalTitle: {
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 600,
    color: 'black',
  },
  key: {
    fontSize: 12,
    lineHeight: '16px',
    color: 'black',
  },
}));

function CartItem({ item }) {
  const classes = useStyles();
  const [counter, setCounter] = useState(item.quantity);

  const { deleteFromCart, updateCartItem } = useContext(GlobalContext);

  const amount = item.price * counter;

 
  var handleIncrement = () => {
    var newCounter = counter + 1
    setCounter(newCounter);
    updateCartItem(item, newCounter);
  };

  
  var handleDecrement = () => {
    if (counter > 1) {
      
    var newCounter = counter - 1
      setCounter(newCounter);
      updateCartItem(item, newCounter);
    }
  };
  return (
    <Grid container style={{ marginBottom: '40px' }} spacing={0}>
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <img src={item.image} alt={item.name} style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              spacing={0}
              justify="space-between"
              direction="column"
            >
              <Link to={`/${item.slug}`} className={classes.productName}>
                {item.name}
              </Link>
              <div>
                <Button
                  className={classes.deleteButton}
                  onClick={() => {
                    deleteFromCart(item.slug);
                  }}
                >
                  {' '}
                  <Delete /> Remove
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <div className={classes.price}>GH¢ {item.price}</div>
      </Grid>

      <Grid item xs={2}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button disabled={counter === 1} onClick={handleDecrement}>
            -
          </Button>

          <Button>{counter}</Button>
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
      </Grid>

      <Grid item xs={2}>
        <div className={classes.totalPrice}>GH¢ {amount.toFixed(2)}</div>
      </Grid>
    </Grid>
  );
}

function Index() {
  const classes = useStyles();

  const { cart } = useContext(GlobalContext);

  const history = useHistory();

  if (cart.length > 0) {
    var totalset = cart
      .map((item) => item.price * item.quantity)
      .reduce((a, b) => a + b);
  }

  return (
    <React.Fragment>
      <Container>
        <div className={classnames(classes.main)}>
          <div>
            <Grid container alignItems="center">
              <Typography className={classes.text}>Home</Typography>
              <ChevronRightIcon style={{ width: '20px' }} />
              <Typography className={classes.text}>Cart</Typography>
            </Grid>
          </div>
          <Grid style={{ marginTop: '15px' }} container spacing={4}>
            <Grid item xs={8}>
              <div className={classes.head}>
                <Typography className={classes.title}>My Cart</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Grid container direction="column">
                <Grid container spacing={0}>
                  <Grid item xs={6} className={classes.tableTitle}>
                    Product
                  </Grid>

                  <Grid item xs={2}>
                    <div className={classes.totalPrice}>Price</div>
                  </Grid>

                  <Grid item xs={2}></Grid>

                  <Grid item xs={2}>
                    <div className={classes.totalPrice}>Total Price</div>
                  </Grid>
                </Grid>
                <Divider style={{ margin: '10px 0 15px' }} />
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))
                ) : (
                  <Typography>No items in cart</Typography>
                )}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.order}>
                <Typography className={classes.totalTitle}>
                  Cart Total
                </Typography>
                <Divider style={{ margin: '5px 0' }} />
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Sub Total</Typography>
                  <Typography className={classes.amount}>
                    GH¢ {totalset ? totalset.toFixed(2) : 0.0}
                  </Typography>
                </Grid>
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Tax</Typography>
                  <Typography className={classes.amount}>GH¢ 0</Typography>
                </Grid>
                <Divider style={{ margin: '5px 0' }} />
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Total</Typography>
                  <Typography className={classes.amount}>
                    GH¢ {totalset ? totalset.toFixed(2) : 0.0}
                  </Typography>
                </Grid>
                <Button
                  disabled={cart.length < 1}
                  fullWidth
                  className={classes.button}
                  onClick={() => {
                    history.push('/checkout');
                  }}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Index);
