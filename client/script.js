/* leaving space here to add more functions */

async function mainEvent() {
  console.log('Hello World!');
  const results = await fetch('/api/NBA');
  const arrayFromJson = await results.json();

  console.table(arrayFromJson.data);
  console.log(arrayFromJson.data[0]);
  console.log(`${arrayFromJson.data[0].name} ${arrayFromJson.data[0].id}`);

  /// if (!arrayFromJson.data?.length) { return; }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());