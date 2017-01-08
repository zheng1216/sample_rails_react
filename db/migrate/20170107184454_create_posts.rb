class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.timestamps
      t.integer :user_id, limit: 8, uniq: true
      t.string :title
      t.text :content
    end
    execute("ALTER TABLE `posts` CHANGE `id` `id` BIGINT AUTO_INCREMENT;")
  end
end
