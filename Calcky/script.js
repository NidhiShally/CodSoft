 document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let expression = '';

    function updateDisplay() {
        display.textContent = expression === '' ? '0' : expression;
    }

     document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (value === 'de') {
                expression = '';
            } else if (value === '=') {
                try {
                    expression = eval(expression);
                } catch (error) {
                    expression = 'Error';
                }
            } else {
                expression += value;
            }

            updateDisplay();
        });
    });
});
