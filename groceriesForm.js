const form = document.querySelector('form')
const products = []
const details = [
    'productNo',
    'productName',
    'productPrice',
    'productUrl'
]

function addProduct(){
    const product = {
        productNo: form.elements['productNo'].value,
        productName: form.elements['productName'].value,
        productPrice: form.elements['productPrice'].value,
        productUrl :form.elements['productUrl'].value,
    }
    products.push(product)
    console.log(products)
    productToRender(product)
}

function productToRender(product){
    const productDetails = createDiv()
    productDetails.classList.add('productDetails')
    const productName = createDiv(product.productName)
    const productPrice = createDiv(product.productPrice)
    const productUrl = createDiv('<img src= "' +product.productUrl+ '"></img>')
    const editButton = createDiv('<button onClick=editButton("' +product.productNo+ '")>Edit</button>')
    const deleteButton = createDiv('<button onClick=deleteButton("' +product.productNo+ '")>Delete</button>')
    
    productDetails.appendChild(productName)
    productDetails.appendChild(productPrice)
    productDetails.appendChild(productUrl)
    productDetails.appendChild(editButton)
    productDetails.appendChild(deleteButton)
    
    productDetails.setAttribute('id', 'productNo'+ product.productNo)
    
    const listOfDetails = document.querySelector('.listOfDetails')
    listOfDetails.appendChild(productDetails)
} 

function createDiv(text){
    const div = document.createElement('div')
    div.innerHTML = text 
    return div
}

function getProduct(productNo){
    for(product of products){
        if(productNo === product.productNo){
            return product
        }
    }
    console.log(product)
}

function productToForm(product){
    for(detail of details){
        form.elements[detail].value = product[detail]
    }
}

function editButton(productNumber){
    const productToEdit = getProduct(productNumber)
    productToForm(productToEdit)
    const addProduct = document.querySelector('.addProduct')
    const updateProduct = document.querySelector('.updateProduct')
    addProduct.classList.add('hidden')
    updateProduct.classList.remove('hidden')
}

function updateProduct() {
    const product = {}
    for (let detail of details) {
        product[detail] = form.elements[detail].value
        for(let updatedProduct of products){
            if(updatedProduct.productNo === product.productNo){
                updatedProduct[detail] = product[detail]
            }
        }
    }
    productToRender(product)
    const productDetails = document.querySelector('#' + 'productNo'+ product.productNo)
    productDetails.remove()

    const addProduct = document.querySelector('.addProduct')
    const updateProduct = document.querySelector('.updateProduct')
    addProduct.classList.remove('hidden')
    updateProduct.classList.add('hidden')
}

function deleteButton(productNumber){
    let indexToDelete
    for(let i in products){
        if(productNumber === products[i].productNo){
            indexToDelete = i 
        }
        delete products[indexToDelete]
    }
    const productDetails = document.querySelector('#' + 'productNo'+ productNumber)
    productDetails.remove()
}