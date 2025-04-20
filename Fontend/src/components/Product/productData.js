// Product/productData.js
const traditionalClothes = [
      {
        id: 1,
        title: "Ankara Wrap Dress",
        price: 45.99,
        image: "https://i.pinimg.com/originals/1f/4c/c2/1f4cc26213466e1c4c391e53bbd11469.jpg",
        description: "Vibrant Nigerian Ankara fabric",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 32 }
      },
   
      {
        id: 2,
        title: "Habesha Kemis ",
        price: 20.99,
        image: "https://www.habeshadress.net/cdn/shop/files/photo_2024-04-25_12-43-54_4_2048x.jpg?v=1714062696",
        description: "Handwoven white cotton dress with intricate Ethiopian embroidery.",
        category: "Traditional Clothes",
        rating: { rate: 3.8, count: 62 }
      },
      {
        id: 3,
        title: "Netela Shawl",
        price: 15.99,
        image: "https://i.etsystatic.com/16420648/r/il/e5ce3c/3657325846/il_1140xN.3657325846_1fhq.jpg",
        description: "Lightweight scarf with colorful borders, worn over traditional attire.",
        category: "Traditional Clothes",
        rating: { rate: 2.8, count: 72 }
      },
      {
        id: 4,
        title: "Gabi Blanket",
        price: 55.99,
        image: "https://i.pinimg.com/736x/92/5b/ab/925babaa73c7c971c66bbae1fbf01aba.jpg",
        description: "Thick cotton wrap used for warmth and cultural ceremonies.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 32 }
      },
      {
        // https://th.bing.com/th/id/OIP.pJx1ATaT5TOOwTyVcOTE7gHaHa?w=600&h=600&rs=1&pid=ImgDetMain
        id: 5,
        title: "Tibeb Dress",
        price: 45.99,
        image: "https://kokeeti.com/wp-content/uploads/2024/01/18.png",
        description: "Vibrant dress with hand-stitched patterns, inspired by Ethiopian tribes.",
        category: "Traditional Clothes",
        rating: { rate: 3.8, count: 52 }
      },
      {
        // https://th.bing.com/th/id/OIP.pJx1ATaT5TOOwTyVcOTE7gHaHa?w=600&h=600&rs=1&pid=ImgDetMain
        id: 6,
        title: "Kuta Scarf ",
        price: 45.99,
        image: "https://th.bing.com/th/id/OIP.pJx1ATaT5TOOwTyVcOTE7gHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
        description: " Shemma cotton scarf with geometric designs.",
        category: "Traditional Clothes",
        rating: { rate: 3.8, count: 52 }
      },
      {
        id: 7,
        title: "Ethiopian Traditional Kaba",
        price: 45.99,
        image: "https://i.pinimg.com/736x/c7/76/c1/c776c17c8da833deda7a6d82f1989a20.jpg",
        description: " Traditional Ethiopian robe in neutral tones.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 56 }
      },
      {
        id: 8,
        title: "Embroidery Cape",
        price: 25.99,
        image: "https://ethiopiantraditionaldress.com/wp-content/uploads/2022/12/Tibeb-Kaba-2-500x700.jpg",
        description: "Hand-embroidered cape for festive occasions.",
        category: "Traditional Clothes",
        rating: { rate: 1.8, count: 232 }
      },
      {
        id: 9,
        title: "Shema Gown ",
        price: 37.00,
        image: "https://i.etsystatic.com/14971794/r/il/eb46c2/3426671140/il_fullxfull.3426671140_7jhy.jpg",
        description: " Flowy dress made from Ethiopian hand-spun cotton.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 132 }
      },
      {
        id: 10,
        title: "Cultural Kids Kemis",
        price: 34.00,
        image: "https://i.pinimg.com/originals/e5/61/d9/e561d90b367a22c5a8f8bf998c1200ef.jpg",
        description: "Miniature Habesha dress for children.",
        category: "Traditional Clothes",
        rating: { rate: 3.8, count: 372 }
      },
      {
        id: 11,
        title: "Tibeb Belt ",
        price: 34.00,
        image: "https://th.bing.com/th/id/OIP.ly6cWPowi4YdVzA1F4RSqgHaFf?rs=1&pid=ImgDetMain",
        description: "Leather belt with silver tribal engravings.",
        category: "Traditional Clothes",
        rating: { rate: 3.5, count: 42 }
      },
      {
        id: 12,
        title: "Jano Shawl",
        price: 44.00,
        image: "https://cdn.exoticindia.com/images/products/original/shawls-2016/swg84_a01.jpg",
        description: "Soft wool shawl with cross motifs.",
        category: "Traditional Clothes",
        rating: { rate: 3.5, count: 42 }
      },
      {
        id: 13,
        title: "Kemis with Silver Thread ",
        price: 37.00,
        image: "https://i.etsystatic.com/50838879/r/il/b780a1/5840688046/il_1080xN.5840688046_lq6a.jpg",
        description: "Elegant dress with metallic embroidery.",
        category: "Traditional Clothes",
        rating: { rate: 3.5, count: 42 }
      },
      {
        id: 14,
        title: "Wollo Scarf ",
        price: 36.00,
        image: "https://i.pinimg.com/originals/cc/bc/be/ccbcbe0aada757139461dffc967623ba.jpg",
        description: "Hand-dyed scarf from Wollo region.",
        category: "Traditional Clothes",
        rating: { rate: 3.2, count: 492 }
      },
      {
        id: 15,
        title: "Arsi Tribal Skirt",
        price: 37.99,
        image: "https://static1.s123-cdn-static-a.com/uploads/2690205/800_5db7f798199c8.jpg",
        description: "Colorful skirt with beaded fringe.",
        category: "Traditional Clothes",
        rating: { rate: 2.9, count: 492 }
      },
      {
        id: 16,
        title: "Gurage Clothing",
        price: 67.99,
        image: "https://i.pinimg.com/originals/07/fb/6a/07fb6a1b34d12dd2ed79b268a7ddebbe.jpg",
        description: "Conical palm-leaf hat for sun protection.",
        category: "Traditional Clothes",
        rating: { rate: 1.9, count: 496 }
      },
      {
        id: 17,
        title: "Sidama Beaded Necklace Dress ",
        price: 27.99,
        image: "https://www.kenyandiasporamarket.com/wp-content/uploads/2022/03/IMG_9274-scaled.jpeg",
        description: "Dress adorned with traditional beadwork.",
        category: "Traditional Clothes",
        rating: { rate: 1.9, count: 496 }
      },
      {
        id: 18,
        title: "Oromo Leather Vest",
        price: 20.99,
        image: "https://mypartyshirt.com/media/catalog/product/cache/1/thumbnail/1000x1231/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1040_1_.jpg",
        description: "Hand-tooled leather vest for men.",
        category: "Traditional Clothes",
        rating: { rate: 4.9, count: 406 }
      },
      {
        id: 19,
        title: "Harari Clothing",
        price: 20.99,
        image: "https://th.bing.com/th/id/OIP.HZ_yOJxC30fNjvKjRy4d6QHaHt?rs=1&pid=ImgDetMain",
        description: "Hand-tooled leather vest for men.",
        category: "Traditional Clothes",
        rating: { rate: 4.9, count: 406 }
      },
      {
        id: 20,
        title: "Amhara Silk Robe",
        price: 20.99,
        image: "https://i.pinimg.com/originals/a4/42/f4/a442f41358a164be387d512a10eb5808.jpg",
        description: "Luxurious silk robe with gold stitching.",
        category: "Traditional Clothes",
        rating: { rate: 4.9, count: 406 }
      },
      {
        id: 21,
        title: "Afar Nomadic Wrap ",
        price: 56.99,
        image: "https://i.pinimg.com/236x/f9/ea/21/f9ea216b6b73cd266a59898d5ba5e584--tribal-people-traditional-outfits.jpg",
        description: "Lightweight wrap for desert climates.",
        category: "Traditional Clothes",
        rating: { rate: 4.9, count: 406 }
      },
      {
        id: 22,
        title: "Tigrayan Cotton Tunic",
        price: 50.99,
        image: "https://th.bing.com/th/id/OIP.mbjWsW8_9RgEvgwaOBvEMwHaJD?rs=1&pid=ImgDetMain",
        description: "Loose-fit tunic with cross-stitch patterns.",
        category: "Traditional Clothes",
        rating: { rate: 3.9, count: 406 }
      },
      {
        id: 23,
        title: "Addis Ababa Modern cloth for men",
        price: 50.99,
        image: "https://th.bing.com/th/id/R.cdac69d94ce9927100f046d88277b379?rik=hcaaJwQO6rkYhA&riu=http%3a%2f%2fwww.ethiopian.store%2fcdn%2fshop%2ffiles%2fphoto_2024-06-27_01-43-48.jpg%3fv%3d1720017295&ehk=%2bp8sgvgkSYetlBml2xUmd0XAFGOC4%2fEzQBOHtEhfJxk%3d&risl=&pid=ImgRaw&r=0",
        description: "Elegant Simplicity in Habesha Shirt Modern Habesha Men's Outfit",
        category: "Traditional Clothes",
        rating: { rate: 3.9, count: 96 }
      },
      {
        id: 24,
        title: "Modern Habesha Men's Outfit",
        price: 50.99,
        image: "https://th.bing.com/th/id/OIP.AAfYnok62lxHzMK46i7oyAHaJQ?w=113&h=201&c=7&r=0&o=5&dpr=1.9&pid=1.7",
        description: "Elegant Simplicity in Habesha Shirt Modern Habesha Men's Outfit",
        category: "Traditional Clothes",
        rating: { rate: 3.9, count: 96 }
      },
      {
        id: 25,
        title: "Modern Nigerian Dress",
        price: 90.99,
        image: "https://i.etsystatic.com/31612408/r/il/017248/4288975285/il_fullxfull.4288975285_nxcq.jpg",
        description: "Elegant Simplicity in Nigerian Dress, Modern Nigerian Dress",
        category: "Traditional Clothes",
        rating: { rate: 3.9, count: 96 }
      },
      {
        id: 26,
        title: "Agbada Grand Robe ",
        price: 40.99,
        image: "https://th.bing.com/th/id/R.bb2c168251afab6aee4f17872800bccd?rik=xrpI2eyL3NdFyA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0417%2f7903%2f6323%2fproducts%2fPXL_20221107_203032328.PORTRAIT_1200x1200.jpg%3fv%3d1673931684&ehk=QMGEuWHIqPvMSkMOxDtY758Jq5hiETciVDOKOGLWjrI%3d&risl=&pid=ImgRaw&r=0",
        description: " Luxurious hand-embroidered men’s robe with intricate gold detailing, perfect for special occasions",
        category: "Traditional Clothes",
        rating: { rate: 3.5, count: 96 }
      },
      {
        id: 27,
        title: "Kente Cloth Scarf ",
        price: 43.99,
        image: "https://th.bing.com/th/id/OIP.lW09XOGABdny_0ZPqrSmogHaNO?w=794&h=1418&rs=1&pid=ImgDetMain",
        description: "Vibrant handwoven silk scarf with geometric patterns, a bold statement piece. (Ghana)",
        category: "Traditional Clothes",
        rating: { rate: 3.5, count: 96 }
      },
      {
        id: 28,
        title: "Shweshwe Wrap Skirt ",
        price: 63.99,
        image: "https://th.bing.com/th/id/R.397cdb7868659d2089db9acdb7fe0940?rik=TL%2fclrvUY2upxw&pid=ImgRaw&r=0",
        description: "Classic indigo-dyed cotton skirt with traditional prints, stylish and comfortable. (South Africa)",
        category: "Traditional Clothes",
        rating: { rate: 3.5, count: 96 }
      },
      {
        id: 29,
        title: " Maasai Beaded Necklace ",
        price: 23.99,
        image: "https://th.bing.com/th/id/OIP.m0jgnvPyUqT_nqa8rrRi0wHaJx?rs=1&pid=ImgDetMain",
        description: "Handcrafted multicolored bead necklace, a symbol of heritage and artistry. (Kenya/Tanzania)",
        category: "Traditional Clothes",
        rating: { rate: 3.1, count: 96 }
      },
      {
        id: 30,
        title: "Senegalese Kaftan Dress ",
        price: 73.99,
        image: "https://s-media-cache-ak0.pinimg.com/736x/ee/7e/54/ee7e54e3059d039d4414d1657a15a497--senegalese-styles-kaftans.jpg",
        description: "Flowing, breathable boubou dress with ornate embroidery, ideal for warm weather. (Senegal)",
        category: "Traditional Clothes",
        rating: { rate: 3.1, count: 96 }
      },
      {
        id: 31,
        title: "Egyptian Cotton Galabeya",
        price: 73.99,
        image: "https://ae01.alicdn.com/kf/HTB1PKTgSXXXXXccXVXXq6xXFXXXx/2017-Th803.jpg",
        description: "Soft, airy full-length robe with traditional Middle Eastern embroidery. (Egypt)",
        category: "Traditional Clothes",
        rating: { rate: 3.1, count: 96 }
      },
      {
        id: 32,
        title: "Moroccan Kaftan Gown ",
        price: 73.99,
        image: "https://th.bing.com/th/id/OIP.YxmuwioUcg1_FRABHgDmzAAAAA?rs=1&pid=ImgDetMain",
        description: "Opulent velvet kaftan with silver-thread embellishments for a regal look. (Morocco)",
        category: "Traditional Clothes",
        rating: { rate: 3.1, count: 96 }
      },
      {
        id: 33,
        title: "White Kemis (Netela Dress) ",
        price: 45.99,
        image: "https://i.pinimg.com/originals/3a/a2/04/3aa204f1013c48315516236f781d21e2.jpg",
        description: "A simple, elegant white dress often made from cotton or chiffon, typically worn with a netela (shawl) for formal occasions.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 32 }
      },
      {
        id: 34,
        title: "Tibeb Kemis ",
        price: 45.99,
        image: "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.4987848485_714j-696940.jpg?v=1716554758&width=990",
        description: "Features intricate tibeb (embroidered patterns) along the hem, sleeves, or neckline, often in colorful designs.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 632 }
      },
      {
        id: 35,
        title: "Zuria Kemis ",
        price: 45.99,
        image: "https://i.pinimg.com/originals/14/4d/17/144d17f05fff89f741f547e0883117f2.jpg",
        description: "Made from zuria fabric (sheer, lightweight cotton), usually white with delicate embroidery, popular for weddings and church events.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 632 }
      },
      {
        id: 36,
        title: "Silk Kemis ",
        price: 45.99,
        image: "https://th.bing.com/th/id/OIP.dARx5w5CITqeP4jmSCzFLgHaHa?rs=1&pid=ImgDetMain",
        description: "Made from luxurious silk fabric, often worn for special occasions like weddings and holidays.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 632 }
      },
      {
        id: 37,
        title: "Daraa (Oromo Traditional Wear)",
        price: 65.99,
        image: "https://th.bing.com/th/id/OIP.lsD1GBNpbL53mBY0QNtbGgHaJu?rs=1&pid=ImgDetMain",
        description: "Traditional Oromo attire, often made from cotton and adorned with colorful patterns, typically worn during cultural events.",
        category: "Traditional Clothes",
        rating: { rate: 4.8, count: 632 }
      },

      
      // Add 24 more traditional clothes...
    ];
    
    const handmadeAccessories = [
      {
        id: 38,
        title: "Maasai Beaded Bracelet",
        price: 15.9,
        image: "https://i.etsystatic.com/11307854/r/il/15715e/2130072823/il_fullxfull.2130072823_8p5s.jpg",
        description: "Handmade by Maasai women",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 39,
        title: "Hamar Tribe Earrings",
        price: 10.99,
        image: "https://th.bing.com/th/id/OIP.DNZPD65LYrIOilJ3GQzA1AHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.9&pid=1.7",
        description: "Heavy brass hoops with engravings",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 40,
        title: "Shea Butter Hair Comb",
        price: 15,
        image: "https://th.bing.com/th/id/OIP._giUYIIskVi5cPxD58WwnQAAAA?rs=1&pid=ImgDetMain",
        description: "Hand-carved wooden comb",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 41,
        title: "basketry clutch",
        price: 18.99,
        image: "https://th.bing.com/th/id/R.b99ba6d9af8d2232adc93e5c8b727c8e?rik=bN9yrhvDF60FNA&riu=http%3a%2f%2fhabeshabazaar.com%2fcdn%2fshop%2ffiles%2fWhatsAppImage2023-11-17at22.57.55_3612cab1.jpg%3fv%3d1700567016&ehk=Rl%2bMpUtEADejwb59gKLhzIK1jV5sghfFmi4SKouHl%2fA%3d&risl=&pid=ImgRaw&r=0",
        description: "Woven grass purse with leather trim.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 42,
        title: "ethiopian silver ring",
        price: 19.99,
        image: "https://th.bing.com/th/id/OIP.Rj0Z49E-ScS1PMU2X7Xr9wHaJ1?rs=1&pid=ImgDetMain",
        description: "filigree design with amber stone",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 43,
        title: "cofee bean necklace",
        price: 23.88,
        image: "https://th.bing.com/th/id/OIP.uPVKjzOREAExkjMTDcDwBgHaFj?rs=1&pid=ImgDetMain",
        description: "resinpendant with real cofee beans",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 44,
        title: "lalibela cross pendant",
        price: 16.99,
        image: "https://th.bing.com/th/id/OIP.TDMRT00o9Bf6_V3pID-6ngHaHa?rs=1&pid=ImgDetMain",
        description: "replica of the famous cross",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 45,
        title: "tribal arm cuff",
        price: 15.9,
        image: "https://www.ethnicjewelsmagazine.co.uk/wp-content/uploads/2020/10/17904084_1360108810699786_2824512477578044137_n-450x450.jpg",
        description: "brass cuff with tribal motofs",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 46,
        title: "enset fiber bag",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.4lW30TAsU4okOTsaE1GtjwHaHa?rs=1&pid=ImgDetMain",
        description: "eco-friendly bag fromfalse banana plant",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 47,
        title: "amhara coin necklace",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.vemw47jQP4tccpV9bewnUgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7",
        description: "antique coin jewelry",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 48,
        title: "oromo warrior bracelet",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.__4VpgG9kylLZr1G_TPvjwHaE8?rs=1&pid=ImgDetMain",
        description: "leather band with metal studs",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 49,
        title: "Afar Desert Scarf Ring ",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.3JgT7pfwtwaYIE1ObPmxJQHaHa?rs=1&pid=ImgDetMain",
        description: "Silver ring with turquoise.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 50,
        title: "Addis Ababa Silk Headwrap",
        price: 15.9,
        image: "https://th.bing.com/th/id/R.f87026a7bf899426fae19831d334400c?rik=JPuo0Blj09wUcQ&pid=ImgRaw&r=0",
        description: "Vibrant printed fabric.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 51,
        title: "Karo Tribe Lip Plate",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.N7V4ZExT_ecm9hX8noUXUgHaFZ?rs=1&pid=ImgDetMain",
        description: "Decorative wooden replica",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 52,
        title: "Handwoven Cotton Tote",
        price: 15.9,
        image: "https://www.bing.com/th/id/OIP.uoUYgsleyipEg27Ak9vHfgHaJ4?w=150&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2",
        description: "Market bag with Ethiopian patterns",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 53,
        title: "Gondar Royal Cufflinks",
        price: 15.9,
        image: "https://i.etsystatic.com/46456705/r/il/5616a4/5329804261/il_300x300.5329804261_q379.jpg",
        description: "Silver with black onyx.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 54,
        title: "Bale Mountains Wool Gloves",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.9LJG0m-fMa8ycszhbMOPxQHaFz?rs=1&pid=ImgDetMain",
        description: "Hand-knitted with tribal stripes.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 55,
        title: "Harari Embroidered Wallet",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.XEljwj_LUv2WYvNQrx4dkAHaGm?w=3000&h=2676&rs=1&pid=ImgDetMain",
        description: "Leather with gold thread.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
  
      {
        id: 56,
        title: "Tigrayan Silver Anklet",
        price: 15.9,
        image: "https://www.bing.com/th/id/OIP.VxQpY47hkB1xyfTvrkj9YAHaJz?w=150&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2",
        description: "Delicate chain with charms.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 57,
        title: "Konso Wooden Hairpin",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.Wl4NG-DzenkO7ukcW5pZPAHaHa?rs=1&pid=ImgDetMain",
        description: "Hand-carved geometric design.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 58,
        title: "Shepherds Leather Satchel",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.ecdY6qL57ooRpBPjlzANxgHaJX?rs=1&pid=ImgDetMain",
        description: "Rugged crossbody bag.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
      {
        id: 59,
        title: "Blue Nile Stone Earrings",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.cLtR6NoiVlJN3mXqBfdb-gHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7",
        description: " Polished river stones in silver",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },
     
      {
        id: 60,
        title: "Coffee Ceremony Bracelet",
        price: 15.9,
        image: "https://th.bing.com/th/id/OIP.dmyUg7u0v2r9P2NJw0BlFQHaFi?w=289&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2",
        description: "Beads resembling coffee cherries.",
        category: "Handmade Accessories",
        rating: { rate: 4.9, count: 67 }
      },

      
      // Add 24 more accessories...
    ];
    
    const skincareProducts = [
      {
        id: 61,
        title: "Abyssinian Oil Hair Serum ",
        price: 78.99,
        image: "https://th.bing.com/th/id/OIP.d5EmkZzlTrjhXiaf8xXKoAHaHa?rs=1&pid=ImgDetMain",
        description: "Abyssinian Oil Hair Serum Cold-pressed from noog seeds.",
        category: "Skincare",
        rating: { rate: 4.8, count: 89 }
      },
      {
        id: 62,
        title: "Organic Ethiopian Honey Soap ",
        price: 10.00,
        image: "https://4.imimg.com/data4/TS/FV/MY-1600115/honey-soap-250x250.jpg",
        description: "Organic Ethiopian Honey Soap With Sidama forest honey.",
        category: "Skincare",
        rating: { rate: 2.8, count: 89 }
      },
      {
        id: 63,
        title: "Korerima (Black Pepper) Scrub ",
        price: 30.00,
        image: "https://m.media-amazon.com/images/I/71mf-IabFvL._SY741_.jpg",
        description: "Korerima (Black Pepper) Scrub – Exfoliating spice blend.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 64,
        title: "Gesho Leaf Face Toner ",
        price: 30.00,
        image: "https://i.etsystatic.com/27460682/r/il/672d50/4289867190/il_340x270.4289867190_qpia.jpg",
        description: "Korerima (Black Pepper) Scrub  Exfoliating spice blend.",
        category: "Skincare",
        rating: { rate: 4.1, count: 489 }
      },
      {
        id: 65,
        title: "Tikur Azmud (Black Cumin) Oil ",
        price: 30.00,
        image: "https://m.media-amazon.com/images/I/71v5-1RP4-L._SY741_.jpg",
        description: "Tikur Azmud (Black Cumin) Oil For hair growth.",
        category: "Skincare",
        rating: { rate: 5.1, count: 89 }
      },
      {
        id: 66,
        title: "Kibe (Clarified Butter) Hand Cream ",
        price: 40.00,
        image: "https://www.daringgourmet.com/wp-content/uploads/2018/04/Niter-Kibbeh-7-cropped.jpg",
        description: "Kibe (Clarified Butter) Hand Cream – Ultra-moisturizing.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 67,
        title: "Wanza (Sandalwood) Beard Oil",
        price: 30.00,
        image: "https://th.bing.com/th/id/OIP.K72rRlN8ZKO2lay43R04OgHaFj?rs=1&pid=ImgDetMain",
        description: "Wanza (Sandalwood) Beard Oil  Woodsy and nourishing.",
        category: "Skincare",
        rating: { rate: 3.1, count: 89 }
      },
      {
        id: 68,
        title: "Tena Adam (Health Plant) Lotion ",
        price: 32.00,
        image: "https://shop.birlin-muehle.de/out/pictures/generated/product/2/665_665_75/habesha-food-tena-adam-_mg_124791.jpg",
        description: "Tena Adam (Health Plant) Lotion  Medicinal herb-infused.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 69,
        title: "Rooibos & Hibiscus Toner",
        price: 35.90,
        image: "https://th.bing.com/th/id/OIP.TOnBi75kqxE2mJPZDZyKRQHaHa?rs=1&pid=ImgDetMain",
        description: "Rooibos & Hibiscus Toner – Calming for sensitive skin.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 70,
        title: "Neem & Mint Toothpowder",
        price: 36.00,
        image: "https://th.bing.com/th/id/OIP.ha_hUKUHT_DWP-dpJEh46QAAAA?rs=1&pid=ImgDetMain",
        description: "Neem & Mint Toothpowder – Traditional dental care.",
        category: "Skincare",
        rating: { rate: 3.1, count: 89 }
      },
      {
        id: 71,
        title: "Marula Oil Serum (Southern Africa)",
        price: 37.00,
        image: "https://africanbotanics.com/cdn/shop/files/PURE_MARULA_OIL_Image_2_eaf96945-595a-42d1-97a2-650827cd536a.jpg?v=1715312766&width=3840",
        description: "Marula Oil Serum (Southern Africa) – Lightweight anti-aging oil.",
        category: "Skincare",
        rating: { rate: 4.45, count: 89 }
      },
      {
        id: 72,
        title: "Dakar Black Soap (Senegal) ",
        price: 300.00,
        image: "https://fabellashop.com/wp-content/uploads/2017/04/shea-moisture-african-black-soap.jpg",
        description: "Dakar Black Soap (Senegal) – Shea/plantain ash cleanser.",
        category: "Skincare",
        rating: { rate: 3.1, count: 89 }
      },
      {
        id: 73,
        title: "Kalahari Melon Seed Oil",
        price: 41.00,
        image: "https://th.bing.com/th/id/OIP.zMjsHn1_PaR_j7C86BqxaAHaLG?rs=1&pid=ImgDetMain",
        description: "Kalahari Melon Seed Oil – Omega-rich moisturizer.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 74,
        title: "Botswana Devil’s Claw Salve ",
        price: 80.99,
        image: "https://th.bing.com/th/id/OIP.JeO1mYeKunguURhCRC_9WQHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.9&pid=1.7",
        description: "Botswana Devil’s Claw Salve – Joint pain relief.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 75,
        title: "Nigerian Neem & Tumeric Soap",
        price: 67.00,
        image: "https://th.bing.com/th/id/OIP.peYgIOZmUHmXQXLmqWgK0wHaHa?rs=1&pid=ImgDetMain",
        description: "Nigerian Neem & Tumeric Soap – Anti-fungal properties.",
        category: "Skincare",
        rating: { rate: 4.2, count: 869 }
      },
      {
        id: 76,
        title: "Congolese Coffee Body Scrub ",
        price: 30.00,
        image: "https://th.bing.com/th/id/OIP.lkTnS4_hB56ocW6Cfho9ugHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
        description: "Congolese Coffee Body Scrub – Energizing ground coffee.",
        category: "Skincare",
        rating: { rate: 3.8, count: 189 }
      },
      {
        id: 77,
        title: "Fulani Hair Growth Oil",
        price: 30.00,
        image: "https://th.bing.com/th/id/OIP.Ywzc2aT4-P8_Dx36FC2YNQAAAA?rs=1&pid=ImgDetMain",
        description: "Fulani Hair Growth Oil – Fenugreek & baobab blend.",
        category: "Skincare",
        rating: { rate: 3.1, count: 459 }
      },
      {
        id: 78,
        title: "San Bushman Camelthorn Gum Balm",
        price: 30.00,
        image: "https://th.bing.com/th/id/OIP.5DrHFIK6j3vP8XMm58mLwAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7",
        description: "San Bushman Camelthorn Gum Balm – Cracked-heel repair.",
        category: "Skincare",
        rating: { rate: 3.1, count: 289 }
      },
      {
        id: 79,
        title: "Saharan Rosehip Oil",
        price: 120.00,
        image: "https://th.bing.com/th/id/OIP.atLWrU28Hu90L55rJS-PnwHaKG?rs=1&pid=ImgDetMain",
        description: "Saharan Rosehip Oil – Scar-healing facial oil.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 80,
        title: "Maasai Emblica Hair Rinse ",
        price: 36.00,
        image: "https://www.origine-naturelle.com/media/catalog/product/cache/c479f996ec68bda962bbb795b8f9f656/_/e/_e_m_emblica_1.jpg",
        description: "Maasai Emblica Hair Rinse – Ayurvedic amla for shine.",
        category: "Skincare",
        rating: { rate: 4.1, count: 89 }
      },
      {
        id: 81,
        title: "Libyan Date Seed Polisher ",
        price: 20.99,
        image: "https://th.bing.com/th/id/OIP.oMX916yxjjQuj19x0e3qZgHaGL?rs=1&pid=ImgDetMain",
        description: "Libyan Date Seed Polisher – Gentle face scrub.",
        category: "Skincare",
        rating: { rate: 3.1, count: 369 }
      },
      {
        id: 82,
        title: "Tunisian Orange Blossom Water ",
        price: 30.00,
        image: "https://flikkymarket.ca/wp-content/uploads/2022/01/Rose_Water_250mL_Minar_695x695.png",
        description: "Tunisian Orange Blossom Water – Hydrating facial mist.",
        category: "Skincare",
        rating: { rate: 3.4, count: 129 }
      },
      

      
      // Add 24 more skincare items...
    ];
    const homeDecorProducts = [

    {
      id: 83,
      title: "Senegalese Floor Pouf",
      price: 59.99,
      image: "https://th.bing.com/th/id/OIP.BPnbbR_QnaMwx_1JaX3QJAHaJU?rs=1&pid=ImgDetMain",
      description: "Recycled fabric stuffed with rice sacks",
      category: "Home Decor",
      rating: { rate: 4.7, count: 42 }
    },
    {
      id: 84,
      title: "African books store ",
      price: 59.99,
      image: "https://i.pinimg.com/originals/d2/fc/01/d2fc012df2440517c0a06387fc6206af.jpg",
      description: "Recycled fabric stuffed with rice sacks",
      category: "Home Decor",
      rating: { rate: 4.7, count: 42 }
    },
    {
      id: 85,
      title: "Shema Cotton Throw Pillows",
      price: 29.99,
      image: "https://th.bing.com/th/id/OIP.r2CeS_klbJH8I9HkBZcP7gHaHa?rs=1&pid=ImgDetMain",
      description: "Decorative pillows made from Ethiopian Shema (handwoven cotton fabric) featuring bold stripes and earthy tones for a cozy, cultural touch.",
      category: "Home Decor",
      rating: { rate: 4.7, count: 42 }
    },
    {
      id: 86,
      title: "Ethiopian Orthodox Cross Wall Art",
      price: 29.99,
      image: "https://th.bing.com/th/id/OIP.6uV9ZGk3pJ5zbSlaKl6rewHaJ4?w=2250&h=3000&rs=1&pid=ImgDetMain",
      description: "Intricate Ethiopian Orthodox crosses made from wood or metal, hung as striking wall decor to showcase religious and artistic heritage.",
      category: "Home Decor",
      rating: { rate: 4.7, count: 42 }
    },
    {
      id: 87,
      title: "Ethiopian Orthodox Cross Wall Art",
      price: 29.99,
      image: "https://th.bing.com/th/id/OIP.zfe5iWPtsHJLGfHaBnHenQHaE8?rs=1&pid=ImgDetMain",
      description: "Intricate Ethiopian Orthodox crosses made from wood or metal, hung as striking wall decor to showcase religious and artistic heritage.",
      category: "Home Decor",
      rating: { rate: 4.7, count: 42 }
    },
    {
      id: 88,
      title: "Dogon Door Locker",
      price: 89.99,
      image: "https://th.bing.com/th/id/OIP.6q8E8eoKzit7vpxxFbgB6gHaLI?rs=1&pid=ImgDetMain",
      description: "Carved wooden granary lock from Mali",
      category: "Home Decor",
      rating: { rate: 4.9, count: 18 }
    },
    {
      id: 89,
      title: "Zulu Beer Pot",
      price: 45.50,
      image: "https://a.1stdibscdn.com/20th-century-zulu-beer-pot-for-sale-picture-2/f_37383/f_174710221578270248174/Zulu_Beer_Pot_2_master.jpg?width=768",
      description: "Black clay with etched patterns from South Africa",
      category: "Home Decor",
      rating: { rate: 4.8, count: 31 }
    },
    {
      id: 90,
      title: "Adinkra Symbol Stool",
      price: 120.00,
      image: "https://th.bing.com/th/id/OIP.8OJc5wKTkppTHJND1lMcYAHaI6?w=1958&h=2357&rs=1&pid=ImgDetMain",
      description: "Carved with 'Gye Nyame' ('Except God') from Ghana",
      category: "Home Decor",
      rating: { rate: 5.0, count: 27 }
    },
    {
      id: 91,
      title: "Tuareg Camel Bell",
      price: 35.75,
      image: "https://c8.alamy.com/comp/ATHFGK/in-gall-near-agadez-niger-tuareg-camel-decorations-ATHFGK.jpg",
      description: "Iron bell for desert caravans from Niger",
      category: "Home Decor",
      rating: { rate: 4.6, count: 39 }
    },
    {
      id: 92,
      title: "Kuba Textile Wall Hanging",
      price: 79.99,
      image: "https://th.bing.com/th/id/OIP.SV6sLUDHsxW_Durmg-9T_gHaLG?rs=1&pid=ImgDetMain",
      description: "Patchwork raffia embroidery from DRC",
      category: "Home Decor",
      rating: { rate: 4.9, count: 22 }
    },
    {
      id: 93,
      title: "Moroccan Zellige Tile Coasters",
      price: 24.99,
      image: "https://media.printables.com/media/prints/231263/images/2102990_15f2c5df-0172-42f6-b83d-88becfce3f2d/img_4894.jpg",
      description: "Mini geometric mosaics (set of 6)",
      category: "Home Decor",
      rating: { rate: 4.5, count: 67 }
    },
    {
      id: 94,
      title: "Maasai Warrior Shield Clock",
      price: 65.00,
      image: "https://img.carters.com.au/cf907d37c5098edd025dded5a985d195.jpg",
      description: "Beaded replica with clock mechanism",
      category: "Home Decor",
      rating: { rate: 4.7, count: 35 }
    },
    {
      id: 95,
      title: "Yoruba Ifa Divination Tray",
      price: 95.50,
      image: "https://th.bing.com/th/id/OIP.jsvF4oJrgFMljV-9LYvEyQHaJ4?w=2244&h=2992&rs=1&pid=ImgDetMain",
      description: "Carved wooden tray with icons from Nigeria",
      category: "Home Decor",
      rating: { rate: 4.8, count: 19 }
    },
    {
      id: 96,
      title: "San Rock Art Print",
      price: 29.99,
      image: "https://c8.alamy.com/comp/2K1CAMT/cave-painting-linton-panel-is-one-of-the-most-amazing-and-finely-detailed-examples-of-san-rock-art-from-southern-africa-south-african-national-2K1CAMT.jpg",
      description: "Reproduction of ancient cave art from Botswana",
      category: "Home Decor",
      rating: { rate: 4.4, count: 53 }
    },
    {
      id: 97,
      title: "Fulani Milk Gourd",
      price: 42.00,
      image: "https://2.bp.blogspot.com/-AySZ-oO4sGc/WYWCQ6CUNII/AAAAAAAABC4/uNzuIMgAhXkERjELAubcstYfskZK6rucQCLcBGAs/s1600/gourde5.jpg",
      description: "Dried calabash with leather net from West Africa",
      category: "Home Decor",
      rating: { rate: 4.6, count: 28 }
    },
    {
      id: 98,
      title: "Swahili Lamu Lantern",
      price: 55.00,
      image: "https://th.bing.com/th/id/R.ab70ccd00162a84ecffc5b3cb2efe8a4?rik=vBT%2bG2N0WCpKUQ&riu=http%3a%2f%2fwww.palmyradesign.com%2fphotos%2fPD14_pyr_alk.jpg&ehk=QcYcwAD%2fJ5Hei3a%2fJ7xphw1o88ucdBLb%2b2W8hj8EO1s%3d&risl=&pid=ImgRaw&r=0",
      description: "Brass with cut-out star designs from Kenya",
      category: "Home Decor",
      rating: { rate: 4.9, count: 41 }
    },
    {
      id: 99,
      title: "Bamileke Throne Chair",
      price: 199.99,
      image: "https://i.pinimg.com/736x/d4/39/8c/d4398c4d6e47425bdd544f27a2a80d41.jpg",
      description: "Stool with leopard motifs from Cameroon",
      category: "Home Decor",
      rating: { rate: 5.0, count: 12 }
    },
    {
      id: 100,
      title: "Ashanti Golden Stool Art Piece",
      price: 149.99,
      image: "https://th.bing.com/th/id/OIP.dVaubFyfBV8E-ST8On3eNwHaHa?rs=1&pid=ImgDetMain",
      description: "Miniature replica of sacred stool from Ghana",
      category: "Home Decor",
      rating: { rate: 4.9, count: 8 }
    },
    {
      id: 101,
      title: "Berber Wool Rug",
      price: 249.99,
      image: "https://www.trendcarpet.co.uk/images/zoom/interior_4_1.4_1152343454_dream.dhc-02-18.ivorydesign.jpg",
      description: "Atlas Mountains diamond patterns from Morocco",
      category: "Home Decor",
      rating: { rate: 4.8, count: 17 }
    },
    {
      id: 102,
      title: "Nubian Woven Table Mat",
      price: 32.50,
      image: "https://images.squarespace-cdn.com/content/v1/6100be0a1879fd760ac18d59/1628436357753-J45LK7EDS4A4EFDS0L6Z/Riad_Rooftop_In_Marrakech.jpg?format=1000w",
      description: "Palm leaf with bright dyes from Sudan",
      category: "Home Decor",
      rating: { rate: 4.5, count: 39 }
    },
    {
      id: 103,
      title: "Hausa Mudcloth Pillow",
      price: 45.99,
      image: "https://i.etsystatic.com/13846810/r/il/3bac3d/1464491926/il_fullxfull.1464491926_ghon.jpg",
      description: "Indigo-adire resist-dyed cotton from Nigeria",
      category: "Home Decor",
      rating: { rate: 4.7, count: 29 }
    },
    {
      id: 104,
      title: "Xhosa Beaded Curtain",
      price: 89.99,
      image: "https://th.bing.com/th/id/OIP.h9nHAF5aP1REPenJkrnMNAHaLH?rs=1&pid=ImgDetMain",
      description: "Strings of glass beads in symbolic colors",
      category: "Home Decor",
      rating: { rate: 4.6, count: 21 }
    },
    {
      id: 105,
      title: "Libyan Desert Rose Crystal",
      price: 39.99,
      image: "https://flamboyantdiani.com/wp-content/uploads/2023/06/Indulge-in-leisurely-conversations-or-curl-up-with-a-good-book-in-our-inviting-sitting-room-designed-for-ultimate-comfort-scaled.jpg",
      description: "Natural selenite formation",
      category: "Home Decor",
      rating: { rate: 4.8, count: 47 }
    },
    {
      id: 106,
      title: "Kikuyu Honey Pot",
      price: 37.50,
      image: "https://th.bing.com/th/id/OIP.6_GWiUmGbUgSQy-7x4tRJAHaGC?rs=1&pid=ImgDetMain",
      description: "Hollowed log with leather lid from Kenya",
      category: "Home Decor",
      rating: { rate: 4.5, count: 33 }
    },
    {
      id: 107,
      title: "Chokwe Storytelling Mask",
      price: 79.99,
      image: "https://i.ebayimg.com/images/g/yvYAAOSw~JZhzQsO/s-l1600.jpg",
      description: "Wall-mounted wooden mask from Angola",
      category: "Home Decor",
      rating: { rate: 4.7, count: 19 }
    },
    {
      id: 108,
      title: "Timbuktu Manuscript Frame",
      price: 499.99,
      image: "https://th.bing.com/th/id/OIP.-wwFY1tfFMPqHK_u1rF46wHaEh?w=266&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7",
      description: "Reproduction of ancient text from Mali",
      category: "Home Decor",
      rating: { rate: 4.9, count: 26 }
    },
    {
      id: 109,
      title: "Wodaabe Mirror Mosaic",
      price: 65.00,
      image: "https://i.etsystatic.com/25967253/r/il/914f54/3635905167/il_570xN.3635905167_4roj.jpg",
      description: "Small decorative wall piece from Niger",
      category: "Home Decor",
      rating: { rate: 4.6, count: 14 }
    },
    {
      id: 110,
      title: "Pondo Grass Broom",
      price: 22.99,
      image: "https://i.pinimg.com/originals/88/18/db/8818dbe9976819f602d7ce0870194885.jpg",
      description: "Hand-tied with natural fibers from South Africa",
      category: "Home Decor",
      rating: { rate: 4.3, count: 58 }
    },
    {
      id: 111,
      title: "Fante Fishing Net Hammock",
      price: 129.99,
      image: "https://ae01.alicdn.com/kf/S108195f1f53040e4ac5b85874d4d323eS/Fishing-Net-Decoration-Beach-Themed-Pirate-Party-Hawaiian-Party-Wall-Hanging-Fishing-Net-Home-Decor-Photography.jpg",
      description: "Woven from recycled ropes in Ghana",
      category: "Home Decor",
      rating: { rate: 4.8, count: 23 }
    }
];
        
    const allProducts= [
      ...traditionalClothes,
      ...handmadeAccessories,
      ...skincareProducts,
      ...homeDecorProducts
    ];

    export default allProducts;
    export { traditionalClothes, handmadeAccessories, skincareProducts, homeDecorProducts };