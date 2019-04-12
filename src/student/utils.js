// @param: user type is required is every function
export function hasToken(user_type) {
	const token = this.getToken(user_type)
	return !!token
}
export function getToken(user_type) {
	return window.localStorage.getItem(user_type)
}
export function logout(user_type) {
	if (this.getToken(user_type)) {
		localStorage.removeItem(user_type)
	}
}
export function setToken(user_type,token) {
	localStorage.setItem(user_type, token)
	this.removeTempToken()
}
