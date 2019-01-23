import * as types from './types';
let actions = {
    
    [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
    [types.VIEW_WEIBA]:({commit,state},payload)=>commit(types.VIEW_WEIBA,payload),

}
export default actions;