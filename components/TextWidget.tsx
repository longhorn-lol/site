import Image from "next/image"
import Link from "next/link"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export default function TextWidget({
  href,
  src,
  alt = "",
  children,
}: {
  href: string
  src: string
  alt?: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image src={src} alt={alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 p-6 flex items-end gap-3 text-neutral-100 text-5xl md:text-7xl font-semibold">
          <span>{children}</span>
          <FaArrowUpRightFromSquare className="w-5 h-5 md:w-8 md:h-8 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  )
}
