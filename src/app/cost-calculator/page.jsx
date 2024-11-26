"use client";

import { useState, useEffect, useMemo } from "react";
import CurrencySelect from "../../components/ui/CurrencySelect/CurrencySelect";

const fiatCurrencies = [
  {
    ide: "ARS",
    name: "Peso Argentino",
    country: "Argentina",
    flag: "/flags/argentina.png",
  },
  {
    ide: "CLP",
    name: "Peso Chileno",
    country: "Chile",
    flag: "/flags/chile.png",
  },
  {
    ide: "COP",
    name: "Peso Colombiano",
    country: "Colombia",
    flag: "/flags/colombia.png",
  },
  {
    ide: "EUR",
    name: "Euro",
    country: "Unión Europea",
    flag: "/flags/europeanUnion.png",
  },
  {
    ide: "MXN",
    name: "Peso Mexicano",
    country: "México",
    flag: "/flags/mexico.png",
  },
  { ide: "PEN", name: "Sol Peruano", country: "Perú", flag: "/flags/peru.png" },
  {
    ide: "UYU",
    name: "Peso Uruguayo",
    country: "Uruguay",
    flag: "/flags/uruguay.png",
  },
  {
    ide: "VES",
    name: "Bolívar Venezolano",
    country: "Venezuela",
    flag: "/flags/venezuela.png",
  },
];

export default function CostCalculator() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({});


  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch("/api/exchangeRate");
        const data = await response.json();
        setExchangeRates(data);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };

    fetchExchangeRates();
  }, []);

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


  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const calculateCost = () => {
    const { level, pages, installments } = formData;
    const costPerPage = pricingData[level].pricePerPage;
    const totalCost = costPerPage * pages;
    

    

    const rate = exchangeRates[selectedCurrency] || 1;

    const costInSelectedCurrency =  formatNumber(totalCost * rate);

    const installmentCost = formatNumber((totalCost * rate) / installments);

    // console.log("installments: ", installments)
    // console.log("installmentCost: ",installmentCost)
    // console.log("currency: ",selectedCurrency)
    // console.log("rate: ",rate, " conver: ", costInSelectedCurrency)

    setResult({
      totalCostUSD: totalCost.toFixed(2),
      totalCostSelectedCurrency: costInSelectedCurrency,
      selectedCurrency: selectedCurrency,
      installments,
      installmentCost: installmentCost,
      date: new Date().toLocaleDateString("es-VE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    });
  };

  const resetCalculator = () => {
    setStep(1);
    setFormData({
      title: "",
      description: "",
      level: "undergraduate",
      pages: 50,
      installments: 4,
    });
    setResult(null);
  };

  const currentLevelData = pricingData[formData.level];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">
          Calculadora de Costos
        </h1>

        {/* Paso 1 */}
        {step === 1 && (
          <div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block font-semibold text-gray-700"
                >
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
                <label
                  htmlFor="description"
                  className="block font-semibold text-gray-700"
                >
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

              <div className="mb-5">
                <label className="block text-sm font-medium text-sky-700">
                  País | Moneda
                </label>
                <CurrencySelect
                  currencies={fiatCurrencies}
                  selectedCurrency={selectedCurrency}
                  setSelectedCurrency={setSelectedCurrency}
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

        {/* Paso 2 */}
        {step === 2 && (
          <div>
            <p className="font-semibold text-gray-700 mb-4">
              Selecciona el nivel educativo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {Object.keys(pricingData).map((level) => (
                <div
                  key={level}
                  className={`p-4 border rounded-lg text-center cursor-pointer ${
                    formData.level === level
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
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

        {/* Paso 3 */}
        {step === 3 && (
          <div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="pages"
                  className="block font-semibold text-gray-700"
                >
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
                  Rango permitido: {currentLevelData.minPages} -{" "}
                  {currentLevelData.maxPages} páginas.
                </p>
              </div>
              <div>
                <label
                  htmlFor="installments"
                  className="block font-semibold text-gray-700"
                >
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

        {/* Resultado */}
        {step === 4 && result && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-center mb-2">
              Estimación Aproximada
            </h2>
            <p className="text-center text-gray-700 mb-4">{`${formData.title}`}</p>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-3/5 bg-blue-500 text-white p-4">
                <h3 className="font-semibold text-lg">Resumen</h3>
              </div>
              <div className="sm:w-2/5 bg-gray-200 text-gray-700 p-4">
                <h3 className="font-semibold text-lg">Fecha</h3>
                <p className="text-lg">${result.date}</p>
              </div>
            </div>
            <div className="mt-4">
              <p>
                <strong>Descripción:</strong> {formData.description}
              </p>
              <p>
                <strong>Nivel educativo:</strong>{" "}
                {formData.level === "undergraduate"
                  ? "Pregrado"
                  : formData.level === "masters"
                  ? "Maestría"
                  : "Doctorado"}
              </p>
              <p className="text-green-800">
                <strong className="text-black">Total a pagar en USD:</strong> ${result.totalCostUSD}
              </p>
              <p className="text-blue-800">
                <strong className="text-black">Total a pagar en {selectedCurrency}:</strong> ${result.totalCostSelectedCurrency}
              </p>
              <p>
                <strong>Número de cuotas:</strong> {result.installments}
              </p>
              <p className="text-blue-800">
                <strong className="text-black">Monto por cuota en {selectedCurrency}:</strong> ${result.installmentCost}
              </p>
            </div>
            <p className="mt-4 text-gray-600">
              Esta estimación proporciona una descripción detallada del costo
              estimado para desarrollar el proyecto{" "}
              <strong>{formData.title}</strong>, en función de las
              características y las mejores prácticas. Los tiempos pueden
              ajustarse según las especificaciones y los requisitos detallados
              del proyecto.
            </p>
            <button
              onClick={resetCalculator}
              className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Reiniciar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
