import {FC} from 'react';
import {useAppSelector} from "@/shared/store/lib/reduxHooks.ts";
import {getScore, getUserId} from "@/entities/user/model/userSlice.ts";
import PlayAgainButton from "@/features/PlayAgain/ui/PlayAgainButton";
import {LeaderBoard} from "@/widgets/Leaderboard";

const Score: FC = () => {
    const score = useAppSelector(getScore);
    const userId = useAppSelector(getUserId);
    const userName = `guest${userId && userId.split('-')[4]}`;

    return (
        <>
            <h1>Quiz Complete!</h1>
            <p>Thanks for playing! {userName}</p>
            <p>Your Score: {score}</p>
            <PlayAgainButton />
            <LeaderBoard userName={userName} />
        </>
    )
}

export default Score;