class Profile < ApplicationRecord
  mount_uploader :photo, ::ImageUploader
  # profileのレスポンスフォーマット
  # {
  #   user_id: {
  #     name: hoge,
  #     photo: http://hoge,
  #     is_me: true/false,
  #     followed: true/false,
  #   }
  # }

  class << self
    def fetch(from: acces_user_id, for: target_user_ids)

    end

    def to_response_for(user_ids)
      profiles = self.where(user_id: user_ids)
      profiles.each_with_object({}) do |profile, result|
        result[profile.user_id] = profile
      end
    end
  end
end
