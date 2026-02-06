import React, {FC} from 'react';
import StartQuiz from "../../../features/StartQuiz/ui/StartQuiz";

const Home: FC = () => {
    return (
        <>
            <h1 className='center'>Welcome to 365Scores Quiz!</h1>
            <p className='center'>Test your sports knowledge!</p>
            <p className='center'>From soccer legends to Olympic feats - how well do you know the game?</p>
            <p className='center'>Ready to score?</p>
            <p className='center'>Prove you're a true sports fan!</p>
            <StartQuiz />
        </>
    )
}

export default Home;