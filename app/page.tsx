import Image from "next/image"
import Tile from "@/components/Tile"
import MorphingNavbar from "@/components/MorphingNavbar"
import TextWidget from "@/components/TextWidget"
import fs from "fs"
import path from "path"
import CONFIG from "@/app/config"

export function getImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "photos", folder)
  const files = fs.readdirSync(dir)
  return files.map((f) => `/photos/${folder}/${f}`).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
}

const IMAGES = {
  general: getImages("general"),
  events: getImages("events"),
  content: getImages("content"),
  competitive: getImages("competitive"),
}

export default async function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
        <Tile className="col-span-2">
          <MorphingNavbar title="League of Legends at UT Austin" />
        </Tile>
        {IMAGES.general.map((src, i) => (
          <Tile key={src} className="aspect-video">
            <Image src={src} alt={`Photo ${i + 1}`} fill className="object-cover" />
          </Tile>
        ))}

        <Tile className="aspect-video">
          <TextWidget href={CONFIG.socialLinks[1].href} src={IMAGES.events[0]} alt={"Photo 1"}>
            Events
          </TextWidget>
        </Tile>
        {IMAGES.events.slice(1).map((src, i) => (
          <Tile key={src} className="aspect-video">
            <Image src={src} alt={`Photo ${i + 2}`} fill className="object-cover" />
          </Tile>
        ))}

        <Tile className="aspect-video">
          <TextWidget href={CONFIG.socialLinks[0].href} src={IMAGES.content[0]} alt={"Photo 1"}>
            Content
          </TextWidget>
        </Tile>
        {IMAGES.content.slice(1).map((src, i) => (
          <Tile key={src} className="aspect-video">
            <Image src={src} alt={`Photo ${i + 2}`} fill className="object-cover" />
          </Tile>
        ))}

        <Tile className="aspect-video">
          <TextWidget href={CONFIG.socialLinks[2].href} src={IMAGES.competitive[0]} alt={"Photo 1"}>
            Competitive
          </TextWidget>
        </Tile>
        {IMAGES.competitive.slice(1).map((src, i) => (
          <Tile key={src} className="aspect-video">
            <Image src={src} alt={`Photo ${i + 2}`} fill className="object-cover" />
          </Tile>
        ))}
      </div>
    </main>
  )
}
