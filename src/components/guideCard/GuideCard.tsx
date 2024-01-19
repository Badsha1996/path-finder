import React from 'react'

type Props = {}

// this will later change to type of card
const GuideCard = ({cardContent}:{cardContent: any}) => {
    return (
        <div className='w-full'>
            <span className=''>
                {cardContent.header}
                <p>
                    {cardContent.content}
                </p>
                <h3>
                    {cardContent.footer}
                </h3>
            </span>
        </div>
    )
}

export default GuideCard