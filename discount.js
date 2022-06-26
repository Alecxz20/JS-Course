// Discount page funtions
// calcDiscount() funtion onClick()
// formula = (price * (100 - percentage))/100

function discount(price, percentage) {
    return (price * (100 - percentage)) / 100;
}

// Creating an array of cupons

const coupons = [
    "15OFF",
    "20OFF",
    "30OFF"
]

function calcDiscount() {
    const price = document.getElementById("itemPrice").value
    let percentage = parseInt(document.getElementById("discount").value);
    const coupon = document.getElementById("coupons").value;

    if (coupon === coupons[0]) {
        percentage = percentage + 15;
    } else if (coupon === coupons[1]) {
        percentage = percentage + 20;
    } else if (coupon === coupons[2]) {
        percentage = percentage + 30;
    }

    const amountToPay = discount(price, percentage);
    document.getElementById("discountResults").innerHTML = `the total amount due after discount is aplied is $ ${amountToPay}`
}

// input id "coupons"

