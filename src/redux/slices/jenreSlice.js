import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getJenres = createAsyncThunk(
    "getJenres",
    async function (api, { dispatch, rejectWithValue })
    {
        try {
            const response = await fetch(api);
            if (response.status === 200) {
                const records = await response.json();
                return records.results;
            }
            else {
                throw Error(`Error: ${response.status}`);
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
        finally {

        }
    }
)


const jenreSlice = createSlice({
    name: 'jenreSlice',
    initialState: {
        jenres: [],
        loading: false,
        error: null,
        success: null,
    },
    extraReducers: builder =>
    {
        builder.addCase(getJenres.fulfilled, (state, action) =>
        {
            state.loading = false;
            state.jenres = action.payload;
        })
        builder.addCase(getJenres.rejected, (state, action) =>
        {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getJenres.pending, (state, action) =>
        {
            state.loading = true;
        })
        // post
        // builder.addCase(createbook.fulfilled, (state, action) =>
        // {
        //     state.loading = false;
        //     state.error = null;
        //     state.success = action.payload;
        // })
        // builder.addCase(createbook.rejected, (state, action) =>
        // {
        //     state.loading = false;
        //     state.error = action.payload;
        // })
        // builder.addCase(createbook.pending, (state, action) =>
        // {
        //     state.loading = true;
        // })
        // // change
        // builder.addCase(changebook.fulfilled, (state, action) =>
        // {
        //     state.loading = false;
        //     state.info = action.payload;
        // })
        // builder.addCase(changebook.rejected, (state, action) =>
        // {
        //     state.loading = false;
        //     state.error = action.payload;
        // })
        // builder.addCase(changebook.pending, (state, action) =>
        // {
        //     state.loading = true;
        // })
        // // delete
        // builder.addCase(deletebook.pending, (state, action) =>
        // {
        //     state.delLoading = true;
        // })
        // builder.addCase(deletebook.fulfilled, (state, action) =>
        // {
        //     state.delLoading = false;
        //     state.delMessage = action.payload
        // })
        // builder.addCase(deletebook.rejected, (state, action) =>
        // {
        //     if (action.payload === undefined) state.delError = 'Ошибка, что то пошло не так'
        //     else state.delError = action.error
        //     state.delLoading = false;
        // })
    }
})

export default jenreSlice.reducer