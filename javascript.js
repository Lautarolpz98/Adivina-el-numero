let secretNumber = Math.floor(Math.random() * 10) + 1;

const numeroElegidoContainer = document.getElementById("numeroElegido").parentElement;
const intentosContainer = document.getElementById("intentos").parentElement;

const input = document.getElementById("inputNumber");
const button = document.getElementById("checkBtn");
const chosenNumberSpan = document.getElementById("numeroElegido");
const attemptsSpan = document.getElementById("intentos");
const hint = document.getElementById("pista");
const resetBtn = document.getElementById("resetBtn");


let failedAttempts = 0;

resetBtn.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    failedAttempts = 0;

    input.value = "";
    chosenNumberSpan.innerText = "-";
    attemptsSpan.innerText = "0";
    hint.innerText = "";

    button.disabled = false;
});

button.addEventListener("click", () => {
        const userNumber = Number(input.value);

        if (userNumber < 1 || userNumber > 10) {
            pista.innerText = "⚠️ Ingresa un número entre 1 y 10";

            numeroElegidoContainer.classList.add("hidden");
            intentosContainer.classList.add("hidden")

            return;
        }

        numeroElegidoContainer.classList.remove("hidden");
        intentosContainer.classList.remove("hidden");

        chosenNumberSpan.innerText = userNumber;

        if (userNumber === secretNumber) {
            hint.innerText = "🎉 ¡Correcto! Adivinaste el número";
            button.disabled = true;
        } else if (userNumber < secretNumber) {
            hint.innerText = "🔼 Pista: el número es más alto";
            failedAttempts++;
        } else {
            hint.innerText = "🔽 Pista: el número es más bajo";
            failedAttempts++;
        }

        attemptsSpan.innerText = failedAttempts;

        input.value = "";
    }


);