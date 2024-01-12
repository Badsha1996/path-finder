import { NodeType, useGridContext } from "@/libs/context/gridContext/GridContext"
import dijkstra, { getNodesInShortestPathOrder } from "@/libs/algorithms/dijkstra"

const StartButton = ({ selectedOption }: { selectedOption: string }) => {
    const { grid } = useGridContext()

    const startAlgorithm = (algorithm: string) => {
        // start Node and finsished Node are there 
        let startNode: NodeType = {
            col: 0,
            row: 0,
            isStart: false,
            isFinish: false,
            distance: 0,
            isVisited: false,
            isWall: false,
            prevNode: null
        }
        let finishNode: NodeType = {
            col: 0,
            row: 0,
            isStart: false,
            isFinish: false,
            distance: 0,
            isVisited: false,
            isWall: false,
            prevNode: null
        }
        for (const row of grid) {
            for (const node of row) {
                if (node.isStart == true) { startNode = node }
                else if (node.isFinish == true) { finishNode = node }

            }
        }

        if (grid.length > 0 && grid[0].length > 0) {
            if (algorithm == 'Dijkstra') {
                const visitedNodesInOrder = dijkstra(grid,
                    startNode,
                    finishNode)
                const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
                animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder)
            } else {
                console.log('No algo')
            }
        }

    }
    const animateAlgorithm = (nodes: NodeType[], nodesInShortestPathOrder: NodeType[]) => {
        for (let i = 0; i <= nodes.length; i++) {
            if (i === nodes.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, 15 * i);
                return;
            }

            setTimeout(() => {
                const node = nodes[i];
                const elementId = `node-${node.row}-${node.col}`;
                const element = document.getElementById(elementId) as HTMLElement;
                if (element && !node.isStart && !node.isFinish) element.classList.add(`node-visited`)
            }, 15 * i);
        }
    }

    const animateShortestPath = (nodesInShortestPathOrder: NodeType[]) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                const elementId = `node-${node.row}-${node.col}`;
                const element = document.getElementById(elementId) as HTMLElement;
                if (element) element.classList.add(`node-shortest-path`)
            }, 50 * i);
        }
    }


    return (
        <>
            <a onClick={() => startAlgorithm(selectedOption)} className="btn">Start</a>

        </>
    )
}

export default StartButton


