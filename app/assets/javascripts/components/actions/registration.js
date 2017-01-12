export function register(params) {
  return () => {
    return Axios.post('/users.json', params).then(() => {
      location.href = '/my_profile';
    })
  }
}
