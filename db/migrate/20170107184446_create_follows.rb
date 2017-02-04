class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows, id: :primary_key, limit: 8 do |t|
      t.timestamps
      t.integer :following_user_id, null: false, limit: 8
      t.integer :followed_user_id, null: false, limit: 8
    end
    add_index :follows, [:following_user_id, :followed_user_id], unique: true
  end
end
