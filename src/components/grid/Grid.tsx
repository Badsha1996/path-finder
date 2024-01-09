'use client'
import { useEffect, useState } from 'react'
import Node from '@/components/node/Node'
import dijkstra  from '@/libs/algorithms/dijkstra'
import Navbar from '../navbar/Navbar'

export type NodeType = {
    col: number,
    row: number,
    isStart: boolean,
    isFinish: boolean,
    distance: typeof Infinity,
    isVisited: boolean,
    isWall: boolean,
    prevNode: null | NodeType
}

const START_NODE_ROW = 5
const START_NODE_COL = 5
const FINISH_NODE_ROW = 10
const FINISH_NODE_COL = 39



const Grid = () => {
    const [grid, setGrid] = useState<NodeType[][]>([[{ col: 0, row: 0, isStart: false, isFinish: false, isVisited: false, isWall: false, prevNode: null, distance: Infinity }]])

    const newNode = (row: number, col: number) => {
        return {
            col,
            row,
            isStart: row == START_NODE_ROW && col == START_NODE_COL,
            isFinish: row == FINISH_NODE_ROW && col == FINISH_NODE_COL,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            prevNode: null

        }
    }
    const genGrid = () => {
        const gridNode = []
        for (let row = 0; row < 15; row++) {
            const curRow = []
            for (let col = 0; col < 50; col++) {
                curRow.push(newNode(row, col))
            }
            gridNode.push(curRow)
        }
        return gridNode
    }
    useEffect(() => {
        setGrid(genGrid())
    }, [])
    
    if (grid.length > 0 && grid[0].length > 0) {const cal = dijkstra(grid,
        grid[START_NODE_ROW]?.[START_NODE_COL],
        grid[FINISH_NODE_ROW]?.[FINISH_NODE_COL])
    
    }
   
    
    return (<>
        <Navbar grid={grid}/>
        <div className='mx-4 max-w-max max-h-max bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>

            {
                grid.map((row: NodeType[], rowIdx: number) => {
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
    </>
    )
}

export default Grid