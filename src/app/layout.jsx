import localFont from "next/font/local";
import "./layout.scss";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Free AI Photo Enhancer: Make Blurry Picture Clear Online | PicWish",
  description: "PicWish Photo Enhancer helps to make blurry picture clear and enhance image online automatically and free. Increase your image resolution with AI now.",
};

export const viewport = {
  maximumScale: 1,
  minimumScale: 1,
  defaultScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
