class Character < ApplicationRecord
  validates :name, presence: true
  validates :x_coord, :y_coord, presence: true
  belongs_to :picture
end
