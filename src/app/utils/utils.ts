function hasOnlyOneType(str:string) {
    return str.split("").every(char => char === str[0]);
}

function countOccurrences(str:string, char:string) {
    return str.split("").reduce((acc, curr) => {
      return curr === char ? acc + 1 : acc;
    }, 0);
  }
  

export {
    hasOnlyOneType,
    countOccurrences
};