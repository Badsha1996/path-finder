import { Grid, useGridContext } from '@/libs/context/gridContext/GridContext'
import './Node.css'
import Image from 'next/image'
import startIcon from '../../../public/entry-point.svg'
import finishIcon from '../../../public/finish-point.svg'
import weightIcon from '../../../public/weight.svg'
import bombIcon from '../../../public/bomb.svg'
import brickIcon from '../../../public/brick.svg'

const Node = ({ isStart, isFinish, row, col, isVisited, isWall, distance }: { isStart: boolean, isFinish: boolean, isWall: boolean, isVisited: boolean, row: number, col: number, distance: number }) => {
  const nodeDesignClass = isWall ? 'bg-blue-950' : isStart ? 'selected-node start-node' : isFinish ? 'selected-node ': distance===100 ? 'bomb-node' : ''
  const { grid, setGrid, setIsMousePressed, isMousePressed, startSelected, setStartSelected, finishSelected, setFinishSelected } = useGridContext()
  const getNewGridWithWallToggled = (grid: Grid, row: number, col: number, e: any) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    if (e.ctrlKey && !isWall) {
      e.preventDefault()
      const newNode = {
        ...node,
        distance: 100
      };

      newGrid[row][col] = newNode;
      return newGrid;
    }
    else if (e.shiftKey && !isWall) {
      e.preventDefault()
      const newNode = {
        ...node,
        distance: 200
      };

      newGrid[row][col] = newNode;
      return newGrid;
    } else {
      const newNode = {
        ...node,
        isWall: !node.isWall,
      };
      newGrid[row][col] = newNode;
      return newGrid;
    }
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

  const onMouseDown = (row: number, col: number, e: any) => {
    e.preventDefault()
    const newGrid = getNewGridWithWallToggled(grid, row, col, e);
    setGrid(newGrid)
    setIsMousePressed(true)

  }
  const onMouseEnter = (row: number, col: number, e:any) => {
    if (!isMousePressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col, e);
    setGrid(newGrid)
  }
  const onMouseUp = () => {
    setIsMousePressed(false)
  }
  const onDoubleClick = (row: number, col: number,e:any) => {
    e.preventDefault()
    const newGrid = genNewGridWithGoalNode(grid, row, col)
    setGrid(newGrid)
  }

  return (
    <div id={`node-${row}-${col}`}
      className={`h-7 w-7 outline-cyan-300  outline outline-1 ${nodeDesignClass}`}
      onMouseDown={(e) => onMouseDown(row, col, e)}
      onMouseEnter={(e) => onMouseEnter(row, col, e)}
      onMouseUp={() => onMouseUp()}
      onDoubleClick={(e) => onDoubleClick(row, col,e)}>
      {
        isStart && (
          <Image
            src={startIcon}
            alt='start-node'
            width={100}
            height={100}>
          </Image>
        )
      }
      {
        isFinish && (
          <Image
            src={finishIcon}
            alt='finish-node'
            width={100}
            height={100}>
          </Image>
        )
      }
      {
        distance=== 200 && (
          <Image
            src={weightIcon}
            alt='weight-node'
            width={100}
            height={100}>
          </Image>
        )
      }
      {
        distance=== 100 && (
          <Image
            src={bombIcon}
            alt='bomb-node'
            width={100}
            height={100}>
          </Image>
        )
      }
      
    </div>
  )
}
export default Node
