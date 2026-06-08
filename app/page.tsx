"use client";

import { useState } from "react";
const productos = [
    { imagen: "adi-2000-total-back.jpeg", nombre: "Adi 2000 Total Black", precio: "$65.000", talle: "41" },
    { imagen: "adidas-forum-blanca-gris.jpeg", nombre: "Adidas Forum Blanca Gris", precio: "$65.000", talle: "40" },
    { imagen: "adidas-forum-total-black.jpeg", nombre: "Adidas Forum Total Black", precio: "$65.000", talle: "38" },
    { imagen: "adidas-samba-bordo.jpeg", nombre: "Adidas Samba Bordó", precio: "$65.000", talle: "40" },
    { imagen: "adidas-samba-clasic.jpeg", nombre: "Adidas Samba Classic", precio: "$65.000", talle: "40" },
    { imagen: "adidas-samba-white.jpeg", nombre: "Adidas Samba White", precio: "$65.000", talle: "41" },
    { imagen: "converse-clasica.jpeg", nombre: "Converse Clásica", precio: "$30.000", talle: "39" },
    { imagen: "jordan-retro-4-bred.jpeg", nombre: "Jordan Retro 4 Bred", precio: "$65.000", talle: "39, 41" },
    { imagen: "nike-sb-azul.jpeg", nombre: "Nike SB Azul", precio: "$65.000", talle: "39" },
    { imagen: "nike-travis-scott.jpeg", nombre: "Nike Travis Scott", precio: "$65.000", talle: "40" },
    { imagen: "puma-suede-xl.jpeg", nombre: "Puma Suede XL", precio: "$65.000", talle: "41" },
    { imagen: "vans-hylane-cuerina.jpeg", nombre: "Vans Hylane Cuerina", precio: "$30.000", talle: "39" },
    { imagen: "vans-old-school.jpeg", nombre: "Vans Old School", precio: "$30.000", talle: "39" },
];

export default function Home() {
    const [carrito, setCarrito] = useState<any[]>([]);
    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Good Style Sneakers
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Zapatillas urbanas • Envíos • Consultas por WhatsApp
            </p>
            <div className="mb-8 border rounded-xl p-4">
                <h2 className="text-2xl font-bold">
                    Carrito ({carrito.length})
                </h2>
                <button
                    onClick={() => setCarrito([])}
                    className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Vaciar carrito
                </button>
                {carrito.map((item, index) => (
                    <p key={index}>
                        {item.nombre} - {item.precio}

                    </p>
                ))}
                <p className="font-bold mt-4">
                    Total: $
                    {carrito.reduce(
                        (total, item) =>
                            total + Number(item.precio.replace("$", "").replace(".", "")),
                        0
                    ).toLocaleString()}
                </p>
                <a
                    href={`https://wa.me/543786494510?text=${encodeURIComponent(
                        `Hola, quiero pedir:\n\n${carrito
                            .map((item) => `- ${item.nombre} (${item.precio})`)
                            .join("\n")}\n\nTotal: $${carrito
                            .reduce(
                                (total, item) =>
                                    total + Number(item.precio.replace("$", "").replace(".", "")),
                                0
                            )
                            .toLocaleString()}`
                    )}`}
                    target="_blank"
                    className="block mt-4 bg-green-600 text-white text-center p-3 rounded-lg"
                >
                    Enviar pedido por WhatsApp
                </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productos.map((producto) => (
                    <div key={producto.imagen} className="border rounded-xl p-3 shadow-lg hover:shadow-2xl transition">
                        <img
                            src={`/productos/${producto.imagen}`}
                            alt={producto.nombre}
                            className="w-full rounded-lg"
                        />

                        <h2 className="mt-3 font-semibold">
                            {producto.nombre}
                        </h2>

                        <p className="font-bold">
                            {producto.precio}
                        </p>

                        <p>
                            Talle: {producto.talle}
                        </p>
                        <a
                            href={`https://wa.me/543786494510?text=Hola,%20me%20interesa%20${producto.nombre}`}
                            target="_blank"
                            className="block mt-3 text-center bg-green-600 text-white rounded-lg p-2"
                        >
                            Consultar por WhatsApp
                        </a>
                        <button
                            onClick={() => setCarrito([...carrito, producto])}
                            className="w-full mt-2 border rounded-lg p-2"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );

}
