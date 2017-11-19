exports.seed = function (knex, Promise) {
  return knex('deals').del()
    .then(function () {
      return knex('deals').insert([
        { id: 1, company: 'Hallensteins', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Hallenstein_brothers_organisation_logo.gif', deal: '3 Pairs of Jeans for $99', buyers: 'Only 1 buyer needed!', gender: "male" },
        { id: 2, company: 'Pagani', image: 'https://www.richmondmall.co.nz/assets/Uploads/pagani.jpg', deal: 'Buy one get your 2nd sweater 50% off', buyers: 'Only 1 buyer needed!', gender: "female" },
        { id: 3, company: 'Barkers', image: 'https://pbs.twimg.com/profile_images/508840441647603714/B4MMCq_V.jpeg', deal: '2 Suit Jackets for $99', buyers: '2 Buyers needed!', gender: "male"  },
        { id: 4, company: 'Kimberleys', image: 'http://remuera.org.nz/media/k2/items/cache/233826a67be66a810b23a263230da62e_XL.jpg', deal: 'Buy 2 dresses get 2 free scarves', buyers: 'Only 1 buyer needed!', gender: "female" },
        { id: 5, company: 'Good as Gold', image: 'http://www.gagmagazine.com/wp-content/uploads/2014/06/cropped-GAGmagazine_Logo_Final_SocialMedia_WhiteOnBlack.jpg', deal: '3 Sweaters for $99"', buyers: '3 Buyers Needed!', gender: "male" },
        { id: 6, company: 'Witchery', image: 'https://res-2.cloudinary.com/wlabs/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/wlabs/image/upload/e47vzegi1dbeshkm0vyj.png', deal: '2 Pleat Sleeve Trench coats for $149', buyers: 'Only 1 buyer needed!', gender: "female"},
        { id: 7, company: 'Tarocash', image: 'http://dfojindalee.com.au/wp-content/uploads/2017/02/TO0271-DFOSuitPromoSocial_Insta1080x1080_logo.jpg', deal: '2 Short sleeve shirts for $90', buyers: '2 Buyers needed!', gender: "male"  },
        { id: 8, company: 'Glassons', image: 'https://res-5.cloudinary.com/wlabs/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/wlabs/image/upload/xgexemh2ymphjubo6k7f.png', deal: 'Blouses 2 for $45', buyers: 'Only 1 buyer needed!', gender: "female" },
        { id: 9, company: 'I Love Ugly', image: 'https://pbs.twimg.com/profile_images/695111528740057088/HtBmVwI2.jpg', deal: '4 Tees For $90', buyers: '4 Buyers needed!', gender: "male"  }
      ])
    })
}
