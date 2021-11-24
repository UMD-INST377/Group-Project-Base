// Creating event listener for submit button on data entry
window.addEventListener('DOMContentLoaded', (event) => {
    const submit = document.querySelector('.zf-submitColor')
    submit.addEventListener('click', (event) => {
        submitted = true
        postVinyl()
    });

});

async function postVinyl() {
    if (submitted) {
        // Selecting all text inputs
        const texts = document.querySelectorAll('input')
            /*
            2 Album Name
            3 Artist Name
            4 Producer FN 5 Producer LN
            6 Release Date
            7 Track Num
            8 weight
            9 Yes 10 No (is_explicit)
            11 Album Pic Upload
            */

        // Selecting the select inputs
        const selects = document.querySelectorAll('select')
            /*
            0 Genre
            1 Hour 2 Minute 3 Seconds
            */

        // Separating inputs into array so they can be "stringified"
        const singerDict = { artist_name: texts[3].value };


        // Requesting POST for Singers table
        const responseSingers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singerDict)
        });
        console.log(responseSingers);



        // Separating inputs into array so they can be "stringified"
        const producerDict = { producer_fn: texts[4].value, producer_ln: texts[5].value };

        // Requesting POST for Producers table
        const responseProducers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producerDict)
        });
        console.log(responseProducers);

        //Gets singer_id for vinyl being input
        const singers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers')
            .then(function(response) {
                return response.json();
            });

        let singer_id_vinyl;
        singers.forEach((singer) => {
            if (singer['artist_name'] === texts[3].value) {
                singer_id_vinyl = singer['singer_id']
            }
        });

        //Gets producer_id for vinyl being input
        const producers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers')
            .then(function(response) {
                return response.json();
            });

        let producer_id_vinyl;
        producers.forEach((producer) => {
            if (`${producer['producer_fn']} ${producer['producer_ln']}` === `${texts[4].value} ${texts[5].value}`) {
                producer_id_vinyl = producer['producer_id']
            }
        });

        // console.log('end result')
        // console.log(singer_id_vinyl)
        // console.log(producer_id_vinyl)

        // Separating inputs into array so they can be "stringified"
        // setting variable for is_explicit so its easier to input into dictionary
        let explicit = 0
        if (texts[9].checked === true) {
            explicit = 1
        }

        const vinylDict = {
            singer_id: singer_id_vinyl,
            producer_id: producer_id_vinyl,
            album_name: texts[2].value,
            genre: selects[0].value,
            track_amount: texts[7].value,
            runtime: `${selects[1].value}:${selects[2].value}:${selects[3].value}`,
            first_available: texts[6].value,
            weight: texts[8].value,
            is_explicit: explicit
        };

        // Requesting POST for Vinyl table
        const responseVinyl = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vinylDict)
        });
        console.log(responseVinyl);
        console.log('finished post');

        alert('Album Successfully Submitted')
    }
}
