import UrlRepository from "@/repository/url-repository";
import shortId from "shortid";

export default class urlShortnerService {
    constructor() {
        this.urlRepository = new UrlRepository();
    }

    async getUrlById(id) {
        return await this.urlRepository.getUrlById(id);
    }
    
    async shortenUrl(originalUrl) {
        let url = await this.urlRepository.findUrlByOriginalUrl(originalUrl);
        if (url) {
            return url.shortUrl;
        }

        let shortUrl = shortId();
        url = await this.urlRepository.getUrlByshortUrl(shortUrl);
        while (url) {
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByshortUrl(shortUrl);
        }
        await this.urlRepository.createUrl(originalUrl, `urls/${shortUrl}`);
        return shortUrl;
    }

    async getAllUrls() {
        return await this.urlRepository.getAllUrls();
    }   

    async getUrlByshortUrl(shortUrl) {
        return await this.urlRepository.getUrlByshortUrl(shortUrl);
    }   

    // todo
}