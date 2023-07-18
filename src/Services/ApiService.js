const ApiService = {
  defaultHttpHeader: function() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': null,
    };
  },
}

export default ApiService
