import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroById debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        //console.log(hero);
    });

    test('getHeroById debe retornar un heroe por ID', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
        //console.log(hero);
    });

    test('getHeroesByOwner debe retornar un heroe por owner DC', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(hero).toHaveLength(3);
        expect(hero).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
        expect (hero).toEqual(hero.filter((hero) => hero.owner === owner));
        
    });

    test('getHeroesByOwner debe retornar un heroe por owner Marvel', () => {

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);

        expect(hero).toHaveLength(2);
        //console.log(hero.length);
    });

})