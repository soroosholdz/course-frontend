function sumDigits(num) {
    if (num < 0) num = Math.abs(num); // در صورت منفی بودن عدد
    const digits = num.toString().split("").map(Number);
    return digits.reduce((sum, digit) => sum + digit, 0);
}

// مثال استفاده:
console.log(sumDigits(245)); // 11
