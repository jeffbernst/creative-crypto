// All of the code in this file is from the Steemit Condenser repository:
// https://github.com/steemit/condenser/blob/master/src/shared/HtmlReady.js
//
// The file has been trimmed down to only include the functionality for the function linkify and youtube link parsing.
//
// Here is a copy of the license from the original repo:
//
// Copyright (c) 2016 Steemit, Inc., and contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// The Steemit logo file that is stored in the repository is not included in the above license. The Steemit brand and logo are protected by intellectual property laws, including copyright and other proprietary rights of the United States and other countries. The purpose is to allow Steemit, Inc. to protect the brand and logo in ways that extend user safety. One may not make unauthorized commercial use of, reproduce, prepare derivative works, distribute copies, perform, or publicly display the Steemit logo or brand, except as permitted by the doctrine of fair use, or as authorized in writing by Steemit, Inc.

// import xmldom from 'xmldom';
// import tt from 'counterpart';
import linksRe, { any as linksAny } from './Links';
// import { validate_account_name } from 'app/utils/ChainValidation';
// import proxifyImageUrl from 'app/utils/ProxifyUrl';
// import * as Phishing from 'app/utils/Phishing';

// export const getPhishingWarningMessage = () => tt('g.phishy_message');
// export const getExternalLinkWarningMessage = () =>
//     tt('g.external_link_message');

// const noop = () => {};
// const DOMParser = new xmldom.DOMParser({
//     errorHandler: { warning: noop, error: noop },
// });
// const XMLSerializer = new xmldom.XMLSerializer();

/**
 * Functions performed by HTMLReady
 *
 * State reporting
 *  - hashtags: collect all #tags in content
 *  - usertags: collect all @mentions in content
 *  - htmltags: collect all html <tags> used (for validation)
 *  - images: collect all image URLs in content
 *  - links: collect all href URLs in content
 *
 * Mutations
 *  - link()
 *    - ensure all <a> href's begin with a protocol. prepend https:// otherwise.
 *  - iframe()
 *    - wrap all <iframe>s in <div class="videoWrapper"> for responsive sizing
 *  - img()
 *    - convert any <img> src IPFS prefixes to standard URL
 *    - change relative protocol to https://
 *  - linkifyNode()
 *    - scans text content to be turned into rich content
 *    - embedYouTubeNode()
 *      - identify plain youtube URLs and prep them for "rich embed"
 *    - linkify()
 *      - scan text for:
 *        - #tags, convert to <a> links
 *        - @mentions, convert to <a> links
 *        - naked URLs
 *          - if img URL, normalize URL and convert to <img> tag
 *          - otherwise, normalize URL and convert to <a> link
 *  - proxifyImages()
 *    - prepend proxy URL to any non-local <img> src's
 *
 * We could implement 2 levels of HTML mutation for maximum reuse:
 *  1. Normalization of HTML - non-proprietary, pre-rendering cleanup/normalization
 *    - (state reporting done at this level)
 *    - normalize URL protocols
 *    - convert naked URLs to images/links
 *    - convert embeddable URLs to <iframe>s
 *    - basic sanitization?
 *  2. Steemit.com Rendering - add in proprietary Steemit.com functions/links
 *    - convert <iframe>s to custom objects
 *    - linkify #tags and @mentions
 *    - proxify images
 *
 * TODO:
 *  - change ipfsPrefix(url) to normalizeUrl(url)
 *    - rewrite IPFS prefixes to valid URLs
 *    - schema normalization
 *    - gracefully handle protocols like ftp, mailto
 */

/** Split the HTML on top-level elements. This allows react to compare separately, preventing excessive re-rendering.
 * Used in MarkdownViewer.jsx
 */
// export function sectionHtml (html) {
//   const doc = DOMParser.parseFromString(html, 'text/html')
//   const sections = Array(...doc.childNodes).map(child => XMLSerializer.serializeToString(child))
//   return sections
// }

/** Embed videos, link mentions and hashtags, etc...
    If hideImages and mutate is set to true all images will be replaced
    by <pre> elements containing just the image url.
*/


export function linkify(content) {
    // hashtag
    // content = content.replace(/(^|\s)(#[-a-z\d]+)/gi, tag => {
    //     if (/#[\d]+$/.test(tag)) return tag; // Don't allow numbers to be tags
    //     const space = /^\s/.test(tag) ? tag[0] : '';
    //     const tag2 = tag.trim().substring(1);
    //     const tagLower = tag2.toLowerCase();
    //     // if (hashtags) hashtags.add(tagLower);
    //     // if (!mutate) return tag;
    //     return space + `<a href="https://steemit.com/trending/${tagLower}">${tag}</a>`;
    // });

    // usertag (mention)
    // Cribbed from https://github.com/twitter/twitter-text/blob/v1.14.7/js/twitter-text.js#L90
    // content = content.replace(
    //     /(^|[^a-zA-Z0-9_!#$%&*@＠\/]|(^|[^a-zA-Z0-9_+~.-\/#]))[@＠]([a-z][-\.a-z\d]+[a-z\d])/gi,
    //     (match, preceeding1, preceeding2, user) => {
    //         const userLower = user.toLowerCase();
    //         // const valid = validate_account_name(userLower) == null;
    //
    //         // if (valid && usertags) usertags.add(userLower);
    //         // if (usertags) usertags.add(userLower);
    //
    //         // const preceedings = (preceeding1 || '') + (preceeding2 || ''); // include the preceeding matches if they exist
    //
    //         // if (!mutate) return `${preceedings}${user}`;
    //
    //         return `<a href="https://steemit.com/@${userLower}">@${user}</a>`
    //     }
    // );

    content = content.replace(linksAny('gi'), ln => {
        if (linksRe.image.test(ln)) {
            // if (images) images.add(ln);
            return `<img src="${ln}" />`;
        }

        // do not linkify .exe or .zip urls
        // if (/\.(zip|exe)$/i.test(ln)) return ln;

        // do not linkify phishy links
        // if (Phishing.looksPhishy(ln))
        //     return `<div title='${getPhishingWarningMessage()}' class='phishy'>${
        //         ln
        //     }</div>`;

        // if (links) links.add(ln);
        return `<a href="${ln}">${ln}</a>`;
    });
    return content;
}

// function embedYouTubeNode(child, links, images) {
//     try {
//         if (!child.data) return false;
//         const data = child.data;
//         const yt = youTubeId(data);
//         if (!yt) return false;
//
//         const v = DOMParser.parseFromString(`~~~ embed:${yt.id} youtube ~~~`);
//         child.parentNode.replaceChild(v, child);
//         if (links) links.add(yt.url);
//         if (images)
//             images.add('https://img.youtube.com/vi/' + yt.id + '/0.jpg');
//         return true;
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }
//
// /** @return {id, url} or <b>null</b> */
// function youTubeId(data) {
//     if (!data) return null;
//
//     const m1 = data.match(linksRe.youTube);
//     const url = m1 ? m1[0] : null;
//     if (!url) return null;
//
//     const m2 = url.match(linksRe.youTubeId);
//     const id = m2 && m2.length >= 2 ? m2[1] : null;
//     if (!id) return null;
//
//     return { id, url };
// }


