import { Poppins, Monoton } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio | Davood Javidi",
  description: "Here is the resume of Davood Javidi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${poppins.className} ${monoton.className}  antialiased dark:text-color-white`}
      >
        {children}
      </body>
    </html>
  );
}
