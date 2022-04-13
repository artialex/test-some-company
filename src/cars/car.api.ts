import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Car,
  GetCarResponse,
  GetCarsRequest,
  GetCarsResponse,
  GetColorsResponse,
  GetManufacturersResponse,
} from "./car.types";

export const PER_PAGE = 10;

export let carApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://auto1-mock-server.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    /**
     *
     * @url https://auto1-mock-server.herokuapp.com/docs/#/default/get_api_cars
     */
    getCars: builder.query<GetCarsResponse, GetCarsRequest>({
      query: ({ page, ...filter }) => {
        let params = new URLSearchParams({
          page: String(page),
        });

        if (filter.color !== "all") {
          params.set("color", filter.color);
        }

        if (filter.manufacturer !== "all") {
          params.set("manufacturer", filter.manufacturer);
        }

        return `/cars?` + params.toString();
      },
    }),

    /**
     *
     * @url https://auto1-mock-server.herokuapp.com/docs/#/default/get_api_cars__stockNumber_
     */
    getCar: builder.query<GetCarResponse, Car["stockNumber"]>({
      query: (id) => `/cars/${id}`,
    }),

    /**
     *
     * @url https://auto1-mock-server.herokuapp.com/docs/#/default/get_api_colors
     */
    getColors: builder.query<GetColorsResponse, void>({
      query: () => "/colors",
    }),

    /**
     *
     * @url https://auto1-mock-server.herokuapp.com/docs/#/default/get_api_manufacturers
     */
    getManufacturers: builder.query<GetManufacturersResponse, void>({
      query: () => "/manufacturers",
    }),
  }),
});

export let {
  useGetCarsQuery,
  useGetCarQuery,
  useGetColorsQuery,
  useGetManufacturersQuery,
} = carApi;
