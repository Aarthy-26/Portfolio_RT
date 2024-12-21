// src/services/api.ts

// Backend API URL
const API_URL = "http://localhost:5289";

// Function to send contact form data to the backend
export const sendContactForm = async (data: { name: string; email: string; message: string }) => {
    try {
        const response = await fetch(`${API_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return await response.json(); // Response object is valid here
    } catch (error) {
        console.error("Error sending contact form:", error);
        throw error;
    }
};
