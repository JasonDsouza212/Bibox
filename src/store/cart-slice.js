import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    partsList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      
      const existingItemIndex = state.partsList.findIndex((item) => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.partsList.splice(existingItemIndex, 1);
      } else {
        state.partsList.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          data: newItem.data,
          isselected: false
        });
      }
    },
    setActive(state, action) {
      const newItem = action.payload;
      const existingItem = state.partsList.find(item => item.id === newItem);
      if (existingItem) {
        existingItem.isselected = true;
      }
    },
    setReset(state){
      state.partsList=[]
    }
    
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
