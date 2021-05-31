class Character < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :x_coord, :y_coord, presence: true
  belongs_to :picture
end
