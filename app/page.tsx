"use client";

import { useState, useEffect } from "react";
import {
  Cake,
  Gift,
  PartyPopper,
  Heart,
  Stars,
  Music,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setIsOpen(false);
      setTimeout(() => setStep(0), 1000); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-100 p-4">
      <div className="relative w-full max-w-md">
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-50">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  top: "0%",
                  left: `${Math.random() * 100}%`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  width: `${Math.random() * 12 + 5}px`,
                  height: `${Math.random() * 12 + 5}px`,
                  borderRadius: Math.random() > 0.5 ? "50%" : "0",
                }}
                animate={{
                  top: "100%",
                  rotate: Math.random() * 360,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}

        <div className="relative perspective-1000">
          <div
            className="relative transition-all duration-1000"
            style={{
              transformStyle: "preserve-3d",
              transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <Card
              className="w-full bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-2xl border-0 overflow-hidden rounded-xl"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[500px]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 20 + 10}px`,
                        opacity: Math.random() * 0.5 + 0.5,
                        transform: `rotate(${Math.random() * 360}deg)`,
                      }}
                    >
                      {
                        ["🎂", "🎁", "🎉", "🎊", "✨"][
                          Math.floor(Math.random() * 5)
                        ]
                      }
                    </div>
                  ))}
                </div>

                <div className="relative z-10 text-center space-y-6">
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Cake className="h-20 w-20 text-yellow-100 drop-shadow-lg" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-md">
                      Happy Birthday!
                    </h1>
                    <div className="flex items-center justify-center mt-2">
                      <Sparkles className="h-5 w-5 text-yellow-100 mr-2" />
                      <p className="text-2xl text-white">To My Dear Mamu</p>
                      <Sparkles className="h-5 w-5 text-yellow-100 ml-2" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <Button
                      onClick={() => setIsOpen(true)}
                      className="bg-white text-amber-600 hover:bg-amber-100 hover:text-amber-700 font-medium text-lg px-6 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      <Gift className="mr-2 h-5 w-5" />
                      Open Your Card
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="w-full absolute inset-0 bg-white shadow-2xl border-0 rounded-xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <CardContent className="p-0 flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step1"
                      className="w-full h-full flex flex-col items-center justify-center p-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full max-w-[250px] h-[250px] mb-6 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                        <Image
                          src="/image/Screenshot 2025-04-07 102133.png"
                          alt="Birthday Person"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent"></div>
                      </div>

                      <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h2 className="text-3xl font-bold text-amber-600 mb-2">
                          Happy Birthday!
                        </h2>
                        <p className="text-gray-700">Today is all about you!</p>
                      </motion.div>

                      <motion.div
                        className="mt-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                      >
                        <Button
                          onClick={nextStep}
                          className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6"
                        >
                          Continue <PartyPopper className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step2"
                      className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-center gap-4 mb-6">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                            repeatType: "reverse",
                          }}
                        >
                          <PartyPopper className="h-10 w-10 text-yellow-500" />
                        </motion.div>
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, -5, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2.2,
                            repeatType: "reverse",
                            delay: 0.3,
                          }}
                        >
                          <Gift className="h-10 w-10 text-amber-500" />
                        </motion.div>
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.8,
                            repeatType: "reverse",
                            delay: 0.6,
                          }}
                        >
                          <Music className="h-10 w-10 text-orange-500" />
                        </motion.div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Wishing you a day filled with happiness and a year
                        filled with joy!
                      </h2>

                      <p className="text-gray-600">
                        May your special day bring you all the wonderful things
                        you deserve. My prayer for you is that may Allah keep
                        you happy, guide you to all your goals, and bless you
                        with a long and healthy life. May your life be filled
                        with new hopes and endless joy every single day.
                      </p>

                      <motion.div
                        className="mt-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                      >
                        <Button
                          onClick={nextStep}
                          className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6"
                        >
                          Next <Stars className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step3"
                      className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-6 w-full max-w-sm">
                        <p className="text-amber-800 italic">
                          "May this special day be just the beginning of a year
                          filled with happy memories, wonderful moments and
                          shining dreams."
                        </p>
                      </div>

                      <div className="pt-4 flex flex-col items-center">
                        <p className="text-gray-700 font-medium text-lg">
                          With lots of love,
                        </p>
                        <motion.div
                          className="flex items-center mt-2"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                            repeatType: "reverse",
                          }}
                        >
                             <p className="text-gray-700 text-lg">
                            Your Sister 
                          </p>
                          <Heart className="h-6 w-6 ml-1 text-red-500 mr-2 fill-current" />
                        </motion.div>
                      </div>

                      <div className="pt-8">
                        <Button
                          onClick={nextStep}
                          className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6"
                        >
                          Close Card <Sparkles className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
