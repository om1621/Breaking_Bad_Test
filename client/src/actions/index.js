export const createCharatersAction = (characters) => ({
        type: "SET_CHARACTERS",
        characters: characters
});

export const createLoadingStateAction = (loading) => ({
    type: "SET_LOADING_STATE",
    loading: loading
});

export const createPageAction = (page) => ({
    type: "SET_PAGE",
    page: page
});

export const createSearchValueAction = (searchValue) => ({
    type: "SET_SEARCHVALUE",
    searchValue: searchValue
}); 

export const createSectionAction = (change) => ({
    type: "SET_SECTION",
    change: change
});

export const createCharIdAction = (charId) => ({
    type: "SET_CHARID",
    charId: charId
});