import Footer from "./Footer";
import Header from "./Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});


interface LayoutProps {
  defaultHeader?: boolean;
  children: React.ReactNode;
  headerColor?: string;
  headerPosition?: string;
};

const Layout = ({
  children,
  defaultHeader = false,
  headerColor = "light",
  headerPosition = "absolute",
}: LayoutProps) => {
  return (
    <div className={`${roboto.className}`}>
      <Header
        defaultHeader={defaultHeader}
        color={headerColor}
        position={headerPosition}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
