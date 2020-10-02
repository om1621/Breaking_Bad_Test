export default (state, action) => {
    
    switch(action.type){

        case "SET_CHARACTERS":
            return {
                ...state,
                characters: action.characters
            };
        
        case "SET_LOADING_STATE":
            return {
                ...state,
                loading: action.loading
            };

        case "SET_PAGE":
            return {
                ...state,
                page: action.page
            };

        case "SET_SEARCHVALUE":
            return {
                ...state,
                searchValue: action.searchValue
            };

        case "SET_SECTION":
            return {
                ...state,
                section: (state.section + action.change)
            };

        case "SET_CHARID":
            return {
                ...state,
                charId: action.charId
            };

        default:
            return state;
        
    }
}