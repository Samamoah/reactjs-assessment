import withRoot from '../../../modules/withRoot';
import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalState';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 40px',
  },
  orderAmount: {
    textAlign: 'right',

    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 700,
    color: 'black',
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
    marginBottom: 10,
    color: '#002b5c',
  },
  button: {
    background: 'rgb(0, 43, 92)',
    color: 'white',
    padding: 8,
    width: '80%',
    display: 'block',
    margin: '20px auto 0px',
    borderRadius: '0',
    fontWeight: 700,
    fontSize: 12,
    '&:hover': {
      background: 'rgb(0, 43, 92)',
    },
  },
  deleteButton: {
    color: '#f03d3e',
    marginTop: '30px',
    padding: 0,
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
  subTotal: {
    fontSize: 16,
    lineHeight: '22px',
    color: 'black',
  },
  productName: {
    fontSize: 20,
    lineHeight: '24px',
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
    textAlign: 'right',
  },
  key: {
    fontSize: 12,
    lineHeight: '16px',
    color: 'black',
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: '24px',
    marginBottom: 15,
    fontWeight: 600,
    color: 'black',
  },
  input: {
    marginBottom: 15,
    '&:input': {
      padding: 10,
    },
  },
  underline: {
    padding: 10,
  },
}));

function Index() {
  const classes = useStyles();

  const { cart } = useContext(GlobalContext);

  if (Boolean(cart.length < 1)) {
    return <Redirect to={`/`} />;
  }

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
              <Typography className={classes.text}>Checkout</Typography>
            </Grid>
          </div>
          <Grid style={{ marginTop: '15px' }} container spacing={4}>
            <Grid item xs={8}>
              <div className={classes.head}>
                <Typography className={classes.title}>Checkout</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Grid container direction="column">
                <div style={{ width: '85%', marginBottom: '20px' }}>
                  <Typography className={classes.sectionTitle}>
                    Customer Information
                  </Typography>
                  <Input
                    classes={{ root: classes.input, input: classes.underline }}
                    fullWidth
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div style={{ width: '85%' }}>
                  <Typography className={classes.sectionTitle}>
                    Shipping Information
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="First Name"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="Last Name"
                        type="text"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xs={8}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="Address"
                        type="address"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="Apt, suite"
                        type="text"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="City"
                        type="city"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xs={4}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="Country"
                        type="country"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="State"
                        type="state"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="Zip Code"
                        type="text"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Input
                        classes={{
                          root: classes.input,
                          input: classes.underline,
                        }}
                        fullWidth
                        placeholder="Phone"
                        type="phone"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.order}>
                <Typography className={classes.totalTitle}>Order</Typography>

                <Grid
                  container
                  style={{ marginTop: '10px' }}
                  justify="space-between"
                >
                  <Typography className={classes.amount}>Product</Typography>
                  <Typography className={classes.amount}>Amount</Typography>
                </Grid>
                <Divider style={{ margin: '5px 0' }} />
                {cart.length > 0 &&
                  cart.map((item) => {
                    var total = item.price * item.quantity;
                    return (
                      <Grid
                        container
                        style={{ marginTop: '5px' }}
                        spacing={3}
                        justify="space-between"
                      >
                        <Grid item xs={3}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '100%' }}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <div className={classes.orderName}>{item.name}</div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className={classes.orderAmount}>
                            GH¢ {total.toFixed(2)}
                          </div>
                        </Grid>
                      </Grid>
                    );
                  })}
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Sub Total</Typography>
                  <Typography className={classes.subTotal}>
                    GH¢ {totalset ? totalset.toFixed(2) : 0.0}
                  </Typography>
                </Grid>
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Shipping</Typography>
                  <Typography className={classes.subTotal}>GH¢ 0</Typography>
                </Grid>
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Tax</Typography>
                  <Typography className={classes.subTotal}>GH¢ 0</Typography>
                </Grid>
                <Grid
                  container
                  style={{ margin: '10px 0' }}
                  justify="space-between"
                >
                  <Typography className={classes.key}>Coupon</Typography>
                  <Input type="text" />
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
              </div>
              <Button fullWidth className={classes.button}>
                Place Order
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Index);
