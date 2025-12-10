import { motion } from 'framer-motion'
import Image from 'next/image'

type FloatingMapProps = {
  src?: string
  alt?: string
  width?: number
  height?: number
}

const glowGradients =
  'radial-gradient(circle at 20% 0%, rgba(255, 196, 140, 0.25), transparent 60%), radial-gradient(circle at 80% 100%, rgba(255, 255, 255, 0.18), transparent 55%)'

export default function FloatingMap({
  src = '/local-impact-map.png',
  alt = 'Map of the Netherlands with local suppliers and money flows',
  width = 1400,
  height = 1400,
}: FloatingMapProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-[#36302b] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-transform transition-shadow duration-500 ease-[var(--ease-smooth)] hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
      style={{ transform: 'translateY(-4px)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 ease-[var(--ease-smooth)] group-hover:opacity-100"
        style={{ background: glowGradients }}
      />
      <motion.div
        animate={{ y: [-2, -6, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className="h-auto w-full transition duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.03] group-hover:brightness-110 group-hover:contrast-110"
        />
      </motion.div>
    </motion.figure>
  )
}

