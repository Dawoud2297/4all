import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProviders = createAsyncThunk('providers/getProviders', async (_, thunkAPI) =>{
  try {
    const res = await fetch("/services/api/ads/companies?page_count=5");
    const data = await res.json();
    return data.data
  } catch (error) {
    console.log(error)
  }
})

export const getIndividuals = createAsyncThunk('providers/getIndividuals',async(id,thunkAPI)=>{
  try {
    const res = await fetch("/services/api/ads/companies?page_count=5");
    const data = await res.json();
    return data.data.filter(ind=>(
      ind.id === id
    ))
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  providers: [],
  singleProvider : [],
  loading : false
}
const providerSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {},
  extraReducers : {
    [getProviders.pending] : (state,action)=> {
      state.loading = true;
      console.log(action)
    },
    [getProviders.fulfilled] : (state,action)=> {
      state.loading = false
      console.log(action.payload)
      state.providers =  action.payload
    },
    [getProviders.rejected] : (state,action)=> {
      state.loading = false
      console.log(action)
    },

    // GEt Individual
    [getIndividuals.fulfilled] : (state,action) =>{
      console.log(action.payload)
      state.singleProvider = action.payload
    },
    [getIndividuals.rejected] : (state,action)=> {
      console.log(action)
    },
  }
})

export default providerSlice.reducer

