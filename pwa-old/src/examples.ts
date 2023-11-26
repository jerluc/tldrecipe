export const EXAMPLE_RECIPE = {
  "@context": "http://schema.org/",
  type: "Recipe",
  aggregateRating: {
    type: "AggregateRating",
    bestRating: "5",
    ratingCount: "1413",
    ratingValue: "4.5",
    worstRating: "1",
  },
  author: { type: "Person", name: "Betty Crocker Kitchens" },
  dateCreated: "01/01/2004",
  description:
    "We named this recipe “<b>Ultimate Chocolate Chip Cookies,</b>” because it’s got everything a cookie connoisseur could possibly ask for. With a texture that is slightly crispy on the outside and chewy on the inside, it’s a favorite <b>chocolate chip cookie recipe</b> that’s been top-rated by hundreds of satisfied home cooks.",
  image:
    "https://images-gmi-pmc.edge-generalmills.com/983f0c5a-2b13-40db-8c92-748b279bcc3f.jpg",
  keywords: "ultimate chocolate chip cookies",
  name: "Ultimate Chocolate Chip Cookies",
  nutrition: {
    type: "NutritionInformation",
    calories: "120 ",
    carbohydrateContent: "16 g",
    cholesterolContent: "15 mg",
    fatContent: "1 ",
    fiberContent: "0 g",
    proteinContent: "1 g",
    saturatedFatContent: "3 1/2 g",
    servingSize: "1 Cookie",
    sodiumContent: "85 mg",
    sugarContent: "10 g",
    transFatContent: "0 g",
  },
  prepTime: "PT0H15M",
  recipeCategory: "Dessert",
  recipeIngredient: [
    "2 1/4  cups Gold Medal™ all-purpose flour",
    "1  teaspoon baking soda",
    "1/2  teaspoon salt",
    "1  cup butter, softened",
    "3/4  cup granulated sugar",
    "3/4  cup packed brown sugar",
    "1  egg",
    "1  teaspoon vanilla",
    "2  cups semisweet chocolate chips",
    "1  cup coarsely chopped nuts, if desired",
  ],
  recipeInstructions: [
    {
      type: "HowToStep",
      image:
        "https://images-gmi-pmc.edge-generalmills.com/ae7633e8-25b4-403b-a86c-03b7300982dc.jpg",
      text: "Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside.",
    },
    {
      type: "HowToStep",
      image:
        "https://images-gmi-pmc.edge-generalmills.com/2a409724-c7a1-4110-8048-8f592ed65a3b.jpg",
      text: "In large bowl, beat softened butter and sugars with electric mixer on medium speed, or mix with spoon about 1 minute or until fluffy, scraping side of bowl occasionally.",
    },
    {
      type: "HowToStep",
      image:
        "https://images-gmi-pmc.edge-generalmills.com/466a6689-1547-4148-98ef-44a2b8c318c8.jpg",
      text: "Beat in egg and vanilla until smooth. Stir in flour mixture just until blended (dough will be stiff). Stir in chocolate chips and nuts.",
    },
    {
      type: "HowToStep",
      image:
        "https://images-gmi-pmc.edge-generalmills.com/205de745-2319-4cf6-8322-e6fb7d2293a7.jpg",
      text: "Onto ungreased cookie sheets, drop dough by rounded tablespoonfuls 2 inches apart. ",
    },
    {
      type: "HowToStep",
      image:
        "https://images-gmi-pmc.edge-generalmills.com/cbe8b51a-c3c1-4dcf-8d79-76f98565d3e0.jpg",
      text: "Bake 8 to 10 minutes or until light brown (centers will be soft). Cool 2 minutes; remove from cookie sheet to cooling rack. Cool completely, about 30 minutes. Store covered in airtight container.",
    },
  ],
  recipeYield: "48",
  totalTime: "PT1H30M",
  video: {
    type: "VideoObject",
    contentUrl:
      "https://www.bettycrocker.com/videos/ultimate-chocolate-chip-cookies",
    description:
      "The perfect chocolate chip cookie is absolutely a science. You can experiment for weeks, or months, or years to find your perfect version. These Ultimate Chocolate Chip Cookies are the product of plenty of trial and error, resulting in one of Bettys best. If you dont trust us telling you that our recipe is one of the best, you can check out the hundreds of positive reviews!  After you master this recipe, feel free to do a little of your own experimenting to make these your ultimate cookie. Try substituting the semisweet chocolate chips for a combination of white chocolate chips, milk chocolate chips, butterscotch chips and/or peanut butter chips. Its hard to go wrong with this fantastic recipe as a guide.  Tip: To ensure your cookies dont spread into each other while baking, make sure not to crowd the baking sheet. The scoops of chocolate chip cookie dough should be at least 2 inches apart from each other, so its totally normal to only have six cookies on each cookie sheet. You do not need to grease the cookie sheet, but lining the sheet with parchment paper makes it easier to clean up after your baking adventures.",
    embedUrl: "https://www.youtube.com/embed/rMhUQ65rQVg",
    name: "How to Make Ultimate Chocolate Chip Cookies Video",
    thumbnailUrl:
      "https://images-gmi-pmc.edge-generalmills.com/b487918e-1987-487a-a828-60b637870306.jpg",
    uploadDate: "09/19/2018",
  },
};
