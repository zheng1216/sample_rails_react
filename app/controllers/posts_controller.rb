class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :delete]

  def show

  end

  def create

  end

  def delete

  end
end
