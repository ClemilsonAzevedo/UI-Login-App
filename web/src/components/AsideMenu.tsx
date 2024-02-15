import { Separator } from "@radix-ui/react-separator";
import { Linkedin, Github } from "lucide-react";

export function AsideMenu() {

  return (
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
  )
}