"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Elogios = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [gifIndex, setGifIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const messages = [
    "Olá Humano, seja bem vinda!",
    "As vezes a vida nos da umas pancadas, mas tudo bem, sem elas qual seria a graça?",
    "Toma cuidado se não o banguela da uma cafungada, hahahahaha",
    "Mas de verdade, você merece ser bem tratada",
    "Mesmo sendo teimosa, segundo suas palavras...",
    "Mas vai dar tudo dar certo, dança e balança essa raba",
    "Brincadeira, só queria lhe ver dar uma risada 🤣🤣🤣",
    "Deixa eu tirar uma foto desse sorriso que está longe de ser de fachada",
    "de nada!"
  ];

  const gifs = [
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif4.gif",
    "/gif5.gif",
    "/gif7.gif",
    "/gif8.gif",
    "/gif11.gif",
    "/gif12.gif",

  ];

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(console.error);
    }
  };

  const handleGifChange = () => {
    setGifIndex((prevIndex) => (prevIndex + 1) % gifs.length); // Troca o gif
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length); // Troca a frase
  };

  return (
    <div style={styles.container}>
      <audio
        ref={audioRef}
        src="/song.mp3"
        loop
      />

      {!hasStarted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            style={styles.button}
            onClick={handleStart}
            whileHover={{ scale: 1.05, backgroundColor: "#00ffcc", color: "#000" }}
            whileTap={{ scale: 0.95 }}
          >
            Voar para Berk 🐉
          </motion.button>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={styles.gifContainer}
          >
            <Image
              src={gifs[gifIndex]}
              alt="Positive GIF"
              width={600}
              height={400}
              style={styles.gifImage}
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={styles.header}
          >
            {messages[messageIndex]}
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.buttonContainer}
          >
            <motion.button
              style={styles.button}
              onClick={handleGifChange}
              whileHover={{ scale: 1.05, backgroundColor: "#00ffcc", color: "#000" }}
              whileTap={{ scale: 0.95 }}
            >
              Voe mais alto!
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.buttonContainer}
          >
            <motion.a
              href="/"
              style={styles.linkButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Voltar
            </motion.a>
          </motion.div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#060f1e",
    backgroundImage: "radial-gradient(circle at center, #0f2b4a 0%, #060f1e 100%)",
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    textAlign: "center" as const,
    padding: "20px",
  },
  header: {
    fontSize: "2.5em",
    lineHeight: "1.2",
    color: "#e0e0e0",
    textShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc",
    marginTop: "30px",
    fontFamily: "var(--font-cinzel), serif",
    maxWidth: "800px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1.2em",
    fontWeight: "bold",
    fontFamily: "var(--font-cinzel), serif",
    backgroundColor: "#112233",
    color: "white",
    border: "2px solid #00ffcc",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0, 255, 204, 0.4)",
    transition: "transform 0.2s ease, background-color 0.2s ease, color 0.2s ease",
  },
  linkButton: {
    padding: "10px 20px",
    fontSize: "1em",
    fontFamily: "var(--font-cinzel), serif",
    color: "#00ffcc",
    textDecoration: "none",
    border: "1px solid #00ffcc",
    borderRadius: "20px",
    transition: "transform 0.2s ease",
  },
  gifContainer: {
    marginTop: "20px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0, 255, 204, 0.5)",
    border: "2px solid #00ffcc",
    backgroundColor: "#000",
  },
  gifImage: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    borderRadius: "10px",
  },
};

export default Elogios;
