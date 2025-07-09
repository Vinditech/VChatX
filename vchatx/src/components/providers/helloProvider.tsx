"use client";

import { useEffect } from "react";

export function HelloProvider({children}: {children: React.ReactNode}) {
  useEffect(() => {
   console.log(
  `%c👋 Olá! Esta empresa utiliza o VChatX, a plataforma líder em gestão e automação de agentes de IA.\n` +
  `%cSua manutenção é possível graças ao apoio da comunidade. Por favor, mantenha esta mensagem no console.\n\n` +
  `%cSaiba mais: https://vchatx.com/patrocine`,
  'font-weight: bold; font-size: 16px; color: #1e88e5;',
  'font-size: 14px; color: #555;',
  'font-size: 12px; color: #888; text-decoration: underline;'
);
  }, []);

  return <>{children}</>;
}