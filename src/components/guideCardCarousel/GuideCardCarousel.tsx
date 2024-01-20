'use client'
import React from 'react'
import GuideCard from '../guideCard/GuideCard'
import { useGuideContext } from '@/libs/context/guideContext/GuideContext'
import Guide from "./Guides"
type Props = {}

const GuideCardCarousel = (props: Props) => {
    const { showGuide, setShowGuide} = useGuideContext()
    
    if(showGuide){
        return (
            <div className='flex items-center justify-center '>
            <div className='z-50 absolute top-5 max-w-lg w-[70%]'>
                <div className="carousel w-full rounded-lg shadow-sm border-[1px] border-slate-30 h-fit">
                    {
                        Guide.map((instruction,index) => {
                            return (
                                <div key={index} id={`item${index}`} className="carousel-item w-full  border bg-white">
                                    <GuideCard cardContent={instruction}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center w-full py-2 gap-2 ">
                    {
                        Guide.map((Guide,index) => {
                            return(
                            <a href={`#item${index}`} className="btn btn-xs" key={index}>{index+1}</a>
                            )
                        })
                    }
                    <a href="#" onClick={()=>setShowGuide(!showGuide)} className="btn btn-xs bg-blend-multiply text-gray-600">Skip Tutorial</a>
                </div>
            </div>
        </div>
        )
    }
}

export default GuideCardCarousel