import Image from "next/image";

const Login = () => {
    return (
        <section className='w-full h-screen min-h-full bg-center bg-hulu'>
            <nav className='flex items-center justify-between px-6 max-h-12 max-w-7xl mx-auto'>
                <Image
                    className='object-contain hover:animate-pulse'
                    width={100}
                    height={100}
                    src='/hulu-logo.svg'
                />

                <button className='text-sm text-gray-300 font-bold md:text-l  px-4 py-2 hover:bg-gray-500 hover:text-white rounded-lg transition-all ease-in-out duration-150'>
                    LOG IN
                </button>
            </nav>
            <div className='flex flex-col items-center justify-center h-full  max-w-6xl mx-auto px-8 py-12'>
                <p className='font-bold text-green-500 uppercase text-base md:text-xl'>
                    Bundle with any hulu plan & save
                </p>
                <Image
                    className='object-contain w-full'
                    width={500}
                    height={200}
                    src='/hulu-disney-logo.png'
                />

                <p className='text-white font-bold text-xl md:text-3xl lg:text-4xl capitalize'>
                    Get endless entertainment, live sports, and the shows and
                    movies you love.
                </p>

                <button className='my-4 w-full flex items-center justify-center font-bold text-gray-900 text-l bg-green-400 px-6 py-4 md:text-2xl uppercase rounded-lg hover:opacity-60 '>
                    Get the disney bundle
                </button>
                <p className='font-sm text-gray-300 '>
                    What's included?{" "}
                    <span className='underline'>See Bundle details. </span>
                </p>
                <p className='text-white underline text-xl'>
                    {" "}
                    Sign up for Hulu only
                </p>
            </div>
        </section>
    );
};

export default Login;
