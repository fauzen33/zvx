import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../../rootReducer'
import { compose } from 'redux'
import rootSaga from '../../saga'


const sagaMiddleware = createSagaMiddleware()




const composeEnhancers =
	(typeof window !== 'undefined' &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose
	

	

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(sagaMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)


