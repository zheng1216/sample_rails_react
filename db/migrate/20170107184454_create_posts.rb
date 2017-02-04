class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts, id: :primary_key, limit: 8 do |t|
      t.timestamps
      t.integer :user_id, limit: 8, null: false
      t.string :title, null: false
      t.text :content, null: false
    end
  end
end
