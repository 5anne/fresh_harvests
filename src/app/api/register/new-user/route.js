export async function GET() {
    return Response.json(users, {
        headers: {
            "Set-Cookie": "theme=dark"
        }
    })
}

export async function POST(request) {
    const newUser = await request.json();
    users.push({
        id: users.length + 1,
        image: "https://i.ibb.co.com/1bt1MHX/jadj-kedm-220303.jpg",
        user_name: newUser.user_name,
        user_email: newUser.user_email,
        password: newUser.password,
        status: "Admin",
    })
    return Response.json({
        users
    })
}

const users = [
    {
        id: 1,
        image: "https://i.ibb.co.com/1bt1MHX/jadj-kedm-220303.jpg",
        user_name: "Sara",
        user_email: "admin@gmail.com",
        password: 12345678,
        status: "Admin"
    },
    {
        id: 2,
        image: "https://i.ibb.co.com/1bt1MHX/jadj-kedm-220303.jpg",
        user_name: "Zara",
        user_email: "admin@gmail.com",
        password: 12345678,
        status: "Admin"
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/1bt1MHX/jadj-kedm-220303.jpg",
        user_name: "Kara",
        user_email: "admin@gmail.com",
        password: 12345678,
        status: "Admin"
    },
    {
        id: 4,
        image: "https://i.ibb.co.com/1bt1MHX/jadj-kedm-220303.jpg",
        user_name: "Tara",
        user_email: "admin@gmail.com",
        password: 12345678,
        status: "Admin"
    },
    {
        id: 5,
        image: "https://i.ibb.co.com/1bt1MHX/jadj-kedm-220303.jpg",
        user_name: "Rara",
        user_email: "admin@gmail.com",
        password: 12345678,
        status: "Admin"
    }
]