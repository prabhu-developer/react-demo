export const getAllProducts = async () => {

    const res = await fetch('https://dummyjson.com/products')

    return await res.json()


    // fetch('https://dummyjson.com/products').then(res => res.json()).then((res) => {
    //     setProducts(res.products)
    // })
}