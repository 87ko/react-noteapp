import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContentState {
	id: number;
	title: string;
	body: string;
}

const initialState: ContentState[] = [{ id: 0, title: '', body: '' }];

export const contentsSlice = createSlice({
	name: 'contents',
	initialState,
	reducers: {
		all: (state) => {},
	},
});
