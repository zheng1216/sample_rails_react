class HomeController < ApplicationController

  DEFAULT_LIMIT = 30

  def index
    redirect_to(my_profile_path) if user_signed_in?
    @user = User.new
    @posts = Post.order(created_at: :desc).limit(DEFAULT_LIMIT)
    @favorite_profiles = Profile.order(followed_count: :desc).limit(DEFAULT_LIMIT)
  end
end
