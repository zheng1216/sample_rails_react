class Follow < ApplicationRecord
  after_create :increment_profile_follow_counts
  after_destroy :decrement_profile_follow_counts

  validates :following_user_id, presence: true, uniqueness: {scope: :followed_user_id}
  validates :followed_user_id, presence: true

  belongs_to :following_user, class_name: ::User, foreign_key: :followed_user_id
  belongs_to :followed_user, class_name: ::User, foreign_key: :following_user_id

  def increment_profile_follow_counts
    Profile.find_by(user_id: self.following_user_id).try(:increment!, :following_count)
    Profile.find_by(user_id: self.followed_user_id).try(:increment!, :followed_count)
  end

  def decrement_profile_follow_counts
    Profile.find_by(user_id: self.following_user_id).try(:decrement!, :following_count)
    Profile.find_by(user_id: self.followed_user_id).try(:decrement!, :followed_count)
  end
end
