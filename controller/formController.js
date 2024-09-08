import { nanoid } from "nanoid";

const storage = {};

export const shortTheUrl = (req, res) => {
    // res.send("Shorted url is here.");
    const url = req.body.url;
    const uniqueId = nanoid(10);
    storage[uniqueId] = url;
    res.status(200).json({
        message: "Shorted link is generated",
        link: `http://localhost:5000/api/url-shortener/${uniqueId}`
    });
}

export const getOriginalUrl = (req, res) => {
    const shortUrl = req.params.shortUrl;
    if(storage[shortUrl]) {
        res.redirect(storage[shortUrl]);
    }
    else {
        res.status(404).json({message: 'Shorted URL not found!'});
    }
}
