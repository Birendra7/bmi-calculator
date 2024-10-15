function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('height-feet').value);
    const inches = parseFloat(document.getElementById('height-inches').value);

    if (weight > 0 && feet >= 0 && inches >= 0) {
        // Convert height from feet and inches to meters
        const totalHeightInInches = (feet * 12) + inches;
        const heightInMeters = totalHeightInInches * 0.0254;

        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        const bmiPrime = (bmi / 24.9).toFixed(2);
        const ponderalIndex = (weight / Math.pow(heightInMeters, 3)).toFixed(2);
        
        let category;
        if (bmi < 16) category = "Severe Thinness";
        else if (bmi >= 16 && bmi < 17) category = "Moderate Thinness";
        else if (bmi >= 17 && bmi < 18.5) category = "Mild Thinness";
        else if (bmi >= 18.5 && bmi < 25) category = "Normal";
        else if (bmi >= 25 && bmi < 30) category = "Overweight";
        else if (bmi >= 30 && bmi < 35) category = "Obese Class I";
        else if (bmi >= 35 && bmi < 40) category = "Obese Class II";
        else category = "Obese Class III";

        document.getElementById('result').innerHTML = `
            <p>Your BMI is <strong>${bmi}</strong> (${category})</p>
            <p><strong>BMI Prime:</strong> ${bmiPrime}</p>
            <p><strong>Ponderal Index:</strong> ${ponderalIndex}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = "Please enter valid values for weight, feet, and inches.";
    }
}
