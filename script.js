'use strict';

let isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
let start = confirm('Привет! Сыграем в отгадай число?)');
let game = function () {    
    alert(' Я загадываю целое число от 1 до 100. Удачи!');
        let number = randomInteger(1, 100); 
        //указываю значения потому хотел попробовать спрашивать у пользователя диапазон чисел из которого он будет угадывать. 
        if(start === true){
        function ask() {
        let userNumber = prompt('Введи целое число!');            
        console.log(number);
        console.log(userNumber);
        console.log(isNumber(userNumber));
        if(isNumber(userNumber)) {
            userNumber = +userNumber;
            if(userNumber > number){
                alert('Загаданное число меньше. Попробуй еще раз.');
                ask();
                }else if(userNumber < number) {
                alert('Загаданное число больше. Попробуй еще раз.');
                ask();
                }else if(userNumber === number) {
                let a = confirm('Молодец! Ты выиграл! Cыграем еще?');
                if(a){
                    game();
                }
                else{
                    alert('Спасибо за игру! Хочешь сыграть еще, обнови страницу!)');
                }
                }            
        } else if(userNumber === null){
            alert('Игра окончена! Хочешь сыграть еще, обнови страницу!)');
        } else {
            alert('Нужно ввести целое число!');
            ask();
        }        
    }
    ask();
    }     
};
game();
