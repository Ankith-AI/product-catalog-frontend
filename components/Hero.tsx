
import { H1, H2, P } from "@/components/typography/HeadingsTypography";

function Hero() {
  return (
    <div
      id="home"
      className="flex h-screen flex-col items-center justify-center px-4 text-center"
    >
      <div className="flex max-w-3xl flex-col gap-10">
        <H1 H1="Samsung Galaxy Series" />
        <H2 H2="Galaxy AI is coming!" />
        <P P="Unlock limitless potential with Galaxy AI—where innovation meets intelligence. Transforming ideas into reality through cutting-edge AI solutions" />
      </div>
    </div>
  );
}

export default Hero;
