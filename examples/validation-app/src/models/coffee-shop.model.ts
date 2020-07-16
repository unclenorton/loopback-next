// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-validation-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class CoffeeShop extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  shopId?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 10,
      minLength: 5,
      errorMessage: 'City name should be between 5 and 10 characters',
    },
  })
  city: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      pattern: '\\d{3}-\\d{3}-\\d{4}',
      errorMessage: 'Invalid phone number',
    },
  })
  phoneNum: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      maximum: 100,
      minimum: 1,
      errorMessage: {
        maximum: 'Capacity cannot exceed 100',
        minimum: 'Capacity cannot be less than 1',
      },
    },
  })
  capacity: number;

  @property({
    type: 'number',
    jsonSchema: {
      range: [1, 5],
      errorMessage: 'Rating should be between 1 and 5',
    },
  })
  rating: string;

  constructor(data?: Partial<CoffeeShop>) {
    super(data);
  }
}

export interface CoffeeShopRelations {
  // describe navigational properties here
}

export type CoffeeShopWithRelations = CoffeeShop & CoffeeShopRelations;
