class FeedController < ApplicationController
  DEFAULT_FEED_LIMIT = 30.freeze

  include ProfileFormatter

  def index
    posts = if context.present?
              return head :not_found unless user_signed_in?
              return head :bad_request unless self.respond_to?(context, true)
              __send__(context)
            else
              Post.all.limit(DEFAULT_FEED_LIMIT)
            end
    respond_to do |format|
      format.json { render json: generate_response_with_profile(posts) }
    end
  end

  private

  def context
    @context ||= params.permit(:context)[:context].try(:to_sym)
  end

  def follow
    followed_user_ids = current_user.follows.pluck(:followed_user_id)
    return [] if followed_user_ids.blank?
    Post.where(user_id: followed_user_ids).order(:desc).limit(DEFAULT_FEED_LIMIT)
  end
end
