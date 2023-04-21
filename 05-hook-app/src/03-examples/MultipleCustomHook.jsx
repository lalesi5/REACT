import { useCounter,useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${state}`);
    //console.log(data);
    const { name, image, species, status } = !!data && data;

    //console.log(data);

    return (
        <>
            <h1>Pokemon Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote name={name} image={image} species={species} status={status}/>
            }

            <div className="text-center">

                {
                    (state === 1)
                        ? (
                            <button
                                className="btn btn-primary"
                                onClick={decrement}
                                disabled>
                                Anterior Personaje
                            </button>
                        )
                        : (
                            <button
                                className="btn btn-primary"
                                disabled={isLoading}
                                onClick={decrement}>
                                Anterior Personaje
                            </button>)
                }


                <button
                    className="btn btn-primary"
                    onClick={reset}>
                    Reset
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => increment()}>
                    Siguiente Personaje
                </button>
            </div>




        </>
    )
}
