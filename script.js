document.addEventListener('DOMContentLoaded', () => {
    const numberSelect = document.getElementById('numberSelect');
     
    // Populate the dropdown with numbers from 1 to 100
   for (let i = 1; i <= 60; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        numberSelect.appendChild(option);
    }
});

    const generateButton = document.getElementById('Generate');
    const displayDiv = document.getElementById('display');
    const numberSelect = document.getElementById('numberSelect');
    const copy=document.getElementById('save');

    generateButton.addEventListener('click', () => {
        const selectedValue = parseInt(numberSelect.value); // Convert value to integer
        let password = generateRandomPassword(selectedValue);
        displayDiv.placeholder=password;
        console.log(password)
    });

    function generateRandomPassword(length) {
        let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*~?<->,.'";
        let password = '';
        for (let i = 0; i < length; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return password;
    }
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(displayDiv.placeholder);
    alert("Password copied!")
})

    
    