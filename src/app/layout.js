import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";
import ScrollButtons from "../components/ScrollButtons";

export const metadata = {
  title: "Arpita's Portfolio",
  description: "Portfolio Website of Arpita Khobragade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
          <ScrollButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
