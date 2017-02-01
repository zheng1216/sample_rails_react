Rails.application.routes.draw do
  devise_for :users
  resources :follows, only: [:create, :destroy], param: :followed_user_id
  resources :posts
  resources :feed, only: :index
  resource :my_profile, only: [:show, :update, :edit]
  resources :profiles, only: [:index, :show]

  root to: "home#index"
end
