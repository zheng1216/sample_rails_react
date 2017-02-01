module ProfileFormatter
  extend ActiveSupport::Concern

  ProfileResponseStruct = Struct.new(
    :id,
    :created_at,
    :updated_at,
    :name,
    :photo_url,
    :user_id,
    :company_name,
    :address,
    :following_count,
    :followed_count,
    :followed,
    :is_me,
  )

  def generate_response_with_profile(targets)
    user_ids = targets.map(&:user_id)
    profiles = ::Profile.where(user_id: user_ids)
    targets.map do |target|
      target_hash = target.as_json
      target_hash['created_at'] = target.created_at.strftime('%Y年%m月%d日 %H:%M')
      target_hash.merge(profile: to_response(profiles.find { |profile| profile.user_id == target.user_id }))
    end
  end

  def to_response(profile)
    profile_hash = profile.attributes
    profile_hash['photo'] = profile.photo.to_s.presence || Profile::DEFAULT_PHOTO
    return ProfileResponseStruct.new(*profile_hash.values).as_json unless user_signed_in?

    followed = current_user.follows.exists?(followed_user_id: profile.user_id)
    is_me = current_user.id == profile.user_id
    profile_hash.merge!({followed: followed, is_me: is_me})
    ProfileResponseStruct.new(*profile_hash.values).as_json
  end

  def following_user_profiles(user_id)
    following_user_ids = Follow.where(following_user_id: user_id).pluck(:followed_user_id)
    return [] if following_user_ids.blank?
    Profile.where(user_id: following_user_ids).map { |p| to_response(p) }
  end
end
