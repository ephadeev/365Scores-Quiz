import React, {FC, useEffect, useState} from 'react';
import { useLocation, useNavigate } from "react-router";
import 'materialize-css';
import { v4 as uuidv4 } from 'uuid';
import {setUserId} from './entities/user/model/userSlice';
import './App.css';
import Header from "./widgets/Header/ui/Header";
import Footer from "./widgets/Footer/ui/Footer";
import AppRoutes from "./pages/lib/routes";
import {useAppDispatch, useAppSelector} from "./shared/store/lib/reduxHooks";

const App: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // check userId field in localStorage, if exists set in state, else generate and set in state and localStorage
    useEffect(() => {
        let userIdInLocalStorage: string | null = localStorage.getItem('userId');
        if (!userIdInLocalStorage) {
            userIdInLocalStorage = uuidv4();
            localStorage.setItem('userId', userIdInLocalStorage);
        }
        dispatch(setUserId(userIdInLocalStorage))

    }, []);

  return (
      <>
          <Header />
          <main className='main container'>
              <AppRoutes/>
          </main>
          <Footer />
      </>
  );
}

export default App;
