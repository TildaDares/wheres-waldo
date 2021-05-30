class Character < ApplicationRecord
  validates :name, :x_coord, :y_coord, presence: true
  belongs_to :picture
end
