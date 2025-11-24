import localFont from "next/font/local";

export const CodeNext = localFont({
  src: [
    {
      path: "./fonts/CodeNext-Trial-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/CodeNext-Trial-Regular.otf",
      weight: "400",
      style: "Regular",
    },
  ],
  variable: "--font-codenext",
});
