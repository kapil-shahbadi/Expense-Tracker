import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    });
};

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    });
};

// Vite me env variable import.meta.env se aata hai
export const APIUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
