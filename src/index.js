 module.exports = function toReadable (number) {
    const numbers = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    const tens = [
        '', //0 - 9
        '', // 10 - 19
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
   ];

   const hundred = 'hundred'

   let humanReadable = '';

   if (number < 0 || number > 999) {
       return 'i dont know such number..';
   }

   if (number == 0) {
    return 'zero';
   }
   //TODO can be done for bigger numbers with  -thousands etc.


  let hundr = (number - number % 100) /100;
  let tenn = number % 100;

  if (hundr > 0) {
    humanReadable = numbers[hundr] + ' ' + hundred + ' ';
  }

  if (tenn < 20) {
    humanReadable = humanReadable  + numbers[tenn];
  } else {
    humanReadable = humanReadable  + tens[Math.trunc(tenn / 10)] + ' ' +  numbers[tenn % 10];
  }

   

   return humanReadable.trim();
  
}



//  console.log(toReadable(0));
//  console.log(toReadable(111));
//  console.log(toReadable(152));
//  console.log(toReadable(77));
//  console.log(toReadable(13));
//  console.log(toReadable(666));
