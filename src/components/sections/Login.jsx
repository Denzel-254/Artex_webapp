import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className=" bg-gray-500 min-h-screen flex items-center justify-center ">
            <div className=" w-100 mx-auto mt-20 p-6 bg-blue-950  rounded-lg shadow-md ">
                <form action="POST">
                    <h1 className="text-orange-500 font-bold text-center text-2xl">Log In</h1> <br />
                    <input type="email" placeholder="Email" className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    <input type="password" placeholder="Password" className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    <button type="submit" className="mt-4 p-3 w-full bg-orange-500 hover:bg-orange-700 cursor-pointer text-white rounded-md">Log In</button>
                </form>
                <p className="text-center text-white mt-4">Don't have an account? <Link to="/signup" className="text-orange-500 hover:underline">Sign up</Link></p>
            </div>
        </section>




    )
}

export default Login