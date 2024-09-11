const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const test = document.querySelector("#test");

const shortWords = fruits.filter(function (word) {
  return word.length < 20;
});

console.log(shortWords);
test.innerHTML = shortWords;

function listItems(item) {
  if (item.length === 6) {
    score = 90;
  } else if (item.length === 10) {
    score = 100;
  } else if (item.length <= 5) {
    score = 70;
  }
  // return `<li>${score}</li>`
  return score;
}
// const items = shortWords.map(listItems).join(' ')
const items = shortWords.map(listItems);
console.log(items);
// test.innerHTML = items

const total = items.reduce(function (sum, value) {
  return sum + value;
});
test.innerHTML = total;
