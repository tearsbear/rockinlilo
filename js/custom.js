function getYoutubeThumbnail(url) {
    let idurl = '';
    let link = 'https://img.youtube.com/vi/';
    if (url.split("/").pop().match('watch')) {
        idurl = url.split("=").pop()
    } else {
        idurl = url.split("/").pop()
    }

    let thumbnail = link + idurl + '/sddefault.jpg';

    return thumbnail;
}

let youtubeList = [
    {
        name: 'Musisi VS Pandemi',
        url: 'https://youtu.be/06LhXgGUcH4',
        thumbnail: getYoutubeThumbnail('https://youtu.be/06LhXgGUcH4')
    },
    {
        name: 'Godbless Ngobryls',
        url: 'https://youtu.be/AhGrggD7JkE',
        thumbnail: getYoutubeThumbnail('https://youtu.be/AhGrggD7JkE')
    },
    {
        name: 'Live at Aquarius Studio',
        url: 'https://www.youtube.com/watch?v=0sr7xlA9Dz4',
        thumbnail: getYoutubeThumbnail('https://www.youtube.com/watch?v=0sr7xlA9Dz4')
    },
    {
        name: 'Live at Aquarius Studio',
        url: 'https://www.youtube.com/watch?v=Mp2gS9VNMU8',
        thumbnail: getYoutubeThumbnail('https://www.youtube.com/watch?v=Mp2gS9VNMU8')
    },
    {
        name: 'God Bless - Mulai Hari Ini',
        url: 'https://www.youtube.com/watch?v=JXBnzm389uc',
        thumbnail: getYoutubeThumbnail('https://www.youtube.com/watch?v=JXBnzm389uc')
    },
    {
        name: 'God Bless - Semut Hitam',
        url: 'https://www.youtube.com/watch?v=m8DEwCM1qPs',
        thumbnail: getYoutubeThumbnail('https://www.youtube.com/watch?v=m8DEwCM1qPs')
    },
];

function showYoutubeContent() {
    for (idy = 0; idy < youtubeList.length; idy++) {
        let appendList = ` <div class="col-50 contents">
                                    <div class="bg-color3 youtube-thumbnail">
                                        <img src="${youtubeList[idy].thumbnail}" width="100%"
                                            alt="">
                                        <div class="centered">
                                            <a href="${youtubeList[idy].url}" class="link poptube-${idy}">
                                                <img src="assets/Vector.png" width="30" alt="">
                                            </a>
                                        </div>
                                    </div>
                                    <h2 class="font-exo-bold color2">${youtubeList[idy].name}</h2>
                            </div>`;
        $(appendList).appendTo('#youtubeList');

        $(`.poptube-${idy}`).on('click', function () {
            let link = $(this).attr('href');
            let video = '';
            if (link.split("/").pop().match('watch')) {
                video = link.split("=").pop();
            } else {
                video = link.split("/").pop();
            }

            app.popup.create({
                content: `<div class="popup">
                           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>`
            }).open();
        });
    }

}

showYoutubeContent()
