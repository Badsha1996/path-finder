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
}

// constants 
export const START_NODE_ROW = 5
export const START_NODE_COL = 5
export const FINISH_NODE_ROW = 10
export const FINISH_NODE_COL = 39


const GridContext = createContext<GridContext | null>(null)

export const GridContextProvider = ({ children }: GridContextProviderProps) => {
    const [isMousePressed, setIsMousePressed] = useState(false)
    const [grid, setGrid] = useState<Grid>(
        [[{ col: 0, row: 0, isStart: false, isFinish: false, isVisited: false, isWall: false, prevNode: null, distance: Infinity }]]
    )
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

    return (
        <GridContext.Provider value={{ grid, setGrid, isMousePressed, setIsMousePressed }}>
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

