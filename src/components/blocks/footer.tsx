import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

export function Footer() {
const legal = [{ name: "Privacy Policy", href: "/privacy" }];

const navigation = [
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
  ];

const social = [
    { name: "Github", href: "https://github.com/daoliveirafilho" },
    { name: "Medium", href: "https://medium.com/@da.oliveira.filho" },
  ];

  return (
<footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
<div className="container space-y-3 text-center">
<h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
Start your free trial today
</h2>
<p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
From next-gen startups to established enterprises.
</p>
<div>
<Button size="lg" className="mt-4" asChild>
<a
href="https://t.me/rekalllog"
>
Get started
</a>
</Button>
</div>
</div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
<div className="text-primary mt-10 w-full md:mt-14 lg:mt-20"></div>
    </footer>
  );
}
