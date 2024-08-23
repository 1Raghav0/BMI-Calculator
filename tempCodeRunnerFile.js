
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML  = `Please enter a valid height ${height}`;

    } 
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML  = `Please enter a valid weight ${weight}`;

    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2) 
        // to show the result
        result.innerHTML = `<span>${bmi}</span>`
    }