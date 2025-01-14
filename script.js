document.getElementById('voucher-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const voucherCodesList = document.getElementById('voucher-codes');
    voucherCodesList.innerHTML = '';

    generateOrangeVoucher(cardNumber, voucherCodesList);
});

function generateOrangeVoucher(cardNumber, voucherCodesList) {
    const url = `https://api.teeg.cloud/vouchers/campaigns/guests/${cardNumber}/voucher/T506VTXIAA?tz=`;
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzM2ODMwNTIyLCJuYmYiOjE3MzY4Mjk2MjIsImlwQWRkcmVzcyI6IjEwMy4xNTcuNDkuNDYiLCJpcGFkZHIiOiIxMDMuMTU3LjQ5LjQ2Iiwib2lkIjoiYWJiYmRkNGMtZmEyNy00ZDlmLTk2NTYtYzhhY2FjYTE1YWMzIiwic3ViIjoiYWJiYmRkNGMtZmEyNy00ZDlmLTk2NTYtYzhhY2FjYTE1YWMzIiwiZW1haWxzIjpbImhyZGdhbWVzMTAxQGdtYWlsLmNvbSJdLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6IjMzYTMwYjEwLTQwYTQtNDc1Zi04OTc3LWQzMTA1YzhhOTExYiIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzM2ODI5NjIyfQ.GwwKxh_cV1lCOAJpUlnmeeaW2TKCyYWkzjXBXfjuGh4irJDn2ahqaEddT58AQnYipswreAH0FrT2l0mGk3nIEW_7Qmg6URqAW23776isnWoasp5Ja5txTlET2ZuWPUC6ASPlKzRSF6Hm6zXdtaAzg-Al8zDw-S1nKwoSuAjvmqR4ybnwj2zrn17JBHdMnMxNQAny9E-euR2paV5yA5yycSXdwKqZ2C5v2caxMp0Ye0elQJqHg2lf7RnsROg7diNaEwbwtsqLGn7dRElMqMYHcI_b403VEzV0EN0S-bX_4KPdgdObkxwYinIC4HJyarW1k7GzDXiaeN9dCLJIgSahkg',
        'Content-Type': 'application/json'
    };

    fetch(url, { method: 'GET', headers: headers })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.voucherCode) {
                const listItem = document.createElement('li');
                listItem.innerText = data.voucherCode;
                voucherCodesList.appendChild(listItem);
                document.getElementById('voucher-result').classList.remove('hidden');
            } else {
                throw new Error('Voucher code not found in response');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to generate voucher. Please check the card number and try again.');
        });
}
