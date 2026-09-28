# Inline Media Player Plugin

A [Simple Web Server](https://simplewebserver.org/) very basic plugin that opens supported media files in your browser’s native player when you select them from a directory listing.

## Installation

1. In the app, go to **Settings > Add Plugin** and select a ZIP file or a folder containing this repository’s files.
2. Open your website’s settings in Simple Web Server and enable **Inline Media Player**.
3. In the **File Types** setting, add the media types you want to open in the browser’s player.
4. Make sure **Show directory listing** is enabled in the website’s basic settings.
5. Open the directory listing and select a media file.

## Plugin Settings

### Autoplay

[`autoplay`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video#autoplay): If enabled, playback starts as soon as enough media has loaded.

> [!NOTE]
> Modern browsers may block autoplay when a video has sound or is not muted, to avoid playing audio unexpectedly.

### Muted

[`muted`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video#muted): If enabled, the media is muted by default.

### File Types

A comma-separated list of media types to open in the browser’s native player.

> [!NOTE]
> Whether a media file can play in the browser depends on browser support, the codecs used in the file, and the codecs available on your operating system.

### Background Color

The background color of the media page.
