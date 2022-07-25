import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
      state.topics[action.payload.id].quizIds = [];
    },
    addQuizeId: (state, action) => {
        state.topics[action.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics;

export const addTopic = topicsSlice.actions.addTopic;
export const addQuizeId = topicsSlice.actions.addQuizeId;
export default topicsSlice.reducer;