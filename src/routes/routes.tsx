import clsx from "clsx";
import { HiHome } from "react-icons/hi";

import { HomePage } from "@/pages";
import { ISidebarRouter } from "@/types";

const smallIconCss = "h-8 w-8 fill-inherit";
const bigIconCss = "mr-3 h-8 w-8 fill-inherit";

export const definedRoutes = {
  home: "/",
};

export const routesWithSidebar: ISidebarRouter[] = [
  {
    to: definedRoutes.home,
    routeName: "Home",
    element: <HomePage />,
    smallIcon: <HiHome className={clsx(smallIconCss)} />,
    bigIcon: <HiHome className={clsx(bigIconCss)} />,
  },
];
