class MyProfilesController < ApplicationController
  before_action :authenticate_user!, :find_my_profile

  DEFAULT_LIMIT = 30

  def show
    @following_users = Profile.where(user: current_user.following_users)
    @posts = Post.order(created_at: :desc).limit(DEFAULT_LIMIT)
  end

  def edit
  end

  def update
    respond_to do |format|
      if @my_profile.update(my_profile_params)
        format.html { redirect_to '/my_profile' }
      else
        format.html { render :edit }
      end
    end
  end

  private

  def find_my_profile
    @my_profile = current_user.profile
  end

  def my_profile_params
    params.require(:profile).permit(:photo, :name, :company_name, :address)
  end
end
