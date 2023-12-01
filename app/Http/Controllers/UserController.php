<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index() {
        $user = User::active()
            ->orderById()
            ->get(['id', "name", "email"]);
        
        return Inertia::render("Users", [
            "users"=> $user
        ]);
    }
}
