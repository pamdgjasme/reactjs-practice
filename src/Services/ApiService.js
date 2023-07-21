import UserService from "./UserService";

const ApiService = {
  defaultHttpHeader: function() {
    const currentUserToken = UserService.getCurrentUserToken()
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': currentUserToken,
    };
  },
}

export default ApiService
