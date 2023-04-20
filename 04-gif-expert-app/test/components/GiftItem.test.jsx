import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"


describe('Pruebas en <GiftItem/>', () => {

    const title = 'Lales';
    const url = 'https://askldjalkd.com/asd.jpg'

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GiftItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe demostrar la imagen con el URL y ALT indicado', () => {
        render(<GiftItem title={title} url={url} />);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        //console.log(screen.getByRole('img').src);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('debe de mostrar el titulo en el componente', () => {

        render(<GiftItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })

})