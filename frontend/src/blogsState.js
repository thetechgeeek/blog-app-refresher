import { createSlice } from '@reduxjs/toolkit';
import { data } from './data';

export const blogsState = createSlice({
    name: 'blogsState',
    initialState: {
        value: data,
    },
    reducers: {
        add: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            let copyData = state.value;
            copyData.push({
                id: copyData.length + 1,
                title: action.payload.title,
                category: action.payload.category,
                content: action.payload.content,
            });
            state.value = copyData;
        },
        edit: (state, action) => {
            state.value = state.value.map((obj) => {
                if (obj.id === action.payload.id) {
                    return {
                        ...obj,
                        title: action.payload.title,
                        category: action.payload.category,
                        content: action.payload.content,
                    };
                } else return obj;
            });
        },
        remove: (state, action) => {
            state.value = state.value.filter((obj) => obj.id !== action.payload);
        },
        like: (state, action) => {
            console.log(action.payload);
            state.value = state.value.map((obj) => {
                if (obj.id === action.payload) {
                    return {
                        ...obj,
                        isLiked: obj.isLiked === true ? false : true,
                    };
                } else return obj;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, edit, remove, like } = blogsState.actions;

export default blogsState.reducer;
