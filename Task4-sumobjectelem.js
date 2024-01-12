let obj = {
    cars: {
        bmw: {
            m1: 150,
            m3: 60,
            m4: 31,
        },
        mercedes: {
            gle: 100,
            e330: 180,
            e600: 240,
        },
    },
    motorcycle: {
        kawasaki: {
            z6r: 5,
            z10r: 11,
            zz55r: 0,
        },
        bmw: {
            s1000rr: 60,
            s1000r: 2,
            s1000xr: 5,
        },
    }
}


//Дан обьект содержащий вложенные обьекты, необходимо посчитать сумму всех элементов обьектов в том числе и вложенных.
//Напишите функцию которая будет принимать обьект и возвращать сумму всех элементов моделей автомобилей.
function sumNestedObjectElements(nestedObject) {


}
console.log(sumNestedObjectElements(obj));






//Решение №1
function sumNestedObjectElements(nestedObject) {
    function sumObjectValues(object) {
        let sum = 0;
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                let value = object[key];
                if (typeof value === "object") {
                    sum += sumObjectValues(value);
                } else {
                    sum += Number(value);
                }
            }
        }
        return sum;
    }
    return sumObjectValues(nestedObject);
}
console.log(sumNestedObjectElements(obj))




//решение №2 через reduce более лаконичное
const sumNestedObj = obj => {
    return Object.keys(obj).reduce(
        (acc, key) => acc + (typeof obj[key] === 'object' ? sumNestedObj(obj[key]) : obj[key]),
        0
    );
};


console.log(sumNestedObj(obj));
