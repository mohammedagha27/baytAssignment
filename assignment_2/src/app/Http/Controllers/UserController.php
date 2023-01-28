<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    private $status_code = 200;
    private $apiToken;
    public function __construct()
    {
        $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }

    public function userSignUp(Request $request)
    {
        $data = $request->all();
        $validationRules = [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'],
            'password_confirmation' => ['required', 'same:password'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'birthdate' => ['required', 'date', 'before:today', 'before:-18 years'],
            'gender' => ['required', 'string', 'in:male,female,other'],
            'customer_type' => ['required', 'string', 'in:individual,business'],
        ];
        if ($data['customer_type'] === 'business') {
            $validationRules['business_name'] = ['required', 'string', 'max:255'];
            $validationRules['business_address'] = ['required', 'string', 'max:255'];
        }
        $validator = Validator::make($data, $validationRules);

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()], 400);
        }
        $userData = [
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'phone_number' => $data['phone_number'],
            'birthdate' => $data['birthdate'],
            'gender' => $data['gender'],
            'address' => $data['address'],
        ];

        if ($data['customer_type'] === 'business') {
            $userData['business_name'] = $data['business_name'];
            $userData['business_address'] = $data['business_address'];
        }
        try {
            User::create($userData);
            return response()->json([
                'message' => 'User Registered Successfully!!'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Something goes wrong while Registering a user!!'
            ], 400);
        }
    }


    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request)
    {
        $data = $request->all();
        $validationRules = [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ];
        $validator = Validator::make($data, $validationRules);

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()], 400);
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            //Setting login response
            $success['token'] = $this->apiToken;
            $success['name'] =  $user->name;
            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'wrong Credentials'
            ], 400);
        }

        // check if entered email exists in db
        $email_status = User::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if (!is_null($email_status)) {
            $password_status = User::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if (!is_null($password_status)) {
                $user = $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }
}
