// pages/api/urls/route.js or /route.ts
import connectDB from "@/config/db";
import urlShortnerService from "@/services/url-shorten-service";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const shortnerService = new urlShortnerService();
        const urls = await shortnerService.getAllUrls();

        const response = NextResponse.json({ urls }, { status: 200 });
        response.headers.set(
            'Cache-Control',
            'public, max-age=60, s-maxage=60, stale-while-revalidate=59'
        );
        return response;
    } catch (error) {
        console.error('Failed to fetch URLs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch URLs' },
            { status: 500 }
        );
    }
}
