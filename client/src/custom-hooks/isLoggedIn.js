const useLogin = () => {
	if (localStorage.getItem('token')) {
		return true
	}
	return false;
}

export default useLogin;
