import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "usePopcorn - Přihlášení",
  description: "Váš spolehlivý průvodce světem seriálů",
};

const Login = () => {
  return (
    <main className="flex flex-row">
      <section className="w-1/2 min-h-screen flex justify-center items-center lg:w-full sm:items-start sm:justify-normal">
        <div className="w-2/3 p-10 sm:w-full ">
          <form className="flex flex-col gap-10">
            <h1 className="uppercase text-5xl sm:text-3xl">PŘIHLÁŠENÍ</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#989898]">
                Email
              </label>
              <input type="text" className="bg-[#1A161E] p-4 rounded-md" />
              <label htmlFor="" className="text-[#989898]">
                Heslo
              </label>
              <input type="text" className="bg-[#1A161E] p-4 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                className="bg-blue-500 py-4 px-16 rounded-md font-bold text-lg text-center uppercase"
              >
                přihlásit se
              </Link>

              <span className="text-right sm:text-xs text-[#989898]">
                Nemáte účet?{" "}
                <Link href="/signup" className="text-white underline">
                  Zaregistrujte se zdarma!
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
      <section className="w-1/2 min-h-screen login-background lg:hidden" />
    </main>
  );
};

export default Login;
