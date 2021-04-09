import { useState, useCallback } from 'react';

export const useHTTP = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);

        try {
            const response = await fetch(url, {
                method, 
                body,
                headers
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Ошибка! Что-то пошло не так! ');
            };

            setLoading(false);

            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message);

            throw error;
        };
    });

    const clearError = () => { 
        setError(null); 
    };

    return { loading, error, clearError, request };
};
