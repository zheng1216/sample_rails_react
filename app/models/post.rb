class Post < ApplicationRecord
  validates :title, presence: true, length: { maximum: 200 }
  validates :content, presence: true, length: { maximum: 30000 }
  validates :user_id, presence: true

  belongs_to :user, class_name: 'User'
end
