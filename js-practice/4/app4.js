function countDigits(num) {
    if (num <= 0) {
        console.log("عدد باید بزرگتر از صفر باشد.");
        return;
    }
    return num.toString().length;
}
