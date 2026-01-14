import { Route, Routes } from "react-router";
import Home from "../ui/Home/Home";
import Quiz from "../ui/Quiz/Quiz";
import Score from "../ui/Score/Score";

const AppRoutes = () => {
    const navigationRoutes = [
        {path: '/', element: <Home/>},
        {path: '/quiz', element: <Quiz/>},
        {path: '/score', element: <Score/>}
    ]

    return (
        <Routes>
            {navigationRoutes.map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default AppRoutes;