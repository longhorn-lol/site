export default function Tile({ children, className }: { children: React.ReactNode; className?: string }) {
  return <figure className={`relative w-full overflow-hidden rounded-2xl ${className}`}>{children}</figure>
}
