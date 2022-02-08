module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};
  const IDENTICAL_SYMBOLS = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
  }
  for (i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      IDENTICAL_SYMBOLS.push(bracketsConfig[i][0]);
    }
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol) && !IDENTICAL_SYMBOLS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else if (IDENTICAL_SYMBOLS.includes(currentSymbol) && !stack.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;

}