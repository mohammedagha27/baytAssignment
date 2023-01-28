<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->all();
        $validationRules = [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'],
            'password_confirmation' => ['required', 'same:password'],
            'first_name' => ['required', 'string', 'max:255','min:3'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'birthdate' => ['required', 'date', 'before:today', 'before:-18 years'],
            'gender' => ['required', 'string', 'in:male,female,other'],
            'customer_type' => ['required', 'string', 'in:individual,business'],
        ];
        if (isset($data['customer_type'])) {
            if ($data['customer_type'] === 'business') {
                $validationRules['business_name'] = ['required', 'string', 'max:255'];
                $validationRules['business_address'] = ['required', 'string', 'max:255'];
            }
        }
        $request->validate($validationRules);

        $data['password']= Hash::make($data['password']);

        // dd($userData);
        $user=new User();
        $user->email=$data['email'];
        $user->password=$data['password'];
        $user->first_name=$data['first_name'];
        $user->last_name=$data['last_name'];
        $user->phone_number=$data['phone_number'];
        $user->address=$data['address'];
        $user->birthdate=$data['birthdate'];
        $user->gender=$data['gender'];
        $user->customer_type=$data['customer_type'];
        if ($data['customer_type'] === 'business') {
            $user->business_name = $data['business_name'];
            $user->business_address = $data['business_address'];
        }
        $user->save();

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
