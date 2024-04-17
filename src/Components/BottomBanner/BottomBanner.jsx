
const BottomBanner = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto p-6 py-12 bg-cyan-200 mb-24">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0 animate__animated  animate__heartBeat animate__infinite text-red-500">
                            <span className="text-2xl">Dhamaka Eid Offer!</span>
                            <span className="font-bold text-2xl">Limited</span>
                        </div>
                        <a
                            href="#" rel="noreferrer noopener"
                            className="btn bg-[#68E1FD] hover:bg-transparent
                            ring-2 ring-sky-300 ring-inset animate__animated animate__backInRight">
                            Explore Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;