import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba 06-deses', () => {
    test('usContext debe retornar un objeto', () => {


        const clave = 'adas';
        const edad = 30;


        const getConst = usContext({clave, edad});

        expect(getConst).toEqual({

            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }

        });

    })
})