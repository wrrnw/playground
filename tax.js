
var income = process.argv[2];

var getTax = (income) => {
    // no tax for 0 - $18,200
    if (income <= 18200) {
        console.log(`No tax at all!`); 
        console.log(`The actual income is $${income}`);
    }
    // Pay 19% tax for each dollar income over $18,200
    else if (income > 18200 && income <= 37000) {
        let totalTax = (income - 18200) * 0.19;
        console.log(`Need to pay tax $${totalTax}`);
        console.log(`The actual income is $${income - totalTax}`);
    }
    // Pay $3,572 + 32.5% tax for each dollar income over $37,000
    else if (income > 37000 && income <= 90000) {
        let totalTax = 3572 + (income - 37000) * 0.325;
        console.log(`Need to pay tax $${totalTax}`);
        console.log(`The actual income is $${income - totalTax}`);
    }
    // Pay $20,797 + 37% tax for each dollar income over $90,000 
    else if (income > 90000 && income <= 180000) {
        let totalTax = 20797 + (income - 90000) * 0.37;
        console.log(`Need to pay tax $${totalTax}`);
        console.log(`The actual income is $${income-totalTax}`); 
    }
    // Pay $54,097 + 45% tax for each dollar income over $180,000
    else if (income > 180000) {
        let totalTax = 54097 + (income - 180000) * 0.45;
        console.log(`Need to pay tax $${totalTax}`);
        console.log(`The actual income is $${income-totalTax}`);
    }
}

getTax(income);