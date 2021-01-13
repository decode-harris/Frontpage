
const unsplash = () => {
    
    // unsplash access key
    let accessKey = 'GKDysZJ3WHPqrajmxdnsOLeq_Ek_MaJYN19BgNT2_Mc';

    // user search element selectors
    const searchbar = document.querySelector('#searchbar');
    const searchbtn = document.querySelector('#searchbtn');

    // event [ searchbtn ]
    searchbtn.addEventListener('click', (event)=> {

        // prevent form submit
        event.preventDefault();

        // search value variable
        let search = searchbar.value;
        // test search value
        console.log(search);

        // unplash url [ api url + search parameters + my access key + response page limit ]
        let url = 'https://api.unsplash.com/search/photos?query='+search+'&client_id='+accessKey+'&per_page=50';

        // fetch [ headers ]
        const headers = new Headers();

        // fetch [ request ]
        const request = new Request(url, {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default',
        });
        
        // fetch [ response ]
        fetch(request)
            // recieve the request, covert into json object
            .then(response => response.json())
            
            // after conversion, console log object data
            .then(data => {
                
                // test json data response
                console.log(data);
                
                /*
                    end-points reference

                        data.results[0].urls - obtain results object 0's urls data

                    end-points structure 

                        data
                        results(object array)
                        [x](reference array)
                        value(urls for photos) 
                        type(pre-sized images)

                */

                // end-point [ id ]
                let id = data.results[0].id;

                // end-point [ urls : all ]
                let urls = data.results[0].urls;

                // end-point [ urls : full ] - dont use on production ( slow load )
                let full = data.results[0].urls.full;

                // end-point [ urls : raw ] - use as placeholder / lazy loading
                let raw = data.results[0].urls.raw;

                // end-point [ urls : reg ] - use on desktop gallery
                let reg = data.results[0].urls.regular;

                // end-point [ urls : small ] - use on mobile gallery
                let sml = data.results[0].urls.small;

                // end-point [ urls : thumb ] - use as thumbnail ( mobile & tablet )
                let thb = data.results[0].urls.thumb;

                let alt = data.results[0].alt_description;

                // test specific array values
                console.log('id : ' + id);
                console.log('url : ' + urls);
                console.log('full : ' + full);
                console.log('raw : ' + raw);
                console.log('regular : ' + reg);
                console.log('small : ' + sml);
                console.log('thumb : ' + thb);
                
                // photo element selectors
                let ex01 =  document.querySelector('.ex01');
                let ex02 =  document.querySelector('.ex02');
                let ex03 =  document.querySelector('.ex03');
                let ex04 =  document.querySelector('.ex04');
                let ex05 =  document.querySelector('.ex05');
                let ex06 =  document.querySelector('.ex06');
                let ex07 =  document.querySelector('.ex07');
                let ex08 =  document.querySelector('.ex08');

                // photo variable data results [ regular image ]
                let ex01_photo = data.results[1].urls.regular;
                let ex02_photo = data.results[2].urls.regular;
                let ex03_photo = data.results[3].urls.regular;
                let ex04_photo = data.results[4].urls.regular;
                let ex05_photo = data.results[5].urls.regular;
                let ex06_photo = data.results[6].urls.regular;
                let ex07_photo = data.results[7].urls.regular;
                let ex08_photo = data.results[8].urls.regular;

                // assign first 08 results to image source
                ex01.setAttribute('src', ex01_photo);
                ex02.setAttribute('src', ex02_photo);
                ex03.setAttribute('src', ex03_photo);
                ex04.setAttribute('src', ex04_photo);
                ex05.setAttribute('src', ex05_photo);
                ex06.setAttribute('src', ex06_photo);
                ex07.setAttribute('src', ex07_photo);
                ex08.setAttribute('src', ex08_photo);

                // assign current search paramaters to heading element
                let current = document.querySelector('.current');
                current.innerHTML = `" ${search} "`;

            }); // fetch [ end ]
    
    }); // event [ end ]

} // unsplash [ end ]

// init [ unsplash ] function
unsplash();

// function [ views ] - app grid views on production
const views = () => {

    let btn_x2 = document.querySelector('.btn_x2');
    let btn_x3 = document.querySelector('.btn_x3');
    let btn_x4 = document.querySelector('.btn_x4');

    let gallery = document.querySelector('#gallery');

    gallery.addEventListener('change', ()=> {

        if(gallery.className == 'grid-x2' || gallery.className == 'grid-x3' || gallery.className == 'grid-x4') {
            gallery.className = 'grid';

            // test
            console.log('change : ' + gallery);
        }

    });

    btn_x2.addEventListener('click', ()=> {

        gallery.setAttribute('class', 'grid-x2');

        // test
        console.log('btn x2 : ' + btn_x2);

    });
    btn_x3.addEventListener('click', ()=> {

        gallery.setAttribute('class', 'grid-x3');

        // test
        console.log('btn x3 : ' + btn_x3);

    });
    btn_x4.addEventListener('click', ()=> {

        gallery.setAttribute('class', 'grid-x4');

        // test
        console.log('btn x4 : ' + btn_x4);

    });

}

// init [ views ] function
views();


// import { unsplash } from 'unsplash-js';
// const { get } = require("unsplash-js/dist/methods/collections");




// import fetch from 'node-fetch';
// global.fetch = fetch;

// // browser
// import 'whatwg-fetch';


// browser
// unsplash = createApi({  });


// const MY_ACCESS_KEY = 'GKDysZJ3WHPqrajmxdnsOLeq_Ek_MaJYN19BgNT2_Mc';

// const unsplash = createApi({

//     accessKey: 'MY_ACCESS_KEY',

//     // fetch options to be sent with every request
//     headers: { 'X-Custom-Header': 'foo' },

// });

// unsplash.photos.get(
//     { photoId: '123' },
//     // fetch options to be sent on with _this_ request
//     { headers: { 'X-Custom-Header-2': 'bar' } },
// );