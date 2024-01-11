import { Grid, useGridContext } from '@/libs/context/gridContext/GridContext'
import './Node.css'
const Node = ({ isStart, isFinish, row, col, isVisited, isWall }: { isStart: boolean, isFinish: boolean, isWall: boolean, isVisited: boolean, row: number, col: number }) => {
  const nodeDesignClass = isStart ? 'bg-yellow-400' : isFinish ? 'bg-red-400' : isWall ? 'bg-blue-800 border rounded-full' : ''
  const { grid, setGrid, setIsMousePressed, isMousePressed } = useGridContext()
  const getNewGridWithWallToggled = (grid: Grid, row: number, col: number) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  const onMouseDown = (row: number, col: number) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid)
    setIsMousePressed(true)
  }
  const onMouseEnter = (row: number, col: number) => {
    if (!isMousePressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid)
  }
  const onMouseUp = () => {
    setIsMousePressed(false)
  }

  return (
    <div id={`node-${row}-${col}`}
      className={`h-7 w-7 outline-cyan-300 outline outline-1  ${nodeDesignClass}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}>
    </div>
  )
}
export default Node




