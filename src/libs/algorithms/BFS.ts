import { Heap } from 'heap-js';
import { Grid } from '../types/Types';

type NodeType = {
    col:number,
    row:number,
    isStart: boolean ,
    isFinish: boolean,
    distance: typeof Infinity,
    isVisited: boolean,
    isWall: boolean,
    prevNode: null | NodeType
}


const getAllNeighbors = (node:NodeType, grid:Grid)=> {
  const neighbors = [];
  const {col, row} = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}


export function getNodesInShortestPathOrder(finishNode:NodeType) {
  const nodesInShortestPathOrder = [];
  let currentNode: NodeType | null = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.prevNode;
  }
  
  return nodesInShortestPathOrder;
}


// Main Dijkstra algorihtm 
const BFS = (grid : Grid, startNode:NodeType, finishNode:NodeType) =>{
    const visitedNodesInOrder : NodeType[] = []

    // need a queue for searching with startnode as starting point 
    const queue: NodeType[] = [startNode]

    while (queue.length!=0){
        const node =  queue.shift()
        if (node?.isWall) continue;
        
        if(node!=undefined) node.isVisited = true
        visitedNodesInOrder.push(node!)

        if (node === finishNode) return visitedNodesInOrder;
        const unvisitedNeighbors = getAllNeighbors(node!, grid)
        for(let n of unvisitedNeighbors){
            if(!n.isVisited){
                queue.push(n)
                n.isVisited = true
                n.prevNode = node!
            }
        }


    }
    return visitedNodesInOrder; 
}


export default BFS




