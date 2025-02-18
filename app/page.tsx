"use client"
import { Scroll, ScrollControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Booksimage from "./Components/UI/Booksimage"
import { useEffect } from "react";
import { store } from "./Redux/store";
import AttentionBooksSection from "./Components/Section/AttentionBooksSection";
import ChatSection from "./Components/Section/ChatSection";
import About from "./Components/Section/About";
import Title from "./Components/Section/Title";

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