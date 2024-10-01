import classes from "./index.module.scss";
import { Button } from "@mantine/core";

export const HeaderContentForm = () => {
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
    </div>
  );
};
