import Link from "next/link";

import Button from "@/components/Button";
import Input from "@/components/Input";

export const metadata = {
  title: "usePopcorn - Registrace",
  description: "Váš spolehlivý průvodce světem seriálů",
};

const SignUp = () => {
  return (
    <main className="flex flex-row">
      <section className="w-1/2 min-h-screen login-background lg:hidden" />
      <section className="w-1/2 min-h-screen flex justify-center items-center lg:w-full sm:items-start sm:justify-normal">
        <div className="w-2/3 p-10 sm:w-full">
          <form className="flex flex-col gap-10">
            <h1 className="uppercase text-5xl sm:text-3xl">Registrace</h1>
            <div className="flex flex-col gap-2">
              <Input label="Jméno" placeholder="John Doe" />
              <Input label="Email" placeholder="johndoe@email.com" />
              <Input label="Heslo" type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="full" text="zaregistrovat se" />
              <span className="text-right text-[#989898] sm:text-xs">
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
