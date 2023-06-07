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
