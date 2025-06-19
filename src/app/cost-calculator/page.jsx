"use client";

import { useState, useEffect, useMemo } from "react";
import CurrencySelect from "../../components/ui/CurrencySelect/CurrencySelect";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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

  //factorDeAjuste
  const fa1 = 1.25;   //NroPaginas <= 10
  const fa2 = 1;      //10 < NroPaginas <= 80
  const fa3 = 0.875;  //80 > NroPaginas <= 150
  const fa4 = 0.75;   //NroPaginas > 150


  

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

  const handleNextStep = (direction) => {
    // Si estás yendo hacia atrás
    if (direction === -1) {
      if (step === 1) {
        return;
      }
      setStep(step - 1);
      return;
    }

    // Validación para avanzar al siguiente paso
    if (step === 1 && (!formData.title || !formData.description)) {
        alert("Por favor, completa el título y la descripción.");
        return;
    }
  
    // Avanzar al siguiente paso
    setStep(step + 1);

  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };




  function calcularCostoProgresivo(numPaginas, nivelEstudio, costoPorPagina) {
    //let costoPorPagina;
    //console.log(nivelEstudio)
    // Define los precios para cada nivel académico

    // const precios = {
    //   undergraduate: { rango1: 10, rango2: 8, rango3: 7, rango4: 6 },
    //   masters: { rango1: 13.75, rango2: 11, rango3: 9.625, rango4: 8.25 },
    //   doctoral: { rango1: 21.25, rango2: 17, rango3: 14.875, rango4: 12.75 },
    // };


    const precios = {
      undergraduate: { rango1: costoPorPagina*fa1, rango2: costoPorPagina*fa2, rango3: costoPorPagina*fa3, rango4: costoPorPagina*fa4 },
      masters: { rango1: costoPorPagina*fa1, rango2: costoPorPagina*fa2, rango3: costoPorPagina*fa3, rango4: costoPorPagina*fa4 },
      doctoral: { rango1: costoPorPagina*fa1, rango2: costoPorPagina*fa2, rango3: costoPorPagina*fa3, rango4: costoPorPagina*fa4 },
    };

    // Selecciona los precios según el nivel de estudio
    const { rango1, rango2, rango3, rango4 } = precios[nivelEstudio];

    // Determina el costo por página basado en el número de páginas
    if (numPaginas <= 10) {
        costoPorPagina = rango1;
    } else if (numPaginas <= 80) {
        costoPorPagina = rango1 - ((numPaginas - 10) * (rango1 - rango2)) / (80 - 10);
    } else if (numPaginas <= 150) {
        costoPorPagina = rango2 - ((numPaginas - 80) * (rango2 - rango3)) / (150 - 80);
    } else {
        costoPorPagina = rango4; // Estabilización en el último precio
    }

    const costoTotal = numPaginas * costoPorPagina;
    return Math.round(costoTotal * 100) / 100; // Redondea a 2 decimales
}


  const calculateCost = () => {
    const { level, pages, installments } = formData;
    const costPerPagebase = pricingData[level].pricePerPage;

    const totalCost = calcularCostoProgresivo(pages,level,costPerPagebase);

    //const totalCost = calcularCostoTotal(pages,costPerPagebase);
    // const costPerPage = costPerPagebase * factor;
    // const totalCost = costPerPage * pages;
    //console.log("base: ", costPerPagebase, "preciopp: ",costPerPage )
    
    const rate = exchangeRates[selectedCurrency] || 1;
    const costInSelectedCurrency =  formatNumber(totalCost * rate);
    const installmentCost = formatNumber((totalCost * rate) / installments);

    setResult({
      totalCostUSD: totalCost.toFixed(2),
      totalCostSelectedCurrency: costInSelectedCurrency,
      selectedCurrency: selectedCurrency,
      installments,
      installmentCost: installmentCost,
      pages: pages,
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-left mb-4">
            Calculadora de Costos
          </h1>
        </div>
        <div>
        {step !== 1 && (
          <span className="cursor-pointer text-blue-600" onClick={() => handleNextStep(-1)}>
            <KeyboardBackspaceIcon />
          </span>
        )}
        </div>
      </div>
        
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
            <div className="pt-10">
              <button
                onClick={() => handleNextStep(1)}
                style={{ borderRadius: '9999px' }} // Esto asegura que sea completamente redondeado
                className="w-full sm:w-full px-4 py-2 md:w-1/2 lg:w-1/2 xl:w-1/2 text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700"
              >
                Guardar y Continuar
              </button> 
            </div>
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
            <div className="pt-10">
              <button
                onClick={() => handleNextStep(1)}
                style={{ borderRadius: '9999px' }} // Esto asegura que sea completamente redondeado
                className="w-full sm:w-full px-4 py-2 md:w-1/2 lg:w-1/2 xl:w-1/2 text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700"
              >
                Guardar y Continuar
              </button>
            </div>
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
                  // min={currentLevelData.minPages}
                  // max={currentLevelData.maxPages}
                />
                <p className="text-sm text-gray-500">
                  Rango promedio: {currentLevelData.minPages} -{" "}
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
                  readOnly
                />
              </div>
            </div>
            <div className="pt-10">
              <button
                onClick={() => {
                  calculateCost();
                  setStep(4);
                }}
                style={{ borderRadius: '9999px' }} // Esto asegura que sea completamente redondeado
                className="w-full sm:w-full px-4 py-2 md:w-1/2 lg:w-1/2 xl:w-1/2 text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700"
              >
                Calcular
              </button>
            </div>
          </div>
        )}

        {/* Resultado */}
        {step === 4 && result && (
          <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="sm:w-3/5 bg-blue-600 text-white p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Resumen de Estimación</h3>
            </div>
            <div className="sm:w-2/5 bg-gray-200 text-gray-700 p-4 rounded-lg sm:ml-4">
              <h3 className="font-semibold text-lg text-right">Fecha</h3>
              <p className="text-lg text-right">{result.date}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-left text-gray-700">
              <strong className="text-gray-900">{`${formData.title}`}</strong>
            </p>
            <p>
              <strong>Descripción breve:</strong> {formData.description}
            </p>
            <p>
              <strong>Nivel educativo:</strong>{" "}
              {formData.level === "undergraduate"
                ? "Pregrado"
                : formData.level === "masters"
                ? "Maestría"
                : "Doctorado"}
            </p>
            <p>
              <strong>Cantidad de páginas:</strong> {result.pages}
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
            Esta es una estimación preliminar del costo para desarrollar el proyecto <strong>{formData.title}</strong>, basada en las características iniciales y las mejores prácticas. Cabe destacar que los montos pueden variar debido a cambios en los requisitos, ajustes en las especificaciones o factores externos como la fluctuación de la tasa oficial de la moneda. Los tiempos y costos finales se ajustarán al concretar todos los detalles del proyecto.
          </p>
          <button
            onClick={resetCalculator}
            className="mt-6 w-full rounded-full bg-gray-500 text-white py-2 hover:bg-gray-600 transition duration-200"
          >
            Reiniciar
          </button>
        </div>
        )}
      </div>
    </div>
  );
}
