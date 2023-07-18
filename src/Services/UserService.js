const UserService = {
  setCurrentUser: function(user) {
    localStorage.setItem('currentUserToken', user.token)
    localStorage.setItem('currentUserFullname', user.full_name)
    localStorage.setItem('currentUserId', user.id)
  },
  getCurrentUser: function() {
    localStorage.getItem('currentUser')
  }
}

export default UserService
