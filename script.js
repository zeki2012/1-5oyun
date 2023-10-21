let a = +prompt('1 - 5 e qeder bir eded yazin')
let num = Math.floor(Math.random(a) * 5 );
let netice;
switch (num) {
    case 3:
        netice = 'Uddunuz!!!'
        break;
        case 2:
        netice = 'Bir daha sinayin'
        break;
    default:
        netice = '1 - 5 e qeder secin daha cox olmaz!'
        break;  
}
document.getElementById('qaqacool').innerHTML = netice