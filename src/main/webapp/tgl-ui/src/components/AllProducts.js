import React, { useState, useEffect } from 'react';
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import Product from "./Product";

const AllProducts = () => {

    useEffect(() => {
        document.title = "all products";
    }, []);

    //function to call server;
    const getAllProductsFromServer = () => {
        axios.get(`${base_url}/products`).then(
            (response) => {
                console.log(response.data);
                toast.success("products has been loaded", {
                    position: "bottom-center",
                });
                setProducts(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllProductsFromServer()
    }, []);

    const [products, setProducts] = useState([])

    return (
        <div>

            <h1>All Products</h1>
            <p>list of products are given:</p>
            {
                products.length > 0
                    ? products.map((item) => <Product key={item.product_id} product={item}/>)
                    : "No products"
            }

        </div>
    );
};

export default AllProducts;