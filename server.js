// question 1 api 1


const axios = require('axios');


async function createInvestmentAccount() {
    try {
        const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';


        const data = {
            name: 'Your Full Name',
            email: 'your_colle@example.com',
            rollNumber: 123456, 
            phone: 1234567890  
        };

        
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log('Investment account created successfully!');
        } else {
            console.log('Error creating investment account:', response.status);
            console.log(response.data);
        }
    } catch (error) {
        console.error('Error creating investment account:', error);
    }
}


async function fetchStockPrice() {
    try {
        const token = 'YOUR_TIINGO_API_KEY';  
        const startDate = '2024-01-01';  
        const endDate = '2024-03-18';  
        const url = `https://api.tiingo.com/tiingo/daily/bajajfinserv/prices?token=${token}&startDate=${startDate}&endDate=${endDate}`;

        const response = await axios.get(url);

        if (response.status === 200) {
            const latestPrice = response.data[response.data.length - 1].close;
            console.log('Latest closing price of Bajaj Finserv:', latestPrice);
        } else {
            console.log('Error fetching stock price:', response.status);
            console.log(response.data);
        }
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}

createInvestmentAccount();
fetchStockPrice();
