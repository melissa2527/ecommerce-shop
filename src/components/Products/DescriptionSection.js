import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const DescriptionSection = ({description}) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleShowDescription = () => {
        setShowDescription(!showDescription)
    }
    return (
        <div>
            Description: 
            <ArrowDropDownCircleIcon onClick={toggleShowDescription}/>
            {showDescription ? 
                <Typography variant='body2' dangerouslySetInnerHTML={{__html: description}}/>
                : null
            } 
        </div>
    )
}

export default DescriptionSection