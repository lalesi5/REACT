import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Alex2',
        email: 'acarrera@inspi.gob.ec',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
        // console.log('Efecto lanzado');
    }, []);
    useEffect(() => {
        // console.log('formState lanzado');
    }, [formState]);
    useEffect(() => {
        // console.log('email lanzado');
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="lales@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'Alex') && <Message/>
            }
        </>
    )
}
