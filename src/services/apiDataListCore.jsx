export const GetData = async (formData) => {
    const url = new URL(import.meta.env.VITE_ENDPOINT_LIST_CORE);
    Object.keys(formData).forEach(key => url.searchParams.append(key, formData[key]));

    const response = await fetch(url, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Error al recibir la información');
    }

    return response.json();
};