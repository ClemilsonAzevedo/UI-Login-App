import { Button } from "../components/ui/button";
import { AsideMenu } from "@/components/AsideMenu";
import { PersonalizedInput } from "@/components/PersonalizedInput";

export function LoginPage() {
  return (
    <main className="flex items-center">
      <AsideMenu />

      <div className="w-full flex justify-center items-center h-screen">
        <form className="w-96 h-96 rounded bg-primary-foreground border mx-5 flex flex-col gap-5 p-4 justify-center">

          <h2 className="text-2xl text-center font-bold">Sign In</h2>

          <PersonalizedInput typeInput="email" labelInput="Email" placeholder="Johndoe@example.com" />

          <PersonalizedInput typeInput="password" labelInput="Password" placeholder="***********" />

          <Button type="submit" className="w-full text-foreground hover:opacity-90">Sign In</Button>

          <a className="text-muted-foreground hover:text-primary text-center hover:cursor-pointer">
            You do not have account?
          </a>
        </form>
      </div>
    </main>
  );
}