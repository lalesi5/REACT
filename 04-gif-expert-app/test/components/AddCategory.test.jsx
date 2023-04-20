import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewValue={() => { }} />);
        //screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        //console.log(input);
        expect(input.value).toBe('Saitama');



    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewValue = jest.fn();

        render(<AddCategory onNewValue={onNewValue} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();
        expect(input.value).toBe('');
        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);
        expect(onNewValue).toHaveBeenCalledWith(inputValue);

    });

    test('no debe llamar el onNewCategory si el input esta vacio', () => {

        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={onNewValue} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewValue).toHaveBeenCalledTimes(0);
        expect(onNewValue).not.toHaveBeenCalled();

    })

})