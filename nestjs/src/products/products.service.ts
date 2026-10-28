import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private readonly products = [
        { id: 1, name: 'Mechanical keyboard', priceCents: 7500 },
        { id: 2, name: 'USB-C cable', priceCents: 1200 },
        { id: 3, name: 'Coaxial cable', priceCents: 800 },
        { id: 4, name: 'HDMI cable', priceCents: 1500 },
    ];

    findAll() {
        return this.products;
    }
}