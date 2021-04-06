import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div>
            <AppBar position='fixed' className={StylesProvider.appbar}>
                <Toolbar>
                    <Typography>
                        <img className={styles.image} src={} alt='Eshop' height={25}/>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
