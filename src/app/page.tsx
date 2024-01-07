'use client'
import Node from '@/components/node/Node'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type NodeType = {
  col: number
  row: number,
  isStart: boolean,
  isFinish: boolean
}





export default function Home() {
  const [nodes, setNodes] = useState<NodeType[][]>([[{ col: 0, row: 0, isStart: false, isFinish: false }]])

  const genGrid = () => {
    const gridNode = []
    for (let row = 0; row < 15; row++) {
      const curRow = []
      for (let col = 0; col < 50; col++) {
        const curNode: NodeType = {
          col,
          row,
          isStart: row == 5 && col == 5,
          isFinish: row == 10 && col == 40
        }
        curRow.push(curNode)
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
          nodes.map((row: NodeType[], rowIdx: number) => {

            return <div className='flex' key={rowIdx}>
              {row.map((node: NodeType, nodeIdx: number) => {
                const { isStart, isFinish } = node
                return (<Node key={nodeIdx} isStart={isStart} isFinish={isFinish} />)
              }
              )}
            </div>
          })
        }
      </div>
    </main>
  )
}


