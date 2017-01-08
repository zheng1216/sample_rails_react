class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :user_name, format: { with: /^[a-zA-Z0-9_\.]*$/, :multiline => true }
  validates :user_name, :presence => true, :uniqueness => { :case_sensitive => false }

  has_many :follows, class_name: ::Follow, foreign_key: 'following_user_id', dependent: :delete_all
  has_many :posts, class_name: ::Post, foreign_key: 'user_id', dependent: :delete_all

  after_create :create_profile

  class << self
    def find_for_database_authentication(warden_conditions)
      conditions = warden_conditions.dup
      if login = conditions.delete(:login)
        where(conditions.to_h).where(["lower(user_name) = :value OR lower(email) = :value", { :value => login.downcase }]).first
      elsif conditions.has_key?(:user_name) || conditions.has_key?(:email)
        where(conditions.to_h).first
      end
    end
  end

  def login=(login)
    @login = login
  end

  def login
    @login || self.user_name || self.email
  end

  def create_profile
    Profile.create(name: self.user_name, user_id: self.id)
  end
end
