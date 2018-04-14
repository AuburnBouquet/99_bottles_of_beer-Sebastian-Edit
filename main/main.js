module.exports = function print_the_poem() {
    let i = 99;
    let result = '';
    while(i >= 2){
        result += lyrics(i);
        i--;
    }
    result += '    1 bottle of beer on the wall, 1 bottle of beer.\n' +
        '    Take one down and pass it around, no more bottles of beer on the wall.\n' +
        '    No more bottles of beer on the wall, no more bottles of beer.\n' +
        '    Go to the store and buy some more, 99 bottles of beer on the wall.';
    return result;
}

function lyrics(number){
    let str;
    if(number === 2){ str = '    2 bottles of beer on the wall, 2 bottles of beer.\n' +
        '    Take one down and pass it around, 1 bottle of beer on the wall.\n';
    } else { str = '    ' + number + ' bottles of beer on the wall, '+ number +' bottles of beer.\n' +
        '    Take one down and pass it around, ' + --number + ' bottles of beer on the wall.\n'; }
    return str;
}