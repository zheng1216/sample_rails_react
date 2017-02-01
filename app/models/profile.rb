class Profile < ApplicationRecord
  mount_uploader :photo, ::ImageUploader
  validates :name, length: { maximum: 200 }
  validates :company_name, length: { maximum: 200 }
  validates :address, length: { maximum: 200 }

  DEFAULT_PHOTO = '/assets/profile/default_profile_photo.png'.freeze

end
