let a = +prompt('1 - 5 e qeder bir eded yazin')
let num = Math.floor(Math.random(a) * 5 );
let netice;
switch (num) {
    case 3:
        netice = 'Uddunuz!!!'
        break;
    default:
        netice = 'Bir daha sinayin'
        break;  8
}
document.getElementById('qaqacool').innerHTML = netice