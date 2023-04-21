
export const Quote = ({name, image, species, status}) => {
    return (
        <blockquote className="blockquote text-center">
            <h1 className="mb-1">{name}</h1>
            <img src={image} alt="texto" />
            <p className="mb-1">{species}</p>
            <footer className="blockquote-footer">{status}</footer>
        </blockquote>
    )
}
