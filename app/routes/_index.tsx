import type { MetaFunction } from "@remix-run/node";
import { ContentHeader } from "@/widgets/header";
import { RateByTrustPeople } from "@/widgets/rate";
import { AboutShip } from "@/widgets/aboutShip";
import { WhyChoose } from "@/widgets/whyChoose";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Unique Auto Shipping - Shipping vehicles is easy and affordable",
    },
    {
      name: "description",
      content:
        "We ship vehicle, car, track, motorcycle, pickup in US. We are one of the best in this business. You can be sure that your vehicle will be delivered on time and in the best condition.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <ContentHeader />
      <RateByTrustPeople />
      <AboutShip />
      <WhyChoose />
    </div>
  );
}
