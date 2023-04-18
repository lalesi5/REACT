import React from 'react';
import PropTypes from 'prop-types';

// const getValue = () => {
//     return 4+4;
// }

export const FirstApp = ({title, subtitle, name}) => {

// console.log(props);

    return (
        <>
            <h1 data-testid="test-id">{title}</h1>
            {/* <code>{getValue()}</code> */}
            <h2>{subtitle}</h2>
            <a>{name}</a>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Alex Carrera',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
}