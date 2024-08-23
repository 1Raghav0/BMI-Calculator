const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const heightInput = document.querySelector('#height');
        const weightInput = document.querySelector('#weight');
        const result = document.querySelector('#result');

        const height = parseInt(heightInput.value);
        const weight = parseInt(weightInput.value);

        if (isNaN(height) || height === '' || height < 0) {
            result.innerHTML = `Please enter a valid height: ${height}`;
        } else if (isNaN(weight) || weight === '' || weight < 0) {
            result.innerHTML = `Please enter a valid weight: ${weight}`;
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            result.innerHTML = `<span>${bmi}</span>`;
        }
    });

