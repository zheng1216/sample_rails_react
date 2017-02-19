class ProfilesController < ApplicationController
  protect_from_forgery except: :index

  DEFAULT_LIMIT = 30

  def show
    @profile = Profile.find(params[:id])
    redirect_to('/my_profile') if user_signed_in? && current_user.id == @profile.user_id
    @profiles = Profile.where(user: @profile.user.following_users)
    @posts = @profile.user.posts.order(created_at: :desc).limit(DEFAULT_LIMIT)
  end

  private

  def fetch_kind
    params.permit(:kind)[:kind].try(:to_sym)
  end
end
