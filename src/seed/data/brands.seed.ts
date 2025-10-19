import { Brand } from 'src/brands/entities/brand.entity';
import { v4 } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: v4(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: v4(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: v4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
];
