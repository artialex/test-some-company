export interface Car {
  stockNumber: string;
  manufacturerName: string;
  modelName: string;
  color: Color;
  mileage: {
    number: number;
    unit: MileageUnit;
  };
  fuelType: string;
  pictureUrl: string;
}

export type Color = string;

export interface Manufacturer {
  name: string;
  models: Model[];
}

export interface Model {
  name: string;
}

export enum FuelType {
  Diesel = "Diesel",
  Petrol = "Petrol",
}

export enum MileageUnit {
  KM = "km",
  MI = "mi",
}

export interface Filter {
  color: Color;
  manufacturer: string;
}

// -- Api Types ------------------------------------------------------------------------------------

export type GetCarResponse = {
  car: Car;
};

export interface GetCarsRequest {
  page: number;
  color: string;
  manufacturer: string;
}

export interface GetCarsResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}

export interface GetColorsResponse {
  colors: Color[];
}

export interface GetManufacturersResponse {
  manufacturers: Manufacturer[];
}
