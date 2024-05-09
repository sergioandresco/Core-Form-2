export const fetchData = async (data, file) => {
   const formData = new FormData();

   for (const key in data) {
      formData.append(key, data[key]);
   }

   formData.append('documentFile', file);

   const response = await fetch(import.meta.env.VITE_ENDPOINT_FORM, {
      method: 'POST',
      body: formData,
   });

   if (!response.ok) {
      throw new Error('Error al enviar el formulario');
   }

   return response.json();
};
   