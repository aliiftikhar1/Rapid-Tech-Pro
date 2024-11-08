'use client'
import { FaWhatsapp } from 'react-icons/fa';

export default function ChatWithWhatsapp() {
    const handleClick = () => {
        const phoneNumber = '1234567890'; // Replace with actual phone number
        const url = `https://wa.me/${phoneNumber}?text=Hello%20Store2u.ca`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="md:flex fixed hidden z-50 left-0 top-1/2 transform -translate-y-1/2 h-36 w-8 bg-bluish rounded-r-lg items-center justify-center chat-button cursor-pointer">
                <span className="text-white transform -rotate-90 whitespace-nowrap text-xs md:text-sm">
                    Chat with Whatsapp
                </span>
            </div>

            {/* Mobile Version */}
            <div
                className="fixed bottom-6 right-4 z-50 shadow-lg cursor-pointer flex items-center justify-center bg-green-500 p-3 rounded-full md:hidden"
                onClick={handleClick}
            >
                <FaWhatsapp className="text-white w-6 h-6" />
            </div>
        </>
    );
}
