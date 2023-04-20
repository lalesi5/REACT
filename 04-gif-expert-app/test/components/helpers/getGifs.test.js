import { getGifts } from "../../../src/components/helpers/getGifs"

describe('Pruebas en getGifs', () => {

    test('debe retornar un arreglo de gifts', async () => {

        const gifts = await getGifts('One Punch');
        //console.log(gifts);
        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })

})