class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         authentication_keys: [:login]

  validates :user_name, format: { with: /^[a-zA-Z0-9_\.]*$/, multiline: true }
  validates :user_name, presence: true, uniqueness: true

  has_many :follows, class_name: ::Follow, foreign_key: 'following_user_id', dependent: :delete_all
  has_many :followers, class_name: ::Follow, foreign_key: 'followed_user_id', dependent: :delete_all
  has_many :posts, class_name: ::Post, foreign_key: 'user_id', dependent: :delete_all
  has_one  :profile, class_name: ::Profile, foreign_key: 'user_id', dependent: :destroy

  after_create :create_profile

  attr_accessor :login

  class << self
    def find_for_database_authentication(warden_conditions)
      conditions = warden_conditions.dup
      if login = conditions.delete(:login)
        where(conditions.to_h).where(['lower(user_name) = :value OR lower(email) = :value', { value: login.downcase }]).first
      elsif conditions.has_key?(:user_name) || conditions.has_key?(:email)
        where(conditions.to_h).first
      end
    end
  end

  def create_profile
    Profile.create(name: self.user_name, user_id: self.id)
  end
end
