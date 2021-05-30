class Picture < ApplicationRecord
  validates :name, presence: true
  has_many :characters
  has_many :players
end
