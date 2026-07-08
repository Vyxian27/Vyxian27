export default function AppLogo() {
    return (
        <>
            <img
                src="/images/logo.jpg"
                className="h-10 w-10 rounded-xl object-cover"
            />

            <div className="ml-3">

                <h1 className="text-lg font-black tracking-wider text-red-500">
                    VYXIAN
                </h1>

                <p className="text-xs text-gray-500">
                    Game Library
                </p>

            </div>
        </>
    );
}