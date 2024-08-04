export interface SocialProfileLinks {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    spotify?: string;
    youtube?: string;
    apple?: string;
}

export interface Link { text: string; href: string; imgSrc?: string | null }

export interface UserData {
    name: string;
    avatar: string;
    subTitle: string;
    banner: string
    profileLinks: SocialProfileLinks
    links: Link[];
    featuredLink: {
        title: string;
        href: string;
        subtitle?: string;
    },

}

const pharrellLinks = [
    {
        href: "http://yt.be/sitw",
        text: "SOMETHING IN THE WATER 2023 on YouTube",
        imgSrc:
            "https://d1fdloi71mui9q.cloudfront.net/vEliC3mqRUGRGmfUHg6A_maxresdefault.jpg",
    },
    {
        href: "http://www.somethinginthewater.com/",
        text: "SOMETHING IN THE WATER 2023",
        imgSrc: null,
    },
    {
        href: "https://pharrellwilliams.lnk.to/DownInAtlanta",
        text: "Watch and listen: DOWN IN ATLANTA feat. Travis Scott",
        imgSrc: null,
    },
    {
        href: "https://www.tiktok.com/@pharrell",
        text: "Follow on TikTok",
        imgSrc: null,
    },
    {
        href: "https://www.joopiter.com/",
        text: "JOOPITER",
        imgSrc:
            "https://d1fdloi71mui9q.cloudfront.net/k8cNCzE6QnKXF835ZYSa_favicon.ico",
    },
    {
        href: "https://www.bbcicecream.com/collections/billionaire-boys-club-x-yankees",
        text: "Shop New York Yankees x Billionaire Boys Club",
        imgSrc: null,
    },
    {
        href: "https://www.youtube.com/watch?v=w2Tl4t0Bwv4&ab_channel=TOBENWIGWEVEVO",
        text: "Watch LORD FORGIVE ME feat. Tobe Nwigwe, Fat, and Olu of Earthgang",
        imgSrc: null,
    },
    {
        href: "https://www.humanrace.com/shop-all-adidas?&utm_medium=social&utm_source=instagram&utm_campaign=premium_basics&utm_content=pharrell&utm_term=pharrell",
        text: "Shop Humanrace Premium Basics",
        imgSrc: null,
    },
    {
        href: "https://www.youtube.com/watch?v=D7U5jTbp0q8&ab_channel=PharrellWilliams",
        text: "Watch STAY WITH ME Music Video with Calvin Harris, Halsey, and Justin Timberlake on YouTube",
        imgSrc: null,
    },
    {
        href: "https://www.humanrace.com/shop-all-suncare",
        text: "Shop Humanrace Suncare",
        imgSrc: null,
    },
    {
        href: "https://pharrellwilliams.lnk.to/StayWithMe",
        text: "Pre-save STAY WITH ME with Calvin Harris, Halsey, and Justin Timberlake",
        imgSrc: null,
    },
    {
        href: "https://youtu.be/X3SgRAhhHLc",
        text: "Watch CASH IN CASH OUT Live at SITW",
        imgSrc: null,
    },
    {
        href: "https://shop.pharrellwilliams.com/",
        text: "Pre-order CASH IN CASH OUT merch by Cactus Plant Flea Market",
        imgSrc: null,
    },
    {
        href: "https://pharrellwilliams.lnk.to/CICO",
        text: "Listen to CASH IN CASH OUT feat. Tyler, The Creator and 21 Savage",
        imgSrc: null,
    },
    {
        href: "http://juneteenthpledge.com/",
        text: "Juneteenth Pledge",
        imgSrc: null,
    },
    {
        href: "http://blackambitionprize.com/",
        text: "Black Ambition",
        imgSrc: null,
    },
    {
        href: "https://teamyellow.org/",
        text: "YELLOW",
        imgSrc: null,
    },
    {
        href: "https://www.humanrace.com/shop-all-bodycare",
        text: "Humanrace",
        imgSrc: null,
    },
    {
        href: "https://www.adidas.com/pharrell",
        text: "Pharrell x Adidas",
        imgSrc: null,
    },
    {
        href: "https://www.bbcicecream.com/",
        text: "BBC/ICECREAM",
        imgSrc: null,
    },
    {
        href: "http://apple.co/othertone",
        text: "OTHERtone",
        imgSrc: null,
    },
    {
        href: "https://www.masterclass.com/powerofempathy",
        text: "Masterclass: The Power of Empathy",
        imgSrc: null,
    },
    {
        href: "https://www.thegoodtimehotel.com/",
        text: "The Goodtime Hotel",
        imgSrc: null,
    },
    {
        href: "https://www.ssense.com/en-us/editorial/music/pharrell-williams-finds-his-balance-with-humanrace",
        text: "SSENSE Fall-Winter 2021",
        imgSrc: null,
    },
    {
        href: "https://youtu.be/_NoH413CM74",
        text: "Complex Sneaker Shopping",
        imgSrc: null,
    },
    {
        href: "https://www.townandcountrymag.com/society/money-and-power/a36489849/pharrell-williams-interview-black-ambition/",
        text: "TOWN & COUNTRY 2021 Philanthropy Issue",
        imgSrc: null,
    },
    {
        href: "https://otherware.co/",
        text: "OTHERWARE",
        imgSrc: null,
    },
    {
        href: "https://music.apple.com/us/artist/pharrell-williams/1361068",
        text: "Listen on Apple Music",
        imgSrc: null,
    },
    {
        href: "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8?si=oYQez6zJRgOWID4KYYNZfw",
        text: "Listen on Spotify",
        imgSrc: null,
    },
    {
        href: "https://pharrellwilliams.com/",
        text: "PHARRELLWILLIAMS.COM",
        imgSrc: null,
    },
    {
        href: "https://facebook.com/pharrell",
        text: "",
        imgSrc: null,
    },
    {
        href: "https://twitter.com/pharrell",
        text: "",
        imgSrc: null,
    },
    {
        href: "https://instagram.com/pharrell",
        text: "",
        imgSrc: null,
    },
    {
        href: "https://tiktok.com/@pharrell",
        text: "",
        imgSrc: null,
    },
    {
        href: "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
        text: "",
        imgSrc: null,
    },
    {
        href: "https://www.youtube.com/pharrell",
        text: "",
        imgSrc: null,
    },
    {
        href: "https://music.apple.com/us/artist/pharrell-williams/1361068",
        text: "",
        imgSrc: null,
    },
];


export const userData: UserData = {
    avatar:
        "https://d1fdloi71mui9q.cloudfront.net/kOyHLAdQcSwyPLOH0KHg_aq7CNej4S7yc073c",
    banner: "https://media.discordapp.net/attachments/1033868987542536252/1117405659328172126/0xBhaisaab_a_concert_photo_of_pharrell_williams_hi-res_he_is_ra_331325e4-0ee1-4e74-8dfa-7c1336eab3b6.png?width=1138&height=1138",
    name: "@pharrell",
    subTitle: "",
    links: pharrellLinks,
    featuredLink: {
        title: "I am on tour",
        href: "https://www.pharrellwilliams.com/tour",
        subtitle: "Pre-book the tickets now"
    },
    profileLinks: {
        facebook: "https://facebook.com/pharrell",
        twitter: "https://twitter.com/pharrell",
        instagram: "https://instagram.com/pharrell",
        tiktok: "https://tiktok.com/@pharrell",
        spotify: "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
        youtube: "https://www.youtube.com/pharrell",
        apple: "https://music.apple.com/us/artist/pharrell-williams/1361068",
    }
}