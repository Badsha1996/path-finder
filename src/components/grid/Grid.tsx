'use client'
import Node from '@/components/node/Node'
import { useGridContext } from '@/libs/context/gridContext/GridContext'
import { useThemeContext } from '@/libs/context/themeContext/ThemeContext'
import { useEffect, useState } from 'react'

const Grid = () => {
    const { grid } = useGridContext()
    const {theme} = useThemeContext()
    const [gradientType, setGradientType] = useState<string>('bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400')
   
    useEffect(()=>{
        if(theme == 'winter'){
            setGradientType('bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400')
        }else{
            setGradientType('bg-slate-500')
        }
    },[theme])
    return (<>
        <div className={`mx-4 max-w-max max-h-max  ${gradientType}`}>
            {
                grid.map((row, rowIdx: number) => {
                    return <div className='flex' key={rowIdx}>
                        {row.map((node, nodeIdx: number) => {
                            const { isStart, isFinish, isVisited, row, col,isWall, distance } = node
                            return (<Node key={nodeIdx} isStart={isStart} isFinish={isFinish} isWall={isWall} isVisited={isVisited} row={row} col={col} distance={distance}/>)
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