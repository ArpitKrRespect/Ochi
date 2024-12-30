import { useEffect, useState } from "react";

const Eyes = () => {
    const [rotateLeft, setRotateLeft] = useState(0);
    const [rotateRight, setRotateRight] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const centerXLeft = window.innerWidth / 2-100; // Adjust for left eye
            const centerY = window.innerHeight / 2;

            const centerXRight = window.innerWidth / 2; // Adjust for right eye

            // Calculate angles for left and right eyes
            const angleLeft = Math.atan2(mouseY - centerY, mouseX - centerXLeft);
            const angleRight = Math.atan2(mouseY - centerY, mouseX - centerXRight);

            // Convert to degrees for rotation
            setRotateLeft(angleLeft * (180 / Math.PI));
            setRotateRight(angleRight * (180 / Math.PI));
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full h-[60vw] overflow-hidden bg-zinc-900">
            <div className="w-full h-[10vw] bg-zinc-200"></div>

            {/* Eyes Section */}
            <div className="relative w-full flex items-center justify-center h-2/3 bg-cover bg-center bg-[url('/Images/EyesBackground.jpg')]">
                <div className="w-[400px] h-[180px] bg-transparent flex justify-around">
                    {/* Left Eye */}
                    <div className="w-[170px] h-[170px] rounded-full flex items-center justify-center bg-white">
                        <div className="h-2/3 w-2/3 bg-black flex justify-center items-center rounded-full relative">
                            <div
                                style={{
                                    transform: `rotate(${rotateLeft}deg) translate(35px)`,
                                }}
                                className="h-[15px] w-[15px] bg-white rounded-full absolute"
                            ></div>
                        </div>
                        <span className="absolute bg-black text-white font-neue">PLAY</span>
                    </div>

                    {/* Right Eye */}
                    <div className="w-[170px] h-[170px] rounded-full flex items-center justify-center bg-white">
                        <div className="h-2/3 w-2/3 bg-black flex justify-center items-center rounded-full relative">
                            <div
                                style={{
                                    transform: `rotate(${rotateRight}deg) translate(35px)`,
                                }}
                                className="h-[15px] w-[15px] bg-white rounded-full absolute"
                            ></div>
                        </div>
                        <span className="absolute bg-black text-white font-neue">PLAY</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[50px] rounded-b-xl bg-zinc-200"></div>
        </div>
    );
};

export default Eyes;
