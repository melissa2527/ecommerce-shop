import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import styles from './Products.module.scss';
import DescriptionSection from './DescriptionSection';

const Product = ({product, onAddToCart}) => {
    console.log(product);
    return (
        // <div>Test</div>
        <Card className={styles.root}>
            <CardMedia className={styles.media} image={product.media.source} alt={product.name} />
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant='h5' gutterBottom style={{marginRight: 10}}>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <DescriptionSection description={product.description}/>
            </CardContent>
            <CardActions disableSpacing className={styles.cardAction}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product