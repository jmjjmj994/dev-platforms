import express from 'express';
import 'dotenv/config';
import { v4 as uuid4 } from 'uuid';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

let luxuryCars: BrandNewCar[] = [
  {
    id: 1,
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    color: 'Black',
    price: 100000,
    year: 2022,
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    color: 'Silver',
    price: 60000,
    year: 2023,
  },
  {
    id: 3,
    brand: 'BMW',
    model: '7 Series',
    color: 'Blue',
    price: 90000,
    year: 2022,
  },
  {
    id: 4,
    brand: 'BMW',
    model: 'X5',
    color: 'White',
    price: 65000,
    year: 2023,
  },
  {
    id: 5,
    brand: 'Porsche',
    model: '911',
    color: 'Red',
    price: 120000,
    year: 2022,
  },
  {
    id: 6,
    brand: 'Porsche',
    model: 'Cayenne',
    color: 'Gray',
    price: 75000,
    year: 2023,
  },
  {
    id: 7,
    brand: 'Audi',
    model: 'A8',
    color: 'Green',
    price: 85000,
    year: 2022,
  },
  {
    id: 8,
    brand: 'Audi',
    model: 'Q7',
    color: 'Brown',
    price: 70000,
    year: 2023,
  },
  {
    id: 9,
    brand: 'Bentley',
    model: 'Continental GT',
    color: 'Purple',
    price: 200000,
    year: 2022,
  },
  {
    id: 10,
    brand: 'Bentley',
    model: 'Bentayga',
    color: 'Gold',
    price: 250000,
    year: 2023,
  },
];

app.get('/', (request, response: any) => {
  response.send('hei').end();
});

app.get('/api/cars', (request, response: any) => {
  if (!response) return response.status(404).json({ error: 'No data' }).end();

  response.json(luxuryCars);
});

interface BrandNewCar {
  id: number;
  brand: string;
  model: string;
  color: string;
  price: number;
  year: number;
}

app.post('/api/cars', (request, response) => {
  const body = request.body;
  if (!body.brand)
    return response.status(404).json({ error: 'Name missing' }).end();

  const newCar: BrandNewCar = {
    id: Math.floor(Math.random() * 100),
    brand: body.brand,
    model: body.model,
    color: body.color,
    price: body.price,
    year: body.year,
  };

  luxuryCars = luxuryCars.concat(newCar);
  console.log(luxuryCars);
  response.json(newCar);
});

app.delete('/api/cars/:id', (request, response) => {
  const id = Number(request.params.id);
  luxuryCars = luxuryCars.filter((car) => car.id !== id);
  response.status(204).end();
});

app.put('/api/cars/:id', (request, response) => {
  const id = Number(request.params.id);
  const body = request.body;

  let carToUpdate = luxuryCars.find((car) => car.id === id);
  if (!carToUpdate) {
    return response.status(404).json({ error: 'Car not found' });
  }
  carToUpdate.brand = body.brand || carToUpdate.brand;
  carToUpdate.model = body.model || carToUpdate.model;
  carToUpdate.color = body.color || carToUpdate.color;
  carToUpdate.price = body.price || carToUpdate.price;
  carToUpdate.year = body.year || carToUpdate.year;
  response.status(200).json(carToUpdate);
});

app.patch('/api/cars/:id', (request, response) => {
  const id = Number(request.params.id);
  const body = request.body;
  let carToUpdate = luxuryCars.find((car) => car.id === id);
  if (!carToUpdate) {
    return response.status(404).json({ error: 'Car not found' }).end();
  }

  if (body.brand) {
    carToUpdate.brand = body.brand;
  }
  if (body.model) {
    carToUpdate.model = body.model;
  }
  if (body.color) {
    carToUpdate.color = body.color;
  }
  if (body.price) {
    carToUpdate.price = body.price;
  }
  if (body.year) {
    carToUpdate.year = body.year;
  }

  response.status(200).json(carToUpdate);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('server running at', PORT);
});

//671
