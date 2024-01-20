import { Heap } from 'heap-js';
import { Grid, NodeType } from '../types/Types';



// Helper functions
const getAllNodes = (grid: Grid) => {
    const nodes: NodeType[] = [];
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}

const updateUnvisitedNeighbors = (node: NodeType, grid: Grid, minHeap: Heap<NodeType>, finishNode: NodeType) => {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        const weight = neighbor.distance === 200 ? 5 : neighbor.distance === 100 ? -5 : 1;
        const newDistance = node.distance + weight;
        const hCost = heuristic(neighbor, finishNode);
        const fCost = newDistance + hCost;

        if (fCost <= neighbor.distance + node.distance) {
            const temp = neighbor
            minHeap.remove(neighbor)
            temp.distance = newDistance;
            temp.prevNode = node;
            minHeap.push(temp);
        }
    }
}

const getUnvisitedNeighbors = (node: NodeType, grid: Grid) => {
    const neighbors = [];
    const { col, row } = node;

    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    return neighbors.filter(neighbor => !neighbor.isVisited);
}

// Heuristic function (Euclidean distance)
const heuristic = (node: NodeType, goalNode: NodeType) => {
    return Math.sqrt(Math.pow(node.row - goalNode.row, 2) + Math.pow(node.col - goalNode.col, 2));
}

// Backtracks from the finishNode to find the shortest path.
export function getNodesInShortestPathOrder(finishNode: NodeType) {
    const nodesInShortestPathOrder = [];
    let currentNode: NodeType | null = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.prevNode;
    }

    return nodesInShortestPathOrder;
}

// Main A* algorithm
const astar = (grid: Grid, startNode: NodeType, finishNode: NodeType) => {
    const visitedNodesInOrder: NodeType[] = [];
    if (startNode != undefined) startNode.distance = 0;

    const unvisitedNodes = getAllNodes(grid);

    const minHeap = new Heap((a: NodeType, b: NodeType) => (a.distance + heuristic(a, finishNode)) - (b.distance + heuristic(b, finishNode)));
    minHeap.init(unvisitedNodes);

    while (!minHeap.isEmpty()) {
        const closestNode: NodeType | any = minHeap.pop();

        if (closestNode?.isWall) continue;

        if (closestNode.distance === Infinity) return visitedNodesInOrder;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if (closestNode === finishNode) return visitedNodesInOrder;
        updateUnvisitedNeighbors(closestNode, grid, minHeap, finishNode);
    }

    return visitedNodesInOrder;
}

export default astar;
