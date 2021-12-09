async function fetchRequest(result) {
  try {
    const request = await fetch(result);
    const json = await request.json();
    return json;
  } catch (err) {
    console.error(err);
    return err;
  }
}

