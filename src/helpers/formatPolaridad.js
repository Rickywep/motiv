export const getFormatPolaridad = (type) => {
  if (!type) return "";

  let polaridades = {
    'N+': "Muy Negativo",
    'P': "Positivo",
    'NONE': "Ninguna",
    'N': "Negativo",
    'P+': "Muy Positivo",
    'NEU': "Neutral",
  };

  return polaridades[type?.toUpperCase()];
};
