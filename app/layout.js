import "./globals.css";

import { Sora } from "next/font/google";

const sora = Sora({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
};

const RootLayout = ({ children }) => {
  return (
    <html id="theme" className="dark" style={sora.style}>
      <body className="bg-white dark:bg-body dark:text-white text-dark">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
