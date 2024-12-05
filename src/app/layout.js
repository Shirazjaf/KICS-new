import { Plus_Jakarta_Sans } from "next/font/google";
import '@/styles/styles.scss';
import GlobalProvider from "./GlobalProvider";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Kairali Industrial Cooperative Society Ltd",
  description: " pioneers in industrial and community development, offering innovative solutions across diverse sectors. From infrastructure development to skill training, we empower industries and communities to grow sustainably.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <GlobalProvider>
          {children}
          <div id="nav-full" />
          <div id="nav-sidebar" />
          <div id="cart-sidebar" />
          <div id="overlay" />
          <div id="modal" />
        </GlobalProvider>
      </body>
    </html>
  );
}
