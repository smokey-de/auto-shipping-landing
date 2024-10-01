import { useMediaQuery } from "@mantine/hooks";

import logo from "@/shared/assets/logo.png";
import {
  EmailSvg,
  FacebookSvg,
  FooterPhoneSvg,
  InstagramSvg,
} from "@/shared/helpers/svg";

import classes from "./index.module.scss";
import { Button, Flex, Input } from "@mantine/core";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContentFooter = () => {
  const matches = useMediaQuery("(min-width: 1044px)");
  const ref = useRef<HTMLDivElement>(null as HTMLDivElement);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <footer className={classes.contentFooterWrapper}>
      <motion.div
        className={"container"}
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <div
          className={classes.footerTop}
          style={{
            display: matches ? "flex" : "block",
          }}
        >
          <div
            className={classes.footerTopLeft}
            style={{
              width: matches ? "60%" : "100%",
              borderBottom: matches ? "none" : "1px solid #0e213d",
            }}
          >
            <div className={classes.logo}>
              <img src={logo as string} alt="" width={"100px"} />
              <h3>UNIQUE AUTO SHIPPING</h3>
            </div>
            <p className={"text-xs mb-3 text-gray-500"}>
              Unique Auto Shipping LLC, is one of the country’s top Auto
              Transport firms, specializing in the shipping of privately owned
              vehicles, motorcycles, and heavy equipment to and from all fifty
              states as well as international.
            </p>

            <Flex
              justify={"space-around"}
              direction={
                matches
                  ? "row"
                  : ("column" as React.CSSProperties["flexDirection"])
              }
              gap={"1rem"}
            >
              <div className="flex items-center gap-1">
                <span>
                  <FooterPhoneSvg />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Have a question?</p>
                  <div className={"flex gap-3"}>
                    <a href="tel: +1(917) 627-5498">
                      <h3 className="text-sm text-white font-bold">
                        +1(917) 627-5498
                      </h3>
                    </a>
                    <a href="tel: +1(865) 776-9121">
                      <h3 className="text-sm text-white font-bold">
                        +1(865) 776-9121
                      </h3>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:uniqueautoshippingllc@gmail.com"
                className="flex items-center gap-1"
              >
                <span>
                  <EmailSvg />
                </span>
                <div>
                  <p className="text-sm text-gray-500">Contact us at</p>
                  <h3 className="text-sm text-white font-bold">
                    support@uniqueautoshipping.com
                  </h3>
                </div>
              </a>
            </Flex>
          </div>
          <div className={"flex"}>
            <div
              className={classes.footerTopRight}
              style={{
                borderLeft: matches ? "1px solid #0e213d" : "none",
              }}
            >
              <div>
                <h5 className="text-white font-bold">Address</h5>
                <span className="text-xs text-gray-500 leading-none">
                  2139 New Era Rd, Unit 8201 Sevierville, Tennessee 37862-5428,
                  United States
                </span>
              </div>
              <div className={"mt-1"}>
                <h5 className="text-white font-bold">MC</h5>
                <span className="text-xs text-gray-500 leading-none">
                  1578690
                </span>
              </div>
              <div className={"mt-1"}>
                <h5 className="text-white font-bold">DOT</h5>
                <span className="text-xs text-gray-500 leading-none">
                  4125555
                </span>
              </div>
            </div>
            <div className={classes.footerTopRight}>
              <h5 className="text-white font-bold">Get $50 Discount</h5>
              <span className="text-xs text-gray-500 leading-none">
                Wait! Did you forget your bonus?
              </span>
              <div className={"mt-2 mb-3"}>
                <Input size="lg" radius="md" placeholder="Your email" />
              </div>
              <Button variant="filled" radius="md">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Flex
          justify={"space-between"}
          direction={
            matches ? "row" : ("column" as React.CSSProperties["flexDirection"])
          }
          gap={"1rem"}
          align={"center"}
          mt={"1"}
        >
          <ul className={classes.socialNetworks}>
            <li>
              <a
                href="https://instagram.com/unique_autoshipping?igshid=MXhsd2d1eWJpc2l2eQ=="
                target="_blank"
                rel="noreferrer"
              >
                <InstagramSvg />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61552821236272"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookSvg />
              </a>
            </li>
          </ul>
          <div>
            <span className="text-sm font-medium text-white">
              Privacy Policy
            </span>
            <span className="ml-1 mr-1 text-white"> | </span>
            <span className="text-xs text-gray-500">
              © 2024 Unique Auto Shipping. All rights reserved.
            </span>
          </div>
        </Flex>
      </motion.div>
    </footer>
  );
};
