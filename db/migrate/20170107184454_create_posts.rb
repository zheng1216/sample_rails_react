class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.timestamps
      t.integer :user_id, limit: 8, null: false
      t.string :title, null: false
      t.text :content, null: false
    end
    execute("ALTER TABLE `posts` CHANGE `id` `id` BIGINT AUTO_INCREMENT;")
  end
end
