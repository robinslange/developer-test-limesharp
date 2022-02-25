repeat([1, 2, 3]);
reformat("liMeSHArp DeveLoper TEST");
next_binary_number([1, 0, 0, 0, 0, 0, 0, 1]);

function repeat(array) {
  if (array.length <= 1) return;

  let newArray = Array(3).fill(array).join(",").split(",");

  console.log(newArray);
}

function reformat(string) {
  if (string.length <= 0) return;

  // this is likely possible as a one-liner however
  // for readability i've kept it as two separate functions
  let newString = string.replace(/[aeiou]/gi, "");
  newString =
    newString.charAt(0).toUpperCase() + newString.slice(1).toLowerCase();

  console.log(newString);
}

function next_binary_number(array) {
    if(array.length <= 0) return;
  let newArray = array;
  let flag = 0;
  for (let i = newArray.length - 1; i >= 0; i--) {
    if (newArray[i] == 0) {
      newArray[i] = 1;
      flag = 1;
      break;
    } else {
      newArray[i] = 0;
    }
  }
  if (flag < 0) {
    newArray.unshift(1);
  }
  console.log(newArray);
}
