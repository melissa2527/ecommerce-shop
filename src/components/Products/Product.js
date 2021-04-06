import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import styles from './Products.module.scss';
import DescriptionSection from './DescriptionSection';

const Product = ({product}) => {
    return (
        <Card className={styles.root}>
            <CardMedia className={styles.media} image={product.image} alt={product.title} />
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant='h5' gutterBottom style={{marginRight: 10}}>
                        {product.title}
                    </Typography>
                    <Typography variant='h5' >
                        ${product.price}
                    </Typography>
                </div>
                <DescriptionSection description={product.description}/>
            </CardContent>
            <CardActions disableSpacing className={styles.cardAction}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product