let URL = "https://dummyjson.com/products"

// fetch(URL).then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error))

// data displayed on console
fetch(URL).then(response=>response.json()).then(result=>{
    let productData = result.products;
    productData.forEach(product=>{
        // console.log(product)
        // console.log("Product: "+product.title+", Price: "+product.price)
        // let pTag = document.createElement("p")
        // let pTagValue = document.createTextNode(`Name: ${product.title}, Price: ${product.price}`) //content ready
        // pTag.appendChild(pTagValue)

        // document.getElementById("result").appendChild(pTag)

        console.log(product.title+" "+product.thumbnail)
        let pTag = document.createElement("p")
        let pTagValue = document.createTextNode(product.title)

        let imageTag = document.createElement("img")
        imageTag.setAttribute("src",product.thumbnail)
        document.getElementById("result").appendChild(imageTag)
    })
}).catch(error=>console.log(error))

