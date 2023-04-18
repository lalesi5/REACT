import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas CounterApp', () => {

    test('debe hacer match con el snapshot', () => {

        const value = 100;

        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();

    });

    test('debe demostrar el valor inicial es 100', () => {

        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();

    });

    test('debe incrementar con el boton de +1', () => {

        render(<CounterApp value={100} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();

    });

    test('debe decrementar con el boton de -1', () => {

        render(<CounterApp value={100} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();

    });

    test('debe decrementar con el boton de -1', () => {

        render(<CounterApp value={200} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('200')).toBeTruthy();

    });

})