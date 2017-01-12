Rails.application.routes.draw do
  devise_for :users
  resources :follows
  resources :posts
  resources :feed, only: :index
  resource :my_profile, only: [:show, :update]

  root to: "home#index"
end
