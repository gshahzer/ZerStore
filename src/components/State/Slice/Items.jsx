import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// create action

export const createData = createAsyncThunk("createData", async (data, {rejectWithValue})=>{
    const response = await fetch("https://65c9e72a3b05d29307df395b.mockapi.io/data", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
        
    }
})

export const UserDetail = createSlice({
    name: "UserDetail",
    initialState:{
        users: [],
        loading: false,
        error: null,

    },
    reducers: {
        [createData.pending]: (state) => {
                state.loading = true;
        },
        [createData.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createData.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
    
        },
    },
});

export default UserDetail.reducer;
