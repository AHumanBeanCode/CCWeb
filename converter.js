async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const resultElement = document.getElementById('result');
    const resultCurrency = document.getElementById('resultCurrency').value;
  
    if (!amount || isNaN(amount)) {
      resultElement.textContent = 'Please enter a valid amount.';
      return;
    }
  
    try {
        console.log(resultCurrency)
        let converted;
      if(resultCurrency === 'USD') {
        const rate = 0.59; // Rate as of 21/4/25
        converted = (amount * rate).toFixed(2);
      }
      if(resultCurrency === 'GBP') {
        const rate = 0.45; // Rate as of 21/4/25
        converted = (amount * rate).toFixed(2);
      }
      if(resultCurrency === 'AUD') {
        const rate = 0.94; // Rate as of 21/4/25
        converted = (amount * rate).toFixed(2);
      }
      if(resultCurrency === 'CAD') {
        const rate = 0.83; // Rate as of 21/4/25
        converted = (amount * rate).toFixed(2);
      }
    if(resultCurrency === 'EUR') {
        const rate = 0.53; // Rate as of 21/4/25
        converted = (amount * rate).toFixed(2);
    }
    if(resultCurrency === 'JPY') {
        const rate = 85.04; // Rate as of 21/4/25
        converted = (amount * rate).toFixed(2);
    }
    resultElement.textContent = `${amount} NZD is equal to ${converted} ${resultCurrency}`;


    }
    catch (error) {
      console.error('Error fetching result:', error);
      resultElement.textContent = 'Error fetching result.';
    }
  }
  