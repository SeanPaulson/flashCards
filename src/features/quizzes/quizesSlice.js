import { createSlice } from '@reduxjs/toolkit';
import { addQuizeId } from '../topics/topicsSlice';

export const createQuizeAndLinkTopic = (payload) => {
    console.log(payload);
    const {topicId, id} = payload
    return (dispatch) => {
        dispatch(addQuize(payload));
        dispatch(addQuizeId({topicId, id}))
    }
}

export const quizesSlice = createSlice({
    name: 'quizes',
    initialState: {
        quizes: {}
    },
    reducers: {
        addQuize: (state, action) => {
            state.quizes = action.payload;
        }
    }
});


export const selectQuizes = (state) => state.quizes;

export const addQuize = quizesSlice.actions.addQuize;

export default quizesSlice.reducer;