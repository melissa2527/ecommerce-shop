import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import styles from './Navbar.module.scss';

const Navbar = ({total}) => {
    return (
        <div>
            <AppBar position='fixed' className={styles.appbar}>
                <Toolbar className={styles.nav}>
                    <Typography variant='h6' className={styles.title}>
                        <img className={styles.image} src='../img/logo.png' alt='Eshop' height={25}/>
                        Eshop
                    </Typography>
                    <div className={styles.grow}></div>
                    <div className={styles.button}>
                        <IconButton aria-label='Show cart items'>
                            <Badge badgeContent={total}>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
