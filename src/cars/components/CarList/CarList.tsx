import React, { FC } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "@mui/material";
import { numbers } from "../../../platform/intl";
import type { Car } from "../../car.types";
import css from "./CarList.module.scss";

export const CarList: FC<CarListProps> = ({ cars, isLoading }) => (
  <div className={css.root}>
    {isLoading ? (
      <CarItemSkeleton />
    ) : (
      cars?.map((car) => <CarItem key={car.stockNumber} car={car} />)
    )}
  </div>
);

const CarItem: FC<CarItemProps> = ({ car }) => (
  <div className={css.item}>
    <section>
      <img
        width={120}
        src={car.pictureUrl}
        alt={`${car.manufacturerName} ${car.modelName}`}
      />
    </section>

    <section className={css.description}>
      <h2>
        <b>
          {car.manufacturerName} {car.modelName}
        </b>
      </h2>
      <p>
        Stock # {car.stockNumber} - {numbers.format(car.mileage.number)}{" "}
        {car.mileage.unit.toUpperCase()} - {car.fuelType} -{" "}
        {capitalize(car.color)}
      </p>
      <Link to={`/${car.stockNumber}`}>View details</Link>
    </section>
  </div>
);

const CarItemSkeleton = () => (
  <div className={css.skeleton}>
    <section>
      <div className={css.image}>Image</div>
    </section>
    <section className={css.description}>
      <h1>Loading</h1>
      <p>Loading</p>
      <p>Loading</p>
    </section>
  </div>
);

// -- Types ----------------------------------------------------------------------------------------

interface CarListProps {
  isLoading: boolean;
  cars: Car[] | undefined;
}

interface CarItemProps {
  car: Car;
}
