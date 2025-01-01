import { doSocialLogin } from '@/app/actions';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const AuthForm = () => {

    return (
        <div>
            <form action={doSocialLogin} className='flex justify-center items-center mt-4 gap-2'>
                <button
                    className='bg-red-500 hover:brightness-90 text-white py-2 px-6 rounded-md text-lg'
                    type='submit'
                    name='action'
                    value='google'
                >
                    <FaGoogle />
                </button>

                <button
                    className='bg-gray-700 hover:brightness-90 text-white py-2 px-6 rounded-md text-lg'
                    type='submit'
                    name='action'
                    value='github'
                >
                    <FaGithub />
                </button>
            </form>
        </div>
    );
};

export default AuthForm;
