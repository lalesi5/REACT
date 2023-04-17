import PropTypes from 'prop-types';

// const getValue = () => {
//     return 4+4;
// }

export const FirtsApp = ({title, subtitle, name}) => {

// console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/* <code>{getValue()}</code> */}
            <p>{subtitle}</p>
            <a>{name}</a>
        </>
    )
}


FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirtsApp.defaultProps = {
    name: 'Alex Carrera',
    subtitle: 124,
    title: 'No hay titulo',
}