// 1 Создание объекта

// Литеральная нотация
const count = {
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--;
    }
}

// new Object()
const count1 = new Object({
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--;
    }
});

// Object.create()
const count2 = Object.create({
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
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--;
    }
}

const count3 = Object.assign({}, sourceObj);

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

const count4 = new MyObj();

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

const count5 = new MyClass(0);
