import { useState } from "react"
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState([]);

    const onAddCategoy = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setcategories([...categories, newCategory]);

    };

    return (
        <>
            <h1>Gif expert app</h1>
            <AddCategory onNewCategory={(value) => onAddCategoy(value)}></AddCategory>

            {
                categories.map(category => {
                    return (
                        <GifGrid key={category} category={category}></GifGrid>
                    )
                })
            }

        </>

    )
}

