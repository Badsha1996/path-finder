import './Node.css'
const Node = ({ isStart, isFinish,row, col, isVisited}: { isStart: boolean, isFinish: boolean, isVisited: boolean, row:number, col:number }) => {
  const nodeDesignClass = isStart ? 'bg-yellow-400' : isFinish ? 'bg-red-400' : isVisited? ' ' : '' 
  
  return (
    <div id={`node-${row}-${col}`} className={`h-7 w-7 outline-cyan-300 outline outline-1 ${nodeDesignClass}`}></div>
  )
}
export default Node