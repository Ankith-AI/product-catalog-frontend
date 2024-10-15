import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { H1 } from "./typography/HeadingsTypography";

function Featured() {
  return (
    <div id="Featured" className="flex flex-col py-10">
      <div className="items-center justify-center text-center">
        <H1 H1="Featured Products" />
      </div>
      <div className="mx-auto grid grid-cols-3 place-items-center gap-10 pt-8">
        <Card
          key="Galaxy S23"
          className="flex flex-col items-center justify-between p-4"
        >
          <Image
            src="/s23.png"
            alt="s23"
            width={200}
            height={200}
            className="dark:hidden"
          />
          <Image
            src="/s23.png"
            alt="s23"
            width={200}
            height={200}
            className="hidden dark:block"
          />
          <CardHeader>
            <CardTitle>Galaxy S23</CardTitle>
          </CardHeader>
        </Card>
        <Card
          key="Galaxy S24+"
          className="flex flex-col items-center justify-between p-4"
        >
          <Image
            src="/s24plus.png"
            alt="s24plus"
            width={200}
            height={200}
            className="dark:hidden"
          />
          <Image
            src="/s24plus.png"
            alt="s24plus"
            width={200}
            height={200}
            className="hidden dark:block"
          />
          <CardHeader>
            <CardTitle>Galaxy S24+</CardTitle>
          </CardHeader>
        </Card>
        <Card
          key="Galaxy S24U"
          className="flex flex-col items-center justify-between p-4"
        >
          <Image
            src="/s24u.png"
            alt="s24u"
            width={200}
            height={200}
            className="dark:hidden"
          />
          <Image
            src="/s24u.png"
            alt="s24u"
            width={200}
            height={200}
            className="hidden dark:block"
          />
          <CardHeader>
            <CardTitle>Galaxy S24U</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Featured;
