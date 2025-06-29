'use client';
import Image from "next/image";
import { BtnColored } from "@/components/elements/btn_colored";
import AboutSection from "@/components/AboutSection";
import UnionBlock from "@/components/projects/UnionBlock";
import JiranicBlock from "@/components/projects/JiranicBlock";
import MonolithBlock from "@/components/projects/MonolithBlock";
import UIKitVisualBlock from "@/components/projects/UIKitVisualBlock";
import SkillsBlock from "@/components/SkillsBlock";
import ContactsBlock from "@/components/ContactsBlock";

export default function Home() {
  return (
    <AboutSection />
          /* <section id="projects" className="min-h-[80vh] flex flex-col justify-center w-full mb-24">
          <h2 className="text-3xl font-bold mb-4">Проекты</h2>
          <UnionBlock />
          <JiranicBlock />
          <MonolithBlock />
          <UIKitVisualBlock />
        </section>
        <SkillsBlock />
        <ContactsBlock />*/
  );
}
