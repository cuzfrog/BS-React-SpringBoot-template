const isProd = process.env.NODE_ENV === "production";


const system = Object.freeze({
  isProd,
  version: process.env.PACKAGE_VERSION,
  serverUrl: isProd ? "https://api.xxxx.com" : "http://localhost:56665",
  ajaxDelayMs: 400,
  ajaxDebounceMs: 400,
});

interface MenuItem {
  title: string;
  url: string;
  icon: string;
}

const menu: MenuItem[] = Object.seal([
  {
    title: "Home",
    url: "info",
    icon: "home"
  },
  {
    title: "Users",
    url: "login",
    icon: "person"
  },
  {
    title: "About",
    url: "about",
    icon: "people"
  },
]);

export const Specs = Object.seal({
  system,
  menu
});
