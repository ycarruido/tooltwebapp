import Link from "next/link";

export const metadata = {
  title: "ToolTesis - Calculadora de Costos para Tesis",
  description: "Calcula el costo estimado para tu tesis de manera rápida y sencilla con nuestra calculadora interactiva. Personaliza los detalles según el nivel educativo, cantidad de páginas y más",
  keywords: "Calculadora de tesis, TFM, TFM, Resumen, Asesorías, Guion de Estudio, Presentaciones, Artículos Científicos",
};

export default function Tiendalayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

