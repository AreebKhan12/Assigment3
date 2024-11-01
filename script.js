document.addEventListener('DOMContentLoaded', function () {
    // Heron's Formula Calculation
    document.querySelector('.container .inner-container .CalculateButton button').addEventListener('click', calculateHeronsFormula);

    function calculateHeronsFormula() {
        const a = parseFloat(document.getElementById('sideA').value);
        const b = parseFloat(document.getElementById('sideB').value);
        const c = parseFloat(document.getElementById('sideC').value);

        if (a > 0 && b > 0 && c > 0) {
            const x = (4 * (a * a) * (b * b)) - Math.pow((a * a) + (b * b) - (c * c), 2);
            const ans = (0.25 * Math.sqrt(x));
            document.getElementById('answerHeron').value = ans;
        } else {
            document.getElementById('answerHeron').value = "Invalid input";
        }
    }
}

)
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.container .inner-container .CalculateButton2 button').addEventListener('click', calculateAmbiguousCase);

    function calculateAmbiguousCase() {

        const Angle = parseFloat(document.getElementById('AngleA2').value);
        const a = parseFloat(document.getElementById('sideA2').value);
        const b = parseFloat(document.getElementById('sideC2').value);

        if (isNaN(Angle) || isNaN(a) || isNaN(b) || Angle <= 0 || a <= 0 || b <= 0) {
            document.getElementById('answerAmbiCase').value = "Invalid input. Please enter positive values.";
            return;
        }

        const AngleRadians = (Angle * Math.PI) / 180;
        const height = b * Math.sin(AngleRadians);

        let result;

        if (Angle < 90) { // Acute angle
            if (a < height) {
                result = "No triangle";
            } else if (a === height) {
                result = "Right triangle";
            } else if (a > b) {
                result = "One triangle";
            } else if (height < a && a < b) {
                result = "Two triangles (Ambiguous Case)";
            }
        } else if (Angle > 90) { // Obtuse angle
            if (a <= b) {
                result = "No triangle";
            } else if (a > b) {
                result = "One triangle";
            }
        } else {
            result = "Angle Must Be Acute Or Obtuse. Please Try Again";
        }

        document.getElementById('answerAmbiCase').value = result;
    }

}
);




document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.container1 .inner-container .CalculateButton3 button').addEventListener('click', calculateNewtonRoot);

    function calculateNewtonRoot() {
        const initialGuess = parseFloat(document.getElementById('Guess').value);

        if (isNaN(initialGuess)) {
            document.getElementById('answerNewtons').value = "Invalid input";
            return;
        }

        function f(x) {
            return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        }

        function fPrime(x) {
            return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
        }

        let x0 = initialGuess;
        let x1 = x0 - f(x0) / fPrime(x0);

        while (Math.abs(x1 - x0) > 0.0001) {
            x0 = x1;
            x1 = x0 - f(x0) / fPrime(x0);
        }
        document.getElementById('answerNewtons').value = x1;
    }
}
);



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.CalculateButton4 button').addEventListener('click', calculatePolynomial);

    function calculatePolynomial() {
        // Retrieve values from updated input IDs
        const coeffsInput = document.getElementById('Coefficients').value;
        const exponentsInput = document.getElementById('exponents').value;
        const xValue = parseFloat(document.getElementById('Xvalue').value);

        // Parse the input strings into arrays, handling both commas and spaces
        const coefficients = coeffsInput.split(/[\s,]+/).map(Number);
        const exponents = exponentsInput.split(/[\s,]+/).map(Number);

        // Check if the number of coefficients and exponents match
        if (coefficients.length !== exponents.length) {
            alert('Please make sure the number of coefficients and exponents match.');
            return;
        }

        let polynomialFunction = '';
        let evaluationResult = 0;

        for (let i = 0; i < coefficients.length; i++) {
            const coeff = coefficients[i];
            const exp = exponents[i];

            // Build the polynomial function as a string
            polynomialFunction += `${coeff}x^${exp}`;
            if (i < coefficients.length - 1) {
                polynomialFunction += ' + ';
            }

            // Evaluate the polynomial at x = xValue
            evaluationResult += coeff * Math.pow(xValue, exp);
        }

        // Display the results in the designated output field
        document.getElementById('answerPolynomial').value = `${polynomialFunction} = ${evaluationResult}`;
    }
});





