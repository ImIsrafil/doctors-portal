import React from 'react'

const InfoCard = ({infoCardsDesc,img, bgColorClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgColorClass} p-5`}>
            <figure><img className='h-14' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{infoCardsDesc.title}</h2>
                <p className=''>{infoCardsDesc.desc}</p>
            </div>
        </div>
    )
}

export default InfoCard
