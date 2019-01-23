import {VIEW_LOADING,VIEW_WEIBA} from './types';

let mutations={
    [VIEW_LOADING]:(state,payload)=>{state.bLoading=payload;},
    [VIEW_WEIBA]:(state,payload)=>{state.bWeiba=payload},
}
export default mutations