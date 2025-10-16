import React, { FC, ReactNode } from "react";

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

const SubpageHero: FC<SubpageHeroProps> = ({ title, subtitle, icon }) => {
  return (
    <section className="subpage-hero">
      {icon && <div className="hero-icon-wrapper">{icon}</div>}
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default SubpageHero;
