
//Создайте массив чисел.Через forEach проверяйте, если элемент отрицательный, то умножаете его на -1 и показываете в консоли, а если положи-
//если положительный, то умножаете на 2 и показываете в консоли
const numbers = [-11, 1, -22, 2, -33, 3]

function MyFunc(item){
    if(item < 0 ){
        console.log(item*-1)
    }

   else if(item > 0){
    console.log(item*2)
   }
}
arr.forEach(MyFunc)