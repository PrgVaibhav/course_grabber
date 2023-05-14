import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Course Grabber",
  description:
    "Course Grabber is a web app that allows you to search for free courses from youtube and other platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
