import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opción 1")
                await rectangulo()
                break
            case 2:
                console.log("Estoy en opción 2")
                let n1: number
                let n2: number
                n1 =  parseInt( await leerTeclado('Dame la base')) 
                n2 =  parseInt( await leerTeclado('Dame la altura'))
                console.log(`El resultado es: ${triangulo(n1, n2)}`)
                break
            case 3:
                console.log("Estoy en opción 3")
                await cuadrado()
                break
            case 4:
                console.log("Estoy en opción 4")
                await circulo()
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const rectangulo = async () => {
    let n1: number
    let n2: number
    n1 =  parseInt( await leerTeclado('Dame un lado')) 
    n2 =  parseInt( await leerTeclado('Dame el otro lado'))
    console.log(`El area es ${n1 * n2}`)
}

const triangulo = (n1: number, n2: number): number => n1 * n2 /2

const cuadrado = async () => {
    let n1: number
    n1 =  parseInt( await leerTeclado('Dame un lado')) 
    console.log(`El area es ${n1 ** 2}`)
}

const circulo = async () => {
    let n1: number
    let n2: number
    n2 =  parseInt( await leerTeclado('Dame el radio')) 
    console.log(`El area es ${3.14 * n2 ** 2}`)
}

main()



