class HomeController < ApplicationController
  include ProfileFormatter

  DEFAULT_LIMIT = 30.freeze

  def index
    redirect_to(my_profile_path) if user_signed_in?
    @user = User.new
    @posts = generate_response_with_profile(Post.order(created_at: :desc).limit(DEFAULT_LIMIT))
    @favorite_profiles = Profile.order(followed_count: :desc).limit(DEFAULT_LIMIT).map{ |profile| to_response(profile)}
  end
end
