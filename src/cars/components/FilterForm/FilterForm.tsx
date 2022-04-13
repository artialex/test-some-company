import { FC, SyntheticEvent, useState } from "react";
import {
  Button,
  capitalize,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useGetColorsQuery, useGetManufacturersQuery } from "../../car.api";
import { Loader } from "../../../ui";
import { Filter } from "../../car.types";
import css from "./FilterForm.module.scss";

const ColorControl: FC<ColorControlProps> = ({ color, setColor }) => {
  let { data, error, isLoading } = useGetColorsQuery();

  if (error) {
    return <div>Error when loading colors</div>;
  }

  return (
    <FormControl fullWidth className={css.control}>
      {isLoading ? (
        <Loader />
      ) : !data ? (
        <div>No colors loaded</div>
      ) : (
        <>
          <InputLabel id="color">Color</InputLabel>
          <Select
            labelId="color"
            id="color"
            value={color}
            label="Color"
            onChange={(event) => setColor(event.target.value)}
          >
            <MenuItem value="all" selected>
              All car colors
            </MenuItem>
            {data?.colors.map((color) => (
              <MenuItem key={color} value={color}>
                {capitalize(color)}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </FormControl>
  );
};

const ManufacturerControl: FC<ManufacturerControlProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  let { data, error, isLoading } = useGetManufacturersQuery();

  if (error) {
    return <div>Error when loading colors</div>;
  }

  return (
    <FormControl fullWidth className={css.control}>
      {isLoading ? (
        <Loader />
      ) : !data ? (
        <div>No colors loaded</div>
      ) : (
        <>
          <InputLabel id="manufacturer">Manufacturer</InputLabel>
          <Select
            labelId="manufacturer"
            id="manufacturer"
            value={manufacturer}
            label="Manufacturer"
            onChange={(event) => setManufacturer(event.target.value)}
          >
            <MenuItem value="all" selected>
              All car manufacturers
            </MenuItem>
            {data?.manufacturers.map((manufacturer) => (
              <MenuItem key={manufacturer.name} value={manufacturer.name}>
                {capitalize(manufacturer.name)}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </FormControl>
  );
};

export const FilterForm: FC<FilterFormProps> = ({ current, onSubmit }) => {
  let [color, setColor] = useState("all");
  let [manufacturer, setManufacturer] = useState("all");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    onSubmit({ color, manufacturer });
  };

  return (
    <div className={css.root}>
      <form onSubmit={handleSubmit}>
        <ColorControl color={color} setColor={setColor} />
        <ManufacturerControl
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <Button
          type="submit"
          className={css.button}
          disabled={
            current.color === color && current.manufacturer === manufacturer
          }
        >
          Filter
        </Button>
      </form>
    </div>
  );
};

// -- Types ----------------------------------------------------------------------------------------

interface ColorControlProps {
  color: string;
  setColor: (color: string) => void;
}

interface ManufacturerControlProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

interface FilterFormProps {
  current: Filter;
  onSubmit: (filter: Filter) => void;
}
