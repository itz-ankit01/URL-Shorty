import urlShortnerService from "@/services/url-shorten-service";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";


export async function POST(req) {
    await connectDB();
    const { originalUrl } = await req.json();
    const shortnerService = new urlShortnerService();

    const shortUrl = await shortnerService.shortenUrl(originalUrl);
    return NextResponse.json({shortUrl}, {status: 200});
}

export async function GET(req) {
    const shortnerService = new urlShortnerService();
    const urls = await shortnerService.getAllUrls();
    return NextResponse.json(urls, {status: 200});
}