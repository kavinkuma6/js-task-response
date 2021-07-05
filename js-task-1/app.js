const items = [
  { name: "Skate", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Mobile", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
  { name: "Mouse", price: 25 }
];

const itemsEl = document.getElementById("items");
function sort(order) {
  itemsEl.innerHTML = "";
  let sorted = [];
  if (order === "asc") {
    sorted = items.sort((a, b) => a.price - b.price);
  } else if (order === "desc") {
    sorted = items.sort((a, b) => b.price - a.price);
  }
  for (let i = 0; i < items.length; i++) {
    const liEl = document.createElement("li");
    liEl.appendChild(
      document.createTextNode(items[i].name + " - " + items[i].price)
    );
    itemsEl.appendChild(liEl);
  }
}
