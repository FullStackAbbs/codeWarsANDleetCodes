https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.



Example 1:

Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.
Example 2:

Input: num = 8
Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.
//
//
Recursion Way
var numberOfSteps  = function(num, count = 0) {
    if (num === 0) return count;
    return num % 2 === 0 ? numberOfSteps(num/2, count+1) : numberOfSteps(num -1, count + 1);
};
Iterative Way
My ansswer but there's an error:

var numberOfSteps  = function(num) {

    while(num > 0 ){
        let count=0;

        if(num % 2 === 0){
          num=num/2;
          count+=count;
          console.log("me",count)
        }else{
            num = num-1;
          count++
          console.log("him",count)
        }return count
    }
};
var numberOfSteps  = function(num) {
  let count = 0;
  while (num != 0) {
    if (num % 2 === 0) {
      count++;
      num = num/2;
    } else {
      count++;
      // if we want the counter to work we need to use count++ AND not count=+
      num=num-1;
    }
  }
  return count;
};
var numberOfSteps  = function(num) {
  let count = 0;
    if (num % 2 === 0 && num !== 0) {
      count++;
      num = num/2;
      return function(num)
    } else if (numv< 0 ) {
      count++;
      // if we want the counter to work we need to use count++ AND not count=+
      num=num-1;
      
    }

  return count;
};
