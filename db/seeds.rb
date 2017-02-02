# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
(1..3).each do |n|
  user = User.new(email: "hoge#{n}@hoge.com", user_name: "hoge#{n}", password: 'hogehoge')
  user.save!
  user.posts.create(
    title: "hoge#{n}の初投稿",
    content: "hoge#{n}の初投稿でござる。"
  )
  followed_user_id = n >= 3 ? 1 : n + 1
  user.follows.create(followed_user_id: followed_user_id)
end
