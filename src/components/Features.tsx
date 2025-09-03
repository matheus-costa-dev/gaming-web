import { TiLocationArrow } from "react-icons/ti"
import BentoCard from "./BentoCard"
import BentoTilt from "./BentoTilt"

function Features() {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="text-lg text-blue-50">
                        Into the Metagame
                    </p>

                    <p className="max-w-md text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expading universe,
                        where a vibrant array of products onverge into an interconnected
                        overlay experience on your world
                    </p>
                </div>

                <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-sm md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>radia<b>n</b>t</>}
                        description="A cross-plataform metagame app, turning your activites across web2 and web3 games into rewarding adventure"
                    />
                </BentoTilt>

                <div className="grid gap-4 md:grid-cols-2 w-full h-full">
                    <BentoTilt className="flex flex-col gap-4">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>Zig<b>m</b>a</>}
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />

                    </BentoTilt>

                    <div className="flex flex-col gap-4">

                        <BentoTilt>
                            <BentoCard
                                src="videos/feature-3.mp4"
                                title={<>n<b>e</b>xus</>}
                                description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                            />
                        </BentoTilt>

                        <BentoTilt>
                            <BentoCard
                                src="videos/feature-4.mp4"
                                title={<>az<b>u</b>l</>}
                                description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                            />

                        </BentoTilt>

                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-center gap-2 h-64 mt-2">
                    {/* Coluna esquerda */}
                    <BentoTilt className="bg-violet-900 w-full md:w-1/2 h-full flex flex-col justify-between">
                        <div className="flex flex-col justify-between h-full mt-3 ml-1">
                            <h1 className="font-black text-3xl text-black mt-3 ml-1 self-start flex-wrap w-1/3">
                                More coming soon
                            </h1>
                            <TiLocationArrow className="text-3xl m-3 self-end text-black" />
                        </div>
                    </BentoTilt>


                    {/* Coluna direita */}
                    <BentoTilt className="w-full md:w-1/2 h-full">
                        <video
                            className="w-full h-full object-cover"
                            src="/videos/feature-5.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </BentoTilt>
                </div>



            </div>
        </section>
    )
}

export default Features