import classes from "./index.module.scss";
import {
  ArrowRightSvg,
  PersonSvg,
  StarSvgPure,
  TimeSvg,
  VehicleSvg,
} from "@/shared/helpers/svg";
import { useMediaQuery } from "@mantine/hooks";
import { Flex } from "@mantine/core";

const ratesCount = [
  {
    text: "Clients served",
    count: 400,
    icon: PersonSvg,
  },
  {
    text: "Vehicles shipped",
    count: 500,
    icon: VehicleSvg,
  },
  {
    text: "Online reviews",
    count: 120,
    icon: StarSvgPure,
  },
  {
    text: "Year in operation",
    count: 1,
    icon: TimeSvg,
  },
];

export const WhyChoose = () => {
  const matches = useMediaQuery("(min-width: 1044px)");

  return (
    <section className={classes.whyChooseWrapper}>
      <div className={"container"}>
        <h2 className={classes.whyChooseTitle}>
          Ship your vehicle in 3 easy steps
        </h2>

        <Flex
          gap={"1rem"}
          direction={
            matches ? "row" : ("column" as React.CSSProperties["flexDirection"])
          }
        >
          {ratesCount.map((item, index) => (
            <div className={classes.rateCard} key={index}>
              <div>
                <item.icon />
              </div>
              <div className={classes.rateCardText}>
                <p>{item.count}+</p>
                <h2>{item.text}</h2>
              </div>
              <div>
                <ArrowRightSvg />
              </div>
            </div>
          ))}
        </Flex>
      </div>
    </section>
  );
};
