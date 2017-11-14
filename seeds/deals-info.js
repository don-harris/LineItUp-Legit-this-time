exports.seed = function (knex, Promise) {
  return knex('deals').del()
    .then(function () {
      return knex('deals').insert([
        { id: 1, company: 'Hallensteins', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Hallenstein_brothers_organisation_logo.gif', deal: '3 Pairs of Jeans for $99', description: 'Mount Lyford Alpine Resort is a family-run ski resort in South Island, New Zealand. 146 kilometres by road from Christchurch, the resort also includes Mount Terako.' },
        { id: 2, company: 'Pagani', image: 'https://www.richmondmall.co.nz/assets/Uploads/pagani.jpg', deal: 'Buy one get your 2nd sweater 50% off', description: 'Turoa is a large skifield on the south western side of Mount Ruapehu, the highest mountain in the North Island of New Zealand, in Tongariro National Park.' },
        { id: 3, company: 'Barkers', image: 'https://pbs.twimg.com/profile_images/508840441647603714/B4MMCq_V.jpeg', deal: '2 Suit Jackets for $99', description: 'Ski deal offering facilities for all levels, including an extensive beginners deal with a cafe.' },
        { id: 4, company: 'Kimberleys', image: 'http://remuera.org.nz/media/k2/items/cache/233826a67be66a810b23a263230da62e_XL.jpg', deal: 'Buy 2 dresses get 2 free scarves', description: 'Treble Cone is the closest ski deal to Wanaka, New Zealand. Treble Cone is the largest ski deal in the South Island, boasting the longest vertical rise in the Queenstown Southern Lakes District. ' },
        { id: 5, company: 'Good as Gold', image: 'http://www.gagmagazine.com/wp-content/uploads/2014/06/cropped-GAGmagazine_Logo_Final_SocialMedia_WhiteOnBlack.jpg', deal: '3 Sweaters for $99"', description: 'Cardrona Alpine Resort is an alpine resort in New Zealands South Island. The ski field ranges from 1,260m to 1, 860m.The distribution of slopes is 25 beginner, 25% intermediate, 30% advanced and 20% expert.' },
        { id: 6, company: 'Witchery', image: 'https://res-2.cloudinary.com/wlabs/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/wlabs/image/upload/e47vzegi1dbeshkm0vyj.png', deal: '2 Pleat Sleeve Trench coats for $149', description: 'Ohau is a small commercial skifield in the foothills of New Zealands Southern Alps, near the boundary between the Otago and Canterbury regions, and close to the southwestern shore of the lake of the same name.' },
        { id: 7, company: 'Tarocash', image: 'http://dfojindalee.com.au/wp-content/uploads/2017/02/TO0271-DFOSuitPromoSocial_Insta1080x1080_logo.jpg', deal: '2 Short sleeve shirts for $90', description: 'Coronet Peak is a commercial skifield in Queenstown, New Zealand located seven kilometres west of Arrowtown, on the southern slopes of the 1,649 metre peak which shares its name.' },
        { id: 8, company: 'Glassons', image: 'https://res-5.cloudinary.com/wlabs/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/wlabs/image/upload/xgexemh2ymphjubo6k7f.png', deal: 'Blouses 2 for $45', description: 'Skiing & snowboarding mountain with varied trails & terrain parks, plus cafes & an on-mountain bar.' },
        { id: 9, company: 'I Love Ugly', image: 'https://pbs.twimg.com/profile_images/695111528740057088/HtBmVwI2.jpg', deal: '4 Tees For $90', description: 'Mount Cheeseman is a club snowfield in New Zealands South Island, near the town of Springfield, about an hour and a half from Christchurch.Situated in a south-east - facing basin, it features two T- bar lifts and one learner tow' }
      ])
    })
}
