import { Input, Icon } from "native-base";
import { useContext, useEffect } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext, Actions } from "../context/app-context";

const Search = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleChange = (searchKeyword) => {
        dispatch({type: Actions.SET_SEARCH_KEYWORD, payload: {searchKeyword}})
    }

    return (
        <Input 
            InputLeftElement={<Icon as={<Ionicons name="search" />} size={5} ml="2" color={'white'} />} 
            color={'white'} 
            placeholderTextColor={'white'} 
            placeholder={'Name'}
            borderWidth={'0'}
            backgroundColor={'rgb(99, 123, 239)'}
            marginY={5}
            value={state.searchKeyword}
            onChangeText={handleChange}
        />
    )
}

export default Search;