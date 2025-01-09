const character = "#";
const count = 8;
const rows = [];
// 'for' loop : for ("iterator"; "condition"; "iteration") {} //
for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i+1));
}

let result = "";
// 'for...of' loop : for (const value of iterable) {} //
// you can use const because the variable only exists for a single iteration, not during the entire loop.
for (const row of rows) {
    result = result + row + "\n";
    // console.log(result);
   }

function addTwoNumbers(a, b) {
    return a+b;
  }
  const sum = addTwoNumbers(5, 10);