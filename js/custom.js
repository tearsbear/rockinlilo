function getYoutubeThumbnail(url) {
    let idurl = "";
    let link = "https://img.youtube.com/vi/";
    if (url.split("/").pop().match("watch")) {
        idurl = url.split("=").pop();
    } else {
        idurl = url.split("/").pop();
    }

    let thumbnail = link + idurl + "/sddefault.jpg";

    return thumbnail;
}

let youtubeList = [{
    name: "Musisi VS Pandemi",
    url: "https://youtu.be/06LhXgGUcH4",
    thumbnail: getYoutubeThumbnail("https://youtu.be/06LhXgGUcH4"),
},
{
    name: "#MusisiLagiPPKM",
    url: " https://www.youtube.com/watch?v=Wfpu8Zx2-DA",
    thumbnail: getYoutubeThumbnail(
        " https://www.youtube.com/watch?v=Wfpu8Zx2-DA"
    ),
},
    // {
    //     name: "Live at Aquarius Studio",
    //     url: "https://www.youtube.com/watch?v=0sr7xlA9Dz4",
    //     thumbnail: getYoutubeThumbnail(
    //         "https://www.youtube.com/watch?v=0sr7xlA9Dz4"
    //     ),
    // },
    // {
    //     name: "Live at Aquarius Studio",
    //     url: "https://www.youtube.com/watch?v=Mp2gS9VNMU8",
    //     thumbnail: getYoutubeThumbnail(
    //         "https://www.youtube.com/watch?v=Mp2gS9VNMU8"
    //     ),
    // },
    // {
    //     name: "God Bless - Mulai Hari Ini",
    //     url: "https://www.youtube.com/watch?v=JXBnzm389uc",
    //     thumbnail: getYoutubeThumbnail(
    //         "https://www.youtube.com/watch?v=JXBnzm389uc"
    //     ),
    // },
    // {
    //     name: "God Bless - Semut Hitam",
    //     url: "https://www.youtube.com/watch?v=m8DEwCM1qPs",
    //     thumbnail: getYoutubeThumbnail(
    //         "https://www.youtube.com/watch?v=m8DEwCM1qPs"
    //     ),
    // },
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
        $(appendList).appendTo("#youtubeList");

        $(`.poptube-${idy}`).on("click", function () {
            let link = $(this).attr("href");
            let video = "";
            if (link.split("/").pop().match("watch")) {
                video = link.split("=").pop();
            } else {
                video = link.split("/").pop();
            }

            app.popup
                .create({
                    content: `<div class="popup">
                            <div class="navbar" style="position: fixed;">
                                <div class="navbar-bg bg-color3"></div>
                                <div class="navbar-inner sliding">
                                <div class="title text-color-white">Youtube Content</div>
                                <div class="right">
                                    <a class="link popup-close">
                                        <img src="../assets/Menus-close.png" width="30">
                                    </a>
                                </div>
                                </div>
                            </div>
                           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>`,
                })
                .open();
        });
    }
}

let showmore = false;

$('#btnMore').on('click', function () {
    if (showmore === false) {
        $(this).find('img').attr('src', '../assets/Lineup-btn-hidemore.png');
        $('#lineup-more').slideDown(500);
        showmore = true;
    } else {
        $(this).find('img').attr('src', '../assets/Lineup-btn-more.png');
        $('#lineup-more').animate({ "opacity": "hide", bottom: "100" }, 500);
        showmore = false;
    }

    console.log('hi')
})

showYoutubeContent();