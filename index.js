difference between mutating and non mutating array method
Mutating array method in javaScript are the ones that change the object after 
the method has been used Example; Push, shift, unshift, pop, splice.
Non mutating array method do not change the object after the method has been
used. Example; index, strings, boolean, slice, count.


// NO 2
let arrayOflanguage = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
arrayOflanguage.push('Kotlin');
console.log(arrayOflanguage)

arrayOflanguage.splice(3, 0, 'Java');
console.log(arrayOflanguage)

arrayOflanguage.splice(0, 1);
console.log(arrayOflanguage)

arrayOflanguage.unshift('scala', 'swift');
console.log(arrayOflanguage)

arrayOflanguage.splice(5, 1, 'Go', 'Rust');
console.log(arrayOflanguage)

//NO 3
let fruit = ['apple', 'mango', 'banana'];
function changefruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
}
 'apple', 'mango', 'banana'


 //NO 4
 let numbers = [5, 7, 3, 4];
function maximum(numbers) {
    max = 7;
    return max;
}
console.log(numbers)

//NO 5

let scores = [2, 4, 6];
function valsTimesIndex(scores) {
    for(inti=0;i<5;i++);
    let result = [2*0, 4*1, 6*2] 
    return result;
}
scores.splice(0, 3, 0, 4, 12)

console.log(scores)



























