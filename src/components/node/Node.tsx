import { Grid, useGridContext } from '@/libs/context/gridContext/GridContext'
import './Node.css'

const Node = ({ isStart, isFinish, row, col, isVisited, isWall }: { isStart: boolean, isFinish: boolean, isWall: boolean, isVisited: boolean, row: number, col: number }) => {
  const nodeDesignClass = isWall ? 'node-wall' : isStart ? 'bg-yellow-400' : isFinish ? 'bg-red-400' : ''
  const { grid, setGrid, setIsMousePressed, isMousePressed, startSelected, setStartSelected, finishSelected, setFinishSelected } = useGridContext()
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

  const genNewGridWithGoalNode = (grid: Grid, row: number, col: number) => {
    const newGrid = grid.slice()
    const node = newGrid[row][col]
    // is start is not here 
    if (!startSelected) {
      const newNode = {
        ...node,
        isStart: !node.isStart,
        isWall: false
      }
      newGrid[row][col] = newNode;
      setStartSelected(true)
      return newGrid;
    } else if (!node.isStart && !finishSelected) {
      const newNode = {
        ...node,
        isFinish: !node.isFinish,
        isWall: false
      }
      newGrid[row][col] = newNode;
      setFinishSelected(true)
      return newGrid;
    } else {
      return newGrid
    }


  }

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
  const onDoubleClick = (row: number, col: number) => {
    const newGrid = genNewGridWithGoalNode(grid, row, col)
    setGrid(newGrid)
  }


  return (
    <div id={`node-${row}-${col}`}
      className={`h-7 w-7 outline-cyan-300 outline outline-1  ${nodeDesignClass}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
      onDoubleClick={() => onDoubleClick(row, col)}>
    </div>
  )
}
export default Node




