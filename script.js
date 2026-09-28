function onStart(server, options) {
    // Do nothing
}

function bodyBuffer(body) {
    return Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), Buffer.from(body)]);
}

function makeHtml(sTitle, bkColor, sSrc, bAutoplay, bMuted) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>${sTitle}</title>
            <style>
                body {
                    height: 100%;
                    background-color: ${bkColor};
                }

                video {
                    position: absolute;
                    inset: 0;
                    margin: auto;
                    max-width: 100%;
                    max-height: 100%;
                    user-select: none;
                }
            </style>
        </head>
        <body>
            <video controls ${bAutoplay ? "autoplay" : ""} ${bMuted ? "muted" : ""}>
                <source src="${sSrc}">
            </video>
        </body>
    </html>
    `;
}

function isMediaRequested(url, mediaTypes) {
    return mediaTypes
        .toLowerCase()
        .split(",")
        .includes("." + url.split(".").pop().toLowerCase());
}

function onRequest(req, res, options, preventDefault) {
    if (req.method !== "GET") {
        return;
    }

    const url = req.url.split("?")[0];

    if (
        req.headers["accept"] &&
        req.headers["accept"].includes("text/html") &&
        isMediaRequested(url, options.filetypes)
    ) {
        if (typeof preventDefault === "function") preventDefault();

        let html = makeHtml(
            url.split("/").pop(),
            options.background,
            url,
            options.autoplay,
            options.muted,
        );
        html = bodyBuffer(html);

        res.setHeader("Content-Type", "text/html; chartset=utf-8");
        res.setHeader("Content-Length", html.byteLength);
        res.statusCode = 200;
        res.end(html);
    }
}

module.exports = { onStart, onRequest };
