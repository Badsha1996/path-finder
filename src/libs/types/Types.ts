export type NodeType = {
    col:number,
    row:number,
    isStart: boolean ,
    isFinish: boolean,
    distance: typeof Infinity,
    isVisited: boolean,
    isWall: boolean,
    prevNode: null | NodeType
}

export type Grid = NodeType[][]

import { StaticImageData } from "next/image"

export type Guide = {
  demo : StaticImageData | null,
  Heading: string,
  content: string | {
    "Breadth-First Search (BFS)": string;
    "Depth-First Search (DFS)": string;
    "Dijkstra's Algorithm": string;
    "A* Algorithm": string;
}
}