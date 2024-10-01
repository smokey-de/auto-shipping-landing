import classes from "./index.module.scss";
import { Autocomplete, Button, Flex, Select } from "@mantine/core";
import { CarSvg, FromSvg, ToSvg } from "@/shared/helpers/svg";

export const HeaderContentForm = () => {
  const fromsvg = <FromSvg />;
  const tosvg = <ToSvg />;
  const carsvg = <CarSvg />;
  return (
    <div className={classes.formWrapper}>
      <h2 className={classes.formTitle}>
        GET A FREE INSTANT QUOTE or CALL NOW
        <br />
        <div className={"flex items-center gap-3"}>
          <a href="tel: +1(917) 627-5498">(917) 627-5498</a>
          <a href="tel: +1(865) 776-9121">(865) 776-9121</a>
        </div>
      </h2>
      <hr className={classes.formTitleHr} />

      <Flex
        direction={"column" as React.CSSProperties["flexDirection"]}
        gap={"1rem"}
      >
        <Autocomplete
          leftSectionPointerEvents="none"
          leftSection={fromsvg}
          size="lg"
          placeholder="From (Zip code or City)"
          checkIconPosition="right"
          data={autoCompleteData}
          variant="filled"
          radius="md"
        />

        <Autocomplete
          leftSectionPointerEvents="none"
          leftSection={tosvg}
          size="lg"
          placeholder="To (Zip code or City)"
          checkIconPosition="right"
          data={autoCompleteData}
          variant="filled"
          radius="md"
        />

        <Select
          leftSectionPointerEvents="none"
          leftSection={carsvg}
          size="lg"
          searchable
          placeholder="Vehicle size"
          checkIconPosition="right"
          data={["Car", "SUV", "Pickup", "Motorcycle"]}
          variant="filled"
          radius="md"
        />

        <label className="flex gap-1 cursor-pointer">
          <input type="checkbox" />
          <span className={classes.formCheckBoxText}>
            By submitting this form you agree to receive SMS messages from our
            company.
          </span>
        </label>

        <Button fullWidth className={classes.formBtn}>
          Continue
        </Button>
      </Flex>
    </div>
  );
};

const autoCompleteData = [
  "Holtsville, NY, 501",
  "Holtsville, NY, 544",
  "Adjuntas, PR, 601",
  "Aguada, PR, 602",
  "Aguadilla, PR, 603",
  "Aguadilla, PR, 604",
  "Aguadilla, PR, 605",
  "Maricao, PR, 606",
  "Anasco, PR, 610",
  "Angeles, PR, 611",
];
