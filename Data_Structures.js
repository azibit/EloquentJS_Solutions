/**
Sum of Range Solution
**/
function range(number1, number2, step){
  var numberRangeArray = [];
  var count = 0;

  var stepper = step === undefined ? 1 : step;

  if(stepper > 0){
    while(number1 <= number2){
      numberRangeArray[count] = number1;
      number1 += stepper;
      count++;
    }
  }else{
    while(number2 <= number1){
      numberRangeArray[count] = number1;
      number1 += stepper;
      count++;
    }
  }

  return numberRangeArray;
}

console.log(range(5, 2, -1));
console.log(range(1, 10, 2));
console.log(arraySum(range(1, 10, 2)));

/**
Array Sum
**/
function arraySum(arrayOfNumbers){
  var sum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
    }

    return sum;
}

/**
Reversing a String
**/
function reverseArray(arrayParameter){
  var newArray = [];

  for(var i = 0; i < arrayParameter.length; i++){
    newArray[i] = arrayParameter[arrayParameter.length - i - 1];
  }

  return newArray;
}

console.log("Reverse Array: " + reverseArray(range(5, 2, -1)));

/**
Reversing a String In Place
**/
function reverseArrayInPlace(arrayParameter){
for(var i = 0; i < arrayParameter.length; i++){
    var temp = arrayParameter[i];
    arrayParameter[i] = arrayParameter[arrayParameter.length - i - 1];
    arrayParameter[arrayParameter.length - i - 1] = temp;
  }

  return arrayParameter;
}

console.log("Reverse Array: " + reverseArrayInPlace(range(5, 2, -1)));

/**
Convert an array to a list.
**/
function aList(arrayParameter){
  var newList = {
    value : arrayParameter[0],
    list: null
  };

  var listString = 'list';

  var finalAnswer = newList;
  for(var i = 1; i < arrayParameter.length; i++){
      list = {
        value : arrayParameter[i],
        list : null
      };

      newList.list = list;
      newList = newList.list;
  }

  return finalAnswer;
}

console.log(aList([1, 2, 3]));
