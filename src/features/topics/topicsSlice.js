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
        state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizeId } = topicsSlice.actions;
export default topicsSlice.reducer;
