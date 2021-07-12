import React from 'react'
import { useState } from 'react';

const TownList = ({townList}) => {
    const [getTown, setTown] = useState(0);
    return (
        <ul>
            {townList.map((Town, index) =>
                <div>
                    <li id={"town"+(index+1)} className="clickItem">{Town.name}</li>
                </div>
            )
            }
        </ul>
    )
}

export default TownList
