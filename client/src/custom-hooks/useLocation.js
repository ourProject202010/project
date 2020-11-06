import {useHistory} from 'react-router-dom'

const useLocation = () => {
	return useHistory().location
}

export default useLocation;
