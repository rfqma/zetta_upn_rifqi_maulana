function book(
    title,
    author,
    price,
    discount,
    tax,
    availability
) {
    const _discount = 0.01
    const _tax = 0.01

    let discountTotal = price * (discount * _discount) // Book Discount Total

    let finalPriceDiscount = price - discountTotal // Book Price After Discount

    let taxTotal = finalPriceDiscount * (tax * _tax) // Book Tax Total After Discount

    let finalPriceTax = finalPriceDiscount + taxTotal // Book Price After Discount and Tax

    console.log("Book Title: ", title)
    console.log("Author: ", author)
    console.log("Price: ", price)
    console.log("Discount (%): ", discount)
    console.log("Tax (%): ", tax)
    console.log("Discount: ", discountTotal)
    console.log("Price After Discount: ", finalPriceDiscount)
    console.log("Tax: ", taxTotal)
    console.log("Price After Tax: ", finalPriceTax)
    console.log("Availability: ", availability)
}

book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 150000, 30, 10, false)