import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="h-screen w-screen flex flex-col items-center justify-center  bg-white dark:bg-black">
        <h1 className="text-3xl font-bold text-blue-500 dark:text-red-500">
          Hello world!
        </h1>
      </main>
    </NextUIProvider>
  );
}
