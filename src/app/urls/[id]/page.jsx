import urlShortnerService from "@/services/url-shorten-service";
import { redirect } from "next/navigation";

async function fetchOriginalUrl(url) {
    const urlService = new urlShortnerService();
    const res =  await urlService.getUrlByshortUrl(url);
    return res?.originalUrl || null;
}
export default async function urlRedirect( {params }) {
    const original = await fetchOriginalUrl(`urls/${params.id}`);
    if (original) {
        redirect(original);
    }   
    redirect(`/404`);
}