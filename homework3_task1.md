Homework 3 - JavaScript Fundamentals
COMP420 - Spring 2017
Task 1 - solutions

J. Wangsadinata


1. The output is the following:
console.log(1 +  "2" + "2");      // "122"
console.log(1 +  + "2" + "2");    // "32"
console.log(1 +  - "1" + "2");    // "02"
console.log(+ "1" +  "1" + "2");  // "112"
console.log( "A" - "B" + "2");    // "NaN2"
console.log( "A" - "B" + 2);      // NaN


Example 1: 1 + "2" + "2" Outputs: "122"
Explanation: The first operation to be performed in 1 + "2". Since one of the operands ("2") is a string, JavaScript assumes it needs to perform string concatenation and therefore converts the type of 1 to "1", 1 + "2" yields "12". So, "12" + "2" yields "122".

Example 2: 1 +  + "2" + "2" Outputs: "32"
Explanation: Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".

Example 3: 1 + -"1" + "2" Outputs: "02"
Explanation: The explanation here is identical to the prior example, except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1 yielding 0, which is then converted to a string and concatenated with the final "2" operand, yielding "02".

Example 4: +"1" + "1" + "2" Outputs: "112"
Explanation: Although the first "1" operand is typecast to a numeric value based on the unary + operator that precedes it, it is then immediately converted back to a string when it is concatenated with the second "1" operand, which is then concatenated with the final "2" operand, yielding the string "112".

Example 5: "A" - "B" + "2" Outputs: "NaN2"
Explanation: Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.

Example 6: "A" - "B" + 2 Outputs: NaN
Explanation: As explained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.


2. The output will be the following:
console.log(false == '0')   // true
console.log(false === '0')  // false

In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however, tries to coerce the values before comparing them. They try to match the values to the same type before checking for equality. It is therefore generally good practice to use the === rather than ==.


3. This is something related to the floating point precision in JavaScript. It might print out “0.3” and “true”, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”


Task 3 qn 1. Object Reference
var a = {}, b = {}, c = {} -> This is creating three different objects
var a = b = c = {}         -> This is creating three different reference for one object.