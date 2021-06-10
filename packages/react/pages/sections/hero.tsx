const Hero = () => {
    return (
        <body>
            <div className="grid grid-cols-2 py-10 mx-20 ">
                <div className="bg-gray-100 border-gray-300 border-2 mr-5 text-gray-400 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div className="my-5">
                    <div>
                        <a href="/">
                            <span className="text-blue-700 uppercase text-xs">  About us </span>
                        </a>
                    </div>
                    <ul>
                        <li className="py-2">
                            <p className="text-4xl text-black-800">We scratch, build and play together</p>
                        </li>

                        <li>
                            <p className="py-5 text-xs text-gray-500">
                                Et has minim elitr intellegat.
                                Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                                At nam minimum ponderum. Est audiam animal molestiae te.
                                Ex duo eripuit mentitum.
                            </p>
                        </li>

                        <li className="mt-5">
                            <a href="#" className="py-0.5 px-3 border-blue-300 border-2 text-blue-600">
                                <span className="text-xs">Contact us</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </body>
    )
}

export default Hero;
