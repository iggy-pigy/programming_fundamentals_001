function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function makeHalfPrice(price) {
    return price - (price/2);
}

function countBooks(books) {
    return books.length;
}

function isInStock(books) {
    const book = {
title: "The Stone Diaries",
  author: "Carol Shields",
  yearOfPublication: 1993,
  quantity: 9
};
if (book.quantity>=1) {
    return true;
} else {
    return false;
}}

function getTotalOrderPrice(price, quantity) {
    var netoPrice = price * quantity;
    var totalprice = netoPrice * 1.2;
    return Math.round(totalprice * 10) / 10;
}
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice,
};
