/* eslint-disable @typescript-eslint/ban-ts-comment */
import  {configureStore, type ThunkAction, type Action} from '@reduxjs/toolkit';
import HomePageReducer from './routes/home/slice';
import reduxLogger from 'redux-logger';

export const store = configureStore({
    // @ts-expect-error
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
    reducer: {
        homePage: HomePageReducer
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>   