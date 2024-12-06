export async function GET() {
    return Response.json(products, {
        headers: {
            "Set-Cookie": "theme=dark",
        }
    })
}


const products = [
    {
        id: 1,
        image: "https://i.ibb.co.com/tHHPKSh/mushroom.png",
        categoryName: "Vegetables",
        productName: "Mushroom",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 2,
        image: "https://i.ibb.co.com/bJX4JNT/16-2.jpg",
        categoryName: "Salad",
        productName: "Lettuce",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/bBSVdCx/16-3.jpg",
        categoryName: "Fruits",
        productName: "Orange",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 4,
        image: "https://i.ibb.co.com/WtMWzDf/16-4.jpg",
        categoryName: "Fruits",
        productName: "Pomegranate",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 5,
        image: "https://i.ibb.co.com/hdCMkrJ/16-5.jpg",
        categoryName: "Fruits",
        productName: "kiwi",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 6,
        image: "https://i.ibb.co.com/w4G69cD/16.jpg",
        categoryName: "Fruits",
        productName: "Coconut",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 7,
        image: "https://i.ibb.co.com/tH23kpd/16-7.jpg",
        categoryName: "Fruits",
        productName: "Guava",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 8,
        image: "https://i.ibb.co.com/9GMRsRY/16-8.jpg",
        categoryName: "Vegetables",
        productName: "Egg Plant",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 9,
        image: "https://i.ibb.co.com/tHHPKSh/mushroom.png",
        categoryName: "Vegetables",
        productName: "Mushroom",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 10,
        image: "https://i.ibb.co.com/bJX4JNT/16-2.jpg",
        categoryName: "Salad",
        productName: "Lettuce",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 11,
        image: "https://i.ibb.co.com/bBSVdCx/16-3.jpg",
        categoryName: "Fruits",
        productName: "Orange",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
    {
        id: 12,
        image: "https://i.ibb.co.com/6RdnBqv/16-7.jpg",
        categoryName: "Fruits",
        productName: "Pomegranate",
        price: 50,
        description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
        createdAt: "2024-12-04T13:21:10.712Z",
        updatedAt: "2024-12-04T13:23:58.980Z"
    },
]