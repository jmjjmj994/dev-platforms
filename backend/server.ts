import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const luxuryCars = [
  {
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    color: 'Black',
    price: 100000,
    year: 2022,
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    color: 'Silver',
    price: 60000,
    year: 2023,
  },
  {
    brand: 'BMW',
    model: '7 Series',
    color: 'Blue',
    price: 90000,
    year: 2022,
  },
  {
    brand: 'BMW',
    model: 'X5',
    color: 'White',
    price: 65000,
    year: 2023,
  },
  {
    brand: 'Porsche',
    model: '911',
    color: 'Red',
    price: 120000,
    year: 2022,
  },
  {
    brand: 'Porsche',
    model: 'Cayenne',
    color: 'Gray',
    price: 75000,
    year: 2023,
  },
  {
    brand: 'Audi',
    model: 'A8',
    color: 'Green',
    price: 85000,
    year: 2022,
  },
  {
    brand: 'Audi',
    model: 'Q7',
    color: 'Brown',
    price: 70000,
    year: 2023,
  },
  {
    brand: 'Bentley',
    model: 'Continental GT',
    color: 'Purple',
    price: 200000,
    year: 2022,
  },
  {
    brand: 'Bentley',
    model: 'Bentayga',
    color: 'Gold',
    price: 250000,
    year: 2023,
  },
];

app.get('/', (request, response: any) => {
  response.send('hei').end;
});

app.get('/api/cars', (request, response: any) => {
  if (!response) return response.status(404).json({ error: 'No data' }).end;

  response.json(luxuryCars);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('server running at', PORT);
});
