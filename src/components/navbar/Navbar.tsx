'use client'
import React, {useState } from 'react'
import ThemeSwap from './ThemeSwap';

import { NodeType } from '../grid/Grid';
import dijkstra from '@/libs/algorithms/dijkstra';
import { Theme, useThemeContext } from '@/libs/context/themeContext/ThemeContext';


const Navbar = ({ grid, startRow, startCol, finishRow, finishCol }: { grid: NodeType | any, startRow: number, startCol: number, finishRow: number, finishCol: number  }) => {
    const [selectedOption, setSelectedOption] = useState('Algorithm');
    const { theme, setTheme } = useThemeContext()

    const handleOptionClick = (option: string) => setSelectedOption(option)
    const startAlgorithm = () => {
        if (grid.length > 0 && grid[0].length > 0) {
            const visitedNodesInOrder = dijkstra(grid,
                grid[startRow]?.[startCol],
                grid[finishRow]?.[finishCol])

        }
    }

    const changeTheme = (event?: any) => {
        console.log(event.target.value)
        const nextTheme: null | Theme = event.target.value || null;
        // console.log(nextTheme)
        setTheme((prev) => (prev === "winter" ? "dracula" : "winter"))
        // if (nextTheme) {
        //   setTheme(nextTheme);
        // } else {
        //   setTheme((prev) => (prev === "winter" ? "dracula" : "winter"));
        // }
      };
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>{selectedOption}</a>
                            <ul className="p-2">
                                <li onClick={() => handleOptionClick('Dijkstra')}><a>Dijkstra</a></li>
                                <li onClick={() => handleOptionClick('Floyd Warshall')}><a>Floyd Warshall</a></li>
                                <li onClick={() => handleOptionClick('DFS')}><a>DFS</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">pathFinder</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>{selectedOption}</summary>
                            <ul className="p-2">
                                <li onClick={() => handleOptionClick('Dijkstra')}><a>Dijkstra</a></li>
                                <li onClick={() => handleOptionClick('Floyd Warshall')}><a>Floyd Warshall</a></li>
                                <li onClick={() => handleOptionClick('DFS')}><a>DFS</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <ThemeSwap handleOnClick={changeTheme} />
                <a onClick={startAlgorithm} className="btn">Start</a>
            </div>
        </div>
    )
}

export default Navbar