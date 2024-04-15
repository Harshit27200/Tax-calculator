function calculateTax() {
   
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    
    const age = document.getElementById('age').value;
    const income = parseFloat(document.getElementById('income').value);
    const extra = parseFloat(document.getElementById('extra').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    
    let error = false;
    if (!age) {
        document.getElementById('ageError').style.display = 'inline';
        error = true;
    }
    if (isNaN(income) || income < 0) {
        document.getElementById('incomeError').style.display = 'inline';
        error = true;
    }
    if (isNaN(extra) || extra < 0) {
        document.getElementById('extraError').style.display = 'inline';
        error = true;
    }
    if (isNaN(deductions) || deductions < 0) {
        document.getElementById('deductionsError').style.display = 'inline';
        error = true;
    }

    if (error) return;

    
    let tax = 0;
    if (income + extra - deductions <= 8) {
        tax = 0;
    } else {
        const taxableIncome = income + extra - deductions - 8;
        switch (age) {
            case '<40':
                tax = taxableIncome * 0.3;
                break;
            case '≥40&<60':
                tax = taxableIncome * 0.4;
                break;
            case '≥60':
                tax = taxableIncome * 0.1;
                break;
        }
    }

    
    document.getElementById('result').textContent = `Tax Payable: ${tax.toFixed(2)} Lakhs`;

    
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
