import React from 'react'


const Node = ({key,isStart, isFinish}:{key: number, isStart: boolean, isFinish:boolean}) => {

  const nodeDesignClass = isStart ? 'bg-red-600' : isFinish ? 'bg-blue-600' : ''
  return (
    <div className={`h-7 w-7 outline-cyan-300 outline outline-1 ${nodeDesignClass}`}></div>
  )
}

export default Node