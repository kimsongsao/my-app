import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-[family-name:var(--font-geist-sans)]">
        <Header/>
        <Hero/>
    </div>
  );
}
