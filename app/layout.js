import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/context/AuthContext";


const inter = Inter({ subsets: ["latin"] });

//! metadata object and generateMetadata function can only be exported from Server Components.
export const metadata = {
  title: "Netflix",
  description: "a movie platform",
  keys: "movies, netflix, latest-movies, action, horror",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
