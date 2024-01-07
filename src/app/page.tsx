'use client'
import Node from '@/components/node/Node'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [nodes, setNodes] = useState([[[]]])

  const genGrid = () => {
    const gridNode = []
    for (let row = 0; row < 15; row++) {
      const curRow = []
      for (let col = 0; col < 50; col++) {
        curRow.push([])
      }
      gridNode.push(curRow)
    }
    // console.log(gridNode)
    setNodes(gridNode)
  }
  useEffect(() => {
    genGrid()
  }, [])
  return (
    <main className='mx-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <div className='max-w-max max-h-max'>
        {
          nodes.map((row, rowIdx) => {
            return <div className='flex'>
              {row.map((node, nodeIdx) => <Node/>)}
            </div>
          })
        }
      </div>
    </main>
  )
}
