const character = "#";
const count = 8;
const rows = [];
let inverted = true;
// 'for' loop : for ("iterator"; "condition"; "iteration") {}
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i+1));
// }

// 'for...of' loop : for (const value of iterable) {}
// you can use const because the variable only exists for a single iteration, not during the entire loop.
for (const row of rows) {
    result = result + row + "\n";
    // console.log(result);
   }

function addTwoNumbers(a, b) {
    return a+b;
  }
  const sum = addTwoNumbers(5, 10);

  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }

for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

let result = "";
for (const row of rows) {
  result += row + "\n";
}

  console.log(result);