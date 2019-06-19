//Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

function removeDupedChars(str){
  let arr, uniqueChars

  arr = str.split('')

  uniqueChars = []

  for (let i = 0; i < arr.length; i++){

    if (!uniqueChars.includes(arr[i])){
      uniqueChars.push(arr[i])
    }

  }

  return uniqueChars.join('')
}

removeDupedChars('tree traversal')
