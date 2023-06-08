// 1) Алгоритмы сортировок: сортировка пузырьком, шейкерная сортировка, сортировка расческой, сортировка вставками, сортировка выбором, пирамидальная сортировка, быстрая сортировка.

// 3.1) Создать объект Person несколькими способами

const Person = {
    name: 'Vlad',
    sayHi() {
        console.log(`${this.name} says hi`)
    }
}

function PersonProto() {
    this.name = 'Vlad'
}

PersonProto.prototype.sayHi = function () {
    console.log(`${this.name} says hi`)
}

const PersonProtoInstant = new PersonProto();

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} says hi`)
    }
}

const PersonClassInstant = new PersonClass('Vlad');


// Cоздать объект Person2, чтобы в нём были доступны методы объекта Person

const Person2_1 = Object.create(Person);

const Person2_2 = {};
Object.setPrototypeOf(Person2_2, Person);

class Person2Class extends PersonClass {
    constructor(name) {
        super(name)
        this.surname = 'Ivanov'
    }
}

const Person2_3 = new Person2Class('Vlad');

// Добавить метод logInfo чтоб он был доступен всем объектам

Person.logInfo = function (login) {
    this.login = login;
}

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree {
    #surname;

    constructor(name) {
        this.name = name;
    }
    get surname() {
        return this.#surname;
    }
    set surname(newSurname) {
        this.#surname = newSurname;
    }
}

class PersonThreePro extends PersonThree {
    constructor(name) {
        super(name);
        this.greeting = `Hello, ${name}`
    }
}

// БОНУС: 
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

// Сложность O(n²)
const firstSum = (arr, total) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) return [arr[i], arr[j]]
        }
    }
}

firstSum(arr, total)

// Сложность O(n*log(n))
// для сортированных массивов
const firstSum2 = (arr, total) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] + arr[end] === total) return [arr[start], arr[end]];
        else if (arr[start] + arr[end] < total) {
            start++;
        }
        else if (arr[start] + arr[end] > total) {
            end--;
        }
    }
    return null;
}

firstSum2(arr, total)

// Сложность O(2n)
const firstSum3 = (arr, total) => {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    for (let i = 0; i < arr.length; i++) {
        if (map.has(total - arr[i])) return [arr[i], total - arr[i]]
    }
    return null;
}

firstSum3(arr, total)
