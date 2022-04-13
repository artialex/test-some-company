import React, { useState } from "react";
import { ErrorPage } from "../../../core";
import { PER_PAGE, useGetCarsQuery } from "../../car.api";
import { FilterForm } from "../../components/FilterForm";
import { CarList } from "../../components/CarList";
import { Pagination } from "../../../ui/components/Pagination";
import css from "./AllCarsPage.module.scss";

export const AllCarsPage = () => {
  let [page, setPage] = useState(1);
  let [filter, setFilter] = useState({
    color: "all",
    manufacturer: "all",
  });

  let { data, error, isLoading } = useGetCarsQuery({ page, ...filter });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={css.root}>
      <section className={css.left}>
        <FilterForm
          current={filter}
          onSubmit={(values) => {
            setFilter(values);
            setPage(1);
          }}
        />
      </section>

      <section className={css.right}>
        <h1>Available cars</h1>
        {data && (
          <h2>
            Showing {Math.min(PER_PAGE, data.cars.length)} of{" "}
            {data.totalCarsCount} results
          </h2>
        )}
        <CarList cars={data?.cars} isLoading={isLoading} />
        {data && (
          <Pagination
            current={page}
            total={data.totalPageCount}
            onFirstClick={() => setPage(1)}
            onPrevClick={() => setPage((page) => page - 1)}
            onNextClick={() => setPage((page) => page + 1)}
            onLastClick={() => setPage(data?.totalPageCount!)}
          />
        )}
      </section>
    </div>
  );
};
