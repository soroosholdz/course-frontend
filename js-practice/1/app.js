// تولید عدد تصادفی بین 1 تا 100
const inputtNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 10;

while (attempts < maxAttempts) {
    const userInput = prompt(
        `تلاش ${attempts + 1}: یک عدد بین 1 تا 100 وارد کنید:`
    );

    // خروج از حلقه اگر کاربر لغو کند
    if (userInput === null) {
        alert("بازی لغو شد.");
        break;
    }

    const guess = parseInt(userInput, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("لطفاً یک عدد معتبر بین 1 تا 100 وارد کنید.");
        continue;
    }

    attempts++;

    if (guess > inputtNumber) {
        alert("عدد کوچک‌تری را وارد کنید.");
    } else if (guess < inputtNumber) {
        alert("عدد بزرگ‌تری را وارد کنید.");
    } else {
        alert(`تبریک! عدد درست را پیدا کردید. تعداد تلاش‌ها: ${attempts}`);
        break;
    }
}

if (attempts === maxAttempts) {
    alert(`شما موفق به حدس عدد نشدید. عدد صحیح: ${targetNumber}`);
}
