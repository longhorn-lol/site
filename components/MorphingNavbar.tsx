"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"

import { FaBolt, FaArrowRight } from "react-icons/fa6"
import SocialNavLink from "./SocialNavLink"

import CONFIG from "@/app/config"

export function InitialWidget({ title }: { title: string }) {
  return (
    <motion.div transition={CONFIG.spring} className="flex flex-col gap-2 h-full justify-end items-start">
      <motion.div transition={CONFIG.spring} className="flex items-end gap-4 md:gap-8">
        <Image src="/logo.png" alt="Longhorn LoL Logo" width={60} height={60} />
        <motion.a
          transition={CONFIG.spring}
          href={CONFIG.socialLinks[1].href}
          target="_blank"
          className="text-lg md:text-2xl flex items-center gap-1 text-blue-500 font-medium mb-1"
        >
          <span className="underline">Community</span> <FaArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.a
          transition={CONFIG.spring}
          href={CONFIG.developerHref}
          target="_blank"
          className="text-lg md:text-2xl flex items-center gap-1 text-blue-500 font-medium mb-1"
        >
          <span className="underline">Developers</span> <FaArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
      <motion.h1 transition={CONFIG.spring} className="text-6xl md:text-7xl font-semibold">
        {title}
      </motion.h1>
    </motion.div>
  )
}

export default function MorphingNavbar({ title }: { title: string }) {
  const { scrollY } = useScroll()

  const progress = useTransform(scrollY, [75, CONFIG.threshold], [0, 1], {
    clamp: true,
  })
  const p = useSpring(progress, CONFIG.spring)

  const boxedOpacity = useTransform(p, [0, 0.6, 0.85, 1], [1, 0.75, 0.2, 0])
  const boxedY = useTransform(p, [0, 1], [0, -8])
  const boxedPointer = useTransform(p, [0.9, 1], ["auto", "none"])

  const floatOpacity = useTransform(p, [0, 0.25, 0.5, 1], [0, 0.4, 0.85, 1])
  const floatY = useTransform(p, [0, 1], [-16, 0])
  const floatScale = useTransform(p, [0, 1], [0.98, 1])
  const floatPointer = useTransform(p, [0, 0.15], ["none", "auto"])

  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.section
          key="boxed"
          transition={CONFIG.spring}
          className="w-full h-full bg-neutral-900/70 p-6 text-neutral-100"
          style={{
            opacity: boxedOpacity,
            y: boxedY,
            pointerEvents: boxedPointer,
          }}
        >
          <InitialWidget title={title} />
        </motion.section>

        <motion.nav
          key="floating"
          aria-label="Primary"
          transition={CONFIG.spring}
          className="fixed left-1/2 top-3 -translate-x-1/2 z-50 w-[min(96vw,1100px)] rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-neutral-100 shadow-xl backdrop-blur supports-[backdrop-filter]:backdrop-blur"
          style={{
            opacity: floatOpacity,
            y: floatY,
            scale: floatScale,
            pointerEvents: floatPointer,
          }}
        >
          <div className="flex items-center gap-3">
            <motion.div transition={CONFIG.spring} className="mr-auto flex items-center gap-2">
              <Image src="/logo.png" alt="Longhorn LoL Logo" width={40} height={40} />
              <motion.p transition={CONFIG.spring} className="text-xl">
                Longhorn LoL
              </motion.p>
            </motion.div>

            <ul className="flex items-center gap-1">
              {CONFIG.socialLinks.map((item) => (
                <li key={item.href}>
                  <SocialNavLink href={item.href} icon={item.icon} />
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-2">
              <Link
                href={CONFIG.developerHref}
                className="flex gap-2 items-center rounded-xl border border-white/10 bg:white/5 bg-white/5 px-4 py-2 text-sm font-medium text-white/90
                backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <span>Developers</span> <FaBolt className="text-orange-500" />
              </Link>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
    </>
  )
}
