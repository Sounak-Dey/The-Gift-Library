import React, { useState, useEffect } from 'react';
import Category from "./Category";
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';

const AllCategories = () => {

    useEffect(() => {
        document.title = "all categories";
    }, []);

    //function to call server;
    const getAllCategoriesFromServer = () => {
        axios.get(`${base_url}/categories`).then(
            (response) => {
                console.log(response.data);
                toast.success("categories has been loaded", {
                    position: "bottom-center",
                });
                setCategories(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllCategoriesFromServer()
    }, []);

    const [categories, setCategories] = useState([])

    return (
        <div>

            <h1>All Categories</h1>
            <p>list of categories are given:</p>
            {
                categories.length > 0
                    ? categories.map((item) => <Category key={item.category_id} category={item}/>)
                    : "No categories"
            }

        </div>
    );
};

export default AllCategories;