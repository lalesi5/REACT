const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifts } = require('../../src/hooks/useFetchGifts')


jest.mock('../../src/hooks/useFetchGifts');

describe('Pruebas en GiftGrid', () => {

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente ', () => {

        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando....'));
        expect(screen.getByText(category));
        //screen.debug();

    });


    test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifts ', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitma',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);


    });
})