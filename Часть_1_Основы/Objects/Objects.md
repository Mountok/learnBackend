###### [Home][домой]/объекты

# Тема: Объекты

Как мы знаем из главы Типы данных, в JavaScript существует 8 типов данных. Семь из них называются «примитивными», так как содержат только одно значение (будь то строка, число или что-то другое).

Объекты же используются для хранения коллекций различных значений и более сложных сущностей. В JavaScript объекты используются очень часто, это одна из основ языка. Поэтому мы должны понять их, прежде чем углубляться куда-либо ещё.

Объект может быть создан с помощью фигурных скобок ```{…}``` с необязательным списком свойств. Свойство – это пара «ключ: значение», где ```ключ``` – это строка (также называемая «именем свойства»), а ```значение``` может быть чем угодно.

Мы можем представить объект в виде ящика с подписанными папками. Каждый элемент данных хранится в своей папке, на которой написан ключ. По ключу папку легко найти, удалить или добавить в неё что-либо.

<svg xmlns="http://www.w3.org/2000/svg" width="176" height="183" viewBox="0 0 176 183"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="combined" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="object.svg"><path fill="#232529" d="M0 0h176v183H0z"/><path id="Rectangle-4-Copy" fill="#4b4e65" stroke="#4b4e65" stroke-width="4" d="M134.063 113l16.667 20H20.27l16.667-20h97.126z" opacity=".5"/><g id="Group-2" transform="translate(33 6)"><g id="Group"><path id="Rectangle-7" fill="#232529" d="M0 0h32v124H0z"/><path id="Combined-Shape" fill="#4b4e65" d="M32 0v124H0V0h32zM16.5 100a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM28 5H4v87h24V5z"/></g><text id="key1" fill="#7a7f9c" font-family="PTMono-Bold, PT Mono" font-size="16" font-weight="bold" transform="rotate(-90 15.5 47.5)"><tspan x="-3.7" y="52.5">key1</tspan></text></g><g id="Group-2-Copy" transform="translate(70 6)"><g id="Group"><path id="Rectangle-7" fill="#232529" d="M0 0h32v124H0z"/><path id="Combined-Shape" fill="#4b4e65" d="M32 0v124H0V0h32zM16.5 100a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM28 5H4v87h24V5z"/></g><text id="key2" fill="#7a7f9c" font-family="PTMono-Bold, PT Mono" font-size="16" font-weight="bold" transform="rotate(-90 15.5 47.5)"><tspan x="-3.7" y="52.5">key2</tspan></text></g><g id="Group-2-Copy-2" transform="translate(107 6)"><g id="Group"><path id="Rectangle-7" fill="#232529" d="M0 0h32v124H0z"/><path id="Combined-Shape" fill="#4b4e65" d="M32 0v124H0V0h32zM16.5 100a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM28 5H4v87h24V5z"/></g><text id="key3" fill="#7a7f9c" font-family="PTMono-Bold, PT Mono" font-size="16" font-weight="bold" transform="rotate(-90 15.5 47.5)"><tspan x="-3.7" y="52.5">key3</tspan></text></g><path id="Rectangle-4" fill="#252732" stroke="#4b4e65" stroke-width="4" d="M18 127h135v50H18z"/><path id="Rectangle-8" stroke="#4b4e65" stroke-width="3" d="M73.5 147.5h25v10h-25z"/></g></g></svg>

Пустой объект («пустой ящик») можно создать, используя один из двух вариантов синтаксиса:
```javascript
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"
```
<svg xmlns="http://www.w3.org/2000/svg" width="248" height="92" viewBox="0 0 248 92"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="combined" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="object-user-empty.svg"><path fill="#232529" d="M0 0h248v92H0z"/><path id="Rectangle-4-Copy" fill="#4b4e65" stroke="#4b4e65" stroke-width="4" d="M221.063 12l16.667 20H107.27l16.667-20h97.126z" opacity=".5"/><path id="Rectangle-4" fill="#252732" stroke="#4b4e65" stroke-width="4" d="M105 26h135v50H105z"/><path id="Rectangle-8" stroke="#4b4e65" stroke-width="3" d="M160.5 46.5h25v10h-25z"/><text id="empty" fill="#82807f" font-family="OpenSans-Regular, Open Sans" font-size="14" font-weight="normal"><tspan x="153" y="22">пусто</tspan></text><text id="user" fill="#7a7f9c" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="4" y="56">user</tspan></text><path id="Line-8" fill="#7a7f9c" fill-rule="nonzero" d="M70.5 42l19 9.5-19 9.5v-8H44v-3h26.5v-8z"/></g></g></svg>

Обычно используют вариант с фигурными скобками ```{...}```. Такое объявление называют литералом объекта или литеральной нотацией.

### Литералы и свойства

При использовании литерального синтаксиса ```{...}``` мы сразу можем поместить в объект несколько свойств в виде пар «ключ: значение»:
```javascript
let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};
```
У каждого свойства есть ключ (также называемый «имя» или «идентификатор»). После имени свойства следует двоеточие ```":"```, и затем указывается значение свойства. Если в объекте несколько свойств, то они перечисляются через запятую.

В объекте ```user``` сейчас находятся два свойства:

1. Первое свойство с именем ```"name"``` и значением ```"John"```.
2. Второе свойство с именем ```"age"``` и значением ```30```.

