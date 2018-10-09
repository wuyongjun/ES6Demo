let numbers = [1,2,3,4,5];
// let sum = 0;
// let sumResult = function (number) {
//     sum += number;
// }
// numbers.forEach(sumResult)
// console.log(sum)
let result = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0)
console.log(result);
let primaryColors = [{color: 'red'},{color: 'yellow'},{color: 'blue'}]
let colors = primaryColors.reduce((prev, color) => {
    prev.push(color.color)
    return prev;
}, [])

console.log(colors);
let defaultColors = ['red', 'yellow'];
let favorateColors = ['blue', 'black'];
console.log([...defaultColors, ...favorateColors]);

let image = {
    name: 'girl',
    extension: 'jpg',
    size: 14110
}

let sammary = ({name, extension, size}) => {
    return `${name}.${extension}的总大小为${size}`
}
console.log(sammary(image));
let users = [{name: 'herry', age: 19}, {name: 'mike', age: 20}];
let [{ age }] = users;
console.log(age)
// 源数据
let arr = [
    [1, 40],
    [5, 4],
    [0, 0]
];
// 目标数据
let arr1 = [
    {x: 1, y: 40},
    {x: 5, y: 4},
    {x: 0, y: 0}
]
// let arrResult = arr.map((pair) => {
//     let [x, y] = pair;
//     return {x, y};
// })
let arrResult = arr.map(([x, y]) => {
    return {x, y};
})
console.log(arrResult)

// es6面向对象
class Car {
    constructor ({ title }) {
        this.title = title;
    }
    drive () {
        return 'vroom';
    }
}
let car = new Car({title: 'car'})
console.log(car);
console.log(car.drive());
class Teslar extends Car {
    constructor ({ title, color}) {
        super({ title, color})
        this.color = color;
    }
}
let teslar = new Teslar({color: 'red', title: 'teslar'})
console.log(teslar);
// 斐波那契数列 0 1 1 2 3 5 8 13........
function  fib(max) {
    let a = 0, b = 1, n = 0, arr = [0, 1];
    while (n < max) {
        // 始终改变a的值
        [a, b] = [b, a + b];
        arr.push(b);
        n++;
    }
    return arr;
}
console.log(fib(10));
function* finGeneragtor (max) {
    let a = 0, b = 1, n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return;
}
let f = finGeneragtor(5)
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
for (let val of finGeneragtor(10)) {
    console.log(val);
}

// 自定义生成器
function myIterator (...arr) {
    let nextIndex = 0;
    return {
        next () {
            return nextIndex < arr.length ? { value: arr[nextIndex++], done: false} : { value: undefined, done: true };
        }
    }
}
let iterator = myIterator('herry', 'mike', 'jackjon');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// id 自增
function* createId () {
    let index = 1;
    while (true) {
        yield index++
    }
}
let gen = createId();
console.log(gen.next());
console.log(gen.next());
for (let i = 0;i < 10;i++) {
    console.log(gen.next())
}

let map = new Map();
map.set('addfd', 'value1')
map.set(function () {}, 'value2')
map.set([1,2,3], 'value3')

for ([key, value] of map) {
    console.log(key, value)
}