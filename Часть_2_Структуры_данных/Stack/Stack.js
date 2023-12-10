function Stack() {
    this.count = 0 // размер стека
    this.storage = {} // память стека

    this.push = function(value) { // функц. добавления
        this.storage[this.count] = value
        this.count++
    }

    this.pop = function() { // функция удаляет верхний элемент и возвращает его
        if (this.count === 0) return undefined
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.peek = function() { // функция просто возвращает верхний элемент
        return this.storage[this.count - 1]
    }

    this.size = function() { // функция возвращает кол. элементов в стеке
        return this.count
    }
}

// Присваваем константе функцию
const stack = new Stack();

// Заполняем наш стек
stack.push('Купить хлеб')
stack.push('Сделать уроки')
stack.push('Погулят')
stack.push('Тренировка')

// Удалить верхний эелемент и вернуть
console.log('Удалить верхний эелемент и вернуть:', stack.pop())

// Вернуть верхний элемент в стеке
console.log('Вернуть верхний элемент в стеке:', stack.peek())

// Вернуть кол. элеиентов в стеке
console.log('Вернуть размер стека: ', stack.size())

// Вернуть содержание стека
console.log('Вернуть содержание стека: ', stack.storage)