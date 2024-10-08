import classes from "./index.module.scss";
import {
  Autocomplete,
  Button,
  Checkbox,
  Flex,
  MantineColor,
  Select,
  TextInput,
} from "@mantine/core";
import { CarSvg, FromSvg, ToSvg } from "@/shared/helpers/svg";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { sendForm } from "@emailjs/browser";
import { emailSchema } from "@/shared/helpers/constant";
import { sendEmail } from "@/shared/helpers/api";

type FormValues = ReturnType<
  (values: {
    from: string[];
    vehicleSize: string;
    to: string[];
    termsOfService: boolean;
    from_email: string;
  }) => {
    from: string[];
    vehicleSize: string;
    to: string[];
    termsOfService: boolean;
    from_email: string;
  }
>;

export const HeaderContentForm = () => {
  const fromsvg = <FromSvg />;
  const tosvg = <ToSvg />;
  const carsvg = <CarSvg />;

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      from: [],
      to: [],
      vehicleSize: "",
      from_email: "",
      termsOfService: false,
    },

    validate: {
      from_email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      from: (value) => (value.length > 0 ? null : "This field is required"),
      to: (value) => (value.length > 0 ? null : "This field is required"),
      vehicleSize: (value) =>
        value.length > 0 ? null : "This field is required",
    },
  });

  const handleSubmit = (values: FormValues) => {
    sendEmail(values, (type) => {
      if (type === "success") form.reset();
    });
  };

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

      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
      >
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
            key={form.key("from")}
            {...form.getInputProps("from")}
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
            key={form.key("to")}
            {...form.getInputProps("to")}
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
            key={form.key("vehicleSize")}
            {...form.getInputProps("vehicleSize")}
          />

          <TextInput
            radius="md"
            variant="filled"
            size="lg"
            withAsterisk
            placeholder="your@email.com"
            key={form.key("from_email")}
            {...form.getInputProps("from_email")}
          />

          <Checkbox
            label="By submitting this form you agree to receive SMS messages from our company."
            key={form.key("termsOfService")}
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Button fullWidth className={classes.formBtn} type={"submit"}>
            Continue
          </Button>
        </Flex>
      </form>
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
