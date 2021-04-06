import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Products.module.scss';
import Product from './Product'

const Products = ({products}) => {
    return (
        <Grid className={styles.grid_container} container justify='center' spacing={4}>
            {products.map(product => {
                return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            )})}
        </Grid>
    )
}

export default Products