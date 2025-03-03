"use client"
import { Scroll, ScrollControls ,useScroll} from "@react-three/drei";
import { Canvas, useFrame  } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { store } from "./Redux/store";
import Booksimage from "./Components/Utils/Booksimage"
import AttentionBooksSection from "./Components/Section/AttentionBooksSection";
import ChatSection from "./Components/Section/ChatSection";
import About from "./Components/Section/About";
import Title from "./Components/Section/Title";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <div className="h-calc-header bg-green-200">
      <Canvas className="w-full h-full">
        <ScrollControls pages={4} damping={2}>
          <Scroll>
            <Booksimage />
          </Scroll>
          <Scroll html style={{ width: "100%" }}>
            <section id="Top"><Title /></section>
            <section id="About"><About /></section>
            <section id="AttentionBooksSection"><AttentionBooksSection /></section>
            <section id="ChatSection"><ChatSection /></section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

