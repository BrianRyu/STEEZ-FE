// reducer file handles all the switch cases
// import the actions from the dispatch file
const initialState = {
    products:
    [
        {
          "name": "Yeezy Boost 700 'Inertia'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/019/367/696/original/479750_01.jpg.jpeg",
          "price": "$300",
          "description": "The adidas Yeezy Boost 700 ‘Inertia’ is part of the Yeezy Season 8 lineup that launched March 2019. The ‘Inertia’ colorway showcases the original 700 upper, with a heavily paneled construction made with premium suede, mesh and smooth leather sections. Cast primarily in cool grey tones, the sneaker includes hits of Tangerine for contrast. The shoe’s signature chunky midsole is equipped with full-length Boost cushioning for responsive comfort.",
          "size": ""
        },
        {
          "name": "Air Force 1 '07 Low 'University Blue'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/018/898/030/original/482531_01.jpg.jpeg",
          "price": "$90",
          "description": "null\"Yeezy Boost 350 V2 'Zebra'",
          "size": ""
        },
        {
          "name": "Wmns Air Jordan 1 Retro High OG 'Twist'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_pictures/images/020/802/550/original/CD0461_007.png.png",
          "price": "$185",
          "description": null,
          "size": ""
        },
        {
          "name": "Steven Harrington x Air Force 1 Low Flyleather QS 'Earth Day'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/020/881/704/original/508101_01.jpg.jpeg",
          "price": "$210",
          "description": null,
          "size": ""
        },
        {
          "name": "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/018/783/118/original/488879_01.jpg.jpeg",
          "price": "$725",
          "description": "The Travis Scott x Air Jordan 1 Retro High features a new look on the iconic silhouette, thanks to an oversized backward-facing Swoosh on the lateral side. A traditionally oriented Swoosh graces the medial side of the upper, which is built with a blend of white leather and brown suede. Additional unique details include a double-layer construction on the collar and Scott’s crudely drawn face logo embossed on the heel.",
          "size": ""
        },
        {
          "name": "Yeezy Boost 350 V2 GID 'Glow'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/021/357/867/original/508082_01.jpg.jpeg",
          "price": "$450",
          "description": null,
          "size": ""
        },
        {
          "name": "Yeezy Boost 350 V2 'Clay'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/019/471/970/original/487214_01.jpg.jpeg",
          "price": "$240",
          "description": "The adidas Yeezy Boost 350 V2 ‘Clay’ updates the silhouette with a warm palette and semi-translucent, three-tone vent at the side. This ‘Clay’ colorway retains the stand-out features of the original 350 V2 shoe, first seen in September 2016, including a flexible Primeknit upper and full-length Boost cushioning. This shoe released March 2019 exclusively in select cities in North America and Latin America.",
          "size": ""
        },
        {
          "name": "Air Fear Of God Raid 'Light Bone'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/020/627/595/original/487222_01.jpg.jpeg",
          "price": "$190",
          "description": "Created by acclaimed streetwear designer Jerry Lorenzo for release in April 2019, the Air Fear of God Raid 'Light Bone' draws inspiration from Lorenzo's favorite silhouette, the Air Raid outdoor basketball shoe first introduced in 1992. Incorporating the same distinct cross straps into the Light Bone upper, a contrasting black Swoosh stands out along with the visible double-stacked Zoom Air units. Modern design lines combine with premium comfort to define this lifestyle shoe.",
          "size": ""
        },
        {
          "name": "Yeezy Boost 350 V2 'Black Non-Reflective'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_pictures/images/020/624/696/original/FU9013.png.png",
          "price": "$770",
          "description": null,
          "size": ""
        },
        {
          "name": "Air Jordan 6 Retro 'Infrared' 2019",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/018/675/318/original/464372_01.jpg.jpeg",
          "price": "$205",
          "description": "The 2019 edition of the Air Jordan 6 Retro ‘Infrared’ is true to the original colorway, which Michael Jordan wore when he captured his first NBA title. Dressed primarily in black nubuck with a reflective 3M layer underneath, the mid-top features Infrared accents on the midsole, heel tab and lace lock. Nike Air branding adorns the heel and sockliner, an OG detail last seen on the 2000 retro.",
          "size": ""
        },
        {
          "name": "Tyler, The Creator x Foot Locker x Chuck 70 'Artist Series'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/018/552/850/original/476518_01.jpg.jpeg",
          "price": "$110",
          "description": "Tyler, the Creator teamed up with Foot Locker on the ‘Artist Series’ edition of the Converse Chuck 70, featuring an off-white canvas upper printed with original artwork from Wyatt Navarro. The heightened foxing that’s a signature design element of the silhouette is adorned with contrasting stripes in blue and orange. A gum rubber outsole delivers traction underfoot.",
          "size": ""
        },
        {
          "name": "Air Jordan 4 Retro OG 'Bred' 2019",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/020/806/492/original/461782_01.jpg.jpeg",
          "price": "$230",
          "description": "The 2019 edition of the Air Jordan 4 ‘Bred’ celebrates the 30th anniversary of the classic silhouette, appearing in the same colorway that Michael Jordan wore when he sank ‘The Shot’ during the first round of the 1989 NBA playoffs. It’s rendered in a build that’s faithful to the original, complete with a black nubuck upper, visible Air Sole cushioning underfoot and Nike Air branding on the heel.",
          "size": ""
        },
        {
          "name": "Yeezy Boost 350 V2 'Cream White / Triple White'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/014/822/692/original/116662_01.jpg.jpeg",
          "price": "$230",
          "description": "First released on April 29, 2017, the Yeezy Boost 350 V2 ‘Cream White’ combines a cream Primeknit upper with tonal cream SPLY 350 branding, and a translucent white midsole housing full-length Boost. Released again in October 2018, this retro helped fulfill Kanye West’s oft-repeated ‘YEEZYs for everyone’ Twitter mantra, as adidas organized the biggest drop in Yeezy history by promising pre-sale to anyone who signed up on the website. Similar to the first release, the ‘Triple White’ 2018 model features a Primeknit upper, a Boost midsole and custom adidas and Yeezy co-branding on the insole.",
          "size": ""
        },
        {
          "name": "Yeezy Boost 700 'Analog'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/020/287/582/original/480136_01.jpg.jpeg",
          "price": "$300",
          "description": "Music and fashion icon Kanye West debuted the Yeezy Boost 700 at his Yeezy Season 5 fashion show in February 2017. This 'Analog' colorway released April 2019, and provides a monochromatic look to the acclaimed shoe. Dressed in shades of off white, the upper features a variety of panels constructed of leather, mesh, suede with a small hit of reflective material near the heel. Full-length Boost cushioning is embedded in the signature chunky midsole while a black rubber outsole provides contrast.",
          "size": ""
        },
        {
          "name": "Air Jordan 11 Retro 'Concord' 2018",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/016/106/997/original/351614_01.jpg.jpeg",
          "price": "$230",
          "description": "The 2018 edition of the Air Jordan 11 Retro ‘Concord’ features ‘45’ stamped on the black heel tab—a nod to the jersey number that Michael Jordan wore upon his return to basketball following his first retirement. The rest of the build keeps the shoe’s signature details intact, including a white ballistic mesh upper, black patent leather overlays and an icy translucent outsole underfoot.",
          "size": ""
        },
        {
          "name": "Gucci Pursuit '72 Rubber Slide 'Black'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/009/249/035/original/259509_01.jpg.jpeg",
          "price": "$210",
          "description": "The Gucci Pursuit ‘72 Rubber Slide in ‘Black’ sneaker pays homage to the fashion house's roots with the iconic Web stripe—first developed by Gucci in the 1950s—taking the stage. The minimal, open-toe silhouette features a thick black rubber sole with a rounded shape. The top portion of the slide is a rubber strap displaying the Gucci Web green and red striped motif, and the design is finished with a Gucci logo embossed on the outer midsole.",
          "size": ""
        },
        {
          "name": "Air Force 1 '07 'White'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/010/222/350/original/240_01.jpg.jpeg",
          "price": "$90",
          "description": "The Nike Air Force 1 Low is a modern take on the iconic white on white low top Air Force 1. Released in honor of the classic shoe's 25th anniversary in 2007, the sneaker features an upgraded, crispier 10A full grain leather white upper with a matching white Air-cushioned rubber sole.",
          "size": ""
        },
        {
          "name": "Air Jordan 1 Retro High OG 'Crimson Tint'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/020/249/064/original/485842_01.jpg.jpeg",
          "price": "$160",
          "description": "The Air Jordan 1 Retro High OG ‘Crimson Tint’ showcases a simple two-tone design, executed on an all-leather build that incorporates both tumbled leather and smooth full-grain leather. The latter is used on the toe box, Swoosh, collar and heel panel, all finished in Crimson Tint. The black tumbled leather overlays are matched by black laces and a black nylon tongue, topped with a woven Nike tag.",
          "size": ""
        },
        {
          "name": "Cactus Plant Flea Market x Wmns Air VaporMax 2019 'CPFM'",
          "img_url": "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/021/321/840/original/503571_01.jpg.jpeg",
          "price": "$585",
          "description": "In honor of Air Max Day 2019, Nike collaborated with designer Cynthia Lu for an avant-garde take on the VaporMax, which resulted in the Cactus Plant Flea Market x Air VaporMax 2019 sneaker. Released May 2019, the deconstructed design features an exposed-seam mesh upper, underscored by a cord Swoosh and a smiley face at heel, a nod to Nike’s ‘Just Do It’ campaign. Below, the design is padded with its trademark full-length VaporMax bag, completed in a multi-color finish.",
          "size": ""
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state
    }
}

export default reducer