'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

//TYPES
type GridContextProviderProps = { children: React.ReactNode }
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
export type Grid = NodeType[][]
type GridContext = {
    grid: NodeType[][],
    setGrid: React.Dispatch<React.SetStateAction<NodeType[][]>>
    isMousePressed: boolean
    setIsMousePressed: React.Dispatch<React.SetStateAction<boolean>>
    startSelected: boolean
    setStartSelected:React.Dispatch<React.SetStateAction<boolean>>
    finishSelected: boolean
    setFinishSelected : React.Dispatch<React.SetStateAction<boolean>>
}


const GridContext = createContext<GridContext | null>(null)

export const GridContextProvider = ({ children }: GridContextProviderProps) => {
    const [isMousePressed, setIsMousePressed] = useState(false)
    const [grid, setGrid] = useState<Grid>(
        [[{ col: 0, row: 0, isStart: false, isFinish: false, isVisited: false, isWall: false, prevNode: null, distance: Infinity }]]
    )
    
    const [startSelected, setStartSelected] = useState(false)
    const [finishSelected, setFinishSelected] = useState(false)
    const newNode = (row: number, col: number) => {
        return {
            col,
            row,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            prevNode: null

        }
    }
    const genGrid = () => {
        const gridNode :Grid = []
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

    return (
        <GridContext.Provider value={{ grid, setGrid, isMousePressed, setIsMousePressed, startSelected, setStartSelected, finishSelected, setFinishSelected }}>
            {children}
        </GridContext.Provider>
    )
}

// Consumer
export const useGridContext = () => {
    const context = useContext(GridContext)
    if (!context) {
        throw new Error('context must be within provider')
    }
    return context
}

