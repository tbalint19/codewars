/* 
  variables
  data structures - string, number, boolean, null, array, object
  operators
  loops
  conditional statements
  functions
*/

const toUppercase = (char: string) => {
  const abc = "abcdefghijklmnopqrstuvwxyz"
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  let indexInabc: null | number = null
  for (let index = 0; index < abc.length; index++) {
    const currentChar = abc[index];
    if (char === currentChar)
      indexInabc = index
  }

  if (indexInabc === null)
    return char

  return ABC[indexInabc!]
}

const decode = (word: string) => {

  let result = ""

  for (let index = 0; index < word.length; index++) {

    const letter = toUppercase(word[index])

    let otherWasFound = false
    for (let innerIndex = 0; innerIndex < word.length; innerIndex++) {
      let compareTo = toUppercase(word[innerIndex])
      if (letter === compareTo && index !== innerIndex) {
        otherWasFound = true
      }
    }

    if (otherWasFound) {
      result += ")"
    } else {
      result += "("
    }

  }

  return result
}

const result1 = decode("recede")
const result2 = decode("dinD")
const result3 = decode("Success")
const result4 = decode("(( @")

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
