import UrlModel from "@/models/url";
import connectDB from "@/config/db";

export default class UrlRepository {
    constructor() {
        connectDB();
        this.urlModel = UrlModel;
    }

    async getUrlById(id) {
        return await this.urlModel.findById(id).lean();
    }   

    async createUrl(originalUrl, shortUrl) {
        return await this.urlModel.create({ originalUrl, shortUrl });
    }

    async getUrlByshortUrl(shortUrl) {
        return await this.urlModel.findOne({ shortUrl }).lean();
    }

    async findUrlByOriginalUrl(originalUrl) {
        return await this.urlModel.findOne({ originalUrl });
    }

    async getAllUrls() {
        return await this.urlModel.find().lean();
    }

    async deleteUrlById(id) {
        return await this.urlModel.findByIdAndDelete(id).lean();
    }

    // todo update
}

