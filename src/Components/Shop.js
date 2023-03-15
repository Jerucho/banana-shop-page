import React from 'react'
import Navbar from './Navbar'
import Card from './ItemCard' 
import { plantList } from './ItemInfo'
import { useNavigate } from 'react-router-dom'

export default function Shop(){
    const navigate = useNavigate()

    const handleClickToItem = (e) => {
        navigate('/item', { state: {id: e.currentTarget.id}})
        
    }


    return(
        <div>
            <div className='sticky top-0 bg-red-100'>
                <Navbar />
            </div>
            <div className='grid grid-cols-3 gap-y-10 justify-center cursor-pointer'>
                {plantList.map((item) => {
                    return(
                            <Card 
                                onClick={handleClickToItem}
                                key={item.id}
                                id={item.id}
                                src={`${process.env.PUBLIC_URL}${item.url}`}
                                alt={item.alt}
                                name={item.name}
                                price={item.price}

                            />
                    )
                })}
            </div>
    
        </div>
    )
}
