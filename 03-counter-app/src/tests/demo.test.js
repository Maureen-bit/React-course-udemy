describe( 'Pruebas en el archivo demo.test.js', () => {
    test('deben ser iguales los string', () =>{

        // 1. Inicialización
        const mensaje = 'Hola Mundo';

        // 2. Estímulo
        const mensajeDos = `Hola Mundo`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensajeDos);
    })
})