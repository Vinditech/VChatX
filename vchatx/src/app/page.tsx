import { ThemeProvider } from "@/components/providers/themeProvider";
import Image from "next/image";
import { Header } from "@/components/public/homepage/header";

export default function Home() {
  const navigation = [
    { name: "Tema", href: "#", isThemeToggle: true },
    { name: "Home", href: "/" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Planos", href: "#planos" },
    { name: "Contato", href: "#contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <ThemeProvider>
      <Header
        brandName="VChatX"
        logoSrc="/vinditech_logo.png"
        navigation={navigation}
      />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello World!</h1>
        <p className="mt-4 text-lg">Welcome to VChatX!</p>
      </div>
    </ThemeProvider>
  );
}
