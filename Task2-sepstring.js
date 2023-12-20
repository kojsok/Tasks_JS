// Задача №2.  Работа со строками, замена разделителя между строк, работа с массивами.
// Наверняка многие из вас сталкивались с необходимостью разделить строку на разные слова, а также необходимость заменить разделители между строк (например с сервера приходят данные в виде: “Иванов-Петр-Иванович”).
// Условие: напишите код, который будет разделять строку на слова, а также заменит тип разделителя на пробел. На выходе должен получится результат: “Иванов Петр Иванович”. Код должен быть универсальным и позволять пользователю менять разделители.
// Задача:
// let fullName = "Иванов/Петр/Иванович"
// function replaceSeparators(str, curentSeparator, replaceableSeparator) { 
// 	// your code…
// return convertedFullName;
// }




// Решение:
let fullName = "Иванов/Петр/Иванович"


function replaceSeparators(str, curentSeparator, replaceableSeparator) {
    let convertedFullName = '';
    // с помощью метода split разобьем строку на элементы по текущему разделителю curentSeparator
    //  и поместим каждый полученный элемент в массив в виде [ 'Иванов', 'Петр', 'Иванович' ]
    let arrayOfStrings = str.split(curentSeparator); //результат: [ 'Иванов', 'Петр', 'Иванович']
    convertedFullName = arrayOfStrings.join(replaceableSeparator);
    return convertedFullName;
}


console.log(replaceSeparators(fullName, "/", " "));
