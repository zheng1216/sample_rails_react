class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles, id: :primary_key, limit: 8 do |t|
      t.timestamps
      t.string :name, null: false
      t.string :photo
      t.integer :user_id, limit: 8, uniq: true
      t.string :company_name
      t.string :address
      t.integer :following_count, limit: 8, default: 0
      t.integer :followed_count, limit: 8, default: 0
    end
  end
end
