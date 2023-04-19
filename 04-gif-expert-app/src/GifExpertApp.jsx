import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCaterory) => {

        if (categories.includes(newCaterory)) return;
        //console.log(newCaterory);
        setCategories([newCaterory,...categories ]);
        // setCategories(cat => [...cat, nuevoValor]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewValue={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
