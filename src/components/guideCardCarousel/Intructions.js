import BlockCreate from "../../Assets/block.gif"
import AlgoSelect from "../../Assets/algo.gif"
import SrcDestSelect from "../../Assets/src_dest.gif"
import WeightNode from "../../Assets/weightNode.gif"
import BombNode from "../../Assets/bombNode.gif"
import Maze from "../../Assets/mage.gif"
import Output from "../../Assets/findDist.gif"
const Instructions = [
    {
        demo: BlockCreate,
        Heading: 'Create Walls',
        content : 'You can create walls by clicking on the grid. or by draging the mouse over grid, Walls are the nodes that are not allowed to be visited by the algorithm.',
    },
    {
        demo: AlgoSelect,
        Heading: 'Select Algorithm',
        content : 'You can select 4 algorithms - DFS,bfs, dijisktra, a star from drop-down. The algorithm will be used to find the shortest path between the start and end node.',
    },
    {
        demo: SrcDestSelect,
        Heading: "Select source and destination",
        content: "Double click to make a node start or finish node",
      },
      {
        demo: WeightNode,
        Heading: "Select Weighted Nodes",
        content: "4. There are two more selection options for weighted algorithms These being options to make any node weighted with value of 5 or make a bomb node that will set a shortcut with negative value Weighted nodes can be selected using control + mouse drag ",
      },
      {
        demo: BombNode,
        Heading: "Select Bomb Node",
        content: "bomb nodes can be made with shift + mouse drag",
      },
      {
        demo:Maze,
        Heading: "Cage or Random",
        content: "You can select the option to either create a random maze or a cage",
      },
      {
        demo:Output,
        Heading: "Find Distance",
        content: "Click on the Start button to find the shortest path between the start and end node.",
      },
      {
        Heading:"About Algorithms",
        content:{
          "Breadth-First Search (BFS)":"Explores a graph level by level, suitable for unweighted graphs to find the shortest path.",
          "Depth-First Search (DFS)":"Traverses as far as possible before backtracking, useful for topological sorting and connected components",
          "Dijkstra's Algorithm":"Finds the shortest path in weighted graphs with non-negative edges, using a priority queue",
          "A Algorithm":"Informed search algorithm combining BFS and heuristic information, efficient for goal-directed searches with optimality",
        }

      }
]
export default Instructions