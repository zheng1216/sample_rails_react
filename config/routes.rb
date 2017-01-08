Rails.application.routes.draw do
  devise_for :users
  resources :follows
  resources :posts
  resources :feed, only: :index
  resources :my_profile, only: [:create, :show, :update]

  root to: "home#index"
end
