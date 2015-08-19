export default Ember.Routes.extend ({
  model: function (params) {
    return ic.ajax({
      url: 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/' + 'releases',
      type: 'get'
    })
  }
})