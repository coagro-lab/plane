"use client";

import Image from "next/image";
// assets
import SomethingWentWrongImage from "public/something-went-wrong.svg";

const NotFound = () => (
  <div className="h-screen w-screen grid place-items-center">
    <div className="text-center">
      <div className="mx-auto size-32 md:size-52 grid place-items-center rounded-full bg-custom-background-80">
        <div className="size-16 md:size-32 grid place-items-center">
          <Image src={SomethingWentWrongImage} alt="Usuário já logado" />
        </div>
      </div>
      <h1 className="mt-8 md:mt-12 text-xl md:text-3xl font-semibold">Isso não funcionou</h1>
      <p className="mt-2 md:mt-4 text-sm md:text-base">
        Verifique a URL que você está inserindo na barra de endereço do navegador e tente novamente.
      </p>
    </div>
  </div>
);

export default NotFound;
