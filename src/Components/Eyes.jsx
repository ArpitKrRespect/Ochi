import { useEffect, useState } from "react";

const Eyes = () => {
    const [rotateLeft, setRotateLeft] = useState(0);
    const [rotateRight, setRotateRight] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const centerXLeft = window.innerWidth / 2 - 100; // Adjust for left eye
            const centerY = window.innerHeight / 2;

            const centerXRight = window.innerWidth / 2 + 100; // Adjust for right eye

            // Calculate angles for left and right eyes
            const angleLeft = Math.atan2(mouseY - centerY, mouseX - centerXLeft);
            const angleRight = Math.atan2(mouseY - centerY, mouseX - centerXRight);

            // Convert to degrees
            setRotateLeft(angleLeft * (180 / Math.PI));
            setRotateRight(angleRight * (180 / Math.PI));
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full h-[80vw] overflow-hidden">
            <div className="w-full h-[10vw]"></div>

            {/* Eyes Section */}
            <div className="relative w-full flex items-center justify-center h-2/3 rounded-xl bg-cover bg-center bg-[url('/Images/EyesBackground.jpg')]">
                <div className="w-[400px] h-[180px] bg-transparent flex justify-around">
                    {/* Left Eye */}
                    <div className="w-[170px] h-[170px] rounded-full flex items-center justify-center bg-white">
                        <div className="h-2/3 w-2/3 bg-black flex justify-center items-center rounded-full relative">
                            <div
                                style={{ transform: `rotate(${90+rotateLeft}deg)` }}
                                className="line w-full bg-transparent"
                            >
                                <div className="h-[15px] w-[15px] bg-white rounded-full"></div>
                            </div>
                        </div>
                        <span className="absolute bg-black text-white font-neue">PLAY</span>
                    </div>

                    {/* Right Eye */}
                    <div className="w-[170px] h-[170px] rounded-full flex items-center justify-center bg-white">
                        <div className="h-2/3 w-2/3 bg-black flex justify-center items-center rounded-full relative">
                            <div
                                style={{ transform: `rotate(${rotateRight-90}deg)` }}
                                className="line w-full bg-transparent"
                            >
                                <div className="h-[15px] w-[15px] bg-white rounded-full"></div>
                            </div>
                        </div>
                        <span className="absolute bg-black text-white font-neue">PLAY</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[100px]"></div>
        </div>
    );
};

export default Eyes;
