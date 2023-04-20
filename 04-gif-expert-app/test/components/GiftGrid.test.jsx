const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");

describe('Pruebas en GiftGrid', () => {

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente ', () => {

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando....'));
        expect(screen.getByText(category));
        //screen.debug();

    })
})