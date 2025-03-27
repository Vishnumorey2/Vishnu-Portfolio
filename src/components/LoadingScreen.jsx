import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete(); // Call onComplete after 2 seconds
        }, 2000);

        return () => clearTimeout(timer); // Cleanup function
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                Welcome
            </div>

            <div className="w-[200px] h-[2px] bg-gray-600 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};

