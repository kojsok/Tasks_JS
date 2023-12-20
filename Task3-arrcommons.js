//ЗАДАЧА №3 Создайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
// дан массив №1 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// дан массив №2 : [2, 4, 6, 8, 10, 12];
// function commonElements(firstArr, secondArr) {
//   //тело функции
// };
// результат: [2, 4, 6, 8, 10]

function commonElements(firstArr, secondArr) {
    const set1 = new Set(firstArr);  //Объект Set позволяет хранить уникальные значения любого типа, будь то примитивы или ссылки на объекты.
    const set2 = new Set(secondArr); //Объект Set позволяет хранить уникальные значения любого типа, будь то примитивы или ссылки на объекты.
    const result = [];
    for (let element of set1) {
        if (set2.has(element)) {   //Метод has() возвращает логическое значение, показывающее, существует ли элемент с указанным значением в объекте Set или нет.
            result.push(element);
        }
    }
    return result;
}


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 4, 6, 8, 10, 12];
console.log(commonElements(arr1, arr2)); // expected output: [2, 4, 6, 8, 10]


const arr3 = ["Коля", "Петя", "Вася", "Данил"];
const arr4 = ["Коля", "Петя", "Вася", "Оля", "Маша", "Даша"];
console.log(commonElements(arr3, arr4)); // expected output: ['Коля', 'Петя', 'Вася']
