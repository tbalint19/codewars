const toUpperCase = (char: string) => {
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

  return ABC[indexInabc]
}

const getPosition = (char: string) => {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  let indexInABC: null | number = null

  for (let index = 0; index < ABC.length; index++) {
    const observedChar = ABC[index]
    if (observedChar === char)
      indexInABC = index + 1
  }

  if (indexInABC === null)
    return ""

  return "" + indexInABC
}


const cutLastCharIfSpace = (word: string) => {
  let result = ""

  for (let index = 0; index < word.length; index++) {
      const char = word[index];
      if (!(index === word.length-1 && char === " "))
          result += char   
  }

  return result
}

const alphabetPosition = (text: string) => {
  let result = ""

  for (let index = 0; index < text.length; index++) {
    const character = toUpperCase(text[index]);
    const toAdd = getPosition(character)
    result += toAdd
    if (toAdd !== "")
      result += " "
  }

  return cutLastCharIfSpace(result)
}

const result = alphabetPosition("The sunset sets at twelve o' clock.")
console.log(result)

