import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Content } from '../@types/types'

export interface ContentState {
	editedContent: Content
}

const initialState: ContentState = { editedContent: { id: 0, title: '', body: '' } }

export const contentSlice = createSlice({
	name: 'contents',
	initialState,
	reducers: {
		setEditedContent: (state, action: PayloadAction<Content>) => {
			state.editedContent = action.payload
		},
	},
})

export const { setEditedContent } = contentSlice.actions
export default contentSlice.reducer
