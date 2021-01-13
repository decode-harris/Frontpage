const rss = 'https://www.reddit.com/r/webdev/new.rss';
const webdev = 'https://www.reddit.com/r/webdev/new?=new.rss';
const bbc = 'http://feeds.bbci.co.uk/news/england/london/rss.xml';
const rssfeed = 'https://rss.app/feeds/bcJDNnEawDuy9LuX.xml';
const rss_tech = 'https://www.news.com.au/content-feeds/latest-news-technology/';
const accessKey = '	vJaADbpDv_pwdr3jiYjlqyYkE6zSgA';

// function [ showfeed ]
showfeed = () => {

    // article element creator
    let article = document.createElement('article');

    // link element creator
    let link = document.createElement('a');
    link.setAttribute('href', entry.link);
    link.setAttribute('target', '__blank');

    // title [ h3 ] element creator
    title = document.createElement('h3');
    title.innerText = entry.title;

    // append title to link element
    link.appendChild(title);

    // append link to article element
    article.appendChild(link);

    // feed container selector
    const feed = document.querySelector('#feed');

    // append article to feed element
    feed.appendChild(article);

    // test
    console.log(feed);

}

getRssFeed = () => {

    const headers = new Headers();

    const request = new Request(rss, {
        methood: 'GET',
        accessKey: accessKey,
        headers: headers,
        mode: 'cors',
        cache: 'default',
    });

    fetch(request)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then(data => {

            let items = data.querySelectorAll('item');

            console.log(data);

            let title = data.querySelectorAll('title');
            console.log(title);

            let link = data.querySelectorAll('link');
            console.log(link);

            let description = data.querySelectorAll('description');
            console.log(description);

            let html = ``;

            html += `<h3>${data.querySelector('title').innerHTML}</h3>`;
            html += `<p>${data.querySelector('description').innerHTML}</p>`;

            // feed
            html += `<div class="feeds">`


                items.forEach(el => {
                    html += `

                    <article class="xml-data">
                        <h3>
                            <a href="${el.querySelector('link').innerHTML}" target="__blank" rel="noopener">
                            ${el.querySelector('title').innerHTML}
                            </a>
                        </h3>
                        <p>
                            ${el.querySelector('description').innerHTML}
                        </p>
                    </article>
                    `;

                    let ed = el.querySelector('title').innerHTML
                    console.log(ed);
                });

            html += `</div>`;
            
            document.getElementById('feed').insertAdjacentHTML('beforeend', html);
        });

}

getRssFeed();

// load [ xml ] doc
loadxmldoc = () => {

    // request new xml
    let xttp = new XMLHttpRequest();
    // test
    console.log('load : 01 [ make request ]');

    // listen for xttp state changes
    xttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            getxmldoc(this);
            // test
            console.log('load : 02 [ validation success ]');
        }
    };

    // request to open [ rss ] xml doc
    xttp.open('GET', 'rss.xml', true);
    // test
    console.log('load : 03 [ open request ]');

    // send xttp request
    xttp.send();
    // test
    console.log('load : 04 [ send request ]')

}












// import {  } from "./rss-parser.min";
// let parser = new RSSParser();
// const rssfeed = 'https://rss.app/feeds/bcJDNnEawDuy9LuX.xml';
// parser.parseURL('https://rss.app/feeds/bcJDNnEawDuy9LuX.xml', (err, feed)=> {

//     if (err) throw err;

//     for (let i = 0; i < 3; i++) {
//         const entry = feed.items[i];

//         showfeed();
//     }

// });



// fetch(rss).then((res) => {
//     res.text().then((htmlTxt) => {
//         let domParser = new DOMParser();
//         let doc = domParser.parseFromString(htmlTxt, 'text/html');

//         let feedUrl = doc.querySelector('link[type="application/rss+xml"]');

//     })
// }).catch(() => console.error('error in fetching website'));

// output elements [ html ]
// const title = document.querySelector('.title');
// const desc = document.querySelector('.desc');
// title.innerHTML = 'rss feed title';
// desc.innerHTML = 'rss feed info';

// fetch(rssfeed)


//     .then(response => {
//         let dp = new DOMParser();
//         desc = dp.parseFromString(response, 'text/xml');
//     })
    





// // [ xml ] file
// let xmlDoc;
// let request;
// let xml = 'rss.xml';
// let doctype = 'unknown';

// // function [ loadxml ]
// loadxml = () => {
//     try {
//         // IE
//         if (window.ActiveXObject) {
//             request = new ActiveXObject('Microsoft.XMLHTTP');
//         }
//         else {
//             request = new window.XMLHttpRequest();
//         }
//         request.open('GET', xml, true); // make async
//         request.send(null);
//         request.onreadystatechange = showfeed;
//     }
//     catch (exc) {
//         alert('error! ' + exc.message);
//     }
// }

// // function [ showfeed ]
// showfeed = () => {

//     // request a response from xml doc
//     xmlDoc = request.responseXML.documentElement;

//     // display items limit
//     let items = 10;
//     let body = '';

//     let browser = navigator.appName;

//     // xml element selectors
//     let title = xml.getElementsByTagName('title');
//     let link = xml.getElementsByTagName('link');
    

//     // html element selectors
//     let feed = document.querySelector('#feed');
//     let info = document.querySelector('#info');

//     for (i = 0; i < items.length; i++) {

//         body = body + "<a href='" + link[i].firstChild.nodeValue + "'>" + title[i];

//     }
//     info.innerHTML = 'Browser: ' + browser + 'Doctype: ' + doctype;
//     feed.innerHTML = body;


    
// }

