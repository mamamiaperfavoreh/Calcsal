document.getElementById('submit').addEventListener('click', function() {
    const dayShifts = parseFloat(document.getElementById('dayShifts').value) || 0;
    const dopDayShifts = parseFloat(document.getElementById('dopDayShifts').value) || 0;
    const nightShifts = parseFloat(document.getElementById('nightShifts').value) || 0;
    const dopNightShifts = parseFloat(document.getElementById('dopNightShifts').value) || 0;
    const fine = parseFloat(document.getElementById('fine').value) || 0;
    const bonus = parseFloat(document.getElementById('bonus').value) || 0;

    const salary = (dayShifts * 165 + dopDayShifts * 206.25 + nightShifts * 190 + dopNightShifts * 237.50 - fine + bonus).toFixed(2);

    document.getElementById('result').innerHTML = `<h2>Your Calculated Salary: ${salary} BYN</h2>`;
});

document.getElementById('clear').addEventListener('click', function() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('result').innerHTML = '';
});
