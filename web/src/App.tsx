import { Github, Linkedin } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export function App() {

  return (
    <main className="flex items-center">
      <aside className=" bg-primary-foreground w-64 h-screen flex flex-col justify-between py-6 pl-5">
        <nav>
          <h1 className="font-bold text-2xl mb-16">Login Page</h1>
          <div className="flex flex-col gap-6 pr-6">
            <div className="flex flex-col gap-2 ">
              <a href="/" className="text-base font-medium">Login</a>
              <Separator />
            </div>
            <div className="flex flex-col gap-2">
              <a href="/" className='text-base font-medium'>Register</a>
              <Separator />
            </div>
          </div>
        </nav>

        <div className="flex flex-col gap-6">
          <a href="http://linkedin.com" className="flex gap-2 items-center text-xs hover:text-primary">
            <Linkedin size={20} /> Linkedin
          </a >
          <a href="http://github.com/clemilsonazevedo" className="flex gap-2 items-center text-xs hover:text-primary">
            <Github size={20} /> Github
          </a >
        </div>
      </aside>

      <div className="w-full flex justify-center items-center h-screen">
        <form className="w-96 h-96 rounded bg-primary-foreground border mx-5 flex flex-col gap-5 p-4 justify-center">

          <h2 className="text-2xl text-center font-bold">Login</h2>

          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Johndoe@example.com" />
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="***********" />
          </div>

          <Button type="submit" className="w-full text-foreground hover:opacity-90">Sign In</Button>

          <a className="text-muted-foreground hover:text-primary text-center hover:cursor-pointer">
            You already have account?
          </a>
        </form>
      </div>
    </main>
  );
}

