"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Link from "next/link";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Add contained glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow glow-1 left-0 top-0" />
        <div className="glow glow-2 right-0 bottom-0" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 md:pt-24 lg:pt-32 relative overflow-hidden w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-48">
          <TypingAnimation
            delay={1000}
            duration={100}
            className="text-muted-foreground text-xl "
          >
            Welcome to Amana Technologies....
          </TypingAnimation>
          <motion.h1
            className="mt-4 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Better Revolution
            <br />
            For The Future
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovate. Integrate. Elevate. Crafting seamless solutions for a
            connected tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-lg">
              <Link href="/career">Join Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={ref} className="py-16 sm:py-24 lg:py-32 relative w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center glass rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden mx-4 sm:mx-6 lg:mx-8"
          >
            <div className="glow absolute inset-0" style={{ opacity: 0.5 }} />
            <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 relative z-10">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto relative z-10">
              We provide innovative tomorrow&apos;s possibilities today and
              crafting transformative software solutions for a connected world.
            </p>
          </motion.div>
        </div>
      </section>
      {/* terminal */}
      <section ref={ref} className="py-16 sm:py-24 lg:py-32 relative w-full">
        <Terminal className="max-w-3xl mx-auto">
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

          <AnimatedSpan delay={1500} className="text-green-500">
            <span>✔ We develop Web Application .</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ VWe develop Mobile Application .</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            <span>✔ We Provide UI/UX </span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ Advance AI and Machine Learning.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Contact with us for free consultation:</span>
            <span className="pl-2">- me.alaminrifat@gmail.com</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-muted-foreground">
            Success! Thank you for using Amana CLI.
          </TypingAnimation>
        </Terminal>
      </section>
      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 lg:mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="glass p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Web Development",
    description:
      "Modern web applications built with cutting-edge technologies.",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional experiences.",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure services.",
  },
  {
    title: "Web App Development",
    description: "Full-stack web applications with modern frameworks.",
  },
  {
    title: "ML & AI",
    description: "Advanced machine learning and AI solutions.",
  },
];
