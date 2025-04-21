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
      if(resultCurrency === 'USD') {
        const rate = 0.59; // Rate as of 21/4/25
        const converted = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} NZD = ${converted} ${resultCurrency}`;
      }
      if(resultCurrency === 'GBP') {
        const rate = 0.45; // Rate as of 21/4/25
        const converted = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} NZD = ${converted} ${resultCurrency}`;
      }
      if(resultCurrency === 'AUD') {
        const rate = 0.94; // Rate as of 21/4/25
        const converted = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} NZD = ${converted} ${resultCurrency}`;
      }
      if(resultCurrency === 'CAD') {
        const rate = 0.83; // Rate as of 21/4/25
        const converted = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} NZD = ${converted} ${resultCurrency}`;
      }
    if(resultCurrency === 'EUR') {
        const rate = 0.53; // Rate as of 21/4/25
        const converted = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} NZD = ${converted} ${resultCurrency}`;
    }
    
    }
    catch (error) {
      console.error('Error fetching conversion rate:', error);
      resultElement.textContent = 'Error fetching conversion rate.';
    }
  }
  