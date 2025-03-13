import Image from "next/image";
import { Button } from "@heroui/react";
import {Slider} from "@heroui/react";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">

          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button color="primary">Button</Button>;
          <br>
          </br>
          <Slider
            className="max-w-md"
            defaultValue={0.4}
            label="Temperature"
            maxValue={1}
            minValue={0}
            step={0.01}
          />
        </div>
      </main>

    </div>
  );
}
