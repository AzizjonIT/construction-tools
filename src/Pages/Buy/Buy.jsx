import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Buy = () => {
    const { items, isEmpty } = useCart()

    if (isEmpty) {
        return (
            <React.Fragment>
                salom
            </React.Fragment>
        )
    } else {
        return (
            <React.Component>
                {
                    items.map((item) => {
                        <React.Fragment>
                            <h1>{ item.price}</h1>
                        </React.Fragment>
                    })
                }
            </React.Component>
        )
    }
}

export default Buy

 