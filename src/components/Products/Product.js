import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

const Product = ({product}) => {
    return (
        <>
            <div>{product.title}</div>
            <div>{product.price}</div>
        </>
    )
}

export default Product