// Computes final calculations 
function compute() {
    const principal = document.getElementById("principal").value;

// Verification of positve result or alert is given
    if (principal < 1 || principal == "") {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const date = new Date();
    const thisYear = date.getFullYear();

// Calculation results
    const futureYear = thisYear + Number(years);
    const result = document.getElementById("result");
    calcData = "If you deposit <mark>" + principal + "</mark>,<br>"
        + "at an interest rate of <mark>" + rate + `%` + "</mark>.<br>"
            + "You will receive an amount of <mark>" + interest + "</mark>,<br>"
            + "in the year <mark>" + futureYear + "</mark>";
    result.innerHTML = calcData;
}

// Rate indicator 
function update() {
    const slider = document.getElementById("rate");
    const calcData = document.getElementById("demo");
    const percents = slider.value + "%";
    calcData.innerHTML = percents;
}
