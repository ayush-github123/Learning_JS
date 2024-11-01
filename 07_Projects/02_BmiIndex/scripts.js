const form = document.querySelector('form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const height = parseFloat(document.querySelector('#height').value);
            const weight = parseFloat(document.querySelector('#weight').value);
            const result = document.querySelector('#result');

            if (isNaN(height) || height <= 0) {
                result.innerHTML = "Please give a valid Height!";
            } else if (isNaN(weight) || weight <= 0) {
                result.innerHTML = "Please give a valid Weight!";
            } else {
                const bmiIndex = weight / Math.pow(height, 2);
                let category;

                if (bmiIndex < 18.5) {
                    category = "Underweight";
                } else if (bmiIndex < 24.9) {
                    category = "Healthy weight";
                } else if (bmiIndex < 29.9) {
                    category = "Overweight";
                } else if (bmiIndex < 40) {
                    category = "Obesity";
                } else {
                    category = "Severe obesity";
                }

                result.innerHTML = `Your BMI is: ${bmiIndex.toFixed(2)} - ${category}`;
            }
        });