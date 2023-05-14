import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Slider from "@/components/slider";
import { SliderData } from "@/components/sliderdata";

export default function Home() {
  return (
    <div>
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive"
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
