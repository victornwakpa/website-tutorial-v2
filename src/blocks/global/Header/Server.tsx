import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeaderServer() {
  const payload = await getPayload({ config })
  const header = await payload.findGlobal({ slug: 'header' })
  return (
    <div className="bg-gray-500 py-4">
      <div className="max-w-6xl mx-auto flex justify-center gap-24 items-center">
        <div className="relative w-12 h-12">
          <Image src={header.logo.url} alt={header.logo.alt} fill className="object-contain" />
        </div>
        <div className="flex gap-3 font-medium">
          {header.nav.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.link} className="text-white">
                  {item.label}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
