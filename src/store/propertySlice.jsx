import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk(
    'properties/fetchProperties',
    async () => {
        const res = await fetch('/data.json');
        const data = await res.json();
        return data;
    }
);

const propertySlice = createSlice({
    name: 'properties',
    initialState: {
        list: [],
        status: 'idle', 
        error: null,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchProperties.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProperties.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(fetchProperties.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
    });

export const { addProperty } = propertySlice.actions;

export default propertySlice.reducer;