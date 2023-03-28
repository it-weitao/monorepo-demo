import { AxiosInstance } from 'axios'
import { configureStore } from '@reduxjs/toolkit'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

export interface EpicDep {
  storage: Storage
  request: AxiosInstance
}

const rootEpic = combineEpics()
const epicMiddleware = createEpicMiddleware({
})
epicMiddleware.run(rootEpic)

export const store = configureStore({
  reducer: {
  },
  middleware: [epicMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const a = 1
