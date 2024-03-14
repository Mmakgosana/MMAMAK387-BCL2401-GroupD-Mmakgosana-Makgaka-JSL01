function validateSyntax() {

    let input = document.getElementById('petInput').value;

    // Validation logic goes here

    let result=""; // Placeholder for validation result

    // TODO: Write your validation logic here

        // Check if input starts with 'pet_' and followed by alphanumeric characters

        let pattern = /^pet_[0-9]{4}[aA-zZ]+/;
        
    // Check if the input matches the pattern

        if(pattern.test(input)) {
            result = 'Valid Syntax <span class="valid"></span>';  // Set result message for valid input

        } else {
            result = 'Invalid Syntax <span class="invalid"></span>';  // Set result message for invalid input
        }


       
    // The code is to display the validation result
    document.getElementById('result').innerHTML = result;
}


