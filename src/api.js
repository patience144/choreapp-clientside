function getChores() {
  return fetch(`http://localhost:5000/chores`)
    .then(res => res.json())
};
function createChore(chore) {
  return fetch(`http://localhost:5000/chores`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(chore)
  })
    .then(res => res.json())
};

const api = {
  getChores,
  createChore
};

export default api;