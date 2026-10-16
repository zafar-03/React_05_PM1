const initialData = {
    products: [
        {
            "id": 1,
            "name": "Smartphone",
            "category": "Electronics",
            "price": 25000,
            "brand": "Samsung"
        },
        {
            "id": 2,
            "name": "Laptop",
            "category": "Electronics",
            "price": 65000,
            "brand": "Dell"
        },
        {
            "id": 3,
            "name": "Smart Watch",
            "category": "Wearables",
            "price": 4500,
            "brand": "Noise"
        },
        {
            "id": 4,
            "name": "Headphones",
            "category": "Audio",
            "price": 3000,
            "brand": "Boat"
        },
        {
            "id": 5,
            "name": "Tablet",
            "category": "Electronics",
            "price": 18000,
            "brand": "Lenovo"
        }
    ]
}

const reducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,products : [...state.products,action.payload]
            }    

        case "DELETE_PRODUCT":
            return {
                ...state, products : state.products.filter((element)=>{
                    return element.id != action.payload
                })
            }
        case "EDIT_PRODUCT" : 
            return {
                ...state, products : state.products.map((element)=>{
                    return ((element.id == action.payload.id) ? action.payload : element)
                })
            }
        default:
            return {...state};
    }
}

export default reducer;