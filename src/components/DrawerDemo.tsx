import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export function DrawerDemo() {
  const activeLink = "text-indigo-600 text-xl font-bold";
  const normalLink =
    "text-slate-500 text-xl font-bold hover:text-indigo-900 transition";
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"secondary"} size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle className="text-white">Content Creator</DrawerTitle>
            <DrawerDescription>Hello from description</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav className="flex flex-col items-center justify-center gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                title="Home"
                aria-label="Home"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-me"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                title="About"
                aria-label="About"
              >
                About
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                title="Work"
                aria-label="Work"
              >
                Work
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                title="Contact"
                aria-label="Contact"
              >
                Contact
              </NavLink>
            </nav>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
