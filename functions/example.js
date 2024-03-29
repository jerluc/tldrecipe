export const example = [
  {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://www.allrecipes.com/",
          name: "Home",
          image: null,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://www.allrecipes.com/recipes/",
          name: "Recipes",
          image: null,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": "https://www.allrecipes.com/recipes/79/desserts/",
          name: "Desserts",
          image: null,
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@id": "https://www.allrecipes.com/recipes/362/desserts/cookies/",
          name: "Cookies",
          image: null,
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@id":
            "https://www.allrecipes.com/recipes/16394/desserts/cookies/drop-cookies/",
          name: "Drop Cookie Recipes",
          image: null,
        },
      },
    ],
  },
  {
    "@context": "http://schema.org",
    "@type": "Recipe",
    mainEntityOfPage:
      "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/",
    name: "Best Chocolate Chip Cookies",
    image: {
      "@type": "ImageObject",
      url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F12%2Fbest-chocolate-chip-cookies.jpg",
      width: 960,
      height: 960,
    },
    datePublished: "1998-04-18T20:10:32.000Z",
    description: "Crisp edges, chewy middles.",
    prepTime: "P0DT0H20M",
    cookTime: "P0DT0H10M",
    totalTime: "P0DT1H0M",
    recipeYield: "4 dozen",
    recipeIngredient: [
      "1 cup butter, softened",
      "1 cup white sugar",
      "1 cup packed brown sugar",
      "2 eggs",
      "2 teaspoons vanilla extract",
      "1 teaspoon baking soda",
      "2 teaspoons hot water",
      "½ teaspoon salt",
      "3 cups all-purpose flour",
      "2 cups semisweet chocolate chips",
      "1 cup chopped walnuts",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Preheat oven to 350 degrees F (175 degrees C).\n",
      },
      {
        "@type": "HowToStep",
        text: "Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water.  Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.\n",
      },
      {
        "@type": "HowToStep",
        text: "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.\n",
      },
    ],
    recipeCategory: ["Desserts", "Cookies", "Drop Cookie Recipes"],
    recipeCuisine: [],
    author: [
      {
        "@type": "Person",
        name: "Dora",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.613868972688961,
      ratingCount: 18271,
      itemReviewed: "Best Chocolate Chip Cookies",
      bestRating: "5",
      worstRating: "1",
    },
    nutrition: {
      "@type": "NutritionInformation",
      calories: "297.8 calories",
      carbohydrateContent: "38.9 g",
      cholesterolContent: "35.8 mg",
      fatContent: "15.6 g",
      fiberContent: "1.6 g",
      proteinContent: "3.6 g",
      saturatedFatContent: "7.8 g",
      servingSize: null,
      sodiumContent: "165.8 mg",
      sugarContent: "25.1 g",
      transFatContent: null,
      unsaturatedFatContent: null,
    },
    review: [
      {
        "@type": "Review",
        datePublished: "2008-01-02T00:46:13.45Z",
        reviewBody:
          "vERRY eXXCELLENT cOOOKIE! I worked 10 years as a baker and the recipe we used at the bake shop was similar except this recipe didn't call for any cream of tartar, so I added it to my version. I added 1/2 tspn. What it does is make the cookie crack better when baking which gives it a better appeal in appearance as appose to that smooth top looking cookie which I don't like. It doesn't do anything for flavor so if you don't care about whether its smooth or cracked then don't bother with the suggestion.",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "Chuck Sampson",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/lifetastegood/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2007-01-20T16:00:20.87Z",
        reviewBody:
          "If it's even possible, I found a way to make these even better!!  I ran out of flour, so I used 2 cups all purpose and 1 cup of ground oatmeal (Put it in the blender until ground fine like flour).  The result was amazing.",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "MARGIEBOZ",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1440807/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2006-09-17T12:03:00.78Z",
        reviewBody:
          "This is the perfect chocolate chip cookie!!  Crispy on the outside and chewy on the inside!!  For added flavor I also add l cup of white chocolate chips (try the brand that Aldi's carries...wonderful....better then Nestles!!) Some have stated that their cookies were too cakelike, this is caused by the addition of too much flour.  To help prevent this, spoon flour into measuring cup, leveling off with knife, rather then dipping cup into flour. Roll dough into walnut size balls.  Be careful not to overbake, I decrease my oven temperature to 325 and bake for l0 minutes.  I have tried dozens of chocolate chip cookie recipes over the years, this one is far superior to any of them!! Makes 4 dozen. Thanks for sharing.",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "ANGELFROMHEAVEN",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1038997/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2007-02-16T03:37:46.537Z",
        reviewBody:
          "Hi my name is bekah I am 9 years old. I made these cookies by myself and everyone in my family loved them very much.  My mom said that she cant make cookies these good!  They rose so much and they were delicious!!!",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "Becca",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/2287831/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2009-02-19T01:25:14.433Z",
        reviewBody:
          "Looking over the ingredients list and the measurements of each, I recognized this as your fairly standard, classic chocolate chip cookie recipe--and I expected fairly standard results. I was baking in our second home today, where I have a convection oven (which I remain somewhat unfamiliar with). I don't know if it was the convection oven or something else I'm missing, but these did not turn out to be fairly standard chocolate chip cookies! Rather, they were some of the best I've ever tried. First of all, they stay uniform in shape and size, which is important to me, and they're just the right thickness--not poofy little cakes, and not flat and spread out. They're rich and buttery, with crispy outsides, and a soft but chewey inside. I didn't bother to mix the baking soda in the 2 tsp. hot water, just mixed it in with the flour--I also added 1/2 tsp. salt to heighten flavor. Since 2 tsp. of water was called for that I didn't use, I \"upped\" the vanilla to a full tablespoon. I also used milk chocolate chips this time around, but that surely can't account for why these were so darn good and so pretty either. I'm so proud of how these turned out and I'll be proud to send them with my husband tomorrow to his meeting. If not \"Best Chocolate Chip Cookies,\" this recipe is certainly ONE of the best!",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "naples34102",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/naples34102/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2007-02-05T03:07:16.853Z",
        reviewBody:
          "These were fantastic cookies, without a doubt. I did lessen the white sugar to 1/2 cup and increase the brown sugar to 1 1/2 cups for a richer flavor. I also recommend using Trader Joe's Vanilla Paste, but that's just a preference. However, if you want the perfect cookie, be sure to chill your dough for at least an hour (2 hours is better) and they will come out even. I baked at 325 for about 12 minutes. On Silpat or parchment paper, they'll turn out fabulous every time. I am sending them to work with my fiance to keep me from eating three dozen of them! :)",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "wordwench",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1867717/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2008-12-03T03:28:06.26Z",
        reviewBody:
          "THESE COOKIES ARE LIFE-CHANGING. The best I've ever tasted in 25 years of baking.  They have the right balance of flavor and texture. HERE'S A FEW TIPS TO GUARANTEE PERFECTION:  1.  Replace 1 to 1 1/2 cups all-purpose flour with oatmeal flour (oatmeal that's been processed until powder).  2.  Take cookies out of the oven before they appear fully cooked, and let them stay on the cookie sheet for at least ten minutes.  Cookies allowed to cool on the cookie sheet are much chewier.  3.  I find dissolving the baking soda in water is unneccesary, they come out perfect regardless though I still added the spoon of hot water.  4.  Use salted butter in this recipe in addition to the salt called for. 5. This dough freezes well.  I double it, roll half into one-inch balls then freeze so I can have ready made cookie dough balls to bake another time.   ",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "Harriet",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1338287/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2005-11-17T23:41:13.467Z",
        reviewBody:
          "I've tried a lot of different chocolate chip cookie recipes and this is the best one by far!  The only change I've made is to the sugar amounts: 1/2 cup white sugar and 1 1/2 cups brown sugar-I think it makes them chewier.  I omit the nuts and in my oven they take about 12 minutes to bake.  So yummy!!",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "Jen Gerbrandt",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1396921/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2006-01-05T14:43:10.67Z",
        reviewBody:
          "These chocolate chip cookies were very, very good.  I have been trying chocolate chip cookie recipes forever to find the perfect cookie and this one is very close.  They weren't too cake-like and they weren't thin and greasy, they were the perfect in-between cookie.  That said, the dough is very thick once you mix all the ingredients together.  A bit of advice - if you like a thinner cookie and not so cake-like, make a smaller ball of dough and when you place it on the cookie sheet be sure to flatten it quite a bit as the dough doesn't seem to spread when in the oven.  If you like thick cookies, just leave them in the ball and they'll stay big.  As the recipe states, they are crisp on the outside and chewy on the inside - still nice and moist the following day.  I added some Skor toffee bits to the recipe and they turned out amazing - will definitely make again!!  Thanks for sharing.",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 5,
        },
        author: {
          "@type": "Person",
          name: "SPORTSNUT",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1117966/",
        },
      },
      {
        "@type": "Review",
        datePublished: "2007-10-24T01:00:50.923Z",
        reviewBody:
          "Make sure you BARELY brown these cookies as they get hard as a rock if you cook much past that.  Of course i love gooey-soft cookies.  If you like very very crunchy cookies these are good, try to make them thinner or they will break your teeth the day after! ",
        reviewRating: {
          "@type": "Rating",
          worstRating: "1",
          bestRating: "5",
          ratingValue: 2,
        },
        author: {
          "@type": "Person",
          name: "SAWASEWA",
          image: null,
          sameAs: "https://www.allrecipes.com/cook/1350901/",
        },
      },
    ],
    video: {
      "@context": "http://schema.org",
      "@type": "VideoObject",
      name: "Best Chocolate Chip Cookies",
      description: "See how to bake the perfect chocolate chip cookie.",
      uploadDate: "2012-04-04T07:38:53.771Z",
      duration: "PT3M4.309S",
      thumbnailUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F1033249144001%2F903056c9-3215-407c-920a-d8eb13c1500e%2Fd411fe2c-f104-4ab0-8f8d-d75a7dceecce%2F160x90%2Fmatch%2Fimage.jpg",
      publisher: {
        "@type": "Organization",
        name: "Allrecipes",
        url: "https://www.allrecipes.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.allrecipes.com/img/logo.png",
          width: 209,
          height: 60,
        },
        sameAs: [
          "https://www.facebook.com/allrecipes",
          "https://twitter.com/Allrecipes",
          "https://www.pinterest.com/allrecipes/",
          "https://www.instagram.com/allrecipes/",
        ],
      },
      embedUrl:
        "https://players.brightcove.net/1033249144001/default_default/index.html?videoId=1545961130001",
    },
  },
];
