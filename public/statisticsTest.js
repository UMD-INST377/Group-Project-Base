async function test() {
  const tableTest = document.querySelector('.output')
  tableTest.pivotUI(
    [
      {color: 'blue', shape: 'circle'},
      {color: 'red', shape: 'triangle'}
    ],
    {
      rows: ['color'],
      cols: ['shape']
    }
  );
}

window.onload = test;