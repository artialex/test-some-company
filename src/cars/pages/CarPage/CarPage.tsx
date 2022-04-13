import React from "react";
import { Button, capitalize } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetCarQuery } from "../../car.api";
import { Loader } from "../../../ui";
import { ErrorPage } from "../../../core";
import { useLocalStorageSet } from "../../hooks/useLocalStorageSet";
import { numbers } from "../../../platform/intl";
import css from "./CarPage.module.scss";

export const CarPage = () => {
  let params = useParams<keyof CarPageParams>() as CarPageParams;

  let [isFavorite, setFavorite] = useLocalStorageSet("favorites", params.id);

  let { data, isLoading, error } = useGetCarQuery(params.id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className={css.root}>
      <section className={css.banner}>
        {/*
        <img
          src={data.car.pictureUrl}
          alt={`${data.car.manufacturerName} ${data.car.modelName}`}
        />
        */}
      </section>
      <div className={css.container}>
        <section className={css.left}>
          <h1>
            {data.car.manufacturerName} {data.car.modelName}
          </h1>
          <h2>
            Stock # {data.car.stockNumber} -{" "}
            {numbers.format(data.car.mileage.number)}{" "}
            {data.car.mileage.unit.toUpperCase()} - {data.car.fuelType} -{" "}
            {capitalize(data.car.color)}
          </h2>

          <p>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </p>
        </section>

        <section className={css.right}>
          <div>
            <p style={{ float: "right" }}>
              If you like this car, click the button and save it in your
              collection of favourite items
            </p>

            <Button onClick={() => setFavorite(!isFavorite)}>
              {isFavorite ? "Remove" : "Save"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

// -- Types ----------------------------------------------------------------------------------------

interface CarPageParams {
  id: string;
}
