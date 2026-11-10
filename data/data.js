export function getData() {
  return fetch('https://6af349b1d2377d6c3704d490.mockapi.io/api/v1/channels')
    .then(Response => Response.json())

}