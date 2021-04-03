import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:20,
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 0 20px 0 rgb(0 0 0 / 10%)',
    backgroundColor: '#ffffff'
  },
  media: {
    height: 250,
    backgroundSize: 'cover'
  },
});

export default function ProductCard({product,addProductsToCart}) {
  const classes = useStyles();

  const addToCart = (product) => {
    addProductsToCart(product)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
              <sup style={{color:'red',fontSize:'20px'}}><sup>&#x20b9;</sup> {product.discount_price}</sup> <span style={{fontSize:'12px',textDecoration: 'line-through'}}>&#x20b9; {product.actual_price}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
               FREE Delivery by Decathlon
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
            type='submit'
            variant='contained'
            className='submitButton'
            fullWidth
            color='primary'
            onClick={() => addToCart(product)}
            >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
