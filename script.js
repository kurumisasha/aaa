document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const voucherResult = document.getElementById('voucherResult');
    const voucherCode = document.getElementById('voucherCode');

    generateButton.addEventListener('click', function () {
        const apiUrl = 'https://api.teeg.cloud/vouchers/campaigns/guests/2012031455/voucher/T506VTXIAA?tz=';

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzM2ODMwNTIyLCJuYmYiOjE3MzY4Mjk2MjIsImlwQWRkcmVzcyI6IjEwMy4xNTcuNDkuNDYiLCJpcGFkZHIiOiIxMDMuMTU3LjQ5LjQ2Iiwib2lkIjoiYWJiYmRkNGMtZmEyNy00ZDlmLTk2NTYtYzhhY2FjYTE1YWMzIiwic3ViIjoiYWJiYmRkNGMtZmEyNy00ZDlmLTk2NTYtYzhhY2FjYTE1YWMzIiwiZW1haWxzIjpbImhyZGdhbWVzMTAxQGdtYWlsLmNvbSJdLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6IjMzYTMwYjEwLTQwYTQtNDc1Zi04OTc3LWQzMTA1YzhhOTExYiIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzM2ODI5NjIyfQ.GwwKxh_cV1lCOAJpUlnmeeaW2TKCyYWkzjXBXfjuGh4irJDn2ahqaEddT58AQnYipswreAH0FrT2l0mGk3nIEW_7Qmg6URqAW23776isnWoasp5Ja5txTlET2ZuWPUC6ASPlKzRSF6Hm6zXdtaAzg-Al8zDw-S1nKwoSuAjvmqR4ybnwj2zrn17JBHdMnMxNQAny9E-euR2paV5yA5yycSXdwKqZ2C5v2caxMp0Ye0elQJqHg2lf7RnsROg7diNaEwbwtsqLGn7dRElMqMYHcI_b403VEzV0EN0S-bX_4KPdgdObkxwYinIC4HJyarW1k7GzDXiaeN9dCLJIgSahkg',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                voucherResult.classList.remove('hidden');
                voucherCode.textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                alert('Terjadi kesalahan dalam mengambil data. Silakan coba lagi.');
            });
    });
});
