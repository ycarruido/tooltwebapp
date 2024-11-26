"use client";

import { useState } from "react";

export default function CostCalculator() {
  const pricingData = {
    undergraduate: { pricePerPage: 8, minPages: 50, maxPages: 100 },
    masters: { pricePerPage: 11, minPages: 100, maxPages: 150 },
    doctoral: { pricePerPage: 17, minPages: 150, maxPages: 200 },
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "undergraduate",
    pages: 50,
    installments: 4,
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.title || !formData.description)) {
      alert("Por favor, completa el título y la descripción.");
      return;
    }
    setStep(step + 1);
  };

  const calculateCost = () => {
    const { level, pages, installments } = formData;
    const costPerPage = pricingData[level].pricePerPage;
    const totalCost = costPerPage * pages;
    const installmentCost = totalCost / installments;

    setResult({
      totalCost: totalCost.toFixed(2),
      installments,
      installmentCost: installmentCost.toFixed(2),
      date: new Date().toLocaleDateString("es-VE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    });
  };

  const currentLevelData = pricingData[formData.level];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Calculadora de Costos</h1>

        {step === 1 && (
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block font-semibold text-gray-700">
                  Título de la tesis
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Ej: Análisis del cambio climático"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="description" className="block font-semibold text-gray-700">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Breve descripción del proyecto"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button
              onClick={handleNextStep}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Guardar y Continuar
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="font-semibold text-gray-700 mb-4">Selecciona el nivel educativo:</p>
            <div className="flex justify-around items-center mb-6">
              {Object.keys(pricingData).map((level) => (
                <div
                  key={level}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    formData.level === level ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      level,
                      pages: pricingData[level].minPages,
                    })
                  }
                >
                  {level === "undergraduate"
                    ? "Pregrado"
                    : level === "masters"
                    ? "Maestría"
                    : "Doctorado"}
                </div>
              ))}
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Guardar y Continuar
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="pages" className="block font-semibold text-gray-700">
                  Cantidad de páginas
                </label>
                <input
                  type="number"
                  id="pages"
                  name="pages"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Ej: 80"
                  value={formData.pages}
                  onChange={handleInputChange}
                  min={currentLevelData.minPages}
                  max={currentLevelData.maxPages}
                />
                <p className="text-sm text-gray-500">
                  Rango permitido: {currentLevelData.minPages} - {currentLevelData.maxPages} páginas.
                </p>
              </div>
              <div>
                <label htmlFor="installments" className="block font-semibold text-gray-700">
                  Número de cuotas
                </label>
                <input
                  type="number"
                  id="installments"
                  name="installments"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Ej: 3"
                  value={formData.installments}
                  onChange={handleInputChange}
                  min="1"
                />
              </div>
            </div>
            <button
              onClick={() => {
                calculateCost();
                setStep(4);
              }}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Calcular
            </button>
          </div>
        )}

        {step === 4 && result && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-center mb-2">Estimación Aproximada</h2>
            <p className="text-center text-gray-700 mb-4">{`${formData.title} - ${result.date}`}</p>
            <div className="flex">
              <div className="w-3/5 bg-blue-500 text-white p-4">
                <h3 className="font-semibold">Resumen</h3>
              </div>
              <div className="w-2/5 bg-gray-200 text-gray-700 p-4">
                <h3 className="font-semibold">Precio por página</h3>
                <p>${pricingData[formData.level].pricePerPage}</p>
              </div>
            </div>
            <div className="mt-4">
              <p><strong>Descripción:</strong> {formData.description}</p>
              <p><strong>Nivel educativo:</strong> {formData.level === "undergraduate" ? "Pregrado" : formData.level === "masters" ? "Maestría" : "Doctorado"}</p>
              <p><strong>Total a pagar:</strong> ${result.totalCost}</p>
              <p><strong>Número de cuotas:</strong> {result.installments}</p>
              <p><strong>Monto por cuota:</strong> ${result.installmentCost}</p>
            </div>
            <p className="mt-4 text-gray-600">
              Esta estimación proporciona una descripción detallada del costo estimado para desarrollar el proyecto <strong>{formData.title}</strong>, en función de las características y las mejores prácticas. Los tiempos pueden ajustarse según las especificaciones y los requisitos detallados del proyecto.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}