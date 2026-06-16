"use client";

import { useState } from "react";

const productos = [
    { imagen: "adi-2000-total-back.jpeg", nombre: "Adi 2000 Total Black", precio: "$65.000", talle: "41" },
    { imagen: "adidas-forum-blanca-gris.jpeg", nombre: "Adidas Forum Blanca Gris", precio: "$65.000", talle: "40" },
    { imagen: "adidas-forum-total-black.jpeg", nombre: "Adidas Forum Total Black", precio: "$65.000", talle: "38" },
    { imagen: "adidas-samba-clasic.jpeg", nombre: "Adidas Samba Classic", precio: "$65.000", talle: "40" },
    { imagen: "adidas-samba-white.jpeg", nombre: "Adidas Samba White", precio: "$65.000", talle: "41" },
    { imagen: "converse-clasica.jpeg", nombre: "Converse Clásica", precio: "$30.000", talle: "39" },
    { imagen: "jordan-retro-4-bred.jpeg", nombre: "Jordan Retro 4 Bred", precio: "$65.000", talle: "39, 41" },
    { imagen: "nike-sb-azul.jpeg", nombre: "Nike SB Azul", precio: "$70.000", talle: "41" },
    { imagen: "nike-travis-scott.jpeg", nombre: "Nike Travis Scott", precio: "$65.000", talle: "40" },
    { imagen: "puma-suede-xl.jpeg", nombre: "Puma Suede XL", precio: "$65.000", talle: "41" },
    { imagen: "vans-hylane-cuerina.jpeg", nombre: "Vans Hylane Cuerina", precio: "$30.000", talle: "39" },
    { imagen: "vans-old-school.jpeg", nombre: "Vans Old School", precio: "$30.000", talle: "39" },
    { imagen: "jordan-4-pink.jpeg", nombre: "Jordan 4 Pink", precio: "$70.000", talle: "36" },
    { imagen: "jordan-4-sb-navy.jpeg", nombre: "Jordan 4 Sb Navy", precio: "$70.000", talle: "43" },
    { imagen: "puma-la-france.jpeg", nombre: "Puma La France", precio: "$70.000", talle: "41" },
    { imagen: "vans-sk8-full-black.jpeg", nombre: "Vans Sk8 Total Black", precio: "$70.000", talle: "39" },
];

export default function Home() {
    const [carrito, setCarrito] = useState<any[]>([]);
    const [imagenGrande, setImagenGrande] = useState("");

    const total = carrito.reduce(
        (acc, item) =>
            acc + Number(item.precio.replace("$", "").replace(".", "")),
        0
    );

    return (
        <main className="min-h-screen bg-gray-100 p-6">

            <img
                src="/snakerslogo.png"
                alt="Good Style"
                className="mx-auto w-72 mb-4"
            />

            <h1 className="text-5xl font-extrabold text-center text-green-600">
                GOOD STYLE
            </h1>

            <p className="text-center text-gray-500 mt-3 mb-8">
                Zapatillas urbanas • Envíos • Consultas por WhatsApp
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
                <h2 className="text-2xl font-bold text-black mb-4">
                    🛒 Carrito ({carrito.length})
                </h2>

                {carrito.length === 0 ? (
                    <p className="text-gray-500">
                        No hay productos en el carrito.
                    </p>
                ) : (
                    <>
                        {carrito.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center border-b py-2"
                            >
                                <p className="text-black">
                                    {item.nombre} - {item.precio}
                                </p>

                                <button
                                    onClick={() =>
                                        setCarrito(
                                            carrito.filter((_, i) => i !== index)
                                        )
                                    }
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg"
                                >
                                    ❌
                                </button>
                            </div>
                        ))}

                        <p className="font-bold text-xl text-green-600 mt-4">
                            Total: ${total.toLocaleString()}
                        </p>

                        <a
                            href={`https://wa.me/543786494510?text=${encodeURIComponent(
                                `Hola, quiero pedir:\n\n${carrito
                                    .map(
                                        (item) =>
                                            `- ${item.nombre} (${item.precio})`
                                    )
                                    .join(
                                        "\n"
                                    )}\n\nTotal: $${total.toLocaleString()}`
                            )}`}
                            target="_blank"
                            className="block mt-4 bg-green-500 hover:bg-green-600 text-white text-center p-3 rounded-xl font-semibold transition"
                        >
                            📲 Enviar pedido por WhatsApp
                        </a>

                        <button
                            onClick={() => setCarrito([])}
                            className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl"
                        >
                            Vaciar carrito
                        </button>
                    </>
                )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productos.map((producto) => (
                    <div
                        key={producto.imagen}
                        className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <img
                            src={`/productos/${producto.imagen}`}
                            alt={producto.nombre}
                            className="w-full h-52 object-cover rounded-xl cursor-pointer hover:scale-105 transition duration-300"
                            onClick={() =>
                                setImagenGrande(
                                    `/productos/${producto.imagen}`
                                )
                            }
                        />

                        <h2 className="mt-4 text-center font-bold text-black">
                            {producto.nombre}
                        </h2>

                        <p className="text-2xl font-bold text-green-600 text-center mt-2">
                            {producto.precio}
                        </p>

                        <p className="text-center text-gray-600 mt-1">
                            Talle: {producto.talle}
                        </p>

                        <a
                            href={`https://wa.me/543786494510?text=Hola,%20me%20interesa%20${producto.nombre}`}
                            target="_blank"
                            className="block mt-4 text-center bg-green-500 hover:bg-green-600 text-white rounded-xl p-3 font-semibold transition"
                        >
                            Consultar por WhatsApp
                        </a>

                        <button
                            onClick={() =>
                                setCarrito([...carrito, producto])
                            }
                            className="w-full mt-3 bg-black hover:bg-gray-800 text-white rounded-xl p-3 transition"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>

            {imagenGrande && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setImagenGrande("")}
                >
                    <img
                        src={imagenGrande}
                        alt="Producto"
                        className="max-w-[90%] max-h-[90%] rounded-2xl"
                    />
                </div>
            )}
        </main>
    );
}