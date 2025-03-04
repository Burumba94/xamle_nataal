const photographers = [
    { id: 1, name: "Aboubacar GASSAMA", specialty: "Mode & Mariage", img:"/Aboubashr.jpg"},
    { id: 2, name: "Ousmane Diop", specialty: "Paysage & Architecture", img:"/Bura.jpg"},
    { id: 3, namme: "Alima Gueye", specialty:"Maternity and Children", img:"/photo6.jpg"},
    { id: 4, name: "Jeanne Marie", specialty: "Portrait & Art", img:"/IMG_7311.JPG"},
];

const Photographers = () => {
    return (
        <section className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6"> Nos Photographes </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {photographers.map((photographer) =>(
                    <div key={photographer.id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={photographer.img} alt={photographer.name} className="w-full h-40 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold"> {photographer.name} </h3>
                            <p className="text-gray-600"> {photographer.specialty} </p>
                            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"> Voir son catalogue </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photographers;