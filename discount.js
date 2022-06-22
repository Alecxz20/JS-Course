// Discount page funtions
// calcDiscount() funtion onClick()
// formula = (price * (100 - percentage))/100

function discount(price, percentage) {
    return (price * (100 - percentage)) / 100;
}

function calcDiscount() {
    const price = document.getElementById("itemPrice").value
    const percentage = document.getElementById("discount").value;

    const amountToPay = discount(price, percentage);
    document.getElementById("discountResults").innerHTML = `the total amount due after discount is aplied is $ ${amountToPay}`
}