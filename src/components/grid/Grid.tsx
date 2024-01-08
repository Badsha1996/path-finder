'use client'
import { useEffect, useState } from 'react'
import Node from '@/components/node/Node'

type NodeType = {
    col: number
    row: number,
    isStart: boolean,
    isFinish: boolean
}


type Props = {}

const Grid = (props: Props) => {
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
        return gridNode
    }
    useEffect(() => {
        setNodes(genGrid())
    }, [])
    return (
        <div>
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
    )
}

export default Grid