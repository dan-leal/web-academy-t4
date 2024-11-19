import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import BootstrapClient from "./BootstrapClient";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "WA Loja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <ToastContainer />
          <Navbar />
          <main>{children}</main>
          <BootstrapClient />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
