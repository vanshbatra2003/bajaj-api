// api 2 
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
            const accountNumber = response.data.accountNumber;
            
            buyStocks(accountNumber);
        } else {
            console.log('Error creating investment account:', response.status);
            console.log(response.data);
        }
    } catch (error) {
        console.error('Error creating investment account:', error);
    }
}

async function buyStocks(accountNumber) {
    try {
        const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';

        
        const data = {
            company: 'Bajaj Finserv',
            currentPrice: 1000, 
            accountNumber: accountNumber 
        };


        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'bfhl-auth': 123456  
            }
        });

        if (response.status === 200) {
            console.log('Stocks bought successfully!');
            console.log(response.data);
        } else {
            console.log('Error buying stocks:', response.status);
            console.log(response.data);
        }
    } catch (error) {
        console.error('Error buying stocks:', error);
    }
}


createInvestmentAccount();
