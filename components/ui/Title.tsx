import React from "react";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <h2 className="font-playfair text-3xl md:text-4xl leading-tight mb-4 text-foreground">{children}</h2>
      <span className="block w-[74px] h-2 mx-auto relative border-t border-gold-dark/60 before:absolute before:w-1.5 before:h-1.5 before:bg-gold before:rotate-45 before:left-[34px] before:-top-[4px]" />
    </div>
  );
}
