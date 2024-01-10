'use client'
import { useEffect, useState } from 'react'
import Node from '@/components/node/Node'
import Navbar from '../navbar/Navbar'
import { useGridContext } from '@/libs/context/gridContext/GridContext'



const START_NODE_ROW = 5
const START_NODE_COL = 5
const FINISH_NODE_ROW = 10
const FINISH_NODE_COL = 39

const Grid = () => {
    const { grid } = useGridContext()

    return (<>
        <Navbar grid={grid} startRow={START_NODE_ROW} startCol={START_NODE_COL} finishRow={FINISH_NODE_ROW} finishCol={FINISH_NODE_COL} />
        <div className='mx-4 max-w-max max-h-max bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>

            {
                grid.map((row, rowIdx: number) => {
                    return <div className='flex' key={rowIdx}>
                        {row.map((node, nodeIdx: number) => {
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