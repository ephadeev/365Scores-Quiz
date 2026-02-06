import React, {FC} from 'react';
import {useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getScores} from "../../../entities/quiz/model/quizSlice";

const LeaderBoard: FC<{userName: string}> = ({userName}) => {
    const scores = useAppSelector(getScores);

    return (
        <div className='quiz_card'>
            <div className='s12 m6 quiz_col'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content'>
                        <span className='card-title'>Leaderboard</span>
                        <ul className="collection">
                            {scores && scores.map(score => <li className="collection-item blue-grey lighten-1"
                                                               key={score}>{`${userName}: ${score}`}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard;