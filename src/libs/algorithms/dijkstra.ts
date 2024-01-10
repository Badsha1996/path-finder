import { Heap } from 'heap-js';

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

// HELPER FUNCTIONS 
const getAllNodes = (grid : NodeType[][]) =>{
    const nodes : NodeType[] = []
    for (const row of grid) {
        for (const node of row) {
          nodes.push(node);
        }
      }
    return nodes
}

const updateUnvisitedNeighbors = (node: NodeType, grid: NodeType[][], minHeap: Heap<NodeType>) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
      const newDistance = node.distance + 1;
      if (newDistance < neighbor.distance) {
          const temp = neighbor
          minHeap.remove(neighbor)
          temp.distance = newDistance;
          temp.prevNode = node;
          minHeap.push(temp); 
      }
  }
}
const getUnvisitedNeighbors = (node:NodeType, grid:NodeType[][])=> {
  const neighbors = [];
  const {col, row} = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}


// Main Dijkstra algorihtm 
const dijkstra = (grid : NodeType[][], startNode:NodeType, finishNode:NodeType) =>{
    const visitedNodesInOrder : NodeType[] = []
    if (startNode!=undefined) startNode.distance  = 0
   
    const unvisitedNodes = getAllNodes(grid)
    
   
    const minHeap = new Heap((a:NodeType, b:NodeType) => a.distance - b.distance);;
    minHeap.init(unvisitedNodes);
    while (!minHeap.isEmpty()){
        const closestNode : NodeType | any = minHeap.pop()

        if (closestNode?.isWall) continue;
        
        if (closestNode.distance === Infinity) return visitedNodesInOrder;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if (closestNode === finishNode) return visitedNodesInOrder;
        updateUnvisitedNeighbors(closestNode, grid, minHeap);
        
    }
    return visitedNodesInOrder; 
}


export default dijkstra




