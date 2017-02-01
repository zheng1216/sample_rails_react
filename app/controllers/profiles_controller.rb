class ProfilesController < ApplicationController
  protect_from_forgery except: :index

  include ProfileFormatter

  DEFAULT_LIMIT = 30

  def index
    return head :bad_request unless self.respond_to?(fetch_kind, true)
    profiles = fetch_profiles
    profiles_response = profiles.map{|profile| to_response(profile) }
    respond_to do |format|
      format.json { render json: React.camelize_props(profiles_response) }
    end
  end

  def show
    profile = Profile.find(params[:id])
    redirect_to('/my_profile') if user_signed_in? && current_user.id == profile.user_id
    @profile_detail = to_response(profile)
    @profiles = following_user_profiles(profile.user_id)
    @posts = generate_post_response_with_profile(
      Post.where(user_id: profile.user_id).order(created_at: :desc).limit(DEFAULT_LIMIT),
    )
  end

  private

  def fetch_kind
    params.permit(:kind)[:kind].try(:to_sym)
  end

  def fetch_profiles
    __send__(fetch_kind)
  end

  def fetch_favorite_profiles
    Profile.order(followed_count: :desc).limit(DEFAULT_LIMIT)
  end

  def fetch_following_profiles
    user = User.find(params[:user_id])
    following_user_ids = Follow.where(following_user_id: user.id).limit(DEFAULT_LIMIT).pluck(:followed_user_id)
    Profile.where(user_id: following_user_ids).order(created_at: :desc)
  end

  def fetch_followed_profiles
    user = User.find(params[:user_id])
    following_user_ids = Follow.where(followed_user_id: user.id).limit(DEFAULT_LIMIT).pluck(:following_user_id)
    Profile.where(user_id: following_user_ids).order(created_at: :desc)
  end
end
