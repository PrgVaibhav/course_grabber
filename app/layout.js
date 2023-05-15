import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
export const metadata = {
  title: "Course Grabber",
  description:
    "Course Grabber is a web app that allows you to search for free courses from youtube and other platforms.",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://kit.fontawesome.com/473a32a927.js"
          crossorigin="anonymous"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
