
// 1) Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

// Потому что массив должен быть неизменным. Для того, чтобы добавить элемент в массив, нужно создать новый массив длиннее старого на 1 элемент, скопировать в него значения старого и последним элементом добавить новое значение. Массивы в JavaScript могут быть динамически изменяемыми, то есть можно добавлять и удалять из начала или конца элементы в процессе выполнения программы. Таким образом массивы в JS могут работать и как очередь, и как стек. В других языках программирования массивы обычно имеют фиксированный размер, который определяется при создании и имеют однородный тип элементов.
// В JS массивы могут хранить элементы любых типов данных, при этом элементы одного и того же массива могут иметь разный тип данных, что не всегда возможно в других языках программирования. 
// В JavaScript массивы являются объектами, что позволяет иметь доступ к элементам массива через объектную нотацию.

// 2)) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// call
logger.call(obj);

// apply
logger.apply(obj);

// bind
logger.bind(obj)();

// Бонус Задание 
// Полифил метода bind
function bindFoo(foo, obj) {
    return function() {
        foo.apply(obj, [...arguments])
    }
}