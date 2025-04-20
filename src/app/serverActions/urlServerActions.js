'use server';
import urlShortnerService from "@/services/url-shorten-service";

export const shortenUrl = async (formData) => {

    const originalUrl = formData.get('originalUrl');
    console.log('originalUrl', originalUrl);
    const shortenerService = new urlShortnerService();
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
    console.log('shortUrl', shortUrl);
}