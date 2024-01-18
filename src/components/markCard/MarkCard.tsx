import React from 'react'
import Image from 'next/image'
import StartIcon from '../../../public/entry-point.svg'
import FinishIcon from '../../../public/finish-point.svg'
import BombIcon from '../../../public/bomb.svg'
import WeightIcon from '../../../public/weight.svg'

type Props = {}

const MarkCard = (props: Props) => {
  return (
    <div className='my-2 p-10 relative flex flex-wrap justify-evenly'>
        <div className='flex gap-1 border border-red-500 p-2 rounded-full justify-center items-center'>
            <Image src={StartIcon} alt='start-icon' height={20} width={20}></Image>
            <span>Start Node</span>
        </div>
        <div className='flex gap-1 border border-yellow-500 p-2 rounded-full justify-center items-center'>
            <Image src={FinishIcon} alt='finish-icon' height={20} width={20}></Image>
            <span>Finish Node</span>
        </div>
        <div className='flex gap-1 border border-red-900 p-2 rounded-full justify-center items-center'>
            <Image src={BombIcon} alt='bomb-icon' height={20} width={20}></Image>
            <span>Bomb Node</span>
        </div>
        <div className='flex gap-1 border border-black p-2 rounded-full justify-center items-center'>
            <Image src={WeightIcon} alt='weight-icon' height={20} width={20}></Image>
            <span>Weight Node</span>
        </div>
        <div className='flex gap-1 border border-red-900 p-2 rounded-full justify-center items-center'>
            <div className='bg-blue-950 h-5 w-5'></div>
            <span>Bomb Node</span>
        </div>
    </div>
  )
}

export default MarkCard