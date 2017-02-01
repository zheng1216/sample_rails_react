class MyProfilesController < ApplicationController
  include ProfileFormatter

  before_action :authenticate_user!, :find_my_profile

  DEFAULT_LIMIT = 30.freeze

  def show
    @profile_detail = to_response(@my_profile)
    @profiles = following_user_profiles(@my_profile.user_id)
    @posts = generate_response_with_profile(
      Post.where(user_id: @my_profile.user_id).order(created_at: :desc).limit(DEFAULT_LIMIT)
    )
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
    @my_profile = Profile.find_by!(user_id: current_user.id)
  end

  def my_profile_params
    params.require(:profile).permit(:photo, :name,:company_name, :address)
  end
end
