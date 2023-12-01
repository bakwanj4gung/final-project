import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center rounded-xl min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center cursor-pointer">
                        <a className="block px-8 py-3 m-0 text-sm whitespace-nowrap ">
                            <div className="flex items-center h-full max-w-full text-blue-500 transition-all duration-200 ease-nav-brand max-h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500" width="70px" height="70px" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="quran"><path fillRule="nonzero" d="M2.001 1.587a.08.08 0 0 0-.093-.13l-.427.303a.08.08 0 0 0-.033.072v1.67a.08.08 0 0 0 .16 0V1.866L2 1.586zM3.018 4.06a.08.08 0 0 0 .136.083.205.205 0 0 1 .098-.073.475.475 0 0 1 .18-.034.48.48 0 0 1 .174.03.224.224 0 0 1 .101.07.08.08 0 0 0 .13-.094.382.382 0 0 0-.173-.124.641.641 0 0 0-.231-.042.636.636 0 0 0-.242.046.361.361 0 0 0-.173.138z"></path><path fillRule="nonzero" d="M3.413 3.712c.273-.492 1.118-.592 1.379-.61V1.608c-1.308.122-1.299.721-1.299.723 0 .106-.16.104-.16 0 0-.026-.017-.604-1.298-.723V3.1c.26.019 1.107.116 1.377.611zm.08.254c-.007.063-.078.077-.078.072a.08.08 0 0 1-.084-.07c-.09-.652-1.276-.708-1.372-.711a.08.08 0 0 1-.084-.08V1.522a.08.08 0 0 1 .086-.08c.96.071 1.319.398 1.452.635.134-.237.491-.562 1.448-.634a.08.08 0 0 1 .09.08v1.653c0 .202-1.343.01-1.458.79z"></path><path fillRule="nonzero" d="M4.918 1.457a.08.08 0 0 0-.092.13l.393.279-.015 1.64a.08.08 0 0 0 .16.002l.015-1.675a.08.08 0 0 0-.034-.073l-.427-.303z"></path><path fillRule="nonzero" d="m5.469 3.522-1.834.706.185.072 1.38-.55c.027-.008.253-.089.269-.228zm-2.084.632 2.121-.818a.08.08 0 0 1 .115.072v.03c.075.322-.372.465-.373.466l-1.391.553a.08.08 0 0 1-.065.003l-.401-.155a.08.08 0 0 1-.006-.151zm-.38.317c-.553.213-1.103.427-1.656.643.008.05.039.117.148.11l1.7-.677-.191-.076zm-.034-.158a.08.08 0 0 1 .065-.002l.4.16a.08.08 0 0 1 .007.15l-1.891.753a.08.08 0 0 1-.028.008c-.352.037-.34-.28-.336-.33.002-.044.044-.08.088-.081.565-.22 1.13-.44 1.695-.658z"></path><path fillRule="nonzero" d="M4.836 3.962a.08.08 0 0 0-.13.091c.056.081.14.186.25.278.112.094.25.175.412.204.019.006.134.045.108.221a.08.08 0 0 0-.001.016l-.008.281a.08.08 0 0 0 .16.004l.007-.281c.043-.304-.183-.383-.225-.395a.737.737 0 0 1-.35-.172 1.295 1.295 0 0 1-.223-.247z"></path><path fillRule="nonzero" d="m1.32 3.336 4.267 1.645a.08.08 0 0 1 .051.072c.004.049.017.366-.335.329l.008-.08-.008.08a.08.08 0 0 1-.028-.008l-3.696-1.47c-.001 0-.449-.144-.373-.465v-.03a.08.08 0 0 1 .114-.073zM5.478 5.11l-4.12-1.588c.015.14.242.22.268.229a.08.08 0 0 1 .008.002l3.695 1.47c.113.008.142-.063.149-.113z"></path><path fillRule="nonzero" d="M2.121 4.053a.08.08 0 0 0-.13-.091c-.05.072-.125.165-.223.247a.737.737 0 0 1-.34.17.081.081 0 0 0-.01.002c-.043.012-.268.091-.226.395l.008.281a.08.08 0 0 0 .16-.004l-.008-.28v-.017H1.35c-.026-.176.089-.215.107-.22.162-.03.3-.11.413-.205.11-.092.194-.197.25-.278zm1.212-.095a.08.08 0 0 0 .16 0V2.332a.08.08 0 0 0-.16 0v1.626zM.935 5.225a.08.08 0 0 0 0 .16h4.957a.08.08 0 0 0 0-.16H.935z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>
                                {/* <a href="https://iconscout.com/icons/quran" class="text-underline font-size-sm" target="_blank">Quran</a> by <a href="https://iconscout.com/contributors/exeyecon" class="text-underline font-size-sm">Ex Eyecon</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
                                <span className="ml-1 text-xl tracking-wide font-semibold transition-all duration-200 ease-nav-brand">Asisten Tahfidz</span>
                            </div>
                        </a>
                    </div>

                    <div className="mt-16">
                        <div className="border-2 grid grid-cols- md:grid-cols-2 gap-6 lg:gap-8">
                            
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                
                            

                            
                        </div>
                    </div>

                    
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
