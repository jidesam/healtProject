

document.getElementById('form-dv')
            .addEventListener('submit', () => {
                let name = document.getElementById('name-text').value;
                let email = document.getElementById('email').value;
                let message = document.getElementById('input-text').value;

                const userInput = {name, email, message};
                sessionStorage.setItem(`${name}'s Message`, JSON.stringify(userInput));
                alert(`Hello ${name}, Your message has been submitted, we will get back to you shortly. Thank you`)
            });