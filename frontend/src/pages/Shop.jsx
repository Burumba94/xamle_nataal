const products = [
    {id: 1, name: "Shooting Portrait", price: "30.000FCFA", img:"/"},
    {id: 2, name: "Impression Photo A4", price: "5.000FCFA", img: "/"},
    {id: 3, name: "Boîtier Nikon D90", price: "200.000FCFA", img:"/"},
    {id: 4, name: "Objectif 50-100mm Nikon D90", price: "80.000FCFA", img:"/"},
    {id: 5, name: "Flash Cobra TS + Déclencheur", price: "70.000FCFA", img:"/"},
];

const Shop = () => {
    return (
        <section className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-purple-700 mb-6"> Boutique </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold"> {product.name} </h3>
                            <p className="text-gray-600"> {product.price} </p>
                            <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded"> Acheter </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Shop;

