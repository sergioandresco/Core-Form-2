export const fetchData = async (formData) => {
   const response = await fetch(import.meta.env.VITE_ENDPOINT_FORM, {
      method: 'POST',
      body: formData,
   });

   if (!response.ok) {
      throw new Error('Error al enviar el formulario');
   }

   return response.json();
};
