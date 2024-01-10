'use client'
import Node from '@/components/node/Node'
import { useGridContext } from '@/libs/context/gridContext/GridContext'

const Grid = () => {
    const { grid } = useGridContext()

    return (<>
        <div className=''>
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