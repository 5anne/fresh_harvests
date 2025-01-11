import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (request) => {
    const { pathname } = new URL(request.url);
    const _id = pathname.split('/').pop();

    if (!_id) {
        return NextResponse.json({ success: false, message: "No ID provided" }, { status: 400 });
    }

    try {
        const db = await connectDB();
        const allProducts = db.collection("products");

        const query = { _id: new ObjectId(_id) };
        const productInfo = await allProducts.findOne(query);

        if (!productInfo) {
            return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Product retrieved successfully!", data: productInfo });
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
};

// PUT Method - Update Product Data
export const PUT = async (request) => {
    const { pathname } = new URL(request.url);
    const _id = pathname.split('/').pop();
    console.log("Requested Path:", _id);

    if (!_id) {
        return NextResponse.json({ success: false, message: "No ID provided" }, { status: 400 });
    }

    try {
        const db = await connectDB();
        const allProducts = db.collection("products");

        const body = await request.json();
        const query = { _id: new ObjectId(_id) };

        const updateResult = await allProducts.updateOne(query, { $set: body }, { upsert: true });

        if (updateResult.matchedCount === 0 && updateResult.upsertedCount === 0) {
            return NextResponse.json({ success: false, message: "Product update failed" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Product updated successfully!" });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
};
