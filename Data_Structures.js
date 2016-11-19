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

function listToArray(listValue){
  var arrayResult = [];

  while(listValue.list){
    arrayResult.push(listValue.value);
    listValue = listValue.list;
  }

  arrayResult.push(listValue.value);

  return arrayResult;
}

var answer = aList([1, 2, 3]);
console.log(answer.value);

console.log(listToArray(answer));

function prepend(element, list){
  return {
    value: element,
    list : list
  }
}

console.log(prepend(5, answer));

function nth(index, list){
  if(index === 0 || list === null){
    return list.value;
  }else{
   return nth(index - 1, list.list);
  }
}


console.log(nth(2, prepend(5, answer)));

function deepEqual(object1, object2){

  if( typeof object1 == "object" &&  typeof object2 == "object"
      && object1 != null && object2 != null){
    if(Object.keys(object1).length != Object.keys(object2).length){
      return false;
    }else{
      for(var props in object1){
        if(object2.hasProperty(props)){
          if(deepEquals(object1[props], object2[props])){
            return false;
          }
        }else{
          return false;
        }
      }
      return true;
    }
  }else{
    return object1 === object2;
  }
}

console.log(deepEqual(answer, prepend(5, answer)));

console.log(Object.keys("object"))

