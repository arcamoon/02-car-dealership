import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: v4(),
      brand: 'Toyota',
      model: 'Hilux',
    },
    {
      id: v4(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: v4(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOnById(id: string) {
    const car = this.cars.find((e) => e.id == id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: v4(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }
}
