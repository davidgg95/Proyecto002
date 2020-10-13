import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Rectangulo')
    console.log('2.- Triangulo')
    console.log('3.- Cuadrado')
    console.log('4.- Circulo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}