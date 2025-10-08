import { useRouter } from "next/router";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register"];

const AppShell = ({ children }: AppShellProps) => {
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  // Pastikan hanya render setelah client siap
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Hindari render HTML yang berbeda antara server & client
    return null;
  }

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;