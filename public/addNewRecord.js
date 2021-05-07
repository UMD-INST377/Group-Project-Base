const myForm = document.querySelector('#addNewForm');
const productid = document.querySelector('#productid')
const description = document.querySelector('#description')
const color = document.querySelector('#color')
const price = document.querySelector('#price')
const familyid = document.querySelector('#familyid')
const categoryid = document.querySelector('#categoryid')
const imglink = document.querySelector('#imglink')


myForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.info('submitted', event.target);
    const post = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: productid.value,
            product_description: description.value,
            product_color: color.value,
            product_unit_price: price.value,
            family_id: familyid.value,
            category_id: categoryid.value,
            image_link: imglink.value
        })
    })
})