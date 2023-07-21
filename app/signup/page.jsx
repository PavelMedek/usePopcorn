import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "usePopcorn - Registrace",
  description: "Váš spolehlivý průvodce světem seriálů",
};

const SignUp = () => {
  return (
    <main className="flex flex-row">
      <section className="w-1/2 min-h-screen login-background" />
      <section className="w-1/2 min-h-screen flex justify-center items-center">
        <div className="w-2/3 p-10">
          <form className="flex flex-col gap-10">
            <h1 className="uppercase text-5xl">Registrace</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#989898]">
                Jméno
              </label>
              <input type="text" className="bg-[#1A161E] p-4 rounded-md" />
              <label htmlFor="" className="text-[#989898]">
                Email
              </label>
              <input type="text" className="bg-[#1A161E] p-4 rounded-md" />
              <label htmlFor="" className="text-[#989898]">
                Heslo
              </label>
              <input type="text" className="bg-[#1A161E] p-4 rounded-md" />
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href="/login"
                className="bg-blue-500 py-4 px-16 rounded-md font-bold text-lg text-center uppercase"
              >
                zaregistrovat se
              </Link>

              <span className="text-right text-[#989898]">
                Už máte účet?
                <Link href="/login" className="text-white underline">
                  Přihlaste se
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
