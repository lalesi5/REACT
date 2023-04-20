import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories( categories =>  [inputValue, ...categories]);
        onNewValue(inputValue.trim());
        setInputValue('');

    }

    return (

        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                //onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}
