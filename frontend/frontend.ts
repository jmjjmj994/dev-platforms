const baseUrl = 'http://localhost:3001/api/cars';
const body = document.querySelector('body') as HTMLBodyElement;

interface FetchedData {
  brand: string;
  color: string;
  model: string;
  price: number;
  year: number;
}

interface ErrorData {
  message: string;
}

const fetchData = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response) {
      handleError(new Error('Response problems'));
      return;
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

fetchData()
  .then((data: FetchedData) => {
    if (!data) {
      handleError(new Error('No data fetched'));
      return;
    }

    return data;
  })
  .catch((error) => {
    console.error(error);
  });

const handleError = (error: ErrorData) => {
  console.log(error.message);
};

const displayData = async () => {
  const data: FetchedData[] = await fetchData();
  body.innerHTML = data
    .map((cars: FetchedData) => {
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
