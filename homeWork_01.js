// 1 Создание объекта

// Литеральная нотация
const counter = {
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--;
    }
}

// new Object()
const counter1 = new Object({
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--;
    }
});

// Object.create()
const counter2 = Object.create({
    value: 0,
}, {
    increase: {
        value: function () { this.value++ },
        writable: false,
        configurable: true,
        enumerable: false,
    },
    decrease: {
        value: function () { this.value-- },
        writable: false,
        configurable: true,
        enumerable: false,
    }
})

// Object.assign()
const sourceObj = {
    increase() {
        this.value++;
    },
    decrease() {
        this.value--;
    }
}

const counter3 = Object.assign({ value: 0 }, sourceObj);

// функция конструктор
function MyObj() {
    this.value = 0;
    this.increase = function () {
        this.value++;
    };
    this.decrease = function () {
        this.value--;
    }
}

const counter4 = new MyObj();

// класс
class MyClass {
    constructor(value) {
        this.value = value;
    }
    increase = function () {
        this.value++;
    }
    decrease = function () {
        this.value--;
    }
}

const counter5 = new MyClass(0);


// 2 Копирование объекта
const objToCopy = {
    value: 0,
    operations: {
        increase() {
            this.value++;
        },
        decrease() {
            this.value--;
        }
    }
}

// цикл for...in
const counter6 = {};

for (key in objToCopy) {
    counter6[key] = objToCopy[key]
}


// Object.assign()
const counter7 = Object.assign({}, objToCopy);


// spread оператор
const counter8 = { ...objToCopy };


// глобальный метод structuredClone
const obj = { value: 0 }
const counter9 = structuredClone(obj);

// _.cloneDeep(obj) из lodash
const counter10 = _.cloneDeep(objToCopy);

// JSON.stringify + JSON.parse
const counter11 = JSON.parse(JSON.stringify(objToCopy));

// рекурсия
function cloneDeep(obj) {
    if (typeof obj !== 'object') return obj;

    let clone = Array.isArray(obj) ? [] : {};

    Object.keys(obj).forEach((key) => (clone[key] = cloneDeep(obj[key])));

    return clone;
}

const counter12 = cloneDeep(objToCopy);

// паттерн prototype
class MyPrototypeClass {
    constructor(value) {
        this.value = value;
    }
    increase = function () {
        this.value++;
    }
    decrease = function () {
        this.value--;
    }
    produce() {
        return new MyPrototypeClass(this.value);
    }

}

const counterPrototype = new MyPrototypeClass(0);
const counter13 = counterPrototype.produce();

// 3 Создание функции

// FD
function makeCounter() {
    return { value: 0 };
}

// FE
const makeCounter = function () {
    return { value: 0 };
}

// Arrow Function
const makeCounter = () => 0;

const makeCounter = () => {
    return { value: 0 };
}

// NFE
const makeCounter = function makeCounterInner(value) {
    if (value >= 0) {
        alert(`Your score is ${value}`)
    } else {
        makeCounterInner(0);
    }
}

//anonymus function
const arr = [1, 2, 3];
const newArr = arr.map(i => i * 2);

// callback function
const makeCounter = (value) => {
    console.log(`Your score is ${value}`)
}

const randomFunction = (callback) => {
    const score = Math.floor(Math.random() * 10);
    callback(score);
}

randomFunction(makeCounter);

// constructor function
function MyConstructor(value) {
    this.value = value;
    this.increase = function () {
        this.value++;
    };
    this.decrease = function () {
        this.value--;
    }
}

const makeCounter = new MyConstructor(10);

// IIFE
(function () {
    console.log('IIFE invoked')
}())

// higher-order function
function makeCounter() {
    const count = 1;
    return function () {
        return count * 2;
    }
}

// Бонус задание 1
// Функция глубокого сравнения двух объектов
function compareDeep1(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function compareDeep2(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) return false
    for (key in obj1) {
        if (typeof obj1[key] === 'object' && !compareDeep2(obj1[key], obj2[key])) return false
        else if (typeof obj1[key] === 'function') {
            if (obj1[key].toString() !== obj2[key].toString()) return false
        }
        else if (obj1[key] !== obj2[key]) return false
    }
    return true;
}

// Бонус Задание 2
// Развернуть строку в обратном направлении при помощи методов массивов

function reverseStr(str) {
    return str.split('').reverse().join('');
}
