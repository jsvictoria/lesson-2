/*
#### Задача 14

Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
и запишите его в переменную `num`.

*/

var n = 1000;
var num = 0;

while (n/2 >= 50) {
	n /= 2;
	num++;
}

console.log(`n = ${ n }; num = ${ num }`);  // n = 62.5; num = 4