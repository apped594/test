
///////Sum All Numbers in a Range
//Solution 1
function sumAll(arr) {

    let sortedarr = arr.sort((a,b)=> a-b);
    let newarr2 = [];

    for (let i = arr[0]+1; i < arr[1];i++) {
        newarr2.push(i);
    };
  (sortedarr.splice(sortedarr[0], 0,...newarr2))
 return sortedarr.reduce((sum,number)=> sum+number);
}

sumAll([1, 4]);

//solution 2

function sumAll2(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll2([1, 4]);

  //Solution 3

  const sumAll3 = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };
  sumAll3([1, 4]);

  //solution 4

  function sumAll4(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll4([1, 4]);

  //Solution 5 - recursive version

  function sumAll5(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll5([1, 4]);

//////// Diff Two Arrays

//Shit Solution

function diffArray(arr1, arr2) {

    for (let i =0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            
            if (arr1[i] == arr2[j]) {

                arr1.splice(i,1);
                arr2.splice(j,1);
                arr1.unshift('');
                arr2.unshift('');
            }
        }

    }

   return (arr1.concat(arr2)).filter(item=> item !=="");
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//Better Solution 1

function diffArray1(arr1, arr2) {
    const newArr = [];

    function firstCompare(first,second) {

        for (let i = 0; i < first.length; i++) {

            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    firstCompare(arr1,arr2);
    firstCompare(arr2,arr1);
  
    return newArr;
  }
  
  diffArray1([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Better Solution 2

function diffArray2(arr1, arr2) {
   return arr1
   .concat(arr2)
   .filter(item=> !arr1.includes(item)||!arr2.includes(item));
  }
  
  diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);

 
  //////// Seek and Destroy

  //solution 1

  function destroyer(arr) {
    let newArr =[];
    
    for (let i = 1; i < arguments.length; i++){
    newArr.push(arguments[i]);

 }

 return arr.filter(item => !newArr.includes(item));
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//solution 2

function destroyer2(arr) {

   return arr.filter(item=>!(Array.prototype.slice.call(arguments,1)).includes(item));
// Uses the slice method on the arguments object form index 1
}

destroyer2([1, 2, 3, 1, 2, 3], 2, 3);

//Solution 3

function destroyer3(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  destroyer3([1, 2, 3, 1, 2, 3], 2, 3);

  //Solution 4

  function destroyer4(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }

  destroyer4([1, 2, 3, 1, 2, 3], 2, 3);

  //Solution 5
  
  function destroyer5(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }

  destroyer5([1, 2, 3, 1, 2, 3], 2, 3);

  ////////Wherefore art thou

  //Solution 1
  
  function whatIsInAName1(collection,source) {
   
    return collection.filter(obj=> {

      let i=0;

      for (let key in source) {

        if (obj.hasOwnProperty(key) && obj[key] === source[key]) {
          i++;
        }
      }

      if (Object.keys(source).length <= i)   {

        return true;
      }

  });

  }

  whatIsInAName1([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  // Solution 2

  function whatIsInAName2(collection,source) {

    let sourceKeys = Object.keys(source);

    return collection.filter(obj=> {

      for (let i = 0; i < sourceKeys.length; i++) {

        if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        } else {
          return true;
        }

      }

    })

  }

  whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Solution 3

  function whatIsInAName3(collection,source) {
     let sourceKeys = Object.keys(source);

     return collection.filter(obj=> sourceKeys
      .every(keys=> obj.hasOwnProperty(keys) && obj[keys] == source[keys])
     );

  }
  whatIsInAName3([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Solution 4

  function whatIsInAName4(collection,source) {

    let sourceKeys = Object.keys(source);

    return collection.filter(obj=> sourceKeys
      .map(keys=> obj.hasOwnProperty(keys) && obj[keys] === source[keys])
      .reduce((a,b)=> a && b)
    );

  }

  whatIsInAName4([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Solution 4

  function whatIsInAName5(collection,source) {
    let arr= [];

    for (let i = 0; i < collection.length; i++) {
        let found = true;

        for (let keys in source) {

          if (collection[i][keys] !== source[keys]) {
            found = false;
            break;
          }
        }

      if (found) {
        arr.push(collection[i]);
      }
    }

return arr;
    
  }

  whatIsInAName5([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  /////Spinal Tap Case

  //Solution 1

function spinalCase1(str) {

  return  str.match(/[A-Z][a-z]+|[a-z]+/g)
             .map(item=> item.toLowerCase())
             .join("-");
}
  
spinalCase1("thisIsSpinalTap");

  //solution 2

function spinalCase2(str) {

 return str.replace(/([a-z])([A-Z])/g,"$1 $2")
       .replace(/\s+|_+/g,"-")
        .toLowerCase();

}
spinalCase2("thisIsSpinalTap");

//solution 3

function spinalCase4(str) {
return str.split(/\s+|_+|(?=[A-Z])/) //make use of a lookahead
.join("-")
.toLowerCase()
}
spinalCase4("AllThe-small Things");

///// Pig Latin

//Solution 1

function translatePigLatin1(str) {

  let regex = /^[^a,e,i,o,u]+/i;

  if (regex.test(str) == false) {

    return str
     .concat("way")

    
  } else {
     
    let newArr =  str.match(regex);
   return str.replace(regex,"")
    .concat(newArr)
    .concat("ay")
    
  }

}

translatePigLatin1("schwartz");

//Solution 2

function translatePigLatin2(str) {

  return str

  .replace(/^[aeiou]\w*/,"$&way")
  .replace(/(^[^aeiou]+)(\w*)/,"$2$1ay")


} 

translatePigLatin2("aain");

/////// Search and Replace

//Solution 1

function myReplace1(str,before,after) {

  if (/[A-Z]/.test(before)) {

     after = after.replace(after[0], after[0].toUpperCase())

  } else {
    after = after.replace(after[0], after[0].toLowerCase())
  }

 return str.replace(before,after);
  
}

myReplace1("Mikayla is moerse Stout in die klas", "Mikayla", "Mia");


//Solution 2

function myReplace2(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split("");
    var sourceArr = source.split("");
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return targetArr.join("");
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}

// test here
myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/////DNA Pairing

//Solution 1

function pairElement1(str){

  let arr2=[];
  let arr = [];
  let newArr = str.split("")
  
 for (let i = 0; i < newArr.length; i++) {

  if (/G/.test(newArr[i])) {

   arr.push(newArr[i])
   arr.push("C");
   arr2.push(arr);
   
   

  } else if (/C/.test(newArr[i])) {
    arr.push(newArr[i])
    arr.push("G");
    arr2.push(arr);
    
  } else if (/A/.test(newArr[i])) {
    arr.push(newArr[i])
    arr.push("T");
    arr2.push(arr);
    
  } else if (/T/.test(newArr[i])) {
    arr.push(newArr[i])
    arr.push("A");
    arr2.push(arr);
    
  }

  arr = [];

 }
 
return arr2
}
pairElement1("ATCGA");

//Solution 2



  function pairElement2(str) {

    // Function to match each character with the base pair

    const matchWithBasePair = function(char) {

      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
  
    return pairs;
  }
  
  // test here
  pairElement2("GCG");


  function pairElement3(str) {

    const pairs = {

      A: "T",
      T: "A",
      C: 'G',
      G: "C"

    };

    return str.split("")
    .map(item=> [item,pairs[item]]);

  }
  pairElement3("GCG");


  /////Missing letters

  //Solution 1

  function fearNotLetter(str) {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let newArr =  str.split('');
    let newArr2 = alphabet.slice(alphabet.indexOf(newArr[0]), (alphabet.indexOf(newArr[newArr.length-1]))+1);
 
    
         let filterstr =  newArr2
                .filter(item=> !newArr.includes(item))
                .join('')
      if (filterstr == '') {

        return undefined;
      } else return filterstr;
  }
  
  fearNotLetter("abcde");

  //Solution 2
  

  function fearNotLetter2(str) {

    let charcode = str.charCodeAt(0);
    let missing =[];
    
    for (let i = 0; i < str.length; i++) {

      if (charcode === str[i].charCodeAt(0)) {
        charcode++;

      } else {
        
        return missing = String.fromCharCode(charcode);
      
      }

    } 
    
 return undefined;

  }
    
  fearNotLetter2("abce");

  //Solution 3

  function fearNotLetter3(str) {

   str =  str
      .split("")
      .sort((a,b)=> {
        return a===b ? 0 : a<b ? -1 :1;
      })
      .join("");

    let newArr = [];

    for (let i = str[0].charCodeAt(0); i <=str[str.length-1].charCodeAt(0); i++) {

      newArr.push(String.fromCharCode(i));

    }

    return newArr
      .filter( item=> !str.split("")
                          .includes(item)
      ) 

  }

  fearNotLetter3("ah");


  /////// Sorted Union

  ///solution 1

  function uniteUnique(arr) {
    
 let newArr = [];

  for (let i = 0; i < arguments.length; i++) {

    for (let j = 0; j < arguments[i].length; j ++) {

      if (newArr.indexOf(arguments[i][j]) < 0 ) {

        newArr.push(arguments[i][j]);
      }
    }

  }

  return newArr;


  }
  
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

  ///solution 2

  function uniteUnique6(...arr) {

    return [...new Set(arr.flat())]; //create set object of the flaten array of the arguments and converting this set object to an array.
    
    //Firstly, a Set is a built-in JavaScript object that lets you store unique values of any type. When you add a value to a Set, it will automatically remove any duplicate values.

  }

  uniteUnique6([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

  ///Solution 3

  function uniteUnique3(arr) {

    return [...arguments] //need to convert the arguments object to an array just like with the Set object above
      .flat()
      .filter((item,ind,arr)=> arr.indexOf(item) === ind);

  }

  uniteUnique3([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

  //////Convert HTML Entities

  ///solution 1

  function convertHTML(str) {

    const entities = {

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

   return str.split('')

    .map(item => {
      
      if (entities.hasOwnProperty(item)) {
      
      return entities[item];

    } 
    else {return item } 
    })
    .join("");


  }

  convertHTML("Dolce & Gabbana");


  //solution 1B

  function convertHTML1b(str) {

    const htmlElements = {

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    return str.split("")
           .map(item=> htmlElements[item] || item) /// will only check the value item after the || if the first vaue is falsy
           .join("");

  }

  convertHTML1b("Dolce & Gabbana");

  ///solution 2

  function convertHTML2(str) {

    let temp = str.split("");

    for (let i = 0; i < temp.length; i++) {

        switch(temp[i]) {

          case "&" :
            temp[i] = "&amp;";
            break;

          case ">" :
            temp[i] = "&gt;";
            break;

          case "<" :
            temp[i] = "&lt;";
            break;

          case '"' :
            temp[i] = "&quot;";
            break;

          case "'" :
            temp[i] = "&apos;";
            break;
        }

    }
return temp.join("");
  }

  convertHTML2("Dolce & Gabbana");


  ///solution 3

  function convertHTML3(str) {

    const elements = {

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    return  str.replace(/[&<>"']/g,item => elements[item]); //can pass function as arguments as well, almost like a map function for arrays

  }

  convertHTML3("Dolce & Gabbana");

/////Sum all fib od numbers

///Solution 1

  function sumFibs(num) {
    
    let fibArr = [0,1];

    for (let i = 0; i < fibArr.length; i++ ) {

       let fibNum = fibArr.slice(i)
        .reduce((sum, number)=> sum + number);

        if (fibNum <= num) {
          fibArr.push(fibNum)
          
        } else {
          break;
        }
      
    }
      console.log(fibArr)
      return fibArr
      .filter(item=> item % 2 !== 0)
      .reduce((sum, item)=> sum+ item)
  }

  sumFibs(10);

  ///Solution 2   ///fastest solution, because dynamically creating an array in JS is rather slow

  function sumFibs2(num) {

    let prevNum = 0;
    let currentNum = 1;
    let result = 0;

    while (currentNum <= num) {

      if (currentNum % 2 !== 0) {
        result = result + currentNum;
      }
      
      currentNum = currentNum + prevNum;
      prevNum = currentNum - prevNum;
      

    }

    return result;

  }

  sumFibs2(10);

  ///Solution 3

  function sumFibs3(num) {

    let fibArr = [1,1];
    let newFib = 0;

    while((newFib = fibArr[0] + fibArr[1]) <= num) {

       fibArr.unshift(newFib);

    }

    return fibArr.filter(item=> item %2 !==0)
    .reduce((a,b)=> a+b)

  }

  sumFibs3(10);

  /////Sum All Primes

  ///Solution 1
  function sumPrimes(num) {

  let numArr = [];

  for (let i = 1; i <=num; i++) {

    numArr.push(i);
    
  }
  console.log(numArr)
  return numArr.filter(item=> 
    
    {
      if (item <= 1) {
        return false
      } else if (item <= 3) {
        return true;
      } else if (item % 2 === 0 || item % 3 === 0) {
        return false;
      }

      for (let i = 5; i * i <= item; i += 6) {
        if (item % i === 0 || item % (i + 2) === 0) return false;
      }
      return true;
    }
  
   )
  .reduce((sum,num)=> sum + num);


  }
sumPrimes(10);


////Solution 2

function sumPrimes2(num) {

  let currentNum = 0;
  let result = 0;

  function isPrime(item) {

    if (item <= 1) {
      return false
    } else if (item <= 3) {
      return true;
    } else if (item % 2 === 0 || item % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= item; i += 6) {
      if (item % i === 0 || item % (i + 2) === 0) return false;
    }
    return true;

  }

  while (currentNum <= num) {

    if (isPrime(currentNum)) {

      result = result + currentNum;
    }

    currentNum ++;

  }

  return result;

}

sumPrimes2(10);

////// Smallest Common Multiple

function smallestCommons1(arr) {

    arr.sort((a,b)=> a-b);
    let newArr = [];
 
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
    }

 
  function divCheck(arr2,num) {

    return arr2.every(item => num % item === 0);
  }
  
  let currentNum = arr[1];

  while (divCheck(newArr,currentNum) === false) {

    currentNum++;

  }

  return currentNum;

}

smallestCommons1([1,5]);


//////Drop it

function dropElements(arr,func) {

  let newArr = [];
 
for (let i = 0; i < arr.length; i++) {

  if (func(arr[i])) {

  newArr =  arr.slice(i);
   break;
  } 
  
}

return newArr;

}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});



////// Steamroller

//Solution 1

function steamrollArray(arr) {

function findDepth(arr, depth = 1) {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = depth;
  for (const item of arr) {
    if (Array.isArray(item)) {
      const currentDepth = findDepth(item, depth + 1);
      maxDepth = Math.max(maxDepth, currentDepth);
    }
  }

  return maxDepth;

}

for (let i = 0; i <= findDepth(arr); i++) {

 arr = arr.map(item=> (Array.isArray(item) ? item : [item]))
.reduce((acum,a)=> acum.concat(a), []);

}
return arr;
}

steamrollArray([1, {}, [3, [[4]]]]);

/////////////////////////

function steamrollArray2(arr) {

  return arr.flat(Infinity);
 
 }
 
 steamrollArray2([1, {}, [3, [[4]]]]);


 /////Binary Agents

 function binaryAgent(str) {

  return  str.split(" ")

  .map(item=> {
    
      let total = 0;

      for (let i = 0; i < item.length; i++) {

       total = total + (item[i] * Math.pow(2, ((item.length-1) - i)));

      }
      return String.fromCharCode(total);
  })
  .join("");

 }

 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


 ///Everything Be True

 ///Solution 1

 function truthCheck(collection, pre) {

let arrFilter =  collection.filter(obj => {

  if (obj.hasOwnProperty(pre) && Number.isNaN(obj[pre])=== false)
      
       {
        switch(obj[pre]){

          case  false :
            return false;
          
          case Number.isNaN(obj[pre]) :
            return false;
          
          case "" : 
            return false;

          case 0 :
            return false;
          
          case null :
            return false;
       } 
      }
 
else { return false}

return true

})
  

console.log(arrFilter);

  if (collection.length == arrFilter.length ) {

    return true;
  } else {

    return false;
  }
   
    
 }
 truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")


  /////Solution 2 just checking for thr truth

  function truthCheck2(collection, pre) {

     return collection.every(obj=> obj.hasOwnProperty(pre) && obj[pre]);
  
  }

  truthCheck2([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users:[]}], "users");

////// Arguments Optional

///Solution 1
function addTogether(x) {

  if (arguments.length > 1) {
    let newArr = [...arguments];
    if (newArr.every(a=> typeof a == "number"))
    {
        return newArr.reduce((a,b)=> a+b);

    } else{
      return undefined;
    }

  } 
  if (typeof x !== "number") {
    return undefined;
  }
  return function(y) {
    if (typeof y !== "number") {
      return undefined;
    }
    return x+y;
  }

 
}
addTogether(2)(4);

///Solution 2

function addTogether2(...argsx) {

    return function(...argsy) {
     return argsx.reduce((a,b)=>a+b) + argsy.reduce((a,b)=> a+b);
    }
  

 
}
addTogether2(2,3);


function top(x) {

  return function(y) {

   return function(z) {

    return x + y + z + 4;

    }

  }
}

top(1)(3)(4);



////Map a Debris

///Solution 1

function orbitalPeriod(arr) {

  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(obj=> {
    
   let a = earthRadius + obj.avgAlt;

    obj.orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(a,3)/GM)));

    return {name: obj.name, orbitalPeriod: obj.orbitalPeriod}

  })
  


}
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])


//////make a person

///solution 1

const Person = function(first, last) {

  let firstName = first || "Bob";
  let lastName = last || "Ross";

  this.setFirstName = function(newfirst) {

    firstName = newfirst;
  },

  this.setLastName = function(newlast) {
    lastName = newlast;
  },

  this.setFullName = function(newfirst,newlast) {

    firstName = newfirst;
    lastName = newlast;
  }

  this.getFullName = function() {
    
    return (firstName + " " + lastName);
  },

  this.getFirstName = function(){
    return firstName;
  },

  this.getLastName = function() {
    return lastName;
  }

};

let test = new Person();

test.getFullName();

Object.keys(test).length;




function convertHTML9(str) {

  const entities = {   // use the object as a lookup

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

 return str.split("")  // split the string in an array, remember it takes the spaces as well.
  .map(item=> entities[item]||item)   // first check for the objectvalue if not true then the normal item.
  .join("");   // make a string again.

}

convertHTML9("Dolce & Gabbana");



function convertHTML10(str) {

 return str.split("") //split string into array
   .map(item=>{//use map method to iterate through each string character

      switch(item) {   // use the switch method as a tuype of lookup

        case "&" : 
       return "&amp;";   /// once we get a match/case returns the entire map method for that item

        case "<" : 
        return "&lt;";

        case ">" : 
       return "&gt;";

        case '"' : 
       return "&quot;";

        case "'" : 
        return "&apos;";
      }

      return item;  //if it doesn't get a match it returns the item again.
    })
    .join(""); //creates a string again
}

convertHTML10("Dolce & Gabbana");



function convertHTML11(str) {

  const entities = {   // use object as a lookup

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  return str.replace(/[&<>"']/g, item => entities[item]);  //use the replace method, if it finds a match it will take the character and push it as an argument in the call back function. Call back function will do a lookup on the object and returns the value.


}

convertHTML11("Dolce & Gabbana");


function sumFibs1100(num) {

    let x = 0;
    let y = 1;
    let z = 0;
    

    while ( y <= num) { 

      if ( y % 2 != 0) {  //check if y is a odd number

        z = z + y; // if it's an odd number add it to the sum/z
      }
        y = y + x; // otherwise move y to the next number
        x =  y - x; // move x to the next number
  
    }

    return z //return the total

    }
  
  
  sumFibs1100(4);

  function sumFibs2000(num) {

    let fabArr = [1,1];

    while (fabArr[0] + fabArr[1] <= num) { // continue while the sum of the 2 numbers are less than num

      fabArr.unshift(fabArr[0] + fabArr[1]); //unshift to add to the begining otherwise we need to iterate dynamically through an array that changes

    }

   return fabArr.filter(item=> item %2 !=0) // filter the odd numbers
    .reduce((a,b)=> a+b);   // calculate the total

  }

sumFibs2000(10);






function sumPrimes1000(num) {

  let rangeArr = [];  //empty array to store range in between 0 and num

  for (let i = 0; i<= num; i++) {

      rangeArr.push(i);     /// push items to array to create range
  }

  return rangeArr.filter(item=> {    //filter array to check if it's a prime or not

    if (item <= 1) {
      return false
    } else if (item <= 3) {
      return true;
    } else if (item % 2 === 0 || item % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= item; i += 6) {
      if (item % i === 0 || item % (i + 2) === 0) return false;
    }
    return true;

  })
  .reduce((a,b)=> a+b);    //calculate the sum of the filtered array

}

sumPrimes1000(10);


function sumPrimes2000(num) {

  function isPrime(item) {   //function to check if number is a prime number

    if (item <= 1) {
      return false
    } else if (item <= 3) {
      return true;
    } else if (item % 2 === 0 || item % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= item; i += 6) {
      if (item % i === 0 || item % (i + 2) === 0) return false;
    }
    return true;

  }

  let currentNum = 0;
  let result = 0;


  while(currentNum <=num) {    ///check al numbers from 0 to num
 
    if (isPrime(currentNum)) {    // if it's a prime then add to sum total

      result = result +  currentNum;
    }

    currentNum++;    //move to next number in range
  }

return result;  


}

sumPrimes2000(10);


function smallestCommons1000(arr) {
   arr = arr.sort((a,b)=> a-b);
  
  let newArr = [];

 for (let i = arr[0]; i <= arr[1]; i++) {

  newArr.push(i);

 }

 let num = arr[1];
 console.log(newArr);
 while((newArr.every(item=> num % item == 0)) != true) {

  num++;

 }

 return num;



}

smallestCommons1000([5,1]);




  function dropElements1000(arr,func) {

    for (let i = 0; i < arr.length; i++) {  //LOOP through elements and check condition of func.

      if (func(arr[i])) {

        return arr.slice(i);
        
      }

    }

    return [];


  }

  dropElements1000([1, 2, 3, 4,6], function(n) {return n > 5;});


  function dropElements2000(arr,func) {

    while (arr.length > 0 && !func(arr[0])) { // repeats until arr.length 0 or function = true
      
      arr.shift();   // removes first itemo of array

    }

    return arr  // returns whatever is left after while LOOP

  }

  dropElements2000([1, 2, 3, 4,6], function(n) {return n > 5;});

  function dropElements3000(arr,func) {

    let sliceIndex = arr.findIndex(func);

    return arr.slice(sliceIndex >=0 ? sliceIndex : arr.length); 

   //Use ES6 findIndex() function to find the index of the element that passes the     condition
   // Slice the array from the found index until the end
   // There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.

  }

  dropElements3000([1, 2, 3, 4,6], function(n) {return n > 5;});

  function dropElements4000(arr,func) {

    return arr.length > 0 && !func(arr[0])  //condition to check
    ? (dropElements4000(arr.slice(1),func))  // if true call function again
    : arr;   // if flase return arr


  }

  dropElements4000([1, 2, 3, 4,6], function(n) {return n > 5;});


function dropElements5000(arr, func) {

  if (arr.length > 0 && !func(arr[0])) {

    dropElements5000(newArr = arr.slice(1),func)
    
  }

  return newArr;
}

dropElements5000([1, 2, 3, 4,6], function(n) {return n > 5;});

  function binaryAgent1000(str){

    return str.split(" ")   // Split into array to work with each item/segment
    .map(item=>{
      item = parseInt(item,2);    //  change each item to it's corresponding string value
      return String.fromCharCode(item);
    })
    .join("");   // create a string again

   
  }

  binaryAgent1000("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


  function truthCheck1000(collection,pre) {

   return collection.map(item=>{
      if (item[pre]) {
        return true;
      }
    })
    .every(item=> item == true);
  }

  truthCheck1000([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


  function truthCheck2000(collection,pre) {

    return collection.map(item=>{
      return item[pre] || false   // use map to gather true or false values for array item
     })
     .every(item=> item !== false);   //determine if all values are true
   }
 
   truthCheck2000([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users");


   function truthCheck5000(collection,pre) {
// Create a counter to check how many are true.
    let counter = 0;

    for (let i in collection) {
      // If it is has property and value is truthy
      if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {

        counter++;
      }
    }
// Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;


   }

   truthCheck5000([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users");


   function truthCheck8000(collection,pre) {

    return collection.every(obj=> obj[pre]); 

   }

truthCheck8000([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users");



   function addTogether1000() {
      
    let newArr = [...arguments];

    if (newArr.some(item=> typeof item !=="number" && !Number.isInteger(item))) {  //checking for any non-numbers

      return undefined;
    }

    if (arguments.length > 1){

      return newArr.reduce((a,b) => a+b);   //adding them
    } else{

      const sumTwo = x=> y=> {       // function incase only one argument is presented

        if (typeof y!== "number" && !Number.isInteger(y)) {
          return undefined;
        } else {
          return x+y;
          
        }
        
      }
      
      return sumTwo(arguments[0]); //  waiting for the second argument.
      
    }
    
    }


   addTogether1000(23.5)("3");



   function addTogether2000() {

    const [x,y] = arguments;  // using destructering to assign these 2 variables to the first and second items in the arguments object array

    if (typeof x == "number") {     // if it's a number we delve deeper note we never say return undefined, becasuse if it doesn;t return it is undefined by default.

        if (typeof y == "number") {

          return x+y;
        }

        if (arguments.length === 1) {

         
            return y=> {if (typeof y == "number") return x+y}    // check if Y is not a string or something else
          
        }

    }
  
  }
   addTogether2000(23)(5);



   function addTogether3000() {

    const [x,y] = arguments;  // use destructering to assign variables

    const  addT =  function (y) {   //create function to do the adding

      if (typeof y == "number") {    // check if Y/ second argument is a number

        return x+y;
      }

    }

    if (typeof x =="number") {   // check if first argument is a number

        if (arguments.length === 1) {   // check if only 1 arguments was supplied then returns function waiting for second argument 
          return addT;
        }

        if (arguments.length === 2) {   //If both arguments were supplied return function passing in second argument

          return addT(y);

        }
    }

   }

   addTogether3000(23)

   



   function steamrollArray1000(arr,newArr= []) {    //  Populate newArr Top down approach, we pass newArr current state to deeper functions

    for (let i = 0; i < arr.length; i++) {

      if(Array.isArray(arr[i])) {

       steamrollArray1000(arr[i],newArr);

      } else{

        newArr.push(arr[i]);
      }

    }
  
      return newArr

    
   }

   steamrollArray1000([1, [2], [3, [[4]]]])


   function steamrollArray2000(arr,newArr= []) {    //Populate newArr bottom up approach each deeper function gets empty default newArr

    for (let i = 0; i < arr.length; i++) {

      if(Array.isArray(arr[i])) {

       newArr = newArr.concat(steamrollArray1000(arr[i])); //concat removes array bracket of current level

      } else{

        newArr.push(arr[i]);
      }

    }
  
      return newArr

    
   }

   steamrollArray2000([1, [2], [3, [[4]]]]);


   function steamrollArray3000(arr) {

    const flattenArray = [];

    for (let i = 0; i < arr.length; i++) {

      if (Array.isArray(arr[i])) {

        flattenArray.push(...steamrollArray3000(arr[i]));  // uses the elements inside the array using rest parametar

      } else{

        flattenArray.push(arr[i]);
      }

    }

    return flattenArray;


   }

   steamrollArray3000([1, [2], [3, [[4]]]]);

   function steamrollArray4000(arr) {

    const flat = [].concat(...arr);  //concat in order to remove the current level array
    return flat.some(Array.isArray) ? steamrollArray4000(flat) : flat; // check in flat if there is an array

   }

   steamrollArray4000([1, [2], [3, [[4]]]]);

   //Roman Numeral Converter

   function convertToRoman(num) {

    const romanTable =  {

      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
    };

    const numEval =  function(){

    if (romanTable[num]) {

      return romanTable[num];

    }else if (num < 4 && num > 0) {

          return numLess4(num);

    } else if (num < 9 && num > 5) {

      return numLess9(num);

    } else if (num < 40 && num > 10) {

      return numLess40(num);

    } else if (num < 50 && num > 40) {

      return numLess50(num);

    } else if (num < 90 && num > 50) {

      return numLess90(num);

    } else if (num < 100 && num > 90) {

      return numLess100(num);

    } else if (num < 400 && num > 100) {

      return numLess400(num);

    } else if (num < 500 && num > 400) {

      return numLess500(num);

    } else if (num < 900 && num > 500) {

      return numLess900(num);

    } else if (num < 1000 && num > 900) {

      return numLess1000(num);

    } else if (num > 1000) {

      return numMore1000(num);
    }
    };
  

    const numLess4 = function() {

      let tempArr = [];
        for (let i = 0; i <num; i++) {

          tempArr.push(romanTable[num]);

        }

      return tempArr.join("");

    };

    const numLess9 = function() {

      let tempArr = ["V"];
      
      for (let i = 5; i < num; i++) {

        tempArr.push("I");
      }

      return tempArr.join("");

    };

    const numLess40 = function() {

      let tempArr = [];
      let beforeDecimal = Math.floor(num / 10);
      let afterDecimal = num % 10;

      for (let i = 0; i < beforeDecimal; i++) {

        tempArr.push("X");
      }

      console.log(tempArr);

      num = afterDecimal;

      tempArr.push(numEval(num));

      console.log(tempArr);

      return tempArr.join("");

    };

    const numLess50 = function() {
      let tempArr = ["XL"];
      let newNum = num - 40;

      num = newNum

      tempArr.push(numEval(num));

      return tempArr.join("");

    };

    const numLess90 = function() {

      let tempArr = ["L"];
      let newNum = num - 50;
      num = newNum;

      tempArr.push(numEval(num));

      return tempArr.join("");
      
    };

    const numLess100 = function() {

      let tempArr = ["XC"];
      let newNum = num - 90;
      num = newNum;

      tempArr.push(numEval(num));
      return tempArr.join("");
    };

    const numLess400 = function() {

      let tempArr = [];
      let beforeDecimal = Math.floor(num / 100);
      let afterDecimal = num % 100;

      for (let i = 0; i < beforeDecimal; i++) {

        tempArr.push("C");
      }

      num = afterDecimal;

      tempArr.push(numEval(num));

      return tempArr.join("");

    };

    const numLess500 = function()  {

      let tempArr = ["CD"];
      let newNum = num - 400;

      num = newNum;

      tempArr.push(numEval(num));
      return tempArr.join("");

    };

    const numLess900 = function(){

      let tempArr = ["D"];
      let newNum = num - 500;

      num = newNum;
      tempArr.push(numEval(num));
      return tempArr.join("");
    };

    const numLess1000 = function() {

      let tempArr = ["CM"];
      let newNum = num - 900;

      num = newNum;
      tempArr.push(numEval(num));
      return tempArr.join("");
    };

    const numMore1000 = function() {

      let tempArr = [];
      let beforeDecimal = Math.floor(num / 1000);
      let afterDecimal = num % 1000;

      for (let i = 0; i < beforeDecimal; i++) {

        tempArr.push("M");
      }

      num = afterDecimal;

      tempArr.push(numEval(num));

      return tempArr.join("");

    }

    return numEval(num);

  }

   convertToRoman(39);
   

   //Palindrome Checker

   function palindrome(str) {

    let tempArr = str.match(/[a-zA-Z0-9]+/g);

    console.log(tempArr);

    let tempStr = tempArr.join("");

    tempArr = tempStr.split("");

    let reverseArr = [];

    tempArr.map(item=> reverseArr.unshift(item.toLowerCase()));

    console.log(reverseArr);

    tempArr = tempArr.map(item=> item.toLowerCase());

    console.log(tempArr);

    for (let i = 0; i < tempArr.length; i++) {

     if  (tempArr[i] != reverseArr[i]) {
      
      return false;

     } 


    }

return true;
    
   }

   palindrome("almostomla");



   //// Caesars Cipher

   function rot13(str,shiftNum) {

    let tempArr = str.split("");
    const decodeArr = [];
    console.log(tempArr);

    tempArr.map(item=>{

      if (/[A-Z0-9]/.test(item)) {

        if (item.charCodeAt() > "M".charCodeAt()) {

           decodeArr.push(String.fromCharCode("A".charCodeAt()-1 + (shiftNum-("Z".charCodeAt() - item.charCodeAt()))));

           console.log(decodeArr);

        } else {
          decodeArr.push(String.fromCharCode(item.charCodeAt()+ shiftNum));
          console.log(decodeArr);
        }
       


      } else if(/[a-z]/.test(item)) {
         
        if (item.charCodeAt() > "m".charCodeAt()) {

          decodeArr.push(String.fromCharCode("a".charCodeAt()-1 + (shiftNum-("z".charCodeAt() - item.charCodeAt()))));

          console.log(decodeArr);

       } else {
         decodeArr.push(String.fromCharCode(item.charCodeAt()+ shiftNum));
         console.log(decodeArr);
       }

      } 
      
      
      else{
        decodeArr.push(item);
      }


    });

    console.log(decodeArr);
    return decodeArr.join("");

   }

   rot13("serr PBQR PNZC",13);


   /// Telephone Number Validator

   function telephoneCheck(str) {

    if (/^1{0,1}\s*[(][0-9]{3}[)]\s*[0-9]{7}$/.test(str)) {

      return true;

    } else if (/^1{0,1}\s*[0-9]{10}$/.test(str)) {

      return true;

    } else if(/^1{0,1}\s*[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/.test(str))  {  // look at capture groups to optimise

      return true;

    } else if(/^1{0,1}\s*[(][0-9]{3}[)][-\s]*[0-9]{3}[-][0-9]{4}$/.test(str)) {

      return true;

    } else if (/^1{0,1}\s*[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/.test(str)) {

       return true;

    }

    return false;
   }

   telephoneCheck("1 (555) 555-5555");


   /// Cash Register

   function checkCashRegister(price, cash, cid) {

  
    const objRegister =  {};
    const objChangeReturn = {};

    cid.map(item=>{ objRegister[item[0]] = item[1]
      objChangeReturn[item[0]] = 0;
    });

    console.log(objRegister);
    console.log(objChangeReturn)
  
    let change = cash - price;
    console.log(change);

    
    const convertChange = function(){
      const objArray = Object.entries(objChangeReturn);
       console.log(objArray);
       const temp = objArray.filter(item=>item[1] > 0)
       .sort((a,b)=>b[1] - a[1])
       console.log(temp)
       return temp;

    }

    const convertChange2 = function() {
      const objArray2 = Object.entries(objChangeReturn);
       console.log(objArray2);
       const temp2 = objArray2.sort((a,b)=>b[1] - a[1])
       .map(item => {
        item[0]= item[0];
        item[1] = item[1].toFixed(2);
        item[1] = parseFloat(item[1]);
      return item})
       console.log(temp2)
       return temp2;

    }

    const changeEval = function(){

      if (change >= 100 && objRegister["ONE HUNDRED"] > 0) {

        change = change - 100;
        objRegister["ONE HUNDRED"] = objRegister["ONE HUNDRED"] - 100;
        objChangeReturn["ONE HUNDRED"] = objChangeReturn["ONE HUNDRED"] + 100;
        return changeEval(change);

      } else if (change >= 20 && objRegister["TWENTY"] > 0) {

        change = change - 20;
        objRegister["TWENTY"] = objRegister["TWENTY"] - 20;
        objChangeReturn["TWENTY"] = objChangeReturn["TWENTY"] + 20;
        console.log(objChangeReturn["TWENTY"])
       return changeEval(change);

      } else if (change >= 10 && objRegister["TEN"] > 0) {

        change = change - 10;
        objRegister["TEN"] = objRegister["TEN"] - 10;
        objChangeReturn["TEN"] = objChangeReturn["TEN"] + 10;
        console.log(objChangeReturn["TEN"]);
        return changeEval(change);

      } else if (change >= 5 && objRegister["FIVE"] > 0) {

        change = change - 5;
        objRegister["FIVE"] = objRegister["FIVE"] - 5;
        objChangeReturn["FIVE"] = objChangeReturn["FIVE"] + 5;
        console.log(objChangeReturn["FIVE"])
       return changeEval(change);

      } else if (change >= 1 && objRegister["ONE"] > 0) {

        change = change - 1;
        objRegister["ONE"] = objRegister["ONE"] - 1;
        objChangeReturn["ONE"] = objChangeReturn["ONE"] + 1;
        console.log(objChangeReturn["ONE"]);
        return changeEval(change);

      } else if (change >= 0.25 && objRegister["QUARTER"] > 0) {

        change = change - 0.25;
        objRegister["QUARTER"] = objRegister["QUARTER"] - 0.25;
        objChangeReturn["QUARTER"] = objChangeReturn["QUARTER"] + 0.25;
        console.log(objChangeReturn["QUARTER"]);
        return changeEval(change);

      } else if (change >= 0.1 && objRegister["DIME"] > 0) {

        change = change - 0.1;
        objRegister["DIME"] = objRegister["DIME"] - 0.1;
        objChangeReturn["DIME"] = objChangeReturn["DIME"] + 0.1;
        console.log(objChangeReturn["DIME"])
        return changeEval(change);

      } else if (change >= 0.05 && objRegister["NICKEL"] > 0) {

        change = change - 0.05;
        objRegister["NICKEL"] = objRegister["NICKEL"] - 0.05;
        objChangeReturn["NICKEL"] = objChangeReturn["NICKEL"] + 0.5;
        console.log(objChangeReturn["NICKEL"]);
        return changeEval(change);

      } else if (change >= 0.001 && objRegister["PENNY"] > 0) {
        change =  Math.round(change * 100) /100;
        change = change - 0.01;
        
        objRegister["PENNY"] = objRegister["PENNY"] - 0.01;
        
        

        console.log(objRegister["PENNY"]);
        objChangeReturn["PENNY"] = objChangeReturn["PENNY"] + 0.01;
        
        console.log(objChangeReturn["PENNY"])
        return changeEval(change);

      } else if(change === 0 && (Object.values(objRegister))
      .reduce((a,b)=> a+b) <= 0) {
          console.log(objChangeReturn)
      return {status: "CLOSED", change:convertChange2([objChangeReturn])}

    } else if(change === 0) {

      return {status: "OPEN", change: convertChange(objChangeReturn)}
    
    } else if(change != 0 && Object.values(objRegister) 
    .every(value=> value == 0 || value > change)){

      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    };


    if (Object.values(objRegister)
        .reduce((a,b)=> a+b) < change) {

          return {status: "INSUFFICIENT_FUNDS", change: []};

    } else if (change == 0) {

      return "no change"
    } else {
      return changeEval(change);
       
    }
    

   
   
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
   






   









   