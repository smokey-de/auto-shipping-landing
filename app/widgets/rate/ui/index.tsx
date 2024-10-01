import googleImg from "@/shared/assets/google.png";
import transRevImg from "@/shared/assets/trans-rev.png";

import { StarSvg } from "@/shared/helpers/svg";

import classes from "./index.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { Flex } from "@mantine/core";
import { BlurFade } from "@/shared/ui";

const satisfiedCustomer = [
  {
    name: "Tim Noah",
    date: "08.09.2023",
    text: "Auto Shipping Group was flawless. Easiest part of my cross country move. They picked up on time, dropped off on time, and communicated with me the entire time. Michael was a gem!",
  },
  {
    name: "Artur Williams",
    date: "09.17.2023",
    text: "Great service I have never had any issues. All my clients that are out of state and need a vehicle to be deliver I use Unique Autoshipping LLC. Great service and fast communication.",
  },
  {
    name: "Rick Atkins",
    date: "11.07.2023",
    text: "I felt comfortable with this company. Just one glitch when the driver did not show up until the next day but no harm.The car was delivered without any damage.",
  },
];

const trustedCustomer = [
  {
    count: 5,
    reviews: 90,
    img: googleImg,
    href: "https://www.google.com/search?sca_esv=580917885&rlz=1C1GCEA_enUZ1081UZ1081&sxsrf=AM9HkKkklYqyamp-W8Jd8iewYF0WbtL4Gw:1699551925760&q=unique+auto+shipping+llc+sevierville&spell=1&sa=X&ved=2ahUKEwiGqb-mvLeCAxUHEhAIHXXPDCEQBSgAegQICRAB&biw=1366&bih=641&dpr=1#ip=1",
  },
  {
    count: 5,
    reviews: 30,
    img: transRevImg,
    href: "https://www.transportreviews.com/Company/Unique-Autoshipping-LLC",
  },
];

const BLUR_FADE_DELAY = 0.04;

export const RateByTrustPeople = () => {
  const matches = useMediaQuery("(min-width: 1044px)");

  return (
    <>
      <section className={classes.satisfiedCustomer}>
        <div className={"container"}>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h2 className={classes.satisfiedCustomerTitle}>
              Over +500 satisfied customers and counting!
            </h2>
          </BlurFade>
          <Flex
            gap={"1rem"}
            direction={
              matches
                ? "row"
                : ("column" as React.CSSProperties["flexDirection"])
            }
          >
            {satisfiedCustomer.map((item, index) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.05} key={index}>
                <div className={classes.reviewCard}>
                  <div className={classes.reviewCardTitle}>
                    <h3>{item.name}</h3>
                    <p className="flex">
                      <StarSvg />
                      <StarSvg />
                      <StarSvg />
                      <StarSvg />
                      <StarSvg />
                    </p>
                  </div>
                  <p className={classes.reviewCardText}>{item.text}</p>
                  <div className={classes.reviewCardBottom}>
                    <span className={classes.reviewCardBottomDate}>
                      {item.date}
                    </span>
                    <img src={googleImg as string} alt="Google" />
                  </div>
                </div>
              </BlurFade>
            ))}
          </Flex>
        </div>
      </section>
      <section className={classes.trustedCustomer}>
        <div className={"container"}>
          <h2 className={classes.trustedCustomerTitle}>
            Trusted and rated by people
          </h2>
          <Flex
            gap={"1rem"}
            direction={
              matches
                ? "row"
                : ("column" as React.CSSProperties["flexDirection"])
            }
          >
            {trustedCustomer.map((item, index) => (
              <a
                className={classes.trustedCustomerCard}
                href={item.href}
                key={index}
              >
                <div>
                  <h3>{item.count}</h3>
                  <p className="flex">
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                  </p>
                </div>
                <div>
                  <img width={"80px"} src={item.img as string} alt="Google" />
                  <span>({item.reviews} reviews)</span>
                </div>
              </a>
            ))}
          </Flex>
        </div>
      </section>
    </>
  );
};
