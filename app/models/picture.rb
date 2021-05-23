class Picture < ApplicationRecord
  has_many :characters
  has_many :players
end
