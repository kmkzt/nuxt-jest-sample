const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exposes Joi for convenience

const optionaryText = Joi.string().allow(null).allow('')

const userSchma = {
  id: Joi.string(),
  name: optionaryText,
  profile_image_url: Joi.string(),
  description: optionaryText,
  facebook_id: optionaryText,
  followees_count: Joi.number().integer(),
  followers_count: Joi.number().integer(),
  github_login_name: optionaryText,
  items_count: Joi.number().integer(),
  linkedin_id: optionaryText,
  location: optionaryText,
  organization: optionaryText,
  permanent_id: optionaryText,
  twitter_screen_name: optionaryText,
  website_url: optionaryText,
}

const itemListSchema = {
  rendered_body: Joi.string(),
  body: Joi.string(),
  coediting: Joi.boolean(),
  comments_count: Joi.number().integer(),
  created_at: Joi.string(),
  group: Joi.object().allow(null),
  id: Joi.string(),
  likes_count: Joi.number().integer(),
  private: Joi.boolean(),
  reactions_count: Joi.number().integer(),
  tags: Joi.array(),
  title: Joi.string(),
  updated_at: Joi.string(),
  url: Joi.string(),
  user: Joi.object().keys(userSchma),
  page_views_count: Joi.number().integer().allow(null),
}

it('Qiitaアイテム一覧のテスト', () => {
  frisby.get('https://qiita.com/api/v2/items')
    .expect('status', 200)
    .expect('jsonTypes', '*', itemListSchema)
})

it('Qiitaユーザー詳細情報API', async () => {
  // const qiitaItems = await frisby.get('https://qiita.com/api/v2/items')
  // const itemKey = Object.keys(qiitaItems).find((key) => {
  //   const user = qiitaItems[key]
  //   // console.log(id)
  //   console.log(user)
  //   // if (!user) return false
  //   // return user.id ? true : false
  // })
  // console.log(itemKey)
  frisby.get('https://qiita.com/api/v2/users/pscreator' )
    .expect('status', 200)
    .expect('json', '*', {
      postId: postId
    })
    .expect('jsonTypes', '*', userSchma)
})
