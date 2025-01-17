# function dotCalculator(equation) {
#   const [left, operator, right] = equation.split(' ');
#   const leftCount = left.length;
#   const rightCount = right.length;
#   let result;
#   if (operator === '+') {
#     result = leftCount + rightCount;
#   } else if (operator === '-') {
#     result = leftCount - rightCount;
#   } else if (operator === '*') {
#     result = leftCount * rightCount;
#   } else if (operator === '//') {
#     result = Math.floor(leftCount / rightCount);
#   }
#   return result === 0 ? '' : '.'.repeat(result);
# }