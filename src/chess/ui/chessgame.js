import React from "react";
import Game from '../model/chess';
import { Socket } from "socket.io-client";

class ChessGame extends React.Component{
    state = {
        gameState: new Game(this.props.isWhite),
        whiteKingInCheck: false,
        blackKingInCheck: false
    }

    componentDidMount(){
        // here we need to register event listeners for socket.io
        Socket.on('opponent move', move => {
            if(move.playerColorThatJustMovedIsWhite !== this.props.isWhite)
                this.movePiece(move.selectedId, move.finalPosition, this.state.gameState, false)
                this.setState( {
                    playerTurnToMoveIsWhite: !move.playerColorThatJustMovedIsWhite
                })
        })
    }
    render() {
        return(
            /**
             * <div backgound = chessboard>
             *   <stage>
             *      <layer for loop model and renders it >
             * 
             * 
             * </div>
             */
            <React.Fragment>
                <div>
                    <stage>
                        <layer>
                            {
                                this.state.gameState.getBoard() .map((row) => {
                                    
                                })
                            }
                        </layer>
                    </stage> 
                </div> 
            </React.Fragment>
        )
    }

    movePiece(selectedId, finalPosition, currentGame, isMyMove) {
        /**
         * uses pythgorean theorem yo calculate
         * the distance beetween the final position of the
         * chess piece and every square on the board, 
         * and assigns the piece to the closest square
         */

    }
}

export default ChessGame