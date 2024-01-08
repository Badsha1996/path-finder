'use client'
import Grid from '@/components/grid/Grid'
import Node from '@/components/node/Node'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='mx-10  h-svh'>
      <div className='max-w-max max-h-max bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
        <Grid/>
      </div>
    </main>
  )
}


