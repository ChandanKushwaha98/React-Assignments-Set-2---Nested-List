import React from 'react'
import { useState } from 'react';
import TownList from './TownList';

const CityList = ({ cityList }) => {
    const [getCity, setCity] = useState(0);
    return (
        <ul>
            {cityList.map((city, index) =>
                <div>
                    <li id={"city"+(index+1)} className="clickItem" onClick={() => {
                        if (getCity === city.name) {
                            setCity(1)
                        } else {
                            setCity(city.name)
                        }
                    }}>{city.name}</li>
                    {getCity === city.name && <TownList townList={city.towns}/>}
                </div>
            )
            }
        </ul>
    )
}

export default CityList
