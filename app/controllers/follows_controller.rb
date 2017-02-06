class FollowsController < ApplicationController
  protect_from_forgery except: [:create, :destroy]
  # 認証の処理は、 only ではなく except で書いたほうが安全だと思います。
  before_action :authenticate_user!, only: [:create, :destroy]

  def create
    followed_user_id = params[:followed_user_id]
    Follow.create!(
      followed_user_id: followed_user_id,
      following_user_id: current_user.id,
    )

    head :created
  end

  def destroy
    Follow.find_by!(following_user_id: current_user.id, followed_user_id: params[:followed_user_id]).destroy
    head :ok
  end
end
