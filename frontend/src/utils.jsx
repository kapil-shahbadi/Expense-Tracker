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

// Yaha Vercel ka URL daal diya, agar env var na mile to ye chalega
export const APIUrl =
    import.meta.env.VITE_API_URL || "https://expense-tracker-api-tau-six.vercel.app";
