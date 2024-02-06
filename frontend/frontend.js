"use strict";
const baseUrl = 'http://localhost:3001/api/cars';
const body = document.querySelector('body');
const fetchData = async () => {
    try {
        const response = await fetch(baseUrl);
        if (!response) {
            handleError(new Error('Response problems'));
            return;
        }
        return response.json();
    }
    catch (error) {
        console.error(error);
    }
};
fetchData()
    .then((data) => {
    if (!data) {
        handleError(new Error('No data fetched'));
        return;
    }
    return data;
})
    .catch((error) => {
    console.error(error);
});
const handleError = (error) => {
    console.log(error.message);
};
const displayData = async () => {
    const data = await fetchData();
    body.innerHTML = data
        .map((cars) => {
        console.log(cars);
        return `
    <p>${cars.brand} </>
    <p>${cars.model} </>
    <p>${cars.color} </>
    <p>${cars.price} </>
    <p>${cars.year} </>
    
    `;
    })
        .join('');
};
displayData();
