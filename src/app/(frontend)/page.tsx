import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
// import './styles.css'

export default async function HomePage() {
  return (
    <div className="home bg-amber-300">
      <h2 className="text-3xl font-bold">Home Page</h2>
    </div>
  )
}
