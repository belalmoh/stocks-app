import { Input, Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
    return (
        <Input 
            InputLeftElement={<Icon as={<Ionicons name="search" />} size={5} ml="2" color={'white'} />} 
            color={'white'} 
            placeholderTextColor={'white'} 
            placeholder={'Name'}
            borderWidth={'0'}
            backgroundColor={'rgb(99, 123, 239)'}
            marginY={5}
        />
    )
}

export default Search;