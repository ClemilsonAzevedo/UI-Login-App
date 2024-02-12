import { Github, Linkedin } from "lucide-react";
import { Separator } from "./components/ui/separator";

export function App() {

  return (
    <main>
      <aside className="w-64 bg-muted h-screen flex flex-col justify-between py-6 pl-5">
        <nav>
          <h1 className="font-bold text-2xl mb-16">Login Page</h1>
          <div className="flex flex-col gap-6 pr-6">
            <div className="flex flex-col gap-2 ">
              <span className="text-base font-medium">Login</span>
              <Separator orientation="horizontal" className="w-full bg-opacity-25 bg-neutral-200" />
            </div>
            <div className="flex flex-col gap-2">
              <span className={'text-base font-medium'}>Register</span>
              <Separator orientation="horizontal" className="w-full bg-opacity-25 bg-neutral-200" />
            </div>
          </div>
        </nav>

        <div className="flex flex-col gap-6">
          <span className="flex gap-2 items-center text-xs">
            <Linkedin size={20} /> Linkedin
          </span>
          <span className="flex gap-2 items-center text-xs">
            <Github size={20} /> Github
          </span>
        </div>
      </aside>
    </main>
  );
}

