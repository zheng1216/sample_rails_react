Rails.application.routes.draw do
  devise_for :users
  resources :follows, only: [:create, :destroy], param: :followed_user_id
  resources :posts
  resources :feed, only: :index # 使ってない？
  resource :my_profile, only: [:show, :update, :edit]
  resources :profiles, only: [:index, :show]

  # 全体的にフラットなルーティングだが、以下のように関連するモデルはネストして書くとよい
  # resources :profiles, only: [:index, :show] do
  #   resource :follow
  # end

  # データ設計で user と profile を分けたため以下のように書くと違和感があるが、
  # モデルのリレーションを活かした実装をした場合は、以下のような routes の方がシンプルに書けるはず
  # resouces :users do
  #   resouce :follow
  # end

  root to: "home#index"
end
