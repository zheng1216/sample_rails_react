class PostsController < ApplicationController
  protect_from_forgery except: [:index, :destroy]
  before_action :authenticate_user!, only: [:create, :destroy, :new]

  DEFAULT_POST_LIMIT = 30

  def index
    return head :bad_request unless fetch_kind.present?
    case fetch_kind
      when :fetch_recent_posts
        @posts = Post.all.limit(DEFAULT_POST_LIMIT)
      when :fetch_following_user_posts
        @posts = Post.where(user: current_user.following_users).order(created_at: :desc).limit(DEFAULT_POST_LIMIT)
      when :fetch_user_posts
        user = User.find(params[:user_id].to_i)
        @posts = user.posts.order(created_at: :desc).limit(DEFAULT_POST_LIMIT)
      else
        @posts = []
    end
  end

  def show
    user = User.find(params[:user_id])
    @post = user.posts.find(params[:id])
    @following_users = Profile.where(user: user.following_users)
  end

  def create
    @post = Post.create!(post_params.merge({ user_id: current_user.id }))
    redirect_to @post
  end

  def new
    @post = current_user.post.build
  end

  def destroy
    Post.find_by!(id: params[:id], user: current_user).destroy
    head :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def fetch_kind
    params.permit(:kind, :user_id)[:kind].try(:to_sym)
  end
end
