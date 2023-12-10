function Queue() {
    let collection = []

    this.print = function() {
        console.log(collection)
    }

    this.enqueue = function(element) {
        collection.push(element)
    }

    this.dequeue = function() {
        return collection.shift()
    }

    this.front = function() {
        return collection[0]
    }

    this.isEmpty = function() {
        return collection.length === 0
    }

    this.size = function() {
        return collection.length
    }
}

const marketQueue = new Queue();

// Добавление в очередь
marketQueue.enqueue('Alex')
marketQueue.enqueue('Martin')
marketQueue.enqueue('Steve')

// Просмотр очереди
marketQueue.print()

// Удалить первый эдемент из очередь
marketQueue.dequeue()

marketQueue.print()

// Получить первый элемент в очереди
console.log(marketQueue.front())

// Проверка пуста ли очередь
console.log(marketQueue.isEmpty())

// Получить размер очереди
console.log(marketQueue.size())