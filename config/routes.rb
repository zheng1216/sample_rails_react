Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [] do
    resources :posts, only: [:index, :show]
    resources :follows, only: :index
  end
  resources :profiles, only: :show
  resources :follows, only: [:create, :destroy], param: :followed_user_id
  resource :my_profile, only: [:show, :update, :edit]
  resources :posts, only: [:create, :destroy, :new]
  root to: 'home#index'
end
