
function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <lottie-player 
                autoplay
                loop
                mode="normal"
                src="./src/assets/404.json"
                style={{ width: "600px", height: "600px" }}
                ></lottie-player>
            <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go Back
            </button>
    </div>
    );
}
export default NotFound;