import React from "react";
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {

    // test('debe hacer match con el snapshot', () => {

    //     const title = 'Hola lales';
    //     const { container } = render(<FirstApp title={title} />);

    //     expect(container).toMatchSnapshot();

    // });

    test('debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, lales';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-id').innerHTML).toContain(title);
        // const h1 =  container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
    });

    test('debe mostrar el sutbtitulo enviado por props', () => {
        const title = 'Hola, lales';
        const subtitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp 
            title={title} 
            subtitle={subtitle}
            />
        );
        expect(getByText(subtitle)).toBeTruthy();

    })

});