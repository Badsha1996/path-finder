'use client'
import React from 'react'
import GuideCard from '../guideCard/GuideCard'
import { useGuideContext } from '@/libs/context/guideContext/GuideContext'

type Props = {}

const GuideCardCarousel = (props: Props) => {
    const { showGuide, setShowGuide} = useGuideContext()
    const cardContent = [
        {
            header : 'item1',
            content: 'lorem',
            footer : 'footer'
        },
        {
            header : 'itm2',
            content: 'lorem',
            footer : 'footer'
        },
        {
            header : 'item3',
            content: 'lorem',
            footer : 'footer'
        },
        {
            header : 'item4',
            content: 'lorem',
            footer : 'footer'
        }
    ]
    if(showGuide){
        return (
            <div className='flex items-center justify-center'>
            <div className='z-50 absolute top-5 w-[80%]'>
                <div className="carousel w-full">
                    {
                        cardContent.map((cardContent,index) => {
                            return (
                                <div key={index} id={`item${index}`} className="carousel-item w-full h-80 border bg-red-300">
                                    <GuideCard cardContent={cardContent}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#" onClick={()=>setShowGuide(!showGuide)} className="btn btn-xs">skip</a>
                </div>
            </div>
        </div>
        )
    }
}

export default GuideCardCarousel