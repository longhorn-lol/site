import Link from "next/link"

export default function SocialNavLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <Link
      href={href}
      className="flex items-center rounded-lg px-3 py-2 text-sm text-neutral-200 transition-[background-color,opacity] hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      <Icon className="h-5 w-5" />
    </Link>
  )
}
