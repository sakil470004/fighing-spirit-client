import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('success')
                navigate(from, { replace: true });
            })
    }



    return (
        <>
            <Helmet>
                <title>Fighting Spirit | Login</title>
            </Helmet>
            <div className="my-20 flex items-center justify-center">
                <div className="w-full md:w-[500px]  mx-auto bg-white p-8 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">Login now!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <label className="block mt-1 text-sm text-gray-600">
                                <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full py-2 px-4 bg-pink-400 text-white rounded-md hover:bg-pink-600">Login</button>
                        </div>
                      
                    </form>
                    <p className="text-sm text-center">New Here? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></p>
                    <SocialLogin />
                </div>
            </div>

        </>
    );
};

export default Login;