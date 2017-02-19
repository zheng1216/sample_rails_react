class FollowsController < ApplicationController
  protect_from_forgery except: [:create, :destroy]
  before_action :authenticate_user!

  def index
    user = User.find(params[:user_id])
    case fetch_kind
      when :fetch_following_profiles
        @profiles = Profile.where(user: user.following_users)
      when :fetch_followed_profiles
        @profiles = Profile.where(user: user.followed_users)
      else
        @profiles = []
    end
  end

  def create
    followed_user_id = params[:followed_user_id]
    current_user.follows.create!(followed_user_id: followed_user_id)
    head :created
  end

  def destroy
    current_user.follows.find_by!(followed_user_id: params[:followed_user_id]).destroy
    head :ok
  end

  private

  def fetch_kind
    params.permit(:kind, :user_id)[:kind].try(:to_sym)
  end
end
