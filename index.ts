//Переменные
let str: any = 'Hello, world!'
let num: number = 42
let isActive: boolean = false

let strArray: string[] = ['H', 'e', 'l']
let numArray: Array<number> = [1, 1, 2, 3]

//Функции
function logInfo(name: string, age: number): void {
    console.log(`Info: ${name}, ${age}`)
}

logInfo('Paul', 25)

function calc(a: number, b: number): number {
    return a + b
}

console.log(calc(2, 5))

//Классы
class Server {
    static VERSION = '1.0.3'

    private status: string = 'working'

    constructor(public name, protected ip) {
    }

    public turnOn() {
        this.status = 'working'
    }

    protected turnOff() {
        this.status = 'offline'
    }

    public getStatus(): string {
        return this.status
    }
}

const server: Server = new Server('AWS', 1234)

//Объекты
interface UserInterface {
    name: string
    age: number
    logInfo: () => void
    id?: any
}

const user = {
    name: 'Paul',
    age: 25,
    logInfo() {
        console.log(this.name + ' ' + this.age)
    }
}

//Интерфейсы и классы
interface SayHello {
    sayHello: () => void
}

class User implements SayHello{
    constructor(private name: string, private age: number) {}

    sayHello() {
        console.log(this.name + ' Hello!')
    }
}

//const arr: Array<number> = [1, 2, 3, 4]

interface User {
    id: number
    name: string
    age: number
}

const users: Array<any> = [
    {id: 1, name: 'V', age: 2},
    {id: 2, name: 'E', age: 23}
]