const events = [
    { id: 1, title: "Exposition Photo Dakar 2025", date: "22 Mars 2025", location: "Gare TER" },
    { id: 2, title: "Randonnée Photo", date: "4 avril 2025", location: "Rufisque"},
    { id: 3, title: "Workshop : Photographie de Sport, comment se lancer", date: "11 Mai 2025", location: "Studio Hang'art"},
    { id: 4, title: "Expo-Vente", date: "6 Mars", location: "Musée des civilisations noires de Dakar "},
    { id: 5, title: "Conférence sur le thème: L'apport du photojournalisme dans la quête d'une alternance démocratique au Sénégal", date: "12 Août 2025", location: "UCAD, Amphithéâtre 1"},
];

const Events = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6"> Evenements </h2>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-gray-100 shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-bold"> {event.title} </h3>
                        <p className="text-gray-600"> {event.date} - {event.location} </p>
                        <button className="mt- 3 bg-green-500 text-white px-4 py-2 rounded"> Voir Détails </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;