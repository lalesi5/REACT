import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba en 11-async-await', () => {
    test('getImagen deberia regresar una url de imagen ', async () => {

        const url = await getImagen();
        //console.log(url);
        expect (typeof url).toBe('string')



    })
})