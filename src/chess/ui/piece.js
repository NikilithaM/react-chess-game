import React from "react";
import{Image} from 'react-konva'


const piece = (props) => {
    /** 
     * imageURL
     * color
     * id
     * -color of player
     * -whether or not its your turn
     * -if this player's turn, color of this player is the same color as the piece,
     *      then we can make this piece draggable / moveable
     */
    return(
        <Image
            draggable
        />

    )
}

export default piece