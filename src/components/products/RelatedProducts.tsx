import { Product } from '@/types/product'
import Image from 'next/image'
import React from 'react'

const products: Product[] = [
  {
    id: "prod_1",
    name: "Tomates Orgánicos Cherry",
    description: "Tomates cherry cultivados sin pesticidas, dulces y jugosos",
    price: {
      amount: 3.99,
      unit: "kg"
    },
    discount: 10,
    farmer: {
      id: "farm_1",
      name: "María González",
      farmName: "Huerta El Paraíso",
      location: {
        latitude: 40.4168,
        longitude: -3.7038,
        address: "Camino Rural 23, Valencia"
      }
    },
    category: "Verduras",
    subCategory: "Tomates",
    images: ["/images/tomatoes.jpg", "/images/tomatoes-2.jpg"],
    stockQuantity: 100,
    harvestDate: new Date("2024-03-15"),
    certifications: ["Orgánico", "Km 0"],
    seasonality: ["Primavera", "Verano"],
    farmingMethod: "Cultivo orgánico",
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.5
  },
  {
    id: "prod_2",
    name: "huevos",
    description: "Fresas dulces cultivadas en invernadero sostenible",
    price: {
      amount: 4.50,
      unit: "500g"
    },
    discount: 0,
    farmer: {
      id: "farm_2",
      name: "Juan Martínez",
      farmName: "Finca Los Berries",
      location: {
        latitude: 37.3891,
        longitude: -5.9845,
        address: "Finca 45, Huelva"
      }
    },
    category: "Frutas",
    subCategory: "Bayas",
    images: ["/images/eggs.jpg"],
    stockQuantity: 50,
    harvestDate: new Date("2024-03-18"),
    certifications: ["Ecológico"],
    seasonality: ["Primavera"],
    farmingMethod: "Hidropónico",
    availableForDelivery: true,
    pickupAvailable: false,
    rating: 4.8
  },
  {
    id: "prod_3",
    name: "Lechugas Batavia",
    description: "Lechugas frescas hidropónicas",
    price: {
      amount: 1.99,
      unit: "unidad"
    },
    discount: 15,
    farmer: {
      id: "farm_3",
      name: "Ana Pérez",
      farmName: "Hidroponía Verde",
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        address: "Polígono 7, Barcelona"
      }
    },
    category: "Verduras",
    subCategory: "Hojas Verdes",
    images: ["/images/tomatoes.jpg", "/images/lettuce-2.jpg"],
    stockQuantity: 200,
    harvestDate: new Date("2024-03-19"),
    certifications: ["Hidropónico", "Sin pesticidas"],
    seasonality: ["Todo el año"],
    farmingMethod: "Hidropónico vertical",
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.2
  },
  {
    id: "prod_4",
    name: "Zanahorias Moradas",
    description: "Zanahorias moradas heritage con alto contenido en antioxidantes",
    price: {
      amount: 2.99,
      unit: "kg"
    },
    discount: 5,
    farmer: {
      id: "farm_4",
      name: "Pedro Sánchez",
      farmName: "Huerta Tradicional",
      location: {
        latitude: 39.4699,
        longitude: -0.3763,
        address: "Camino de la Huerta 12, Valencia"
      }
    },
    category: "Verduras",
    subCategory: "Raíces",
    images: ["/images/eggs.jpg"],
    stockQuantity: 75,
    harvestDate: new Date("2024-03-17"),
    certifications: ["Biodinámica"],
    seasonality: ["Invierno", "Primavera"],
    farmingMethod: "Biodinámico",
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.7
  }
];

const RelatedProducts = () => {
    return (
        <>
            <h2 className="text-lg font-semibold mt-8">Related Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {products.map((product) => (
                    <div key={product.id} className="relative border p-4 rounded-lg shadow">
                        <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs rounded">-{product.discount}%</span>
                        <div className="flex flex-col items-center">
                            <Image src={product.images[0]} width={100} height={100} alt={product.name} className="rounded-lg" />
                            <p className="text-center mt-2">{product.name}</p>
                            <p className="text-gray-600">${product.price.amount} <span className="line-through text-gray-400">${product.price.amount * 1.1}</span></p>
                            <div className="flex items-center gap-1 mt-2 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="w-4 h-4">⭐️</span>
                                ))}
                                <span className="text-gray-600 text-sm">({product.rating})</span>
                            </div>
                            <button className="mt-2 bg-green-700 text-white w-full py-2 rounded">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RelatedProducts
