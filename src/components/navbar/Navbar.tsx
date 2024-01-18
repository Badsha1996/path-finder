'use client'
import React, { useState } from 'react'
import ThemeSwap from './ThemeSwap';
import { useThemeContext } from '@/libs/context/themeContext/ThemeContext';
import StartButton from '../startButton/StartButton';
import { Grid, useGridContext } from '@/libs/context/gridContext/GridContext';


const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('Algorithm');
    const { setTheme } = useThemeContext()
    const { setGrid, grid, setStartSelected, setFinishSelected } = useGridContext()


    const handleClearGrid = () => {


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
        const gridNode: Grid = []

        for (let row = 0; row < 15; row++) {
            const curRow = []
            for (let col = 0; col < 50; col++) {
                curRow.push(newNode(row, col))

                const elementId = `node-${row}-${col}`;
                const element = document.getElementById(elementId) as HTMLElement;
                if (element) {
                    element.classList.remove(`node-visited`)
                    element.classList.remove(`node-shortest-path`)
                }
            }
            gridNode.push(curRow)
        }
        // set new grid
        setGrid(gridNode)
        setFinishSelected(false)
        setStartSelected(false)


    }
    const changeTheme = () => setTheme((prev) => (prev === "winter" ? "dracula" : "winter"))
    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
        const elem = document.querySelector('.dropdown-content') as HTMLElement

        // if(elem){
        // elem?.blur();
        // }

        // REMOVE VISIBLITY FROM DROPDOWN CONTENT 
    }

    const genMage = () => {
        // make a copy of a grid 
        const newGrid = grid.slice()

        for (const row of newGrid) {
            for (const node of row) {
                if (Math.random() < 0.20 && (!node.isStart && !node.isFinish) && (node.distance !== 100 && node.distance !== 200)) {
                    const newNode = {
                        ...node,
                        isWall: true,
                    };
                    newGrid[node.row][node.col] = newNode;
                }

            }
        }
        // set new grid
        setGrid(newGrid)
    }

    return (
        <div>
            <div className="navbar bg-base-100 mb-5 z-10">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={handleClearGrid}>Clear Grid</a></li>
                            <li><a onClick={genMage}>Generate Mage</a></li>
                            <li>
                                <a >{selectedOption}</a>
                                <ul className="p-2 z-10" >
                                    <li onClick={() => handleOptionClick('Dijkstra')} ><a>Dijkstra</a></li>
                                    <li onClick={() => handleOptionClick('Floyd Warshall')} ><a>Floyd Warshall</a></li>
                                    <li onClick={() => handleOptionClick('DFS')} ><a>DFS</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">pathFinder</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a onClick={handleClearGrid}>Clear Grid</a></li>
                        <li><a onClick={genMage}>Generate Mage</a></li>
                        <li>
                            <details>
                                <summary >{selectedOption}</summary>
                                <ul className="p-2 z-10">
                                    <li onClick={() => handleOptionClick('Dijkstra')}><a>Dijkstra</a></li>
                                    <li onClick={() => handleOptionClick('Floyd Warshall')}><a>Floyd Warshall</a></li>
                                    <li  onClick={() => handleOptionClick('DFS')}><a>DFS</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <ThemeSwap handleOnClick={changeTheme} />
                    <StartButton selectedOption={selectedOption} />
                </div>

            </div>
        </div>
    )
}

export default Navbar