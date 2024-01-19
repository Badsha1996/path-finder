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


const getAllNeighbors = (node:NodeType, grid:NodeType[][])=> {
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
const DFS = (grid : NodeType[][], startNode:NodeType, finishNode:NodeType) =>{
    const visitedNodesInOrder : NodeType[] = []
    
    const dfs = (startNode: NodeType) =>{
        if (startNode === finishNode) {
            visitedNodesInOrder.push(startNode);
            return;
        }
        if (startNode?.isWall) return;
        
        startNode.isVisited = true 
        if (startNode.isVisited) visitedNodesInOrder.push(startNode)
        
        const unvisitedNeighbors = getAllNeighbors(startNode!, grid)

        for(let nei of unvisitedNeighbors){
            if (!nei.isVisited) {
                
                nei.prevNode = startNode
                dfs(nei)
                if (visitedNodesInOrder[visitedNodesInOrder.length - 1] === finishNode) return
            }
        }
    }

    dfs(startNode)
    return visitedNodesInOrder; 
}


export default DFS




