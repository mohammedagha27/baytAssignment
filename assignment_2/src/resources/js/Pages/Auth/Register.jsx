import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset,setError } = useForm({
        'email': '',
        'password': '',
        'password_confirmation': '',
        'first_name': '',
        'last_name': '',
        'phone_number': '',
        'address': '',
        'birthdate': '',
        'gender': '',
        'customer_type': '',

    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        if (event.target.value.length === 0) {
            setError(event.target.name,event.target.name + ' should not be empty')
        } else {
            setError(event.target.name,'')
        }
        if (event.target.name === 'birthdate') {
            let dob = document.querySelector("#birthdate").value
            var inputDate = new Date(dob);
            let currentDate = new Date();
            // Get the difference in milliseconds
            let diff = currentDate - inputDate;
            // Convert milliseconds to years
            let diffInYears = diff / (1000 * 60 * 60 * 24 * 365);
            if(diffInYears < 18){
                setError('birthdate','You have to be older that 18 years old')
            }
        }
        if (event.target.name === 'password' || (event.target.name === 'password_confirmation')) {
            if(event.target.value.length <8){
                setError(event.target.name,'password must be greater the 8 characters')
            }else{
                if (document.querySelector("#password").value !== document.querySelector("#password_confirmation").value) {
                    setError('password','password and password confirmation must be equal')
                } else {
                    setError('password','')
                }
            }
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="first_name" value="first Name" />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={data.first_name}
                        className={"mt-1 block w-full"}
                        error={errors.first_name}
                        autoComplete="first_name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="last_name" value="last name" />

                    <TextInput
                        id="last_name"
                        type="text"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        error={errors.last_name}
                        autoComplete="last_name"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        error={errors.email_name}
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="phone_number" value="phone number" />

                    <TextInput
                        id="phone_number"
                        type="text"
                        name="phone_number"
                        value={data.phone_number}
                        error={errors.phone_number}
                        className="mt-1 block w-full"
                        autoComplete="phone_number"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.phone_number} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel forInput="address" value="address" />

                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        error={errors.address}
                        className="mt-1 block w-full"
                        autoComplete="address"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel forInput="birthdate" value="birthdate" />

                    <TextInput
                        id="birthdate"
                        type="date"
                        name="birthdate"
                        value={data.birthdate}
                        error={errors.birthdate}
                        className="mt-1 block w-full"
                        autoComplete="birthdate"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.birthdate} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel forInput="gender" value="gender" />
                    <div className='mt-2' style={{ "display": "flex" }}>
                        <label style={{ "marginLeft": "1rem", "marginRight": ".5rem" }} htmlFor="male">Male</label>
                        <TextInput
                            id="male"
                            type="radio"
                            name="gender"
                            value='male'
                            checked={true}
                            className="mt-1"
                            autoComplete="gender"
                            handleChange={onHandleChange}
                            required
                        />
                        <label style={{ "marginLeft": "1rem", "marginRight": ".5rem" }} htmlFor="female">Female</label>
                        <TextInput
                            id="female"
                            type="radio"
                            name="gender"
                            value='female'
                            className="mt-1"
                            autoComplete="gender"
                            handleChange={onHandleChange}
                            required
                        />
                        <label style={{ "marginLeft": "1rem", "marginRight": ".5rem" }} htmlFor="other">Other</label>
                        <TextInput
                            id="other"
                            type="radio"
                            name="gender"
                            value='other'
                            className="mt-1"
                            autoComplete="gender"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <InputError message={errors.gender} className="mt-2" />
                </div>
                <div className="mt-4">

                    <InputLabel forInput="customer_type" value="customer type" />
                    <div className='mt-2' style={{ "display": "flex" }}>
                        <label style={{ "marginLeft": "1rem", "marginRight": ".5rem" }} htmlFor="individual">individual</label>
                        <TextInput
                            id="individual"
                            type="radio"
                            name="customer_type"
                            value='individual'
                            className="mt-1"
                            autoComplete="customer_type"
                            handleChange={onHandleChange}
                            required
                        />
                        <label style={{ "marginLeft": "1rem", "marginRight": ".5rem" }} htmlFor="business">business</label>
                        <TextInput
                            id="business"
                            type="radio"
                            name="customer_type"
                            value='business'
                            className="mt-1"
                            autoComplete="customer_type"
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.customer_type} className="mt-2" />
                    </div>
                </div>
                {data.customer_type === 'business' && <div>
                    <div className="mt-4">
                        <InputLabel forInput="business_name" value="business name" />
                        <TextInput
                            id="business_name"
                            type="text"
                            name="business_name"
                            value={data.business_name}
                            error={errors.business_name}
                            className="mt-1 block w-full"
                            autoComplete="new-business_name"
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.business_name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel forInput="business_address" value="business address" />
                        <TextInput
                            id="business_address"
                            type="text"
                            name="business_address"
                            value={data.business_address}
                            error={errors.business_address}
                            className="mt-1 block w-full"
                            autoComplete="new-business_address"
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.business_address} className="mt-2" />
                    </div>
                </div>}
                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        error={errors.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        error={errors.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
