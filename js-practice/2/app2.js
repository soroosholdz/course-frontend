const readline = require("readline");

function multipleNumbers(num) {
    if (num < 1 || num > 20) {
        console.log("Error: Please enter a number between 1 and 20");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    while (true) {
        const input = await askQuestion(
            "please enter a number between 1 and 20: "
        );
        multipleNumbers(input);
    }

    rl.close();
};

main();
