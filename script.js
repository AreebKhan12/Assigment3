function HeronsFormula() {

    const a = parseFloat(document.getElementById('sideA'));
    const b = parseFloat(document.getElementById('sideB'));
    const c = parseFloat(document.getElementById('sideC'));

if ( a > 0 && b > 0 && c > 0 ) {
    const x = parseFloat(4*(a*a)*(b*b) - Math.pow((a*a) + (b*b) - (c*c)),2 )
const ans = parseFloat((1/4)*(Math.sqrt(x)))


document.getElementById('answerHeron').value = ans;
} else {
    document.getElementById('answerHeron').value = "Invalid input";

    
}

document.getElementById('CalculateButton').addEventListener('click', HeronsFormula);
}
