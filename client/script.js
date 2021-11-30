async function test(name, id) {
  const response = await fetch('/api/actor', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      name: name,
      id: id
    }
  });
}