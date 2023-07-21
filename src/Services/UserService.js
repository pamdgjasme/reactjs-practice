const UserService = {
  setCurrentUser: function(user) {
    localStorage.setItem('currentUserToken', user.token)
    localStorage.setItem('currentUserFullname', user.full_name)
    localStorage.setItem('currentUserId', user.id)
  },
  getCurrentUserToken: function() {
    return localStorage.getItem('currentUserToken')
  },
  logout: function() {
    localStorage.removeItem('currentUserToken')
    localStorage.removeItem('currentUserFullname')
    localStorage.removeItem('currentUserId')
  },
  isLoggedIn: function() {
    return !!this.getCurrentUserToken()
  }
}

export default UserService
