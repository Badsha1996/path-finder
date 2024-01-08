const Node = ({ isStart, isFinish }: { isStart: boolean, isFinish: boolean }) => {
  const nodeDesignClass = isStart ? 'bg-yellow-400' : isFinish ? 'bg-red-400' : ''
  return (
    <div className={`h-7 w-7 outline-cyan-300 outline outline-1 ${nodeDesignClass}`}></div>
  )
}
export default Node