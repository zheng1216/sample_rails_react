class PostsController < ApplicationController
  protect_from_forgery except: [:index, :destroy]
  before_action :authenticate_user!, only: [:create, :destroy, :new]

  include ProfileFormatter

  DEFAULT_POST_LIMIT = 30

  def index
    return head :bad_request unless fetch_kind.present? && self.respond_to?(fetch_kind, true)
    posts = fetch_posts
    respond_to do |format|
      format.json { render json: React.camelize_props(generate_post_response_with_profile(posts)) }
    end
  end

  def show
    post = Post.find(params[:id])
    @post_detail = generate_post_response_with_profile([post]).first
    @profiles = following_user_profiles(post.user_id)
  end

  def create
    @post = Post.create!(post_params.merge({ user_id: current_user.id }))
    redirect_to @post
  end

  def new
    @post = Post.new
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
    params.permit(:kind)[:kind].try(:to_sym)
  end

  def fetch_posts
    __send__(fetch_kind)
  end

  def fetch_recent_posts
    Post.all.limit(DEFAULT_POST_LIMIT)
  end

  def fetch_following_user_posts
    return [] unless user_signed_in?
    followed_user_ids = current_user.follows.pluck(:followed_user_id)
    return [] if followed_user_ids.blank?
    Post.where(user_id: followed_user_ids).order(created_at: :desc).limit(DEFAULT_POST_LIMIT)
  end

  def fetch_user_posts
    Post.where(user_id: params[:user_id].to_i).order(created_at: :desc).limit(DEFAULT_POST_LIMIT)
  end
end
