export const fetchData = async (data) => {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_OTP_GENERATION, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
    });
   
    if (!response.ok) {
       throw new Error('Error al enviar el formulario');
    }
   
    return response.json();
};
   