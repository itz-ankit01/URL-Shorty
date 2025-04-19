import connectDB from "@/config/db";
import urlShortnerService from "@/services/url-shorten-service";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchUrls = cache(async () => {
    try {
        await connectDB();
        const shortnerService = new urlShortnerService();
        const urls = await shortnerService.getAllUrls();
        return urls;
    } catch (error) {
        console.error('Error fetching URLs:', error);
        throw error;
    }
});

export async function GET() {
    try {
        console.log('Fetching all urls...');
        const urls = await fetchUrls();
        console.log('Fetched URLs:', urls);

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