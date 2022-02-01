import { getGifs } from "../../helpers/getGIF.JS";

describe("Pruebas con getGifs Fetch", () => {
    test('Debe de traer 10 elementos', async () => {
      const gifs = await getGifs("The simpsons");
      expect(gifs).toHaveLength(10);
    });

    test('Debe de traer un arreglo vacío', async () => {
        const gifs = await getGifs("");
        expect(gifs).toHaveLength(0);
      });
})