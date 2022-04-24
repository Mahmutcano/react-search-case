import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice=createSlice({
    name:"search",
    initialState:{
        filterData:[],
        pageButtonsCount:[],
        errorTextCounter:0,
    },
    reducers:{   
        searchInputValue:(state,action)=>{
           let count;
           const filterData= JSON.parse(localStorage.getItem("data")).filter((person)=>{
                return Object.keys(person).some((key)=>
                person[key]
                .toString()
                .toLowerCase()
                .includes(action.payload.toString().toLocaleLowerCase())
                )
            })
            state.filterData=filterData;

            state.errorTextCounter=state.errorTextCounter+1;
            
            state.pageButtonsCount=[];
            count=((state.filterData.length)/6).toFixed(2);
            count=Math.ceil(count);
            
            while(count>0){
                let rnd;
                rnd=Math.floor(Math.random()*10);
                state.pageButtonsCount.push(rnd);
                count--;
            }

        },
    }
})

export const {
persons,
searchInputValue,
}=SearchSlice.actions;
export default SearchSlice.reducer;