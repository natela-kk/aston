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
