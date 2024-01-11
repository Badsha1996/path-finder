import { FINISH_NODE_COL, FINISH_NODE_ROW, NodeType, START_NODE_COL, START_NODE_ROW, useGridContext } from "@/libs/context/gridContext/GridContext"
import dijkstra, { getNodesInShortestPathOrder } from "@/libs/algorithms/dijkstra"

const StartButton = ({selectedOption}:{selectedOption:string}) => {
    const { grid } = useGridContext()
    
    const startAlgorithm = (algorithm: string) => {
        if (grid.length > 0 && grid[0].length > 0) {
            if (algorithm == 'Dijkstra') {
                const visitedNodesInOrder = dijkstra(grid,
                    grid[START_NODE_ROW]?.[START_NODE_COL],
                    grid[FINISH_NODE_ROW]?.[FINISH_NODE_COL])
                const nodesInShortestPathOrder = getNodesInShortestPathOrder(grid[FINISH_NODE_ROW]?.[FINISH_NODE_COL]);
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
                if (element) element.classList.add(`node-visited`)
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


