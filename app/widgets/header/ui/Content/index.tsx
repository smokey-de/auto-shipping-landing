import clsx from "clsx";

import phoneSvg from "@/shared/assets/phone.svg";
import { ContentText } from "@/shared/ui";

import { Navbar } from "../Navbar";

import classes from "./index.module.scss";
import { PhoneSvg } from "@/shared/helpers/svg";
import { HeaderContentForm } from "@/features/headerContentForm";

export const Content = () => {
  return (
    <header className={classes.content}>
      <div className={"container"}>
        <Navbar />
        <div
          className={clsx(
            [classes.contentBody],
            "flex items-center justify-between gap-4"
          )}
        >
          <div style={{ width: "50%" }}>
            <ContentText />
            <p className={classes.contentBodyText}>
              Shipping vehicles is easy and affordable with Unique Autoshipping
              LLC !
            </p>
            <a
              href={"tel: +1(917) 627-5498"}
              className={clsx([classes.contentBottomWrapper, "flex gap-2"])}
            >
              <span className={classes.contentBottomIcon}>
                <PhoneSvg />
              </span>
              <div>
                <p className={classes.contentBottomText}>
                  Call us for a custom car shipping quote
                </p>
                <h3 className={classes.contentBottomPhoneText}>
                  (917) 627-5498
                </h3>
              </div>
            </a>
          </div>
          <div style={{ width: "50%" }}>
            <HeaderContentForm />
          </div>
        </div>
      </div>
    </header>
  );
};