Можно сказать, что наш объект ```user``` – это ящик с двумя папками, подписанными «name» и «age».

<svg xmlns="http://www.w3.org/2000/svg" width="248" height="173" viewBox="0 0 248 173"><defs><style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}</style></defs><g id="combined" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="object-user.svg"><path fill="#232529" d="M0 0h248v173H0z"/><path id="Rectangle-4-Copy" fill="#4b4e65" stroke="#4b4e65" stroke-width="4" d="M225.063 101l16.667 20H111.27l16.667-20h97.126z" opacity=".5"/><g id="Group-2" transform="translate(142 8)"><g id="Group"><path id="Rectangle-7" fill="#232529" d="M0 0h32v110H0z"/><path id="Combined-Shape" fill="#4b4e65" d="M32 0v110H0V0h32zM16.5 88.71c-4.142 0-7.5 2.978-7.5 6.653 0 3.674 3.358 6.653 7.5 6.653 4.142 0 7.5-2.979 7.5-6.653 0-3.675-3.358-6.653-7.5-6.653zM28 4.435H4v77.178h24V4.435z"/></g><text id="name" fill="#7a7f9c" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold" transform="rotate(-90 15.5 42.859)"><tspan x="-1.3" y="47.359">name</tspan></text></g><g id="Group-2-Copy" transform="translate(179 8)"><g id="Group"><path id="Rectangle-7" fill="#232529" d="M0 0h32v110H0z"/><path id="Combined-Shape" fill="#4b4e65" d="M32 0v110H0V0h32zM16.5 88.71c-4.142 0-7.5 2.978-7.5 6.653 0 3.674 3.358 6.653 7.5 6.653 4.142 0 7.5-2.979 7.5-6.653 0-3.675-3.358-6.653-7.5-6.653zM28 4.435H4v77.178h24V4.435z"/></g><text id="age" fill="#7a7f9c" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold" transform="rotate(-90 14.5 41.653)"><tspan x="1.9" y="46.153">age</tspan></text></g><path id="Rectangle-4" fill="#252732" stroke="#4b4e65" stroke-width="4" d="M109 115h135v50H109z"/><path id="Rectangle-8" stroke="#4b4e65" stroke-width="3" d="M164.5 135.5h25v10h-25z"/><text id="user" fill="#7a7f9c" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="11" y="145">user</tspan></text><path id="Line-8" fill="#7a7f9c" fill-rule="nonzero" d="M77.5 131l19 9.5-19 9.5v-8H51v-3h26.5v-8z"/></g></g></svg>

Мы можем в любой момент добавить в него новые папки, удалить папки или прочитать содержимое любой папки.

Для обращения к свойствам используется запись «через точку»:
```javascript
// получаем свойства объекта:
alert( user.name ); // John
alert( user.age ); // 30
```
Значение может быть любого типа. Давайте добавим свойство с логическим значением:
```javascript
user.isAdmin = true;
```
Для удаления свойства мы можем использовать оператор delete:
```javascript
delete user.age;
```
Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};
```
Последнее свойство объекта может заканчиваться запятой:
```javascript
let user = {
  name: "John",
  age: 30,
}
```
Это называется «висячая запятая». Такой подход упрощает добавление, удаление и перемещение свойств, так как все строки объекта становятся одинаковыми.

### Проверка существования свойства, оператор «in»

В отличие от многих других языков, особенность JavaScript-объектов в том, что можно получить доступ к любому свойству. Даже если свойства не существует – ошибки не будет!

При обращении к свойству, которого нет, возвращается ```undefined```. Это позволяет просто проверить существование свойства:
```javascript
let user = {};

alert( user.noSuchProperty === undefined ); // true означает "свойства нет"
```
Также существует специальный оператор ```"in"``` для проверки существования свойства в объекте.

Синтаксис оператора:
```javascript
"key" in object
```
Пример:
```javascript
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует
```
Обратите внимание, что слева от оператора ```in``` должно быть имя свойства. Обычно это строка в кавычках.

Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:
```javascript
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, имя свойства было взято из переменной key
```
Для чего вообще нужен оператор ```in```? Разве недостаточно сравнения с ```undefined```?

В большинстве случаев прекрасно сработает сравнение с undefined. Но есть особый случай, когда оно не подходит и нужно использовать ```"in"```.

Это когда свойство существует, но содержит значение undefined:
```javascript
let obj = {
  test: undefined
};

alert( obj.test ); //  выведет undefined, значит свойство не существует?
alert( "test" in obj ); // true, свойство существует!
```
В примере выше свойство ```obj.test``` технически существует в объекте. Оператор ```in``` сработал правильно.

Подобные ситуации случаются очень редко, так как undefined обычно явно не присваивается. Для «неизвестных» или «пустых» свойств мы используем значение ```null```.

### Цикл "for..in"
Для перебора всех свойств объекта используется цикл ```for..in```. Этот цикл отличается от изученного ранее цикла ```for(;;)```.

Синтаксис:
```javascript
for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}
```
К примеру, давайте выведем все свойства объекта ```user```:
```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}
```
Обратите внимание, что все конструкции «for»     позволяют нам объявлять переменную внутри цикла, как, например, ```let key``` здесь.

Кроме того, мы могли бы использовать другое имя переменной. Например, часто используется вариант ```"for (let prop in obj)"```.


[домой]: ../../README.md 'Вернуться на начальную страницу'