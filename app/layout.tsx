"use client";
import "./globals.css";
import Header from './Components/Header/Header';
import { Provider } from 'react-redux';
import { store } from'./Redux/store';
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { _NotoSerifJP } from "./font";

interface Props {
  children: ReactNode;
}

  const Layout = ({ children }: Props) => {
    const [currentPage, setCurrentPage] = useState("");
    const path = usePathname();
  
    useEffect(() => {
      setCurrentPage(path === "/" ? "" : "Chat");
    }, [path]);
    return (
      <head>
        <title>Readingcommunity</title>
      <html lang="ja">
        <body className={'max-w-screen-2xl mx-auto h-full w-full scroll-smooth ${_NotoSerifJP.className}'}> <Provider store={store}>
          <Header />
            <AnimatePresence>
              <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 700 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {children}
              </motion.div>
            </AnimatePresence>
            </Provider>
          </body>
          
      </html>
      </head>
    )
  }

export default Layout


