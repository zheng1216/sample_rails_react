class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.timestamps
      t.integer :following_user_id, limit: 8
      t.integer :followed_user_id, limit: 8
    end
    add_index :follows, [:following_user_id, :followed_user_id], unique: true
    execute("ALTER TABLE `follows` CHANGE `id` `id` BIGINT AUTO_INCREMENT;")
  end
end
