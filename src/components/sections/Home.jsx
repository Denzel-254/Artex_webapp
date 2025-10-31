import { Link } from 'react-router-dom'



function Home() {
    return (
        <section className='bg-gray-500 min-h-screen'>
            <div className="flex flex-col h-screen justify-center items-center mx-auto">

                <h1 className="text-6xl text-blue-950 text-center w-full md:w-170 font-extrabold mx-auto">You have succesfully logeed in. <br /> <span className="text-orange-800"> Welcome to my code space</span></h1>

                <Link to='/login'>
                    <button className="mt-10 py-2 px-6 rounded-sm font-bold cursor-pointer hover:bg-blue-900 hover:text-white z-10 transition bg-blue-950 text-orange-800">Logout</button>
                </Link>

            </div>
        </section>


    )
}


export default Home